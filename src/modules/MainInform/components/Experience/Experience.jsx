import { icons as sprite } from 'shared/icons/index';
import style from '../Education/Education.module.scss';

const Experience = () => {
  return (
    <div className={style.timeline}>
      <div className={style.educationWrapper}>
        <div className={style.iconBox}>
          <svg className={style.iconBook} width="16" height="16">
            <use xlinkHref={`${sprite}#icon-book`} />
          </svg>
        </div>
        <h3 className={style.educationTitle}>Experience</h3>
      </div>

      <ul className={style.timelineList}>
        <li className={style.timelineItem}>
          <h4 className={style.timelineItemTitle}>ATLAS</h4>
          <span className={style.timelineItemYear}>2021 - present</span>
          <p className={style.timelineItemPosition}>Personal Fitness Trainer</p>
          <ul>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Personal approach to customers
              </p>
            </li>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Motivation and support
              </p>
            </li>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Adaptation to the needs of the client
              </p>
            </li>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Constant self-improvement
              </p>
            </li>
          </ul>
        </li>

        <li className={style.timelineItem}>
          <h4 className={style.timelineItemTitle}>IT2.0</h4>
          <span className={style.timelineItemYear}>2017 - 2021</span>
          <p className={style.timelineItemPosition}>Sales Manager</p>
          <ul>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Customer service and customer relations
              </p>
            </li>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Technical understanding of products and services
              </p>
            </li>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Close cooperation with the technical department
              </p>
            </li>
            <li className={style.experienceItem}>
              <p className={style.timelineItemPosition}>
                - Effective negotiation
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
