import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { users, clearUsers, searchUsers } = githubContext;
  const { setAlert } = alertContext;
  const [text, setText] = useState('');

  const onSubmit = evt => {
    evt.preventDefault();
    if (text === '') {
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
