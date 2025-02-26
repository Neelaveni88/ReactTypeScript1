import React, { useState } from "react";
import axios from "axios";

const Service = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  return (
    <div>
      <h2>Service Page</h2><br></br>
      <button style={{color:"white",backgroundColor:"blue",padding:"10px",borderRadius:"15px",marginLeft:"47%"}} onClick={fetchPosts}>Fetch Posts</button>
      <div className='grid'>
        {posts.map((post) => (
          <div className="body" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;