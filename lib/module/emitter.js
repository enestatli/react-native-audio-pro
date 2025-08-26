"use strict";

import { NativeModules, NativeEventEmitter, Platform, DeviceEventEmitter } from 'react-native';
import { internalStore } from "./internalStore.js";
import { logDebug } from "./utils.js";
import { AudioProEventType } from "./values.js";
const NativeAudioPro = NativeModules.AudioPro;

/**
 * Event emitter for main audio player events
 * Used to communicate between native code and JavaScript
 */
export const emitter = Platform.OS === 'android' ? DeviceEventEmitter : new NativeEventEmitter(NativeAudioPro);

/**
 * Event emitter for ambient audio events
 * Used to communicate between native code and JavaScript
 */
export const ambientEmitter = Platform.OS === 'android' ? DeviceEventEmitter : new NativeEventEmitter(NativeAudioPro);

/**
 * Global listener for main audio player events
 * Handles debug logging and state updates
 */
emitter.addListener('AudioProEvent', event => {
  const {
    debug,
    debugIncludesProgress,
    updateFromEvent
  } = internalStore.getState();
  if (debug) {
    if (event.type !== AudioProEventType.PROGRESS || debugIncludesProgress) {
      logDebug('AudioProEvent', JSON.stringify(event));
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
  } = internalStore.getState();
  if (debug) {
    logDebug('AudioProAmbientEvent', JSON.stringify(event));
  }
});
//# sourceMappingURL=emitter.js.map