import Blog from './Blog';

function Blogs({ data }) {
  return (
    <div className="blogs">
      {data
        .slice(0)
        .reverse()
        .map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))}
    </div>
  );
}

export default Blogs;
