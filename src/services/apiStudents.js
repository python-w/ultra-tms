import { useState, useEffect } from 'react';

const apiUrl = 'https://freetestapi.com/api/v1/students';

export default function useStudentsApi() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  return { students, loading, error };
}