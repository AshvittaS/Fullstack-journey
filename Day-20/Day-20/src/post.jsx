import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
function Post() {
  const {id}=useParams();
  const [post,setPost]=useState(null);
  useEffect(()=>{
  fetch("http://localhost:3000/posts/"+id)
      .then(res => res.json())
      .then(data => setPost(data))
      .catch(err => console.log("Error fetching posts:", err));},[id]);
  return (
    <div>
      {post&& <div>
          <p>Post:{id}</p>
          <h1>{post.title}</h1>
          <h4>{post.content}</h4>
      </div>}
    </div>
  )
}

export default Post;