import React from 'react'
import './backPage.css';
const BackPage = ({href, className , icons}) => {
  return (
    <a href={href} className={`back btn-${className}`}>{icons}</a>
  )
}

export default BackPage