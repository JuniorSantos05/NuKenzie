import React, { createContext, Dispatch, SetStateAction, useState } from "react";

export interface Transaction {
  description: string;
  type: string;
  value: number;
}

export type TransactionsContextType = {
  listTransactions: Transaction[];
  setListTransactions: Dispatch<SetStateAction<Transaction[]>>;
};

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
