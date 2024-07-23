import {useState} from 'react';
import {TextInput, View} from 'react-native';

export default function UIComponentPage() {
  const [inputText, seInputText] = useState('');
  return (
    <View>
      <TextInput
        placeholder="请输入你的信息"
        onChangeText={text => {
          seInputText(text);
        }}
        defaultValue={inputText}></TextInput>
    </View>
  );
}
