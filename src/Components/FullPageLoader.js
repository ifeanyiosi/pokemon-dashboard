import React from 'react'
import spinner from './../img/spinner.gif'
import './fullpageloader.css'

function FullPageLoader() {
  return (
    <div className='fp-container'>
        <img src={spinner} className='fp-loader' alt="" />
    </div>
  )
}

export default FullPageLoader