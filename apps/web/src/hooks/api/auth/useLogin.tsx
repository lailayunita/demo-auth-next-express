"use client";

import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

//kalo bikin custom hook yang di return berupa object
const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    try {
      await axiosInstance.post("/api/auth/login", payload);
      toast.success("login success");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data || "Something wnt wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading };
};

export default useLogin;
