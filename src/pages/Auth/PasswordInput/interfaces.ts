import { type ChangeEvent } from 'react';

export enum PasswordType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export interface IPasswordInput {
  value: string;
  touched: boolean | undefined;
  errors: string | undefined;
  name?: string;
  label?: string;
  placeholder?: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
