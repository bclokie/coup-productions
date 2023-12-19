// Song.js
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './Song.css';

// Import the necessary icon components from your chosen icon library
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaVolumeDown } from 'react-icons/fa';

const Song = ({ songTitle, albumArtwork, audioSrc }) => {
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  // eslint-disable-next-line
  const [currentTime, setCurrentTime] = useState(0);

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
      <img src={albumArtwork} alt={`Album Artwork for ${songTitle}`} />
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
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
        <FaVolumeDown /> 
        <FaVolumeUp /> 
      </div>
      <div className="waveform-container" id="waveform-container"></div>
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
