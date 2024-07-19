import {Button, Text, View} from 'react-native';
import RouterTabs from '../../RouterTabs';

export default function NavigatorSubPage2({navigation}) {
  return (
    <View style={{flexDirection: 'column'}}>
      <Text>页面NavigatorSubPage2</Text>
      <Button
        title="跳转NavigatorSubPage1"
        onPress={() => {
          navigation.navigate(RouterTabs.NAVIGATOR_SUB_PAGE1);
        }}
      />
    </View>
  );
}
