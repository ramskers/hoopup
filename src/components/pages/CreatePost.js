import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postsCollectionRef = collection(db, "posts");
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1 className="cp-header">Create A Post</h1>
        <div className="inputGp">
          <label className="cp-label"> Title:</label>
          <input
            className="input-title"
            placeholder="Title..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            className="cp-text"
            placeholder="Pickup Details..."
            onChange={(event) => {
              setPostText(event.target.value);
            }}
          />
        </div>
        <button className="cp-btn" onClick={createPost}>
          {" "}
          Submit Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
