import React, { createContext, useState } from "react";
import { Transaction, TransactionsContextType } from "../interfaces";

export const TransactionsContext = createContext<TransactionsContextType>({
  listTransactions: [],
  setListTransactions: () => {},
});

export const TransactionsProvider: React.FC = ({ children }) => {
  const [listTransactions, setListTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionsContext.Provider
      value={{ listTransactions, setListTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
