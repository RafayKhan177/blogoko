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


async function fetchBlogById(blogPostId) {
  const blogPostDocRef = doc(db, "blogs", blogPostId);
  try {
    const blogPost = await getDoc(blogPostDocRef);
    if (!blogPost.exists()) {
      throw new Error("Blog post not found.");
    }
    return blogPost.data();
  } catch (error) {
    notify("Error fetching blog post:", error);
  }
}

export { postBlog, fetchBlogById };
