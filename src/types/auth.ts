import type { User } from "./user";

export type SigninInput = {
  email: string;
  password: string;
};

export type SignupInput = {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type AuthResponse = {
  user: User;
  message: string;
};

export type EditUserInput = {
  name?: string;
  email?: string;
  biography?: string;
  avatar?: File | string | null;
};
