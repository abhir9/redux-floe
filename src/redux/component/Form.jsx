import React, { Component } from "react";
import { addNote } from "../action";
import { connect } from "react-redux";
const mapDispatchToProps = dispatch => {
  return {
    propAddNote: notes => {
      dispatch(addNote(notes));
    }
  };
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  submitHandler(e) {
    e.preventDefault();
    this.props.propAddNote(this.state.title);
    this.setState({ title: "" });
  }
  changeHandler(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }
  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <input
          type="text"
          value={this.state.title}
          onChange={e => {
            this.changeHandler(e);
          }}
        />
        <button>ADD</button>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Form);
