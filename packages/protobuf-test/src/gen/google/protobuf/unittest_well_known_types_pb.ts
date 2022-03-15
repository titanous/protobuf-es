/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file google/protobuf/unittest_well_known_types.proto (package protobuf_unittest, syntax proto3)

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import {
  Any,
  Api,
  BoolValue,
  BytesValue,
  DoubleValue,
  Duration,
  Empty,
  FieldMask,
  FloatValue,
  Int32Value,
  Int64Value,
  Message,
  SourceContext,
  StringValue,
  Struct,
  Timestamp,
  UInt32Value,
  UInt64Value,
  Value,
  proto3,
} from "@bufbuild/protobuf";
import { Type } from "./type_pb.js";

/**
 * Test that we can include all well-known types.
 * Each wrapper type is included separately, as languages
 * map handle different wrappers in different ways.
 *
 * @generated from message protobuf_unittest.TestWellKnownTypes
 */
export class TestWellKnownTypes extends Message<TestWellKnownTypes> {
  /**
   * @generated from field: google.protobuf.Any any_field = 1;
   */
  anyField?: Any;

  /**
   * @generated from field: google.protobuf.Api api_field = 2;
   */
  apiField?: Api;

  /**
   * @generated from field: google.protobuf.Duration duration_field = 3;
   */
  durationField?: Duration;

  /**
   * @generated from field: google.protobuf.Empty empty_field = 4;
   */
  emptyField?: Empty;

  /**
   * @generated from field: google.protobuf.FieldMask field_mask_field = 5;
   */
  fieldMaskField?: FieldMask;

  /**
   * @generated from field: google.protobuf.SourceContext source_context_field = 6;
   */
  sourceContextField?: SourceContext;

  /**
   * @generated from field: google.protobuf.Struct struct_field = 7;
   */
  structField?: Struct;

  /**
   * @generated from field: google.protobuf.Timestamp timestamp_field = 8;
   */
  timestampField?: Timestamp;

  /**
   * @generated from field: google.protobuf.Type type_field = 9;
   */
  typeField?: Type;

  /**
   * @generated from field: google.protobuf.DoubleValue double_field = 10;
   */
  doubleField?: number;

  /**
   * @generated from field: google.protobuf.FloatValue float_field = 11;
   */
  floatField?: number;

  /**
   * @generated from field: google.protobuf.Int64Value int64_field = 12;
   */
  int64Field?: bigint;

  /**
   * @generated from field: google.protobuf.UInt64Value uint64_field = 13;
   */
  uint64Field?: bigint;

  /**
   * @generated from field: google.protobuf.Int32Value int32_field = 14;
   */
  int32Field?: number;

  /**
   * @generated from field: google.protobuf.UInt32Value uint32_field = 15;
   */
  uint32Field?: number;

  /**
   * @generated from field: google.protobuf.BoolValue bool_field = 16;
   */
  boolField?: boolean;

  /**
   * @generated from field: google.protobuf.StringValue string_field = 17;
   */
  stringField?: string;

  /**
   * @generated from field: google.protobuf.BytesValue bytes_field = 18;
   */
  bytesField?: Uint8Array;

  /**
   * Part of struct, but useful to be able to test separately
   *
   * @generated from field: google.protobuf.Value value_field = 19;
   */
  valueField?: Value;

