import React from "react";
import { connect } from "react-redux";

class UserHeader extends React.Component {
  render() {
    const user = this.props.user.find((user) => user.id === this.props.userId);
    if (!user) {
      return null;
    } else {
      return <div style={{ color: "red" }}>USERS: {user.name}</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return { user: state.users };
};

export default connect(mapStateToProps)(UserHeader);
