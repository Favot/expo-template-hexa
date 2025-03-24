import { useSession } from '@/context/sessionContext'
import { Redirect, SplashScreen } from 'expo-router'
import { Button, Text, View } from 'react-native'

export default function AuthLayout() {



  const { session, isLoading, signOut } = useSession()

  if (isLoading) {
    return null
  }

  if (!session) {
    return <Redirect href="/(noAuth)/SignIn" />
  }

  if (!isLoading) {
    SplashScreen.hideAsync()
  }

  const logout = () => {
    signOut()
  }



  return (
    <View>
      <Text>{'Login'}</Text>

      <Button title="Logout" onPress={logout} />

    </View>
  )
}
