import { useState, useEffect } from 'react';

function useFetchAlldb() {
  const [items, setAll] = useState([]);

  useEffect(() => {
      fetch('http://localhost:8000/get_all', {
        'method': 'GET',
        headers: {
          'Content-Type': 'applications/json'
        }
      })
        .then(resp => resp.json())
        .then(resp => setAll(resp))
        .catch(error => console.log(error))
    }, []);

  return items;
}

export default useFetchAlldb;