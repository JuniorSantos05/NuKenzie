import React, { useContext } from "react";
import Card from "../Card";
import { TransationContext } from "../../providers/Providers";
import NoCard from "../../assets/NoCard.svg";
import "../../styles/components/list.sass";

const List = () => {
  const {
    filteredTransactions,
    deleteCard,
    filterEntrada,
    filterSaida,
    todos,
  } = useContext(TransationContext);

  return (
    <div className="list_container">
      <nav>
        <h2>Resumo Financeiro</h2>
        <div className="btn_container">
          <button className="btn_todos" onClick={todos}>
            Todos
          </button>
          <button className="btn_list" onClick={filterEntrada}>
            Entradas
          </button>
          <button className="btn_list" onClick={filterSaida}>
            Saídas
          </button>
        </div>
      </nav>
      <ul>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => {
            if (transaction.type === "entrada") {
              return (
                <Card
                  transaction={transaction}
                  key={index}
                  deleteCard={deleteCard}
                  className="card_entrada"
                />
              );
            } else if (transaction.type === "saida") {
              return (
                <Card
                  transaction={transaction}
                  key={index}
                  deleteCard={deleteCard}
                  className="card_saida"
                />
              );
            }
          })
        ) : (
          <img src={NoCard} alt="Imagem Vazia" />
        )}
      </ul>
    </div>
  );
};

export default List;
