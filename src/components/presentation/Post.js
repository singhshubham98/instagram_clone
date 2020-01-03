/**
 * InstaClone
 * Post.js
 * Author - Shubham Singh
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import config from '../../config';
class Post extends Component {
  state = {
    liked: false,
    screenWidth: Dimensions.get('window').width,
  };

  likeToggled = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    const styles = StyleSheet.create({
      image: {
        width: this.state.screenWidth,
        height: Math.floor(this.state.screenWidth * 1.1),
      },
      userBar: {
        width: this.state.screenWidth,
        height: config.styleConstants.rowHeight,
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
      iconBar: {
        height: config.styleConstants.rowHeight,
        width: this.state.screenWidth,
        borderColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
      },
      icon: {
        marginLeft: 5,
      },
    });

    const heartIconColor = this.state.liked ? 'rgb(252, 61,57)' : null;

    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
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
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            this.likeToggled();
          }}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://lh3.googleusercontent.com/PWtO3xTlv1ucFUvX4LCFe0eTqjtGl_kxBPNPVF6HezrHud1kmGovelSNp0nNiftO3iq2Z38JDfO6kQ_fg-XXiHzn0wE',
            }}
          />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image
            source={config.images.heartIcon}
            style={[
              styles.icon,
              {
                width: 45,
                height: 45,
                tintColor: heartIconColor,
              },
            ]}
          />
          <Image
            source={config.images.chatIcon}
            style={[styles.icon, {width: 36, height: 34}]}
          />
          <Image
            source={config.images.arrowIcon}
            style={[styles.icon, {width: 36, height: 36}]}
          />
        </View>
        <View style={styles.iconBar}>
          <Image
            source={config.images.darkHeart}
            style={[
              styles.icon,
              {
                width: 30,
                height: 30,
              },
            ]}
          />
          <Text>128 Likes</Text>
        </View>
      </View>
    );
  }
}

export default Post;
