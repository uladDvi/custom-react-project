import React from "react";
import { hot } from "react-hot-loader";
import styles from "./app.module.scss";

const App: React.FC<unknown> = () => {
  return (
    <div className={styles.app}>
      <p> App starter kit </p>
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
