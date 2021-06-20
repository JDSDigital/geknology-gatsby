import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { useSiteMetadata } from "hooks/useSiteMetadata";
import CustomThemeProvider from "theme/custom-theme-provider";

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <CustomThemeProvider>
      <Header siteTitle={title || `Title`} />
      <main>{children}</main>
      <Footer />
    </CustomThemeProvider>
  );
};
