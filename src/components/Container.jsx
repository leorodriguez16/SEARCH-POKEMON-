import React, {useReducer} from 'react'
import {Form, SearchList, Card} from './index'
import { createUseStyles} from "react-jss";
const useStyle = createUseStyles(({ theme }) => ({
  container: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingTop: "3rem",
    height: "100%",
    "& > div": {
      width: "350px",
      padding: "10px",
      "@media (max-width: 767px)": {
        width: "100%",
      },
    },
  },
}));
const reducerList = (state, action) => {
let newState = {};
switch(action.type){
  case"SEARCH":
  const search = [...state.search, action.name];
      const indexCurrent = search.length - 1;

    const pokemon = state.items.findIndex(
  (item) => item.name.toUpperCase() === action.name.toUpperCase()
    );
    // console.log(action.name);
   newState = {
        search,
        indexCurrent,
        itemCurrent: state.items[pokemon] || { name: "no matches" },
   };
  break;
  default:
  break;
 }
//  console.log(newState);
return {...state, ...newState};
};
// manejar el estado 
export const Container = ({items}) => {
   const classes = useStyle();
    const [list, dispatchList] = useReducer(reducerList, {
    items,
  search: [],
  itemCurrent: null,
  indexCurrent: -1
  });
  // console.log(list);
  return (
    <div>
      <div className={classes.container}>
			<div>
				<Form handleEvent={dispatchList} />
				<br />
				<Card item={list.itemCurrent}/>
			</div>
			<div><SearchList
       list={list.search}
          indexCurrent={list.indexCurrent}
          handleEvent={dispatchList}
   /></div>
		</div>
    </div>
  )
}
