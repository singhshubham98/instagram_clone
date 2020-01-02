/**
 * InstaClone
 * instaClone.js
 * Author - Shubham Singh
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
class InstaClone extends Component {
  state = {
    screenWidth: Dimensions.get('window').width,
  };

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      Navbar: {
        width: this.state.screenWidth,
        height: 56,
        marginTop: 35,
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: 'rgb(250,250,250)',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: this.state.screenWidth,
        height: Math.floor(this.state.screenWidth * 1.1),
      },
      userBar: {
        width: this.state.screenWidth,
        height: 50,
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
      },
      userPic: {
        width: 40,
        height: 40,
        borderRadius: 20,
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.Navbar}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.userPic}
              source={{
                uri:
                  'https://lh3.googleusercontent.com/CJCQyK4QQx73qvXjzBeseEK1pxCgZCF1VZd5x_HMRV3UF3FlN3EpcHNObAJCoEDIhLFPKdU1_83DODDVu6YAE6SI',
              }}
            />
            <Text style={{marginLeft: 10}}>Shubham Singh</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 25}}>...</Text>
          </View>
        </View>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://lh3.googleusercontent.com/PWtO3xTlv1ucFUvX4LCFe0eTqjtGl_kxBPNPVF6HezrHud1kmGovelSNp0nNiftO3iq2Z38JDfO6kQ_fg-XXiHzn0wE',
          }}
        />
      </View>
    );
  }
}

export default InstaClone;
