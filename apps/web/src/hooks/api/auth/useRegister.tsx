"use client";

import useAxios from "@/hooks/useAxios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

interface RegisterArgs {
  name: string;
  email: string;
  password: string;
}

const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { axiosInstance } = useAxios();

  const register = async (payload: RegisterArgs) => {
    setIsLoading(true);
    try {
      //argumen pertama endpoint, argumen kedua req.body
      await axiosInstance.post("/api/auth/register", {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      });

      toast.success("Register success");

      router.push("/login");
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data || "Something wnt wrong!");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return { register, isLoading };
};

export default useRegister;
