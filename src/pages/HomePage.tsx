import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RouterTabs from '../RouterTabs';

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
        name="Js<->Native交互示例"
        onPress={() => {
          navigation.navigate(RouterTabs.JS_TO_NATIVE_PAGE);
        }}
      />
      <Btn
        name="RN使用Native原生UI组件"
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
      <TouchableOpacity
        style={{
          backgroundColor: '#1E90FF',
          width: '30%',
          height: 30,
          borderRadius: 2,
        }}>
        <Text style={{alignSelf: 'center', color: '#FFFFFF'}}>Hello</Text>
      </TouchableOpacity>
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
});
