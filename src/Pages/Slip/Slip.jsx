import { Helmet } from 'react-helmet'
import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Menu from '../../Components/Subjects/Menu'
import GoogleAdSense from '../../GoogleAdSense'

function Slip() {
  return (
    <>
      <Helmet>
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1487916517080617`}
          crossOrigin="anonymous"
        />
        <script>
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-1487916517080617",
              enable_page_level_ads: true
            });
          `}
        </script>
        <title>
          BBACA BCA Slip Labbook Solution FY BBACA SY BBACA TY BBACA First Year
          Second Year Third Year BBACA BCA
        </title>
        <meta
          name="description"
          content="BBACA BCA bbaca bba ca bca Practical Slip Solution Labbook Solution First Year Second Year Third
              Year BBACA BCA SPPU University Coding Champion C DBMS RDBMS Web Technology data structure Big Data Php Cpp Angular JS Advance Php Node JS Core Java Python MongoDB Advance Java Android Programming Dot Net Framework"
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-1487916517080617"
        ></meta>
      </Helmet>
      <section className="">
        {/* <Navbar></Navbar> */}
        <div className="flex">
          {/* <div className="hidden md:inline relative"> */}
          {/* <SideBar></SideBar> */}
          {/* </div> */}
          <div className="w-full ">
            <Menu></Menu>
            <GoogleAdSense adSlot="3195881308" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Slip
