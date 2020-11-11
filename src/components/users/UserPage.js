import React, { useEffect, useContext, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import UserPageView from './UserPageView';
import gitubContext from '../../context/github/githubContext';

const UserPage = () => {
  const { getUser, loading, getUserRepos } = useContext(gitubContext);
  const param = useParams();

  const getUserData = useCallback((login) => {
    getUser(login);
    getUserRepos(login);
  }, []);

  useEffect(() => {
    getUserData(param.login);
  }, [param.login, getUserData]);

  if (loading)  {
    return <Spinner />
  };

  return <UserPageView />;
};

export default UserPage;