  constructor(data?: PartialMessage<TestWellKnownTypes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.TestWellKnownTypes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "any_field", kind: "message", T: Any },
    { no: 2, name: "api_field", kind: "message", T: Api },
    { no: 3, name: "duration_field", kind: "message", T: Duration },
    { no: 4, name: "empty_field", kind: "message", T: Empty },
    { no: 5, name: "field_mask_field", kind: "message", T: FieldMask },
    { no: 6, name: "source_context_field", kind: "message", T: SourceContext },
    { no: 7, name: "struct_field", kind: "message", T: Struct },
    { no: 8, name: "timestamp_field", kind: "message", T: Timestamp },
    { no: 9, name: "type_field", kind: "message", T: Type },
    { no: 10, name: "double_field", kind: "message", T: DoubleValue },
    { no: 11, name: "float_field", kind: "message", T: FloatValue },
    { no: 12, name: "int64_field", kind: "message", T: Int64Value },
    { no: 13, name: "uint64_field", kind: "message", T: UInt64Value },
    { no: 14, name: "int32_field", kind: "message", T: Int32Value },
    { no: 15, name: "uint32_field", kind: "message", T: UInt32Value },
    { no: 16, name: "bool_field", kind: "message", T: BoolValue },
    { no: 17, name: "string_field", kind: "message", T: StringValue },
    { no: 18, name: "bytes_field", kind: "message", T: BytesValue },
    { no: 19, name: "value_field", kind: "message", T: Value },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): TestWellKnownTypes {
    return new TestWellKnownTypes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): TestWellKnownTypes {
    return new TestWellKnownTypes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): TestWellKnownTypes {
    return new TestWellKnownTypes().fromJsonString(jsonString, options);
  }

  static equals(
    a: TestWellKnownTypes | PlainMessage<TestWellKnownTypes> | undefined,
    b: TestWellKnownTypes | PlainMessage<TestWellKnownTypes> | undefined
  ): boolean {
    return proto3.util.equals(TestWellKnownTypes, a, b);
  }
}

/**
 * A repeated field for each well-known type.
 *
 * @generated from message protobuf_unittest.RepeatedWellKnownTypes
 */
export class RepeatedWellKnownTypes extends Message<RepeatedWellKnownTypes> {
  /**
   * @generated from field: repeated google.protobuf.Any any_field = 1;
   */
  anyField: Any[] = [];

  /**
   * @generated from field: repeated google.protobuf.Api api_field = 2;
   */
  apiField: Api[] = [];

  /**
   * @generated from field: repeated google.protobuf.Duration duration_field = 3;
   */
  durationField: Duration[] = [];

  /**
   * @generated from field: repeated google.protobuf.Empty empty_field = 4;
   */
  emptyField: Empty[] = [];

  /**
   * @generated from field: repeated google.protobuf.FieldMask field_mask_field = 5;
   */
  fieldMaskField: FieldMask[] = [];

  /**
   * @generated from field: repeated google.protobuf.SourceContext source_context_field = 6;
   */
  sourceContextField: SourceContext[] = [];

  /**
   * @generated from field: repeated google.protobuf.Struct struct_field = 7;
   */
  structField: Struct[] = [];

  /**
   * @generated from field: repeated google.protobuf.Timestamp timestamp_field = 8;
   */
  timestampField: Timestamp[] = [];

  /**
   * @generated from field: repeated google.protobuf.Type type_field = 9;
   */
  typeField: Type[] = [];

  /**
   * These don't actually make a lot of sense, but they're not prohibited...
   *
   * @generated from field: repeated google.protobuf.DoubleValue double_field = 10;
   */
  doubleField: DoubleValue[] = [];

  /**
   * @generated from field: repeated google.protobuf.FloatValue float_field = 11;
   */
  floatField: FloatValue[] = [];

  /**
   * @generated from field: repeated google.protobuf.Int64Value int64_field = 12;
   */
  int64Field: Int64Value[] = [];

  /**
   * @generated from field: repeated google.protobuf.UInt64Value uint64_field = 13;
   */
  uint64Field: UInt64Value[] = [];

  /**
   * @generated from field: repeated google.protobuf.Int32Value int32_field = 14;
   */
  int32Field: Int32Value[] = [];

  /**
   * @generated from field: repeated google.protobuf.UInt32Value uint32_field = 15;
   */
  uint32Field: UInt32Value[] = [];

  /**
   * @generated from field: repeated google.protobuf.BoolValue bool_field = 16;
   */
  boolField: BoolValue[] = [];

  /**
   * @generated from field: repeated google.protobuf.StringValue string_field = 17;
   */
  stringField: StringValue[] = [];

  /**
   * @generated from field: repeated google.protobuf.BytesValue bytes_field = 18;
   */
  bytesField: BytesValue[] = [];

