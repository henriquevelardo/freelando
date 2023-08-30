import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import PaginaBase from "../paginas/PaginaBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";
import Home from "../paginas/Home/Home";

export const router = createBrowserRouter([
  {
    path: '',
    element: <PaginaBase banner={true} />,
    children: [
      {
        path: '/',
        element: <Home />
      }
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
            path: "interesses",
            element: <Interesses />,
          },
          {
            path: "dados-pessoais",
            element: <DadosPessoais />,
          },
          {
            path: "concluido",
            element: <Concluido />,
          },
        ],
      },
    ],
  },
]);
