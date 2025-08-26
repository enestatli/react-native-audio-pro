"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitter = exports.ambientEmitter = void 0;
var _reactNative = require("react-native");
var _internalStore = require("./internalStore.js");
var _utils = require("./utils.js");
var _values = require("./values.js");
const NativeAudioPro = _reactNative.NativeModules.AudioPro;

/**
 * Event emitter for main audio player events
 * Used to communicate between native code and JavaScript
 */
const emitter = exports.emitter = _reactNative.Platform.OS === 'android' ? _reactNative.DeviceEventEmitter : new _reactNative.NativeEventEmitter(NativeAudioPro);

/**
 * Event emitter for ambient audio events
 * Used to communicate between native code and JavaScript
 */
const ambientEmitter = exports.ambientEmitter = _reactNative.Platform.OS === 'android' ? _reactNative.DeviceEventEmitter : new _reactNative.NativeEventEmitter(NativeAudioPro);

/**
 * Global listener for main audio player events
 * Handles debug logging and state updates
 */
emitter.addListener('AudioProEvent', event => {
  const {
    debug,
    debugIncludesProgress,
    updateFromEvent
  } = _internalStore.internalStore.getState();
  if (debug) {
    if (event.type !== _values.AudioProEventType.PROGRESS || debugIncludesProgress) {
      (0, _utils.logDebug)('AudioProEvent', JSON.stringify(event));
    }
  }
  updateFromEvent(event);
});

/**
 * Global listener for ambient audio events
 * Handles debug logging
 */
ambientEmitter.addListener('AudioProAmbientEvent', event => {
  const {
    debug
  } = _internalStore.internalStore.getState();
  if (debug) {
    (0, _utils.logDebug)('AudioProAmbientEvent', JSON.stringify(event));
  }
});
//# sourceMappingURL=emitter.js.map