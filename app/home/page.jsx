import { Container, Grid, Card, CardContent } from "@mui/material";
import { BlogCard, Heading } from "../components";

const Category = ({ category }) => (
  <Grid item xs={6} sm={3}>
    <Card className="bg-white rounded-lg shadow-lg">
      <CardContent>{category}</CardContent>
    </Card>
  </Grid>
);

const Blog = ({ blog }) => {
  return (
    <Grid item xs={12} sm={4}>
      <BlogCard blog={blog} />
    </Grid>
  );
};

export default function Home() {
  // Data
  const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
  const trendingBlogs = [
    {
      name: "TechTrends Today",
      description: "Stay updated on the latest tech innovations.",
      date: "September 10, 2023",
    },
    {
      name: "Healthy Living Guide",
      description:
        "Discover tips and tricks for maintaining a healthy lifestyle.",
      date: "September 5, 2023",
    },
    {
      name: "Traveler's Diary",
      description:
        "Explore exotic destinations, travel stories, and useful travel tips.",
      date: "August 28, 2023",
    },
  ];

  const otherBlogs = [
    {
      name: "Culinary Delights",
      description: "Dive into the world of gourmet cuisine, recipes.",
      date: "August 20, 2023",
    },
    {
      name: "Financial Insights",
      description: "Gain valuable financial knowledge, investment strategies.",
      date: "August 15, 2023",
    },
    {
      name: "Bookworm's Corner",
      description:
        "Immerse yourself in the world of literature with book reviews.",
      date: "August 12, 2023",
    },
  ];

  return (
    <div>
      {/* Categories */}
      <Container mt={4}>
        <Heading txt={"Categories"} />
        <Grid container spacing={2}>
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </Grid>
      </Container>

      {/* Trending Blogs */}
      <Container mt={4}>
        <Heading txt={"Trending Blogs"} />
        <Grid container spacing={2}>
          {trendingBlogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </Grid>
      </Container>

      {/* Other Blogs */}
      <Container mt={4}>
        <Heading txt={"Other Blogs"} />
        <Grid container spacing={2}>
          {otherBlogs.map((blog, index) => (
            <Blog key={index} blog={blog} />
          ))}
        </Grid>
      </Container>
    </div>
  );
}
