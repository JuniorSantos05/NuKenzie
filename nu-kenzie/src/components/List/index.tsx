import React, { useContext } from "react";
import Card from "../Card";
import { ListContext } from "../../providers/ListContext"; 
import "../../styles/components/list.sass"

const List = () => {
  const { listTransactions, deleteCard, filterEntrada, filterSaida, todos } =
    useContext(ListContext); 

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
            Despesas
          </button>
        </div>
      </nav>
      <ul>
        {listTransactions.map((transaction, index) => {
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
        })}
      </ul>
    </div>
  );
};

export default List;
