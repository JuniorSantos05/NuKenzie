import React, { useState } from "react";

const Header = () => {
  const [homePage, setHomePage] = useState(true);

  return (
    <header id="App-header">
      <h1>
        Nu<span>Kenzie</span>
      </h1>
      <button className="App-btn" onClick={() => setHomePage(!homePage)}>
        Inicio
      </button>
    </header>
  );
};

export default Header;