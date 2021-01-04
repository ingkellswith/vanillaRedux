//import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";
/*const ADD = "ADD";
const DELETE = "DELETE";
 const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};
const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
}; */

/* console.log(
  { [addToDo]: "슬라임", [deleteToDo]: "오르비스" },
  addToDo,
  "자쿰",
  addToDo(),
  "발록"
); */

/* const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
}; */

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = createReducer([], {
  [addToDo.type]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() }); //return하지 않음 push는 state를 mutate하는 것이기 때문
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload), //return한 것임 mutate가 아니기 때문
});

//const store = createStore(reducer);
const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
