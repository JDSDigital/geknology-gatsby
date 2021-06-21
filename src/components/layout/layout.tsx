import * as React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { useSiteMetadata } from "hooks/useSiteMetadata";
import CustomThemeProvider from "theme/custom-theme-provider";
import { makeStyles } from "@material-ui/core";

type Props = {
  children: any;
};

export const Layout: React.FC<Props> = ({ children }) => {
  const { title } = useSiteMetadata();
  const classes = useStyles();

  return (
    <CustomThemeProvider>
      <Header siteTitle={title || `Title`} />
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
