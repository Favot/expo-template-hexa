import { Text } from '@/components/atoms/text';
import { ThemeToggle } from '@/components/molecules/generic/ThemeToggle';
import { SafeAreaView } from 'react-native';
export default function HomeScreen() {
  return <OnMountExample />;
}
function OnMountExample() {
  return (
    <SafeAreaView className="flex-1">
      <Text>{'test'}</Text>
      <ThemeToggle />
    </SafeAreaView>
  );
}
