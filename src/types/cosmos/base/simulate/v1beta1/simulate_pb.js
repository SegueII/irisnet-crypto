// source: cosmos/base/simulate/v1beta1/simulate.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var cosmos_base_abci_v1beta1_abci_pb = require('../../../../cosmos/base/abci/v1beta1/abci_pb.js');
goog.object.extend(proto, cosmos_base_abci_v1beta1_abci_pb);
var cosmos_tx_v1beta1_tx_pb = require('../../../../cosmos/tx/v1beta1/tx_pb.js');
goog.object.extend(proto, cosmos_tx_v1beta1_tx_pb);
goog.exportSymbol('proto.cosmos.base.simulate.v1beta1.SimulateRequest', null, global);
goog.exportSymbol('proto.cosmos.base.simulate.v1beta1.SimulateResponse', null, global);
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
proto.cosmos.base.simulate.v1beta1.SimulateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.base.simulate.v1beta1.SimulateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.simulate.v1beta1.SimulateRequest.displayName = 'proto.cosmos.base.simulate.v1beta1.SimulateRequest';
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
proto.cosmos.base.simulate.v1beta1.SimulateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cosmos.base.simulate.v1beta1.SimulateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cosmos.base.simulate.v1beta1.SimulateResponse.displayName = 'proto.cosmos.base.simulate.v1beta1.SimulateResponse';
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
proto.cosmos.base.simulate.v1beta1.SimulateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.base.simulate.v1beta1.SimulateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tx: (f = msg.getTx()) && cosmos_tx_v1beta1_tx_pb.Tx.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateRequest}
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.base.simulate.v1beta1.SimulateRequest;
  return proto.cosmos.base.simulate.v1beta1.SimulateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateRequest}
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_tx_v1beta1_tx_pb.Tx;
      reader.readMessage(value,cosmos_tx_v1beta1_tx_pb.Tx.deserializeBinaryFromReader);
      msg.setTx(value);
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
proto.cosmos.base.simulate.v1beta1.SimulateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.base.simulate.v1beta1.SimulateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTx();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_tx_v1beta1_tx_pb.Tx.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.tx.v1beta1.Tx tx = 1;
 * @return {?proto.cosmos.tx.v1beta1.Tx}
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.prototype.getTx = function() {
  return /** @type{?proto.cosmos.tx.v1beta1.Tx} */ (
    jspb.Message.getWrapperField(this, cosmos_tx_v1beta1_tx_pb.Tx, 1));
};


/**
 * @param {?proto.cosmos.tx.v1beta1.Tx|undefined} value
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} returns this
*/
proto.cosmos.base.simulate.v1beta1.SimulateRequest.prototype.setTx = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateRequest} returns this
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.prototype.clearTx = function() {
  return this.setTx(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.simulate.v1beta1.SimulateRequest.prototype.hasTx = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.cosmos.base.simulate.v1beta1.SimulateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    gasInfo: (f = msg.getGasInfo()) && cosmos_base_abci_v1beta1_abci_pb.GasInfo.toObject(includeInstance, f),
    result: (f = msg.getResult()) && cosmos_base_abci_v1beta1_abci_pb.Result.toObject(includeInstance, f)
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
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateResponse}
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cosmos.base.simulate.v1beta1.SimulateResponse;
  return proto.cosmos.base.simulate.v1beta1.SimulateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateResponse}
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new cosmos_base_abci_v1beta1_abci_pb.GasInfo;
      reader.readMessage(value,cosmos_base_abci_v1beta1_abci_pb.GasInfo.deserializeBinaryFromReader);
      msg.setGasInfo(value);
      break;
    case 2:
      var value = new cosmos_base_abci_v1beta1_abci_pb.Result;
      reader.readMessage(value,cosmos_base_abci_v1beta1_abci_pb.Result.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cosmos.base.simulate.v1beta1.SimulateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGasInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      cosmos_base_abci_v1beta1_abci_pb.GasInfo.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      cosmos_base_abci_v1beta1_abci_pb.Result.serializeBinaryToWriter
    );
  }
};


/**
 * optional cosmos.base.abci.v1beta1.GasInfo gas_info = 1;
 * @return {?proto.cosmos.base.abci.v1beta1.GasInfo}
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.getGasInfo = function() {
  return /** @type{?proto.cosmos.base.abci.v1beta1.GasInfo} */ (
    jspb.Message.getWrapperField(this, cosmos_base_abci_v1beta1_abci_pb.GasInfo, 1));
};


/**
 * @param {?proto.cosmos.base.abci.v1beta1.GasInfo|undefined} value
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} returns this
*/
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.setGasInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} returns this
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.clearGasInfo = function() {
  return this.setGasInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.hasGasInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional cosmos.base.abci.v1beta1.Result result = 2;
 * @return {?proto.cosmos.base.abci.v1beta1.Result}
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.getResult = function() {
  return /** @type{?proto.cosmos.base.abci.v1beta1.Result} */ (
    jspb.Message.getWrapperField(this, cosmos_base_abci_v1beta1_abci_pb.Result, 2));
};


/**
 * @param {?proto.cosmos.base.abci.v1beta1.Result|undefined} value
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} returns this
*/
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cosmos.base.simulate.v1beta1.SimulateResponse} returns this
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cosmos.base.simulate.v1beta1.SimulateResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


goog.object.extend(exports, proto.cosmos.base.simulate.v1beta1);
