/* eslint-disable */
// @generated by protoc-gen-es v0.0.1 with parameter "ts_nocheck=false"
// @generated from file extra/enum-annotated.proto (package spec, syntax proto3)

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.AnnotatedEnum
 */
export enum AnnotatedEnum {
  /**
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: FOO = 1;
   */
  FOO = 1,
}

// Retrieve enum metadata with: proto3.getEnumType(AnnotatedEnum)
proto3.util.setEnumType(AnnotatedEnum, "spec.AnnotatedEnum", [
  { no: 0, name: "UNSPECIFIED" },
  { no: 1, name: "FOO" },
]);
