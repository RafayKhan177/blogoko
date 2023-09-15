"use client"

import React, { useState } from 'react';

const BlogView = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  // Fake blog data for demonstration
  const fakeBlog = {
    title: 'Lorem Ipsum Blog',
    date: 'September 20, 2023',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>Nulla facilisi. Proin consectetur elementum urna id dapibus.</p>
      <p>Aliquam erat volutpat. Nullam vestibulum risus in venenatis.</p>
      <p>Donec ullamcorper ligula vel justo blandit, at ultricies nisl tincidunt.</p>
    `,
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold">{fakeBlog.title}</h1>
      <p className="text-gray-500 mb-4">{fakeBlog.date}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: fakeBlog.content }}></div>
      
      <hr className="my-8" />
      
      <h2 className="text-2xl font-semibold">Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="mb-2">{comment}</li>
        ))}
      </ul>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleAddComment}>Post Comment</button>
      </div>
      
      <hr className="my-8" />

      <div className="flex justify-end">
        <div className="mr-4">
          {/* Add social sharing buttons here */}
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Share on Facebook</button>
          <button className="px-4 py-2 bg-blue-200 text-blue-800 rounded ml-2">Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
