import React from "react";
import { connect } from "react-redux";
import { logOut } from "../../modules/auth";
import { TextInput, Button, Text } from "react-native-paper";
import { View } from "react-native";

import styles from "../../styles";

class LogOut extends React.Component {

  handleLogoutBtn = () => {
    this.props.dispatch(logOut());
  }

  render() {
    return (
        <Button mode="contained" onPress={this.handleLogoutBtn} style={styles.button}>
        {"Log out"}
        </Button>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isLoggedIn: auth.isLoggedIn,
    user: auth.userDetails
  };
}

export default connect(mapStateToProps)(LogOut);