import React from "react";
import classes from "./loading.module.css";

function Loading() {
  return (
    <div className={classes.loading_container}>
      <div className={classes.loader}>
        <span>{"{"}</span>
        <span>{"}"}</span>
      </div>
    </div>
  );
}

export default Loading;
