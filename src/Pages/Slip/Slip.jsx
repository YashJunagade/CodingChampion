import Navbar from '../../Components/Navbar/Navbar';
import SideBar from '../../Components/SideBar/SideBar';
import Menu from './Menu';
import './Slip.css';

function Slip() {
  return (
    <section className="slipPageSection">
      <Navbar></Navbar>
      <div className="slipMainContainer">
        <SideBar></SideBar>
        <Menu></Menu>
      </div>
    </section>
  );
}

export default Slip;
