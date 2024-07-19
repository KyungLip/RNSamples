import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import RouterTabs from '../RouterTabs';

export default function HomePage({navigation}): React.JSX.Element {
  return (
    <View style={stlyes.root}>
      <Button
        title="路由导航"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SAMPLE_PAGE);
        }}
      />
    </View>
  );
}
const stlyes = StyleSheet.create({
  root: {
    flexDirection: 'column',
  },
});
