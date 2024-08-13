import { Header } from 'modules/MainInform';
import style from './GeneralInform.module.scss';

const GeneralInform = ({ children }) => {
  return (
    <div className={style.mainContent}>
      <Header />
      <article className={style.articleSection}>{children}</article>
    </div>
  );
};

export default GeneralInform;
