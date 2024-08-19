import style from './PersonalInformation.module.scss';
import { imagesPhoto } from 'shared/images';

const PersonalInformation = () => {
  return (
    <div className={style.personalInform}>
      <div className={style.avatarBox}>
        <picture>
          <source
            media="(min-width: 1440px )"
            srcSet={`${imagesPhoto.photo} 1x, ${imagesPhoto.photo2x} 2x`}
          />
          <img
            className={style.photo}
            src={imagesPhoto.photo}
            alt="Girl"
            width="80"
          />
        </picture>
      </div>
      <div>
        <h2 className={style.name}>Hranovska Krystyna</h2>
        <p className={style.position}>FrontEnd developer</p>
        <a
          className={`${style.downloadCV} ${style.position}`}
          href="https://drive.google.com/file/d/1D1MkxleBsCCEiXl35I_Fjdn1R-p7HZQU/view?usp=drive_link"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default PersonalInformation;
