import React from 'react';
import {
  Button,
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export default function CustomButton({
  name,
  onPress,
  style,
}: {
  name: string;
  onPress: () => void;
  style: StyleProp<ViewStyle> | undefined;
}) {
  return (
    <View style={style}>
      <Button title={name} onPress={onPress} />
    </View>
  );
}

export function ButtonX({
  title,
  style = undefined,
  onPress,
}: {
  title: string;
  onPress: () => void;
  style: StyleProp<ViewStyle> | undefined;
}): React.JSX.Element {
  return (
    <View>
      <TouchableOpacity style={style} onPress={onPress}>
        <Text style={{alignSelf: 'center', color: '#FFFFFF'}}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
