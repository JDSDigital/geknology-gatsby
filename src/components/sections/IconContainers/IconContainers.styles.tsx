import { Container, styled } from "@material-ui/core";

export const IconContainerRoot = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),

  "& *:first-child": {
    marginBottom: theme.spacing(2),
  },
}));

export const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(3),
  alignItems: "center",
  transition: "all 0.3s ease",

  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
