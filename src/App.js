// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Info from './pages/Info';
// import Events from './pages/Events';
import Music from './pages/Music';
// import Archive from './pages/Archive';
import { MusicProvider } from './components/MusicContext';

const App = () => {
  return (
    <Router>
      <MusicProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          {/* <Route path="/info" element={<Info />} />
          <Route path="/events" element={<Events />} />
          <Route path="/archive" element={<Archive />} /> */}
        </Routes>
      </MusicProvider>
    </Router>
  );
};

export default App;
