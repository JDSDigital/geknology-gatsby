import * as React from "react";
import { Header } from "./header";
import { useSiteMetadata } from "../../hooks/useSiteMetadata";
import CustomThemeProvider from "../../theme/custom-theme-provider";

export const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <CustomThemeProvider>
      <Header siteTitle={title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
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
      </div>
    </CustomThemeProvider>
  );
};
