import style from './ContactsInformation.module.scss';
import { icons as sprite } from 'shared/icons/index';

const ContactsInformation = () => {
  return (
    <div>
      <div className={style.separatorLine}></div>
      <ul className={style.contactList}>
        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-mail`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Email</h2>
            <a
              href="mailto:kr.hranovska@gmail.com"
              className={style.contactInform}
            >
              kr.hranovska@gmail.com
            </a>
          </div>
        </li>

        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-smartphone`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Phone</h2>
            <a href="tel:+380500833605" className={style.contactInform}>
              +38 (050) 083-36-05
            </a>
          </div>
        </li>

        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-calendar`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Birthday</h2>
            <p className={style.contactInform}>December 22, 1993</p>
          </div>
        </li>

        <li className={style.contactItem}>
          <div className={style.thumbIcon}>
            <svg className={`${style.iconContact}`} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-geo`} />
            </svg>
          </div>
          <div>
            <h2 className={style.titleContact}>Location</h2>
            <p className={style.contactInform}>Ukraine, Dnipro</p>
          </div>
        </li>
      </ul>
      <div className={style.separatorLine}></div>
    </div>
  );
};

export default ContactsInformation;
