import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainContext, themes } from './Components/Context';
import DarkMode from './Components/DarkMod';
import Country from './Components/Country';
import All from './Components/All';
function App() {
  const [theme, setTheme] = useState(themes.light);
  const [countries, setCountries] = useState([]);
  const [select, setSelect] = useState([]);
  const[loading,setLoading]=useState(true)
  const[spin,setSpin]=useState("")
  const data = {
    theme,
    setTheme,
    countries,
    setCountries,
    select,
    setSelect,
    loading,
    setLoading,
    spin,
    setSpin
  };

  return (
    <MainContext.Provider value={data}>
      <BrowserRouter>
        <div style={theme} className='App'>
          <DarkMode />
          <Routes>
            <Route path='/' element={<All/>} />
            <Route path='/country/:cca3' element={<Country />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
