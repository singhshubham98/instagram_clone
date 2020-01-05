/**
 * InstaClone
 * instaClone.js
 * Author - Shubham Singh
 */
import {MainFeed, Login, Camera, Profile, Register} from './components/screens';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

const Tabs = createBottomTabNavigator({
  feed: MainFeed,
  camera: Camera,
  profile: Profile,
});

const Stacks = createStackNavigator({
  login: {
    screen: Login,
    navigationOptions: navigation => ({
      headerShown: false,
    }),
  },
  register: {
    screen: Register,
    navigationOptions: navigation => ({
      headerBackTitle: 'Login',
    }),
  },
});

const InstaClone = createSwitchNavigator({
  intro: Stacks,
  main: Tabs,
});

export default createAppContainer(InstaClone);
