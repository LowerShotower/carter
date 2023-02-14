import { mockedFetch } from '../../services/api';
import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(null);

  const triggerFetch = async () => {
    try {
      setIsFetching(true);
      const res = await mockedFetch(url, 1000);
      setData(res);
      setIsFetching(false);
    } catch (error) {
      setError(error);
      setIsFetching(false);
    }
  };

  useEffect(() => {
    triggerFetch();
  }, []);

  return [data, triggerFetch, isFetching, error];
};

export default useFetch;
