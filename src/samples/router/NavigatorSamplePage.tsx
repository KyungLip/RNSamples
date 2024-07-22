import {View, Text, Button, StyleSheet} from 'react-native';
import RouterTabs from '../../RouterTabs';
import {Screen} from 'react-native-screens';

export default function NavigatorSamplePage({route, navigation}) {
  const param = route.params;

  return (
    <View style={{flexDirection: 'column'}}>
      <Text>接收到的页面初始化参数:{JSON.stringify(param)}</Text>
      <View style={styles.btn}>
        <Button
          title="更新参数"
          onPress={() => {
            navigation.setParams({
              from: 'HomePage-新',
              to: 'NavigatorSamplePage-新',
            });
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="To Sub Page1"
          onPress={() => {
            //跳转到NAVIGATOR_SUB_PAGE1，并传递参数pageName,msg
            navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE1, {
              pageName: 'NavigatorSamplePage',
              msg: 'Hello',
            });
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Go Back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="嵌套跳转孙页面"
          onPress={() => {
            navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE3, {
              Screen: 'GrandSonPage1',
            });
          }}
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="导航栏设置"
          onPress={() => {
            navigation.navigate(RouterTabs.HEADER_BAR_PAGE);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '40%',
    marginTop: 10,
    margin: 10,
  },
});
