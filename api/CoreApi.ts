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
import CoreInterfaces = require("./interfaces/CoreInterfaces");
import OperationsInterfaces = require("./interfaces/common/OperationsInterfaces");
import TfsInterfaces = require("./interfaces/common/TfsInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface ICoreApi extends basem.ClientApiBase {
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, projectId: string, onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService) => void): void;
    getConnectedServiceDetails(projectId: string, name: string, onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails) => void): void;
    getConnectedServices(projectId: string, kind: CoreInterfaces.ConnectedServiceKind, onResult: (err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]) => void): void;
    createIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    deleteIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    getIdentityMru(mruName: string, onResult: (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => void): void;
    updateIdentityMru(mruData: CoreInterfaces.IdentityData, mruName: string, onResult: (err: any, statusCode: number) => void): void;
    getTeamMembers(projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => void): void;
    getProjectCollection(collectionId: string, onResult: (err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection) => void): void;
    getProjectCollections(top: number, skip: number, onResult: (err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]) => void): void;
    getProjectHistory(minRevision: number, onResult: (err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]) => void): void;
    getProject(projectId: string, includeCapabilities: boolean, includeHistory: boolean, onResult: (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => void): void;
    getProjects(stateFilter: any, top: number, skip: number, onResult: (err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]) => void): void;
    queueCreateProject(projectToCreate: CoreInterfaces.TeamProject, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    queueDeleteProject(projectId: string, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    updateProject(projectUpdate: CoreInterfaces.TeamProject, projectId: string, onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void): void;
    getProxies(proxyUrl: string, onResult: (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => void): void;
    getTeams(projectId: string, teamId: string, top: number, skip: number, onResult: (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => void): void;
}

export interface IQCoreApi extends basem.QClientApiBase {
    
    createConnectedService(connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails,  projectId: string): Q.Promise<CoreInterfaces.WebApiConnectedService>;
    getConnectedServiceDetails(projectId: string,  name: string): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>;
    getConnectedServices(projectId: string,  kind?: CoreInterfaces.ConnectedServiceKind): Q.Promise<CoreInterfaces.WebApiConnectedService[]>;
    getIdentityMru( mruName: string): Q.Promise<VSSInterfaces.IdentityRef[]>;
    getTeamMembers(projectId: string, teamId: string, top?: number,  skip?: number): Q.Promise<VSSInterfaces.IdentityRef[]>;
    getProjectCollection( collectionId: string): Q.Promise<CoreInterfaces.TeamProjectCollection>;
    getProjectCollections(top?: number,  skip?: number): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>;
    getProjectHistory( minRevision?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    getProject(projectId: string, includeCapabilities?: boolean,  includeHistory?: boolean): Q.Promise<CoreInterfaces.TeamProject>;
    getProjects(stateFilter?: any, top?: number,  skip?: number): Q.Promise<CoreInterfaces.TeamProjectReference[]>;
    queueCreateProject( projectToCreate: CoreInterfaces.TeamProject): Q.Promise<OperationsInterfaces.OperationReference>;
    queueDeleteProject( projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    updateProject(projectUpdate: CoreInterfaces.TeamProject,  projectId: string): Q.Promise<OperationsInterfaces.OperationReference>;
    getProxies( proxyUrl?: string): Q.Promise<CoreInterfaces.Proxy[]>;
    getTeams(projectId: string, teamId?: string, top?: number,  skip?: number): Q.Promise<CoreInterfaces.WebApiTeam>;
}

export class CoreApi extends basem.ClientApiBase implements ICoreApi {

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Core-api');
    }

    /**
     * @param {CoreInterfaces.WebApiConnectedServiceDetails} connectedServiceCreationData
     * @param {string} projectId
     * @param onResult callback function with the resulting CoreInterfaces.WebApiConnectedService
     */
    public createConnectedService(
        connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails,
        projectId: string,
        onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService) => void
        ): void {

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "b4f70219-e18b-42c5-abe3-98b07d35525e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: CoreInterfaces.TypeInfo.WebApiConnectedServiceDetails, responseTypeMetadata: CoreInterfaces.TypeInfo.WebApiConnectedService, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, connectedServiceCreationData, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} projectId
     * @param {string} name
     * @param onResult callback function with the resulting CoreInterfaces.WebApiConnectedServiceDetails
     */
    public getConnectedServiceDetails(
        projectId: string,
        name: string,
        onResult: (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails) => void
        ): void {

        var routeValues: any = {
            projectId: projectId,
            name: name
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "b4f70219-e18b-42c5-abe3-98b07d35525e", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.WebApiConnectedServiceDetails, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} projectId
     * @param {CoreInterfaces.ConnectedServiceKind} kind
     * @param onResult callback function with the resulting CoreInterfaces.WebApiConnectedService[]
     */
    public getConnectedServices(
        projectId: string,
        kind: CoreInterfaces.ConnectedServiceKind,
        onResult: (err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]) => void
        ): void {

        var routeValues: any = {
            projectId: projectId
        };

        var queryValues: any = {
            kind: kind,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "b4f70219-e18b-42c5-abe3-98b07d35525e", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.WebApiConnectedService, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     * @param onResult callback function
     */
    public createIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: CoreInterfaces.TypeInfo.IdentityData, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, mruData, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     * @param onResult callback function
     */
    public deleteIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: CoreInterfaces.TypeInfo.IdentityData, responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} mruName
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    public getIdentityMru(
        mruName: string,
        onResult: (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => void
        ): void {

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.IdentityRef, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {CoreInterfaces.IdentityData} mruData
     * @param {string} mruName
     * @param onResult callback function
     */
    public updateIdentityMru(
        mruData: CoreInterfaces.IdentityData,
        mruName: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues: any = {
            mruName: mruName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "core", "5ead0b70-2572-4697-97e9-f341069a783a", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: CoreInterfaces.TypeInfo.IdentityData, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, mruData, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode);
        });
    }

    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting VSSInterfaces.IdentityRef[]
     */
    public getTeamMembers(
        projectId: string,
        teamId: string,
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => void
        ): void {

        var routeValues: any = {
            projectId: projectId,
            teamId: teamId
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "294c494c-2600-4d7e-b76c-3dd50c3c95be", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: VSSInterfaces.TypeInfo.IdentityRef, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get project collection with the specified id or name.
     * 
     * @param {string} collectionId
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectCollection
     */
    public getProjectCollection(
        collectionId: string,
        onResult: (err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection) => void
        ): void {

        var routeValues: any = {
            collectionId: collectionId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "core", "8031090f-ef1d-4af6-85fc-698cd75d42bf", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.TeamProjectCollection, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get project collection references for this application.
     * 
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectCollectionReference[]
     */
    public getProjectCollections(
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.2", "core", "8031090f-ef1d-4af6-85fc-698cd75d42bf", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.TeamProjectCollectionReference, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {number} minRevision
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectReference[]
     */
    public getProjectHistory(
        minRevision: number,
        onResult: (err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            minRevision: minRevision,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "6488a877-4749-4954-82ea-7340d36be9f2", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.TeamProjectReference, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get project with the specified id or name, optionally including capabilities.
     * 
     * @param {string} projectId
     * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
     * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
     * @param onResult callback function with the resulting CoreInterfaces.TeamProject
     */
    public getProject(
        projectId: string,
        includeCapabilities: boolean,
        includeHistory: boolean,
        onResult: (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => void
        ): void {

        var routeValues: any = {
            projectId: projectId
        };

        var queryValues: any = {
            includeCapabilities: includeCapabilities,
            includeHistory: includeHistory,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.TeamProject, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Get project references with the specified state
     * 
     * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting CoreInterfaces.TeamProjectReference[]
     */
    public getProjects(
        stateFilter: any,
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            stateFilter: stateFilter,
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.TeamProjectReference, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Queue a project creation.
     * 
     * @param {CoreInterfaces.TeamProject} projectToCreate - The project to create.
     * @param onResult callback function with the resulting OperationsInterfaces.OperationReference
     */
    public queueCreateProject(
        projectToCreate: CoreInterfaces.TeamProject,
        onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void
        ): void {

        var routeValues: any = {
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: CoreInterfaces.TypeInfo.TeamProject, responseTypeMetadata: OperationsInterfaces.TypeInfo.OperationReference, responseIsCollection: false };
            
            this.restClient.create(url, apiVersion, projectToCreate, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Queue a project deletion.
     * 
     * @param {string} projectId - The project id of the project to delete.
     * @param onResult callback function with the resulting OperationsInterfaces.OperationReference
     */
    public queueDeleteProject(
        projectId: string,
        onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void
        ): void {

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: OperationsInterfaces.TypeInfo.OperationReference, responseIsCollection: false };
            
            this.restClient.delete(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * Update an existing project's name, abbreviation, or description.
     * 
     * @param {CoreInterfaces.TeamProject} projectUpdate - The updates for the project.
     * @param {string} projectId - The project id of the project to update.
     * @param onResult callback function with the resulting OperationsInterfaces.OperationReference
     */
    public updateProject(
        projectUpdate: CoreInterfaces.TeamProject,
        projectId: string,
        onResult: (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => void
        ): void {

        var routeValues: any = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.3", "core", "603fe2ac-9723-48b9-88ad-09305aa6c6e1", routeValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: CoreInterfaces.TypeInfo.TeamProject, responseTypeMetadata: OperationsInterfaces.TypeInfo.OperationReference, responseIsCollection: false };
            
            this.restClient.update(url, apiVersion, projectUpdate, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} proxyUrl
     * @param onResult callback function with the resulting CoreInterfaces.Proxy[]
     */
    public getProxies(
        proxyUrl: string,
        onResult: (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => void
        ): void {

        var routeValues: any = {
        };

        var queryValues: any = {
            proxyUrl: proxyUrl,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "ec1f4311-f2b4-4c15-b2b8-8990b80d2908", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.Proxy, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

    /**
     * @param {string} projectId
     * @param {string} teamId
     * @param {number} top
     * @param {number} skip
     * @param onResult callback function with the resulting CoreInterfaces.WebApiTeam
     */
    public getTeams(
        projectId: string,
        teamId: string,
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => void
        ): void {

        var routeValues: any = {
            projectId: projectId,
            teamId: teamId
        };

        var queryValues: any = {
            '$top': top,
            '$skip': skip,
        };
        
        this.vsoClient.getVersioningData("3.0-preview.1", "core", "d30a3dd1-f8ba-442a-b86a-bd0c0c383e59", routeValues, queryValues)
        .then((versioningData: vsom.ClientVersioningData) => {
            var url: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: CoreInterfaces.TypeInfo.WebApiTeam, responseIsCollection: false };
            
            this.restClient.getJson(url, apiVersion, serializationData, onResult);
        })
        .fail((error) => {
            onResult(error, error.statusCode, null);
        });
    }

}

export class QCoreApi extends basem.QClientApiBase implements IQCoreApi {
    
    api: CoreApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, CoreApi);
    }

    
    /**
    * @param {CoreInterfaces.WebApiConnectedServiceDetails} connectedServiceCreationData
    * @param {string} projectId
    */
    public createConnectedService(
        connectedServiceCreationData: CoreInterfaces.WebApiConnectedServiceDetails, 
        projectId: string
        ): Q.Promise<CoreInterfaces.WebApiConnectedService> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiConnectedService>();

        this.api.createConnectedService(connectedServiceCreationData, projectId, (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedService) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(connectedService);
            }
        });

        return <Q.Promise<CoreInterfaces.WebApiConnectedService>>deferred.promise;
    }
    
    /**
    * @param {string} projectId
    * @param {string} name
    */
    public getConnectedServiceDetails(
        projectId: string, 
        name: string
        ): Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiConnectedServiceDetails>();

        this.api.getConnectedServiceDetails(projectId, name, (err: any, statusCode: number, connectedService: CoreInterfaces.WebApiConnectedServiceDetails) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(connectedService);
            }
        });

        return <Q.Promise<CoreInterfaces.WebApiConnectedServiceDetails>>deferred.promise;
    }
    
    /**
    * @param {string} projectId
    * @param {CoreInterfaces.ConnectedServiceKind} kind
    */
    public getConnectedServices(
        projectId: string, 
        kind?: CoreInterfaces.ConnectedServiceKind
        ): Q.Promise<CoreInterfaces.WebApiConnectedService[]> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiConnectedService[]>();

        this.api.getConnectedServices(projectId, kind, (err: any, statusCode: number, connectedServices: CoreInterfaces.WebApiConnectedService[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(connectedServices);
            }
        });

        return <Q.Promise<CoreInterfaces.WebApiConnectedService[]>>deferred.promise;
    }
    
    /**
    * @param {string} mruName
    */
    public getIdentityMru(
        mruName: string
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        this.api.getIdentityMru(mruName, (err: any, statusCode: number, identityMru: VSSInterfaces.IdentityRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(identityMru);
            }
        });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }
    
    /**
    * @param {string} projectId
    * @param {string} teamId
    * @param {number} top
    * @param {number} skip
    */
    public getTeamMembers(
        projectId: string, 
        teamId: string, 
        top?: number, 
        skip?: number
        ): Q.Promise<VSSInterfaces.IdentityRef[]> {
    
        var deferred = Q.defer<VSSInterfaces.IdentityRef[]>();

        this.api.getTeamMembers(projectId, teamId, top, skip, (err: any, statusCode: number, members: VSSInterfaces.IdentityRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(members);
            }
        });

        return <Q.Promise<VSSInterfaces.IdentityRef[]>>deferred.promise;
    }
    
    /**
    * Get project collection with the specified id or name.
    * 
    * @param {string} collectionId
    */
    public getProjectCollection(
        collectionId: string
        ): Q.Promise<CoreInterfaces.TeamProjectCollection> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectCollection>();

        this.api.getProjectCollection(collectionId, (err: any, statusCode: number, projectCollection: CoreInterfaces.TeamProjectCollection) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projectCollection);
            }
        });

        return <Q.Promise<CoreInterfaces.TeamProjectCollection>>deferred.promise;
    }
    
    /**
    * Get project collection references for this application.
    * 
    * @param {number} top
    * @param {number} skip
    */
    public getProjectCollections(
        top?: number, 
        skip?: number
        ): Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectCollectionReference[]>();

        this.api.getProjectCollections(top, skip, (err: any, statusCode: number, projectCollections: CoreInterfaces.TeamProjectCollectionReference[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projectCollections);
            }
        });

        return <Q.Promise<CoreInterfaces.TeamProjectCollectionReference[]>>deferred.promise;
    }
    
    /**
    * @param {number} minRevision
    */
    public getProjectHistory(
        minRevision?: number
        ): Q.Promise<CoreInterfaces.TeamProjectReference[]> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectReference[]>();

        this.api.getProjectHistory(minRevision, (err: any, statusCode: number, projectHistory: CoreInterfaces.TeamProjectReference[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projectHistory);
            }
        });

        return <Q.Promise<CoreInterfaces.TeamProjectReference[]>>deferred.promise;
    }
    
    /**
    * Get project with the specified id or name, optionally including capabilities.
    * 
    * @param {string} projectId
    * @param {boolean} includeCapabilities - Include capabilities (such as source control) in the team project result (default: false).
    * @param {boolean} includeHistory - Search within renamed projects (that had such name in the past).
    */
    public getProject(
        projectId: string, 
        includeCapabilities?: boolean, 
        includeHistory?: boolean
        ): Q.Promise<CoreInterfaces.TeamProject> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProject>();

        this.api.getProject(projectId, includeCapabilities, includeHistory, (err: any, statusCode: number, project: CoreInterfaces.TeamProject) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        });

        return <Q.Promise<CoreInterfaces.TeamProject>>deferred.promise;
    }
    
    /**
    * Get project references with the specified state
    * 
    * @param {any} stateFilter - Filter on team projects in a specific team project state (default: WellFormed).
    * @param {number} top
    * @param {number} skip
    */
    public getProjects(
        stateFilter?: any, 
        top?: number, 
        skip?: number
        ): Q.Promise<CoreInterfaces.TeamProjectReference[]> {
    
        var deferred = Q.defer<CoreInterfaces.TeamProjectReference[]>();

        this.api.getProjects(stateFilter, top, skip, (err: any, statusCode: number, projects: CoreInterfaces.TeamProjectReference[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(projects);
            }
        });

        return <Q.Promise<CoreInterfaces.TeamProjectReference[]>>deferred.promise;
    }
    
    /**
    * Queue a project creation.
    * 
    * @param {CoreInterfaces.TeamProject} projectToCreate - The project to create.
    */
    public queueCreateProject(
        projectToCreate: CoreInterfaces.TeamProject
        ): Q.Promise<OperationsInterfaces.OperationReference> {
    
        var deferred = Q.defer<OperationsInterfaces.OperationReference>();

        this.api.queueCreateProject(projectToCreate, (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        });

        return <Q.Promise<OperationsInterfaces.OperationReference>>deferred.promise;
    }
    
    /**
    * Queue a project deletion.
    * 
    * @param {string} projectId - The project id of the project to delete.
    */
    public queueDeleteProject(
        projectId: string
        ): Q.Promise<OperationsInterfaces.OperationReference> {
    
        var deferred = Q.defer<OperationsInterfaces.OperationReference>();

        this.api.queueDeleteProject(projectId, (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        });

        return <Q.Promise<OperationsInterfaces.OperationReference>>deferred.promise;
    }
    
    /**
    * Update an existing project's name, abbreviation, or description.
    * 
    * @param {CoreInterfaces.TeamProject} projectUpdate - The updates for the project.
    * @param {string} projectId - The project id of the project to update.
    */
    public updateProject(
        projectUpdate: CoreInterfaces.TeamProject, 
        projectId: string
        ): Q.Promise<OperationsInterfaces.OperationReference> {
    
        var deferred = Q.defer<OperationsInterfaces.OperationReference>();

        this.api.updateProject(projectUpdate, projectId, (err: any, statusCode: number, project: OperationsInterfaces.OperationReference) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(project);
            }
        });

        return <Q.Promise<OperationsInterfaces.OperationReference>>deferred.promise;
    }
    
    /**
    * @param {string} proxyUrl
    */
    public getProxies(
        proxyUrl?: string
        ): Q.Promise<CoreInterfaces.Proxy[]> {
    
        var deferred = Q.defer<CoreInterfaces.Proxy[]>();

        this.api.getProxies(proxyUrl, (err: any, statusCode: number, proxies: CoreInterfaces.Proxy[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(proxies);
            }
        });

        return <Q.Promise<CoreInterfaces.Proxy[]>>deferred.promise;
    }
    
    /**
    * @param {string} projectId
    * @param {string} teamId
    * @param {number} top
    * @param {number} skip
    */
    public getTeams(
        projectId: string, 
        teamId?: string, 
        top?: number, 
        skip?: number
        ): Q.Promise<CoreInterfaces.WebApiTeam> {
    
        var deferred = Q.defer<CoreInterfaces.WebApiTeam>();

        this.api.getTeams(projectId, teamId, top, skip, (err: any, statusCode: number, team: CoreInterfaces.WebApiTeam) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(team);
            }
        });

        return <Q.Promise<CoreInterfaces.WebApiTeam>>deferred.promise;
    }
    
}
