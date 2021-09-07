import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import banner from '../../images/banner-s-daily-e6f6601abc495573ad37f2532468186f.png';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '优质内容限时免费阅读，快去看看～12112',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '如何以i"除了我，我身边的人重生了"为开',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '【反套路爱情】打破传统的爱情围城',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '【反套路爱情】打破传统的爱情围城',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: '【反套路爱情】打破传统的爱情围城111',
  },
];
class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <FlatList
            style={styles.list}
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Image source={banner} style={styles.image} />
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    paddingBottom: 200
  },
  listItem: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  image: {
    resizeMode: 'contain',
    width: '100%'
  }
});
export default SettingsScreen;
