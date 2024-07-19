import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../component/CustomButton';
import JsToNativeModule from './JsToNativeModule';

export default function JsToNativeInteractPage({
  navigation,
}): React.JSX.Element {
  const [msg, setMsg] = useState('');
  return (
    <View>
      <CustomButton
        style={styles.btn}
        name="发送信息给Native"
        onPress={() => {
            console.log('按钮被点击!');
          JsToNativeModule.sayHi('你好 Native,我来自 JS!');
          setMsg('已发送：你好 Native,我来自 JS!');
        }}
      />
      <CustomButton
        style={styles.btn}
        name="发送并接收Native消息"
        onPress={() => {
          JsToNativeModule.sayHiWithCallback(
            '你好 Native,我来自 JS,期待你的回复',
            (content: string) => {
              setMsg(content);
            },
          );
        }}
      />
      <CustomButton
        style={styles.btn}
        name="Promise方式"
        onPress={async () => {
          console.log('按钮被点击!');

          try {
            const content: string = await JsToNativeModule.sayHiWithPromise(
              '你好 Native,我来自 JS,期待你的回复',
            );
            setMsg(content);
          } catch (error) {
            console.log(error);
            setMsg(error + '');
          }
        }}
      />
      <Text style={{marginLeft: 5}}>执行结果:{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '50%',
    marginTop: 5,
    marginLeft: 5,
  },
});
