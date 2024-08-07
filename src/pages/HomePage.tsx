import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RouterTabs from '../RouterTabs';
import {ButtonX} from '../samples/component/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {decrement, increment} from '../store/CounterSlice';

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
        name="使用原生UI组件"
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
        title="Api示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.API_SAMPLE_PAGE);
        }}
      />
      <ButtonX
        title="UI组件示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.UI_COMPONENT_PAGE);
        }}
      />
      <ButtonX
        title="动画示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.ANIM_PAGE);
        }}
      />
      <ButtonX
        title="Redux示例"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.REDUX_SAMPLE_PAGE);
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
