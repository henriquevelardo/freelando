import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "#FFFFFF",
    atencao: "",
    focus: "",
    primarias: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutras: {
      a: "#373737",
      b: "",
      c: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
  espacamentos: {
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
