import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import PaginaBase from "../paginas/PaginaBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";
import Home from "../paginas/Home/Home";
import Login from "../paginas/Login/Login";
import PaginaNaoEncontrada from "../paginas/404/PaginaNaoEncontrada";
import AreaAtuacao from "../paginas/cadastro/AreaAtuacao";
import InformacoesProfissionais from "../paginas/cadastro/InformacoesProfissionais";
import { LoginUsuarioProvider } from "../context/LoginUsuario";
import HomeCliente from "../paginas/Cliente/HomeCliente";
import home from "../assets/Hero.png"
import BannerCliente from "../assets/BannerCliente.png"

export const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaBase banner={true} url={home} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "",
    element: <PaginaBase banner={false} />,
    children: [
      {
        path: "",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "*",
            element: <PaginaNaoEncontrada />,
          },
        ],
      },
      {
        path: "/login",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: (
              <LoginUsuarioProvider>
                <Login />
              </LoginUsuarioProvider>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "",
    element: <PaginaBase banner={false} />,
    children: [
      {
        path: "/cadastro",
        element: <LayoutBaseCadastro />,
        children: [
          {
            path: "",
            element: <SelecaoCliente />,
          },
          {
            path: "area-atuacao",
            element: <AreaAtuacao />,
          },
          {
            path: "interesses",
            element: <Interesses />,
          },
          {
            path: "dados-pessoais",
            element: <DadosPessoais />,
          },
          {
            path: "informacoes-profissionais",
            element: <InformacoesProfissionais />,
          },
          {
            path: "concluido",
            element: <Concluido />,
          },
        ],
      },
    ],
  },
  {
    path: "",
    element: <PaginaBase banner={true} url={BannerCliente}  visualizacao="cliente"/>,
    children: [
      {
        path:"/cliente",
        element: <HomeCliente />,
        children:[]
      },
    ]
  },
]);
