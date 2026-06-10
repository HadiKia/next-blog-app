import type { User } from "./user";
import type { ID } from "./api";

export type SigninInput = {
  email: string;
  password: string;
};

export type SignupInput = {
  name: string;
  email: string;
  password: string;
};

export type AuthResponse = {
  user: User;
  message: string;
};

export type EditUserInput = {
  id: ID;
  data: FormData;
};
