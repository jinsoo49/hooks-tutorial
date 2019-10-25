import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    if (element.current) element.current.addEventListener("click", onClick);
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
  }, [onClick]);
  return element;
};

const App = () => {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
