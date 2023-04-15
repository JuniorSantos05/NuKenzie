import React, { useState } from "react";
import {Transaction, TransactionsContext} from "./providers/TransactionsContext";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  const [listTransactions, setListTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionsContext.Provider
      value={{ listTransactions, setListTransactions }}
    >
      <Header/>
      <Form />
    </TransactionsContext.Provider>
  );
};

export default App;
