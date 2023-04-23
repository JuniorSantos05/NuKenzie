import React, { useContext } from "react";
import Card from "../Card";
import "../../styles/components/list.sass";
import { TransationContext } from "../../providers/Providers";
import { ITransation } from "../../interfaces";

const List = () => {
  const { listTransactions, deleteCard } = useContext(TransationContext);

  return (
    <div className="list_container">
      <nav>
        <h2>Resumo Financeiro</h2>
        <div className="btn_container">
          <button className="btn_todos" onClick={() => "Clicou"}>
            Todos
          </button>
          <button className="btn_list" onClick={() => "Clicou"}>
            Entradas
          </button>
          <button className="btn_list" onClick={() => "Clicou"}>
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
