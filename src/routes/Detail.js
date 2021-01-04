import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);
  const {
    match: {
      params: { thisIsId },
    },
  } = ownProps; //match.params는 route에서 설정한 /:thisIsId와 같다.
  return { toDo: state.find((toDo) => toDo.id === parseInt(thisIsId)) };
}

export default connect(mapStateToProps)(Detail);
