import { Text } from '@/components/atoms/text';
import { ThemeToggle } from '@/components/molecules/generic/ThemeToggle';
import { StyleSheet, View } from 'react-native';
export default function HomeScreen() {
  return <OnMountExample />;
}
function OnMountExample() {
  return (
    <View>
      <ThemeToggle />
      <Text>{'test'}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
