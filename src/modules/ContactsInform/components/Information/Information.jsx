import {
  ContactsInformation,
  PersonalInformation,
  SocialsInformations,
} from 'modules/ContactsInform';

const Information = () => {
  return (
    <aside>
      <PersonalInformation />
      <ContactsInformation />
      <SocialsInformations />
    </aside>
  );
};

export default Information;
