/**
 * React Native Audio Pro
 *
 * A comprehensive audio playback library for React Native applications, supporting both foreground and background playback,
 * with advanced features like ambient audio playback, event handling, and state management.
 *
 * @packageDocumentation
 */

/**
 * Main AudioPro class for managing audio playback
 * @see {@link ./audioPro}
 */
export { AudioPro } from './audioPro';

/**
 * React hook for easy integration of AudioPro functionality in React components
 * @see {@link ./useAudioPro}
 */
export { useAudioPro } from './useAudioPro';

/**
 * Zustand store for managing audio playback state
 * @see {@link ./internalStore}
 */
export { internalStore as useAudioProStore } from './internalStore';

/**
 * Type definitions for AudioPro
 * @see {@link ./types}
 */
export type {
	/** Represents an audio track with its properties */
	AudioProTrack,
	/** Callback function type for audio events */
	AudioProEventCallback,
	/** Type of audio events that can be emitted */
	AudioProEvent,
	/** Payload for state change events */
	AudioProStateChangedPayload,
	/** Payload for track ended events */
	AudioProTrackEndedPayload,
	/** Payload for playback error events */
	AudioProPlaybackErrorPayload,
	/** Payload for progress update events */
	AudioProProgressPayload,
	/** Payload for seek completion events */
	AudioProSeekCompletePayload,
	/** Payload for playback speed change events */
	AudioProPlaybackSpeedChangedPayload,

	// Ambient audio types
	/** Options for ambient audio playback */
	AmbientAudioPlayOptions,
	/** Callback function type for ambient audio events */
	AudioProAmbientEventCallback,
	/** Type of ambient audio events that can be emitted */
	AudioProAmbientEvent,
	/** Payload for ambient audio error events */
	AudioProAmbientErrorPayload,
} from './types';

/**
 * Constants and enums used throughout the library
 * @see {@link ./values}
 */
export {
	/** Possible states of the audio player */
	AudioProState,
	/** Types of events that can be emitted */
	AudioProEventType,
	/** Types of audio content supported */
	AudioProContentType,
	/** Types of ambient audio events */
	AudioProAmbientEventType,
} from './values';
