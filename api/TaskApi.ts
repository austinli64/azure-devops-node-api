/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.

/// <reference path="../node/node.d.ts"/>
/// <reference path="../q/Q.d.ts"/>

import Q = require('q');
import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TaskAgentInterfaces = require("./interfaces/TaskAgentInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ITaskApi extends basem.ClientApiBase {
    getPlanAttachments(scopeIdentifier: string, hubName: string, planId: string, type: string, onResult: (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => void): void;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, name: string, onResult: (err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment) => void): void;
    getAttachments(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string, onResult: (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => void): void;
    postEvent(eventData: TaskAgentInterfaces.JobEvent, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number) => void): void;
    postLines(lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, onResult: (err: any, statusCode: number) => void): void;
    appendLog(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, logId: number, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void): void;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void): void;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine: number, endLine: number, onResult: (err: any, statusCode: number, logs: string[]) => void): void;
    getLogs(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void): void;
    getPlan(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => void): void;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, onResult: (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => void): void;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => void): void;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void): void;
    deleteTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, onResult: (err: any, statusCode: number) => void): void;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId: number, includeRecords: boolean, onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void): void;
    getTimelines(scopeIdentifier: string, hubName: string, planId: string, onResult: (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => void): void;
}

export interface IQTaskApi extends basem.QClientApiBase {
    
