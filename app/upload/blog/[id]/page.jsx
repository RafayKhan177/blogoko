"use client";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, TextField, Grid, Paper } from "@mui/material";
import { postBlog } from "../../../api/functions/upload";
import { fetchBlogById } from "../../../api/functions/fetch";
import { useRouter } from "next/navigation";
import IconButton from "@mui/material/IconButton";
import Chip from "@mui/material/Chip";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import DropzoneButton from "../../../components/dropzone/DropzoneButton";

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
      setBlogData((prevData) => ({ ...prevData, id: id || null }));
      return id;
    };

    const blogId = splitIdFromUrl();

    if (blogId !== "new") {
      fetchBlog();
    }

    async function fetchBlog() {
      try {
        const blogPost = await fetchBlogById(blogId);
        setBlogData((prevData) => ({
          ...prevData,
          content: blogPost.blogContent,
          title: blogPost.title,
          description: blogPost.description,
          blogContent: blogPost.blogContent,
          id: blogPost.id,
          pic: blogPost.pic,
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
  const [selectedImage, setSelectedImage] = useState(null);

  const [blogData, setBlogData] = useState({
    content: "",
    title: "",
    description: "",
    id: "",
    pic: "",
  });

  const [tagsData, setTagsData] = useState({
    tags: [],
    tag: "",
  });

  const [qasData, setQasData] = useState({
    qas: [],
    q: "",
    a: "",
  });

  // -------------------------------------Handle

  const handleTag = (action) => {
    if (!action) {
      setTagsData({ tags: [], tag: "" });
    } else {
      if (tagsData.tags === undefined || tagsData.tags === null) {
        tagsData.tags = [];
      }
      if (tagsData.tags.length < 5) {
        tagsData.tags = [...tagsData.tags, { tag: tagsData.tag }];
      }
      setTagsData({
        ...tagsData,
        tag: "",
      });
    }
  };

  const handleQa = (action) => {
    if (!action) {
      setQasData({ qas: [], q: "", a: "" });
    } else {
      if (qasData.qas === undefined || qasData.qas === null) {
        qasData.qas = [];
      }
      if (qasData.qas.length < 5) {
        qasData.qas = [...qasData.qas, { q: qasData.q, a: qasData.a }];
      }
      setQasData({
        ...qasData,
        q: "",
        a: "",
      });
    }
  };

  const handlePublish = async (state) => {
    const postData = {
      id: blogData.id,
      PublishedDate: currentDate,
      title: blogData.title,
      description: blogData.description,
      blogContent: blogData.content,
      tags: tagsData.tags,
      qas: qasData.qas,
      state: state,
      pic: selectedImage,
    };

    try {
      await postBlog(postData, blogData.id || null);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  const handleNavigate = (url) => {
    router.push(url);
  };

  // -------------------------------------Render
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <DropzoneButton onImageSelect={handleImageSelect} image={blogData.pic} />
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
