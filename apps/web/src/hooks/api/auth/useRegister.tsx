"use client";

import { axiosInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface RegisterArgs {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const register = async (payload: RegisterArgs) => {
    setIsLoading(true);
    try {
      //argumen pertama endpoint, argumen kedua req.body
      await axiosInstance.post("/api/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });

      alert("Register success");

      router.push("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { register, isLoading };
};

export default useRegister;
