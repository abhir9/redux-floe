import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};
const List = ({ notes }) => (
  <ul>
    {notes.map(el => (
      <li>{el}</li>
    ))}
  </ul>
);

export default connect(mapStateToProps)(List);
