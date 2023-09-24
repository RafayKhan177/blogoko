"use client";

import React, { useState } from "react";
import { Text, Avatar, Group } from "@mantine/core";
import { addComment } from "../../firebase/functions/upload";

export default function Comments({ comments, blogID }) {
  const [newComment, setNewComment] = useState("");
  const AllComments = comments || [];

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      return;
    }
    const commentToAdd = {
      comment: newComment,
    };
    console.log(commentToAdd);
    addComment(commentToAdd, blogID);
    setNewComment(""); // Clear the input field after adding a comment
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginBottom: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "0.5rem",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#f9f9f9",
          width: "60%",
          alignSelf: "center",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Comments</h2>

        <div style={{ marginTop: "1rem" }}>
          <textarea
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              outline: "none",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            }}
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            style={{
              marginTop: "0.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: "#007BFF",
              color: "white",
              borderRadius: "0.25rem",
              cursor: "pointer",
            }}
            onClick={handleAddComment}
          >
            Post Comment
          </button>
        </div>

        {AllComments.map((item) => (
          <div key={item.id} className="mt-4">
            <Group>
              <Avatar
                src="https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                alt={item.email}
                radius="xl"
              />
              <div>
                <Text size="sm">{item.email}</Text>
                <Text size="xs" color="dimmed">
                  {item.timestamp || "Opps"}
                </Text>
              </div>
            </Group>
            <Text pl={54} pt="sm" size="sm">
              {item.coment}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
