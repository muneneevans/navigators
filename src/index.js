import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PostsPage from './PostsPage';

const AppNavigator = createStackNavigator({
  Home: {
    screen: PostsPage,
  },
});

export default createAppContainer(AppNavigator);
