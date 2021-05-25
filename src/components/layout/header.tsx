import * as React from "react";
import { Link } from "gatsby";
import { makeStyles, Typography } from "@material-ui/core";

type HeaderProps = {
  siteTitle: string;
};

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.main,
    marginBottom: `1.45rem`,
  },
  link: {
    color: "white",
    marginBottom: 0,
  },
}));

export const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link to="/">
          <Typography variant="h1" component="p" className={classes.link}>
            {siteTitle}
          </Typography>
        </Link>
      </div>
    </header>
  );
};