  constructor(data?: PartialMessage<RepeatedWellKnownTypes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.RepeatedWellKnownTypes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "any_field", kind: "message", T: Any, repeated: true },
    { no: 2, name: "api_field", kind: "message", T: Api, repeated: true },
    {
      no: 3,
      name: "duration_field",
      kind: "message",
      T: Duration,
      repeated: true,
    },
    { no: 4, name: "empty_field", kind: "message", T: Empty, repeated: true },
    {
      no: 5,
      name: "field_mask_field",
      kind: "message",
      T: FieldMask,
      repeated: true,
    },
    {
      no: 6,
      name: "source_context_field",
      kind: "message",
      T: SourceContext,
      repeated: true,
    },
    { no: 7, name: "struct_field", kind: "message", T: Struct, repeated: true },
    {
      no: 8,
      name: "timestamp_field",
      kind: "message",
      T: Timestamp,
      repeated: true,
    },
    { no: 9, name: "type_field", kind: "message", T: Type, repeated: true },
    {
      no: 10,
      name: "double_field",
      kind: "message",
      T: DoubleValue,
      repeated: true,
    },
    {
      no: 11,
      name: "float_field",
      kind: "message",
      T: FloatValue,
      repeated: true,
    },
    {
      no: 12,
      name: "int64_field",
      kind: "message",
      T: Int64Value,
      repeated: true,
    },
    {
      no: 13,
      name: "uint64_field",
      kind: "message",
      T: UInt64Value,
      repeated: true,
    },
    {
      no: 14,
      name: "int32_field",
      kind: "message",
      T: Int32Value,
      repeated: true,
    },
    {
      no: 15,
      name: "uint32_field",
      kind: "message",
      T: UInt32Value,
      repeated: true,
    },
    {
      no: 16,
      name: "bool_field",
      kind: "message",
      T: BoolValue,
      repeated: true,
    },
    {
      no: 17,
      name: "string_field",
      kind: "message",
      T: StringValue,
      repeated: true,
    },
    {
      no: 18,
      name: "bytes_field",
      kind: "message",
      T: BytesValue,
      repeated: true,
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): RepeatedWellKnownTypes {
    return new RepeatedWellKnownTypes().fromJsonString(jsonString, options);
  }

  static equals(
    a:
      | RepeatedWellKnownTypes
      | PlainMessage<RepeatedWellKnownTypes>
      | undefined,
    b: RepeatedWellKnownTypes | PlainMessage<RepeatedWellKnownTypes> | undefined
  ): boolean {
    return proto3.util.equals(RepeatedWellKnownTypes, a, b);
  }
}

/**
 * @generated from message protobuf_unittest.OneofWellKnownTypes
 */
export class OneofWellKnownTypes extends Message<OneofWellKnownTypes> {
  /**
   * @generated from oneof protobuf_unittest.OneofWellKnownTypes.oneof_field
   */
  oneofField:
    | {
        /**
         * @generated from field: google.protobuf.Any any_field = 1;
         */
        value: Any;
        case: "anyField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Api api_field = 2;
         */
        value: Api;
        case: "apiField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Duration duration_field = 3;
         */
        value: Duration;
        case: "durationField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Empty empty_field = 4;
         */
        value: Empty;
        case: "emptyField";
      }
    | {
        /**
         * @generated from field: google.protobuf.FieldMask field_mask_field = 5;
         */
        value: FieldMask;
        case: "fieldMaskField";
      }
    | {
        /**
         * @generated from field: google.protobuf.SourceContext source_context_field = 6;
         */
        value: SourceContext;
        case: "sourceContextField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Struct struct_field = 7;
         */
        value: Struct;
        case: "structField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Timestamp timestamp_field = 8;
         */
        value: Timestamp;
        case: "timestampField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Type type_field = 9;
         */
        value: Type;
        case: "typeField";
      }
    | {
        /**
         * @generated from field: google.protobuf.DoubleValue double_field = 10;
         */
        value: DoubleValue;
        case: "doubleField";
      }
    | {
        /**
         * @generated from field: google.protobuf.FloatValue float_field = 11;
         */
        value: FloatValue;
        case: "floatField";
      }
    | {
        /**
         * @generated from field: google.protobuf.Int64Value int64_field = 12;
         */
        value: Int64Value;
        case: "int64Field";
      }
    | {
        /**
         * @generated from field: google.protobuf.UInt64Value uint64_field = 13;
         */
        value: UInt64Value;
        case: "uint64Field";
      }
    | {
        /**
         * @generated from field: google.protobuf.Int32Value int32_field = 14;
         */
        value: Int32Value;
        case: "int32Field";
      }
    | {
        /**
         * @generated from field: google.protobuf.UInt32Value uint32_field = 15;
         */
        value: UInt32Value;
        case: "uint32Field";
      }
    | {
        /**
         * @generated from field: google.protobuf.BoolValue bool_field = 16;
         */
        value: BoolValue;
        case: "boolField";
      }
    | {
        /**
         * @generated from field: google.protobuf.StringValue string_field = 17;
         */
        value: StringValue;
        case: "stringField";
      }
    | {
        /**
         * @generated from field: google.protobuf.BytesValue bytes_field = 18;
         */
        value: BytesValue;
        case: "bytesField";
      }
    | { case: undefined; value?: undefined } = { case: undefined };

