import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RouterTabs from '../RouterTabs';
import {ButtonX} from '../samples/component/CustomButton';

export default function HomePage({navigation}): React.JSX.Element {
  return (
    <View style={stlyes.root}>
      <Btn
        name="导航示例"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SAMPLE_PAGE, {
            to: 'NavigatorSamplePage',
          });
        }}
      />
      <Btn
        name="RN与Native交互示例"
        onPress={() => {
          navigation.navigate(RouterTabs.JS_TO_NATIVE_PAGE);
        }}
      />
      <Btn
        name="使用N原生UI组件"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATE_UI_PAGE);
        }}
      />
      <Btn
        name="点击触摸事件示例"
        onPress={() => {
          navigation.navigate(RouterTabs.TOUCH_CLICK_EVENT_PAGE);
        }}
      />
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
    </View>
  );
}

function Btn({name, onPress}) {
  return (
    <View style={stlyes.btn}>
      <Button title={name} onPress={onPress} />
    </View>
  );
}

const stlyes = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  btn: {
    width: '55%',
    marginTop: 10,
    marginLeft: 10,
  },
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
