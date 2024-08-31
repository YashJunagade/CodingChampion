import Navbar from '../../Components/Navbar/Navbar'
import SideBar from '../../Components/SideBar/SideBar'
import Menu from '../../Components/Subjects/Menu'

function Labbook() {
  return (
    <section className="">
      {/* <Navbar></Navbar> */}
      <div className="">
        <div className="hidden md:inline">
          <SideBar></SideBar>
        </div>
        <div>
          <Menu></Menu>
        </div>
      </div>
    </section>
  )
}

export default Labbook
