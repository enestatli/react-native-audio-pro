/**
 * React hook for accessing the current state of the audio player
 *
 * @returns An object containing the current state of the audio player:
 * - state: The current playback state
 * - position: Current playback position in milliseconds
 * - duration: Total duration of the current track in milliseconds
 * - playingTrack: The currently playing track or null if no track is playing
 * - playbackSpeed: Current playback speed (1.0 is normal speed)
 * - volume: Current volume level (0.0 to 1.0)
 * - error: Current error state or null if no error exists
 */
export declare const useAudioPro: () => {
    state: import("./values").AudioProState;
    position: number;
    duration: number;
    playingTrack: import("./types").AudioProTrack | null;
    playbackSpeed: number;
    volume: number;
    error: import("./types").AudioProPlaybackErrorPayload | null;
};
//# sourceMappingURL=useAudioPro.d.ts.map