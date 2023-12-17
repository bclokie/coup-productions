// Music.js

import React, { useState, useRef, useEffect } from 'react';
import './Music.css';

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const tracks = [
    { id: 1, title: 'Claire De Lune', src: 'Clair-De-Lune.mp3' },
    { id: 2, title: 'Song 2', src: 'path/to/song2.mp3' },
    // Add more tracks as needed
  ];

  const playPauseHandler = (track) => {
    if (currentTrack === null || currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      setCurrentTime(currentTime);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="music-container">
      <h1>Music Player</h1>
      <div className="playlist">
        {tracks.map((track) => (
          <div key={track.id} className="track">
            <div className="play-button" onClick={() => playPauseHandler(track)}>
              {isPlaying && currentTrack.id === track.id ? '❚❚' : '▶'}
            </div>
            <p>{track.title}</p>
          </div>
        ))}
      </div>
      {currentTrack && (
        <div>
          <audio
            className="audio-player"
            ref={audioRef}
            src={currentTrack.src}
            onTimeUpdate={timeUpdateHandler}
            onEnded={() => setIsPlaying(false)}
          />
          <div className="progress-bar">
            <div
              className="waveform"
              style={{
                width: audioRef.current
                  ? `${(currentTime / audioRef.current.duration) * 100}%`
                  : '0%',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Music;
