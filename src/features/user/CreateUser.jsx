import { useState } from 'react';
import Button from '../../ui/Button';
import { updateName } from './userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // cntrolled element do not need to be from redux its bad practice
  // controlling input field directloy to the global state is bad practice

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateName(username));
    navigate('menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-500 md:text-base">👋 Welcome! Please start by telling us your name:</p>

      <input
        className="input mb-8 w-72"
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
