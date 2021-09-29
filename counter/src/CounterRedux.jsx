import React from "react";
import { connect } from "react-redux";

function CounterRedux(props) {
  return (
    <div className="main">
      <h1 className="heading">Counter with redux</h1>
      <div className="section">
        <span className="count">{props.count}</span>
      </div>
      <div className="m-5">
        <button className="btn btn-red" onClick={props.decrease}>
          Decrease
        </button>
        <button className="btn btn-blue" onClick={props.reset}>
          Reset
        </button>
        <button className="btn btn-green" onClick={props.increase}>
          Increase
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state.count, othername: "john" };
}
function mapDispatchToProps(dispatch) {
  return {
    decrease: () => dispatch({ type: "DECREASE" }),
    reset: () => dispatch({ type: "RESET" }),
    increase: () => dispatch({ type: "INCREASE" }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
