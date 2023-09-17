"use client";


import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, TextareaAutosize } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BlogView = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [qaData, setQaData] = useState([
    { question: 'Sample Question 1', answer: 'Sample Answer 1' },
    { question: 'Sample Question 2', answer: 'Sample Answer 2' },
    // Add more Q&A pairs as needed
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newAnswer, setNewAnswer] = useState('');

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  // Function to add a new Q&A pair
  const handleAddQandA = () => {
    if (newQuestion.trim() !== '' && newAnswer.trim() !== '') {
      setQaData([...qaData, { question: newQuestion, answer: newAnswer }]);
      setNewQuestion('');
      setNewAnswer('');
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
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">{fakeBlog.title}</h1>
        <p className="text-gray-500 mb-4">{fakeBlog.date}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: fakeBlog.content }}></div>
      </div>

      <hr className="my-8" />

      <div className="mb-8">
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
      </div>

      <hr className="my-8" />

      {/* Q&A Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Q&A</h2>
        {qaData.map((qa, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{qa.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="w-full">
                <TextareaAutosize
                  className="w-full p-2 border rounded"
                  placeholder="Type your answer..."
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddQandA(index)}
                >
                  Post Answer
                </Button>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
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
