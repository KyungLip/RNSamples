import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

export default function FlatListPage() {
  const dataList = [];
  for (let i = 0; i < 100; i++) {
    dataList.push({name: 'Hello World ', index: i});
  }
  return (
    <View>
      <FlatList
        data={dataList}
        renderItem={({item, index}) => (
          <ItemView info={item} index={index} />
        )}></FlatList>
    </View>
  );
}

function ItemView({info, index}) {
  return (
    <Text
      style={{
        height: 50,
        borderWidth: 1,
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center',
      }}
      onPress={() => {
        ToastAndroid.show(`${info.name} 索引${index} ,被点击`, 1000);
      }}>
      {info.name},索引{index}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    borderWidth: 1,
  },
});
