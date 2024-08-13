import style from './WhatImDoing.module.scss';
import { icons as sprite } from 'shared/icons/index';

const WhatImDoing = () => {
  return (
    <div className={style.thumbDoing}>
      <h2 className={style.titleDoing}>What I&apos;m Doing</h2>
      <ul className={style.doingList}>
        <li className={style.doingItem}>
          <div className={style.iconThumb}>
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-development`} />
            </svg>
          </div>
          <div className={style.thumbBlock}>
            <h3 className={style.titleDoingSmall}>Web development</h3>
            <p className={style.textDoing}>
              I create modern, functional user-oriented sites.
            </p>
          </div>
        </li>

        <li className={style.doingItem}>
          <div className={style.iconThumb}>
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-app`} />
            </svg>
          </div>
          <div className={style.thumbBlock}>
            <h3 className={style.titleDoingSmall}>Mobile applications</h3>
            <p className={style.textDoing}>
              I am planning training to create effective mobile applications.
            </p>
          </div>
        </li>

        <li className={style.doingItem}>
          <div className={style.iconThumb}>
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-animation`} />
            </svg>
          </div>
          <div className={style.thumbBlock}>
            <h3 className={style.titleDoingSmall}>Interactive animations</h3>
            <p className={style.textDoing}>
              I add light animations to make your site come alive and be
              interesting.
            </p>
          </div>
        </li>

        <li className={style.doingItem}>
          <div className={style.iconThumb}>
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-optimization`} />
            </svg>
          </div>
          <div className={style.thumbBlock}>
            <h3 className={style.titleDoingSmall}>Performance optimization</h3>
            <p className={style.textDoing}>
              I increase the loading speed and ease of use of the website.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WhatImDoing;
