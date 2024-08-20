import DropDownMenu from "./DropDownMenu";
import style from "./SideBar.module.css";

function SideBar() {
  const dropDownList = [
    {
      name: "Slip Solutions",
      years: ["First Year", "Second Year", "Third Year"],
      subjects: {
        "First Year": ["C Programming", "DBMS", "Web Technology", "RDBMS"],
        "Second Year": [
          "Data Structure",
          "Big Data",
          "Php",
          "Angular JS",
          "CPP",
          "Advance Php",
          "Node JS",
        ],
        "Third Year": [
          "Core Java",
          "Python",
          "MongoDB",
          "Advance Java",
          "Android Programming",
          "Dot Net Framework",
        ],
      },
    },
    {
      name: "Labbook Solutions",
      years: ["First Year", "Second Year", "Third Year"],
      subjects: {
        "First Year": ["C Programming", "DBMS", "Web Technology", "RDBMS"],
        "Second Year": [
          "Data Structure",
          "Big Data",
          "Php",
          "Angular JS",
          "CPP",
          "Advance Php",
          "Node JS",
        ],
        "Third Year": [
          "Core Java",
          "Python",
          "MongoDB",
          "Advance Java",
          "Android Programming",
          "Dot Net Framework",
        ],
      },
    },

    {
      name: "RoadMaps",
      title: ["Frontend", "Backend", "Full Stack", "DevOps"],
    },
    {
      name: "DSA",
      title: [
        "Basics Logic",
        "Computer Fundamentals",
        "Bind 75",
        "Favorite 150",
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
