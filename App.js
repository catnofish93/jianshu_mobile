import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './src/page/home.js';
import patention from './src/page/patention.js';
import privatePage from './src/page/private.js';
import news from './src/page/news.js';
import my from './src/page/my.js';
import IconindexCopy from './src/iconfont/IconindexCopy';
import Iconlike from './src/iconfont/Iconlike';
import IconiconTest15 from './src/iconfont/IconiconTest15';
import Iconpinglun from './src/iconfont/Iconpinglun';
import Icondenglu1 from './src/iconfont/Icondenglu1';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="首页"
          component={home}
          options={{
            tabBarIcon: () => <IconindexCopy />
          }}
        />
        <Tab.Screen
          name="关注"
          component={patention}
          options={{
            tabBarIcon: () => <Iconlike />,
          }}
        />
        <Tab.Screen
          name="小岛"
          component={privatePage}
          options={{
            tabBarIcon: () => <IconiconTest15 />,
          }}
        />
        <Tab.Screen
          name="消息"
          component={news}
          options={{
            tabBarIcon: () => <Iconpinglun />,
          }}
        />
        <Tab.Screen
          name="我的"
          component={my}
          options={{
            tabBarIcon: () => <Icondenglu1 />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
