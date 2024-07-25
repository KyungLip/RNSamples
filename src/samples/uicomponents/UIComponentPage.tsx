import {useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {ButtonX} from '../component/CustomButton';
import RouterTabs from '../../RouterTabs';

export default function UIComponentPage({navigation}) {
  const [inputText, seInputText] = useState('');
  return (
    <View>
      <ButtonX
        title="TextInput示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.TEXTINPUT_PAGE);
        }}
      />
      <ButtonX
        title="ScrollView示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.SCROLL_VIEW_PAGE);
        }}
      />
      <ButtonX
        title="FlatList示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.FLAT_LIST_PAGE);
        }}
      />
      <ButtonX
        title="SectionList示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.SECTION_LIST_PAGE);
        }}
      />
      <ButtonX
        title="图片示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.IMAGE_PAGE);
        }}
      />
    </View>
  );
}
const stlyes = StyleSheet.create({
  btnx: {
    backgroundColor: '#1E90FF',
    width: '55%',
    height: 30,
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
