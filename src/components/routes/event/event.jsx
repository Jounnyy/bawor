import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { galleryEvent } from '../../data/galleryEvent.js';
import { NavbarRoute, BackPage, Footer } from '../index.js';
import { sliderData } from '../../data/sliderData';
import { TiArrowBack } from 'react-icons/ti';
import './event.css';

const Event = ({slides}) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1)
  const prevSlise = () => setCurrent(current === 0 ? length - 1 : current - 1)

  if(!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <>
    <BackPage href={'/'} icons={<TiArrowBack />}/>
    <div className='header-bg'>
      <NavbarRoute />
      <section className='slider container'>
      <FaArrowLeft className='left-arrow' onClick={prevSlise}/>
      <FaArrowRight className='right-arrow' onClick={nextSlide} />
      {sliderData.map((slide, i) => {
        return (
        <div className={i === current ? 'slide active' : 'slide'} key={i}>
          {i === current && (
            <img src={slide.image} alt="event image" className='image__slider' />
          )}
        </div>
        )
      })}
      </section>
    </div>
    <section className="container">
      <h2 className='title__event'>Gallery Event</h2>
        <div className='full__gallery'>
          {galleryEvent.map((gallery, i) => {
            return <img src={gallery.image} alt={gallery.alt} className='img__gallery' />
          })}
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Event 