import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ButtonX} from '../component/CustomButton';
import {createStore} from 'redux';

//第一步：定义初始化状态
const initialState = {
  value: 0,
};
//第二步:创建一个"reducer“函数来确定应用程序中发生某些事情时的新状态
function counterReducer(state = initialState, action) {
  //Reducers 通常会查看发生的action的type来决定如何更新状态
  switch (action.type) {
    case 'counter/incremented':
      return {...state, value: state.value + 1};
    case 'counter/dectmented':
      return {...state, value: state.value - 1};
    default:
      //如果reducer不关心这个action type,原样返回现有状态
      return state;
  }
}
//第三步：创建store
const store = createStore(counterReducer);

//第四步：订阅
export default function ReduxBasePage() {
  const [count, setCount] = useState(0);
  store.subscribe(() => {
    setCount(store.getState().value);
  });
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <ButtonX
        title="增加"
        style={stlyes.btnx}
        onPress={() => {
          store.dispatch({type: 'counter/incremented'});
        }}
      />
      <ButtonX
        title="减少"
        style={stlyes.btnx}
        onPress={() => {
          store.dispatch({type: 'counter/dectmented'});
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
