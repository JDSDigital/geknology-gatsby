import * as React from "react";
import { Link } from "gatsby";
import {
  Container,
  Hidden,
  IconButton,
  List,
  ListItem,
  makeStyles,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { StaticImage } from "gatsby-plugin-image";
import { useSiteMetadata } from "hooks/useSiteMetadata";

const linkList = [
  { to: "/", text: "Inicio" },
  { to: "/support", text: "Soporte Técnico" },
  { to: "/contact", text: "Contacto" },
];

export const Header: React.FC = () => {
  const classes = useStyles();
  const { title } = useSiteMetadata();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <Link to="/">
          <StaticImage
            src="../../images/logo.png"
            alt={title}
            width={300}
            formats={["auto", "webp", "avif"]}
            placeholder="blurred"
            backgroundColor="#fafafa"
          />
        </Link>

        <Hidden smDown>
          <List className={classes.navbar}>
            {linkList.map((link, index) => (
              <ListItem
                key={`${link.text.toLowerCase().replace(" ", "-")}-${index}`}
              >
                <Link
                  to={link.to}
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  {link.text}
                </Link>
              </ListItem>
            ))}
          </List>
        </Hidden>

        <Hidden mdUp>
          <IconButton aria-label="open drawer" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <SwipeableDrawer
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <div role="presentation">
              <div className={classes.drawerLogo}>
                <Link to="/">
                  <StaticImage
                    src="../../images/logo.png"
                    alt={title}
                    width={250}
                    formats={["auto", "webp", "avif"]}
                  />
                </Link>
              </div>

              <List disablePadding>
                {linkList.map((link, index) => (
                  <Link
                    key={`${link.text
                      .toLowerCase()
                      .replace(" ", "-")}-${index}`}
                    to={link.to}
                    className={classes.link}
                    activeClassName={classes.active}
                  >
                    <ListItem button>{link.text}</ListItem>
                  </Link>
                ))}
              </List>
            </div>
          </SwipeableDrawer>
        </Hidden>
      </Container>
    </header>
  );
};

const useStyles = makeStyles(theme => ({
  header: {
    zIndex: 100,
    boxShadow: "3px 3px 5px rgba(0,0,0,0.3)",
  },
  container: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navbar: {
    display: "flex",
    flexDirection: "row",

    "& li": {
      width: "auto",
    },
  },
  link: {
    color: theme.palette.secondary.main,
  },
  active: {
    color: theme.palette.primary.main,
  },
  drawerLogo: {
    padding: "1.5rem 1rem",
  },
}));
