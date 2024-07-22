import React, {useRef, useState} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import CustomButton from '../component/CustomButton';

export default function HeaderBarPage({navigation}) {
  let isShowHeader = useRef(true);
  navigation.setOptions({headerShown: {isShowHeader}});
  return (
    <View style={{flexDirection: 'column'}}>
      <CustomButton
        style={styles.btn}
        name="设置标题"
        onPress={() => {
          navigation.setOptions({title: 'HeaderBarPage'});
        }}
      />
      <CustomButton
        style={styles.btn}
        name="显示/隐藏标题栏"
        onPress={() => {
          isShowHeader.current = !isShowHeader.current;
          navigation.setOptions({headerShown: isShowHeader.current});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '40%',
    marginTop: 10,
    marginLeft: 10,
  },
});
