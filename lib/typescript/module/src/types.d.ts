import { AudioProTriggerSource, AudioProAmbientEventType, AudioProContentType, AudioProEventType, AudioProState } from './values';
export type AudioProArtwork = string;
export type AudioProTrack = {
    id: string;
    url: string;
    title: string;
    artwork: AudioProArtwork;
    album?: string;
    artist?: string;
    [key: string]: unknown;
};
export type AudioProConfigureOptions = {
    contentType?: AudioProContentType;
    debug?: boolean;
    debugIncludesProgress?: boolean;
    progressIntervalMs?: number;
    showNextPrevControls?: boolean;
    showSkipControls?: boolean;
    skipIntervalMs?: number;
    /**
     * @deprecated use skipIntervalMs instead
     */
    skipInterval?: number;
};
export type AudioProHeaders = {
    audio?: Record<string, string>;
    artwork?: Record<string, string>;
};
export type AudioProPlayOptions = {
    autoPlay?: boolean;
    headers?: AudioProHeaders;
    startTimeMs?: number;
};
export type AudioProEventCallback = (event: AudioProEvent) => void;
export interface AudioProEvent {
    type: AudioProEventType;
    track: AudioProTrack | null;
    payload?: {
        state?: AudioProState;
        position?: number;
        duration?: number;
        error?: string;
        errorCode?: number;
        speed?: number;
    };
}
export interface AudioProStateChangedPayload {
    state: AudioProState;
    position: number;
    duration: number;
}
export interface AudioProTrackEndedPayload {
    position: number;
    duration: number;
}
export interface AudioProPlaybackErrorPayload {
    error: string;
    errorCode?: number;
}
export interface AudioProProgressPayload {
    position: number;
    duration: number;
}
export interface AudioProSeekCompletePayload {
    position: number;
    duration: number;
    /** Indicates who initiated the seek: user or system */
    triggeredBy: AudioProTriggerSource;
}
export interface AudioProPlaybackSpeedChangedPayload {
    speed: number;
}
export interface AmbientAudioPlayOptions {
    url: string;
    loop?: boolean;
}
export type AudioProAmbientEventCallback = (event: AudioProAmbientEvent) => void;
export interface AudioProAmbientEvent {
    type: AudioProAmbientEventType;
    payload?: {
        error?: string;
    };
}
export interface AudioProAmbientErrorPayload {
    error: string;
}
//# sourceMappingURL=types.d.ts.map