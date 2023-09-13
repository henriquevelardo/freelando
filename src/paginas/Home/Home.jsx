import { Card } from "../../componentes/Card/Card";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import profissionais from "./assets/profissionais.svg";
import especialidades from "./assets/especialidades.svg";
import seguranca from "./assets/seguranca.svg";
import simplicidade from "./assets/simplicidade.svg";
import atendimento from "./assets/atendimento.svg";
import clientes from "./assets/clientes.svg";
import projetos from "./assets/projetos.svg";
import remuneracao from "./assets/remuneracao.svg";
import styled from "@emotion/styled";
import Tag from "../../componentes/Tag/Tag";

const DivEstilizadaHome = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  color: ${(props) => props.theme.cores.primarias.a};

  &.secundaria {
    justify-content: center;
    color: ${(props) => props.theme.cores.primarias.c};
    margin-bottom: 24px;
  }

  &.tags{
    color: ${props => props.theme.cores.neutras.a};
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    margin-bottom: 48px;
  }
`;

const habilidades = [
  "Design",
  "Branding",
  "Ilustracao",
  "Marketing",
  "Identidade Visual",
  "SEO",
  "Redacao",
  "Transcricao",
  "Revisao",
  "Traducao",
  "E-Books",
  "ABNT",
  "Programacao",
  "API",
  "Desenvolvimento de Aplicativo",
  "Desenvolvimento de Websites",
];

const Home = () => {
  return (
    <main>
      <section style={{ textAlign: "center", marginTop: "48px" }}>
        <Tipografia componente="h1" variante="h2">
          Vantagens para contratantes
        </Tipografia>
        <DivEstilizadaHome>
          <Card variante="card">
            <img src={profissionais} style={{ width: "30%" }} />
            <Tipografia componente="h3" variante="h3">
              Profissionais qualificados
            </Tipografia>
          </Card>
          <Card variante="card">
            <img src={especialidades} style={{ width: "30%" }} />
            <Tipografia componente="h3" variante="h3">
              Mútiplas especialidades
            </Tipografia>
          </Card>
          <Card variante="card">
            <img src={simplicidade} style={{ width: "30%" }} />
            <Tipografia componente="h3" variante="h3">
              Atendimento e agilidade
            </Tipografia>
          </Card>
          <Card variante="card">
            <img src={seguranca} style={{ width: "30%" }} />
            <Tipografia componente="h3" variante="h3">
              Simplicidade e seguranca
            </Tipografia>
          </Card>
        </DivEstilizadaHome>
      </section>

      <section style={{ textAlign: "center", marginTop: "80px" }}>
        <Tipografia componente="h1" variante="h2">
          Vantagens para freelas
        </Tipografia>
        <DivEstilizadaHome className="secundaria">
          <Card variante="card" fundo="verde">
            <img src={clientes} style={{ marginRight: "12px" }} />
            <Tipografia componente="h3" variante="h3">
              Clientes Verificados
            </Tipografia>
          </Card>
          <Card variante="card" fundo="verde">
            <img src={atendimento} style={{ marginRight: "12px" }} />
            <Tipografia componente="h3" variante="h3">
              Atendimento e agilidade
            </Tipografia>
          </Card>
        </DivEstilizadaHome>

        <DivEstilizadaHome className="secundaria">
          <Card variante="card" fundo="verde">
            <img src={projetos} style={{ marginRight: "12px" }} />
            <Tipografia componente="h3" variante="h3">
              Atendimento e agilidade
            </Tipografia>
          </Card>
          <Card variante="card" fundo="verde">
            <img src={remuneracao} style={{ marginRight: "12px" }} />
            <Tipografia componente="h3" variante="h3">
              Atendimento e agilidade
            </Tipografia>
          </Card>
        </DivEstilizadaHome>
      </section>

      <section style={{ textAlign: "center", marginTop: "80px"}}>
        <Tipografia componente="h1" variante="h2">
          Quais habilidade você encontra por aqui?
        </Tipografia>

        <div style={{display: "flex", justifyContent: "center"}}>
        <DivEstilizadaHome className="tags" >
          {habilidades.map((habilidade) => {
            return <Tag key={habilidade}>{habilidade}</Tag>;
          })}
        </DivEstilizadaHome>
        </div>
       
      </section>
    </main>
  );
};

export default Home;
