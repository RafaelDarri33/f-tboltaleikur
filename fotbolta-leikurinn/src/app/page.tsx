// app/page.tsx
'use client';

import { useState } from 'react';
import Game from './Game'; // Importa Game.tsx frá sama stað

const Home = () => {
  const [username, setUsername] = useState('');
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setGameStarted(true);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Fótbolta leikurinn!!!</h1>
      {!gameStarted ? (
        <form onSubmit={handleStartGame}>
          <label>
            Notendanafn:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Sláðu inn notendanafn"
            />
          </label>
          <button type="submit">Byrja leik</button>
        </form>
      ) : (
        <div>
          <h2>Leikmaður: {username}</h2>
          <p>Keppir gegn AI</p>
          {/* Sendum username sem prop inn í Game */}
          <Game username={username} />
        </div>
      )}
    </div>
  );
};

export default Home;

