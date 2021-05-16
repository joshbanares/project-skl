import { useState } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Blogs from './components/Blogs';
import ToggleForm from './components/ToggleForm';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([
    {
      username: 'John Doe',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 4,
    },
    {
      username: 'Jane Doe',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 7,
    },
    {
      username: 'anonymous',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      likes: 2,
    },
  ]);

  return (
    <main>
      <Navbar />
      {showForm ? (
        <Form setShowForm={setShowForm} />
      ) : (
        <ToggleForm setShowForm={setShowForm} />
      )}
      <Blogs data={data} />
    </main>
  );
}

export default App;
