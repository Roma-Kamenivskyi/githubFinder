import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Repos from '../repos/Repos';
import gitubContext from '../../context/github/githubContext';

const UserPageView = () => {
  const { user, repos } = useContext(gitubContext);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>
      Hireable:{' '}
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fa fa-times text-danger'></i>
      )}

      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            alt={login}
            style={{ width: '200px' }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h3>Bio: </h3>
              <p>{bio}</p>
            </>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            Github Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username: </strong> {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company: </strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website: </strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers} </div>
        <div className='badge badge-success'>Following: {following} </div>
        <div className='badge badge-light'>Public repos: {public_repos}</div>
        <div className='badge badge-dark'>Public gists: {public_gists} </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};

export default UserPageView;
