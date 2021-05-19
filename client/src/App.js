import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Posts from './components/Posts';
import ToggleForm from './components/ToggleForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [sharedPost, setSharedPost] = useState([]);
  const [username, setUsername] = useState('');
  const [likes, setLikes] = useState('');
  const [post, setPost] = useState('');

  const getSharedPost = () => {
    axios
      .get('/api')
      .then((res) => {
        const data = res.data;
        setSharedPost(data);
      })
      .catch(() => {
        alert('Error retrieving data!');
      });
  };

  useEffect(() => {
    getSharedPost();
    console.log('Data has been received!');
  }, []);

  const submit = (e) => {
    e.preventDefault();

    const payload = {
      username,
      userPost: post,
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload,
    })
      .then(() => {
        resetInput();
        getSharedPost();
      })
      .catch(() => {
        console.log('Internal server error!');
      });
  };

  const resetInput = () => {
    setUsername('');
    setPost('');
  };

  return (
    <main>
      <Navbar />
      {showForm ? (
        <Form
          setShowForm={setShowForm}
          setUsername={setUsername}
          setPost={setPost}
          username={username}
          post={post}
          submit={submit}
        />
      ) : (
        <ToggleForm setShowForm={setShowForm} />
      )}
      <Posts sharedPost={sharedPost} likes={likes} />
    </main>
  );
}

export default App;
