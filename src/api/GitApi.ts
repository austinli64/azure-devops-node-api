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
import GitInterfaces = require("./interfaces/GitInterfaces");
import VSSInterfaces = require("./interfaces/common/VSSInterfaces");

export interface IGitApi {
    baseUrl: string;
    userAgent: string;
    httpClient: VsoBaseInterfaces.IHttpClient;
    restClient: VsoBaseInterfaces.IRestClient;
    vsoClient: vsom.VsoClient;
    connect(onResult: (err: any, statusCode: number, obj: any) => void): void;
    getBlob(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => void): void;
    getBlobContent(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBlobsZip(blobIds: string[], repositoryId: string, project: string, filename: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBlobZip(repositoryId: string, sha1: string, project: string, download: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getBranch(repositoryId: string, name: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => void): void;
    getBranches(repositoryId: string, project: string, baseVersionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]) => void): void;
    getChanges(commitId: string, repositoryId: string, project: string, top: number, skip: number, onResult: (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => void): void;
    createCommit(repositoryId: string, project: string, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void): void;
    getCommit(commitId: string, repositoryId: string, project: string, changeCount: number, onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void): void;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void): void;
    getPushCommits(repositoryId: string, pushId: number, project: string, top: number, skip: number, includeLinks: boolean, onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void): void;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project: string, skip: number, top: number, onResult: (err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]) => void): void;
    getItem(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Item: GitInterfaces.GitItem) => void): void;
    getItemContent(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItems(repositoryId: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, includeLinks: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => void): void;
    getItemText(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItemZip(repositoryId: string, path: string, project: string, scopePath: string, recursionLevel: GitInterfaces.VersionControlRecursionType, includeContentMetadata: boolean, latestProcessedChange: boolean, download: boolean, versionDescriptor: GitInterfaces.GitVersionDescriptor, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string, project: string, onResult: (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => void): void;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void): void;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void): void;
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number) => void): void;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project: string, onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void): void;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void): void;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string, project: string, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    getPullRequest(repositoryId: string, pullRequestId: number, project: string, maxCommentLength: number, skip: number, top: number, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project: string, maxCommentLength: number, skip: number, top: number, onResult: (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => void): void;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number, project: string, onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void): void;
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project: string, commitsTop: number, commitsSkip: number, onResult: (err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]) => void): void;
    createPush(push: GitInterfaces.GitPush, repositoryId: string, project: string, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void): void;
    getPush(repositoryId: string, pushId: number, project: string, includeCommits: number, includeRefUpdates: boolean, onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void): void;
    getPushes(repositoryId: string, project: string, skip: number, top: number, searchCriteria: GitInterfaces.GitPushSearchCriteria, onResult: (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => void): void;
    getRefs(repositoryId: string, project: string, filter: string, includeLinks: boolean, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => void): void;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project: string, projectId: string, onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => void): void;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    deleteRepository(repositoryId: string, project: string, onResult: (err: any, statusCode: number) => void): void;
    getRepositories(project: string, includeLinks: boolean, onResult: (err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]) => void): void;
    getRepository(repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string, project: string, onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void): void;
    getTree(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => void): void;
    getTreeZip(repositoryId: string, sha1: string, project: string, projectId: string, recursive: boolean, fileName: string, onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void): void;
}

export interface IQGitApi {
    connect(): Q.Promise<void>;
    
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean,  fileName?: string): Q.Promise<GitInterfaces.GitBlobRef>;
    getBranch(repositoryId: string, name: string, project?: string,  baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats>;
    getBranches(repositoryId: string, project?: string,  baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitBranchStats[]>;
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number,  skip?: number): Q.Promise<GitInterfaces.GitCommitChanges>;
    createCommit(repositoryId: string,  project?: string): Q.Promise<GitInterfaces.GitCommit>;
    getCommit(commitId: string, repositoryId: string, project?: string,  changeCount?: number): Q.Promise<GitInterfaces.GitCommit>;
    getCommits(repositoryId: string, searchCriteria: GitInterfaces.GitQueryCommitsCriteria, project?: string, skip?: number,  top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number,  includeLinks?: boolean): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getCommitsBatch(searchCriteria: GitInterfaces.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number,  top?: number): Q.Promise<GitInterfaces.GitCommitRef[]>;
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean,  versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem>;
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: GitInterfaces.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean,  versionDescriptor?: GitInterfaces.GitVersionDescriptor): Q.Promise<GitInterfaces.GitItem[]>;
    getItemsBatch(requestData: GitInterfaces.GitItemRequestData, repositoryId: string,  project?: string): Q.Promise<GitInterfaces.GitItem[][]>;
    createPullRequestReviewer(reviewer: GitInterfaces.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string,  project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    createPullRequestReviewers(reviewers: VSSInterfaces.IdentityRef[], repositoryId: string, pullRequestId: number,  project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string,  project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote>;
    getPullRequestReviewers(repositoryId: string, pullRequestId: number,  project?: string): Q.Promise<GitInterfaces.IdentityRefWithVote[]>;
    createPullRequest(gitPullRequestToCreate: GitInterfaces.GitPullRequest, repositoryId: string,  project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number,  top?: number): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequests(repositoryId: string, searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number,  top?: number): Q.Promise<GitInterfaces.GitPullRequest[]>;
    updatePullRequest(gitPullRequestToUpdate: GitInterfaces.GitPullRequest, repositoryId: string, pullRequestId: number,  project?: string): Q.Promise<GitInterfaces.GitPullRequest>;
    getPullRequestWorkItems(repositoryId: string, pullRequestId: number, project?: string, commitsTop?: number,  commitsSkip?: number): Q.Promise<GitInterfaces.AssociatedWorkItem[]>;
    createPush(push: GitInterfaces.GitPush, repositoryId: string,  project?: string): Q.Promise<GitInterfaces.GitPush>;
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number,  includeRefUpdates?: boolean): Q.Promise<GitInterfaces.GitPush>;
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number,  searchCriteria?: GitInterfaces.GitPushSearchCriteria): Q.Promise<GitInterfaces.GitPush[]>;
    getRefs(repositoryId: string, project?: string, filter?: string,  includeLinks?: boolean): Q.Promise<GitInterfaces.GitRef[]>;
    updateRefs(refUpdates: GitInterfaces.GitRefUpdate[], repositoryId: string, project?: string,  projectId?: string): Q.Promise<GitInterfaces.GitRefUpdateResult[]>;
    createRepository(gitRepositoryToCreate: GitInterfaces.GitRepository,  project?: string): Q.Promise<GitInterfaces.GitRepository>;
    getRepositories(project?: string,  includeLinks?: boolean): Q.Promise<GitInterfaces.GitRepository[]>;
    getRepository(repositoryId: string,  project?: string): Q.Promise<GitInterfaces.GitRepository>;
    updateRepository(newRepositoryInfo: GitInterfaces.GitRepository, repositoryId: string,  project?: string): Q.Promise<GitInterfaces.GitRepository>;
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean,  fileName?: string): Q.Promise<GitInterfaces.GitTreeRef>;
}

