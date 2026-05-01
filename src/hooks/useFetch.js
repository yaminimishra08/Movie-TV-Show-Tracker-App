import { useState, useEffect } from "react";

function useFetch(apiFunction, param) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiFunction(param);
        setData(result);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunction, param]);

  return { data, loading, error };
}

export default useFetch;