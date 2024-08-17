import style from './MySkills.module.scss';
import certificates from 'shared/data/certificates';

const MySkills = () => {
  return (
    <>
      <div>
        <h3 className={style.certificatesTitle}>Certificates</h3>
        <ul className={style.certificatesList}>
          {certificates.map((certificat) => (
            <li key={certificat.id} className={style.certificatesItem}>
              <div className={style.certificatesBoxImg}>
                <img
                  className={style.certificatesImg}
                  src={certificat.img}
                  alt={certificat.name}
                />
              </div>
              <div className={style.certificatesContent}>
                <span className={style.certificatesDate}>
                  {certificat.date}
                </span>
                <h4 className={style.certificatesContentTitle}>
                  {certificat.name}
                </h4>
                <p className={style.certificatesCompany}>
                  {certificat.company}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={style.certificatesTitle}>My Skills</h3>
        <ul className={style.mySkillsList}>
          <li className={style.mySkillsItem}>
            <img
              alt="HTML5"
              width="40px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="CSS3"
              width="40px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="Sass"
              width="40px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="JavaScript"
              width="40px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="React"
              width="40px"
              src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="nodejs"
              width="40"
              height="40"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            />
          </li>

          <li className={style.mySkillsItem}>
            <img
              alt="mongodb"
              width="40"
              height="40"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="mongoosejs"
              width="40"
              height="40"
              src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/mongoose/mongoose-original-wordmark.svg"
            />
          </li>
          <li className={style.mySkillsItem}>
            <img
              alt="postman"
              width="40"
              height="40"
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            />
          </li>

          <li className={style.mySkillsItem}>
            <img
              alt="GitHub"
              width="40px"
              src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default MySkills;
