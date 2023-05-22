// To use Redux for state management in your app, you would need to define a Redux store,
//  actions, and reducers to manage the state of the sites data. 
//  Here's an example of how you could refactor the code to use Redux:

// Define a Redux store

// Create a new file named store.js and define a Redux store using 
// the createStore function from the redux package. The store should
//  have an initial state with an empty sites array, and a sitesReducer 
//  function to handle actions that modify the sites state.

store.js

import { createStore } from 'redux';

const initialState = {
  sites: [],
};

function sitesReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_SITES_SUCCESS':
      return {
        ...state,
        sites: action.payload,
      };
    default:
      return state;
  }
}

const store = createStore(sitesReducer);

export default store;



// Define Redux actions
// Create a new file named actions.js and define Redux actions to fetch the sites data from the server. 
// The fetchSitesSuccess action creator will be dispatched when the data is successfully fetched.

actions.js

import axios from 'axios';

export function fetchSites() {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8000/get_manufacts');
      dispatch(fetchSitesSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}

export function fetchSitesSuccess(sites) {
  return {
    type: 'FETCH_SITES_SUCCESS',
    payload: sites,
  };
}

// Connect the Redux store to the app
// In the index.js file, import the Provider component from the react-redux package and wrap the
//  App component with it. The Provider component makes the Redux store available to all components
//   in the app.


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Use the Redux store in the components
// In the SitesList component, use the useSelector hook from the react-redux package 
// to access the sites data from the Redux store. Use the useDispatch hook to dispatch 
// the fetchSites action when the component mounts.


import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSites } from './actions';

function SitesList(props) {
  const sites = useSelector((state) => state.sites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSites());
  }, [dispatch]);

  return (
    <div>
      {sites.map((site) => {
        return (
          <div key={site.id}>
            <h2>{site.site_name}</h2>
            <p>{site.site_latitude}</p>
            <p>{site.site_longitude}</p>
          </div>
        );
      })}
    </div>
  );
}

// export default SitesList;
// In the TypeBar component, also use the useSelector hook to access the first site name 
// from the sites data.


import React from 'react';
import { useSelector } from 'react-redux';

function TypeBar() {
  const sites = useSelector((state) => state.sites);
  const siteName = sites.length > 0 ? sites[0].site_name : '';

  return (
    <div>
      <h2>{siteName}</h2>
    </div>
  );
}

export default TypeBar;

// That's it! With these changes, the SitesList and TypeBar
//  components are now using the sites data from the Redux store, and 
//  the fetchSites action is responsible for fetching the data from the server and updating the store.