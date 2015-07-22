// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

/// <reference path="./definitions/node.d.ts"/>

import url = require("url");

import http = require("http");
import https = require("https");
import ifm = require('./interfaces/common/VsoBaseInterfaces');

http.globalAgent.maxSockets = 100;

export class HttpClient implements ifm.IHttpClient {
    userAgent: string;
    handlers: ifm.IRequestHandler[];
    socketTimeout: number;

    constructor(userAgent: string, handlers?: ifm.IRequestHandler[], socketTimeout?: number) {
        this.userAgent = userAgent;
        this.handlers = handlers;
        if (socketTimeout) {
            this.socketTimeout = socketTimeout;
        } else {
            // Default 3 minutes
            this.socketTimeout = 3 * 60000;
        }
    }

    get(verb: string, requestUrl: string, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);
        this.request(options.protocol, options.options, null, onResult);
    }

    // POST, PATCH, PUT
    send(verb: string, requestUrl: string, objs: any, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);
        this.request(options.protocol, options.options, objs, onResult);
    }

    sendFile(verb: string, requestUrl: string, content: NodeJS.ReadableStream, headers: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void {
        var options = this._getOptions(verb, requestUrl, headers);

        var req = options.protocol.request(options.options, function (res) {
            var output = '';

            res.on('data', function (chunk) {
                output += chunk;
            });

            res.on('end', function () {
                // res has statusCode and headers
                onResult(null, res, output);
            });
        });

        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            onResult(err, null, null);
        });

        content.on('close', function () {
            req.end();
        });

        content.pipe(req);
    }

    getStream(requestUrl: string, apiVersion: string, type: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void {
        var headers = {};
        headers['Accept'] = this.makeAcceptHeader(type, apiVersion);
        var options = this._getOptions('GET', requestUrl, headers);

        var req = options.protocol.request(options.options, function (res) {
            onResult(null, res.statusCode, res);
        });

        req.on('error', function (err) {
            onResult(err, err.statusCode, null);
        });

        req.end();
    }

    makeAcceptHeader(type: string, apiVersion: string): string {
        return type + (apiVersion ? (";api-version=" + apiVersion) : "");
    }

    _getOptions(method: string, requestUrl: string, headers: any): any {

        var parsedUrl: url.Url = url.parse(requestUrl);
        var usingSsl = parsedUrl.protocol === 'https:';
        var prot: any = usingSsl ? https : http;
        var defaultPort = usingSsl ? 443 : 80;

        var proxyUrl: url.Url;
        if (process.env.HTTP_PROXY) {
            proxyUrl = url.parse(process.env.HTTP_PROXY);
            prot = proxyUrl.protocol === 'https:' ? https: http;
        }

        var options = { headers: {}};

        var useProxy = proxyUrl && proxyUrl.hostname;
        if (useProxy) {
            // TODO: support proxy-authorization
            options = {
                host: proxyUrl.hostname,
                port: proxyUrl.port || 8888,
                path: requestUrl,
                method: method,
                headers: {}
            }
        }
        else {
            options = {
                host: parsedUrl.hostname,
                port: parsedUrl.port || defaultPort,
                path: (parsedUrl.pathname || '') + (parsedUrl.search || ''),
                method: method,
                headers: {}
            }            
        }


        options.headers = headers;

        if (useProxy) {
            options.headers['Host'] = parsedUrl.hostname;
        }

        //options.headers["Accept"] = contentType;
        options.headers["User-Agent"] = this.userAgent;

        if (this.handlers) {
            this.handlers.forEach((handler) => {
                handler.prepareRequest(options);
            });
        }

        return {
            protocol: prot,
            options: options,
        };
    }

    request(protocol: any, options: any, objs: any, onResult: (err: any, res: http.ClientResponse, contents: string) => void): void {
        var reqData;
        var socket;

        if (objs) {
            reqData = JSON.stringify(objs, null, 2);
            options.headers["Content-Length"] = Buffer.byteLength(reqData, 'utf8');
        }

        var req = protocol.request(options, function (res) {
            var output = '';
            res.setEncoding('utf8');

            res.on('data', function (chunk) {
                output += chunk;
            });

            res.on('end', function () {
                // res has statusCode and headers
                onResult(null, res, output);
            });
        });

        req.on('socket', function(sock) {
            socket = sock;
        });

        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this.socketTimeout, function() {
            if (socket) {
                socket.end();
            }
        });

        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            onResult(err, null, null);
        });

        if (reqData) {
            req.write(reqData, 'utf8');
        }

        req.end();
    }
}