  constructor(data?: PartialMessage<OneofWellKnownTypes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.OneofWellKnownTypes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "any_field", kind: "message", T: Any, oneof: "oneof_field" },
    { no: 2, name: "api_field", kind: "message", T: Api, oneof: "oneof_field" },
    {
      no: 3,
      name: "duration_field",
      kind: "message",
      T: Duration,
      oneof: "oneof_field",
    },
    {
      no: 4,
      name: "empty_field",
      kind: "message",
      T: Empty,
      oneof: "oneof_field",
    },
    {
      no: 5,
      name: "field_mask_field",
      kind: "message",
      T: FieldMask,
      oneof: "oneof_field",
    },
    {
      no: 6,
      name: "source_context_field",
      kind: "message",
      T: SourceContext,
      oneof: "oneof_field",
    },
    {
      no: 7,
      name: "struct_field",
      kind: "message",
      T: Struct,
      oneof: "oneof_field",
    },
    {
      no: 8,
      name: "timestamp_field",
      kind: "message",
      T: Timestamp,
      oneof: "oneof_field",
    },
    {
      no: 9,
      name: "type_field",
      kind: "message",
      T: Type,
      oneof: "oneof_field",
    },
    {
      no: 10,
      name: "double_field",
      kind: "message",
      T: DoubleValue,
      oneof: "oneof_field",
    },
    {
      no: 11,
      name: "float_field",
      kind: "message",
      T: FloatValue,
      oneof: "oneof_field",
    },
    {
      no: 12,
      name: "int64_field",
      kind: "message",
      T: Int64Value,
      oneof: "oneof_field",
    },
    {
      no: 13,
      name: "uint64_field",
      kind: "message",
      T: UInt64Value,
      oneof: "oneof_field",
    },
    {
      no: 14,
      name: "int32_field",
      kind: "message",
      T: Int32Value,
      oneof: "oneof_field",
    },
    {
      no: 15,
      name: "uint32_field",
      kind: "message",
      T: UInt32Value,
      oneof: "oneof_field",
    },
    {
      no: 16,
      name: "bool_field",
      kind: "message",
      T: BoolValue,
      oneof: "oneof_field",
    },
    {
      no: 17,
      name: "string_field",
      kind: "message",
      T: StringValue,
      oneof: "oneof_field",
    },
    {
      no: 18,
      name: "bytes_field",
      kind: "message",
      T: BytesValue,
      oneof: "oneof_field",
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): OneofWellKnownTypes {
    return new OneofWellKnownTypes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): OneofWellKnownTypes {
    return new OneofWellKnownTypes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): OneofWellKnownTypes {
    return new OneofWellKnownTypes().fromJsonString(jsonString, options);
  }

  static equals(
    a: OneofWellKnownTypes | PlainMessage<OneofWellKnownTypes> | undefined,
    b: OneofWellKnownTypes | PlainMessage<OneofWellKnownTypes> | undefined
  ): boolean {
    return proto3.util.equals(OneofWellKnownTypes, a, b);
  }
}

/**
 * A map field for each well-known type. We only
 * need to worry about the value part of the map being the
 * well-known types, as messages can't be map keys.
 *
 * @generated from message protobuf_unittest.MapWellKnownTypes
 */
export class MapWellKnownTypes extends Message<MapWellKnownTypes> {
  /**
   * @generated from field: map<int32, google.protobuf.Any> any_field = 1;
   */
  anyField: { [key: number]: Any } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Api> api_field = 2;
   */
  apiField: { [key: number]: Api } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Duration> duration_field = 3;
   */
  durationField: { [key: number]: Duration } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Empty> empty_field = 4;
   */
  emptyField: { [key: number]: Empty } = {};

