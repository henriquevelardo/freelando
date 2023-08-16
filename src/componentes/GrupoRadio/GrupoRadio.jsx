import InputRadio from "../InputRadio/InputRadio";

const GrupoRadio = ({ valorInteresse,  opcoes, onChange }) => {

  return (
    <div>
      {opcoes.map((option) => (
        <InputRadio
          key={option.valor}
          valor={option.valor}
          label={option.label}
          checked={option.valor === valorInteresse}
          onClick={() => onChange(option.valor)}
        />
      ))}
    </div>
  );

};


export default GrupoRadio;
