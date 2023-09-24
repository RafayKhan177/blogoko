"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, TextField, Grid, Paper } from "@mui/material";
import { postBlog } from "../../../firebase/functions/upload";
import { fetchBlogById } from "../../../firebase/functions/fetch";
import { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Home() {
  const currentDate = new Date().toLocaleDateString("en-GB");
  const router = useRouter();
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

  // -------------------------------------OnLoad
  useEffect(() => {
    const splitIdFromUrl = () => {
      const url = window.location.href;
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      setBlogData((prevData) => ({ ...prevData, id }));
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
        setBlogData((prevData) => ({
          ...prevData,
          content: blogPost.blogContent,
          title: blogPost.title,
          description: blogPost.description,
        }));
        setTagsData((prevData) => ({
          ...prevData,
          tags: blogPost.tags,
        }));
        setQasData((prevData) => ({
          ...prevData,
          qas: blogPost.qas,
        }));
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    }

    return () => {};
  }, []);

  // -------------------------------------State
  const [blogData, setBlogData] = useState({
    content: "",
    title: "",
    description: "",
  });

  console.log(blogData);

  const [tagsData, setTagsData] = useState({
    tags: [{ tag: "example" }],
    tag: "example",
  });

  const [qasData, setQasData] = useState({
    qas: [{ q: "example", a: "example" }],
    q: "",
    a: "",
  });

  // -------------------------------------Handle

  const handleNavigate = (url) => {
    router.push(url);
  };
  const handleTag = (action) => {
    if (!action) {
      setTagsData({ tags: [], tag: "" });
    } else if (tagsData.tags.length < 6) {
      setTagsData({
        ...tagsData,
        tags: [...tagsData.tags, { tag: tagsData.tag }],
        tag: "",
      });
    }
  };

  const handleQa = (action) => {
    if (!action) {
      setQasData({ qas: [], q: "", a: "" });
    } else if (qasData.qas.length < 6) {
      setQasData({
        ...qasData,
        qas: [...qasData.qas, { q: qasData.q, a: qasData.a }],
        q: "",
        a: "",
      });
    }
  };

  const handlePublish = async (state) => {
    const postData = {
      PublishedDate: currentDate,
      title: blogData.title,
      description: blogData.description,
      blogContent: blogData.content,
      tags: tagsData.tags,
      qasData: tagsData.qas,
      state: state,
    };
    await postBlog(postData, blogData.id || null);
    handleNavigate("http://localhost:3000/upload/blog/new");
  };

  // -------------------------------------Render
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
                value={blogData.title}
                onChange={(e) =>
                  setBlogData({ ...blogData, title: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Blog Small Description"
                variant="outlined"
                fullWidth
                value={blogData.description}
                onChange={(e) =>
                  setBlogData({ ...blogData, description: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <ReactQuill
                value={blogData.content}
                onChange={(content) => setBlogData({ ...blogData, content })}
                formats={formats}
                placeholder="Start writing your blog..."
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePublish("Draft")}
              >
                Save as Draft
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePublish("published")}
              >
                Publish Blog
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Question"
                variant="outlined"
                fullWidth
                value={qasData.q}
                onChange={(q) => setQasData({ ...qasData, q: q.target.value })}
              />

              <TextField
                label="Answer"
                variant="outlined"
                fullWidth
                value={qasData.a}
                onChange={(a) => setQasData({ ...qasData, a: a.target.value })}
              />
              <Button variant="contained" color="primary" onClick={handleQa}>
                Add F&Q
              </Button>
            </Grid>
            <Grid item xs={12}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <TextField
                  label="Tags"
                  variant="outlined"
                  fullWidth
                  value={tagsData.tag}
                  onChange={(e) =>
                    setTagsData({ ...tagsData, tag: e.target.value })
                  }
                />
                <IconButton color="primary" onClick={() => handleTag(true)}>
                  <AddCircleOutlineIcon />
                </IconButton>
                <IconButton color="error" onClick={() => handleTag(false)}>
                  <DeleteIcon />
                </IconButton>
              </div>
              {tagsData.tags && tagsData.tags.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  {tagsData.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag.tag}
                      color="primary"
                      variant="outlined"
                      style={{ marginRight: 4 }}
                    />
                  ))}
                </div>
              )}
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
