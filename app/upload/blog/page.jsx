"use client"

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, TextField, Grid, Paper } from "@mui/material";

const Home = () => {
  const [blogContent, setBlogContent] = useState("");
  const [draft, setDraft] = useState(false);
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

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
    const yyyy = today.getFullYear();
    return dd + "/" + mm + "/" + yyyy;
  };

  const handleSaveDraft = () => {
    setDraft(true);
  };

  const handlePublish = () => {
    setDraft(false);

    // Format the current date in "dd/mm/yyyy" format
    const currentDate = getCurrentDate();

    // Log the blog content and the current date
    console.log("Published Date:", currentDate);
    console.log("Blog Content:", blogContent);
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Blog Small Description"
                variant="outlined"
                fullWidth
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
