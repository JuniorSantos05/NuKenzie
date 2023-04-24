import React, { useContext, useState } from "react";
import { TransationContext } from "../../providers/Providers";
import "../../styles/components/form.sass";

const Form = () => {
  const { listTransactions, setListTransactions } =
    useContext(TransationContext);

  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  function handleTransactions(event: any) {
    event.preventDefault();

    setListTransactions([
      ...listTransactions,
      { description: description, type: type, value: parseInt(value) },
    ]);
  }

  return (
    <form id="form" onSubmit={handleTransactions}>
      <div className="input_container">
        <label htmlFor="descricao">Descrição</label>
        <input
          className="Form_input1"
          required
          type="text"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span>Ex:Conta de Luz</span>
      </div>

      <div className="Form_div">
        <div className="input_container">
          <label htmlFor="valor">Valor</label>
          <input
            className="Form_input2"
            required
            type="number"
            placeholder="0,00"
            step="0.0001"
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <div className="input_container">
          <label htmlFor="select">Tipo de Valor</label>
          <select
            required
            name="select"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option value="">Selecionar</option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;
