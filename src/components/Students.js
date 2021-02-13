import React from 'react'
import CountUp from 'react-countup'
import './Students.css'

export  function Students() {
    return (
        <div className='students-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                 <div className='card-numbers'>
                  <div className='groups-number'>
                    <div className='groups-icon'>
                      <i className='fas fa-chart-pie fa-3x'></i>
                    </div>
                    <div className='group-wrapper'>
                     <h2>
                     <CountUp
                     
                     start={0}
                     end={17}
                     duration={10}
                     />
                     </h2>
                    </div>
                  </div>
                  <div className='groups-number-wrap my-2'>
                   <span>Guruhlar soni</span>
                  </div>
                </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className='card-numbers'>
                   <div className='groups-number'>
                      <div className='groups-icon'>
                        <i className='fas fa-user-graduate fa-3x'></i>
                      </div>
                      <div className='group-wrapper'>
                     <h2>
                     <CountUp 
                     
                     end={500}
                     start={0}
                     duration={10}
                     />
                     </h2>
                    </div>
                   </div>
                   <div className='groups-number-wrap my-2'>
                   <span>Jami o'quvchilar soni</span>
                  </div>
                </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className='card-numbers'>
                   <div className='groups-number'>
                      <div className='groups-icon'>
                        <i className='fas fa-trophy fa-3x'></i>
                      </div>
                      <div className='group-wrapper'>
                      <h2>
                      <CountUp
                      
                      end={21}
                      start={0}
                      duration={10}
                      />

                      </h2>
                     </div>
                   </div>
                   <div className='groups-number-wrap my-2'>
                   <span>Tamomlangan kurslar</span>
                  </div>
                </div>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
                <div className='card-numbers'>
                   <div className='groups-number'>
                      <div className='groups-icon'>
                        <i className='fas fa-user-clock fa-3x'></i>
                      </div>
                      <div className='group-wrapper'>
                      <h2>
                      <CountUp
                      end={45}
                      duration={10}
                      start={0}
                      />
                      </h2>
                     </div>
                   </div>
                   <div className='groups-number-wrap my-2'>
                   <span>Tajribali xodimlar</span>
                  </div>
                </div>
                </div>
              </div>
            </div>
        </div>
    )
}
