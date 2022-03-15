/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file extra/deprecation-implicit.proto (package spec, syntax proto3)

import type {
  BinaryReadOptions,
  FieldList,
  JsonReadOptions,
  JsonValue,
  PartialMessage,
  PlainMessage,
} from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message spec.ImplicitlyDeprecatedMessage
 * @deprecated
 */
export class ImplicitlyDeprecatedMessage extends Message<ImplicitlyDeprecatedMessage> {
  constructor(data?: PartialMessage<ImplicitlyDeprecatedMessage>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "spec.ImplicitlyDeprecatedMessage";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ImplicitlyDeprecatedMessage {
    return new ImplicitlyDeprecatedMessage().fromBinary(bytes, options);
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ImplicitlyDeprecatedMessage {
    return new ImplicitlyDeprecatedMessage().fromJson(jsonValue, options);
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ImplicitlyDeprecatedMessage {
    return new ImplicitlyDeprecatedMessage().fromJsonString(
      jsonString,
      options
    );
  }

  static equals(
    a:
      | ImplicitlyDeprecatedMessage
      | PlainMessage<ImplicitlyDeprecatedMessage>
      | undefined,
    b:
      | ImplicitlyDeprecatedMessage
      | PlainMessage<ImplicitlyDeprecatedMessage>
      | undefined
  ): boolean {
    return proto3.util.equals(ImplicitlyDeprecatedMessage, a, b);
  }
}
