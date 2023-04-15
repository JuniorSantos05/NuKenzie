import React, { createContext, useState } from "react";
import { Transaction, ListContextData } from "../interfaces";

export const ListContext = createContext<ListContextData>({
  listTransactions: [],
  setListTransactions: () => {},
  deleteCard: () => {},
  filterEntrada: () => {},
  filterSaida: () => {},
  todos: () => {},
});

export const ListProvider: React.FC = ({ children }) => {
  const [listTransactions, setListTransactions] = useState<Transaction[]>([]);
  const [cardFilter, setCardFilter] = useState("All");

  const deleteCard = (transaction: Transaction) => {
    const filteredList = listTransactions.filter((item) => item !== transaction);
    setListTransactions(filteredList);
  };

  const filterEntrada = () => {
    setCardFilter("entrada");
  };

  const filterSaida = () => {
    setCardFilter("saida");
  };

  const todos = () => {
    setCardFilter("All");
  };

  const filteredTransactions = listTransactions.filter((transaction) => {
    if (cardFilter === "All") return transaction;
    return transaction.type === cardFilter;
  });

  return (
    <ListContext.Provider
      value={{
        listTransactions: filteredTransactions, 
        setListTransactions,
        deleteCard,
        filterEntrada,
        filterSaida,
        todos,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
