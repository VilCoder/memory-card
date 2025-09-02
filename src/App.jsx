import { useEffect, useState } from "react";
import { Cards } from "./components/Cards";
import { useResponse } from "./hooks/useResponse";
import "./App.css";
import { getRandomArray } from "./services/getRandomArray";
import { driverObj } from "./services/driver";

let idCard = [];
let bestScore = 0;

function App() {
  const apiResponse = useResponse();
  const [response, setResponse] = useState([]);
  const [score, setScore] = useState(0);

  const handleClick = (id) => {
    const randomArray = getRandomArray(apiResponse);
    setResponse(randomArray);

    if (idCard.indexOf(id) !== -1) {
      bestScore = score;
      idCard = [];
      setScore(0);
      return;
    }

    idCard.push(id);
    setScore(score + 1);
  };

  useEffect(() => {
    if (apiResponse.length > 0) {
      driverObj.drive();
    }
  }, [apiResponse]);

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
        <Cards
          cards={response.length > 0 ? response : apiResponse}
          onClick={handleClick}
        />
      </main>
    </>
  );
}

export default App;
