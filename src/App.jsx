import { useState } from "react";
import { Cards } from "./components/Cards";
import { useResult } from "./hooks/useResult";
import "./App.css";

let idCard = [];
let bestScore = 0;

function App() {
  const { result } = useResult();
  const [score, setScore] = useState(0);

  const handleClick = (id) => {
    if (idCard.indexOf(id) !== -1) {
      bestScore = score;
      idCard = [];
      setScore(0);
      return;
    }
      
    idCard.push(id);
    setScore(score + 1);
  };

  return (
    <>
      <header className="header">
        <h1 className="header__title">Dragon Ball Memory Game</h1>
        <div className="header__score">
          <p className="score__info">Score: {score}</p>
          <p className="score__info">Best Score: {bestScore}</p>
        </div>
      </header>
      <main className="main">
        <Cards cards={result} onClick={handleClick} />
      </main>
    </>
  );
}

export default App;
