'use client';

import { useState, useEffect, useCallback } from 'react';

const Game = ({ username }: { username: string }) => {
  const [paddleY, setPaddleY] = useState<number>(200); // Leikmaður
  const [aiPaddleY, setAiPaddleY] = useState<number>(200); // AI
  const [ballX, setBallX] = useState<number>(450); // Boltinn X staða
  const [ballY, setBallY] = useState<number>(300); // Boltinn Y staða
  const [ballSpeedX, setBallSpeedX] = useState<number>(2); // Boltahraði í X átt
  const [ballSpeedY, setBallSpeedY] = useState<number>(2); // Boltahraði í Y átt
  const [playerScore, setPlayerScore] = useState<number>(0); // Stig leikmanns
  const [aiScore, setAiScore] = useState<number>(0); // Stig AI
  const [gameOver, setGameOver] = useState<boolean>(false); // Lok leikur

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp' && paddleY > 0) {
      setPaddleY(paddleY - 10); // Leikmaður hreyfir sig upp
    }
    if (e.key === 'ArrowDown' && paddleY < 500) { 
      setPaddleY(paddleY + 10); // Leikmaður hreyfir sig niður
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [paddleY]);

  // Skoppar af pöllum og veggjum með betri útreikningum
  const calculateBounceAngle = useCallback((paddleY: number, ballY: number): number => {
    const paddleCenter = paddleY + 50; // Miðja pallsins
    const ballCenter = ballY + 5; // Miðja boltans
    const distanceFromPaddleCenter = (ballCenter - paddleCenter) / 50; // Ákveður hversu mikið boltinn breytir stefnu
    return distanceFromPaddleCenter * 1.5; // Breytir hraðanum eftir hvar á pallinum boltinn hittir
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallX((prev) => prev + ballSpeedX);
      setBallY((prev) => prev + ballSpeedY);

      // Skoppar af efri og neðri brún (vegjum)
      if (ballY <= 0 || ballY >= 590) { 
        setBallSpeedY(-ballSpeedY); // Skoppar þegar hann hittir efri eða neðri brún
      }

      // Kolla hvort boltinn fer út af vinstra eða hægra megin
      if (ballX <= 0) {
        setAiScore(aiScore + 1); // AI fær stig
        resetBall('player'); // Endurstillum boltann fyrir leikmann
      } else if (ballX >= 900) { // Staðfestum marklínu
        setPlayerScore(playerScore + 1); // Leikmaður fær stig
        resetBall('AI'); // Endurstillum boltann fyrir AI
      }

      // Kolla hvort boltinn hittir palla (leikmanninn eða AI)
      if (ballX <= 50 && ballY >= paddleY && ballY <= paddleY + 100) { // Snertir leikmanninn
        setBallSpeedX(-ballSpeedX); // Skoppar boltinn á móti
        const bounceAngle = calculateBounceAngle(paddleY, ballY); // Ákveður nýja stefnu eftir hvar boltinn snertir pallinn
        setBallSpeedY(bounceAngle); // Ný stefna boltans
      }

      if (ballX >= 850 && ballY >= aiPaddleY && ballY <= aiPaddleY + 100) { // Snertir AI pallinn
        setBallSpeedX(-ballSpeedX); // Skoppar boltinn á móti
        const bounceAngle = calculateBounceAngle(aiPaddleY, ballY); // Ákveður nýja stefnu eftir AI pall
        setBallSpeedY(bounceAngle); // Ný stefna boltans
      }

      // AI hreyfing (færist eftir boltanum)
      if (ballY > aiPaddleY + 50 && aiPaddleY < 500) {
        setAiPaddleY(aiPaddleY + 2); // AI hreyfist niður
      } else if (ballY < aiPaddleY + 50 && aiPaddleY > 0) {
        setAiPaddleY(aiPaddleY - 2); // AI hreyfist upp
      }

      // Leikurinn endar við 10 stig
      if (playerScore >= 10 || aiScore >= 10) {
        setGameOver(true); // Ef einhver vinnur með 10 stig
      }

    }, 10); 

    return () => clearInterval(interval);
  }, [ballX, ballY, ballSpeedX, ballSpeedY, paddleY, playerScore, aiScore, aiPaddleY, calculateBounceAngle]);

  const resetBall = (whoGetsBall: string) => {
    setBallX(450); // Boltinn fer til miðjunnar
    setBallY(300); // Boltinn fer til miðjunnar
    setBallSpeedX(2); 
    setBallSpeedY(2);

    if (whoGetsBall === 'player') {
      setBallSpeedX(Math.abs(ballSpeedX)); // Leikmaður fær boltann með jákvæðu X hraða
    } else {
      setBallSpeedX(-Math.abs(ballSpeedX)); // AI fær boltann með neikvæðu X hraða
    }
  };

  if (gameOver) {
    return (
      <div>
        <h2>{username} {playerScore} - {aiScore} AI</h2>
        <h3>Leikurinn er búinn! {playerScore >= 10 ? username : "AI"} vann!</h3>
      </div>
    );
  }

  return (
    <div>
      <h2>{username} {playerScore} - {aiScore} AI</h2>
      <div
        style={{
          width: '900px', // Stækka völlinn
          height: '600px', // Stækka völlinn
          backgroundColor: '#eee',
          position: 'relative',
          margin: 'auto',
          border: '2px solid black',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '10px',
            height: '100%',
            backgroundColor: 'black',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            right: '0px',
            top: '0px',
            width: '10px',
            height: '100%',
            backgroundColor: 'black',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: paddleY,
            width: '20px',
            height: '100px',
            backgroundColor: 'blue',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            left: '860px',
            top: aiPaddleY,
            width: '20px',
            height: '100px',
            backgroundColor: 'red',
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            left: ballX,
            top: ballY,
            width: '10px',
            height: '10px',
            backgroundColor: 'green',
            borderRadius: '50%',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Game;
