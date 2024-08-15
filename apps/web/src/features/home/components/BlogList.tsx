import React, { useState } from "react";
import BlogCard from "./BlogCard";
import useGetBlogs from "@/hooks/api/blog/useGetBlogs";
import { Loader2 } from "lucide-react";
import Pagination from "@/components/Pagination";

const BlogList = () => {
  const [page, setPage] = useState(1);

  const { data, isPending } = useGetBlogs({
    page,
    take: 3,
  });

  const onPageChange = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  if (isPending) {
    return <Loader2 className="mx-auto animate-spin" />;
  }

  if (!data) {
    return <h1>Blog tidak ditemukan</h1>;
  }

  return (
    <>
      <section className="grid grid-cols-3 gap-8">
        {data?.data.map((blog, index: number) => {
          return (
            <BlogCard
              key={index}
              thumbnail={blog.thumbnail}
              description={blog.description}
              title={blog.title}
              author={blog.user.name}
              category={blog.category}
            />
          );
        })}
      </section>
      <div className="my-8 flex justify-end">
        <Pagination
          total={data.meta.total}
          take={data.meta.take}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};

export default BlogList;
