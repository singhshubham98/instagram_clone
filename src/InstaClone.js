/**
 * InstaClone
 * instaClone.js
 * Author - Shubham Singh
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {PostFeed} from './components/container';
class InstaClone extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Navbar}>
          <Text>Instagram</Text>
        </View>
        <PostFeed />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Navbar: {
    width: Dimensions.get('window').width,
    height: 56,
    marginTop: 35,
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: 'rgb(250,250,250)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InstaClone;
