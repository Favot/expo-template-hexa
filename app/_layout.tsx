import { useColorScheme, useIsomorphicLayoutEffect } from '@/lib';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Platform } from 'react-native';
import 'react-native-reanimated';
import '../global.css';
import i18n from '../i18n/i18n';

export { ErrorBoundary } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const hasMounted = React.useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);
  const [isFontloaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (isFontloaded && isColorSchemeLoaded) {
      SplashScreen.hideAsync();
    }
  }, [isFontloaded, isColorSchemeLoaded]);

  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) return;
    if (Platform.OS === 'web') document.documentElement.classList.add('bg-background');
    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!isColorSchemeLoaded || !isFontloaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DarkTheme : DefaultTheme}>
      <I18nextProvider i18n={i18n}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style={'auto'} />
      </I18nextProvider>
    </ThemeProvider>
  );
}
