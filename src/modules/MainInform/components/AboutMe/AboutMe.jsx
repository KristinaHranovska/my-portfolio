import style from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <div className={style.thumbAbout}>
      <h2 className={style.titleAbout}>About me</h2>

      <p className={style.textAbout}>
        Hello! I`m a FrontEnd developer from Dnipro, Ukraine, and my passion is
        turning dreams into reality with code.
        <br /> If websites could talk, they would probably thank me for making
        them so alive and interactive! I like to work on every pixel, creating
        from simple but elegant pages to such complicated labyrinths that Chuck
        Norris himself would have to use a navigator.
        <br />
        <br />I finished GoIT courses and now I know the magic of Full Stack
        Development. My secret ingredient? HTML5/CSS3, JavaScript, React, Redux,
        Node.js, MongoDB and more. I know how to tame responsive design so that
        it works on any device, and I know exactly how to liven up your site
        with light animations.
        <br />
        <br />
        My motto:{' '}
        <span className={style.textAboutAccent}>
          Each project should be better than the previous one!
        </span>{' '}
        And I`m always looking for new challenges and interesting opportunities
        so that your project doesn`t just exist on the Internet, but lives its
        own unique life.
      </p>
    </div>
  );
};

export default AboutMe;
