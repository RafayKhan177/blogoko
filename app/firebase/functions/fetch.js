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

export { fetchBlogById };
