// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Post({ post }) {
  return (
    <div className="post">
      {/* <DeleteForeverIcon style={{ fontSize: 18 }} /> */}
      <h4>{post.username}</h4>
      <p>{post.userPost}</p>
      <p>{post.date}</p>
    </div>
  );
}

export default Post;
