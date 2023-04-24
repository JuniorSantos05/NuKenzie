import React, { createContext, useState } from "react";
import {
  ITransation,
  ITransationContext,
  ITransationContextProps,
} from "../interfaces";

export const TransationContext = createContext({} as ITransationContext);

const Providers = ({ children }: ITransationContextProps) => {
  const [homePage, setHomePage] = useState(true);
  const [cardFilter, setCardFilter] = useState("All");
  const [listTransactions, setListTransactions] = useState<ITransation[]>([]);

  function filterEntrada() {
    setCardFilter("entrada");
  }
  function filterSaida() {
    setCardFilter("saida");
  }
  function todos() {
    setCardFilter("All");
  }
  function deleteCard(card: ITransation) {
    const filteredList = listTransactions.filter((item) => item !== card);
    setListTransactions(filteredList);
  }
  const filteredTransactions = listTransactions.filter((transaction) => {
    if (cardFilter === "All") return transaction;

    return transaction.type === cardFilter;
  });

  return (
    <TransationContext.Provider
      value={{
        homePage,
        setHomePage,
        cardFilter,
        setCardFilter,
        listTransactions,
        setListTransactions,
        filterEntrada,
        filterSaida,
        todos,
        deleteCard,
        filteredTransactions,
      }}
    >
      {children}
    </TransationContext.Provider>
  );
};

export default Providers;
