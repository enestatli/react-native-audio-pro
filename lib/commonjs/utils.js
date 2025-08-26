"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.guardTrackPlaying = guardTrackPlaying;
exports.isValidUrl = isValidUrl;
exports.logDebug = logDebug;
exports.normalizeVolume = normalizeVolume;
exports.validateFilePath = validateFilePath;
exports.validateTrack = validateTrack;
var _emitter = require("./emitter.js");
var _internalStore = require("./internalStore.js");
var _values = require("./values.js");
/**
 * Validates a file path or URL scheme.
 * Logs an error if the path does not begin with http://, https://, or file://.
 *
 * @param path - The path or URL to validate.
 */
function validateFilePath(path) {
  const supportedSchemes = ['http://', 'https://', 'file://'];
  if (!supportedSchemes.some(scheme => path && path.startsWith(scheme))) {
    console.error(`[react-native-audio-pro] Invalid file path detected: ${path}. ` + `Only http://, https://, and file:// schemes are recognized.`);
  }
}

/**
 * A simplified URL validation function that doesn't rely on the URL constructor.
 * It performs basic checks on the URL string to determine if it's valid.
 */
function isValidUrl(url) {
  // Check if the URL is empty or not a string
  // noinspection SuspiciousTypeOfGuard
  if (!url || typeof url !== 'string' || !url.trim()) {
    logDebug('URL validation failed: URL is empty or not a string');
    return false;
  }

  // Check for supported URL schemes
  const supportedSchemes = ['http://', 'https://', 'file://'];
  const isSupported = supportedSchemes.some(scheme => url.startsWith(scheme));

  // If URL doesn't start with a supported scheme, log a warning but continue
  if (!isSupported) {
    console.warn(`[react-native-audio-pro] Unsupported URL scheme: ${url}. Only http://, https://, and file:// URLs are officially supported.`);
  }

  // Basic check for common URL schemes (we'll still allow these to work)
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('rtsp://') || url.startsWith('rtmp://') || url.startsWith('file://') || url.startsWith('data:') || url.startsWith('blob:')) {
    return true;
  }

  // If it's not a standard URL, it might be a relative path
  // or a custom URI scheme. We'll allow it but log a debug message.
  logDebug(`URL format may be non-standard but will attempt to use it: ${url}`);
  return true;
}

/**
 * Validates a track object to ensure it has all required properties with correct types
 *
 * @param track - The track object to validate
 * @returns true if the track is valid, false otherwise
 */
function validateTrack(track) {
  // 1. Track object must be provided
  if (!track) {
    logDebug('Track validation failed: no track object provided');
    return false;
  }

  // 2. ID must be a non-empty string
  // noinspection SuspiciousTypeOfGuard
  if (typeof track.id !== 'string' || !track.id.trim()) {
    logDebug('Track validation failed: invalid or missing track.id');
    return false;
  }

  // 3. URL must be a non-empty string and valid
  if (typeof track.url !== 'string' || !track.url.trim() || !isValidUrl(track.url)) {
    logDebug('Track validation failed: invalid or missing track.url');
    return false;
  }

  // 4. Title must be a non-empty string
  // noinspection SuspiciousTypeOfGuard
  if (typeof track.title !== 'string' || !track.title.trim()) {
    logDebug('Track validation failed: invalid or missing track.title');
    return false;
  }

  // 5. Artwork URL must be a non-empty string and valid
  if (typeof track.artwork !== 'string' || !track.artwork.trim() || !isValidUrl(track.artwork)) {
    logDebug('Track validation failed: invalid or missing track.artwork');
    return false;
  }

  // 6. Optional album and artist must be strings if provided
  // noinspection SuspiciousTypeOfGuard
  if (track.album !== undefined && typeof track.album !== 'string') {
    logDebug('Track validation failed: invalid track.album');
    return false;
  }
  // noinspection SuspiciousTypeOfGuard
  if (track.artist !== undefined && typeof track.artist !== 'string') {
    logDebug('Track validation failed: invalid track.artist');
    return false;
  }

  // All validations passed
  return true;
}

/**
 * Guards against operations that require a track to be playing
 *
 * @param methodName - The name of the method being called
 * @returns true if a track is playing, false otherwise
 */
function guardTrackPlaying(methodName) {
  if (!_internalStore.internalStore.getState().trackPlaying) {
    const errorMessage = `[react-native-audio-pro]: ${methodName} called but no track is playing or has been played.`;
    console.error(errorMessage);
    _emitter.emitter.emit('AudioProEvent', {
      type: _values.AudioProEventType.PLAYBACK_ERROR,
      track: null,
      payload: {
        error: errorMessage,
        errorCode: -1
      }
    });
    return false;
  }
  return true;
}

/**
 * Logs debug messages if debug mode is enabled
 *
 * @param args - Arguments to log
 */
function logDebug(...args) {
  if (_internalStore.internalStore.getState().debug) {
    console.log('[react-native-audio-pro]', ...args);
  }
}

/**
 * Normalizes a volume value to ensure it's between 0 and 1,
 * with at most 2 decimal places of precision.
 * Handles special cases for values near 0 and 1 to avoid floating-point artifacts.
 *
 * @param volume The volume value to normalize
 * @returns A normalized volume value between 0 and 1 with 2 decimal precision
 */
function normalizeVolume(volume) {
  // Special case for 0 or very small values to avoid floating-point artifacts
  if (volume === 0 || Math.abs(volume) < 0.001) {
    return 0;
  }

  // Special case for values very close to 1 to avoid floating-point artifacts
  if (volume > 0.995 && volume <= 1) {
    return 1;
  }

  // Clamp between 0 and 1
  const clampedVolume = Math.max(0, Math.min(1, volume));

  // Format to 2 decimal places and convert back to number
  return parseFloat(clampedVolume.toFixed(2));
}
//# sourceMappingURL=utils.js.map