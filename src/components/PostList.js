import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions/index";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map((element) => {
      return (
        <div key={element.id}>
          <div>
            <h2>{element.title}</h2>
            <p>{element.body}</p>
            <UserHeader userId={element.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, {
  fetchPostsAndUsers: fetchPostsAndUsers,
})(PostList);
