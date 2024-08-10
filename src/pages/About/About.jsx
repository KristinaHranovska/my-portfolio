import ContactsInform from 'modules/ContactsInform/ContactsInform';
import MainInform from 'modules/MainInform/MainInform';
import style from '../style';

const About = () => {
  return (
    <main className={style.mainStyle}>
      <ContactsInform />
      <MainInform />
    </main>
  );
};

export default About;
