import styled from "@emotion/styled";
import { Card } from "../Card/Card";
import { Tipografia } from "../Tipografia/Tipografia";
import { ListaSuspensa } from "../ListaSuspensa/ListaSuspensa";
import { CampoTexto } from "../CampoTexto/CampoTexto";
import Tag from "../Tag/Tag";
import simboloCifrao from "../../assets/Frame 7.png";
import { Botao } from "../Botao/Botao";
import filtro from "../../assets/filtro.png"

const CabecalhoFiltroEstilizado = styled.div`
  text-align: center;
  color: ${(props) => props.theme.cores.primarias.b};
  border-bottom: 1px solid;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const FiltroLateral = ({ children }) => {
  return (
    <Card fundo="laranja">
      <form>
        <CabecalhoFiltroEstilizado>
          <Tipografia variante="h3" componente="h2">
            {children}
          </Tipografia>
        </CabecalhoFiltroEstilizado>

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <ListaSuspensa
            titulo="Atividade freelancer"
            capa="Escolha a profissão"
          />
          <CampoTexto titulo="Informe as três principais habilidades que você precisa:" />
          <div
            style={{
              display: "flex",
              marginTop: "-30px",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Tag variante="habilidade">Design</Tag>
            <Tag variante="habilidade">Design</Tag>
            <Tag variante="habilidade">Design</Tag>
          </div>

          <ListaSuspensa titulo="Idiomas" capa="Selecione o idioma" />

          <ListaSuspensa titulo="Nivel" capa="Selecione o nivel do idioma" />

          <div style={{ display: "flex", gap: "8px" }}>
            <div>
              <img
                src={simboloCifrao}
                style={{ position: "absolute", zIndex: "1", marginTop: "32px" }}
              />
              <CampoTexto titulo="Preco Mínimo" />
            </div>
            <div>
              <img
                src={simboloCifrao}
                style={{ position: "absolute", zIndex: "1", marginTop: "32px" }}
              />
              <CampoTexto titulo="Preco Máximo" />
            </div>
          </div>
          <Botao variante="primaria" detalhe="semSeta"> Filtrar <img src={filtro} style={{marginLeft: "8px"}}/></Botao>
        </div>
      </form>
    </Card>
  );
};

export default FiltroLateral;
