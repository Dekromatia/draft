import { useState, useEffect } from 'react';

function useFetchSites() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/get_sites', {
      'method': 'GET',
      headers: {
        'Content-Type': 'applications/json'
      }
    })
      .then(resp => resp.json())
      .then(resp => setSites(resp))
      .catch(error => console.log(error))
  }, []);

  return sites;
}

export default useFetchSites;