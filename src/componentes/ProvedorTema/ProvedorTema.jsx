import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#FFFFFF",
    atencao: "",
    focus: "#B009FF",
    primarias: {
      a: "#5754ED",
      b: "#D93114",
      c: "#168070",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "#FDF8F8",
      c: "#EBFCF9",
    },
    neutras: {
      a: "#373737",
      b: "#f5f5f5",
      c: "",
      d: "#F8F8FD",
    },
    dark: {
      a: "",
      b: "#B61B00",
    },
  },
  espacamentos: {
    xl: "64px",
    l: "32px",
    s: "16px",
    m: "24px",
    xs: "8px"
  },
  fontFamily: " 'Montserrat', sans-serif "
};

export const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
