import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Menu from '../../Components/Subjects/Menu'

function Labbook() {
  return (
    <>
      <Helmet>
        <title>
          BBACA BCA Slip Labbook Solution First Year Second Year Third Year
          BBACA BCA
        </title>
        <meta
          name="description"
          content="BBACA BCA Practical Slip Solution Labbook Solution First Year Second Year Third
              Year BBACA BCA SPPU University Coding Champion C DBMS RDBMS Web Technology data structure Big Data Php Cpp Angular JS Advance Php Node JS Core Java Python MongoDB Advance Java Android Programming Dot Net Framework"
        />
      </Helmet>
      <section className="">
        {/* <Navbar></Navbar> */}
        <div className="flex">
          {/* <div className="hidden md:inline relative"> */}
          {/* <SideBar></SideBar> */}
          {/* </div> */}
          <div className="w-full">
            <Menu></Menu>
          </div>
        </div>
      </section>
    </>
  )
}

export default Labbook
