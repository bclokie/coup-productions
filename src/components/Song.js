// Song.js
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './Song.css';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';
import { useMusicContext } from './MusicContext';

const Song = ({ songTitle, albumArtwork, audioSrc }) => {
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  // eslint-disable-next-line
  const [currentTime, setCurrentTime] = useState(0);
  // eslint-disable-next-line
  const { isMusicPlaying, updateMusicPlayingState } = useMusicContext();

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted((prev) => !prev);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    waveformRef.current.seekTo(audioRef.current.currentTime / audioRef.current.duration);
  };

  useEffect(() => {
    const updateIsPlaying = () => {
      const isPlaying = !audioRef.current.paused;
      updateMusicPlayingState(isPlaying);
    };
  
    // Listen for events or use other methods to determine if music is playing
    audioRef.current.addEventListener('playing', updateIsPlaying);
    audioRef.current.addEventListener('pause', updateIsPlaying);
  
    // Initial check
    updateIsPlaying();
  
    // Cleanup the event listeners
    const cleanup = () => {
      const currentAudioRef = audioRef.current; // Capture the current value
      currentAudioRef.removeEventListener('playing', updateIsPlaying);
      currentAudioRef.removeEventListener('pause', updateIsPlaying);
    };
  
    return cleanup;
  }, [audioRef, updateMusicPlayingState]);
  

  useEffect(() => {
    waveformRef.current = WaveSurfer.create({
      container: '#waveform-container',
      waveColor: 'violet',
      progressColor: 'purple',
      cursorWidth: 0,
      barWidth: 2,
      height: 100,
      responsive: true,
    });

    waveformRef.current.load(audioSrc);

    return () => {
      waveformRef.current.destroy();
    };
  }, [audioSrc]);

  return (
    <div className="song-container">
      <div className="left-column">
        <img src={albumArtwork} alt={`Album Artwork for ${songTitle}`} />
      </div>
      <div className="right-column">
        <div className="waveform-container" id="waveform-container"></div>
        <div className="audio-controls">
          <button onClick={handlePlayPause}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button onClick={handleMute}>
            {isMuted ? <FaVolumeUp /> : <FaVolumeMute />}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
          <FaVolumeDown />
          <FaVolumeUp />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Song;
