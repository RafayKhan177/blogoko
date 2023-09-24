import { getAuth } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { app } from "../config";
import { toast } from "react-toastify";

const auth = getAuth(app);
const db = getFirestore();

const notify = (msg) => toast(msg);

async function postBlog(postData, blogID) {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.uid + Date.now();

  const blogPostDocRef = doc(db, "blogs", blogID);

  // Check if the blog with the specified blogId already exists.
  const blogPostDoc = await getDoc(blogPostDocRef);
  if (blogPostDoc.exists()) {
    // Update the existing blog post.
    try {
      await updateDoc(blogPostDocRef, postData);
      notify("Your Blog is Updated Successfully");
    } catch (error) {
      console.error("Error updating blog post:", error);
      notify("Error updating blog post");
    }
  } else {
    // Create a new blog post.
    try {
      await setDoc(blogPostDocRef, {
        ...postData,
        email: user.email,
        id: id,
      });
      notify("Your Blog is Published Successfully");
    } catch (error) {
      console.error("Error creating blog post:", error);
      notify("Error uploading blog post");
    }
  }
}

async function addComment(commentData, blogID) {
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;

  const blogPostDocRef = doc(db, "blogs", blogID);

  // Check if the blog with the specified blogId already exists.
  const blogPostDoc = await getDoc(blogPostDocRef);

  // Ensure that the comments field is iterable.
  const comments = blogPostDoc.data().comments || [];

  // Update the existing blog post with the new comment.
  if (blogPostDoc.exists()) {
    await updateDoc(blogPostDocRef, {
      comments: [...comments, { ...commentData, email }],
    });
  } else {
    // Create a new blog post with the comment.
    await setDoc(blogPostDocRef, {
      comments: [{ ...commentData, email }],
      ...commentData,
      email,
    });
  }

  notify("Your comment is added successfully!");
}

export { postBlog, addComment };
