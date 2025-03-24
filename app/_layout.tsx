import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'
import 'react-native-reanimated'

import { SessionProvider } from '@/context/sessionContext'
import { TanStackFormProvider } from '@/components/providers/FormProvider'
import { Slot } from 'expo-router'
import { useColorScheme } from '../hooks/useColorScheme'
import i18n from '../i18n/i18n'


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SessionProvider>
          <TanStackFormProvider>
            <Slot />
          </TanStackFormProvider>
        </SessionProvider>
        <StatusBar style="auto" />
      </ThemeProvider>
    </I18nextProvider>
  )
}
