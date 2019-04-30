import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};
const List = ({ notes }) => (
  <ul>
    {notes.map((el, index) => (
      <li key={index.toString()}>{el}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
