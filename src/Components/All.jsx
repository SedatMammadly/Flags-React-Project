import React from 'react'
import Countries from './Countries'
import Continent from './Continent'
import SortCountry from './SortCountry'
import Searc from "./Searc";
function All() {
  return (
    <div>
        <Searc/>
        <Continent/>
        <SortCountry/>
        <Countries/>
    </div>
  )
}

export default All