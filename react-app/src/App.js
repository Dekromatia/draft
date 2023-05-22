// import logo from './logo.svg';
import './App.css';
// import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";

// import SitesList from './components/SitesList';
// import ManufactsList from './components/ManufactsList';
// import AlldbList from './components/AlldbList';

// import useFetchSites from './hooks/useFetchSites';
// import useFetchManufacts from './hooks/useFetchManufacts';
// import useFetchAlldb from './hooks/useFetchAlldb';

// import Header from './components/Header';
// import Footer from './components/Footer';

import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';

function App() {
  // const sites = useFetchSites();
  // const manufacts = useFetchManufacts();
  // const items = useFetchAlldb();


  return (
    <BrowserRouter>
      <div className="App"> 
        <NavBar/>
        <AppRouter/>
        {/* <SitesList sites = {sites}/>
        <ManufactsList manufacts = {manufacts}/> */}
        {/* <AlldbList items={items} /> */}
        
      </div>
    </BrowserRouter>
  );
};

export default App;


        
          {/* <Header lal/> */}
          {/* <AlldbList items={items} /> */}

            {/* <SitesList sites = {sites}/> */}
            {/* <ManufactsList manufacts = {manufacts}/> */}

      {/* <Footer /> */}

      {/* <h1>Амфорные клейма</h1> */}
      {/* <SitesList sites = {sites}/> */}