import React, { useEffect, useState } from "react";
import "./styles.css";

const initialGridSize = 20;
const initialSpeed = 200; // in milliseconds

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

interface SnakeSegment {
  x: number;
  y: number;
}

interface Food {
  x: number;
  y: number;
}

export function GamePage() {
  const [gridSize, setGridSize] = useState(initialGridSize);
  const [snake, setSnake] = useState<SnakeSegment[]>([
    { x: 10, y: 10 },
    { x: 10, y: 11 },
  ]);
  const [food, setFood] = useState<Food>({ x: 15, y: 15 });
  const [direction, setDirection] = useState(Direction.Right);
  const [speed, setSpeed] = useState(initialSpeed);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          event.preventDefault(); // Prevent page scrolling
          break;
        default:
          break;
      }

      switch (event.key) {
        case "ArrowUp":
          setDirection(Direction.Up);
          break;
        case "ArrowDown":
          setDirection(Direction.Down);
          break;
        case "ArrowLeft":
          setDirection(Direction.Left);
          break;
        case "ArrowRight":
          setDirection(Direction.Right);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        moveSnake();
      }, speed);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [snake, direction, gameOver]);

  useEffect(() => {
    if (gameOver) {
      
    }
  }, [gameOver]);

  const moveSnake = () => {
    const head = { ...snake[0] };
    switch (direction) {
      case Direction.Up:
        head.y = (head.y + gridSize - 1) % gridSize;
        break;
      case Direction.Down:
        head.y = (head.y + 1) % gridSize;
        break;
      case Direction.Left:
        head.x = (head.x + gridSize - 1) % gridSize;
        break;
      case Direction.Right:
        head.x = (head.x + 1) % gridSize;
        break;
    }

    const collidedWithSnake = snake.some(
      (segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y
    );

    if (collidedWithSnake) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake];
    if (head.x === food.x && head.y === food.y) {
      generateFood();
      increaseSpeed();
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const generateFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize),
    };
    setFood(newFood);
  };

  const increaseSpeed = () => {
    setSpeed((prevSpeed) => Math.max(prevSpeed - 10, 50));
  };

  return (
    <div className="game-container">
      {gameOver ? (
        <div className="game-over">
          <h1>Game Over!</h1>
          <p>Your score: {snake.length - 2}</p>
        </div>
      ) : (
        <>
          <div className="grid">
            {Array.from({ length: gridSize }).map((_, row) =>
              Array.from({ length: gridSize }).map((_, col) => (
                <div
                  key={`${row}-${col}`}
                  className={`cell ${
                    snake.some((segment) => segment.x === col && segment.y === row) ? "snake" : ""
                  } ${food.x === col && food.y === row ? "food" : ""}`}
                ></div>
              ))
            )}
          </div>
          <p>Score: {snake.length - 2}</p>
        </>
      )}
    </div>
  );
}
