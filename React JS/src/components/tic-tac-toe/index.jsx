import React from "react";
import Layout from "./Layout";

import styles from "./gridStyles.module.css";

const TicTacToe = () => {
  const gridSize = 3; // default 3x3 matrix

  const [matrixState, setMatrixState] = React.useState(
    new Array(gridSize).fill("1").map(() => new Array(gridSize).fill(""))
  ); // initialise 2D array

  const [player, setPlayer] = React.useState("X");
  const [isGameOver, setIsGameOver] = React.useState(false);
  const [infoTip, setInfoTip] = React.useState("Player Turn");

  const checkWinner = ({ updatedMatrix, selectedRow, selectedCol }) => {
    const cellValues = new Set();

    if (selectedRow === selectedCol) {
      // left diagonal

      for (let i = 0; i < gridSize; i++) cellValues.add(updatedMatrix[i][i]);

      if (cellValues.size === 1) return true;
      cellValues.clear();
    }

    if (selectedRow + selectedCol === gridSize - 1) {
      // right diagonal
      for (let i = 0; i < gridSize; i++)
        cellValues.add(updatedMatrix[i][gridSize - 1 - i]);
      if (cellValues.size === 1) return true;
      cellValues.clear();
    }

    // same row
    for (let i = 0; i < gridSize; i++)
      cellValues.add(updatedMatrix[selectedRow][i]);

    if (cellValues.size === 1) return true;
    cellValues.clear();

    // same column
    for (let i = 0; i < gridSize; i++)
      cellValues.add(updatedMatrix[i][selectedCol]);

    if (cellValues.size === 1) return true;

    return false;
  };

  const handleClick = (selectedRow, selectedCol) => {
    let numOfFilledCells = 0,
      isGameover = false;

    const updatedMatrix = matrixState.map((row, index) =>
      row.map((cellVal, index1) => {
        if (cellVal !== "") numOfFilledCells++;
        if (selectedRow === index && selectedCol === index1) return player;
        return cellVal;
      })
    );

    setMatrixState(updatedMatrix);

    if (2 * gridSize - 1 <= numOfFilledCells + 1) {
      // check for winner after minimum clicks required for a matrix
      isGameover = checkWinner({ updatedMatrix, selectedRow, selectedCol });

      if (isGameover) {
        setIsGameOver(true);
        setInfoTip(`Winner is player: ${player}`);
      } else if (gridSize ** 2 === numOfFilledCells + 1) {
        // TIE: nobody wins but the matrix is full
        setIsGameOver(true);
        setInfoTip(`It's a tie!`);
        return;
      }
    }

    if (!isGameover && player === "X") setPlayer("0");
    else setPlayer("X");
  };

  return (
    <div className={styles.container}>
      <h2>{isGameOver ? infoTip : `${infoTip}: ${player}`}</h2>

      <div
        className={`${styles.matrix} ${isGameOver ? styles.disableMatrix : ""}`}
      >
        <Layout
          gridSize={gridSize}
          matrixState={matrixState}
          onCellClick={handleClick}
        />
      </div>
    </div>
  );
};

export default TicTacToe;
