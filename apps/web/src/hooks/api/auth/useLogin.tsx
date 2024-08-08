"use client";

import useAxios from "@/hooks/useAxios";
import { useAppDispatch } from "@/redux/hooks";
import { loginAction } from "@/redux/slices/userSlice";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "react-toastify";

interface LoginPayload {
  email: string;
  password: string;
}

//kalo bikin custom hook yang di return berupa object
const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { axiosInstance } = useAxios();

  const dispatch = useAppDispatch();
  const router = useRouter();

  const login = async (payload: LoginPayload) => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.post("/auth/login", payload);
      dispatch(loginAction(data));

      toast.success("login success");

      router.push("/");
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
