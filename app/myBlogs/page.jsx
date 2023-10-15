"use client";

import { useEffect, useState } from "react";
import BlogCard from "../components/blogCard/BlogCard";
import { fetchAllMyBlogs } from "../api/functions/fetch";
import { Container, Grid } from "@mantine/core";

export default function Page() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchAllMyBlogs().then((blogs) => {
      setBlogs(blogs);
    });
  }, []);

  return (
    <div>
      <Container className="text-center" mt={4}>
        <BlogCard blogs={blogs} />
      </Container>
    </div>
  );
}
