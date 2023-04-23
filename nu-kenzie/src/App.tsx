import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import "./App.sass";
import Providers, { TransationContext } from "./providers/Providers";
import { useContext } from "react";
import Home from "./components/Home";

const App = () => {
  const { homePage, setHomePage } = useContext(TransationContext);

  return (
    <div className="App">
      {homePage ? (
        <Home />
      ) : (
        <>
          <Header />
          <main className="App-main">
            <section>
              <Form />
              <TotalMoney />
            </section>
            <List />
          </main>
        </>
      )}
    </div>
  );
};

export default App;