  /**
   * @generated from field: map<int32, google.protobuf.FieldMask> field_mask_field = 5;
   */
  fieldMaskField: { [key: number]: FieldMask } = {};

  /**
   * @generated from field: map<int32, google.protobuf.SourceContext> source_context_field = 6;
   */
  sourceContextField: { [key: number]: SourceContext } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Struct> struct_field = 7;
   */
  structField: { [key: number]: Struct } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Timestamp> timestamp_field = 8;
   */
  timestampField: { [key: number]: Timestamp } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Type> type_field = 9;
   */
  typeField: { [key: number]: Type } = {};

  /**
   * @generated from field: map<int32, google.protobuf.DoubleValue> double_field = 10;
   */
  doubleField: { [key: number]: DoubleValue } = {};

  /**
   * @generated from field: map<int32, google.protobuf.FloatValue> float_field = 11;
   */
  floatField: { [key: number]: FloatValue } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Int64Value> int64_field = 12;
   */
  int64Field: { [key: number]: Int64Value } = {};

  /**
   * @generated from field: map<int32, google.protobuf.UInt64Value> uint64_field = 13;
   */
  uint64Field: { [key: number]: UInt64Value } = {};

  /**
   * @generated from field: map<int32, google.protobuf.Int32Value> int32_field = 14;
   */
  int32Field: { [key: number]: Int32Value } = {};

  /**
   * @generated from field: map<int32, google.protobuf.UInt32Value> uint32_field = 15;
   */
  uint32Field: { [key: number]: UInt32Value } = {};

  /**
   * @generated from field: map<int32, google.protobuf.BoolValue> bool_field = 16;
   */
  boolField: { [key: number]: BoolValue } = {};

  /**
   * @generated from field: map<int32, google.protobuf.StringValue> string_field = 17;
   */
  stringField: { [key: number]: StringValue } = {};

  /**
   * @generated from field: map<int32, google.protobuf.BytesValue> bytes_field = 18;
   */
  bytesField: { [key: number]: BytesValue } = {};

  constructor(data?: PartialMessage<MapWellKnownTypes>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "protobuf_unittest.MapWellKnownTypes";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    {
      no: 1,
      name: "any_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Any },
    },
    {
      no: 2,
      name: "api_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Api },
    },
    {
      no: 3,
      name: "duration_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Duration },
    },
    {
      no: 4,
      name: "empty_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Empty },
    },
    {
      no: 5,
      name: "field_mask_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: FieldMask },
    },
    {
      no: 6,
      name: "source_context_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: SourceContext },
    },
    {
      no: 7,
      name: "struct_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Struct },
    },
    {
      no: 8,
      name: "timestamp_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Timestamp },
    },
    {
      no: 9,
      name: "type_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Type },
    },
    {
      no: 10,
      name: "double_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: DoubleValue },
    },
    {
      no: 11,
      name: "float_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: FloatValue },
    },
    {
      no: 12,
      name: "int64_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Int64Value },
    },
    {
      no: 13,
      name: "uint64_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: UInt64Value },
    },
    {
      no: 14,
      name: "int32_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: Int32Value },
    },
    {
      no: 15,
      name: "uint32_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: UInt32Value },
    },
    {
      no: 16,
      name: "bool_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: BoolValue },
    },
    {
      no: 17,
      name: "string_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: StringValue },
    },
    {
      no: 18,
      name: "bytes_field",
      kind: "map",
      K: 5 /* ScalarType.INT32 */,
      V: { kind: "message", T: BytesValue },
    },
  ]);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): MapWellKnownTypes {
    return new MapWellKnownTypes().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): MapWellKnownTypes {
    return new MapWellKnownTypes().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): MapWellKnownTypes {
    return new MapWellKnownTypes().fromJsonString(jsonString, options);
  }

  static equals(
    a: MapWellKnownTypes | PlainMessage<MapWellKnownTypes> | undefined,
    b: MapWellKnownTypes | PlainMessage<MapWellKnownTypes> | undefined
  ): boolean {
    return proto3.util.equals(MapWellKnownTypes, a, b);
  }
}
