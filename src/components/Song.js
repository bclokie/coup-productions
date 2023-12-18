// Song.js
import React, { useState, useRef, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './Song.css';

const Song = ({ songTitle, albumArtwork, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    // Update the waveform visualization here (you can use the Web Audio API)
  };

  useEffect(() => {
    // Set up your Web Audio API visualization here

    return () => {
      // Clean up any resources if needed
    };
  }, []);

  return (
    <div className="song-container">
      <img src={albumArtwork} alt={`Album Artwork for ${songTitle}`} />
      <div className="audio-controls">
        <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
      </div>
      <div className="waveform-container">
        {/* Include the canvas for waveform visualization here */}
      </div>
      <ReactAudioPlayer
        ref={audioRef}
        src={audioSrc}
        autoPlay={false}
        controls
        onListen={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Song;
