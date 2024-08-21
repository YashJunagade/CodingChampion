import DropDownMenu from "./DropDownMenu";
import style from "./SideBar.module.css";

function SideBar() {
  const dropDownList = [
    {
      name: "Slip Solutions",
      years: ["First Year", "Second Year", "Third Year"],
      subjects: {
        "First Year": [
          { name: "C Programming", link: "/0/slipList" },
          { name: "DBMS", link: "/1/slipList" },
          { name: "Web Technology", link: "/2/slipList" },
          { name: "RDBMS", link: "/3/slipList" },
        ],
        "Second Year": [
          { name: "Data Structure", link: "/4/slipList" },
          { name: "Big Data", link: "/5/slipList" },
          { name: "Php", link: "/6/slipList" },
          { name: "Angular JS", link: "/7/slipList" },
          { name: "CPP", link: "/8/slipList" },
          { name: "Advance Php", link: "/9/slipList" },
          { name: "Node JS", link: "/10/slipList" },
        ],
        "Third Year": [
          { name: "Core Java", link: "/11/slipList" },
          { name: "Python", link: "/12/slipList" },
          { name: "MongoDB", link: "/13/slipList" },
          { name: "Advance Java", link: "/14/slipList" },
          { name: "Android Programming", link: "/15/slipList" },
          { name: "Dot Net Framework", link: "/16/slipList" },
        ],
      },
    },

    {
      name: "Labbook Solutions",
      years: ["First Year", "Second Year", "Third Year"],
      subjects: {
        "First Year": [
          { name: "C Programming", link: "/0/labList" },
          { name: "DBMS", link: "/1/labList" },
          { name: "Web Technology", link: "/2/labList" },
          { name: "RDBMS", link: "/3/labList" },
        ],
        "Second Year": [
          { name: "Data Structure", link: "/4/labList" },
          { name: "Big Data", link: "/5/labList" },
          { name: "Php", link: "/6/labList" },
          { name: "Angular JS", link: "/7/labList" },
          { name: "CPP", link: "/8/labList" },
          { name: "Advance Php", link: "/9/labList" },
          { name: "Node JS", link: "/10/labList" },
        ],
        "Third Year": [
          { name: "Core Java", link: "/11/labList" },
          { name: "Python", link: "/12/labList" },
          { name: "MongoDB", link: "/13/labList" },
          { name: "Advance Java", link: "/14/labList" },
          { name: "Android Programming", link: "/15/labList" },
          { name: "Dot Net Framework", link: "/16/labList" },
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
