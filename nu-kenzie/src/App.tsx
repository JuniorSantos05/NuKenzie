import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import { TransactionsContext } from "./providers/TransactionsContext";
import { ListContext } from "./providers/ListContext";
import { Transaction } from "./interfaces";
import "./App.sass"

const App = () => {
  return (
    <div className="App">
    <TransactionsContext.Consumer>
      {({ listTransactions, setListTransactions }) => (
        <ListContext.Provider
          value={{
            listTransactions,
            setListTransactions,
            deleteCard: (transaction: Transaction) =>
              setListTransactions((prevList) =>
                prevList.filter((item) => item !== transaction)
              ),
            filterEntrada: () => {
              setListTransactions((prevList) =>
                prevList.filter((transaction) => transaction.type === "entrada")
              );
            },
            filterSaida: () => {
              setListTransactions((prevList) =>
                prevList.filter((transaction) => transaction.type === "saida")
              );
            },
            todos: () => {
              setListTransactions(listTransactions);
            },
          }}
        >
          <Header />
          <main className="App-main">
            <section>
          <Form />
          <TotalMoney listTransactions={listTransactions} />
            </section>
          <List />
          </main>
        </ListContext.Provider>
      )}
    </TransactionsContext.Consumer>
    </div>
  );
};

export default App;
