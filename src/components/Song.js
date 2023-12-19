// src/components/Song.js
import React, { useState, useRef, useEffect } from 'react';
import WaveSurfer from 'wavesurfer.js';
import './Song.css';

const Song = ({ songTitle, albumArtwork, audioSrc }) => {
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
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
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
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
