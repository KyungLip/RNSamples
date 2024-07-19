import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import RouterTabs from '../RouterTabs';
import CustomButton from '../samples/component/CustomButton';

export default function HomePage({navigation}): React.JSX.Element {
  return (
    <View style={stlyes.root}>
      <Btn
        name="导航示例"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SAMPLE_PAGE);
        }}
      />
      <Btn
        name="Js<->Native交互示例"
        onPress={() => {
          navigation.navigate(RouterTabs.JS_TO_NATIVE_PAGE);
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
    width: '50%',
    marginTop: 5,
    marginLeft: 5,
  },
});
