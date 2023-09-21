"use client";
import { Container, Grid } from "@mui/material";
import BlogCard from "../components/blogCard/BlogCard";
import Heading from "../components/Heading";
import { blogsCategories, blogData } from "../static";
import Features from "../components/features/Features";
import HeroBullets from "../components/hero/HeroBullets";

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

export default function Home() {
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
