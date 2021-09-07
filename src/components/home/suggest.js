import * as React from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, Image} from 'react-native';
const DATA = [1, 2, 3]
function SettingsScreen() {
  return (
      <View>
        <ScrollView
            horizontal={true}
            style={styles.scroll}
            showsHorizontalScrollIndicator={true}>
          <Text style={styles.text}>综合</Text>
          <Text style={styles.text}>最新</Text>
          <Text style={styles.text}>读书</Text>
          <Text style={styles.text}>文学</Text>
          <Text style={styles.text}>职场</Text>
          <Text style={styles.text}>诗词</Text>
          <Text style={styles.text}>文学</Text>
          <Text style={styles.text}>职场</Text>
          <Text style={styles.text}>诗词</Text>
        </ScrollView>
        <Text>11111</Text>
        <FlatList>
          data={DATA}
          renderItem={item => (
            <View>
              <View>
                <Image source={''} style={styles.authorImage}></Image>
                <Text>阿园妈咪</Text>
              </View>
              <View style={styles.title}>
                舒服的聊天方式
              </View>
              <View style={styles.content}>
                今天碰到一个发小，她说她在厂里上夜班，不过马上就辞职了。上了也有5个月了吧，她说上夜班特别难熬。我特别支持她辞掉这个工作。我觉得吧！，女人不到万...
              </View>
            </View>
          )}
        </FlatList>
      </View>
  );
}
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#eee',
    marginRight: 15,
    borderRadius: 20,
  }
})
export default SettingsScreen
