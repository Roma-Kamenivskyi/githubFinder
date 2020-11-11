import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const { users, clearUsers, searchUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    if (text.trim() === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={text}
          onChange={onChange}
        />
        <button type='submit' className='btn btn-dark btn-block'>
          Search
        </button>
      </form>
      {users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          style={{ marginTop: '10px' }}
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </>
  );
};

export default Search;
