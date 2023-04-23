import React, { useContext } from "react";
import { TransationContext } from "../../providers/Providers";
import "../../styles/components/header.sass";

const Header = () => {
  const { homePage, setHomePage } = useContext(TransationContext);

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
