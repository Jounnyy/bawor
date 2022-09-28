import React, { useState } from 'react'
import { BackPage, Footer } from '../../index';
import { useTranslation } from 'react-i18next';
import { RiCloseLine } from 'react-icons/ri';
import { AiOutlineBars } from 'react-icons/ai';
import { TiArrowBack } from 'react-icons/ti';

import logo from '../../../assets/bawor/LOGO PT VERSI 2 WEB.png';
import logoDark from '../../../assets/bawor/logo.png';
import Button from '../../../Button/button';
import sofi from '../assets/sofi.jpg';
import dewa from '../assets/dewa.jpg';
import filmDewa from '../assets/film dewa.jpg';
import kenny from '../assets/kenny.jpg';

import './contentNews.css';

const MataDewa = () => {
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
      <BackPage href={'/news'} icons={<TiArrowBack />}/>
      <div className='header-bg'>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" className='icons'/>
          </div>
          <menu>
          <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
            <li><a href="/#about">About</a></li>
            <li><a href="/event">Event</a></li>
            <li><a href="/our-product">Product</a></li>
            <li><a href="/#our-teams">Teams</a></li>
            <li><a href="/news">News</a></li>
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
        <div className='content__news container'>
          <div className='content__news__left'>
            <div className='title__content__news'>
              <h2>{t('news.news_2.title')}</h2>
            </div>
            <div className='content__image__news'>
              <img src={dewa} alt='main_content' className='image__news__content' />
            </div>
            <div className='content'>
              <p className='content-1'>
                {t('news.news_2.content_1')}
              </p>
              <p className='content-2'>
                {t('news.news_2.content_2')}
              </p>
            </div>
          </div>
          <div className='content__news__right'>
            <div className='logo_bawor'>
              <img src={logoDark} alt="logo bawor" />
            </div>
            <h2>Other News</h2>
            <div className='other__news'>
              <a href='/news/filo-kopi-sofi' className='other__news__box'>
                <div className='left__other__news'>
                  <img src={sofi} alt='news' className='image__other__news' />
                </div>
                <div className='right__other__news'>
                  <h2 className='other__news__title'>{t('news.news_5.title')}</h2>
                  <p className='other__news__desc'>{t('news.news_5.short_desc')}</p>
                </div>
              </a>
              <a href='/news/sinopsis-film-mata-dewa-pebasket-yang-satu-matanya-jadi-korban' className='other__news__box'>
                <div className='left__other__news'>
                  <img src={kenny} alt='news' className='image__other__news' />
                </div>
                <div className='right__other__news'>
                  <h2 className='other__news__title'>{t('news.news_4.title')}</h2>
                  <p className='other__news__desc'>{t('news.news_4.short_desc')}</p>
                </div>
              </a>
              <a href='/news/mata-dewa-perjuangan-pebasket-tanpa-mata' className='other__news__box'>
                <div className='left__other__news'>
                  <img src={filmDewa} alt='news' className='image__other__news' />
                </div>
                <div className='right__other__news'>
                  <h2 className='other__news__title'>{t('news.news_3.title')}</h2>
                  <p className='other__news__desc'>{t('news.news_3.short_desc')}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MataDewa