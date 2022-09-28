import React from 'react'

const button = ({text, btnClass, href, click}) => {
  return (
    <a href={href} className={`btn ${btnClass}`} onclick={click}>{text}</a>
  )
}

export default button