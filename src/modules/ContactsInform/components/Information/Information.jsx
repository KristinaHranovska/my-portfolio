import {
  ContactsInformation,
  PersonalInformation,
  SocialsInformations,
} from 'modules/ContactsInform';
import style from './Information.module.scss';
import { useState } from 'react';
import { icons as sprite } from 'shared/icons/index';

const Information = () => {
  const [visiable, setVisiable] = useState(false);
  const [collapsing, setCollapsing] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  const handleClickVisiable = () => {
    if (visiable) {
      setTimeout(() => {
        setContentVisible(false);
        setCollapsing(true);
        setTimeout(() => {
          setVisiable(false);
          setCollapsing(false);
        }, 500);
      }, 300);
    } else {
      setVisiable(true);
      setTimeout(() => {
        setContentVisible(true);
      }, 300);
    }
  };

  return (
    <aside
      className={`${style.sidebar} ${visiable ? style.active : ''} ${collapsing ? style.collapsing : ''}`}
    >
      <button className={style.showMore} onClick={handleClickVisiable}>
        <svg className={`${style.arrow}`} width="20" height="20">
          <use xlinkHref={`${sprite}#icon-arrow-down`} />
        </svg>
      </button>

      <PersonalInformation />

      {(visiable || collapsing) && (
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
