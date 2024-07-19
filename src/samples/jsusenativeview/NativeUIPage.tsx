import {View} from 'react-native';
import {AndroidTextView} from './JsCallNativeViewModule';

export default function NativeUIPage() {
  return (
    <View>
      <AndroidTextView style={{width: 100, height: 50}} text="Hello" />
    </View>
  );
}
