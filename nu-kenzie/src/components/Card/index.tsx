import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import "../../styles/components/card.sass";
import { CardProps } from "../../interfaces";

const Card = ({ transaction, key, deleteCard, className }: CardProps) => {
  return (
    <li className={className} id={key?.toString()}>
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
