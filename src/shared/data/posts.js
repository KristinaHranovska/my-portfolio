import {
    imagesBlog
} from 'shared/images';

const posts = [
    {
        id: 1,
        img: `${imagesBlog.theoria}`,
        title: 'Real projects or theoretical questions: what is more important for junior developers? 🫣',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_techinterview-juniordeveloper-theoryvspractice-activity-7224300335488499713-_-Dx?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 2,
        img: `${imagesBlog.place}`,
        title: 'My workspace is a place where ideas are born, projects are implemented, and goals are achieved',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_auwauuauhauuavdauoaupauvauwauuauxauyavsauw-activity-7222243972214083585-keGK?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 3,
        img: `${imagesBlog.certificate}`,
        title: '🎓 Completing the course at GoIT: my path to new knowledge and skills! 🎓',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_goit-autauuauiauoaupaulauyaugauv-auqaugauw-activity-7218202208322932737-hDDS?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 4,
        img: `${imagesBlog.productivity}`,
        title: '☀️ Summer is a time of rest and new opportunities! ☀️',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_summer-frontend-developer-activity-7205093705588842496-rxbz?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 5,
        img: `${imagesBlog.english}`,
        title: '📚 Why English is important in IT 📚',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_englishinit-learnenglish-itskills-activity-7201543814526701568-LqLy?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 6,
        img: `${imagesBlog.comercial}`,
        title: 'Today I want to share with you my first commercial project! ❤️',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_%D1%81%D1%8C%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D1%96-%D1%8F-%D1%85%D0%BE%D1%87%D1%83-%D0%BF%D0%BE%D0%B4%D1%96%D0%BB%D0%B8%D1%82%D0%B8%D1%81%D1%8F-%D0%B7-%D0%B2%D0%B0%D0%BC%D0%B8-%D1%81%D0%B2%D0%BE%D1%97%D0%BC-%D0%BF%D0%B5%D1%80%D1%88%D0%B8%D0%BC-activity-7196412319436836865-LEXK?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 7,
        img: `${imagesBlog.motivation}`,
        title: 'Where is my $1000 salary? 🤷🏻‍♀️',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_aunaugauwauvauraugauyauoit-aunaugauwauvauraugauyaug-activity-7194671005108244480-g02V?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 8,
        img: `${imagesBlog.bueno}`,
        title: 'Why do frontend developers hate layout, but are crazy about React? 🤔',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_auiaulauwauxauyauqaug-javascript-react-activity-7188458354619387904-rAXH?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 9,
        img: `${imagesBlog.reading}`,
        title: 'Over the past two years, I discovered the magic of reading 🤩',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_avdauoauyaugautautavl-auwauuaunauiauoauyauuauq-activity-7185561889802772481-qbpe?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 10,
        img: `${imagesBlog.sceard}`,
        title: "I'm a loser... I can't do anything... 😞",
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_auqaugauw-auwauuaunauiauoauyauuauqautaugauiauoavdauuauq-activity-7181195400337391616-pIt0?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 11,
        img: `${imagesBlog.lamp}`,
        title: 'Because of ChatGPT, I am starting to worry about the future of our profession…',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_ai-auwauuaunauwauuauhautauoauqauo-auyaulavbautauuaurauuaujavsavt-activity-7178370402870562816-p5Yp?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 12,
        img: `${imagesBlog.screen}`,
        title: "Motivation in conditions of growing competition: how not to give up?",
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_auwauuauhauuauyaugavsautaugauiavdaugautautavl-activity-7174052596398047232-3NwY?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 13,
        img: `${imagesBlog.cold}`,
        title: 'March',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_auhaulauwaulaunaulautavi-auvaulauwaulavbavsaukautauoaupauvaulauwavsauuauk-activity-7173238229247152128-_XeB?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 14,
        img: `${imagesBlog.march}`,
        title: 'Today is our day! 🌺',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_ausavsaumautaugauwauuaukautauoaupaumavsautauuavdauoaupaukaulautavi-activity-7171799785983590401-PXIl?utm_source=share&utm_medium=member_desktop',
    },
    {
        id: 15,
        img: `${imagesBlog.js}`,
        title: 'This is the end of JS module with great projects',
        link: 'https://www.linkedin.com/posts/krystyna-hranovska_this-is-the-end-of-js-module-with-great-projects-activity-7164342003177058304-dsCn?utm_source=share&utm_medium=member_desktop',
    }
];


export default posts