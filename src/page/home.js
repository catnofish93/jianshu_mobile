import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import activity from '../components/home/activity';
import prefer from '../components/home/prefer';
import suggest from '../components/home/suggest';
import topic from '../components/home/topic';
const renderScene = SceneMap({
  activity: activity,
  prefer: prefer,
  suggest: suggest,
  topic: topic
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'activity', title: '活动'},
    {key: 'suggest', title: '推荐'},
    {key: 'topic', title: '专题'},
    {key: 'prefer', title: '优选'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
