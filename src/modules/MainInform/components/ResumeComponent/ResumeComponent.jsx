import { Education, Experience, MySkills } from 'modules/MainInform';
import style from './ResumeComponent.module.scss';

const ResumeComponent = () => {
  return (
    <div className={style.thumbResume}>
      <h2 className={style.titleResume}>Resume</h2>
      <Education />
      <Experience />
      <MySkills />
    </div>
  );
};

export default ResumeComponent;
