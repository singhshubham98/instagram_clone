/**
 * InstaClone
 * Register.js
 * Author - Shubham Singh
 * Date - 04/01/2020
 */

import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

class Register extends Component {
  // _login = () => {
  //   this.props.navigation.navigate('main');
  // };
  render() {
    return (
      <View style={styles.container}>
        <Text>Register Page</Text>
      </View>
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

export default Register;
