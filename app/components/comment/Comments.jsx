"use client"

import React, { useState } from "react";
import { Text, Avatar, Group } from "@mantine/core";

export default function Comments({ comments, blogID }) {
  const [newComment, setNewComment] = useState();
  const AllComments = comments || [];

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }
    const newComment = {
      id: Math.random().toString(),
      name: "John Doe", 
      timestamp: new Date().toLocaleString(),
      content: newComment,
    };
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold">Comments</h2>

        <div className="mt-4">
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleAddComment}
          >
            Post Comment
          </button>
        </div>
      </div>

      {AllComments.map((comment) => (
        <div key={comment.id} className="mt-4">
          <Group>
            <Avatar
              src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
              alt={comment.name}
              radius="xl"
            />
            <div>
              <Text size="sm">{comment.name}</Text>
              <Text size="xs" c="dimmed">
                {comment.timestamp}
              </Text>
            </div>
          </Group>
          <Text pl={54} pt="sm" size="sm">
            {comment.content}
          </Text>
        </div>
      ))}
    </div>
  );
}
