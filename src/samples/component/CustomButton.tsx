import {Button, StyleProp, Text, View, ViewStyle} from 'react-native';

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
