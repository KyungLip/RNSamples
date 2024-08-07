import React, {useRef, useState} from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {ButtonX} from '../component/CustomButton';

export default function AnimatedPage() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  fadeAnim.addListener(state => {
    // console.log(state.value);
  });
  return (
    <View>
      <Text>Timing：</Text>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
        }}>
        <Text>Alpha：</Text>
        <ButtonX
          title="Start"
          style={stlyes.btnx}
          onPress={() => {
            // fadeAnim.resetAnimation();
            Animated.timing(fadeAnim, {
              toValue: 1,
              duration: 10000,
              useNativeDriver: true,
            }).start(({finished}) => {
              console.log('动画是否结束:' + finished);
            });
          }}
        />
        <ButtonX
          title="Stop"
          style={stlyes.btnx}
          onPress={() => {
            fadeAnim.stopAnimation();
            fadeAnim.setValue(1);
          }}
        />
        <View style={{backgroundColor: 'skyblue', marginLeft: 8}}>
          <Animated.View style={{opacity: fadeAnim}}>
            <Text style={{fontSize: 18, color: '#000000'}}>Animated</Text>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}

const stlyes = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
  btn: {
    width: 50,
    marginLeft: 10,
  },
  btnx: {
    backgroundColor: '#1E90FF',
    width: 50,
    height: 30,
    borderRadius: 2,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
