import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      // TODO: Implement actual authentication logic
    } catch (error) {
      // TODO: Handle error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />
      <View style={styles.linkContainer}>
        <Text>Don't have an account? </Text>
        <Link href="/(noAuth)/SignUp">Sign Up</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});
