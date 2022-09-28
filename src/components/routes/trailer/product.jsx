import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai';
import { advertisemnts } from '../../data/iklan';
import { useTranslation } from 'react-i18next';
import { RiCloseLine } from 'react-icons/ri';
import {  BackPage, Footer } from '../index';
import { TiArrowBack } from 'react-icons/ti';

import mataDewa from './trailer-pict/mata_dewa.jpg';
import idris from './trailer-pict/idris_sardi.jpg';
import sofi from './trailer-pict/sofi.jpg';
import fendi from './trailer-pict/fendi.jpg';

import Button from '../../Button/button';
import logo from '../../assets/bawor/LOGO PT VERSI 2 WEB.png';

import '../navbar/navRoute.css';
import './trailer.css';
const Trailer = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const clickLanguages = (lang) => {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <BackPage href={'/'} icons={<TiArrowBack />} />
      <div className="header-bg">
          <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" className='icons'/>
          </div>
          <menu>
          <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
            <li><a href="/#about">About</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/#our-teams">Teams</a></li>
            <li><a href="/our-product">Product</a></li>
            <li><a href="/#support">Support</a></li>
            <li><a href="/#social-media">Social Media</a></li>
            <li><a href="/#contact">Contact</a></li>
            
            <li className="nav-btn">
            <Button text={"Questions"} btnClass={"btn-dark"} href={"#faq"}/>
            </li>
          </ul>
          </menu>
          <div className="menu-icons" onClick={toggleMenu}>
          {
              showMenu ? (<RiCloseLine color='#fff' size={30}/>) : (<AiOutlineBars color='#fff' size={27}/>)
          }
          </div>
          <div className='translate'>
            <h2>Translate</h2>
            <button onClick={() => clickLanguages('en')} className='btn btn-translate'>English</button>
            <button onClick={() => clickLanguages('id')} className='btn btn-translate'>Indonesia</button>
          </div>
        </nav>
        <section className='container trailer'>
            <div className="header__trailer">
              <h1 className='title__trailer'>TRAILER</h1>
            </div>
        </section>
      </div>
        <section id='description' className='header-bg container'>
          <p className='title__product'>Description Films</p>
          <div className='film__content'>
            <div className='left-content'>
              <img src={mataDewa} alt='trailer pict' className='image__trailer' />
            </div>
            <div className='right-content'>
              <h2 className='title__film'>{t('trailer.mata_dewa.title')}</h2>
              <p className='about__film'><b>Director : </b>{t('trailer.mata_dewa.director')}</p>
              <p className='about__film'><b>Write Script : </b>{t('trailer.mata_dewa.writeScript')}</p>
              <p className='about__film'><b>producer : </b>{t('trailer.mata_dewa.producer')}</p>
              <p className='about__film'><b>cast : </b>{t('trailer.mata_dewa.cast')}</p>
              <p className='about__film'><b>aired : </b>{t('trailer.mata_dewa.aired')}</p>
              <p className='about__film'><b>episode : </b>{t('trailer.mata_dewa.episode')}</p>
              <p className='about__film'><b>duration : </b>{t('trailer.mata_dewa.duration')}</p>
              <p className='about__film'><b>production : </b>{t('trailer.mata_dewa.Production')}</p>
              <p className='about__film'><b>sinopsis : </b>{t('trailer.mata_dewa.sinopsis')}</p>
              <Button text={'Watch Trailer'} btnClass={'btn-trailer'} href={'https://youtu.be/y_-0Vbv-2gs'} />
            </div>
          </div>
          <div className='film__content'>
            <div className='left-content'>
              <h2 className='title__film'>{t('trailer.idris.title')}</h2>
              <p className='about__film'><b>Director : </b>{t('trailer.idris.director')}</p>
              <p className='about__film'><b>Write Script : </b>{t('trailer.idris.writeScript')}</p>
              <p className='about__film'><b>producer : </b>{t('trailer.idris.producer')}</p>
              <p className='about__film'><b>cast : </b>{t('trailer.idris.cast')}</p>
              <p className='about__film'><b>aired : </b>{t('trailer.idris.aired')}</p>
              <p className='about__film'><b>episode : </b>{t('trailer.idris.episode')}</p>
              <p className='about__film'><b>duration : </b>{t('trailer.idris.duration')}</p>
              <p className='about__film'><b>production : </b>{t('trailer.idris.Production')}</p>
              <p className='about__film'><b>sinopsis : </b>{t('trailer.idris.sinopsis')}</p>
              <div className='button__trailer'>
                <Button text={'Watch Trailer'} btnClass={'btn-trailer'} href={'https://youtu.be/p-kebyL0wsQ'} />
              </div>
            </div>
            <div className='right-content'>
              <img src={idris} alt='trailer pict' className='image__trailer' />
            </div>
          </div>
          <div className='film__content'>
            <div className='left-content'>
              <img src={sofi} alt='trailer pict' className='image__trailer' />
            </div>
            <div className='right-content'>
              <h2 className='title__film'>{t('trailer.sofi.title')}</h2>
              <p className='about__film'><b>Based On Story By : </b>{t('trailer.sofi.special')}</p>
              <p className='about__film'><b>Director : </b>{t('trailer.sofi.director')}</p>
              <p className='about__film'><b>Write Script : </b>{t('trailer.sofi.writeScript')}</p>
              <p className='about__film'><b>producer : </b>{t('trailer.sofi.producer')}</p>
              <p className='about__film'><b>cast : </b>{t('trailer.sofi.cast')}</p>
              <p className='about__film'><b>aired : </b>{t('trailer.sofi.aired')}</p>
              <p className='about__film'><b>episode : </b>{t('trailer.sofi.episode')}</p>
              <p className='about__film'><b>duration : </b>{t('trailer.sofi.duration')}</p>
              <p className='about__film'><b>production : </b>{t('trailer.sofi.Production')}</p>
              <p className='about__film'><b>sinopsis : </b>{t('trailer.sofi.sinopsis')}</p>
              <Button text={'Watch Trailer'} btnClass={'btn-trailer'} href={'https://youtu.be/JAtLtNredfY'} />
            </div>
          </div>
          <div className='film__content'>
            <div className='left-content'>
              <h2 className='title__film'>{t('trailer.idris.title')}</h2>
              <p className='about__film'><b>Director : </b>{t('trailer.idris.director')}</p>
              <p className='about__film'><b>Write Script : </b>{t('trailer.idris.writeScript')}</p>
              <p className='about__film'><b>producer : </b>{t('trailer.idris.producer')}</p>
              <p className='about__film'><b>cast : </b>{t('trailer.idris.cast')}</p>
              <p className='about__film'><b>aired : </b>{t('trailer.idris.aired')}</p>
              <p className='about__film'><b>episode : </b>{t('trailer.idris.episode')}</p>
              <p className='about__film'><b>duration : </b>{t('trailer.idris.duration')}</p>
              <p className='about__film'><b>production : </b>{t('trailer.idris.Production')}</p>
              <p className='about__film'><b>sinopsis : </b>{t('trailer.idris.sinopsis')}</p>
              <Button text={'Watch Trailer'} btnClass={'btn-trailer'} href={'https://youtu.be/'} />
            </div>
            <div className='right-content'>
              <img src={fendi} alt='trailer pict' className='image__trailer' />
            </div>
          </div>
        </section>
        <section className='header-bg container' id='iklan'>
          <p className='title__product'>{t('iklan.title')}</p>
            <div className='list__iklan'>
            {advertisemnts.map(advertisemnt => {
              return (
                    <div class="container__iklan">
                    <img src={advertisemnt.image} alt={advertisemnt.alt} class="iklan__image" />
                    <div class="overlay__iklan">
                      <div class="text"><a href={advertisemnt.link}>Watch</a></div>
                    </div>
                  </div>
              )
            })}
            </div>
        </section>                                                                                                                                                               
      <Footer />
    </>
  )
}

export default Trailer