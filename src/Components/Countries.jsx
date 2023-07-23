import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './Countries.css';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { MainContext } from './Context';
function Countries() {
  const{theme,countries,setCountries,select,setSelect,loading,setLoading}=useContext(MainContext)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((res) => {setCountries(res.data);setSelect(res.data);setLoading(false)})
      .catch((err) => console.log('Bir hata oluştu'));
  }, []);
  if(loading){
   return <h2> <Spin indicator={antIcon} /></h2>
  }
  return (
    <div className="Country-All">
      { 
      countries.map((item) => (
        <div className='Countries' key={item.cca3}>
          <Link style={theme} to={`/country/${item.cca3}`}>
            <img src={item.flags.png} alt={item.title} />
            <p>Ölkə:{item.name.common}</p>
          Əhali sayi: 
          <CountUp duration={5} start={0} end={item.population}/>
          </Link>
      
        </div>
      ))}
    </div>
  );
}

export default Countries;
