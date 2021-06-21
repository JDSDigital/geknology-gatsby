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
          body {
            margin-bottom: 0;
          }
          a {
            text-decoration: none;
          }
          .white {
            color: white;
          }
          #gatsby-focus-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
