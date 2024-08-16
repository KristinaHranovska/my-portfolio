import style from './MySkills.module.scss';
import certificates from 'shared/data/certificates';

const MySkills = () => {
  return (
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
              <span className={style.certificatesDate}>{certificat.date}</span>
              <h4 className={style.certificatesContentTitle}>
                {certificat.name}
              </h4>
              <p className={style.certificatesCompany}>{certificat.company}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MySkills;
