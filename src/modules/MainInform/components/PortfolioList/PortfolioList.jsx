import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import projects from 'shared/data/projects';
import style from './PortfolioList.module.scss';
import clsx from 'clsx';
import { icons as sprite } from 'shared/icons/index';

const PortfolioList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projectListRef = useRef(null);

  const uniqueTypes = [
    'All',
    ...new Set(projects.map((project) => project.type)),
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.type === selectedCategory);

  useEffect(() => {
    const items = projectListRef.current.children;

    gsap.fromTo(
      items,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }
    );
  }, [filteredProjects]);

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

      <ul ref={projectListRef} className={style.projectList}>
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <a
              className={style.projectLink}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
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
