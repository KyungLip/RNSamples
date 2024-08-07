import {useState} from 'react';
import {Image, Text, View} from 'react-native';

export default function ImagePage() {
  const localImage = require('../../../resources/img/bear.png');
  const [count, setCount] = useState(1);
  const arr = [1, 2, 3, 4, 5, 6, 7];
  const ret = arr.reduce((pre, cur) => pre + cur, 0);
  
  return (
    <View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text>
          本地图片：{ret},{count}
        </Text>
        <Image source={require('../../../resources/img/bear.png')} />
        <Image source={localImage} />
      </View>
    </View>
  );
}
