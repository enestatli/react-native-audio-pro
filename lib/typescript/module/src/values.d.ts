import type { AudioProConfigureOptions } from './types';
/**
 * Default seek interval in milliseconds (30 seconds)
 */
export declare const DEFAULT_SEEK_MS = 30000;
/**
 * Content type for audio playback
 */
export declare enum AudioProContentType {
    /** Music content type */
    MUSIC = "MUSIC",
    /** Speech content type */
    SPEECH = "SPEECH"
}
/**
 * Possible states of the audio player
 */
export declare enum AudioProState {
    /** Initial state, no track loaded */
    IDLE = "IDLE",
    /** Track is loaded but not playing */
    STOPPED = "STOPPED",
    /** Track is being loaded */
    LOADING = "LOADING",
    /** Track is currently playing */
    PLAYING = "PLAYING",
    /** Track is paused */
    PAUSED = "PAUSED",
    /** An error has occurred */
    ERROR = "ERROR"
}
/**
 * Types of events that can be emitted by the audio player
 */
export declare enum AudioProEventType {
    /** Player state has changed */
    STATE_CHANGED = "STATE_CHANGED",
    /** Playback progress update */
    PROGRESS = "PROGRESS",
    /** Track has ended */
    TRACK_ENDED = "TRACK_ENDED",
    /** Seek operation has completed */
    SEEK_COMPLETE = "SEEK_COMPLETE",
    /** Playback speed has changed */
    PLAYBACK_SPEED_CHANGED = "PLAYBACK_SPEED_CHANGED",
    /** Remote next button pressed */
    REMOTE_NEXT = "REMOTE_NEXT",
    /** Remote previous button pressed */
    REMOTE_PREV = "REMOTE_PREV",
    /** Playback error has occurred */
    PLAYBACK_ERROR = "PLAYBACK_ERROR"
}
/**
 * Sources for seek-complete events.
 */
export declare enum AudioProTriggerSource {
    /** Seek initiated by user or app code */
    USER = "USER",
    /** Seek initiated by system or remote controls */
    SYSTEM = "SYSTEM"
}
/**
 * Types of events that can be emitted by the ambient audio player
 */
export declare enum AudioProAmbientEventType {
    /** Ambient track has ended */
    AMBIENT_TRACK_ENDED = "AMBIENT_TRACK_ENDED",
    /** Ambient audio error has occurred */
    AMBIENT_ERROR = "AMBIENT_ERROR"
}
/**
 * Default skip interval in milliseconds (30 seconds)
 */
export declare const DEFAULT_SKIP_INTERVAL_MS = 30000;
/**
 * Default configuration options for the audio player
 */
export declare const DEFAULT_CONFIG: AudioProConfigureOptions;
//# sourceMappingURL=values.d.ts.map