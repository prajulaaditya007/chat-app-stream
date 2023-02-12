import {useMutation, UseMutationOptions, UseMutationResult} from "@tanstack/react-query";
import axios, {AxiosResponse} from "axios";
import { createContext, ReactNode, useContext } from "react";
import {useNavigate} from "react-router-dom";

type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>
  login: UseMutationResult<{token: string, user: User}, unknown, string>
};

type User = {
  id: string;
  name: string;
  image?: string;
};

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
  return useContext(Context) as AuthContext;
}

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {

  const navigate = useNavigate()

  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
    onSuccess() {
        navigate("/login")
    }
  });

  const login = useMutation({
    mutationFn: (id: string) => {
        return axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, {id}).then(res => {
            res.data as {token: string; user: User}
        })
    }
  })

  return <Context.Provider value={{ signup, login}}>{children}</Context.Provider>;
}
