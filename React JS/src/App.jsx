import { Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import TicTacToe from "./components/tic-tac-toe";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
    </Routes>
  );
}

export default App;
