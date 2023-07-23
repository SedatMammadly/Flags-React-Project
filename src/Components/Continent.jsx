import React, { useContext, useEffect} from 'react';
import { MainContext } from './Context';
import "./Continent.css"
function Continent() {
  const { countries, setCountries,select, setSelect  } = useContext(MainContext);

  const continent = (e) => {
    const contentfilter = select.filter((item) => item.region=== e)
    setCountries(contentfilter);
  };
  function showAll() {
    setCountries(select);
  }
  return (
    <div className="cont">
      <button onClick={showAll}>All</button>
      <button onClick={()=>continent("Europe")}>Europe</button>
      <button onClick={()=>continent("Asia")}>Asia</button>
      <button onClick={()=>continent("Americas")}>Americas</button>
      <button onClick={()=>continent("Africa")}>Africa</button>
      <button onClick={()=>continent("Antarctic")}>Antarctic</button>
    </div>
  );
}

export default Continent;
