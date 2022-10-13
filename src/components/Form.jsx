import React,{useRef} from 'react'
import { createUseStyles } from 'react-jss';
const useStyle = createUseStyles(({theme})=> ({
    //(B)
  container: {
    ...theme.container,
    background: theme.primary,
    boxShadow: `${theme.boxShadow} ${theme.shadow}`,
  },
  fileInput: {
    background: theme.tertiary,
    padding: "0 1rem",
  },
  text: {
    color: theme.color,
    outline: "none",
    fontSize: "1rem",
    width: "100%",
    height: "3rem",
    background: "transparent",
    border: "0px",
    "&::placeholder": {
      color: theme.quaternary,
    },
  },
}))

export const Form = ({handleEvent}) => {
const inputNameRef = useRef();
const handleSubmit = e =>{
  e.preventDefault()
// console.log(inputNameRef.current.value);
const name = inputNameRef.current.value;
if (name.trim()) {
  handleEvent({type: "SEARCH", name})
}
}
const classes = useStyle();
  return (
    <>
    <form className={classes.container} onSubmit={handleSubmit}>
      <div className={classes.fileInput}>
        <input 
        placeholder='Type Pokemon...' 
        className={classes.text}        
        ref={inputNameRef}
        type="text"
        />
      </div>
    </form>
    </>
  )
}
