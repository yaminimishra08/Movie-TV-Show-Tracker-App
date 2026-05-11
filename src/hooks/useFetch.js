// Importing React hooks
import { useState, useEffect } from "react";

/*
  Custom Hook: useFetch

  Purpose:
  Reusable logic for fetching data from APIs.

  Benefits:
  - Avoids repeating fetch logic in multiple components
  - Keeps components cleaner
  - Follows DRY principle (Don't Repeat Yourself)

  Parameters:
  apiFunction -> function that fetches API data
  param -> optional parameter passed into the API function
*/
function useFetch(apiFunction, param) {

  // Stores fetched API data
  const [data, setData] = useState([]);

  // Tracks loading state
  const [loading, setLoading] = useState(true);

  // Stores error messages if API fails
  const [error, setError] = useState(null);

  /*
    useEffect runs:
    - when component mounts
    - OR when apiFunction/param changes
  */
  useEffect(() => {

    // Async function to fetch API data
    const fetchData = async () => {

      try {

        // Start loading
        setLoading(true);

        // Clear old errors before new request
        setError(null);

        // Calling the API function
        const result = await apiFunction(param);

        // Saving fetched data into state
        setData(result);

      } catch (err) {

        // Handling errors safely
        setError("Error fetching data");

        // Optional: log actual error for debugging
        console.error(err);

      } finally {

        // Stop loading whether success or failure
        setLoading(false);
      }
    };

    // Calling the async function
    fetchData();

  }, [apiFunction, param]);

  /*
    Returning values so components can use them

    Example:
    const { data, loading, error } = useFetch(...)
  */
  return { data, loading, error };
}

// Exporting custom hook
export default useFetch;