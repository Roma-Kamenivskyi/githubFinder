import React, { useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';

const withData = (ViewComponent, fn, type) => {
  return props => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
      getData();
      // eslint-disable-next-line
    }, []);

    const getData = async username => {
      setLoading();
      const res = fn;
      dispatch({ type: GET_USER, payload: res.data });
    };
    const hasData = !(error || loading);

    return (
      <ErrorBoundary>
        {insertBefore}
        {loading && <Spinner />}
        {hasData && <ViewComponent {...props} data={data} />}
      </ErrorBoundary>
    );
  };
};

export default withData;
