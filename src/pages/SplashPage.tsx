
import {useEffect, useRef, useState} from 'react';
import {Button, Text, View} from 'react-native';


export default function SplashPage({navigation}) {
  const [count, setCount] = useState(5);
  let num = useRef(5);
  useEffect(() => {
    const intervalId = setInterval(() => {
      num.current -= 1;
      console.log('kylp:count=' + count + ',num=' + num.current);
      if (num.current == 0) {
        clearInterval(intervalId);
        navigation.replace('HomePage');
      } else {
        setCount(num.current);
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  let msg = num.current == 1 ? '倒计时结束' : '倒计时'+count + 'S';
  return <View>{<Text style={{fontSize: 20}}>{msg}</Text>}</View>;
}
