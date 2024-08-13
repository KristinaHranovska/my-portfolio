import { useModalContext } from 'context/useModalContext';
import style from './Recommendation.module.scss';
import recomArray from 'shared/data/recommendations';
import { DetailInform } from 'modules/MainInform';

const Recommendation = () => {
  const { openModal } = useModalContext();

  return (
    <div className={style.recommendationContainer}>
      <h2 className={style.recommendationTitle}>Recommendation</h2>
      <ul className={`${style.recommendationList} ${style.hasScrollbar}`}>
        {recomArray.map((person) => (
          <li
            key={person.id}
            className={style.recommendationItem}
            onClick={() => openModal(<DetailInform data={person} />)}
          >
            <div className={style.recommendationContent}>
              <div className={style.imageContainer}>
                <picture>
                  <source
                    media="(min-width: 1440px )"
                    srcSet={`${person.img1x} 1x, ${person.img2x} 2x`}
                  />
                  <img
                    className={style.recommendationPhoto}
                    src={person.img1x}
                    alt={person.name}
                    width="60"
                  />
                </picture>
              </div>
              <div className={style.textContainer}>
                <h3 className={style.recommendationName}>{person.name}</h3>
                <p className={style.recommendationPost}>{person.post}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendation;
