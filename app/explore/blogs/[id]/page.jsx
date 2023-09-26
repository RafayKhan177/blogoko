"use client";

import React, { useState, useEffect } from "react";
import { fetchBlogsByCategory } from "../../../firebase/functions/fetch";
import BlogCard from "../../../components/blogCard/BlogCard";

export default function Page() {
  const [blogsCategories, setBlogsCategories] = useState([]);

  useEffect(() => {
    const id = splitIdFromUrl();
    fetchBlogsByCategory(id).then((blogs) => {
      setBlogsCategories(blogs);
    });
  }, []);

  return (
    <div>
      {blogsCategories.length} blogs
      <BlogCard blogs={blogsCategories} />
    </div>
  );
}

function splitIdFromUrl() {
  const url = window.location.href;
  const parts = url.split("/");
  const id = parts[parts.length - 1];
  return id;
}
