import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Education, Experience, MySkills } from 'modules/MainInform';
import style from './ResumeComponent.module.scss';

const ResumeComponent = () => {
  const titleRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Анімація для заголовка Resume
    gsap.fromTo(
      titleRef.current,
      { y: 50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    );

    // Анімація для секцій Education, Experience, MySkills
    gsap.fromTo(
      sectionsRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'power3.out', stagger: 0.3 }
    );
  }, []);

  return (
    <div className={style.thumbResume}>
      <h2 ref={titleRef} className={style.titleResume}>
        Resume
      </h2>
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <Education />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <Experience />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <MySkills />
      </div>
    </div>
  );
};

export default ResumeComponent;
