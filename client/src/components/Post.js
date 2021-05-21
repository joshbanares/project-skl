function Post({ post }) {
  return (
    <div className="post">
      <h4>{post.username}</h4>
      <p>{post.userPost}</p>
    </div>
  );
}

export default Post;
