import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../firebase/config";
import { toast } from "react-toastify";
const db = getFirestore();

const notify = (msg) => toast(msg);

async function fetchBlogById(blogPostId) {
  const blogPostDocRef = doc(db, "blogs", blogPostId);
  try {
    const blogPost = await getDoc(blogPostDocRef);
    if (!blogPost.exists()) {
      notify("Blog post not found.");
    }
    return blogPost.data();
  } catch (error) {
    notify("Error fetching blog post:", error);
  }
}

async function fetchAllMyBlogs() {
  const user = JSON.parse(localStorage.getItem("user"));
  const blogsRef = collection(db, "blogs");
  const blogsQuery = query(blogsRef, where("email", "==", user.email));
  try {
    const blogsSnapshot = await getDocs(blogsQuery);
    const blogs = blogsSnapshot.docs.map((blogDoc) => blogDoc.data());
    return blogs;
  } catch (error) {
    notify("Error fetching blogs:", error);
  }
}

async function fetchBlogsByCategory(category) {
  const blogsRef = collection(db, "blogs");
  const blogsQuery = query(blogsRef, where("category", "==", category));
  try {
    const blogsSnapshot = await getDocs(blogsQuery);
    const blogs = blogsSnapshot.docs.map((blogDoc) => blogDoc.data());
    return blogs;
  } catch (error) {
    notify("Error fetching blogs:", error);
  }
}

export { fetchBlogById, fetchAllMyBlogs, fetchBlogsByCategory };
