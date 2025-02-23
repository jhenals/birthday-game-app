import React, { useState } from "react";
import { BrowserRouter, Route , Routes, Navigate} from "react-router-dom";

import '@fortawesome/fontawesome-free/css/all.min.css';
import Start from "./components/Start";
import MainStory from "./components/MainStory";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import Chapter3 from "./components/Chapter3";
import Gift from "./components/Gift";

const App = () => {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
    console.log('Game Started')
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={!gameStarted ? (<Start startGame={startGame} />) : <Navigate to = "/main" />} />
        <Route
          path="/main"
          element={gameStarted ? <MainStory /> : <Navigate to="/" />}
        />
        <Route path="/chapter-one" element={<Chapter1 />} />
        <Route path="/chapter-two" element={<Chapter2 />} />
        <Route path="/chapter-three" element={<Chapter3 />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
