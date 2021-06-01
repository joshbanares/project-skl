import Post from './Post';

function Posts({ sharedPost, addLike, setShowDp }) {
  return (
    <div className="posts">
      {sharedPost
        .slice(0)
        .reverse()
        .map((post, index) => (
          <Post
            key={index}
            post={post}
            addLike={addLike}
            setShowDp={setShowDp}
          />
        ))}
    </div>
  );
}

export default Posts;
