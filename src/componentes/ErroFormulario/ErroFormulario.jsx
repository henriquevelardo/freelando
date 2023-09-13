const listaErros = {
  campoObrigatorio: "Por gentileza, esse campo não pode estar vazio",
  nomeCompleto: "Por gentileza, preencha com nome completo",
};

export const NaoPreenchido = () => {
  return (
    <p style={{ fontSize: "14px", marginTop: "-10px", color: "red" }}>{listaErros.campoObrigatorio}</p>
  );
};

export const NomeIncompleto = () => {

  return (
    <p style={{ fontSize: "14px", marginTop: "-10px", color: "red" }}>{listaErros.nomeCompleto}</p>
  );
};

