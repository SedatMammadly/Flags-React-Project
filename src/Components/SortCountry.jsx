import React, { useContext, useState } from 'react'
import { MainContext } from './Context'
import "./SortCountry.css"
function SortCountry() {
    const{countries,setCountries}=useContext(MainContext)
    const AZ=()=>{
        const result=[...countries].sort(function(a,b){return a.name.common.localeCompare(b.name.common)})
        setCountries(result)
    }
    const ZA=()=>{
        const result=[...countries].sort(function(a,b){ return b.name.common.localeCompare(a.name.common)})
        setCountries(result)
    }

  return (
    <div className='Sort-Country'>
        <button onClick={AZ}>A-Z</button>
        <button onClick={ZA}>Z-A</button>
    </div>
  )
}

export default SortCountry