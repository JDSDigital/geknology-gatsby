import * as React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeConfig from "./theme.json";
import { Global, css } from "@emotion/react";

const theme = createMuiTheme(ThemeConfig);

const CustomThemeProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          a {
            text-decoration: none;
          }
          .white {
            color: white;
          }
        `}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
