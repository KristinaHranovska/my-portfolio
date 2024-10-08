import style from './SocialsInformations.module.scss';
import { icons as sprite } from 'shared/icons/index';

const SocialsInformations = () => {
  return (
    <div>
      <ul className={style.socialList}>
        <li className={style.thumbIcon}>
          <a href="https://t.me/krystyna_hranovska" target="_blank">
            <svg className={`${style.iconSocial}`} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-telegram`} />
            </svg>
          </a>
        </li>

        <li className={style.thumbIcon}>
          <a
            href="https://www.linkedin.com/in/krystyna-hranovska/"
            target="_blank"
          >
            <svg className={`${style.iconSocial}`} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-linkedin`} />
            </svg>
          </a>
        </li>

        <li className={style.thumbIcon}>
          <a
            href="https://www.instagram.com/kristina.granowskay/"
            target="_blank"
          >
            <svg className={`${style.iconSocial}`} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-instagram`} />
            </svg>
          </a>
        </li>

        <li className={style.thumbIcon}>
          <a href="https://github.com/KristinaHranovska" target="_blank">
            <svg className={`${style.iconSocial}`} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-github`} />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialsInformations;
