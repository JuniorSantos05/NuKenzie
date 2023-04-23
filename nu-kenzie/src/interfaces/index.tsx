export interface ITransationContextProps {
  children: React.ReactNode;
}

export interface ITransationContext {
  homePage: boolean;
  setHomePage: React.Dispatch<React.SetStateAction<boolean>>;
  cardFilter: string;
  setCardFilter: React.Dispatch<React.SetStateAction<string>>;
  listTransactions: ITransation[];
  setListTransactions: React.Dispatch<React.SetStateAction<ITransation[]>>;
  filterEntrada: () => void;
  filterSaida: () => void;
  todos: () => void;
  deleteCard: (card: ITransation) => void;
  filteredTransactions: ITransation[];
}

export interface ITransation {
  description: string;
  type: string;
  value: number;
}

export interface CardProps {
  transaction: ITransation;
  key: number | string;
  deleteCard: (card: ITransation) => void;
  className: string;
}
