import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link, Router, useParams } from "react-router-dom";
import { Button, Modal } from 'antd';
import { MainContext } from './Context';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import "./Country.css"
import { alpha } from '@mui/material';
function Country() {
  const { theme, loading, setLoading, countries, setCountries } = useContext(MainContext)
  const [country, setCountry] = useState([])
  const { cca3 } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(
    () => {
      axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`)
        .then((res) => { setCountry(res.data); setLoading(false) })
        .catch(er => "bir hata olustu")
    }, [cca3]
  )
  if (loading) {
    return <h2> <Spin indicator={antIcon} /></h2>
  }
  const borders = country.map(item => item.borders);
  return (
    <div key={country.map(item => item.lndg)} className='Country' style={theme}>
      <div><Link style={theme} to="/">Geri qayit</Link></div>
      {country.map(item => {
        return (
          <div className="Country-all">
            <div className="Country-head">
              <div className="Respublic">Respublic of:{item.name.common}</div>
              <div className="Modal">
                <Button type="primary" onClick={showModal}>
                  Vacib qeyd
                </Button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <div>{item.borders == null ? <span>Bu olkenin serhed olkeleri yoxdur</span> : null}</div>
                  <div>{item.name.common} google maps linki:</div>
                  <a target="_blank" href={item.maps.googleMaps}>google maps linki</a>
                </Modal>
              </div>
            </div>
            <div className="Country-main">
              <div className="accordion" id="accordionExample">
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Paytaxt
                    </button>
                  </h2>
                  <div style={theme} id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div style={theme} className="accordion-body">
                      {item.capital}
                    </div>
                  </div>
                </div>
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Bayraq
                    </button>
                  </h2>
                  <div style={theme} id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div style={theme} className="accordion-body">
                      <img src={item.flags.png} alt="" />
                    </div>
                  </div>
                </div>
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Gerb
                    </button>
                  </h2>
                  <div style={theme} id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div style={theme} className="accordion-body">
                      <img src={item.coatOfArms.png} alt="" />
                    </div>
                  </div>
                </div>
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                      Əhali sayı
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      {item.population}
                    </div>
                  </div>
                </div>
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                      Ərazi
                    </button>
                  </h2>
                  <div style={theme} id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div style={theme} className="accordion-body">
                      {item.area}km²
                    </div>
                  </div>
                </div>
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseThree">
                      Müstəqil
                    </button>
                  </h2>
                  <div style={theme} id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div style={theme} className="accordion-body">
                      {item.independent == false ? "false" : "true"}
                    </div>
                  </div>
                </div>
                <div style={theme} className="accordion-item">
                  <h2 className="accordion-header">
                    <button style={theme} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseThree">
                      Sərhəd ölkələri
                    </button>
                  </h2>
                  <div style={theme} id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div style={theme} className="accordion-body">
                      <div style={theme} id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div style={theme} className="accordion-body">
                          {borders && borders[0] && borders[0].length > 0 ? (
                            borders[0].map((border) => (
                              <div className='bor' key={border}>
                                <Link to={`/country/${border}`}>
                                  <div>{border}</div>
                                </Link>
                              </div>
                            ))
                          ) : (
                            <span>Bu olkenin serhed olkesi yoxdur.</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Country;
