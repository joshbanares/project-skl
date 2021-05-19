import Post from './Post';

function Posts({ sharedPost }) {
  return (
    <div className="blogs">
      {sharedPost
        .slice(0)
        .reverse()
        .map((post, index) => (
          <Post key={index} post={post} />
        ))}
    </div>
  );
}

export default Posts;
