import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default function ApiSamplePage() {
  const isAndroid = Platform.OS == 'android';
  return (
    <View>
      <Text>平台:{Platform.OS}</Text>
      <Text>版本:{Platform.Version}</Text>
      <View style={styless.vStyle}></View>
    </View>
  );
}

const styless = StyleSheet.create({
  vStyle: {
    width: 100,
    height: 30,
    ...Platform.select({
      android: {
        backgroundColor: 'skyblue',
      },
      ios: {
        backgroundColor: '#00FFFF',
      },
    }),
  },
});
