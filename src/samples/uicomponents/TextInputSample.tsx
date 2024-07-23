import {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function TextInputSample() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState(-1);
  return (
    <View>
      <View style={styles.container}>
        <Text>用户名：</Text>
        <TextInput
          style={styles.textInput}
          placeholder="请输入用户名"></TextInput>
      </View>

      <View style={styles.container}>
        <Text>密 码：</Text>
        <TextInput
          style={styles.textInput}
          placeholder="请输入密码"></TextInput>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
  },
});
