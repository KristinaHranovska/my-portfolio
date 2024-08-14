import { useMedia } from 'hooks/useMedia';
import style from './DetailInform.module.scss';
import { icons as sprite } from 'shared/icons/index';
import { CustomScrollWrapper } from 'shared/components';

const DetailInform = ({ data }) => {
  const { isTablet, isDesktop } = useMedia();
  return (
    <div className={style.modalRecomendation}>
      <div className={style.containerPhoto}>
        <div className={style.imageContainer}>
          <picture>
            <source
              media="(min-width: 1440px )"
              srcSet={`${data.img1x} 1x, ${data.img2x} 2x`}
            />
            <img
              className={style.recommendationPhoto}
              src={data.img1x}
              alt={data.name}
              width="80"
            />
          </picture>
        </div>

        <div className={style.thumbIcon}>
          <a href={data.link} target="_blank">
            <svg className={`${style.iconSocial}`} width="18" height="18">
              <use xlinkHref={`${sprite}#icon-linkedin`} />
            </svg>
          </a>
        </div>

        {(isDesktop || isTablet) && (
          <div>
            <svg className={`${style.iconQuote}`} width="40" height="40">
              <use xlinkHref={`${sprite}#icon-quote`} />
            </svg>
          </div>
        )}
      </div>

      <div className={style.container}>
        <h3 className={style.name}>{data.name}</h3>

        <p className={style.position}>{data.position}</p>
        <p className={style.date}>{data.date}</p>

        <CustomScrollWrapper>
          <p className={style.post}>{data.post}</p>
        </CustomScrollWrapper>
      </div>
    </div>
  );
};

export default DetailInform;
