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
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const storage = getStorage();
const db = getFirestore();

const notify = (msg) => toast(msg);

async function postBlog(postData) {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = postData.id === "new" ? user.uid + Date.now() : postData.id;
  const blogPostDocRef = doc(db, "blogs", id);
  const url = await uploadPicture(postData.pic);
  console.log(postData);
  try {
    if (
      postData.title === "" ||
      postData.description === "" ||
      postData.blogContent === "" ||
      postData.tags === "" ||
      postData.qas === ""
    ) {
      throw new Error("Please fill in all of the required fields.");
    }
  } catch (error) {
    alert(error.message);
    return;
  }
  const blogPostDoc = await getDoc(blogPostDocRef);
  if (blogPostDoc.exists()) {
    await updateDoc(blogPostDocRef, { ...postData, pic: url });
    notify("Your Blog is Updated Successfully");
  } else {
    await setDoc(blogPostDocRef, {
      ...postData,
      email: user.email,
      id: id,
      pic: url,
    });
    notify("Your Blog is Published Successfully");
  }
}

async function addComment(commentData, blogID) {
  const user = JSON.parse(localStorage.getItem("user"));
  const email = user.email;
  const blogPostDocRef = doc(db, "blogs", blogID);
  const blogPostDoc = await getDoc(blogPostDocRef);
  const comments = blogPostDoc.data().comments || [];
  if (blogPostDoc.exists()) {
    await updateDoc(blogPostDocRef, {
      comments: [...comments, { ...commentData, email }],
    });
  } else {
    await setDoc(blogPostDocRef, {
      comments: [{ ...commentData, email }],
      ...commentData,
      email,
    });
  }
  notify("Your comment is added successfully!");
}

async function uploadPicture(file) {
  const storageRef = ref(storage, "blogsPic");

  // 'file' comes from the Blob or File API
  const snapshot = await uploadBytes(storageRef, file);

  // Get the download URL of the uploaded image
  const url = await getDownloadURL(snapshot.ref);

  return url;
}

export { postBlog, addComment };