    getPlanAttachments(scopeIdentifier: string, hubName: string, planId: string,  type: string): Q.Promise<TaskAgentInterfaces.TaskAttachment[]>;
    createAttachment(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string, type: string,  name: string): Q.Promise<TaskAgentInterfaces.TaskAttachment>;
    getAttachments(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, recordId: string,  type: string): Q.Promise<TaskAgentInterfaces.TaskAttachment[]>;
    appendLog(customHeaders: any, contentStream: NodeJS.ReadableStream, scopeIdentifier: string, hubName: string, planId: string,  logId: number): Q.Promise<TaskAgentInterfaces.TaskLog>;
    createLog(log: TaskAgentInterfaces.TaskLog, scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.TaskLog>;
    getLog(scopeIdentifier: string, hubName: string, planId: string, logId: number, startLine?: number,  endLine?: number): Q.Promise<string[]>;
    getLogs(scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.TaskLog[]>;
    getPlan(scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>;
    getRecords(scopeIdentifier: string, hubName: string, planId: string, timelineId: string,  changeId?: number): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    updateRecords(records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, scopeIdentifier: string, hubName: string, planId: string,  timelineId: string): Q.Promise<TaskAgentInterfaces.TimelineRecord[]>;
    createTimeline(timeline: TaskAgentInterfaces.Timeline, scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.Timeline>;
    getTimeline(scopeIdentifier: string, hubName: string, planId: string, timelineId: string, changeId?: number,  includeRecords?: boolean): Q.Promise<TaskAgentInterfaces.Timeline>;
    getTimelines(scopeIdentifier: string, hubName: string,  planId: string): Q.Promise<TaskAgentInterfaces.Timeline[]>;
}

export class TaskApi extends basem.ClientApiBase implements ITaskApi {

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Task-api');
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} type
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAttachment[]
     */
    public getPlanAttachments(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        type: string,
        onResult: (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        var queryValues: any = {
            type: type,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "eb55e5d6-2f30-4295-b5ed-38da50b1fc52", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param {string} name
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAttachment
     */
    public createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        name: string,
        onResult: (err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId
        };

        var queryValues: any = {
            type: type,
            name: name,
        };
        
        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7898f959-9cdf-4096-b29e-7f293031629e", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: false };
            
            this.restClient.uploadStream('PUT', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param {string} type
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskAttachment[]
     */
    public getAttachments(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        type: string,
        onResult: (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId
        };

        var queryValues: any = {
            type: type,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "7898f959-9cdf-4096-b29e-7f293031629e", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskAttachment, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.JobEvent} eventData
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function
     */
    public postEvent(
        eventData: TaskAgentInterfaces.JobEvent,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "557624af-b29e-4c20-8ab0-0399d2204f3f", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.JobEvent, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, eventData, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<string[]>} lines
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {string} recordId
     * @param onResult callback function
     */
    public postLines(
        lines: VSSInterfaces.VssJsonCollectionWrapperV<string[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        recordId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId,
            recordId: recordId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "858983e4-19bd-4c5e-864c-507b59b58b12", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.VssJsonCollectionWrapperV, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, lines, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {NodeJS.ReadableStream} contentStream
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskLog
     */
    public appendLog(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number,
        onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            logId: logId
        };

        customHeaders = customHeaders || {};
        customHeaders["Content-Type"] = "application/octet-stream";

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: false };
            
            this.restClient.uploadStream('POST', url, apiVersion, contentStream, customHeaders, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.TaskLog} log
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskLog
     */
    public createLog(
        log: TaskAgentInterfaces.TaskLog,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, log, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {number} logId
     * @param {number} startLine
     * @param {number} endLine
     * @param onResult callback function with the resulting string[]
     */
    public getLog(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        logId: number,
        startLine: number,
        endLine: number,
        onResult: (err: any, statusCode: number, logs: string[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            logId: logId
        };

        var queryValues: any = {
            startLine: startLine,
            endLine: endLine,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskLog[]
     */
    public getLogs(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "46f5667d-263a-4684-91b1-dff7fdcf64e2", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskLog, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TaskOrchestrationPlan
     */
    public getPlan(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "5cecd946-d704-471e-a45f-3b4064fcfaba", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TaskOrchestrationPlan, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TimelineRecord[]
     */
    public getRecords(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        changeId: number,
        onResult: (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        var queryValues: any = {
            changeId: changeId,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "8893bc5b-35b2-4be7-83cb-99e683551db4", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TimelineRecord, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param onResult callback function with the resulting TaskAgentInterfaces.TimelineRecord[]
     */
    public updateRecords(
        records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        onResult: (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "8893bc5b-35b2-4be7-83cb-99e683551db4", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.VssJsonCollectionWrapperV, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.TimelineRecord, responseIsCollection: true };
            
            this.restClient.update(url, apiVersion, records, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {TaskAgentInterfaces.Timeline} timeline
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.Timeline
     */
    public createTimeline(
        timeline: TaskAgentInterfaces.Timeline,
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, timeline, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param onResult callback function
     */
    public deleteTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param {string} timelineId
     * @param {number} changeId
     * @param {boolean} includeRecords
     * @param onResult callback function with the resulting TaskAgentInterfaces.Timeline
     */
    public getTimeline(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        timelineId: string,
        changeId: number,
        includeRecords: boolean,
        onResult: (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId,
            timelineId: timelineId
        };

        var queryValues: any = {
            changeId: changeId,
            includeRecords: includeRecords,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} scopeIdentifier - The project GUID to scope the request
     * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
     * @param {string} planId
     * @param onResult callback function with the resulting TaskAgentInterfaces.Timeline[]
     */
    public getTimelines(
        scopeIdentifier: string,
        hubName: string,
        planId: string,
        onResult: (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => void
        ): void {

        var routeValues: any = {
            scopeIdentifier: scopeIdentifier,
            hubName: hubName,
            planId: planId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "distributedtask", "83597576-cc2c-453c-bea6-2882ae6a1653", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: TaskAgentInterfaces.TypeInfo.Timeline, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QTaskApi extends basem.QClientApiBase implements IQTaskApi {
    
    api: TaskApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, TaskApi);
    }

    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} type
    */
    public getPlanAttachments(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        type: string
        ): Q.Promise<TaskAgentInterfaces.TaskAttachment[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAttachment[]>();

        this.api.getPlanAttachments(scopeIdentifier, hubName, planId, type, (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachments);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAttachment[]>>deferred.promise;
    }
    
    /**
    * @param {NodeJS.ReadableStream} contentStream
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    * @param {string} name
    */
    public createAttachment(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string, 
        recordId: string, 
        type: string, 
        name: string
        ): Q.Promise<TaskAgentInterfaces.TaskAttachment> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAttachment>();

        this.api.createAttachment(customHeaders, contentStream, scopeIdentifier, hubName, planId, timelineId, recordId, type, name, (err: any, statusCode: number, attachment: TaskAgentInterfaces.TaskAttachment) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachment);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAttachment>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {string} recordId
    * @param {string} type
    */
    public getAttachments(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string, 
        recordId: string, 
        type: string
        ): Q.Promise<TaskAgentInterfaces.TaskAttachment[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskAttachment[]>();

        this.api.getAttachments(scopeIdentifier, hubName, planId, timelineId, recordId, type, (err: any, statusCode: number, attachments: TaskAgentInterfaces.TaskAttachment[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(attachments);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskAttachment[]>>deferred.promise;
    }
    
    /**
    * @param {NodeJS.ReadableStream} contentStream
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    */
    public appendLog(
        customHeaders: any,
        contentStream: NodeJS.ReadableStream, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        logId: number
        ): Q.Promise<TaskAgentInterfaces.TaskLog> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskLog>();

        this.api.appendLog(customHeaders, contentStream, scopeIdentifier, hubName, planId, logId, (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskLog>>deferred.promise;
    }
    
    /**
    * @param {TaskAgentInterfaces.TaskLog} log
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public createLog(
        log: TaskAgentInterfaces.TaskLog, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.TaskLog> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskLog>();

        this.api.createLog(log, scopeIdentifier, hubName, planId, (err: any, statusCode: number, log: TaskAgentInterfaces.TaskLog) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(log);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskLog>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {number} logId
    * @param {number} startLine
    * @param {number} endLine
    */
    public getLog(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        logId: number, 
        startLine?: number, 
        endLine?: number
        ): Q.Promise<string[]> {
    
        var deferred = Q.defer<string[]>();

        this.api.getLog(scopeIdentifier, hubName, planId, logId, startLine, endLine, (err: any, statusCode: number, logs: string[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        });

        return <Q.Promise<string[]>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public getLogs(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.TaskLog[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskLog[]>();

        this.api.getLogs(scopeIdentifier, hubName, planId, (err: any, statusCode: number, logs: TaskAgentInterfaces.TaskLog[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(logs);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskLog[]>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public getPlan(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TaskOrchestrationPlan>();

        this.api.getPlan(scopeIdentifier, hubName, planId, (err: any, statusCode: number, plan: TaskAgentInterfaces.TaskOrchestrationPlan) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(plan);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TaskOrchestrationPlan>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    */
    public getRecords(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string, 
        changeId?: number
        ): Q.Promise<TaskAgentInterfaces.TimelineRecord[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TimelineRecord[]>();

        this.api.getRecords(scopeIdentifier, hubName, planId, timelineId, changeId, (err: any, statusCode: number, records: TaskAgentInterfaces.TimelineRecord[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(records);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TimelineRecord[]>>deferred.promise;
    }
    
    /**
    * @param {VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>} records
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    */
    public updateRecords(
        records: VSSInterfaces.VssJsonCollectionWrapperV<TaskAgentInterfaces.TimelineRecord[]>, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string
        ): Q.Promise<TaskAgentInterfaces.TimelineRecord[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.TimelineRecord[]>();

        this.api.updateRecords(records, scopeIdentifier, hubName, planId, timelineId, (err: any, statusCode: number, record: TaskAgentInterfaces.TimelineRecord[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(record);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.TimelineRecord[]>>deferred.promise;
    }
    
    /**
    * @param {TaskAgentInterfaces.Timeline} timeline
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public createTimeline(
        timeline: TaskAgentInterfaces.Timeline, 
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.Timeline> {
    
        var deferred = Q.defer<TaskAgentInterfaces.Timeline>();

        this.api.createTimeline(timeline, scopeIdentifier, hubName, planId, (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timeline);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.Timeline>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    * @param {string} timelineId
    * @param {number} changeId
    * @param {boolean} includeRecords
    */
    public getTimeline(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string, 
        timelineId: string, 
        changeId?: number, 
        includeRecords?: boolean
        ): Q.Promise<TaskAgentInterfaces.Timeline> {
    
        var deferred = Q.defer<TaskAgentInterfaces.Timeline>();

        this.api.getTimeline(scopeIdentifier, hubName, planId, timelineId, changeId, includeRecords, (err: any, statusCode: number, timeline: TaskAgentInterfaces.Timeline) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timeline);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.Timeline>>deferred.promise;
    }
    
    /**
    * @param {string} scopeIdentifier - The project GUID to scope the request
    * @param {string} hubName - The name of the server hub: "build" for the Build server or "rm" for the Release Management server
    * @param {string} planId
    */
    public getTimelines(
        scopeIdentifier: string, 
        hubName: string, 
        planId: string
        ): Q.Promise<TaskAgentInterfaces.Timeline[]> {
    
        var deferred = Q.defer<TaskAgentInterfaces.Timeline[]>();

        this.api.getTimelines(scopeIdentifier, hubName, planId, (err: any, statusCode: number, timelines: TaskAgentInterfaces.Timeline[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(timelines);
            }
        });

        return <Q.Promise<TaskAgentInterfaces.Timeline[]>>deferred.promise;
    }
    
}
