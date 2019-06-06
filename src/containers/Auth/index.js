import React from "react";
import { connect } from "react-redux";
import { checkAuthStatus, setUserDetails } from "../../modules/auth";
import { View, Text } from "react-native";
import Dashboard from "../Dashboard";
import Register from "./register";

class AuthScreen extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.dispatch(checkAuthStatus());
  }

  get renderAuthComponent() {
    const { isLoggedIn } = this.props;
    return isLoggedIn ? (
      <Dashboard />
    ) : (
      <Register navigation={this.props.navigation} />
    );
  }

  render() {
    console.log(this.props);
    return this.renderAuthComponent;
  }
}

function mapStateToProps({ auth }) {
  return {
    isLoggedIn: auth.isLoggedIn,
    user: auth.userDetails
  };
}

export default connect(mapStateToProps)(AuthScreen);
