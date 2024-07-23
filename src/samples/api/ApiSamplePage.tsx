import React from 'react';
import {Platform, Text, View} from 'react-native';

export default function ApiSamplePage() {
    const isAndroid=Platform.OS=='android';
  return <View>
    <Text>平台:{Platform.OS}</Text>


  </View>;
}
