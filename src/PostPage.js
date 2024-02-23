import React from "react";
import { Link, useParams } from "react-router-dom";
const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams(); // the values of the param are always strings
  const post = posts.find((post) => {
    return post.id.toString() === id;
  });
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postbBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton" >Edit Post</button>
            </Link>
            {/* <Link to='/' > */}
            <button className="deleteButton"
              onClick={() => {
                handleDelete(post.id);
              }}
            >
              Delete Post 
            </button>
            {/* </Link> */}
          </>
        )}
        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
