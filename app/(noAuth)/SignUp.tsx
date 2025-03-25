import { Input } from '@/components/atoms';
import { Skeleton } from '@/components/atoms/skeleton';
import { H1 } from '@/components/atoms/typography';
import { createFormHook, createFormHookContexts } from '@tanstack/react-form';
import { Link } from 'expo-router';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { z } from 'zod';

const { fieldContext, formContext } = createFormHookContexts();

const { useAppForm } = createFormHook({
  fieldComponents: {
    TextInput,
  },
  formComponents: {
    Button,
  },
  fieldContext,
  formContext,
});

export default function SignUp() {
  const form = useAppForm({
    defaultValues: {
      username: '',
      password: '',
    },
    validators: {
      // Pass a schema or function to validate
      onChange: z.object({
        username: z.string(),
        password: z.string(),
      }),
    },
    onSubmit: ({ value }) => {
      console.log(value);
      alert(JSON.stringify(value, null, 2));
    },
  });

  const handleSubmit = () => {
    form.handleSubmit();
  };

  return (
    <View>
      <Skeleton className="h-12 w-12 rounded-full" />
      <form
        onSubmit={e => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <H1>Sign Up</H1>
        <View>
          <form.Field
            name="username"
            children={field => (
              <>
                <Input placeholder="Full Name" />
                {field.state.meta.errors ? (
                  <Text style={styles.errorText}>{field.state.meta.errors[0]?.message}</Text>
                ) : null}
              </>
            )}
          />
          <form.Field
            name="password"
            children={field => (
              <>
                <Input placeholder="password" />
                {field.state.meta.errors ? (
                  <Text style={styles.errorText}>{field.state.meta.errors[0]?.message}</Text>
                ) : null}
              </>
            )}
          />
          <form.AppForm>
            <form.Button title="Sign Up" onPress={handleSubmit} />
          </form.AppForm>
        </View>
      </form>
      <View style={styles.linkContainer}>
        <Text>Already have an account? </Text>
        <Link href="/(noAuth)/SignIn">Sign In</Link>
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
    marginBottom: 4,
    paddingHorizontal: 8,
  },
  inputError: {
    borderColor: '#ff0000',
  },
  errorText: {
    color: '#ff0000',
    fontSize: 12,
    marginBottom: 12,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
});
