import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

export const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <StaticImage
              src="../../images/logo.png"
              alt="Geknology logo"
              width={300}
              formats={["auto", "webp", "avif"]}
              placeholder="blurred"
              backgroundColor="#fafafa"
            />
          </Grid>
          <Grid item xs={12} alignItems="center">
            <Typography variant="body2" display="inline">
              © {new Date().getFullYear()} Geknology Techno Services SpA. Todos
              los derechos reservados.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

const useStyles = makeStyles({
  footer: {
    display: "flex",
    alignSelf: "end",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    boxShadow: "3px 3px 5px rgba(0,0,0,0.3)",
  },
});
