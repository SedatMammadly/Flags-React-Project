import React, { createContext } from 'react'
export const themes={
    dark:{
      background:"#383838",
      color:"#fff"
    },
    light:{
      background:"#fff",
      color:"#383838"
    }
  }
export const MainContext=createContext()