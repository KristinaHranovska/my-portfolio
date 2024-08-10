import ContactsInform from 'modules/ContactsInform/ContactsInform';
import MainInform from 'modules/MainInform/MainInform';
import style from '../pagesStyle.module.scss';

const Blog = () => {
  return (
    <>
      <main className={style.mainStyle}>
        <ContactsInform />
        <MainInform />
      </main>
    </>
  );
};

export default Blog;
