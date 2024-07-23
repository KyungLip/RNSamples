import {
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

export default function SectionListPage() {
  const dataList = [
    {
      group: '分组A',
      data: [
        'Hello',
        'Hello World',
        'Hello World1',
        'Hello World2',
        'Hello World3',
      ],
    },
    {
      group: '分组B',
      data: [
        'Hello',
        'Hello World',
        'Hello World1',
        'Hello World2',
        'Hello World3',
        'Hello World4',
        'Hello World5',
        'Hello World6',
      ],
    },
  ];
  return (
    <View>
      <SectionList
        sections={dataList}
        renderItem={({item, index}) => <ItemView info={item} index={index} />}
        renderSectionHeader={({section}) => (
          <Text>{section.group}</Text>
        )}></SectionList>
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
        ToastAndroid.show(`${info} 索引${index} ,被点击`, 1000);
      }}>
      {info},索引{index}
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
