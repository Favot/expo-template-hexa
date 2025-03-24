import { useTranslation } from 'react-i18next';
import { z } from 'zod';

export const useSignUpFormBuilder = () => {
  const { t } = useTranslation();
  const requiredValue = t('common.errors.fieldRequired');
  return z
    .object({
      firstname: z
        .string({
          required_error: requiredValue,
        })
        .trim()
        .min(1, requiredValue),
      lastname: z
        .string({
          required_error: requiredValue,
        })
        .trim()
        .min(1, requiredValue),
      email: z
        .string({
          required_error: requiredValue,
        })
        .email()
        .min(3, requiredValue)
        .max(50, requiredValue),

      password: z
        .string({
          required_error: requiredValue,
        })
        .min(5)
        .max(50),
    })
    .required({
      firstname: true,
      lastname: true,
    });
};

type FormSchema = ReturnType<typeof useSignUpFormBuilder>;

export type SignUpFormSchemaType = z.infer<FormSchema>;
