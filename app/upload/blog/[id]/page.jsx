"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, TextField, Grid, Paper } from "@mui/material";
import { postBlog, fetchBlogById } from "../../../firebase/functions/upload";
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();

  const handleNavigate = (url) => {
    router.push(url);
  };

  const [blogContent, setBlogContent] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setblogDescription] = useState("");
  const [blogId, setBlogId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const formats = [
    "bold",
    "italic",
    "underline",
    "header",
    "list",
    "strike",
    "link",
    "block-quote",
    "code-block",
    "inline code",
    "color",
    "align",
    "intent",
  ];
  const currentDate = new Date().toLocaleDateString("en-GB");

  useEffect(() => {
    const splitIdFromUrl = () => {
      const url = window.location.href;
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      setBlogId(id);
      return id;
    };
  
    const blogId = splitIdFromUrl();
  
    if (blogId !== "new") {
      fetchBlog();
    }
  
    async function fetchBlog() {
      try {
        const blogPost = await fetchBlogById(blogId);
        console.log(blogPost);
        setBlogTitle(blogPost.title);
        setblogDescription(blogPost.description);
        setBlogContent(blogPost.blogContent);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    }
  
    return () => {
    };
  }, []);
  

  const handlePublish = async (state) => {
    const postData = {
      PublishedDate: currentDate,
      title: blogTitle,
      description: blogDescription,
      blogContent: blogContent,
      state: state,
    };
    await postBlog(postData, blogId || null);
    handleNavigate('http://localhost:3000/upload/blog/new')
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <Paper elevation={3} className="p-4">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Blog Title"
                variant="outlined"
                fullWidth
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Blog Small Description"
                variant="outlined"
                fullWidth
                value={blogDescription}
                onChange={(e) => setblogDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ReactQuill
                value={blogContent}
                onChange={setBlogContent}
                formats={formats}
                placeholder="Start writing your blog..."
              />
            </Grid>
            <Grid item xs={12}>
              {isEditing === true ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePublish("Draft")}
                >
                  Save as Draft
                </Button>
              ) : null}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePublish("published")}
              >
                Save Changes & Publish Blog
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
