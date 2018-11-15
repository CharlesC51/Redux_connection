import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const mapDispatchToProps = dispatch => ({
  addOne: () => dispatch({ type: "ADD" }),
  addTen: () => dispatch({ type: "ADD10" }),
  removeOne: () => dispatch({ type: "REMOVE" }),
  removeTen: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" })
});

const CountComponent = ({
  count,
  addOne,
  addTen,
  removeOne,
  removeTen,
  reset
}) => (
  <div>
    <p>{count}</p>
    <button onClick={addOne}>add 1</button>
    <button onClick={addTen}>add 10</button>
    <button onClick={removeOne}>remove 1</button>
    <button onClick={removeTen}>remove 10</button>
    <button onClick={reset}>reset</button>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountComponent);