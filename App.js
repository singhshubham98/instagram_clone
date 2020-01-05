/**
 * InstaClone
 * App.js
 * Author - Shubham Singh
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import InstaClone from './src/InstaClone';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <InstaClone />
    </View>
  );
};

export default App;
