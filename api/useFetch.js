import { useState, useEffect } from "react";

export const useFetchOnLoad = (fn) => {
  const response = useFetch(fn);
  const { fetch, ...rest } = response;

  useEffect(() => {
    fetch();
  }, []);

  return { ...rest, refetch: fetch };
};

export const useFetch = (fn) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    setIsLoading(true);

    try {
      const response = await fn();
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetch };
};
