import React from "react";
import { connect } from "react-redux";
import { checkForLogin } from "../../modules/auth";
import { TextInput, Button, Text } from "react-native-paper";
import { View } from "react-native";

import styles from "../../styles";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillUpdate(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      Boolean(nextProps.isLoggedIn)
    ) {
      this.props.navigation.goBack();
    }
  }

  handleInput = (name, value) => {
    this.setState({ [name]: value });
  };

  handleLoginBtn = () => {
    this.props.dispatch(checkForLogin(this.state));
  };

  registerBtn = () => {
    this.props.navigation.goBack();
  };

  render() {
    const { username, password } = this.state;
    return (
      <View>
        <TextInput
          style={styles.textInput}
          label="Username"
          value={username}
          onChangeText={text => this.handleInput("username", text)}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          value={password}
          onChangeText={text => this.handleInput("password", text)}
        />

        <Button
          mode="contained"
          onPress={this.handleLoginBtn}
          style={styles.button}
        >
          {"Login"}
        </Button>

        <Button
          mode="contained"
          onPress={this.registerBtn}
          style={styles.button}
        >
          {"Register"}
        </Button>
      </View>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    isLoggedIn: auth.isLoggedIn,
    user: auth.userDetails
  };
}

export default connect(mapStateToProps)(Login);
