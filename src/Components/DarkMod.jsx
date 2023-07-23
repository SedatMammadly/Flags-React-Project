import React, { useContext } from 'react';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { MainContext, themes } from './Context';

function DarkMod() {
  const { theme, setTheme } = useContext(MainContext); // useContext kullanarak theme değerini al

  const mode = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <div style={theme} className="DarkMod">
      {theme === themes.dark ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
      <Switch defaultChecked color="default" onClick={mode} />
    </div>
  );
}

export default DarkMod;
