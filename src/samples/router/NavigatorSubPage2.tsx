import {Button, StyleSheet, Text, View} from 'react-native';
import RouterTabs from '../../RouterTabs';

export default function NavigatorSubPage2({navigation}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <View style={styles.btn}>
        <Button
          title="跳转NavigatorSubPage1"
          onPress={() => {
            navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE1);
          }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="To SubPage1"
          onPress={() => {
            navigation.navigate({
              name: RouterTabs.NAVIGATOR_SUB_PAGE1,
              params: {backParam: '我是SubPage2返回的数据'},
              merge: true,
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
