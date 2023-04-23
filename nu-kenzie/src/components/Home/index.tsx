import { useContext } from "react";
import Ilustrator from "../../assets/illustration.svg";
import { TransationContext } from "../../providers/Providers";

const Home = () => {
  const { homePage, setHomePage } = useContext(TransationContext);

  return (
    <main className="home_container">
      <div className="home_info">
        <h2 className="home_logo">
          Nu<span>Kenzie</span>
        </h2>
        <h1 className="home_text">Centralize o controle das suas finanças </h1>
        <p className="home_p">de forma rápida e segura</p>
        <button className="home-btn" onClick={() => setHomePage(!homePage)}>
          Iniciar
        </button>
      </div>
      <div>
        <img src={Ilustrator} alt="Img" />
      </div>
    </main>
  );
};

export default Home;
