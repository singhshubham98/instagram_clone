/**
 * InstaClone
 * Postfeed.js
 * Author - Shubham Singh
 * date-03/01/2020
 */

import React, {Component} from 'react';
import {Post} from '../presentation';
import {FlatList} from 'react-native';

class PostFeed extends Component {
  _renderItem = () => <Post />;

  _keyExtractor = item => item.toString();
  render() {
    return (
      <FlatList
        data={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ]}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default PostFeed;
