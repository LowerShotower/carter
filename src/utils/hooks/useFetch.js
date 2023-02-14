import { mockedFetch } from '../../services/api';
import { useRef, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isFetching, setIsFetching] = useState(null);
  const cancelFetch = useRef(false);

  const fetch = async () => {
    try {
      setIsFetching(true);
      const res = await mockedFetch(url, (Math.random() + 1) * 1000);
      if (cancelFetch.current) return;
      setData(res);
      setIsFetching(false);
    } catch (error) {
      if (cancelFetch.current) return;
      setError(error);
      setIsFetching(false);
    }
  };
  const triggerFetch = () => {
    cancelFetch.current = false;
    fetch();
    return () => {
      cancelFetch.current = true;
    };
  };

  return [data, triggerFetch, isFetching, error];
};

export default useFetch;
