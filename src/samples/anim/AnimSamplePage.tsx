import React, {useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {ButtonX} from '../component/CustomButton';
import RouterTabs from '../../RouterTabs';

export default function AnimSamplePage({navigation}) {
  return (
    <View>
      <ButtonX
        title="Animated"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.ANIMATED_PAGE);
        }}
      />
      <ButtonX
        title="LayoutAnimation"
        style={stlyes.btnx}
        onPress={() => {
          navigation.navigate(RouterTabs.LAYOUT_ANIMATION_PAGE);
        }}
      />
    </View>
  );
}

//Animated
// Animated仅封装了 6 个可以动画化的组件：View、Text、Image、ScrollView、FlatList和SectionList,
// 不过你也可以使用Animated.createAnimatedComponent()来封装你自己的组件。
// function AnimatedSample() {
//   return (
//     <View style={{width: 200, height: 200, backgroundColor: 'skyblue'}}>
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView
//           styles={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
//             Fading in
//           </Text>
//         </FadeInView>
//       </View>
//       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//         <FadeInView
//           styles={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
//           <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
//             Fading in
//           </Text>
//         </FadeInView>
//       </View>
//     </View>
//   );
// }
// //LayoutAnimation
// function LayoutAnimation123({children}) {
//   return (
//     <View>
//       <Text>LayoutAnimation</Text>
//       {children}
//     </View>
//   );
// }

// function FadeInView({children, styles}) {
//   const fadeAnim = useRef(new Animated.Value(0)).current; //透明度初始值设为0
//   React.useEffect(() => {
//     Animated.timing(
//       // 随时间变化而执行动画
//       fadeAnim, // 动画中的变量值
//       {
//         toValue: 1, // 透明度最终变为1，即完全不透明
//         duration: 10000, // 让动画持续一段时间
//         //是否使用原生驱动
//         useNativeDriver: true,
//       },
//     ).start(); // 开始执行动画
//   }, [fadeAnim]);
//   return (
//     <Animated.View style={{...styles, opacity: fadeAnim}}>
//       {children}
//     </Animated.View>
//   );
// }

const stlyes = StyleSheet.create({
  btnx: {
    backgroundColor: '#1E90FF',
    width: '55%',
    height: 30,
    borderRadius: 2,
    marginTop: 10,
    marginLeft: 10,
    justifyContent: 'center',
  },
});
