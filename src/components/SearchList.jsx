import React from 'react'
import { createUseStyles } from "react-jss"; //(A)

const useStyles = createUseStyles(({ theme }) => ({
  //(B)
  container: {
    ...theme.container,
    background: theme.primary,
    boxShadow: `${theme.boxShadow} ${theme.shadow}`,
  },
  h3: {
    fontWeight: "400",
    color: theme.color,
  },
  button: {
    outline: "none",
    padding: "0.5rem",
    fontSize: "1rem",
    border: "0px solid",
    borderRadius: "0.3rem",
    color: "white",
    background: theme.tertiary,
    cursor: "pointer",
    marginLeft: "0.5rem",
    "&:hover": { background: theme.quaternary },
    "&:active": { background: theme.tertiary },
    "&[disabled]": {
      opacity: 0.3,
    },
  },
  ul: {
    backgroundColor: theme.secondary,
    listStyleType: "none",
    margin: "1rem 0",
    padding: "0",
    textAlign: "left",
    color: theme.color,
    "& > li": {
      fontWeight: "200",
      padding: "0.5rem",
      marginTop: "3px",
      cursor: "pointer",
      "&:hover": {
        background: theme.tertiary,
      },
      "&.active": {
        color: "#FFF",
        backgroundColor: theme.tertiary,
      },
    },
  },
}));


export const SearchList = ({ list, handleEvent, indexCurrent }) => {
    const classes = useStyles(); //(C)
 if (!list.length) return null;

  const handlePrev = e => {
    e.preventDefault()
    console.log('Prev');
  }
  const handleNext= e => {
    e.preventDefault()
    console.log('Next');
  }

  return (
    <div className={classes.container}>
      <h2 className={classes.h3}>List of already serach pokemon</h2>
        <button
         className={classes.button}
         onClick={handlePrev}
         disabled={indexCurrent <= 0 ? "disabled" : "" }
         >
          {"Prev"}
         </button>
        <button 
         className={classes.button}
         onClick={handleNext}
         disabled={indexCurrent >= list.length - 1 ? "disabled" : ""}
         >{"Next"}
         </button>
      <ul className={classes.ul}>
        {list.map((item,index)=>(
          <li
          className={index === indexCurrent ? "active" : ""}
          key={index}
          onClick={(e)=>handleEvent({type:"GOTO", index})}
          >{item}</li>
        ))}
      </ul>
    </div>
  )
}
