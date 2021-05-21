import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Posts from './components/Posts';
import ToggleForm from './components/ToggleForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [sharedPost, setSharedPost] = useState([]);
  const [username, setUsername] = useState('');
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
      username: !username.length ? 'anonymous' : username,
      userPost: post,
      likes: 0,
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
      <Posts sharedPost={sharedPost} />
    </main>
  );
}

export default App;
