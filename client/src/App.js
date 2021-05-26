import { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Posts from './components/Posts';
import ToggleForm from './components/ToggleForm';
import About from './routes/About';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [sharedPost, setSharedPost] = useState([]);
  const [username, setUsername] = useState('');
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [sharing, setSharing] = useState(false);

  const getSharedPost = () => {
    axios
      .get('https://project-skl-backend.herokuapp.com/api')
      .then((res) => {
        const data = res.data;
        setSharedPost(data);
        setIsLoading(false);
      })
      .catch(() => {
        console.log('Error retrieving data!');
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

    if (!post.length) {
      return;
    } else {
      setSharing(true);
      axios({
        url: 'https://project-skl-backend.herokuapp.com/api/save',
        method: 'POST',
        data: payload,
      })
        .then(() => {
          resetInput();
          getSharedPost();
          setSharing(false);
        })
        .catch(() => {
          console.log('Internal server error!');
        });
    }
  };

  const resetInput = () => {
    setUsername('');
    setPost('');
  };

  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          {isLoading ? (
            <div className="loader">
              <CircularProgress color="primary" />
              <p>this can take up to 15 sec...</p>
            </div>
          ) : (
            <Route exact path="/">
              {showForm ? (
                <Form
                  setShowForm={setShowForm}
                  setUsername={setUsername}
                  setPost={setPost}
                  username={username}
                  post={post}
                  submit={submit}
                  sharing={sharing}
                  setSharing={setSharing}
                />
              ) : (
                <ToggleForm setShowForm={setShowForm} />
              )}
              <Posts sharedPost={sharedPost} />
            </Route>
          )}

          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
