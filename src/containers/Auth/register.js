import React from "react";
import { connect } from "react-redux";
import { setUserDetails } from "../../modules/auth";
import { TextInput, Button, Text } from "react-native-paper";
import { View } from "react-native";

import styles from "../../styles";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleInput = (name, value) => {
    this.setState({ [name]: value });
  };

  handleRegisterBtn = () => {
    this.props.dispatch(setUserDetails(this.state));
  };

  LoginBtn = () => {
    this.props.navigation.navigate("Login");
  }

  render() {
    const { username, email, password } = this.state;
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
          label="Email"
          value={email}
          onChangeText={text => this.handleInput("email", text)}
        />
        <TextInput
          style={styles.textInput}
          label="Password"
          value={password}
          onChangeText={text => this.handleInput("password", text)}
        />
        <Button mode="contained" onPress={this.handleRegisterBtn} style={styles.button}>
          {"Register"}
        </Button>

        <Button mode="contained" onPress={this.LoginBtn} style={styles.button}>
          {"Login"}
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

export default connect(mapStateToProps)(Register);
