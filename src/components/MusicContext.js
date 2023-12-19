// MusicContext.js
import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const updateMusicPlayingState = (playing) => {
    setIsMusicPlaying(playing);
  };

  return (
    <MusicContext.Provider value={{ isMusicPlaying, updateMusicPlayingState }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusicContext must be used within a MusicProvider');
  }
  return context;
};
