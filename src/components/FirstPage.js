import React from 'react'
import { Cards } from './Cards'
import { NewsElements } from './NewsElements'
import { Students } from './Students'
import {Slider} from './Slider'


export  function FirstPage() {
    return (
        <div>
        <Slider/>
        <Cards/>
        <Students/>
        <NewsElements/>
        </div>
    )
}
