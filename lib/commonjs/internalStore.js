"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.internalStore = void 0;
var _traditional = require("zustand/traditional");
var _utils = require("./utils.js");
var _values = require("./values.js");
const internalStore = exports.internalStore = (0, _traditional.createWithEqualityFn)((set, get) => ({
  playerState: _values.AudioProState.IDLE,
  position: 0,
  duration: 0,
  playbackSpeed: 1.0,
  volume: (0, _utils.normalizeVolume)(1.0),
  debug: false,
  debugIncludesProgress: false,
  trackPlaying: null,
  configureOptions: {
    ..._values.DEFAULT_CONFIG
  },
  error: null,
  setDebug: debug => set({
    debug
  }),
  setDebugIncludesProgress: includeProgress => set({
    debugIncludesProgress: includeProgress
  }),
  setTrackPlaying: track => set({
    trackPlaying: track
  }),
  setConfigureOptions: options => set({
    configureOptions: options
  }),
  setPlaybackSpeed: speed => set({
    playbackSpeed: speed
  }),
  setVolume: volume => set({
    volume: (0, _utils.normalizeVolume)(volume)
  }),
  setError: error => set({
    error
  }),
  updateFromEvent: event => {
    // Early exit for simple remote commands (no state change)
    if (event.type === _values.AudioProEventType.REMOTE_NEXT || event.type === _values.AudioProEventType.REMOTE_PREV) {
      return;
    }
    const {
      type,
      track,
      payload
    } = event;
    const current = get();
    const updates = {};

    // Warn if a non-error event has no track
    if (track === undefined && type !== _values.AudioProEventType.PLAYBACK_ERROR) {
      console.warn(`[react-native-audio-pro]: Event ${type} missing required track property`);
    }

    // 1. State changes
    if (type === _values.AudioProEventType.STATE_CHANGED && payload?.state && payload.state !== current.playerState) {
      updates.playerState = payload.state;
      // Clear error when leaving ERROR state
      if (payload.state !== _values.AudioProState.ERROR && current.error !== null) {
        updates.error = null;
      }
    }

    // 2. Playback errors
    // According to the contract in logic.md:
    // - PLAYBACK_ERROR and ERROR state are separate and must not be conflated
    // - ERROR state must be explicitly triggered by native logic
    // - PLAYBACK_ERROR events should not automatically imply or trigger a STATE_CHANGED: ERROR
    if (type === _values.AudioProEventType.PLAYBACK_ERROR && payload?.error) {
      updates.error = {
        error: payload.error,
        errorCode: payload.errorCode
      };
      // Note: We do NOT automatically transition to ERROR state here
      // Native code is responsible for emitting STATE_CHANGED: ERROR if needed
    }

    // 2.5 Track ended
    // According to the contract in logic.md:
    // - Native is responsible for detecting the end of a track
    // - Native must emit both STATE_CHANGED: STOPPED and TRACK_ENDED
    // - TypeScript should not infer or emit state transitions on its own
    if (type === _values.AudioProEventType.TRACK_ENDED) {
      // Note: We do NOT automatically transition to STOPPED state here
      // Native code is responsible for emitting STATE_CHANGED: STOPPED
      // We only receive the TRACK_ENDED event for informational purposes
    }

    // 3. Speed changes
    if (type === _values.AudioProEventType.PLAYBACK_SPEED_CHANGED && payload?.speed !== undefined && payload.speed !== current.playbackSpeed) {
      updates.playbackSpeed = payload.speed;
    }

    // 4. Progress updates
    if (payload?.position !== undefined && payload.position !== current.position) {
      updates.position = payload.position;
    }
    if (payload?.duration !== undefined && payload.duration !== current.duration) {
      updates.duration = payload.duration;
    }

    // 5. Track loading/unloading
    if (track) {
      const prev = current.trackPlaying;
      // Only update if the track object has changed
      if (!prev || track.id !== prev.id || track.url !== prev.url || track.title !== prev.title || track.artwork !== prev.artwork || track.album !== prev.album || track.artist !== prev.artist) {
        updates.trackPlaying = track;
      }
    } else if (track === null && type !== _values.AudioProEventType.PLAYBACK_ERROR && current.trackPlaying !== null) {
      // Explicit unload of track (not during error)
      updates.trackPlaying = null;
    }

    // 6. Apply batched updates
    if (Object.keys(updates).length > 0) {
      set(updates);
    }
  }
}));
//# sourceMappingURL=internalStore.js.map