export class GitApi implements IGitApi {
    baseUrl: string;
    userAgent: string;
    httpClient: httpm.HttpClient;
    restClient: restm.RestClient;
    vsoClient: vsom.VsoClient

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        this.baseUrl = baseUrl;
        this.httpClient = new httpm.HttpClient('node-Git-api', handlers);
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
     * Gets a single blob.
     * 
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @param onResult callback function with the resulting GitInterfaces.GitBlobRef
     */
    public getBlob(
        repositoryId: string,
        sha1: string,
        project: string,
        download: boolean,
        fileName: string,
        onResult: (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues = {
            download: download,
            fileName: fileName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitBlobRef, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Gets a single blob.
     * 
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getBlobContent(
        repositoryId: string,
        sha1: string,
        project: string,
        download: boolean,
        fileName: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues = {
            download: download,
            fileName: fileName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/octet-stream", onResult);
        });
    }

    /**
     * Gets one or more blobs in a zip file download.
     * 
     * @param {string[]} blobIds
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} filename
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getBlobsZip(
        blobIds: string[],
        repositoryId: string,
        project: string,
        filename: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            filename: filename
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/zip", onResult);
        });
    }

    /**
     * Gets a single blob.
     * 
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {boolean} download
     * @param {string} fileName
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getBlobZip(
        repositoryId: string,
        sha1: string,
        project: string,
        download: boolean,
        fileName: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues = {
            download: download,
            fileName: fileName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "7b28e929-2c99-405d-9c5c-6167a06e6816", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/zip", onResult);
        });
    }

    /**
     * Retrieve statistics about a single branch.
     * 
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} name - Name of the branch
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     * @param onResult callback function with the resulting GitInterfaces.GitBranchStats
     */
    public getBranch(
        repositoryId: string,
        name: string,
        project: string,
        baseVersionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            name: name,
            baseVersionDescriptor: baseVersionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d5b216de-d8d5-4d32-ae76-51df755b16d3", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitBranchStats, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve statistics about all branches within a repository.
     * 
     * @param {string} repositoryId - Friendly name or guid of repository
     * @param {string} project - Project ID or project name
     * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
     * @param onResult callback function with the resulting GitInterfaces.GitBranchStats[]
     */
    public getBranches(
        repositoryId: string,
        project: string,
        baseVersionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            baseVersionDescriptor: baseVersionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "d5b216de-d8d5-4d32-ae76-51df755b16d3", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitBranchStats, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve changes for a particular commit.
     * 
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of changes to return.
     * @param {number} skip - The number of changes to skip.
     * @param onResult callback function with the resulting GitInterfaces.GitCommitChanges
     */
    public getChanges(
        commitId: string,
        repositoryId: string,
        project: string,
        top: number,
        skip: number,
        onResult: (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => void
        ): void {

        var routeValues = {
            project: project,
            commitId: commitId,
            repositoryId: repositoryId
        };

        var queryValues = {
            top: top,
            skip: skip
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "5bf884f5-3e07-42e9-afb8-1b872267bf16", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitChanges, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Create a git commit for a project
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitCommit
     */
    public createCommit(
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommit, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, null, serializationData, onResult);
        });
    }

    /**
     * Retrieve a particular commit.
     * 
     * @param {string} commitId - The id of the commit.
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} changeCount - The number of changes to include in the result.
     * @param onResult callback function with the resulting GitInterfaces.GitCommit
     */
    public getCommit(
        commitId: string,
        repositoryId: string,
        project: string,
        changeCount: number,
        onResult: (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => void
        ): void {

        var routeValues = {
            project: project,
            commitId: commitId,
            repositoryId: repositoryId
        };

        var queryValues = {
            changeCount: changeCount
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommit, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve git commits for a project
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting GitInterfaces.GitCommitRef[]
     */
    public getCommits(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria,
        project: string,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            searchCriteria: searchCriteria,
            skip: skip,
            top: top
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve a list of commits associated with a particular push.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} top - The maximum number of commits to return ("get the top x commits").
     * @param {number} skip - The number of commits to skip.
     * @param {boolean} includeLinks
     * @param onResult callback function with the resulting GitInterfaces.GitCommitRef[]
     */
    public getPushCommits(
        repositoryId: string,
        pushId: number,
        project: string,
        top: number,
        skip: number,
        includeLinks: boolean,
        onResult: (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            pushId: pushId,
            top: top,
            skip: skip,
            includeLinks: includeLinks
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "c2570c3b-5b3f-41b8-98bf-5407bfde8d58", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve git commits for a project
     * 
     * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria - Search options
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting GitInterfaces.GitCommitRef[]
     */
    public getCommitsBatch(
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria,
        repositoryId: string,
        project: string,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            skip: skip,
            top: top
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "6400dfb2-0bcb-462b-b992-5a57f8f1416c", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitQueryCommitsCriteria, responseTypeMetadata: GitInterfaces.TypeInfo.GitCommitRef, responseIsCollection: true };
            
            this.restClient.create(path, apiVersion, searchCriteria, serializationData, onResult);
        });
    }

    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult callback function with the resulting GitInterfaces.GitItem
     */
    public getItem(
        repositoryId: string,
        path: string,
        project: string,
        scopePath: string,
        recursionLevel: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata: boolean,
        latestProcessedChange: boolean,
        download: boolean,
        versionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, Item: GitInterfaces.GitItem) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitItem, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getItemContent(
        repositoryId: string,
        path: string,
        project: string,
        scopePath: string,
        recursionLevel: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata: boolean,
        latestProcessedChange: boolean,
        download: boolean,
        versionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/octet-stream", onResult);
        });
    }

    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {boolean} includeLinks
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult callback function with the resulting GitInterfaces.GitItem[]
     */
    public getItems(
        repositoryId: string,
        project: string,
        scopePath: string,
        recursionLevel: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata: boolean,
        latestProcessedChange: boolean,
        download: boolean,
        includeLinks: boolean,
        versionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            includeLinks: includeLinks,
            versionDescriptor: versionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitItem, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult callback function with the resulting string
     */
    public getItemText(
        repositoryId: string,
        path: string,
        project: string,
        scopePath: string,
        recursionLevel: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata: boolean,
        latestProcessedChange: boolean,
        download: boolean,
        versionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "text/plain", onResult);
        });
    }

    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * 
     * @param {string} repositoryId
     * @param {string} path
     * @param {string} project - Project ID or project name
     * @param {string} scopePath
     * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
     * @param {boolean} includeContentMetadata
     * @param {boolean} latestProcessedChange
     * @param {boolean} download
     * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getItemZip(
        repositoryId: string,
        path: string,
        project: string,
        scopePath: string,
        recursionLevel: GitInterfaces.VersionControlRecursionType,
        includeContentMetadata: boolean,
        latestProcessedChange: boolean,
        download: boolean,
        versionDescriptor: GitInterfaces.GitVersionDescriptor,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            path: path,
            scopePath: scopePath,
            recursionLevel: recursionLevel,
            includeContentMetadata: includeContentMetadata,
            latestProcessedChange: latestProcessedChange,
            download: download,
            versionDescriptor: versionDescriptor
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "fb93c0db-47ed-4a31-8c20-47552878fb44", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/zip", onResult);
        });
    }

    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     * 
     * @param {GitInterfaces.GitItemRequestData} requestData
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitItem[][]
     */
    public getItemsBatch(
        requestData: GitInterfaces.GitItemRequestData,
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "630fd2e4-fb88-4f85-ad21-13f3fd1fbca9", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitItemRequestData, responseTypeMetadata: GitInterfaces.TypeInfo.GitItem, responseIsCollection: true };
            
