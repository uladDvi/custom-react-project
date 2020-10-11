import React from "react";
import { hot } from "react-hot-loader";
import { Card, Input, DatePicker } from "antd";
import styles from "./app.module.scss";

const App: React.FC<unknown> = () => {
  return (
    <div className={styles.app}>
      <Card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Input placeholder="Basic usage" />
      <DatePicker picker="week" />
      <p> App starter kit </p>
    </div>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(App);
