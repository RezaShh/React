import React from "react"; // دیگر نیازی به ایمپورت نیست
// import App from "./App";
import ReactDOM from "react-dom";

// let element = <h1>hello world</h1>;
// ReactDOM.render(<App />, document.getElementById("root"));

// ===========================================================

// دیفالت اکسپورت خارج کروشه و دیفالت خالی داخل ان
import walk, { talk } from "./person";
walk();
talk();

// ===========================================================

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/product";
ReactDOM.render(<Product />, document.getElementById("root"));
