import { Header } from 'modules/MainInform';
import style from './GeneralInform.module.scss';

const GeneralInform = ({ children }) => {
  return (
    <section className={style.mainContent}>
      <Header />
      <article className={style.articleSection}>{children}</article>
    </section>
  );
};

export default GeneralInform;
