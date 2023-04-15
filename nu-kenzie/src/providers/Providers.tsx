import React, { createContext, useState } from 'react';
import { Transaction } from '../interfaces';

export const TransactionsContext = createContext<{
  listTransactions: Transaction[];
  setListTransactions: React.Dispatch<React.SetStateAction<Transaction[]>>;
}>({
  listTransactions: [],
  setListTransactions: () => {},
});

const Providers: React.FC = ({ children }) => {
  const [listTransactions, setListTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionsContext.Provider value={{ listTransactions, setListTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};

export default Providers;
