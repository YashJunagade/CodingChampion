import { Helmet } from 'react-helmet'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Menu from '../../Components/Subjects/Menu'
import GoogleAds from '../../GoogleAds'

function Slip() {
  return (
    <>
      <Helmet>
        <title>
          BBACA BCA Slip Labbook Solution FY BBACA SY BBACA TY BBACA First Year
          Second Year Third Year BBACA BCA
        </title>
        <meta
          name="description"
          content="BBACA BCA bbaca bba ca bca Practical Slip Solution Labbook Solution First Year Second Year Third
              Year BBACA BCA SPPU University Coding Champion C DBMS RDBMS Web Technology data structure Big Data Php Cpp Angular JS Advance Php Node JS Core Java Python MongoDB Advance Java Android Programming Dot Net Framework"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1487916517080617"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <section className="">
        {/* <Navbar></Navbar> */}
        <div className="flex">
          {/* <div className="hidden md:inline relative"> */}
          {/* <SideBar></SideBar> */}
          {/* </div> */}
          <div className="w-full ">
            <Menu></Menu>
            <GoogleAds
              adSlot="3195881308"
              uniqueKey="slip-atbottom"
              baseWidth={1000}
              baseHeight={300}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Slip
