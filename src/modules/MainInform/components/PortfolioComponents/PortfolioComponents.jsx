import { PortfolioList } from 'modules/MainInform';
import style from './PortfolioComponents.module.scss';

const PortfolioComponents = () => {
  return (
    <section className={style.thumbPortfolio}>
      <h2 className={style.titlePortfolio}>Portfolio</h2>
      <PortfolioList />
    </section>
  );
};

export default PortfolioComponents;
