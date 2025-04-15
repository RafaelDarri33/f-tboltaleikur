"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./game.module.css";

const Game = ({ username }: { username: string }) => {
  // State fyrir leikjahlutann
  const [paddleY, setPaddleY] = useState<number>(200);
  const [aiPaddleY, setAiPaddleY] = useState<number>(200);
  const [ballX, setBallX] = useState<number>(450);
  const [ballY, setBallY] = useState<number>(300);
  const [ballSpeedX, setBallSpeedX] = useState<number>(5);
  const [ballSpeedY, setBallSpeedY] = useState<number>(5);
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [aiScore, setAiScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  // Countdown og hvort leikurinn hafi byrjað
  const [countdown, setCountdown] = useState<number>(5);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Refs fyrir kollisjónir og til að koma í veg fyrir tvöföld stig
  const collisionCooldownRef = useRef(false);
  const scoreCooldownRef = useRef(false);
  const ballRadius = 5;

  // Handler fyrir hreyfingu leikmannspallsins með örvatökum
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
    }
    setPaddleY((prev) => {
      if (e.key === "ArrowUp" && prev > 0) return prev - 10;
      if (e.key === "ArrowDown" && prev < 500) return prev + 10;
      return prev;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Countdown-effekt: Lækkar teljarann og byrjar leikinn þegar countdown klárast
  useEffect(() => {
    if (!gameStarted) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setGameStarted(true);
      }
    }
  }, [countdown, gameStarted]);

  // Stillir overflow á body þegar leikurinn er hafinn, þannig að síðunni verði ekki leyfilegt að scrolla
  useEffect(() => {
    if (gameStarted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [gameStarted]);

  // Reiknar út nýja boltahraða í Y átt miðað við stöðu pallsins
  const calculateBounceAngle = useCallback(
    (paddleY: number, ballY: number): number => {
      const paddleCenter = paddleY + 50;
      const ballCenter = ballY + ballRadius;
      const relativeIntersection = ballCenter - paddleCenter;
      return (relativeIntersection / 50) * 1.5;
    },
    [ballRadius]
  );

  // Endurstillir boltann með tilviljunarkenndri staðsetningu
  const resetBall = (whoGetsBall: string) => {
    const randomXOffset = (Math.random() - 0.5) * 100; // -50 til 50
    const randomYOffset = (Math.random() - 0.5) * 100; // -50 til 50
    setBallX(450 + randomXOffset);
    setBallY(300 + randomYOffset);

    const baseSpeed = 5;
    setBallSpeedY(baseSpeed * (Math.random() * 2 - 1));
    if (whoGetsBall === "player") {
      setBallSpeedX(baseSpeed);
    } else {
      setBallSpeedX(-baseSpeed);
    }
  };

  // Leiklykkja sem keyrir aðeins þegar leikurinn hefur byrjað; einnig stoppar hún update þegar gameOver er true
  useEffect(() => {
    if (!gameStarted) return;
    const interval = setInterval(() => {
      if (gameOver) return;

      setBallX((prevX) => {
        const newX = prevX + ballSpeedX;
        if (!scoreCooldownRef.current && newX - ballRadius <= 0) {
          scoreCooldownRef.current = true;
          setAiScore((prev) => prev + 1);
          resetBall("player");
          setTimeout(() => (scoreCooldownRef.current = false), 100);
          return 450;
        }
        if (!scoreCooldownRef.current && newX + ballRadius >= 900) {
          scoreCooldownRef.current = true;
          setPlayerScore((prev) => prev + 1);
          resetBall("AI");
          setTimeout(() => (scoreCooldownRef.current = false), 100);
          return 450;
        }
        return newX;
      });

      setBallY((prevY) => {
        let newY = prevY + ballSpeedY;
        if (newY <= 0) {
          newY = 0;
          setBallSpeedY((prev) => Math.abs(prev));
        } else if (newY >= 590) {
          newY = 590;
          setBallSpeedY((prev) => -Math.abs(prev));
        }
        return newY;
      });

      const ballCenterX = ballX + ballRadius;
      const ballCenterY = ballY + ballRadius;

      if (
        !collisionCooldownRef.current &&
        ballCenterX <= 40 &&
        ballCenterY >= paddleY &&
        ballCenterY <= paddleY + 100
      ) {
        collisionCooldownRef.current = true;
        setBallSpeedX((prev) => -prev);
        const bounceAngle = calculateBounceAngle(paddleY, ballY);
        setBallSpeedY(bounceAngle);
        setBallX(41);
        setTimeout(() => (collisionCooldownRef.current = false), 50);
      }

      if (
        !collisionCooldownRef.current &&
        ballCenterX >= 860 &&
        ballCenterX <= 880 &&
        ballCenterY >= aiPaddleY &&
        ballCenterY <= aiPaddleY + 100
      ) {
        collisionCooldownRef.current = true;
        setBallSpeedX((prev) => -prev);
        const bounceAngle = calculateBounceAngle(aiPaddleY, ballY);
        setBallSpeedY(bounceAngle);
        setBallX(860 - 10);
        setTimeout(() => (collisionCooldownRef.current = false), 50);
      }

      setAiPaddleY((prev) => {
        if (ballCenterY > prev + 50 && prev < 500) return prev + 2;
        if (ballCenterY < prev + 50 && prev > 0) return prev - 2;
        return prev;
      });

      if (playerScore >= 10 || aiScore >= 10) {
        setGameOver(true);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [
    gameStarted,
    ballSpeedX,
    ballSpeedY,
    paddleY,
    aiPaddleY,
    playerScore,
    aiScore,
    ballX,
    ballY,
    calculateBounceAngle,
    ballRadius,
    gameOver,
  ]);

  if (gameOver) {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h2>
          {username} {playerScore} - {aiScore} AI
        </h2>
        <h3>Leikurinn er búinn! {playerScore >= 10 ? username : "AI"} vann!</h3>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setPaddleY(200);
            setAiPaddleY(200);
            setBallX(450);
            setBallY(300);
            setBallSpeedX(5);
            setBallSpeedY(5);
            setPlayerScore(0);
            setAiScore(0);
            setGameOver(false);
            setCountdown(3);
            setGameStarted(false);
          }}
        >
          Keppa aftur?
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Viltu hætta?
        </button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      {/* Header utan um leikborðið */}
      <header style={{ marginBottom: "20px" }}>
        <h2>
          {username} {playerScore} - {aiScore} AI
        </h2>
      </header>
      <div className={styles.gameWrapper}>
        <div className={styles.gameFrame}>
          <div className={styles.gameContainer}>
            {!gameStarted && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0,0,0,0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 100,
                  fontSize: "5rem",
                  color: "white",
                }}
              >
                {countdown > 0 ? countdown : "GO!"}
              </div>
            )}
            <div className={styles.leftWall}></div>
            <div className={styles.rightWall}></div>
            <div className={styles.playerPaddle} style={{ top: paddleY }}></div>
            <div className={styles.aiPaddle} style={{ top: aiPaddleY }}></div>
            <div
              className={styles.ball}
              style={{ left: ballX, top: ballY }}
            ></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
          }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Viltu hætta?
        </button>
      </div>
    </div>
  );
};

export default Game;
