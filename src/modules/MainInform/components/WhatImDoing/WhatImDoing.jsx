import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import style from './WhatImDoing.module.scss';
import { icons as sprite } from 'shared/icons/index';

const WhatImDoing = () => {
  const iconRefs = useRef([]);
  const textRefs = useRef([]);

  useEffect(() => {
    // Анімація іконок
    gsap.fromTo(
      iconRefs.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      }
    );

    // Анімація тексту
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <div className={style.thumbDoing}>
      <h2 className={style.titleDoing}>What I&apos;m Doing</h2>
      <ul className={style.doingList}>
        <li className={style.doingItem}>
          <div
            ref={(el) => (iconRefs.current[0] = el)}
            className={style.iconThumb}
          >
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-development`} />
            </svg>
          </div>
          <div
            ref={(el) => (textRefs.current[0] = el)}
            className={style.thumbBlock}
          >
            <h3 className={style.titleDoingSmall}>Web development</h3>
            <p className={style.textDoing}>
              I create modern, functional user-oriented sites.
            </p>
          </div>
        </li>

        <li className={style.doingItem}>
          <div
            ref={(el) => (iconRefs.current[1] = el)}
            className={style.iconThumb}
          >
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-app`} />
            </svg>
          </div>
          <div
            ref={(el) => (textRefs.current[1] = el)}
            className={style.thumbBlock}
          >
            <h3 className={style.titleDoingSmall}>Mobile applications</h3>
            <p className={style.textDoing}>
              I am planning training to create effective mobile applications.
            </p>
          </div>
        </li>

        <li className={style.doingItem}>
          <div
            ref={(el) => (iconRefs.current[2] = el)}
            className={style.iconThumb}
          >
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-animation`} />
            </svg>
          </div>
          <div
            ref={(el) => (textRefs.current[2] = el)}
            className={style.thumbBlock}
          >
            <h3 className={style.titleDoingSmall}>Interactive animations</h3>
            <p className={style.textDoing}>
              I add light animations to make your site come alive and be
              interesting.
            </p>
          </div>
        </li>

        <li className={style.doingItem}>
          <div
            ref={(el) => (iconRefs.current[3] = el)}
            className={style.iconThumb}
          >
            <svg className={`${style.iconDoing}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-optimization`} />
            </svg>
          </div>
          <div
            ref={(el) => (textRefs.current[3] = el)}
            className={style.thumbBlock}
          >
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
