import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from './src/page/home.js';
import patention from './src/page/patention.js';
import privatePage from './src/page/private.js';
import news from './src/page/news.js';
import my from './src/page/my.js';
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="首页" component={home}/>
        <Tab.Screen name="关注" component={patention} />
        <Tab.Screen name="小岛" component={privatePage} />
        <Tab.Screen name="消息" component={news} />
        <Tab.Screen name="我的" component={my} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
