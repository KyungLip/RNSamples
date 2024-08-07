import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonX} from '../component/CustomButton';
import {configureStore, createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

//第一步：定义初始化状态
const initialState = {
  value: 0,
};
//第二步:创建一个"reducer“函数来确定应用程序中发生某些事情时的新状态
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
      console.log('增加了');
    },
    decrement: state => {
      state.value -= 1;
      console.log('减少了');
    },
  },
});

const {increment, decrement} = counterSlice.actions;

//第三步：创建store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

//第四步：订阅
export default function ReduxToolkitPage() {
  // const count=useSelector(state=>state.counter.value)
  const [count, setCount] = useState(0);
  store.subscribe(() => {
    setCount(store.getState().counter.value);
    console.log('变化了' + store.getState().counter.value);
  });
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <ButtonX
        title="增加"
        style={stlyes.btnx}
        onPress={() => {
          store.dispatch(increment());
        }}
      />
      <ButtonX
        title="减少"
        style={stlyes.btnx}
        onPress={() => {
          store.dispatch(decrement());
        }}
      />

      <Text style={{marginLeft: 8}}>{count}</Text>
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
    width: 50,
    height: 30,
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
