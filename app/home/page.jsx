"use client";
import { Container, Grid } from "@mui/material";
import BlogCard from "../components/blogCard/BlogCard";
import Heading from "../components/Heading";
import { blogsCategories } from "../static";
import Features from "../components/features/Features";
import HeroBullets from "../components/hero/HeroBullets";
import { useEffect, useState } from "react";
import { fetchAllMyBlogs } from "../firebase/functions/fetch";

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
        <BlogCard blogs={blogData} />
      </Container>
    </div>
  );
}
