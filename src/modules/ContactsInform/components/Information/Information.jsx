import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import {
  ContactsInformation,
  PersonalInformation,
  SocialsInformations,
} from 'modules/ContactsInform';
import style from './Information.module.scss';
import { icons as sprite } from 'shared/icons/index';
import { useMedia } from 'hooks/useMedia';

const Information = () => {
  const [visiable, setVisiable] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const { isTablet, isDesktop } = useMedia();

  useEffect(() => {
    if (isDesktop) {
      setVisiable(true);
      setContentVisible(true);
      setCollapsing(false);
    } else {
      setVisiable(false);
      setCollapsing(false);
      setContentVisible(false);
    }
  }, [isDesktop]);

  const handleClickVisiable = () => {
    if (visiable) {
      // Анімація закриття сайдбару
      gsap.to(`.${style.sidebar}`, {
        x: -300,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setContentVisible(false);
          setCollapsing(true);
          setTimeout(() => {
            setVisiable(false);
            setCollapsing(false);
            gsap.set(`.${style.sidebar}`, { x: 0, opacity: 1 });
          }, 500);
        },
      });
    } else {
      setVisiable(true);
      setTimeout(() => {
        setContentVisible(true);
        // Анімація відкриття сайдбару
        gsap.fromTo(
          `.${style.sidebar}`,
          { x: -300, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5 }
        );
      }, 300);
    }
  };

  useEffect(() => {
    if (contentVisible) {
      gsap.fromTo(
        `.${style.content}`,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    }
  }, [contentVisible]);

  return (
    <aside
      className={`${style.sidebar} ${visiable ? style.active : ''} ${collapsing ? style.collapsing : ''}`}
    >
      <button className={style.showMore} onClick={handleClickVisiable}>
        {isTablet ? (
          <span className={style.showMoreText}>Show contacts</span>
        ) : (
          <svg
            className={`${style.arrow} ${visiable ? style.animationArrow : ''}`}
            width="20"
            height="20"
          >
            <use xlinkHref={`${sprite}#icon-arrow-down`} />
          </svg>
        )}
      </button>

      <PersonalInformation />

      {(visiable || collapsing || isDesktop) && (
        <div
          className={`${style.content} ${contentVisible ? style.visible : style.hidden}`}
        >
          <ContactsInformation />
          <SocialsInformations />
        </div>
      )}
    </aside>
  );
};

export default Information;
