"use client"

import React from "react";
import Comments from "../../components/comment/Comments";
import QandA from "../../components/qAndA/QandA"; 
import { blogData } from "../../static";

export default function BlogView()  {
  console.log(blogData)
  
  return (
    <div className="container mx-auto p-4">
      

      {/* Comments Section */}
      <Comments comments={blogData[0].comments} blogID={blogData.id} />


      {/* Separate Q&A Section */}
      <QandA qa={blogData[0].qa} blogID={blogData.id}/>

      <hr className="my-8" />

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
  );
};

