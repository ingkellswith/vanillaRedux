import React, { useState } from "react";
import { connect } from "react-redux";
//import { actionCreators } from "../store";
import ToDo from "../components/ToDo";
import { add } from "../store";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} /> //list를 렌더하기 위해서,setText가 실행될 때 state가 바뀌므로 그 때 다시 렌더링하는듯
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
} //store에 있는 state를 가져온다

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(add(text)),
  };
} //store에 있는 dispatch할 함수를 가져오고 dispatch는 여기에서 한다.

export default connect(mapStateToProps, mapDispatchToProps)(Home);