            this.restClient.create(path, apiVersion, requestData, serializationData, onResult);
        });
    }

    /**
     * Adds a reviewer to a git pull request
     * 
     * @param {GitInterfaces.IdentityRefWithVote} reviewer
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.IdentityRefWithVote
     */
    public createPullRequestReviewer(
        reviewer: GitInterfaces.IdentityRefWithVote,
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project: string,
        onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            reviewerId: reviewerId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.IdentityRefWithVote, responseTypeMetadata: GitInterfaces.TypeInfo.IdentityRefWithVote, responseIsCollection: false };
            
            this.restClient.replace(path, apiVersion, reviewer, serializationData, onResult);
        });
    }

    /**
     * Adds reviewers to a git pull request
     * 
     * @param {VSSInterfaces.IdentityRef[]} reviewers
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.IdentityRefWithVote[]
     */
    public createPullRequestReviewers(
        reviewers: VSSInterfaces.IdentityRef[],
        repositoryId: string,
        pullRequestId: number,
        project: string,
        onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: VSSInterfaces.TypeInfo.IdentityRef, responseTypeMetadata: GitInterfaces.TypeInfo.IdentityRefWithVote, responseIsCollection: true };
            
            this.restClient.createJsonWrappedArray(path, apiVersion, reviewers, serializationData, onResult);
        });
    }

    /**
     * Adds reviewers to a git pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    public deletePullRequestReviewer(
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            reviewerId: reviewerId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve a reviewer from a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} reviewerId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.IdentityRefWithVote
     */
    public getPullRequestReviewer(
        repositoryId: string,
        pullRequestId: number,
        reviewerId: string,
        project: string,
        onResult: (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId,
            reviewerId: reviewerId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.IdentityRefWithVote, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve a pull request reviewers
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.IdentityRefWithVote[]
     */
    public getPullRequestReviewers(
        repositoryId: string,
        pullRequestId: number,
        project: string,
        onResult: (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "4b6702c7-aa35-4b89-9c96-b9abf6d3e540", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.IdentityRefWithVote, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Create a git pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitPullRequest
     */
    public createPullRequest(
        gitPullRequestToCreate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, gitPullRequestToCreate, serializationData, onResult);
        });
    }

    /**
     * Retrieve a pull request
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting GitInterfaces.GitPullRequest
     */
    public getPullRequest(
        repositoryId: string,
        pullRequestId: number,
        project: string,
        maxCommentLength: number,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        var queryValues = {
            maxCommentLength: maxCommentLength,
            skip: skip,
            top: top
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Query for pull requests
     * 
     * @param {string} repositoryId
     * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria
     * @param {string} project - Project ID or project name
     * @param {number} maxCommentLength
     * @param {number} skip
     * @param {number} top
     * @param onResult callback function with the resulting GitInterfaces.GitPullRequest[]
     */
    public getPullRequests(
        repositoryId: string,
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria,
        project: string,
        maxCommentLength: number,
        skip: number,
        top: number,
        onResult: (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            searchCriteria: searchCriteria,
            maxCommentLength: maxCommentLength,
            skip: skip,
            top: top
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Updates a pull request
     * 
     * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitPullRequest
     */
    public updatePullRequest(
        gitPullRequestToUpdate: GitInterfaces.GitPullRequest,
        repositoryId: string,
        pullRequestId: number,
        project: string,
        onResult: (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "9946fd70-0d40-406e-b686-b4744cbbcc37", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseTypeMetadata: GitInterfaces.TypeInfo.GitPullRequest, responseIsCollection: false };
            
            this.restClient.update(path, apiVersion, gitPullRequestToUpdate, serializationData, onResult);
        });
    }

    /**
     * Retrieve a pull request work items
     * 
     * @param {string} repositoryId
     * @param {number} pullRequestId
     * @param {string} project - Project ID or project name
     * @param {number} commitsTop
     * @param {number} commitsSkip
     * @param onResult callback function with the resulting GitInterfaces.AssociatedWorkItem[]
     */
    public getPullRequestWorkItems(
        repositoryId: string,
        pullRequestId: number,
        project: string,
        commitsTop: number,
        commitsSkip: number,
        onResult: (err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pullRequestId: pullRequestId
        };

        var queryValues = {
            commitsTop: commitsTop,
            commitsSkip: commitsSkip
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "0a637fcc-5370-4ce8-b0e8-98091f5f9482", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.AssociatedWorkItem, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Push changes to the repository.
     * 
     * @param {GitInterfaces.GitPush} push
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitPush
     */
    public createPush(
        push: GitInterfaces.GitPush,
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "git", "ea98d07b-3c87-4971-8ede-a613694ffb55", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, push, serializationData, onResult);
        });
    }

    /**
     * Retrieve a particular push.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {number} pushId - The id of the push.
     * @param {string} project - Project ID or project name
     * @param {number} includeCommits - The number of commits to include in the result.
     * @param {boolean} includeRefUpdates
     * @param onResult callback function with the resulting GitInterfaces.GitPush
     */
    public getPush(
        repositoryId: string,
        pushId: number,
        project: string,
        includeCommits: number,
        includeRefUpdates: boolean,
        onResult: (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            pushId: pushId
        };

        var queryValues = {
            includeCommits: includeCommits,
            includeRefUpdates: includeRefUpdates
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "git", "ea98d07b-3c87-4971-8ede-a613694ffb55", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieves pushes associated with the specified repository.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {number} skip
     * @param {number} top
     * @param {GitInterfaces.GitPushSearchCriteria} searchCriteria
     * @param onResult callback function with the resulting GitInterfaces.GitPush[]
     */
    public getPushes(
        repositoryId: string,
        project: string,
        skip: number,
        top: number,
        searchCriteria: GitInterfaces.GitPushSearchCriteria,
        onResult: (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            skip: skip,
            top: top,
            searchCriteria: searchCriteria
        };

        this.vsoClient.getVersioningData("3.0-preview.2", "git", "ea98d07b-3c87-4971-8ede-a613694ffb55", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitPush, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Queries the provided repository for its refs and returns them.
     * 
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} filter - [optional] A filter to apply to the refs.
     * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param onResult callback function with the resulting GitInterfaces.GitRef[]
     */
    public getRefs(
        repositoryId: string,
        project: string,
        filter: string,
        includeLinks: boolean,
        onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            filter: filter,
            includeLinks: includeLinks
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "2d874a60-a811-4f62-9c9f-963a6ea0a55b", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRef, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Creates or updates refs with the given information
     * 
     * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
     * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param {string} project - Project ID or project name
     * @param {string} projectId - The id of the project.
     * @param onResult callback function with the resulting GitInterfaces.GitRefUpdateResult[]
     */
    public updateRefs(
        refUpdates: GitInterfaces.GitRefUpdate[],
        repositoryId: string,
        project: string,
        projectId: string,
        onResult: (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        var queryValues = {
            projectId: projectId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "2d874a60-a811-4f62-9c9f-963a6ea0a55b", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitRefUpdate, responseTypeMetadata: GitInterfaces.TypeInfo.GitRefUpdateResult, responseIsCollection: true };
            
            this.restClient.createJsonWrappedArray(path, apiVersion, refUpdates, serializationData, onResult);
        });
    }

    /**
     * Create a git repository
     * 
     * @param {GitInterfaces.GitRepository} gitRepositoryToCreate
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitRepository
     */
    public createRepository(
        gitRepositoryToCreate: GitInterfaces.GitRepository,
        project: string,
        onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
        ): void {

        var routeValues = {
            project: project
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitRepository, responseTypeMetadata: GitInterfaces.TypeInfo.GitRepository, responseIsCollection: false };
            
            this.restClient.create(path, apiVersion, gitRepositoryToCreate, serializationData, onResult);
        });
    }

    /**
     * Delete a git repository
     * 
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult callback function
     */
    public deleteRepository(
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.restClient.delete(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Retrieve git repositories.
     * 
     * @param {string} project - Project ID or project name
     * @param {boolean} includeLinks
     * @param onResult callback function with the resulting GitInterfaces.GitRepository[]
     */
    public getRepositories(
        project: string,
        includeLinks: boolean,
        onResult: (err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]) => void
        ): void {

        var routeValues = {
            project: project
        };

        var queryValues = {
            includeLinks: includeLinks
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRepository, responseIsCollection: true };
            
            this.restClient.getJsonWrappedArray(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitRepository
     */
    public getRepository(
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitRepository, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * Updates the Git repository with the single populated change in the specified repository information.
     * 
     * @param {GitInterfaces.GitRepository} newRepositoryInfo
     * @param {string} repositoryId
     * @param {string} project - Project ID or project name
     * @param onResult callback function with the resulting GitInterfaces.GitRepository
     */
    public updateRepository(
        newRepositoryInfo: GitInterfaces.GitRepository,
        repositoryId: string,
        project: string,
        onResult: (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "225f7195-f9c7-4d14-ab28-a83f7ff77e1f", routeValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = { requestTypeMetadata: GitInterfaces.TypeInfo.GitRepository, responseTypeMetadata: GitInterfaces.TypeInfo.GitRepository, responseIsCollection: false };
            
            this.restClient.update(path, apiVersion, newRepositoryInfo, serializationData, onResult);
        });
    }

    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @param onResult callback function with the resulting GitInterfaces.GitTreeRef
     */
    public getTree(
        repositoryId: string,
        sha1: string,
        project: string,
        projectId: string,
        recursive: boolean,
        fileName: string,
        onResult: (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues = {
            projectId: projectId,
            recursive: recursive,
            fileName: fileName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "729f6437-6f92-44ec-8bee-273a7111063c", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseTypeMetadata: GitInterfaces.TypeInfo.GitTreeRef, responseIsCollection: false };
            
            this.restClient.getJson(path, apiVersion, serializationData, onResult);
        });
    }

    /**
     * @param {string} repositoryId
     * @param {string} sha1
     * @param {string} project - Project ID or project name
     * @param {string} projectId
     * @param {boolean} recursive
     * @param {string} fileName
     * @param onResult callback function with the resulting ArrayBuffer
     */
    public getTreeZip(
        repositoryId: string,
        sha1: string,
        project: string,
        projectId: string,
        recursive: boolean,
        fileName: string,
        onResult: (err: any, statusCode: number, res: NodeJS.ReadableStream) => void
        ): void {

        var routeValues = {
            project: project,
            repositoryId: repositoryId,
            sha1: sha1
        };

        var queryValues = {
            projectId: projectId,
            recursive: recursive,
            fileName: fileName
        };

        this.vsoClient.getVersioningData("3.0-preview.1", "git", "729f6437-6f92-44ec-8bee-273a7111063c", routeValues, queryValues).then((versioningData: vsom.ClientVersioningData) => {
            var path: string = versioningData.requestUrl;
            var apiVersion: string = versioningData.apiVersion;
            var serializationData = {  responseIsCollection: false };
            
            this.httpClient.getStream(path, apiVersion, "application/zip", onResult);
        });
    }

}

export class QGitApi implements IQGitApi {
    GitApi: IGitApi;

    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        this.GitApi = new GitApi(baseUrl, handlers);
    }

    public connect(): Q.Promise<any> {
        var defer = Q.defer();

        this.GitApi.connect((err: any, statusCode: number, obj: any) => {
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
    * Gets a single blob.
    * 
    * @param {string} repositoryId
    * @param {string} sha1
    * @param {string} project - Project ID or project name
    * @param {boolean} download
    * @param {string} fileName
    */
    public getBlob(
        repositoryId: string, 
        sha1: string, 
        project?: string, 
        download?: boolean, 
        fileName?: string
        ): Q.Promise<GitInterfaces.GitBlobRef> {
    
        var deferred = Q.defer<GitInterfaces.GitBlobRef>();

        this.GitApi.getBlob(repositoryId, sha1, project, download, fileName, (err: any, statusCode: number, Blob: GitInterfaces.GitBlobRef) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Blob);
            }
        });

        return <Q.Promise<GitInterfaces.GitBlobRef>>deferred.promise;
    }
    
    /**
    * Retrieve statistics about a single branch.
    * 
    * @param {string} repositoryId - Friendly name or guid of repository
    * @param {string} name - Name of the branch
    * @param {string} project - Project ID or project name
    * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
    */
    public getBranch(
        repositoryId: string, 
        name: string, 
        project?: string, 
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitBranchStats> {
    
        var deferred = Q.defer<GitInterfaces.GitBranchStats>();

        this.GitApi.getBranch(repositoryId, name, project, baseVersionDescriptor, (err: any, statusCode: number, BranchStat: GitInterfaces.GitBranchStats) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(BranchStat);
            }
        });

        return <Q.Promise<GitInterfaces.GitBranchStats>>deferred.promise;
    }
    
    /**
    * Retrieve statistics about all branches within a repository.
    * 
    * @param {string} repositoryId - Friendly name or guid of repository
    * @param {string} project - Project ID or project name
    * @param {GitInterfaces.GitVersionDescriptor} baseVersionDescriptor
    */
    public getBranches(
        repositoryId: string, 
        project?: string, 
        baseVersionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitBranchStats[]> {
    
        var deferred = Q.defer<GitInterfaces.GitBranchStats[]>();

        this.GitApi.getBranches(repositoryId, project, baseVersionDescriptor, (err: any, statusCode: number, BranchStats: GitInterfaces.GitBranchStats[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(BranchStats);
            }
        });

        return <Q.Promise<GitInterfaces.GitBranchStats[]>>deferred.promise;
    }
    
    /**
    * Retrieve changes for a particular commit.
    * 
    * @param {string} commitId - The id of the commit.
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} top - The maximum number of changes to return.
    * @param {number} skip - The number of changes to skip.
    */
    public getChanges(
        commitId: string, 
        repositoryId: string, 
        project?: string, 
        top?: number, 
        skip?: number
        ): Q.Promise<GitInterfaces.GitCommitChanges> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitChanges>();

        this.GitApi.getChanges(commitId, repositoryId, project, top, skip, (err: any, statusCode: number, Change: GitInterfaces.GitCommitChanges) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Change);
            }
        });

        return <Q.Promise<GitInterfaces.GitCommitChanges>>deferred.promise;
    }
    
    /**
    * Create a git commit for a project
    * 
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    */
    public createCommit(
        repositoryId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.GitCommit> {
    
        var deferred = Q.defer<GitInterfaces.GitCommit>();

        this.GitApi.createCommit(repositoryId, project, (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commit);
            }
        });

        return <Q.Promise<GitInterfaces.GitCommit>>deferred.promise;
    }
    
    /**
    * Retrieve a particular commit.
    * 
    * @param {string} commitId - The id of the commit.
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} changeCount - The number of changes to include in the result.
    */
    public getCommit(
        commitId: string, 
        repositoryId: string, 
        project?: string, 
        changeCount?: number
        ): Q.Promise<GitInterfaces.GitCommit> {
    
        var deferred = Q.defer<GitInterfaces.GitCommit>();

        this.GitApi.getCommit(commitId, repositoryId, project, changeCount, (err: any, statusCode: number, Commit: GitInterfaces.GitCommit) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commit);
            }
        });

        return <Q.Promise<GitInterfaces.GitCommit>>deferred.promise;
    }
    
    /**
    * Retrieve git commits for a project
    * 
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    */
    public getCommits(
        repositoryId: string, 
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria, 
        project?: string, 
        skip?: number, 
        top?: number
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        this.GitApi.getCommits(repositoryId, searchCriteria, project, skip, top, (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commits);
            }
        });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }
    
    /**
    * Retrieve a list of commits associated with a particular push.
    * 
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {number} pushId - The id of the push.
    * @param {string} project - Project ID or project name
    * @param {number} top - The maximum number of commits to return ("get the top x commits").
    * @param {number} skip - The number of commits to skip.
    * @param {boolean} includeLinks
    */
    public getPushCommits(
        repositoryId: string, 
        pushId: number, 
        project?: string, 
        top?: number, 
        skip?: number, 
        includeLinks?: boolean
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        this.GitApi.getPushCommits(repositoryId, pushId, project, top, skip, includeLinks, (err: any, statusCode: number, Commits: GitInterfaces.GitCommitRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Commits);
            }
        });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }
    
    /**
    * Retrieve git commits for a project
    * 
    * @param {GitInterfaces.GitQueryCommitsCriteria} searchCriteria - Search options
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    */
    public getCommitsBatch(
        searchCriteria: GitInterfaces.GitQueryCommitsCriteria, 
        repositoryId: string, 
        project?: string, 
        skip?: number, 
        top?: number
        ): Q.Promise<GitInterfaces.GitCommitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitCommitRef[]>();

        this.GitApi.getCommitsBatch(searchCriteria, repositoryId, project, skip, top, (err: any, statusCode: number, CommitsBatch: GitInterfaces.GitCommitRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(CommitsBatch);
            }
        });

        return <Q.Promise<GitInterfaces.GitCommitRef[]>>deferred.promise;
    }
    
    /**
    * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
    * 
    * @param {string} repositoryId
    * @param {string} path
    * @param {string} project - Project ID or project name
    * @param {string} scopePath
    * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
    * @param {boolean} includeContentMetadata
    * @param {boolean} latestProcessedChange
    * @param {boolean} download
    * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
    */
    public getItem(
        repositoryId: string, 
        path: string, 
        project?: string, 
        scopePath?: string, 
        recursionLevel?: GitInterfaces.VersionControlRecursionType, 
        includeContentMetadata?: boolean, 
        latestProcessedChange?: boolean, 
        download?: boolean, 
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitItem> {
    
        var deferred = Q.defer<GitInterfaces.GitItem>();

        this.GitApi.getItem(repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, (err: any, statusCode: number, Item: GitInterfaces.GitItem) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Item);
            }
        });

        return <Q.Promise<GitInterfaces.GitItem>>deferred.promise;
    }
    
    /**
    * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
    * 
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    * @param {string} scopePath
    * @param {GitInterfaces.VersionControlRecursionType} recursionLevel
    * @param {boolean} includeContentMetadata
    * @param {boolean} latestProcessedChange
    * @param {boolean} download
    * @param {boolean} includeLinks
    * @param {GitInterfaces.GitVersionDescriptor} versionDescriptor
    */
    public getItems(
        repositoryId: string, 
        project?: string, 
        scopePath?: string, 
        recursionLevel?: GitInterfaces.VersionControlRecursionType, 
        includeContentMetadata?: boolean, 
        latestProcessedChange?: boolean, 
        download?: boolean, 
        includeLinks?: boolean, 
        versionDescriptor?: GitInterfaces.GitVersionDescriptor
        ): Q.Promise<GitInterfaces.GitItem[]> {
    
        var deferred = Q.defer<GitInterfaces.GitItem[]>();

        this.GitApi.getItems(repositoryId, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, includeLinks, versionDescriptor, (err: any, statusCode: number, Items: GitInterfaces.GitItem[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Items);
            }
        });

        return <Q.Promise<GitInterfaces.GitItem[]>>deferred.promise;
    }
    
    /**
    * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
    * 
    * @param {GitInterfaces.GitItemRequestData} requestData
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    public getItemsBatch(
        requestData: GitInterfaces.GitItemRequestData, 
        repositoryId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.GitItem[][]> {
    
        var deferred = Q.defer<GitInterfaces.GitItem[][]>();

        this.GitApi.getItemsBatch(requestData, repositoryId, project, (err: any, statusCode: number, ItemsBatch: GitInterfaces.GitItem[][]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(ItemsBatch);
            }
        });

        return <Q.Promise<GitInterfaces.GitItem[][]>>deferred.promise;
    }
    
    /**
    * Adds a reviewer to a git pull request
    * 
    * @param {GitInterfaces.IdentityRefWithVote} reviewer
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} reviewerId
    * @param {string} project - Project ID or project name
    */
    public createPullRequestReviewer(
        reviewer: GitInterfaces.IdentityRefWithVote, 
        repositoryId: string, 
        pullRequestId: number, 
        reviewerId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote>();

        this.GitApi.createPullRequestReviewer(reviewer, repositoryId, pullRequestId, reviewerId, project, (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewer);
            }
        });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote>>deferred.promise;
    }
    
    /**
    * Adds reviewers to a git pull request
    * 
    * @param {VSSInterfaces.IdentityRef[]} reviewers
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    */
    public createPullRequestReviewers(
        reviewers: VSSInterfaces.IdentityRef[], 
        repositoryId: string, 
        pullRequestId: number, 
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote[]> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote[]>();

        this.GitApi.createPullRequestReviewers(reviewers, repositoryId, pullRequestId, project, (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewers);
            }
        });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote[]>>deferred.promise;
    }
    
    /**
    * Retrieve a reviewer from a pull request
    * 
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} reviewerId
    * @param {string} project - Project ID or project name
    */
    public getPullRequestReviewer(
        repositoryId: string, 
        pullRequestId: number, 
        reviewerId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote>();

        this.GitApi.getPullRequestReviewer(repositoryId, pullRequestId, reviewerId, project, (err: any, statusCode: number, PullRequestReviewer: GitInterfaces.IdentityRefWithVote) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewer);
            }
        });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote>>deferred.promise;
    }
    
    /**
    * Retrieve a pull request reviewers
    * 
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    */
    public getPullRequestReviewers(
        repositoryId: string, 
        pullRequestId: number, 
        project?: string
        ): Q.Promise<GitInterfaces.IdentityRefWithVote[]> {
    
        var deferred = Q.defer<GitInterfaces.IdentityRefWithVote[]>();

        this.GitApi.getPullRequestReviewers(repositoryId, pullRequestId, project, (err: any, statusCode: number, PullRequestReviewers: GitInterfaces.IdentityRefWithVote[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestReviewers);
            }
        });

        return <Q.Promise<GitInterfaces.IdentityRefWithVote[]>>deferred.promise;
    }
    
    /**
    * Create a git pull request
    * 
    * @param {GitInterfaces.GitPullRequest} gitPullRequestToCreate
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    public createPullRequest(
        gitPullRequestToCreate: GitInterfaces.GitPullRequest, 
        repositoryId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        this.GitApi.createPullRequest(gitPullRequestToCreate, repositoryId, project, (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }
    
    /**
    * Retrieve a pull request
    * 
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    * @param {number} maxCommentLength
    * @param {number} skip
    * @param {number} top
    */
    public getPullRequest(
        repositoryId: string, 
        pullRequestId: number, 
        project?: string, 
        maxCommentLength?: number, 
        skip?: number, 
        top?: number
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        this.GitApi.getPullRequest(repositoryId, pullRequestId, project, maxCommentLength, skip, top, (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }
    
    /**
    * Query for pull requests
    * 
    * @param {string} repositoryId
    * @param {GitInterfaces.GitPullRequestSearchCriteria} searchCriteria
    * @param {string} project - Project ID or project name
    * @param {number} maxCommentLength
    * @param {number} skip
    * @param {number} top
    */
    public getPullRequests(
        repositoryId: string, 
        searchCriteria: GitInterfaces.GitPullRequestSearchCriteria, 
        project?: string, 
        maxCommentLength?: number, 
        skip?: number, 
        top?: number
        ): Q.Promise<GitInterfaces.GitPullRequest[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest[]>();

        this.GitApi.getPullRequests(repositoryId, searchCriteria, project, maxCommentLength, skip, top, (err: any, statusCode: number, PullRequests: GitInterfaces.GitPullRequest[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequests);
            }
        });

        return <Q.Promise<GitInterfaces.GitPullRequest[]>>deferred.promise;
    }
    
    /**
    * Updates a pull request
    * 
    * @param {GitInterfaces.GitPullRequest} gitPullRequestToUpdate
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    */
    public updatePullRequest(
        gitPullRequestToUpdate: GitInterfaces.GitPullRequest, 
        repositoryId: string, 
        pullRequestId: number, 
        project?: string
        ): Q.Promise<GitInterfaces.GitPullRequest> {
    
        var deferred = Q.defer<GitInterfaces.GitPullRequest>();

        this.GitApi.updatePullRequest(gitPullRequestToUpdate, repositoryId, pullRequestId, project, (err: any, statusCode: number, PullRequest: GitInterfaces.GitPullRequest) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequest);
            }
        });

        return <Q.Promise<GitInterfaces.GitPullRequest>>deferred.promise;
    }
    
    /**
    * Retrieve a pull request work items
    * 
    * @param {string} repositoryId
    * @param {number} pullRequestId
    * @param {string} project - Project ID or project name
    * @param {number} commitsTop
    * @param {number} commitsSkip
    */
    public getPullRequestWorkItems(
        repositoryId: string, 
        pullRequestId: number, 
        project?: string, 
        commitsTop?: number, 
        commitsSkip?: number
        ): Q.Promise<GitInterfaces.AssociatedWorkItem[]> {
    
        var deferred = Q.defer<GitInterfaces.AssociatedWorkItem[]>();

        this.GitApi.getPullRequestWorkItems(repositoryId, pullRequestId, project, commitsTop, commitsSkip, (err: any, statusCode: number, PullRequestWorkItems: GitInterfaces.AssociatedWorkItem[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(PullRequestWorkItems);
            }
        });

        return <Q.Promise<GitInterfaces.AssociatedWorkItem[]>>deferred.promise;
    }
    
    /**
    * Push changes to the repository.
    * 
    * @param {GitInterfaces.GitPush} push
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, a project-scoped route must be used.
    * @param {string} project - Project ID or project name
    */
    public createPush(
        push: GitInterfaces.GitPush, 
        repositoryId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.GitPush> {
    
        var deferred = Q.defer<GitInterfaces.GitPush>();

        this.GitApi.createPush(push, repositoryId, project, (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pushe);
            }
        });

        return <Q.Promise<GitInterfaces.GitPush>>deferred.promise;
    }
    
    /**
    * Retrieve a particular push.
    * 
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {number} pushId - The id of the push.
    * @param {string} project - Project ID or project name
    * @param {number} includeCommits - The number of commits to include in the result.
    * @param {boolean} includeRefUpdates
    */
    public getPush(
        repositoryId: string, 
        pushId: number, 
        project?: string, 
        includeCommits?: number, 
        includeRefUpdates?: boolean
        ): Q.Promise<GitInterfaces.GitPush> {
    
        var deferred = Q.defer<GitInterfaces.GitPush>();

        this.GitApi.getPush(repositoryId, pushId, project, includeCommits, includeRefUpdates, (err: any, statusCode: number, pushe: GitInterfaces.GitPush) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pushe);
            }
        });

        return <Q.Promise<GitInterfaces.GitPush>>deferred.promise;
    }
    
    /**
    * Retrieves pushes associated with the specified repository.
    * 
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    * @param {GitInterfaces.GitPushSearchCriteria} searchCriteria
    */
    public getPushes(
        repositoryId: string, 
        project?: string, 
        skip?: number, 
        top?: number, 
        searchCriteria?: GitInterfaces.GitPushSearchCriteria
        ): Q.Promise<GitInterfaces.GitPush[]> {
    
        var deferred = Q.defer<GitInterfaces.GitPush[]>();

        this.GitApi.getPushes(repositoryId, project, skip, top, searchCriteria, (err: any, statusCode: number, pushes: GitInterfaces.GitPush[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(pushes);
            }
        });

        return <Q.Promise<GitInterfaces.GitPush[]>>deferred.promise;
    }
    
    /**
    * Queries the provided repository for its refs and returns them.
    * 
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {string} filter - [optional] A filter to apply to the refs.
    * @param {boolean} includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
    */
    public getRefs(
        repositoryId: string, 
        project?: string, 
        filter?: string, 
        includeLinks?: boolean
        ): Q.Promise<GitInterfaces.GitRef[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRef[]>();

        this.GitApi.getRefs(repositoryId, project, filter, includeLinks, (err: any, statusCode: number, refs: GitInterfaces.GitRef[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refs);
            }
        });

        return <Q.Promise<GitInterfaces.GitRef[]>>deferred.promise;
    }
    
    /**
    * Creates or updates refs with the given information
    * 
    * @param {GitInterfaces.GitRefUpdate[]} refUpdates - List of ref updates to attempt to perform
    * @param {string} repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
    * @param {string} project - Project ID or project name
    * @param {string} projectId - The id of the project.
    */
    public updateRefs(
        refUpdates: GitInterfaces.GitRefUpdate[], 
        repositoryId: string, 
        project?: string, 
        projectId?: string
        ): Q.Promise<GitInterfaces.GitRefUpdateResult[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRefUpdateResult[]>();

        this.GitApi.updateRefs(refUpdates, repositoryId, project, projectId, (err: any, statusCode: number, refs: GitInterfaces.GitRefUpdateResult[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(refs);
            }
        });

        return <Q.Promise<GitInterfaces.GitRefUpdateResult[]>>deferred.promise;
    }
    
    /**
    * Create a git repository
    * 
    * @param {GitInterfaces.GitRepository} gitRepositoryToCreate
    * @param {string} project - Project ID or project name
    */
    public createRepository(
        gitRepositoryToCreate: GitInterfaces.GitRepository, 
        project?: string
        ): Q.Promise<GitInterfaces.GitRepository> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository>();

        this.GitApi.createRepository(gitRepositoryToCreate, project, (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositorie);
            }
        });

        return <Q.Promise<GitInterfaces.GitRepository>>deferred.promise;
    }
    
    /**
    * Retrieve git repositories.
    * 
    * @param {string} project - Project ID or project name
    * @param {boolean} includeLinks
    */
    public getRepositories(
        project?: string, 
        includeLinks?: boolean
        ): Q.Promise<GitInterfaces.GitRepository[]> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository[]>();

        this.GitApi.getRepositories(project, includeLinks, (err: any, statusCode: number, Repositories: GitInterfaces.GitRepository[]) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositories);
            }
        });

        return <Q.Promise<GitInterfaces.GitRepository[]>>deferred.promise;
    }
    
    /**
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    public getRepository(
        repositoryId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.GitRepository> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository>();

        this.GitApi.getRepository(repositoryId, project, (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositorie);
            }
        });

        return <Q.Promise<GitInterfaces.GitRepository>>deferred.promise;
    }
    
    /**
    * Updates the Git repository with the single populated change in the specified repository information.
    * 
    * @param {GitInterfaces.GitRepository} newRepositoryInfo
    * @param {string} repositoryId
    * @param {string} project - Project ID or project name
    */
    public updateRepository(
        newRepositoryInfo: GitInterfaces.GitRepository, 
        repositoryId: string, 
        project?: string
        ): Q.Promise<GitInterfaces.GitRepository> {
    
        var deferred = Q.defer<GitInterfaces.GitRepository>();

        this.GitApi.updateRepository(newRepositoryInfo, repositoryId, project, (err: any, statusCode: number, Repositorie: GitInterfaces.GitRepository) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Repositorie);
            }
        });

        return <Q.Promise<GitInterfaces.GitRepository>>deferred.promise;
    }
    
    /**
    * @param {string} repositoryId
    * @param {string} sha1
    * @param {string} project - Project ID or project name
    * @param {string} projectId
    * @param {boolean} recursive
    * @param {string} fileName
    */
    public getTree(
        repositoryId: string, 
        sha1: string, 
        project?: string, 
        projectId?: string, 
        recursive?: boolean, 
        fileName?: string
        ): Q.Promise<GitInterfaces.GitTreeRef> {
    
        var deferred = Q.defer<GitInterfaces.GitTreeRef>();

        this.GitApi.getTree(repositoryId, sha1, project, projectId, recursive, fileName, (err: any, statusCode: number, Tree: GitInterfaces.GitTreeRef) => {
            if(err) {
                err.statusCode = statusCode;
                deferred.reject(err);
            }
            else {
                deferred.resolve(Tree);
            }
        });

        return <Q.Promise<GitInterfaces.GitTreeRef>>deferred.promise;
    }
    
}
