import {useState} from 'react';
import {View, Text, Button} from 'react-native';
import JsToNativeModule from '../../nativeinterface/JsToNativeModule';
import RouterTabs from '../../RouterTabs';

export default function NavigatorSamplePage({navigation}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text>页面NavigatorSamplePage</Text>
      <Button
        title="NavigatorSamplePage"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE1);
        }}
      />
    </View>
  );
}
