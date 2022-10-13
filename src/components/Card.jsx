import React from 'react'
import {Img}from "react-image";
import error from '../assets/error.gif'
import loading from '../assets/loading.gif'
import {createUseStyles} from "react-jss";
const useStyles = createUseStyles(({theme}) => ({
   container: {
    ...theme.container,
    background: theme.primary,
    boxShadow: `${theme.boxShadow} ${theme.shadow}`,
    color: theme.color,
  },
 h1: {
    fontWeight: "400",
  },
imageContainer: {
    backgroundColor: theme.secondary,
    height: "200px",
    padding: "1.5rem 0",
    "& img": {
      height: "100%",
    },
  },
}))

export const Card = ({item}) => {
  const classes = useStyles();
  if (!item) return null 
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>{item.name.toUpperCase()}</h1>
    <div className={classes.imageContainer}>
         <Img
      src={item.img}
      loader={<img src={loading} alt={item.name} />}
      unloader={<img src={error} alt={item.name} />}
    />

    </div>
    </div>
  )
}
