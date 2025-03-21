import { useServiceRegistry } from '@/gateway/serviceRegistry'
import { createContext, useCallback, useContext, useEffect, useReducer, type PropsWithChildren } from 'react'
import { Session } from '../domain/session/session'


type AuthContextType = {
  signIn: (tokens: Session['tokens']) => void
  signOut: () => void
  session: Session | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
})

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, sessionData], setSession] = useStorageState()

  const session: Session | null = sessionData ? JSON.parse(sessionData) : null

  const signIn = useCallback((tokens: Session['tokens']) => {
    const newSession: Session = {
      state: 'authenticated',
      tokens,
    }
    setSession(JSON.stringify(newSession))
  }, [])

  const signOut = useCallback(() => {
    setSession(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        session,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void]

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return useReducer(
    (state: [boolean, T | null], action: T | null = null): [boolean, T | null] => [false, action],
    initialValue
  ) as UseStateHook<T>
}


 function useStorageState(): UseStateHook<string> {
  const [state, setState] = useAsyncState<string>()
  const { sessionService } = useServiceRegistry()


  // Get
  useEffect(() => {
    sessionService.getSession().then((value: Session | null) => {
      setState(value ? JSON.stringify(value) : null)
    })
  }, [sessionService])

  // Set
  const setValue = useCallback(
    (value: string | null) => {
      setState(value)
      if (value === null) {
        sessionService.removeSession()
      } else {
        sessionService.setSession(JSON.parse(value))
      }
    },
    [sessionService]
  )

  return [state, setValue]
}


