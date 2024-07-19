/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RnDocPage from './src/pages/RnDocPage';
import SplashPage from './src/pages/SplashPage';
import HomePage from './src/pages/HomePage';
import NavigatorSamplePage from './src/samples/router/NavigatorSamplePage';
import NavigatorSubPage1 from './src/samples/router/NavigatorSubPage1';
import NavigatorSubPage2 from './src/samples/router/NavigatorSubPage2';
import NavigatorSubPage3 from './src/samples/router/NavigatorSubPage3';
import RouterTabs from './src/RouterTabs';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouterTabs.HOME_PAGE}>
        {/* <Stack.Screen name="SplashPage" component={SplashPage} /> */}
        <Stack.Screen
          name={RouterTabs.HOME_PAGE}
          component={HomePage}
          options={{title: '首页'}}
        />
        <Stack.Screen name={RouterTabs.RN_DOC_PAGE} component={RnDocPage} />
        <Stack.Screen
          name={RouterTabs.NAVIGATOR_SAMPLE_PAGE}
          component={NavigatorSamplePage}
        />
        <Stack.Screen
          name={RouterTabs.NAVIGATOR_SUB_PAGE1}
          component={NavigatorSubPage1}
        />
        <Stack.Screen
          name={RouterTabs.NAVIGATOR_SUB_PAGE2}
          component={NavigatorSubPage2}
        />
        <Stack.Screen
          name={RouterTabs.NAVIGATOR_SUB_PAGE3}
          component={NavigatorSubPage3}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
