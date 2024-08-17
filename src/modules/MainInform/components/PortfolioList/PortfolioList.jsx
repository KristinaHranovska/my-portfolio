import { useState } from 'react';
import projects from 'shared/data/projects';
import style from './PortfolioList.module.scss';
import clsx from 'clsx';
import { icons as sprite } from 'shared/icons/index';

const PortfolioList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const uniqueTypes = [
    'All',
    ...new Set(projects.map((project) => project.type)),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.type === selectedCategory);

  return (
    <>
      <ul className={style.categoriesList}>
        {uniqueTypes.map((type, index) => (
          <li
            key={index}
            className={clsx(style.categoriesItem, {
              [style.active]: selectedCategory === type,
            })}
            onClick={() => setSelectedCategory(type)}
          >
            <h3 className={style.category}>{type}</h3>
          </li>
        ))}
      </ul>

      <ul className={style.projectList}>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <a
              className={style.projectLink}
              href={project.link}
              target="_blank"
            >
              <div className={style.pojectBoxImg}>
                <img
                  className={style.projectImg}
                  src={project.img}
                  alt={project.name}
                />
                <div className={style.thumbIconEye}>
                  <svg className={style.iconEye} width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-eye`} />
                  </svg>
                </div>
              </div>

              <h4 className={style.projectTitle}>{project.name}</h4>
              <span className={style.projectCategory}>{project.type}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PortfolioList;
