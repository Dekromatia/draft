import { useState, useEffect } from 'react';

function useFetchManufacts() {
  const [manufacts, setManufacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_manufacts', {
      'method': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setManufacts(resp))
      .catch(error => console.log(error))
  }, []);

  return manufacts;
}

export default useFetchManufacts;