/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file buf/alpha/registry/v1alpha1/repository_track.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
//
// Copyright 2020-2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, Timestamp, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message buf.alpha.registry.v1alpha1.RepositoryTrack
 */
export class RepositoryTrack extends Message<RepositoryTrack> {
  /**
   * primary key, unique, immutable
   *
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * immutable
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * We reserve field number '3' for the update_time.
   * google.protobuf.Timestamp update_time = 3;
   * The name of the repository track, i.e. "v1".
   *
   * @generated from field: string name = 4;
   */
  name = "";

  constructor(data?: PartialMessage<RepositoryTrack>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "buf.alpha.registry.v1alpha1.RepositoryTrack";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "create_time", kind: "message", T: Timestamp },
    { no: 4, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RepositoryTrack {
    return new RepositoryTrack().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RepositoryTrack {
    return new RepositoryTrack().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RepositoryTrack {
    return new RepositoryTrack().fromJsonString(jsonString, options);
  }

  static equals(
    a: RepositoryTrack | PlainMessage<RepositoryTrack> | undefined,
    b: RepositoryTrack | PlainMessage<RepositoryTrack> | undefined
  ): boolean {
    return proto3.util.equals(RepositoryTrack, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryTrackRequest
 */
export class CreateRepositoryTrackRequest extends Message<CreateRepositoryTrackRequest> {
  /**
   * The ID of the repository this track should be created on.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId = "";

  /**
   * The name of the repository track, i.e. v1.
   *
   * @generated from field: string name = 2;
   */
  name = "";

  constructor(data?: PartialMessage<CreateRepositoryTrackRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.CreateRepositoryTrackRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "repository_id",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 2, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateRepositoryTrackRequest {
    return new CreateRepositoryTrackRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateRepositoryTrackRequest {
    return new CreateRepositoryTrackRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateRepositoryTrackRequest {
    return new CreateRepositoryTrackRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | CreateRepositoryTrackRequest
      | PlainMessage<CreateRepositoryTrackRequest>
      | undefined,
    b:
      | CreateRepositoryTrackRequest
      | PlainMessage<CreateRepositoryTrackRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(CreateRepositoryTrackRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.CreateRepositoryTrackResponse
 */
export class CreateRepositoryTrackResponse extends Message<CreateRepositoryTrackResponse> {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTrack repository_track = 1;
   */
  repositoryTrack?: RepositoryTrack;

  constructor(data?: PartialMessage<CreateRepositoryTrackResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.CreateRepositoryTrackResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_track", kind: "message", T: RepositoryTrack },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): CreateRepositoryTrackResponse {
    return new CreateRepositoryTrackResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): CreateRepositoryTrackResponse {
    return new CreateRepositoryTrackResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): CreateRepositoryTrackResponse {
    return new CreateRepositoryTrackResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | CreateRepositoryTrackResponse
      | PlainMessage<CreateRepositoryTrackResponse>
      | undefined,
    b:
      | CreateRepositoryTrackResponse
      | PlainMessage<CreateRepositoryTrackResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(CreateRepositoryTrackResponse, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTracksRequest
 */
export class ListRepositoryTracksRequest extends Message<ListRepositoryTracksRequest> {
  /**
   * The ID of the repository whose tracks should be listed.
   *
   * @generated from field: string repository_id = 1;
   */
  repositoryId = "";

  /**
   * @generated from field: uint32 page_size = 2;
   */
  pageSize = 0;

  /**
   * The first page is returned if this is empty.
   *
   * @generated from field: string page_token = 3;
   */
  pageToken = "";

  /**
   * @generated from field: bool reverse = 4;
   */
  reverse = false;

  constructor(data?: PartialMessage<ListRepositoryTracksRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.ListRepositoryTracksRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "repository_id",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 2, name: "page_size", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "reverse", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ListRepositoryTracksRequest {
    return new ListRepositoryTracksRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ListRepositoryTracksRequest {
    return new ListRepositoryTracksRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ListRepositoryTracksRequest {
    return new ListRepositoryTracksRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | ListRepositoryTracksRequest
      | PlainMessage<ListRepositoryTracksRequest>
      | undefined,
    b:
      | ListRepositoryTracksRequest
      | PlainMessage<ListRepositoryTracksRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(ListRepositoryTracksRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.ListRepositoryTracksResponse
 */
export class ListRepositoryTracksResponse extends Message<ListRepositoryTracksResponse> {
  /**
   * @generated from field: repeated buf.alpha.registry.v1alpha1.RepositoryTrack repository_tracks = 1;
   */
  repositoryTracks: RepositoryTrack[] = [];

  /**
   * There are no more pages if this is empty.
   *
   * @generated from field: string next_page_token = 2;
   */
  nextPageToken = "";

  constructor(data?: PartialMessage<ListRepositoryTracksResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.ListRepositoryTracksResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "repository_tracks",
      kind: "message",
      T: RepositoryTrack,
      repeated: true,
    },
    {
      no: 2,
      name: "next_page_token",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ListRepositoryTracksResponse {
    return new ListRepositoryTracksResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ListRepositoryTracksResponse {
    return new ListRepositoryTracksResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ListRepositoryTracksResponse {
    return new ListRepositoryTracksResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | ListRepositoryTracksResponse
      | PlainMessage<ListRepositoryTracksResponse>
      | undefined,
    b:
      | ListRepositoryTracksResponse
      | PlainMessage<ListRepositoryTracksResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(ListRepositoryTracksResponse, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameRequest
 */
export class DeleteRepositoryTrackByNameRequest extends Message<DeleteRepositoryTrackByNameRequest> {
  /**
   * @generated from field: string owner_name = 1;
   */
  ownerName = "";

  /**
   * @generated from field: string repository_name = 2;
   */
  repositoryName = "";

  /**
   * The name of the repository track
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<DeleteRepositoryTrackByNameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: "repository_name",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteRepositoryTrackByNameRequest {
    return new DeleteRepositoryTrackByNameRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteRepositoryTrackByNameRequest {
    return new DeleteRepositoryTrackByNameRequest().fromJson(
      jsonValue,
      options
    );
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteRepositoryTrackByNameRequest {
    return new DeleteRepositoryTrackByNameRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | DeleteRepositoryTrackByNameRequest
      | PlainMessage<DeleteRepositoryTrackByNameRequest>
      | undefined,
    b:
      | DeleteRepositoryTrackByNameRequest
      | PlainMessage<DeleteRepositoryTrackByNameRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(DeleteRepositoryTrackByNameRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameResponse
 */
export class DeleteRepositoryTrackByNameResponse extends Message<DeleteRepositoryTrackByNameResponse> {
  constructor(data?: PartialMessage<DeleteRepositoryTrackByNameResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.DeleteRepositoryTrackByNameResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): DeleteRepositoryTrackByNameResponse {
    return new DeleteRepositoryTrackByNameResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): DeleteRepositoryTrackByNameResponse {
    return new DeleteRepositoryTrackByNameResponse().fromJson(
      jsonValue,
      options
    );
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): DeleteRepositoryTrackByNameResponse {
    return new DeleteRepositoryTrackByNameResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | DeleteRepositoryTrackByNameResponse
      | PlainMessage<DeleteRepositoryTrackByNameResponse>
      | undefined,
    b:
      | DeleteRepositoryTrackByNameResponse
      | PlainMessage<DeleteRepositoryTrackByNameResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(DeleteRepositoryTrackByNameResponse, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameRequest
 */
export class GetRepositoryTrackByNameRequest extends Message<GetRepositoryTrackByNameRequest> {
  /**
   * @generated from field: string owner_name = 1;
   */
  ownerName = "";

  /**
   * @generated from field: string repository_name = 2;
   */
  repositoryName = "";

  /**
   * The name of the repository track
   *
   * @generated from field: string name = 3;
   */
  name = "";

  constructor(data?: PartialMessage<GetRepositoryTrackByNameRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "owner_name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    {
      no: 2,
      name: "repository_name",
      kind: "scalar",
      T: 9 /* ScalarType.STRING */,
    },
    { no: 3, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetRepositoryTrackByNameRequest {
    return new GetRepositoryTrackByNameRequest().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetRepositoryTrackByNameRequest {
    return new GetRepositoryTrackByNameRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetRepositoryTrackByNameRequest {
    return new GetRepositoryTrackByNameRequest().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetRepositoryTrackByNameRequest
      | PlainMessage<GetRepositoryTrackByNameRequest>
      | undefined,
    b:
      | GetRepositoryTrackByNameRequest
      | PlainMessage<GetRepositoryTrackByNameRequest>
      | undefined
  ): boolean {
    return proto3.util.equals(GetRepositoryTrackByNameRequest, a, b);
  }
}

/**
 * @generated from message buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameResponse
 */
export class GetRepositoryTrackByNameResponse extends Message<GetRepositoryTrackByNameResponse> {
  /**
   * @generated from field: buf.alpha.registry.v1alpha1.RepositoryTrack repository_track = 1;
   */
  repositoryTrack?: RepositoryTrack;

  constructor(data?: PartialMessage<GetRepositoryTrackByNameResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName =
    "buf.alpha.registry.v1alpha1.GetRepositoryTrackByNameResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "repository_track", kind: "message", T: RepositoryTrack },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): GetRepositoryTrackByNameResponse {
    return new GetRepositoryTrackByNameResponse().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): GetRepositoryTrackByNameResponse {
    return new GetRepositoryTrackByNameResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): GetRepositoryTrackByNameResponse {
    return new GetRepositoryTrackByNameResponse().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | GetRepositoryTrackByNameResponse
      | PlainMessage<GetRepositoryTrackByNameResponse>
      | undefined,
    b:
      | GetRepositoryTrackByNameResponse
      | PlainMessage<GetRepositoryTrackByNameResponse>
      | undefined
  ): boolean {
    return proto3.util.equals(GetRepositoryTrackByNameResponse, a, b);
  }
}
