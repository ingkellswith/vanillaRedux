import React from "react";
import { connect } from "react-redux";
//import { actionCreators } from "../store";
import { Link } from "react-router-dom";
import { remove } from "../store";

function ToDo({ text, onBtnClick, id }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}

function mapDispatchToProps(dispatch, ownProps) {
  //console.log(dispatch, "maple", ownProps, "story");
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
    //애초에 {text,onBtnClick}=ownProps이므로 ownProps에 더 많은 데이터가 담겨있으므로 ownProps.id사용가능
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
