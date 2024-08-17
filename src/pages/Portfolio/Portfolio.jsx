import { Information } from 'modules/ContactsInform';
import { GeneralInform, PortfolioComponents } from 'modules/MainInform';

const Portfolio = () => {
  return (
    <main>
      <Information />
      <GeneralInform>
        <PortfolioComponents />
      </GeneralInform>
    </main>
  );
};

export default Portfolio;
