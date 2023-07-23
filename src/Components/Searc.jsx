import React, { useContext, useState } from 'react'
import { MainContext } from './Context'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import "./Search.css"
function Searc() {
  const { countries, setCountries, select, setSelect,loading,setLoading, spin,setSpin } = useContext(MainContext)
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [input, setInput] = useState()
  const [disabled, setDisabled] = useState(true)
  const inputHandler = (e) => {
    setInput(e.target.value)
    e.target.value == "" ? setDisabled(true) : setDisabled(false);
  }
  const search = () => {
    setSpin(true)
    setLoading(true)
    setTimeout(() => {
      const inputFilter = select.filter((item) => item.name.common.toLowerCase().includes(input.toLowerCase()))
      setCountries(inputFilter)
      setInput("")
      setLoading(false)
      setSpin(false)
    }, 2000);
    if(input==""){
      alert("Axtaris elave et")
    }
  }
  return (
    <div className='search'>
      <input onChange={inputHandler} type="text" value={input} />
      <button disabled={disabled} onClick={search}>
        {!spin && "search"}
        {spin && <Spin indicator={antIcon} />}
        </button>
    </div>
  )
}

export default Searc