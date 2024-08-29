import DropDownMenu from './DropDownMenu';
import style from './SideBar.module.css';

function SideBar() {
  const dropDownList = [
    {
      name: 'Slip Solutions',
      years: ['First Year', 'Second Year', 'Third Year'],
      subjects: {
        'First Year': [
          { name: 'C Programming', link: '/C Programming/slipList' },
          { name: 'DBMS', link: '/DBMS/slipList' },
          { name: 'Web Technology', link: '/Web Technology/slipList' },
          { name: 'RDBMS', link: '/RDBMS/slipList' },
        ],
        'Second Year': [
          { name: 'Data Structure', link: '/Data Structure/slipList' },
          { name: 'Big Data', link: '/Big Data/slipList' },
          { name: 'Php', link: '/Php/slipList' },
          { name: 'Angular JS', link: '/Angular JS/slipList' },
          { name: 'CPP', link: '/CPP/slipList' },
          { name: 'Advance Php', link: '/Advance Php/slipList' },
          { name: 'Node JS', link: '/Node JS/slipList' },
        ],
        'Third Year': [
          { name: 'Core Java', link: '/Core Java/slipList' },
          { name: 'Python', link: '/Python/slipList' },
          { name: 'MongoDB', link: '/MongoDB/slipList' },
          { name: 'Advance Java', link: '/Advance Java/slipList' },
          {
            name: 'Android Programming',
            link: '/Android Programming/slipList',
          },
          { name: 'Dot Net Framework', link: '/Dot Net Framework/slipList' },
        ],
      },
    },

    {
      name: 'Labbook Solutions',
      years: ['First Year', 'Second Year', 'Third Year'],
      subjects: {
        'First Year': [
          { name: 'C Programming', link: '/C Programming/labList' },
          { name: 'DBMS', link: '/DBMS/labList' },
          { name: 'Web Technology', link: '/Web Technology/labList' },
          { name: 'RDBMS', link: '/RDBMS/labList' },
        ],
        'Second Year': [
          { name: 'Data Structure', link: '/Data Structure/labList' },
          { name: 'Big Data', link: '/Big Data/labList' },
          { name: 'Php', link: '/Php/labList' },
          { name: 'Angular JS', link: '/Angular JS/labList' },
          { name: 'CPP', link: '/CPP/labList' },
          { name: 'Advance Php', link: '/Advance Php/labList' },
          { name: 'Node JS', link: '/Node JS/labList' },
        ],
        'Third Year': [
          { name: 'Core Java', link: '/Core Java/labList' },
          { name: 'Python', link: '/Python/labList' },
          { name: 'MongoDB', link: '/MongoDB/labList' },
          { name: 'Advance Java', link: '/Advance Java/labList' },
          { name: 'Android Programming', link: '/Android Programming/labList' },
          { name: 'Dot Net Framework', link: '/Dot Net Framework/labList' },
        ],
      },
    },

    {
      name: 'RoadMaps',
      title: ['Frontend', 'Backend', 'Full Stack', 'DevOps'],
    },

    {
      name: 'DSA',
      title: [
        'Basics Logic',
        'Computer Fundamentals',
        'Bind 75',
        'Favorite 150',
      ],
    },
  ];

  return (
    <section className={style.sidebarSection}>
      <div className={style.myProfile}>Profile</div>
      {dropDownList.map((menu, index) => (
        <DropDownMenu key={index} menu={menu} />
      ))}
    </section>
  );
}

export default SideBar;
