import { useSelector } from "react-redux";
import "./footer.scss";
const Footer = () => {
  const { socials, theme } = useSelector((state) => state.data);

  return (
    <div className={`cont footer ${theme == 'light' && 'border-top'} pt-5 pb-2`} style={{backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)'}}>
      <div className="d-flex footer-wrap1 justify-content-between">
        <div className="footer-wrap1__info">
          <h3>Shoxrux Toxirov</h3>
          <p className={`${theme == 'light' && 'text-dark'} fs-6`}>
            Fullstack dasturchi
          </p>
          <div className="d-flex flex-column footer-wrap1__info-contacts">
            <a
              className={`${theme == 'dark' ? 'text-light' : "text-dark"} text-decoration-none`}
              href="mailto:  tohirovshohruxbek@gmail.com"
            >
              <i className="fa fa-envelope me-2"></i>
              tohirovshohruxbek@gmail.com
            </a>
            <a
              className={`${theme == 'dark' ? 'text-light' : "text-dark"} text-decoration-none`}
              href="tel: +998887476737"
            >
              <i className="fa fa-phone me-2"></i>
              +998(88)205-20-05
            </a>
          </div>
        </div>
        <div className="footer-wrap1__socials">
          <h3>Ijtimoiy tarmoqlar</h3>
          <ul className="justify-content-end">
            {socials &&
              socials.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <i className={`fab ${theme == 'light' && 'text-dark'} ${item.icon}`}></i>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-wrap2 text-center pt-3">
        <p className={theme == 'light' ? 'text-dark' : ''}>© Copyright 2025. Toxirov Shoxrux</p>
      </div>
    </div>
  );
};

export default Footer;
