import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";


import '@fortawesome/fontawesome-free/css/all.min.css';
import Start from "./components/Start";
import MainStory from "./components/MainStory";

const App = () => {
  const [gameStarted, setGameStarted] = useState(true);

  const startGame = () => {
    setGameStarted(true);
    console.log('Game Started')
  }

  return (
    <>
    <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          { !gameStarted ? (
            <Start startGame={startGame} />
          ) : (
            <MainStory />
          )

          }
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
