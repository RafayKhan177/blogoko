"use client";

import React, { useState } from "react";
import ReactQuill from "react-quill"; // Import the text editor
import "react-quill/dist/quill.snow.css"; // Import the styles for the text editor
import { Button, TextField, Grid, Paper } from "@mui/material";

const Home = () => {
  const [blogContent, setBlogContent] = useState(""); // State to store blog content
  const [draft, setDraft] = useState(false); // State to track if the blog is a draft
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

  // Function to handle saving the blog as a draft
  const handleSaveDraft = () => {
    // Your code to save the blog content as a draft goes here
    setDraft(true);
  };

  // Function to handle publishing the blog
  const handlePublish = () => {
    // Your code to publish the blog goes here
    setDraft(false);
    console.log(blogContent);
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
                // Add your logic to handle the blog title
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Blog Small Description"
                variant="outlined"
                fullWidth
                // Add your logic to handle the blog title
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
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveDraft}
              >
                Save as Draft
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handlePublish}
              >
                Publish
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};

export default Home;
