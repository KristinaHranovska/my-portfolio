import { Information } from 'modules/ContactsInform';
import { GeneralInform } from 'modules/MainInform';

const About = () => {
  return (
    <main>
      <Information />
      <GeneralInform>
        <h2>About me</h2>
      </GeneralInform>
    </main>
  );
};

export default About;
