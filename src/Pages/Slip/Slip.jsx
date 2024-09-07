import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Menu from '../../Components/Subjects/Menu'

function Slip() {
  return (
    <section className="">
      {/* <Navbar></Navbar> */}
      <div className="flex">
        {/* <div className="hidden md:inline relative"> */}
        <SideBar></SideBar>
        {/* </div> */}
        <div className="w-full ">
          <Menu></Menu>
        </div>
      </div>
    </section>
  )
}

export default Slip
