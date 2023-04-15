import { TotalMoneyProps } from "../../interfaces";
import "../../styles/components/total_money.sass"

const TotalMoney = ({ listTransactions }: TotalMoneyProps) => {
  return (
    <div className="total_container">
      <span>
        <h1>Valor Total:</h1>
        <p>O valor se refere ao saldo</p>
      </span>
      <h2>
        R${" "}
        {listTransactions.reduce((valorAnterior, valorAtual) => {
          if (valorAtual.type === "entrada") {
            return valorAnterior + valorAtual.value;
          } else if (valorAtual.type === "saida") {
            return valorAnterior - valorAtual.value;
          }
          return valorAnterior;
        }, 0)}
      </h2>
    </div>
  );
};

export default TotalMoney;
