// source: buf/alpha/registry/v1alpha1/module.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require("google-protobuf");
var goog = jspb;
var global = function () {
  if (this) {
    return this;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  return Function("return this")();
}.call(null);

var google_protobuf_timestamp_pb = require("google-protobuf/google/protobuf/timestamp_pb.js");
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol(
  "proto.buf.alpha.registry.v1alpha1.LocalModulePin",
  null,
  global
);
goog.exportSymbol(
  "proto.buf.alpha.registry.v1alpha1.LocalModuleReference",
  null,
  global
);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(
  proto.buf.alpha.registry.v1alpha1.LocalModuleReference,
  jspb.Message
);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.registry.v1alpha1.LocalModuleReference.displayName =
    "proto.buf.alpha.registry.v1alpha1.LocalModuleReference";
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.alpha.registry.v1alpha1.LocalModulePin, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.registry.v1alpha1.LocalModulePin.displayName =
    "proto.buf.alpha.registry.v1alpha1.LocalModulePin";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.toObject =
    function (opt_includeInstance) {
      return proto.buf.alpha.registry.v1alpha1.LocalModuleReference.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.buf.alpha.registry.v1alpha1.LocalModuleReference.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
        repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
        reference: jspb.Message.getFieldWithDefault(msg, 3, ""),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference}
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.deserializeBinary =
  function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.buf.alpha.registry.v1alpha1.LocalModuleReference();
    return proto.buf.alpha.registry.v1alpha1.LocalModuleReference.deserializeBinaryFromReader(
      msg,
      reader
    );
  };

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference}
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setOwner(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setRepository(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setReference(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.buf.alpha.registry.v1alpha1.LocalModuleReference.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getOwner();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getRepository();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getReference();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
  };

/**
 * optional string owner = 1;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.getOwner =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.setOwner =
  function (value) {
    return jspb.Message.setProto3StringField(this, 1, value);
  };

/**
 * optional string repository = 2;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.getRepository =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.setRepository =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional string reference = 3;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.getReference =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModuleReference} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModuleReference.prototype.setReference =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.toObject =
    function (opt_includeInstance) {
      return proto.buf.alpha.registry.v1alpha1.LocalModulePin.toObject(
        opt_includeInstance,
        this
      );
    };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.buf.alpha.registry.v1alpha1.LocalModulePin.toObject = function (
    includeInstance,
    msg
  ) {
    var f,
      obj = {
        owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
        repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
        branch: jspb.Message.getFieldWithDefault(msg, 3, ""),
        commit: jspb.Message.getFieldWithDefault(msg, 4, ""),
        digest: jspb.Message.getFieldWithDefault(msg, 5, ""),
        createTime:
          (f = msg.getCreateTime()) &&
          google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.deserializeBinary = function (
  bytes
) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.alpha.registry.v1alpha1.LocalModulePin();
  return proto.buf.alpha.registry.v1alpha1.LocalModulePin.deserializeBinaryFromReader(
    msg,
    reader
  );
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.deserializeBinaryFromReader =
  function (msg, reader) {
    while (reader.nextField()) {
      if (reader.isEndGroup()) {
        break;
      }
      var field = reader.getFieldNumber();
      switch (field) {
        case 1:
          var value = /** @type {string} */ (reader.readString());
          msg.setOwner(value);
          break;
        case 2:
          var value = /** @type {string} */ (reader.readString());
          msg.setRepository(value);
          break;
        case 3:
          var value = /** @type {string} */ (reader.readString());
          msg.setBranch(value);
          break;
        case 4:
          var value = /** @type {string} */ (reader.readString());
          msg.setCommit(value);
          break;
        case 5:
          var value = /** @type {string} */ (reader.readString());
          msg.setDigest(value);
          break;
        case 7:
          var value = new google_protobuf_timestamp_pb.Timestamp();
          reader.readMessage(
            value,
            google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader
          );
          msg.setCreateTime(value);
          break;
        default:
          reader.skipField();
          break;
      }
    }
    return msg;
  };

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.serializeBinary =
  function () {
    var writer = new jspb.BinaryWriter();
    proto.buf.alpha.registry.v1alpha1.LocalModulePin.serializeBinaryToWriter(
      this,
      writer
    );
    return writer.getResultBuffer();
  };

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.serializeBinaryToWriter =
  function (message, writer) {
    var f = undefined;
    f = message.getOwner();
    if (f.length > 0) {
      writer.writeString(1, f);
    }
    f = message.getRepository();
    if (f.length > 0) {
      writer.writeString(2, f);
    }
    f = message.getBranch();
    if (f.length > 0) {
      writer.writeString(3, f);
    }
    f = message.getCommit();
    if (f.length > 0) {
      writer.writeString(4, f);
    }
    f = message.getDigest();
    if (f.length > 0) {
      writer.writeString(5, f);
    }
    f = message.getCreateTime();
    if (f != null) {
      writer.writeMessage(
        7,
        f,
        google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
      );
    }
  };

/**
 * optional string owner = 1;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.getOwner =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 1, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.setOwner = function (
  value
) {
  return jspb.Message.setProto3StringField(this, 1, value);
};

/**
 * optional string repository = 2;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.getRepository =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 2, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.setRepository =
  function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
  };

/**
 * optional string branch = 3;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.getBranch =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 3, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.setBranch =
  function (value) {
    return jspb.Message.setProto3StringField(this, 3, value);
  };

/**
 * optional string commit = 4;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.getCommit =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 4, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.setCommit =
  function (value) {
    return jspb.Message.setProto3StringField(this, 4, value);
  };

/**
 * optional string digest = 5;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.getDigest =
  function () {
    return /** @type {string} */ (
      jspb.Message.getFieldWithDefault(this, 5, "")
    );
  };

/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.setDigest =
  function (value) {
    return jspb.Message.setProto3StringField(this, 5, value);
  };

/**
 * optional google.protobuf.Timestamp create_time = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.getCreateTime =
  function () {
    return /** @type{?proto.google.protobuf.Timestamp} */ (
      jspb.Message.getWrapperField(
        this,
        google_protobuf_timestamp_pb.Timestamp,
        7
      )
    );
  };

/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.setCreateTime =
  function (value) {
    return jspb.Message.setWrapperField(this, 7, value);
  };

/**
 * Clears the message field making it undefined.
 * @return {!proto.buf.alpha.registry.v1alpha1.LocalModulePin} returns this
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.clearCreateTime =
  function () {
    return this.setCreateTime(undefined);
  };

/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.buf.alpha.registry.v1alpha1.LocalModulePin.prototype.hasCreateTime =
  function () {
    return jspb.Message.getField(this, 7) != null;
  };

goog.object.extend(exports, proto.buf.alpha.registry.v1alpha1);
