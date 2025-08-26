import { AudioProState } from './values';
import type { AmbientAudioPlayOptions, AudioProAmbientEventCallback, AudioProConfigureOptions, AudioProEventCallback, AudioProPlayOptions, AudioProTrack } from './types';
export declare const AudioPro: {
    /**
     * Configure the audio player with the specified options
     *
     * Note: Configuration changes are stored but only applied when the next `play()` call is made.
     * This is by design and applies to all configuration options.
     *
     * @param options - Configuration options for the audio player
     * @param options.contentType - Type of content being played (MUSIC or SPEECH)
     * @param options.debug - Enable debug logging
     * @param options.debugIncludesProgress - Include progress events in debug logs
     * @param options.progressIntervalMs - Interval in milliseconds for progress events
     * @param options.skipIntervalMs - Interval in milliseconds for skip forward/back actions
     * @param options.showNextPrevControls - Whether to show next/previous controls in notification
     * @param options.showSkipControls - Whether to show skip forward/back controls in notification
     */
    /**
     * Configure the audio player with the specified options.
     *
     * Note: Configuration changes are stored but only applied when the next `play()` call is made.
     * This is by design and applies to all configuration options.
     *
     * Mutual exclusivity between showNextPrevControls and showSkipControls is enforced here.
     * If both are true, showSkipControls will be set to false and a warning logged.
     *
     * @param options - Configuration options for the audio player
     */
    configure(options: AudioProConfigureOptions): void;
    /**
     * Load and play an audio track
     *
     * @param track - The audio track to play
     * @param track.id - Unique identifier for the track
     * @param track.url - URL of the audio file (http://, https://, or file://)
     * @param track.title - Title of the track
     * @param track.artwork - URL of the artwork image (http://, https://, or file://)
     * @param track.album - Optional album name
     * @param track.artist - Optional artist name
     * @param options - Optional playback options
     * @param options.autoPlay - Whether to start playback immediately (default: true)
     * @param options.headers - Custom HTTP headers for audio and artwork requests
     */
    play(track: AudioProTrack, options?: AudioProPlayOptions): void;
    /**
     * Pause the current playback
     * No-op if no track is playing or player is in IDLE or ERROR state
     */
    pause(): void;
    /**
     * Resume playback if paused
     * No-op if no track is playing or player is in IDLE or ERROR state
     */
    resume(): void;
    /**
     * Stop the playback, resetting to position 0
     * This keeps the track loaded but resets the position
     */
    stop(): void;
    /**
     * Fully reset the player to IDLE state
     * Tears down the player instance and removes all media sessions
     */
    clear(): void;
    /**
     * Seek to a specific position in the current track
     *
     * @param positionMs - Position in milliseconds to seek to
     */
    seekTo(positionMs: number): void;
    /**
     * Seek forward by the specified amount
     *
     * @param amountMs - Amount in milliseconds to seek forward (default: 30000ms)
     */
    seekForward(amountMs?: number): void;
    /**
     * Seek backward by the specified amount
     *
     * @param amountMs - Amount in milliseconds to seek backward (default: 30000ms)
     */
    seekBack(amountMs?: number): void;
    /**
     * Add a listener for audio player events
     *
     * @param callback - Callback function to handle audio player events
     * @returns Subscription that can be used to remove the listener
     */
    addEventListener(callback: AudioProEventCallback): import("react-native").EmitterSubscription;
    /**
     * Get the current playback position and total duration
     *
     * @returns Object containing position and duration in milliseconds
     */
    getTimings(): {
        position: number;
        duration: number;
    };
    /**
     * Get the current playback state
     *
     * @returns Current playback state (IDLE, STOPPED, LOADING, PLAYING, PAUSED, ERROR)
     */
    getState(): AudioProState;
    /**
     * Get the currently playing track
     *
     * @returns Currently playing track or null if no track is playing
     */
    getPlayingTrack(): AudioProTrack | null;
    /**
     * Set the playback speed rate
     *
     * @param speed - Playback speed rate (0.25 to 2.0, normal speed is 1.0)
     */
    setPlaybackSpeed(speed: number): void;
    /**
     * Get the current playback speed rate
     *
     * @returns Current playback speed rate (0.25 to 2.0, normal speed is 1.0)
     */
    getPlaybackSpeed(): number;
    /**
     * Set the playback volume
     *
     * @param volume - Volume level (0.0 to 1.0, where 0.0 is mute and 1.0 is full volume)
     */
    setVolume(volume: number): void;
    /**
     * Get the current playback volume
     *
     * @returns Current volume level (0.0 to 1.0)
     */
    getVolume(): number;
    /**
     * Get the last error that occurred
     *
     * @returns Last error or null if no error has occurred
     */
    getError(): import("./types").AudioProPlaybackErrorPayload | null;
    /**
     * Set the frequency at which progress events are emitted
     *
     * @param ms - Interval in milliseconds (100ms to 10000ms)
     */
    setProgressInterval(ms: number): void;
    /**
     * Get the current progress interval
     *
     * @returns The current progress interval in milliseconds
     */
    getProgressInterval(): number | undefined;
    /**
     * Play an ambient audio track
     *
     * @param options - Ambient audio options
     * @param options.url - URL of the audio file to play (http://, https://, or file://)
     * @param options.loop - Whether to loop the audio (default: true)
     */
    ambientPlay(options: AmbientAudioPlayOptions): void;
    /**
     * Stop ambient audio playback
     */
    ambientStop(): void;
    /**
     * Set the volume of ambient audio playback
     *
     * @param volume - Volume level (0.0 to 1.0)
     */
    ambientSetVolume(volume: number): void;
    /**
     * Pause ambient audio playback
     * No-op if already paused or not playing
     */
    ambientPause(): void;
    /**
     * Resume ambient audio playback
     * No-op if already playing or no active track
     */
    ambientResume(): void;
    /**
     * Seek to a specific position in the ambient audio
     * Silently ignore if not supported or no active track
     *
     * @param positionMs - Position in milliseconds
     */
    ambientSeekTo(positionMs: number): void;
    /**
     * Add a listener for ambient audio events
     *
     * @param callback - Callback function to handle ambient audio events
     * @returns Subscription that can be used to remove the listener
     */
    addAmbientListener(callback: AudioProAmbientEventCallback): import("react-native").EmitterSubscription;
};
//# sourceMappingURL=audioPro.d.ts.map