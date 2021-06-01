import * as React from "react";
import { Header } from "./header";
import { useSiteMetadata } from "hooks/useSiteMetadata";
import CustomThemeProvider from "theme/custom-theme-provider";
import { Container } from "@material-ui/core";

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <CustomThemeProvider>
      <Header siteTitle={title || `Title`} />
      <Container>
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </Container>
    </CustomThemeProvider>
  );
};
