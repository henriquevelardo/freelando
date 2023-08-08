import InputRadio from "../InputRadio/InputRadio";

const GrupoRadio = ({ opcoes }) => {
  return (
    <div>
      {opcoes.map((opc) => (
        <InputRadio key={opc.valor} label={opc.label} />
      ))}
    </div>
  );
};

export default GrupoRadio;
