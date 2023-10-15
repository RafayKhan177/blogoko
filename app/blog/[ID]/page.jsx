"use client";

import React, { useEffect, useState } from "react";
import Comments from "../../components/comment/Comments";
import QandA from "../../components/qAndA/QandA";
import { fetchBlogById } from "../../api/functions/fetch";

export default function BlogView() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const splitIdFromUrl = async () => {
      const url = window.location.href;
      const parts = url.split("/");
      const id = parts[parts.length - 1];
      const blogData = await fetchBlogById(id);
      console.log(blogData);
      setBlog(blogData);
    };
    splitIdFromUrl();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {blog && (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog.blogContent }} />
  
          {/* Comments Section */}
          <Comments comments={blog.comments} blogID={blog.id} />
  
          {/* Separate Q&A Section */}
          <QandA qa={blog.qa} blogID={blog.id} />
  
          <div className="flex justify-end">
            <div className="mr-4">
              {/* Add social sharing buttons here */}
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Share on Facebook
              </button>
              <button className="px-4 py-2 bg-blue-200 text-blue-800 rounded ml-2">
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
  
}
