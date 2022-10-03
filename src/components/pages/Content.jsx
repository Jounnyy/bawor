import React, { useState, useEffect, useRef } from 'react';
import { FaInstagram , FaYoutube, FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { AiOutlineBars, AiOutlineCopy, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from "react-icons/fa";
import { MdOutlineLibraryBooks } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsMouse, BsWhatsapp } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { RiCloseLine } from "react-icons/ri";
import { questions } from '../data/faq';
import { teams } from '../data/teams';

import baworDigitalMarketing from '../assets/bawor/bawor_digital_marketing.png';
import baworDigital from '../assets/bawor/Bawor Digital.png';
import baworGraphic from '../assets/bawor/Bawor Graphic.png';
import baworNews from '../assets/bawor/Bawor News.png';
import baworInternasional from '../assets/bawor/Bawor Internasional.png';
import baworEventOrganizer from '../assets/bawor/bawor_event_oraganizer.png';
import baworAdvertising from '../assets/bawor/Logo Logo sub bawor-02.png';
import baworPublishing from '../assets/bawor/Logo Logo sub bawor-03.png';
import baworFilm from '../assets/bawor/Logo Logo sub bawor-01.png';
import kelinda from '../assets/bawor/Kelinda_logo_support.jpeg';
import logo from '../assets/bawor/LOGO PT VERSI 2 WEB.png';
import radepaStudio from '../assets/bawor/rad.png';
import aboutPict from '../assets/bawor/about.png';
import homeLogo from '../assets/bawor/logo.png';
import bawortv from '../assets/bawor/tv.png';
import Address from '../assets/address.png';
import Phone from '../assets/phone.png';
import Email from '../assets/email.png';
import emailjs from '@emailjs/browser';
import Button from '../Button/button';
import Wa from '../wa/wa';
import AOS from 'aos';

import './css/social-media.css';
import '../Button/button.css';
import './css/support.css';
import './css/contact.css';
import './css/navbar.css';
import './css/footer.css';
import './css/about.css';
import './css/teams.css';
import './css/home.css';
import './css/faq.css';
import 'swiper/css';


const Question = ({title, answer}) => {
  const [ showAnswer, setShowAnswer ] = useState(false)

  const handleClick = () =>  {
    setShowAnswer(!showAnswer);
  }
  return (
    <div className='container question'>
      <div className='question-title' data-aos="zoom-in-right">
          <h4>{title}</h4>
          <button className='question-icons' onClick={handleClick}>
              {
                  showAnswer ? (<AiOutlineMinus color='red' />) : (<AiOutlinePlus color='#1f93ff'/>)
              }
          </button>
      </div>
      <div className='question-answer'>
          {showAnswer && <p className='u-text-small'>{answer}</p>}
      </div>
    </div>
  )
}

const Content = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const [ showMenu, setShowMenu ] = useState(false);
  const { t, i18n } = useTranslation();

  const clickLanguages = (lang) => {
    i18n.changeLanguage(lang);
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: false
    })
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_034115a', 'template_8s1613w', formRef.current, 'Mhdojrw6KwM7MDpaH')
    .then((result) => {
      setDone(true)
      console.log(result)
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <>
    <Wa href={'https://wa.me/message/ETB7HHEQEEWAF1'} icon={<BsWhatsapp />}/>
      <div className="header-bg">
          <nav className="navbar">
              <div className="logo">
                <img src={logo} alt="Logo" className='icons'/>
              </div>
              <menu>
              <ul className="nav-links" id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}>
                <li><a href="#about">About</a></li>
                <li><a href="/event">Event</a></li>
                <li><a href="/our-product">Product</a></li>
                <li><a href="#our-teams">Teams</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#social-media">Social Media</a></li>
                <li><a href="#contact">Contact</a></li>
                
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
          <section id="home">
            <div className="container header">
              <div className="header-left" data-aos="zoom-in-up"  data-aos-duration='3000'>
                <h1>
                  <span data-aos="fade-up-right" data-aos-duration='1500'>{}</span>
                  <span data-aos="fade-up-right" data-aos-duration='1500'>PT. BAWOR SENI</span>
                  <span data-aos="fade-up-right" data-aos-duration='1500'>INTERNASIONAL</span>
                </h1>
                  <p className="u-text-small u-text-light" data-aos="fade-up-right" data-aos-duration='1500'>
                    {t('home.desc')}
          a        </p>
            <div className="header-cta" data-aos='fade-up' data-aos-duration='2500'>
              <Button text={"About Company"} btnClass={"btn-white"} href={"#about"}/>
              <Button text={"Our Gallery"} btnClass={"btn-orange"} href={"#gallery"}/>
            </div>
          </div>
            <div className="header-right" data-aos="zoom-in-left" data-aos-duration="3000">
              <img src={homeLogo} alt="Bawor"/>
            </div>  
          </div>
          <div className="floating-icons">
            <a href="#about">
              <BsMouse color="#000" size={25} className="mouse" />
            </a>
          </div>
        </section>
      </div>
      <section className='feature' id='about'>
        <div className="features-content">
        <div className="features">
          <div className='u-title' data-aos="fade-down" data-aos-duration="2500">
            <AiOutlineCopy color='orangered' size={40}/>
            <h2>About Us</h2>
            <p className='u-text-small u-text-dark'>
              {t('about.info')}
            </p>
          </div>
            <div className="features-left" data-aos="fade-up">
              <img src={aboutPict} alt="about picture"/>
            </div>
            <div className="features-right" data-aos="fade-up" data-aos-duration="4000">
              <div className="feature">
                <div className='feature-text'>
                    <p className="u-text-small">
                      {t('about.text')}
                    </p>
                    <br />
                    <p className='u-text-small'>
                      {t('about.text2')}
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="social-media" className='subscribe'>
      <h2 data-aos='fade-down'data-aos-duration='3000' >Social Media</h2>  
      <div className="social-icons">
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='1000'>
          <a className="youtube" href="https://youtube.com/channel/UCuMXlOSncSFQ_l7aWO4Bzzw"><FaYoutube /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='1500'>
          <a className="twitter" href="https://mobile.twitter.com/ptbsi"><FaTwitter /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='2000'>
          <a className="linkedin" href="https://www.linkedin.com/mwlite/in/bawor-seni-internasional-325720248"><FaLinkedinIn /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='2500'>
          <a className="instagram" href="https://www.instagram.com/ptbaworseniinternasional/"><FaInstagram /></a>
        </div>
        <div className='social-icon' data-aos="zoom-in-up" data-aos-duration='3000'>
          <a className="facebook" href="https://m.facebook.com/PTbaworseniinternasional"><FaFacebookF /></a>
        </div>
      </div>
      </section>
      <section id="support" className='container logo__support'>
        <h2 data-aos='fade-up'data-aos-duration='3000'>Bawor Group</h2>
              <div class="container">
                <div className='support__list'>
                  <div class="container__support" data-aos="zoom-in-down" data-aos-duration='3000'>
                  <img src={baworFilm} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor Films</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1500'>
                  <img src={baworAdvertising} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor Advertising</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1000'>
                  <img src={baworPublishing} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor Publishing</div>
                  </div>
                </div>
                </div>
                <div className='support__list'>
                  <div class="container__support" data-aos="zoom-in-down" data-aos-duration='3000'>
                  <img src={baworDigital} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor Digital</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1500'>
                  <img src={baworGraphic} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor Graphic</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1000'>
                  <img src={baworInternasional} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor Internasional</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1000'>
                  <img src={baworNews} alt="Avatar" class="image" />
                  <div class="overlay">
                    <div class="text">Bawor News</div>
                  </div>
                </div>
                </div>
                <div className='support__list'>
                  <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1000'>
                  <img src={baworDigitalMarketing} alt="Avatar" class="image__bawor" />
                  <div class="overlay__bawor">
                    <div class="text">Bawor Digital Marketing</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1000'>
                  <img src={baworEventOrganizer} alt="Avatar" class="image__bawor" />
                  <div class="overlay__bawor">
                    <div class="text">Bawor Event Organizer</div>
                  </div>
                </div>
                <div class="container__support" data-aos="zoom-in-down" data-aos-duration='1000'>
                  <img src={bawortv} alt="Avatar" class="image__bawor" />
                  <div class="overlay__bawor">
                    <div class="text">Bawor Tv</div>
                  </div>
                </div>
                </div>
                <h2 data-aos='fade-down'data-aos-duration='3000'>Our Support</h2>
                  <div class="support__list">
                    <div class="container__support" data-aos="zoom-in-down" data-aos-duration='2500'>
                      <img src={kelinda} alt="Avatar" class="image" />
                      <div class="overlay">
                        <div class="text">Kelindan Studio</div>
                      </div>
                    </div>
                    <div class="container__support" data-aos="zoom-in-down" data-aos-duration='2000'>
                      <img src={radepaStudio} alt="Avatar" class="image" />
                      <div class="overlay">
                        <div class="text">Radepa Studio</div>
                      </div>
                    </div>
                  </div>
              </div>
      </section>
      <section class="review" id="our-teams">
            <h1 class="heading">
                Our Teams
            </h1>
            <Swiper
              data-aos="fade-up"
              data-aos-duration="3000"
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log()}
              onSwiper={() => console.log()}
              breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },
              768: {
                width: 768,
                slidesPerView: 2,
              },
            }}
              >
                  {teams.map((team) => {
                      return(
                      <SwiperSlide>
                         <div className='review-slider'>
                          <div class="box">
                              <img src={team.image} alt={team.name} />
                              <h3>{team.name}</h3>
                              <h4>{team.email}</h4>
                              <h4>{team.jabatan}</h4>
                              <p>{team.desc}</p>
                          </div>
                         </div>
                      </SwiperSlide>
                      )
                  })}
              </Swiper>
      </section>
      <section id='faq'>
        <div className="container faq">
          <div className='u-title' data-aos="zoom-in-down">
          <MdOutlineLibraryBooks color="orangered" size={30}/>
            <h2 data-aos='fade-down'>FaQ</h2>
            <p className='u-text-small u-text-dark' data-aos='fade-up'>
              {t('faq.desc')}
            </p>
          </div>
          <div className='questions'>
            {
              questions.map((question) => (
                <div data-aos="zoom-in-right" >
                  <Question title={question.title} answer={question.answer} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="c" id='contact'>
        <div className="c-bg"></div>
        <div className="c-wrapper container">
          <div className="c-left">
            <h1 className="c-title">Contact</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="phone" className="c-icon" />
                +62 812 410 2214
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="email" />
                baworseniinternasional@gmail.com 
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="location" />
                Ruko Golden Madrid Blok D no 26 Room 885
                Jl. Letnan Sutopo BSD Cit, Serpong
                Tangerang Selatan Banten 15310 
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>ada pertanyaan / saran?</b> Bisa menngisi form yang ada di bawah ini...
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder="Nama Anda..." name="user_name"  />
              <br/>
              <input type="text" placeholder="Subject..." name="user_subject"  />
              <br/>
              <input type="text" placeholder="Email Anda..." name="user_email" />
              <textarea  rows="5" placeholder="Ketik Pesan Anda..." name="message"  />
              <button className="btn btn-orange">Submit</button>
              {done && "Submited!"}
            </form>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="container footer">
          <div className="footer-box">
            <h4>Email Bawor Group</h4>
            <div className="footer-links">
              <a href="mailto:infoofficer@bawsein.net">&bull; infoofficer@bawsein.net</a>
              <a href="mailto:baworfilms@bawsein.net">&bull; baworfilms@bawsein.net</a>
              <a href="mailto:bawordigmark@bawsein.net">&bull; bawordigmark@bawsein.net</a>
              <a href="mailto:baworpublishing@bawsein.net">&bull; baworpublishing@bawsein.net</a>
              <a href="mailto:bawortv@bawsein.net">&bull; bawortv@bawsein.net</a>
              <a href="mailto:baworads@bawsein.net">&bull; baworads@bawsein.net</a>
            </div>
          </div>
          <div className="footer-box">
            <h4>Support</h4>
            <div className="footer-links">
              <a>&bull; Kelindan Studio</a>
              <a>&bull; Radepa Studio</a>
            </div>
          </div>
          <div className="footer-box">
            <h4>Contact Us</h4>
            <div className="footer-contact u-text-small">
              <p>
                <FaMapMarkerAlt /> &nbsp; Jl. Letnan Sutopo BSD Cit, Serpong Tanggerang Selatan Banten 15310
              </p>
              <p>
                <FaPhoneAlt /> &nbsp; 0812 410 2214 
              </p>
              <p>
                <FaFax /> &nbsp; (021) 53160529
              </p>
              <p>
                <FaEnvelope /> &nbsp; baworfilms@gmail.com  
              </p>
              <p>
                <FaGlobe /> &nbsp; www.baworseniinternasional.net   
              </p>
            </div>
          </div>
          <div className="footer-box">
            <img src={logo} alt="logo" className='logo__footer' />
            <p className="u-text-small">&copy; Copyright {new Date().getFullYear()} PT.Bawor Internasional</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content