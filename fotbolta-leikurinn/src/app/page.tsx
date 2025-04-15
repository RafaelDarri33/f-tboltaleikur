"use client";

import { useState } from "react";
import Game from "./Game";
import styles from "./page.module.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setGameStarted(true);
    }
  };

  return (
    <div className={styles.landing}>
      <h1>Fótbolta Leikurinn!!!</h1>
      {!gameStarted && (
        <>
          <p>
            Viltu sjá <a href="/rules">reglur</a> eða viltu byrja strax?
          </p>

          <form onSubmit={handleStartGame}>
            <label>Notendanafn:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Sláðu inn notendanafn"
            />
            <button type="submit">Byrja leik</button>
          </form>
        </>
      )}
      {gameStarted && (
        <>
          <h2>Leikmaður: {username}</h2>
          <p>Keppir gegn AI</p>
          <Game username={username} />
        </>
      )}
    </div>
  );
};

export default Home;
