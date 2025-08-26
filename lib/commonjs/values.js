"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_SKIP_INTERVAL_MS = exports.DEFAULT_SEEK_MS = exports.DEFAULT_CONFIG = exports.AudioProTriggerSource = exports.AudioProState = exports.AudioProEventType = exports.AudioProContentType = exports.AudioProAmbientEventType = void 0;
/**
 * Default seek interval in milliseconds (30 seconds)
 */
const DEFAULT_SEEK_MS = exports.DEFAULT_SEEK_MS = 30000;

/**
 * Content type for audio playback
 */
let AudioProContentType = exports.AudioProContentType = /*#__PURE__*/function (AudioProContentType) {
  /** Music content type */
  AudioProContentType["MUSIC"] = "MUSIC";
  /** Speech content type */
  AudioProContentType["SPEECH"] = "SPEECH";
  return AudioProContentType;
}({});
/**
 * Possible states of the audio player
 */
let AudioProState = exports.AudioProState = /*#__PURE__*/function (AudioProState) {
  /** Initial state, no track loaded */
  AudioProState["IDLE"] = "IDLE";
  /** Track is loaded but not playing */
  AudioProState["STOPPED"] = "STOPPED";
  /** Track is being loaded */
  AudioProState["LOADING"] = "LOADING";
  /** Track is currently playing */
  AudioProState["PLAYING"] = "PLAYING";
  /** Track is paused */
  AudioProState["PAUSED"] = "PAUSED";
  /** An error has occurred */
  AudioProState["ERROR"] = "ERROR";
  return AudioProState;
}({});
/**
 * Types of events that can be emitted by the audio player
 */
let AudioProEventType = exports.AudioProEventType = /*#__PURE__*/function (AudioProEventType) {
  /** Player state has changed */
  AudioProEventType["STATE_CHANGED"] = "STATE_CHANGED";
  /** Playback progress update */
  AudioProEventType["PROGRESS"] = "PROGRESS";
  /** Track has ended */
  AudioProEventType["TRACK_ENDED"] = "TRACK_ENDED";
  /** Seek operation has completed */
  AudioProEventType["SEEK_COMPLETE"] = "SEEK_COMPLETE";
  /** Playback speed has changed */
  AudioProEventType["PLAYBACK_SPEED_CHANGED"] = "PLAYBACK_SPEED_CHANGED";
  /** Remote next button pressed */
  AudioProEventType["REMOTE_NEXT"] = "REMOTE_NEXT";
  /** Remote previous button pressed */
  AudioProEventType["REMOTE_PREV"] = "REMOTE_PREV";
  /** Playback error has occurred */
  AudioProEventType["PLAYBACK_ERROR"] = "PLAYBACK_ERROR";
  return AudioProEventType;
}({});
/**
 * Sources for seek-complete events.
 */
let AudioProTriggerSource = exports.AudioProTriggerSource = /*#__PURE__*/function (AudioProTriggerSource) {
  /** Seek initiated by user or app code */
  AudioProTriggerSource["USER"] = "USER";
  /** Seek initiated by system or remote controls */
  AudioProTriggerSource["SYSTEM"] = "SYSTEM";
  return AudioProTriggerSource;
}({});
/**
 * Types of events that can be emitted by the ambient audio player
 */
let AudioProAmbientEventType = exports.AudioProAmbientEventType = /*#__PURE__*/function (AudioProAmbientEventType) {
  /** Ambient track has ended */
  AudioProAmbientEventType["AMBIENT_TRACK_ENDED"] = "AMBIENT_TRACK_ENDED";
  /** Ambient audio error has occurred */
  AudioProAmbientEventType["AMBIENT_ERROR"] = "AMBIENT_ERROR";
  return AudioProAmbientEventType;
}({});
/**
 * Default skip interval in milliseconds (30 seconds)
 */
const DEFAULT_SKIP_INTERVAL_MS = exports.DEFAULT_SKIP_INTERVAL_MS = 30000;

/**
 * Default configuration options for the audio player
 */
const DEFAULT_CONFIG = exports.DEFAULT_CONFIG = {
  /** Default content type */
  contentType: AudioProContentType.MUSIC,
  /** Whether debug logging is enabled */
  debug: false,
  /** Whether to include progress events in debug logs */
  debugIncludesProgress: false,
  /** Interval in milliseconds for progress events */
  progressIntervalMs: 1000,
  /** Whether to show next/previous controls */
  showNextPrevControls: true,
  /** Whether to show skip forward/back controls in notification */
  showSkipControls: false,
  /** Interval in milliseconds for skip forward/back actions */
  skipIntervalMs: DEFAULT_SKIP_INTERVAL_MS
};
//# sourceMappingURL=values.js.map