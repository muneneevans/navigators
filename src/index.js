import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import PostsPage from './PostsPage';
import PostItemPage from './PostItemPage';

const AppNavigator = createStackNavigator({
  PostsPage: {
    screen: PostsPage,
  },
  PostItemPage: PostItemPage,
});

export default createAppContainer(AppNavigator);
