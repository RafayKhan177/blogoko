"use client";

import { useEffect, useState } from "react";
import BlogCard from "../components/blogCard/BlogCard";
import { fetchAllMyBlogs } from "../firebase/functions/fetch";
import { Container, Grid } from "@mantine/core";

const Blogs = ({ blogs }) => {
  return (
    <Grid container spacing={2}>
      {blogs.map((blog, index) => (
        <Grid item key={index} xs={12} sm={4}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};

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
        <Blogs blogs={blogs} />
      </Container>
    </div>
  );
}
