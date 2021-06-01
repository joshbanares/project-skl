import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Post({ post, setShowDp }) {
  return (
    <div className="post">
      <DeleteForeverIcon
        style={{ fontSize: 18 }}
        onClick={() => setShowDp(true)}
      />
      <h4>{post.username}</h4>
      <p>{post.userPost}</p>
      <p>{post.date}</p>
    </div>
  );
}

export default Post;
