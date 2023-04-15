import { Dispatch, SetStateAction } from "react";

export interface Transaction {
    id: number;
    description: string;
    type: string;
    value: number;
  }
  
  export interface ListContextData {
    listTransactions: Transaction[];
    setListTransactions: Dispatch<SetStateAction<Transaction[]>>;
    deleteCard: (transaction: Transaction) => void;
    filterEntrada: () => void;
    filterSaida: () => void;
    todos: () => void;
  }

  export type TransactionsContextType = {
    listTransactions: Transaction[];
    setListTransactions: Dispatch<SetStateAction<Transaction[]>>;
  };

  export interface TotalMoneyProps {
    listTransactions: Transaction[]; 
  }

  export interface CardProps {
    transaction: Transaction; 
    key: number;
    deleteCard: (transaction: Transaction) => void;
    className: string;
  }

