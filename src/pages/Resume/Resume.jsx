import { Information } from 'modules/ContactsInform';
import { GeneralInform, ResumeComponent } from 'modules/MainInform';

const Resume = () => {
  return (
    <main>
      <Information />
      <GeneralInform>
        <ResumeComponent />
      </GeneralInform>
    </main>
  );
};

export default Resume;
