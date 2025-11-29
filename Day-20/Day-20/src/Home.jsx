import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log("Error fetching posts:", err));
  }, []);

  return (
    <>
      <div className="container my-4">
        <div className="d-flex justify-content-end mb-3">
          <Link to="/login" className="btn btn-success">
            Login
          </Link>
        </div>
        <h2 className="mb-4">All Posts</h2>

        <div className="row">
          {posts.length > 0 ? (
            posts.map(post => (
              <div className="col-md-4 mb-3" key={post.id} onClick={()=>{navigate('/post/'+post.id)}}>
                <div className="card shadow-sm p-3">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="text-muted small">📅 {post.created_at}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Loading posts...</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
