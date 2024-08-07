import {createSlice, configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import RouterTabs from '../../RouterTabs';
import {ButtonX} from '../component/CustomButton';
import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement} from '../../store/CounterSlice';
export default function ReduxSamplePage({navigation}) {
  const {value} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View>
      <ButtonX
        title="Redux基础"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.REDUX_BASE_PAGE);
        }}
      />
      <ButtonX
        title="ReduxToolkit"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.REDUX_TOOLKIT_PAGE);
        }}
      />
      <Text>全局Redux</Text>
      <Text>{value}</Text>
      <ButtonX
        title="增加"
        style={stlyes.btnx}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <ButtonX
        title="减少"
        style={stlyes.btnx}
        onPress={() => {
          dispatch(decrement());
        }}
      />
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
