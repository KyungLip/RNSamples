import React from 'react';
import {Button, Text, View} from 'react-native';
import RouterTabs  from '../../RouterTabs';

export default function NavigatorSubPage1({navigation}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text>页面NavigatorSubPage1</Text>
      <Button
        title="跳转NavigatorSubPage2"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE2);
        }}
      />
    </View>
  );
}
