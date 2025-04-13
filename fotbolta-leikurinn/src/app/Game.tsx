'use client';

import { useState, useEffect, useCallback } from 'react';

const Game = ({ username }: { username: string }) => {
  const [paddleY, setPaddleY] = useState(200); 
  const [aiPaddleY, setAiPaddleY] = useState(200); 
  const [ballX, setBallX] = useState(300); 
  const [ballY, setBallY] = useState(200); 
  const [ballSpeedX, setBallSpeedX] = useState(2); 
  const [ballSpeedY, setBallSpeedY] = useState(2); 
  const [playerScore, setPlayerScore] = useState(0); 
  const [aiScore, setAiScore] = useState(0); 
  const [gameOver, setGameOver] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp' && paddleY > 0) {
      setPaddleY(paddleY - 10);
    }
    if (e.key === 'ArrowDown' && paddleY < 300) { 
      setPaddleY(paddleY + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [paddleY]);

  const calculateBounceAngle = useCallback((paddleY: number, ballY: number) => {
    const paddleCenter = paddleY + 50; 
    const ballCenter = ballY + 5;
    const distanceFromPaddleCenter = (ballCenter - paddleCenter) / 50;
    return distanceFromPaddleCenter * 1.5;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBallX((prev) => prev + ballSpeedX);
      setBallY((prev) => prev + ballSpeedY);

      // Skoppar af efri og neðri brún (vegjum)
      if (ballY <= 0 || ballY >= 390) {
        setBallSpeedY(-ballSpeedY);
      }

      // Kolla hvort boltinn fer út af vinstra eða hægra megin
      if (ballX <= 0) {
        setAiScore(aiScore + 1); 
        resetBall('player');
      } else if (ballX >= 600) {
        setPlayerScore(playerScore + 1); 
        resetBall('AI');
      }

      // Kolla hvort boltinn hittir palla (leikmanninn eða AI)
      if (ballX <= 50 && ballY >= paddleY && ballY <= paddleY + 100) {
        setBallSpeedX(-ballSpeedX); 
        const bounceAngle = calculateBounceAngle(paddleY, ballY);
        setBallSpeedY(bounceAngle);
      }

      if (ballX >= 550 && ballY >= aiPaddleY && ballY <= aiPaddleY + 100) {
        setBallSpeedX(-ballSpeedX); 
        const bounceAngle = calculateBounceAngle(aiPaddleY, ballY);
        setBallSpeedY(bounceAngle);
      }

      if (ballY > aiPaddleY + 50 && aiPaddleY < 300) {
        setAiPaddleY(aiPaddleY + 2); 
      } else if (ballY < aiPaddleY + 50 && aiPaddleY > 0) {
        setAiPaddleY(aiPaddleY - 2); 
      }

      if (playerScore >= 10 || aiScore >= 10) {
        setGameOver(true);
      }

    }, 10);

    return () => clearInterval(interval);
  }, [ballX, ballY, ballSpeedX, ballSpeedY, paddleY, playerScore, aiScore, aiPaddleY, calculateBounceAngle]);

  const resetBall = (whoGetsBall: string) => {
    setBallX(300);
    setBallY(200);
    setBallSpeedX(2); 
    setBallSpeedY(2);

    if (whoGetsBall === 'player') {
      setBallSpeedX(Math.abs(ballSpeedX)); 
    } else {
      setBallSpeedX(-Math.abs(ballSpeedX)); 
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
          width: '600px',
          height: '400px',
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
            left: '560px',
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

