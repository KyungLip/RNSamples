import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import RouterTabs from '../../RouterTabs';

export default function NavigatorSubPage1({route, navigation}) {
  const {pageName, msg} = route.params;
  const backParam = route.params?.backParam;
  let backMsg = '无参数返回';
  if (backParam) {
    backMsg = JSON.stringify(backParam);
  }
  console.log('Enter NavigatorSubPage1');
  React.useEffect(() => {
    if (route.params?.backParam) {
      console.log('Name：收到变化' + route.params.backParam);
    }
  }, [route.params?.backParam]);
  return (
    <View style={{flexDirection: 'column'}}>
      <Text>接收到的数据:</Text>
      <Text>name：{JSON.stringify(pageName)}</Text>
      <Text>msg{JSON.stringify(msg)}</Text>
      <Text>返回的数据:</Text>
      <Text>{backMsg}</Text>
      <View style={styles.btn}>
        <Button
          title="To SubPage2"
          onPress={() => {
            navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE2);
          }}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="To SubPage1 Again"
          onPress={() => {
            navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE1, {
              pageName: 'NavigatorSubPage1',
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '60%',
    marginTop: 10,
    marginLeft: 10,
  },
});
