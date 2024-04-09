import React from "react";
import Layout from "./Layout";

import styles from "./gridStyles.module.css";

const TicTacToe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.matrix}>
        <Layout />
      </div>
    </div>
  );
};

export default TicTacToe;
