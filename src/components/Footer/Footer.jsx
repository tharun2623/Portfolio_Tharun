import './Footer.css';
import { iconData } from '../../data/HeaderIconData';
import { socialiconData } from '../../data/SocialIconData.jsx';

export const Footer = () => {
    
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Tharun Prasaath R</h1>

                <ul className="footer__list">
                    {iconData.map((link, index) => {
                        return(
                            <li key={index}>
                                <a href={`#${link.href}`} className="footer__link">
                                    {link.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <div className='footer__social'>
                    {socialiconData.map((item, index) => {
                        return (
                            <a href={item.link} className="footer__social-link" target={"_blank"} key={index}>
                                <i className={`uil uil-${item.icon}`}></i>
                            </a>
                        )
                    })}
                </div>
                <span className="footer__copy">&#169; Tharun Prasaath, All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
