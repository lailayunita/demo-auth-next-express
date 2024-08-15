"use client";

import useAxios from "@/hooks/useAxios";
import { Blog } from "@/types/blog";
import { IPageableResponse, IPagintaionQueries } from "@/types/pagination";
import { useQuery } from "@tanstack/react-query";

interface GetBlogQueries extends IPagintaionQueries {
  search?: string;
}

const useGetBlogs = (queries: GetBlogQueries) => {
  const { axiosInstance } = useAxios();
  return useQuery({
    //biasanya isinya sesuai dengan nama hooksnya
    queryKey: ["blogs", queries],

    //bakalan digunain buat get data
    queryFn: async () => {
      const { data } = await axiosInstance.get<IPageableResponse<Blog>>(
        "/blogs",
        { params: queries },
      );
      return data;
    },
  });
};

export default useGetBlogs;
