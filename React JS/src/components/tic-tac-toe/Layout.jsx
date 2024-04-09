import React from "react";
import styles from "./gridStyles.module.css";

const Layout = () => {
  const gridSize = 3;

  const [matrixState, setMatrixState] = React.useState(
    new Array(gridSize).fill("").map(() => new Array(gridSize).fill(""))
  ); // initialise 2D array

  return matrixState.map((row, index) => {
    const isLastRow = gridSize - 1 === index;

    return (
      <div
        className={`${styles.singleRowElements} ${
          !isLastRow ? styles.rowStyles : ""
        }`}
      >
        {row.map((cell, index1) => {
          const isLastColumn = gridSize - 1 === index1;

          return (
            <div
              key={`${index},${index1}`}
              className={`${styles.cellStyles} ${
                !isLastColumn ? styles.columnStyles : ""
              }`}
            >
              {cell}
            </div>
          );
        })}
      </div>
    );
  });
};

export default Layout;
