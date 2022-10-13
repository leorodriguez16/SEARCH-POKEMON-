import React from 'react'
import { createUseStyles, useTheme} from "react-jss";
import icon from '../assets/roll.png'
const useStyle = createUseStyles(({ theme }) => ({
  "@global": {
    html: {
      backgroundColor: theme.background,
    },
  },
  container: {
    backgroundColor: theme.quaternary,
    color: theme.color,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    textAlign: "right",
    boxShadow: `${theme.boxShadow} ${theme.shadow}`,
    "& img": {
      margin: "0.2rem",
      padding: "0.5rem",
      width: "1.5rem",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: theme.tertiary,
      },
    },
  },
}));

export const Header = () => {
  const classes = useStyle();
 const {toogleTheme} = useTheme();
  return (
  <div className={classes.container}>
      <img onClick={toogleTheme} src={icon} alt="iconTheme"/>
    </div>
  )
}
