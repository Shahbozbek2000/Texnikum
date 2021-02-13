import React from "react";
import Data from "../Data.json";
import News from './News'
import Fade from 'react-reveal/Fade'
import './News.css'

export function NewsElements() {
  const products = Data.products
  return (

    
    <div className="news-wrapper">
     <div className="container">
     <Fade right cascade>
      <h2 className='text-center text-uppercase'
      >So'nggi yangiliklar</h2>
      </Fade>
      <hr className='mb-5' />
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xs-8" key={index} >
              <News product={product}  />
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
