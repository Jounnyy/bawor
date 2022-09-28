import React from 'react'
import './wa.css';
const Wa = ({ icon, href }) => {
  return (
    <a href={href} className='wa'>{icon}</a>
  )
}

export default Wa