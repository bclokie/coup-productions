// src/pages/Music.js
import React from 'react';
import Song from '../components/Song';
import './Music.css';

const Music = () => {
  // Sample songs data
  const songs = [
    {
      title: 'Clair De Lune',
      albumArtwork: 'https://i1.sndcdn.com/artworks-000121576674-bc1ime-t500x500.jpg',
      audioSrc: '/clair-de-lune.mp3',
    },
    // Add more songs as needed
  ];

  return (
    <div className="music-page">
      <h1>Music Page</h1>
      <div className="song-list">
        {songs.map((song, index) => (
          <Song
            key={index}
            songTitle={song.title}
            albumArtwork={song.albumArtwork}
            audioSrc={song.audioSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Music;
