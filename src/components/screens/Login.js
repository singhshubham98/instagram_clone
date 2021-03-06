/**
 * InstaClone
 * Login.js
 * Author - Shubham Singh
 * Date - 04/01/2020
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class Login extends Component {
  _login = () => {
    this.props.navigation.navigate('register');
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._login}>
        <Text>Login Page</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
