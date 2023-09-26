"use client";
import { Container, Grid } from "@mui/material";
import BlogCard from "../components/blogCard/BlogCard";
import Heading from "../components/Heading";
import { blogsCategories } from "../static";
import Features from "../components/features/Features";
import HeroBullets from "../components/hero/HeroBullets";
import { useEffect, useState } from "react";
import { fetchAllMyBlogs } from "../firebase/functions/fetch";
import { useRouter } from "next/navigation";

const Blogs = ({ blogs }) => {
  const router = useRouter();
  const handleNavigate = (url) => {
    router.push(url);
  };
  return (
    <Grid container spacing={2}>
      {blogs &&
        blogs.map((blog, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
    </Grid>
  );
};

export default function Home() {
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    fetchAllMyBlogs().then((blogs) => {
      setBlogData(blogs);
    });
  }, []);
  return (
    <div>
      <HeroBullets />
      <Container className="text-sm text-center font-bold text-teal-950" mt={4}>
        <Features categories={blogsCategories} />
      </Container>
      <Container className="text-center" mt={4}>
        <Heading txt={"Trending Blogs"} />
        <Blogs blogs={blogData} />
      </Container>
    </div>
  );
}
