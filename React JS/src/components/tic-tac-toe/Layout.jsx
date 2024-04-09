import React from "react";
import styles from "./gridStyles.module.css";

const Layout = ({ gridSize, matrixState, onCellClick }) => {
  return matrixState.map((row, index) => {
    const isLastRow = gridSize - 1 === index;

    return (
      <div
        className={`${styles.singleRowElements} ${
          !isLastRow ? styles.rowStyles : ""
        }`}
        key={`row-${index}`}
      >
        {row.map((cell, index1) => {
          const isLastColumn = gridSize - 1 === index1;

          return (
            <div
              key={`${index},${index1}`}
              className={`${styles.cellStyles} ${
                !isLastColumn ? styles.columnStyles : ""
              }`}
              disabled={cell === ""}
              onClick={() => (cell === "" ? onCellClick(index, index1) : {})}
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
