"use strict";

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
export { AudioPro } from "./audioPro.js";

/**
 * React hook for easy integration of AudioPro functionality in React components
 * @see {@link ./useAudioPro}
 */
export { useAudioPro } from "./useAudioPro.js";

/**
 * Zustand store for managing audio playback state
 * @see {@link ./internalStore}
 */
export { internalStore as useAudioProStore } from "./internalStore.js";

/**
 * Type definitions for AudioPro
 * @see {@link ./types}
 */

/**
 * Constants and enums used throughout the library
 * @see {@link ./values}
 */
export { /** Possible states of the audio player */
AudioProState, /** Types of events that can be emitted */
AudioProEventType, /** Types of audio content supported */
AudioProContentType, /** Types of ambient audio events */
AudioProAmbientEventType } from "./values.js";
//# sourceMappingURL=index.js.map