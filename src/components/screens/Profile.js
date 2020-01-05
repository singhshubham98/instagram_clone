/**
 * InstaClone
 * Profile.js
 * Author - Shubham Singh
 * Date - 04/01/2020
 */

import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

class Profile extends Component {
  _login = () => {
    this.props.navigation.navigate('main');
  };
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this._login}>
        <Text>future Profile Page</Text>
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

export default Profile;
