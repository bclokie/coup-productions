// src/components/Song.js
import React, { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import WaveSurfer from 'wavesurfer.js';
import './Song.css';

const Song = ({ songTitle, albumArtwork, audioSrc }) => {
  const audioRef = useRef(null);
  const waveformRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // eslint-disable-next-line
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    waveformRef.current.seekTo(audioRef.current.currentTime / audioRef.current.duration);
  };

  useEffect(() => {
    // WaveSurfer implementation for waveform visualization
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
      // Clean up WaveSurfer instance on component unmount
      waveformRef.current.destroy();
    };
  }, [audioSrc]);

  return (
    <div className="song-container">
      <img src={albumArtwork} alt={`Album Artwork for ${songTitle}`} />
      <div className="audio-controls">
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <div className="waveform-container" id="waveform-container">
        {/* Waveform visualization will be rendered here */}
      </div>
      {/* <ReactAudioPlayer
        ref={audioRef}
        src={audioSrc}
        autoPlay={false}
        controls
        onListen={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      /> */}
    </div>
  );
};

export default Song;
