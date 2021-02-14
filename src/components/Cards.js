import React from "react";
import "./Cards.css";
import Fade from 'react-reveal/Fade'

export function Cards() {
  return (
    <div className="card-wrapper">
      <div className="container">
      <Fade left cascade>
       <h2 className='text-center text-uppercase' style={{textShadow:'0px 11px 10px rgba(81,67,21,0.8)'}}>Interaktiv Xizmatlar</h2>
       <hr className='mb-5'/>
       </Fade>
        <div className="row">
        <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          
            <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="far fa-newspaper fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Bo`sh ish o`rinlari</h4>
              </div>
            </div>
            
          </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          
            <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="fas fa-graduation-cap fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Fakultetlar</h4>
              </div>
            </div>
           </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="fas fa-place-of-worship fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Kafedralar</h4>
              </div>
            </div>
           
          </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          
            <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="fas fa-user-graduate fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Markaz va bo'limlar</h4>
              </div>
            </div>
           
          </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
            <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="fas fa-user-graduate fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Talabalar uchun</h4>
              </div>
            </div>
            </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="fas fa-search fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Ilmiy tadqiqotlar</h4>
              </div>
            </div>
          </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          
            <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="fas fa-medal fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Interaktiv xizmatlar</h4>
              </div>
            </div>
          
          </div>
          </Fade>
          <Fade left cascade>
          <div className="col-lg-3 col-sm-6 col-md-4 col-12 my-2">
          
            <div className="card">
              <div className="card-content">
                <div className="card-icons">
                  <i className="far fa-newspaper fa-3x"></i>
                </div>
              </div>
              <div className="card-title">
                <h4>Me'yoriy hujjatlar</h4>
              </div>
            </div>
            
          </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
