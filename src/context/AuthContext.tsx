"use client";

import {
  getUserApi,
  logoutApi,
  signinApi,
  signupApi,
} from "@/services/authService";
import type { SigninInput, SignupInput, User } from "@/types";
import { useRouter } from "next/navigation";
import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import toast from "react-hot-toast";

function getErrorMessage(error: unknown): string {
  return (
    (error as { response?: { data?: { message?: string } } })?.response?.data
      ?.message ?? "خطایی رخ داد"
  );
}

// ─── Types ───────────────────────────────────────────

type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
};

type AuthAction =
  | { type: "loading" }
  | { type: "rejected"; payload: string }
  | { type: "signin"; payload: User }
  | { type: "signup"; payload: User }
  | { type: "user/loaded"; payload: User }
  | { type: "logout" };

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signin: (values: SigninInput) => Promise<void>;
  signup: (values: SignupInput) => Promise<void>;
  getUser: () => Promise<void>;
  logout: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

// ─── Reducer ─────────────────────────────────────────

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };
    case "signin":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "signup":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "user/loaded":
      return {
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case "logout":
      return { ...initialState, isLoading: false };
    default:
      throw new Error("Unknown action!");
  }
};

// ─── Context ─────────────────────────────────────────

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();

  const [{ user, isAuthenticated, isLoading }, dispatch] = useReducer(
    authReducer,
    initialState,
  );

  async function signin(values: SigninInput) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signinApi(values);
      dispatch({ type: "signin", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  async function signup(values: SignupInput) {
    dispatch({ type: "loading" });
    try {
      const { user, message } = await signupApi(values);
      dispatch({ type: "signup", payload: user });
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      dispatch({ type: "rejected", payload: errorMsg });
      toast.error(errorMsg);
    }
  }

  const getUser = useCallback(async () => {
    dispatch({ type: "loading" });
    try {
      const { user } = await getUserApi();
      dispatch({ type: "user/loaded", payload: user });
    } catch (error) {
      const errorMsg = getErrorMessage(error);
      dispatch({ type: "rejected", payload: errorMsg });
    }
  }, [dispatch]);

  async function logout() {
    try {
      await logoutApi();
      router.push("/");
      dispatch({ type: "logout" });
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  }

  useEffect(() => {
    if (isAuthenticated) return;
    getUser();
  }, [isAuthenticated, getUser]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        signin,
        signup,
        getUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("not found Auth Context");
  return context;
}
