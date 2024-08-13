import { Information } from 'modules/ContactsInform';
import {
  AboutMe,
  GeneralInform,
  Recommendation,
  WhatImDoing,
} from 'modules/MainInform';

const About = () => {
  return (
    <main>
      <Information />
      <GeneralInform>
        <AboutMe />
        <WhatImDoing />
        <Recommendation />
      </GeneralInform>
    </main>
  );
};

export default About;
