import React from "react";
import { Container, Grid, Card, CardContent } from "@mui/material";
import BlogCard from "../components/blogCard/BlogCard";
import Heading from "../components/Heading";

const Category = ({ category }) => (
  <Grid item xs={6} sm={3}>
    <Card className="bg-white rounded-lg shadow-lg">
      <CardContent>{category}</CardContent>
    </Card>
  </Grid>
);

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

// Data
const categories = [
  "Self-Care and Mental Health",
  "Sustainability and Green Living",
  "Fitness and Wellness Blogs",
  "Space and Astronomy",
];

const blogData = [
  {
    image:
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    title: "Verudela Beach",
    description:
      "Completely renovated for the season 2020, Arena Verudela Beach Apartments are fully equipped and modernly furnished 4-star self-service apartments located on the Adriatic coastline by one of the most beautiful beaches in Pula.",
    date: "September 5, 2023",
    category: "Space and Astronomy",
    tags: [
      { label: "Sunny weather" },
      { label: "Onsite zoo" },
      { label: "Sea" },
      { label: "Nature" },
      { label: "Water sports" },
    ],
  },
];

export default function Home() {
  return (
    <div>
      {/* Categories */}
      <Container className="text-sm text-center font-bold text-teal-950" mt={4}>
        <Heading txt={"Categories"} />
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </Grid>
      </Container>

      <Container className="text-center" mt={4}>
        <Heading txt={"Trending Blogs"} />
        <Blogs blogs={blogData} />
      </Container>
    </div>
  );
}
