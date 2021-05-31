import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import CloseIcon from '@material-ui/icons/Close';
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
  const [showDp, setShowDp] = useState(false);

  const DeletePopUp = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: fixed;
    padding: 40px;
    z-index: 99;
    display: grid;
    place-items: center;
    left: 50%;
    top: 50%;
    height: 100px;
    transform: translate(-50%, -50%);

    input,
    button {
      position: relative;
      top: -90px;
      margin-bottom: 20px;
      outline: none;
      border: none;
    }

    input {
      border-radius: 8px;
      padding: 5px;
    }

    svg {
      position: absolute;
      top: 10px;
      right: 10px;
      transition: 0.3s;
      cursor: pointer;

      &:hover {
        color: #7289da;
      }
    }

    button {
      border-radius: 3px;
      padding: 3px 8px;
      background: #7289da;
      color: white;
      cursor: pointer;
    }
  `;

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
        {showDp && (
          <DeletePopUp>
            <CloseIcon
              style={{ fontSize: 20 }}
              onClick={() => setShowDp(false)}
            />
            <form>
              <input type="password" placeholder="password" /> <br />
              <button onClick={(e) => e.preventDefault()}>Delete Post</button>
            </form>
          </DeletePopUp>
        )}
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
              <Posts sharedPost={sharedPost} setShowDp={setShowDp} />
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
