import React from 'react';
import { FaFacebookF, FaInstagram, FaGooglePlusG, FaTwitter } from 'react-icons/fa';

/* CSS */
import './../sass/Footer.scss'

/* IMAGE */
// import Location from '../images/location.png'

function Footer() {
    return (
        <footer id='rodape'>
            {/* <img className='location' src={Location} alt="Localização" /> */}
            <div className='footer-infos'>
                <table>
                    <tbody>
                        <tr>
                            <td className='first'>ENDEREÇO</td>
                            <td><address>R. Nossa Senhora de Fátima nº816<br />Russas, CE<br />Brasil</address></td>
                        </tr>
                        <tr>
                            <td className='first'>CONTATO</td>
                            <td>(88) 90000-0000</td>
                        </tr>
                        <tr>
                            <td  className='first'>E-MAIL</td>
                            <td>x.academia@gmail.com</td>
                        </tr>
                        <tr>
                            <td className='first'>MÍDIAS</td>
                            <td>
                                <a href="#"><FaFacebookF/></a>
                                <a href="#"><FaInstagram/></a>
                                <a href="#"><FaGooglePlusG/></a>
                                <a href="#"><FaTwitter/></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </footer>
    );
}

export default Footer;