import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import CustomThemeProvider from "theme/custom-theme-provider";
import { makeStyles } from "@material-ui/core";
import { Seo } from "./seo";

type LayoutProps = {
  title: string;
};

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const classes = useStyles();

  return (
    <CustomThemeProvider>
      <Seo title={title} />
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </CustomThemeProvider>
  );
};

const useStyles = makeStyles({
  main: {
    flexGrow: 1,
  },
});
