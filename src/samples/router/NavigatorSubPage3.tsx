import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, View} from 'react-native';
import GrandSonPage1 from './GrandSonPage1';
import GrandSonPage2 from './GrandSonPage2';

export default function NavigatorSubPage3() {
  const Stack = createNativeStackNavigator();
  return (
      <View>
        <Stack.Screen name='GrandSonPage1' component={GrandSonPage1}></Stack.Screen>
        <Stack.Screen name='GrandSonPage2' component={GrandSonPage2}></Stack.Screen>

      </View>
  );
}
