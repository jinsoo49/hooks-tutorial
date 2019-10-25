import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const useTitle = initinalTitle => {
  const [title, setTitle] = useState(initinalTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("home"), 3000);
  return (
    <div className="App">
      <div>hello</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
