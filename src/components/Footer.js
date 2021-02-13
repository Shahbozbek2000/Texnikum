import React from 'react'
import './Footer.css'

export  function Footer() {
    return (
       <footer className='footer'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-12 col-sm-4'>
                 <ul className='nav-list'>
                    <li className='nav-list-dashed'>TEXNIKUM</li>
                    <li>Rektor tabrigi</li>
                    <li>Universitet nizomi</li>
                    <li>Me'yoriy hujjatlar</li>
                    <li>Umumiy ma'lumot</li>
                    <li>Onlayn murojaat</li>
                    <li>Bog'lanish</li>
                 </ul>
              </div>
              <div className='col-lg-3 col-md-6 col-12 col-sm-4'>
                 <ul className='nav-list'>
                    <li className='nav-list-dashed'>TUZILMA</li>
                    <li>Rektorat</li>
                    <li>Kengashlar</li>
                    <li>Filiallar</li>
                    <li>Kafedralar</li>
                    <li>Markaz va bo'limlar </li>
                    
                 </ul>
              </div>
              <div className='col-lg-3 col-md-6 col-12 col-sm-4'>
                 <ul className='nav-list'>
                    <li className='nav-list-dashed'>TALABA </li>
                    <li>Stipendiya va grantlar</li>
                    <li>Elektron dekanat</li>
                    <li>Elektron kutubxona</li>
                    <li>Edu-Test</li>
                    <li>ACM</li>
                   
                 </ul>
              </div>
              <div className='col-lg-3 col-md-6 col-12 col-sm-4'>
                 <ul className='nav-list'>
                    <li className='nav-list-dashed'>YANGILIKLAR</li>
                    <li>E'lonlar</li>
                    <li>Tadbirlar</li>
                    <li>Bizning yutuqlar</li>
                    <li>OAV biz haqimizda</li>
                    <li>Fotogalereya</li>
                    <li>Infografika</li>
                 </ul>
              </div>
            </div>
          </div>
       </footer>
    )
}
