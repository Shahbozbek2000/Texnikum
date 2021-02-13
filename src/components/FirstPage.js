import React from 'react'
import { Cards } from './Cards'
import { NewsElements } from './NewsElements'
import { Students } from './Students'


export  function FirstPage() {
    return (
        <div>
        <Cards/>
        <Students/>
        <NewsElements/>
        </div>
    )
}
