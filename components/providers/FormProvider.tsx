import { ReactNode } from 'react';
import { useForm } from '@tanstack/react-form';

interface Props {
  children: ReactNode;
}

export function TanStackFormProvider({ children }: Props) {
  return <>{children}</>;
}
