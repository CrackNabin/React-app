import React, { Fragment } from "react";
import Spinner from "./spinner.gif";

export const spineer = () => {
  return (
    <Fragment>
      <img
        src={Spinner}
        alt="loading..."
        style={{ width: "200px", margin: "auto", display: "block" }}
      ></img>
    </Fragment>
  );
};
export default spineer;
