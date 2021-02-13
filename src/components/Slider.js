import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from
"mdbreact";
import './Slider.css'

export const Slider = () => {
  return (
     <div className='carousel-wrapper'>
    <div className='wrap'></div>
   <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
        <MDBCarouselItem itemId="1" className='list'>
            <MDBView>
              <img 
                className="img-fluid"
                src="https://www.kayak.com/himg/d5/01/38/hotelsdotcom-639113-8fcc19dc_w-691907.jpg"
                alt="First slide"
              />
             
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2" className='list'>
            <MDBView>
              <img
                className="img-fluid"
                src="https://www.emerald.uz/wp-content/uploads/2018/02/87366547.jpg"
                alt="Second slide"
              />
           
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3" className='list'>
            <MDBView>
              <img
                className="img-fluid"
                src="https://gotosilkroad.com/uploads/hotels/TT/TT/Tn/14703130730.JPG"
                alt="Third slide"
              />
       
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
   </div>
  );
}

