import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe } from "react-icons/fa";
import logo from  '../../assets/bawor/LOGO PT VERSI 2 WEB.png';
import '../../pages/css/footer.css';

export default function Footer(){
    return(
        <>
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
                <a>&bull; Kelinda Studio</a>
                <a>&bull; Radepa Studio</a>
                <a>&bull; Edison Taslim</a>
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