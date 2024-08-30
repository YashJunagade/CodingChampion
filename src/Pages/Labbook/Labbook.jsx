import Navbar from '../../Components/Navbar/Navbar'

import SideBar from '../../Components/SideBar/SideBar'
import Menu from './Menu'
import './Labbook.css'

function Labbook() {
  return (
    <section className="labbookPageSection">
      <Navbar />
      <div className="labbookMainContainer">
        <SideBar />
        <Menu />
      </div>
    </section>
  )
}

export default Labbook
