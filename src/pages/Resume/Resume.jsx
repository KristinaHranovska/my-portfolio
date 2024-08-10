import { Information } from 'modules/ContactsInform';
import { GeneralInform } from 'modules/MainInform';
import style from '../pagesStyle.module.scss';

const Resume = () => {
  return (
    <>
      <main className={style.mainStyle}>
        <Information />
        <GeneralInform />
      </main>
    </>
  );
};

export default Resume;
