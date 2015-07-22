/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*
* See following wiki page for instructions on how to regenerate:
*   https://vsowiki.com/index.php?title=Rest_Client_Generation
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

/// <reference path="./definitions/node.d.ts"/>
/// <reference path="./definitions/Q.d.ts"/>

import Q = require('q');
import restm = require('./restclient');
import httpm = require('./httpclient');
import vsom = require('./VsoClient');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import FileContainerInterfaces = require("./interfaces/FileContainerInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IFileContainerApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    createItem(containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem) => void): void;
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number, scope: string, onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]) => void): void;
    deleteItem(containerId: number, itemPath: string, scope: string, onResult: (err: any, statusCode: number) => void): void;
    getContainers(scope: string, artifactUris: string, onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]) => void): void;
    getItems(containerId: number, scope: string, itemPath: string, metadata: boolean, format: string, downloadFileName: string, includeDownloadTickets: boolean, onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => void): void;
}

export interface IQFileContainerApi {
    connect(): Q.Promise<void>;
    
    createItem(containerId: number, itemPath: string,  scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem>;
    createItems(items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, containerId: number,  scope?: string): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
    getContainers(scope?: string,  artifactUris?: string): Q.Promise<FileContainerInterfaces.FileContainer[]>;
    getItems(containerId: number, scope?: string, itemPath?: string, metadata?: boolean, format?: string, downloadFileName?: string,  includeDownloadTickets?: boolean): Q.Promise<FileContainerInterfaces.FileContainerItem[]>;
}

export class FileContainerApi implements IFileContainerApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        this.baseUrl = baseUrl;
        this.httpClient = new httpm.HttpClient('node-FileContainer-api', handlers);
        this.restClient = new restm.RestClient(this.httpClient);
        this.vsoClient = new vsom.VsoClient(baseUrl, this.restClient);
    }

    setUserAgent(userAgent: string) {
        this.userAgent = userAgent;
        this.httpClient.userAgent = userAgent;
    }
    
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void {
        this.restClient.getJson(this.vsoClient.resolveUrl('/_apis/connectionData'), "", null, onResult);
    }

    /**
     * Creates the specified item in the container referenced container.
     * 
     * @param {number} containerId
     * @param {string} itemPath
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param onResult callback function with the resulting FileContainerInterfaces.FileContainerItem
     */
    public createItem(
        containerId: number,
        itemPath: string,
        scope: string,
        onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem) => void
        ): void {

        var routeValues = {
            containerId: containerId
        };

        var queryValues = {
            itemPath: itemPath,
            scope: scope
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: false };
            
            this.restClient.replace(path, apiVersion, null, serializationData, onResult);
        });
    }

    /**
     * Creates the specified items in in the referenced container.
     * 
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>} items
     * @param {number} containerId
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param onResult callback function with the resulting FileContainerInterfaces.FileContainerItem[]
     */
    public createItems(
        items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>,
        containerId: number,
        scope: string,
        onResult: (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]) => void
        ): void {

        var routeValues = {
            containerId: containerId
        };

        var queryValues = {
            scope: scope
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.VssJsonCollectionWrapperV, responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
            
            this.restClient.create(path, apiVersion, items, serializationData, onResult);
        });
    }

    /**
     * Deletes the specified items in a container.
     * 
     * @param {number} containerId - Container Id.
     * @param {string} itemPath - Path to delete.
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param onResult callback function
     */
    public deleteItem(
        containerId: number,
        itemPath: string,
        scope: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            containerId: containerId
        };

        var queryValues = {
            itemPath: itemPath,
            scope: scope
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
     * 
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} artifactUris
     * @param onResult callback function with the resulting FileContainerInterfaces.FileContainer[]
     */
    public getContainers(
        scope: string,
        artifactUris: string,
        onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]) => void
        ): void {

        var routeValues = {
        };

        var queryValues = {
            scope: scope,
            artifactUris: artifactUris
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainer, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Gets the specified file container object in a format dependent upon the given parameters or HTTP Accept request header
     * 
     * @param {number} containerId - The requested container Id
     * @param {string} scope - A guid representing the scope of the container. This is often the project id.
     * @param {string} itemPath - The path to the item of interest
     * @param {boolean} metadata - If true, this overrides any specified format parameter or HTTP Accept request header to provide non-recursive information for the given itemPath
     * @param {string} format - If specified, this overrides the HTTP Accept request header to return either 'json' or 'zip'.  If $format is specified, then api-version should also be specified as a query parameter.
     * @param {string} downloadFileName - If specified and returning other than JSON format, then this download name will be used (else defaults to itemPath)
     * @param {boolean} includeDownloadTickets
     * @param onResult callback function with the resulting FileContainerInterfaces.FileContainerItem[]
     */
    public getItems(
        containerId: number,
        scope: string,
        itemPath: string,
        metadata: boolean,
        format: string,
        downloadFileName: string,
        includeDownloadTickets: boolean,
        onResult: (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => void
        ): void {

        var routeValues = {
            containerId: containerId
        };

        var queryValues = {
            scope: scope,
            itemPath: itemPath,
            metadata: metadata,
            format: format,
            downloadFileName: downloadFileName,
            includeDownloadTickets: includeDownloadTickets
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "Container", "e4f5c81e-e250-447b-9fef-bd48471bea5e", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: FileContainerInterfaces.TypeInfo.FileContainerItem, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

}

export class QFileContainerApi implements IQFileContainerApi {
    FileContainerApi: IFileContainerApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        this.FileContainerApi = new FileContainerApi(baseUrl, handlers);
    }

    public connect(): Q.Promise<any> {
        var defer = Q.defer();

        this.FileContainerApi.connect((err: any, statusCode: number, obj: any) => {
            if (err) {
                err.statusCode = statusCode;
                defer.reject(err);
            }
            else {
                defer.resolve(obj);
            }
        });

        return defer.promise;       
    }

    
    /**
    * Creates the specified item in the container referenced container.
    * 
    * @param {number} containerId
    * @param {string} itemPath
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    */
    public createItem(
        containerId: number, 
        itemPath: string, 
        scope?: string
        ): Q.Promise<FileContainerInterfaces.FileContainerItem> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainerItem>();

        this.FileContainerApi.createItem(containerId, itemPath, scope, (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Container);
            }
        });

        return <Q.Promise<FileContainerInterfaces.FileContainerItem>>deferred.promise;
    }
    
    /**
    * Creates the specified items in in the referenced container.
    * 
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>} items
    * @param {number} containerId
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    */
    public createItems(
        items: VSSInterfaces.VssJsonCollectionWrapperV<FileContainerInterfaces.FileContainerItem[]>, 
        containerId: number, 
        scope?: string
        ): Q.Promise<FileContainerInterfaces.FileContainerItem[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainerItem[]>();

        this.FileContainerApi.createItems(items, containerId, scope, (err: any, statusCode: number, Container: FileContainerInterfaces.FileContainerItem[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Container);
            }
        });

        return <Q.Promise<FileContainerInterfaces.FileContainerItem[]>>deferred.promise;
    }
    
    /**
    * Gets containers filtered by a comma separated list of artifact uris within the same scope, if not specified returns all containers
    * 
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    * @param {string} artifactUris
    */
    public getContainers(
        scope?: string, 
        artifactUris?: string
        ): Q.Promise<FileContainerInterfaces.FileContainer[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainer[]>();

        this.FileContainerApi.getContainers(scope, artifactUris, (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainer[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Containers);
            }
        });

        return <Q.Promise<FileContainerInterfaces.FileContainer[]>>deferred.promise;
    }
    
    /**
    * Gets the specified file container object in a format dependent upon the given parameters or HTTP Accept request header
    * 
    * @param {number} containerId - The requested container Id
    * @param {string} scope - A guid representing the scope of the container. This is often the project id.
    * @param {string} itemPath - The path to the item of interest
    * @param {boolean} metadata - If true, this overrides any specified format parameter or HTTP Accept request header to provide non-recursive information for the given itemPath
    * @param {string} format - If specified, this overrides the HTTP Accept request header to return either 'json' or 'zip'.  If $format is specified, then api-version should also be specified as a query parameter.
    * @param {string} downloadFileName - If specified and returning other than JSON format, then this download name will be used (else defaults to itemPath)
    * @param {boolean} includeDownloadTickets
    */
    public getItems(
        containerId: number, 
        scope?: string, 
        itemPath?: string, 
        metadata?: boolean, 
        format?: string, 
        downloadFileName?: string, 
        includeDownloadTickets?: boolean
        ): Q.Promise<FileContainerInterfaces.FileContainerItem[]> {
    
        var deferred = Q.defer<FileContainerInterfaces.FileContainerItem[]>();

        this.FileContainerApi.getItems(containerId, scope, itemPath, metadata, format, downloadFileName, includeDownloadTickets, (err: any, statusCode: number, Containers: FileContainerInterfaces.FileContainerItem[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Containers);
            }
        });

        return <Q.Promise<FileContainerInterfaces.FileContainerItem[]>>deferred.promise;
    }
    
}
