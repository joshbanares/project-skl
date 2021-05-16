function Blog({ blog }) {
  return (
    <div className="blog">
      <h4>{blog.username}</h4>
      <p>{blog.msg}</p>
      <p>{blog.likes} 👍</p>
    </div>
  );
}

export default Blog;
