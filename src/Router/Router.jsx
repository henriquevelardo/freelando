import { createBrowserRouter } from "react-router-dom";
import SelecaoCliente from "../paginas/cadastro/SelecaoCliente";
import LayoutBaseCadastro from "../paginas/cadastro/LayoutBaseCadastro";
import PaginaBase from "../paginas/PaginaBase";
import Interesses from "../paginas/cadastro/Interesses";
import DadosPessoais from "../paginas/cadastro/DadosPessoais";
import Concluido from "../paginas/cadastro/Concluido";

export const router = createBrowserRouter([
    {
      path: '',
      element: <PaginaBase />,
      children: [
        {
          path: '',
          element: <LayoutBaseCadastro />,
          children: [
            {
              path: '/',
              element: <SelecaoCliente />
            },
            {
              path: 'interesses',
              element: <Interesses />,
              children:[]
            },
            {
              path: 'dados-pessoais',
              element: <DadosPessoais />,
              children: []
            },
            {
              path: 'concluido',
              element: <Concluido />,
              children: []
            }
          ]
        }
      ],
    },
  ]);