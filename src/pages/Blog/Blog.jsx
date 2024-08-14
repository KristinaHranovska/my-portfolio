import { Information } from 'modules/ContactsInform';
import { BlogComponent, GeneralInform } from 'modules/MainInform';

const Blog = () => {
  return (
    <main>
      <Information />
      <GeneralInform>
        <BlogComponent />
      </GeneralInform>
    </main>
  );
};

export default Blog;
