import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import RouterTabs from '../RouterTabs';

export default function HomePage({navigation}): React.JSX.Element {
  return (
    <View style={stlyes.root}>
      <Btn
        name="导航示例"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SAMPLE_PAGE);
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
    width: '30%',
    marginTop: 5,
    marginLeft: 5,
  },
});
