import { useEffect, useState } from 'react';
import req from '../utils/request';
import { IData } from '../pages/Pokedex/dataType';

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;