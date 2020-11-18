import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

const App = () => {

  const [cpf, setCpf] = useState("");
  const [mask, setMask] = useState("");

  return (
    <div>
      <CpfCnpj
        className="cpf--cnpj--input"
        placeholder="Digite um CPF ou CNPJ"
        type="tel"
        value={cpf}
        onChange={(e, type) => {
          setCpf(e.target.value);
          setMask(type === "CPF");
        }}
      />
    </div>
  );
};

export default App;
