import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { ListContext } from "../../providers/ListContext"; 
import { CardProps } from "../../interfaces";

const Card = ({ transaction }: CardProps) => {
  const { deleteCard } = useContext(ListContext); 

  return (
    <li className={transaction.type === "entrada" ? "card_entrada" : "card_saida"} id={transaction.id.toString()}>
      <div className="card_box">
        <h2>{transaction.description}</h2>
        <p>{transaction.type}</p>
      </div>
      <div className="card_box1">
        <span>{transaction.value}</span>
        <FaTrash className="delete" onClick={() => deleteCard(transaction)} />
      </div>
    </li>
  );
};

export default Card;
