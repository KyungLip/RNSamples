import {
  Button,
  Text,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';

export default function TouchClickEventPage() {
  function onClick() {
    ToastAndroid.show('被点击1!', 1000);
  }
  return (
    <View style={{flexDirection: 'column'}}>
      <View
        style={{
          flexDirection: 'row',
          width: '35%',
          marginTop:10,
          marginLeft: 10,
          borderRadius:3,
          justifyContent: 'space-between',
        }}>
        <Button title="点击1" onPress={onClick}></Button>
        <Button
          title="点击2"
          onPress={() => {
            ToastAndroid.show('被点击2!', 1000);
          }}></Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableHighlight
          style={{
            backgroundColor: '#1E90FF',
            width: '15%',
            height: 30,
            borderRadius: 3,
            marginLeft: 10,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onLongPress={() => {
            ToastAndroid.show('长按了', 1000);
          }}>
          <View>
            <Text>长按</Text>
          </View>
        </TouchableHighlight>
        <Text> TouchableHighlight</Text>
      </View>
    </View>
  );
}
