import { connect } from "react-redux";
import React, { Component } from "react";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state.comments };
};
export default connect(mapStateToProps)(CommentList);
