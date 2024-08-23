import DropDownMenu from "./DropDownMenu";
import style from "./SideBar.module.css";

function SideBar() {
  const dropDownList = [
    {
      name: "Slip Solutions",
      years: ["First Year", "Second Year", "Third Year"],
      subjects: {
        "First Year": [
          { name: "C Programming", link: "/C Programming/slipList" },
          { name: "DBMS", link: "/DBMS/slipList" },
          { name: "Web Technology", link: "/Web Technology/slipList" },
          { name: "RDBMS", link: "/RDBMS/slipList" },
        ],
        "Second Year": [
          { name: "Data Structure", link: "/Data Structure/slipList" },
          { name: "Big Data", link: "/Big Data/slipList" },
          { name: "Php", link: "/Php/slipList" },
          { name: "Angular JS", link: "/Angular JS/slipList" },
          { name: "CPP", link: "/CPP/slipList" },
          { name: "Advance Php", link: "/Advace Php/slipList" },
          { name: "Node JS", link: "/Node JS/slipList" },
        ],
        "Third Year": [
          { name: "Core Java", link: "/Core Java/slipList" },
          { name: "Python", link: "/Python/slipList" },
          { name: "MongoDB", link: "/MongoDB/slipList" },
          { name: "Advance Java", link: "/Advance Java/slipList" },
          {
            name: "Android Programming",
            link: "/Android Programming/slipList",
          },
          { name: "Dot Net Framework", link: "/Dot Net Framework/slipList" },
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
