<<<<<<< HEAD
import NavLink from '../../Components/Navbar/NavLink';

function Navbar() {
  return (
    <nav className="w-full h-14 bg-primary flex justify-between items-center px-4 md:px-6">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="">
        <ul className="sm:flex hidden font-semibold sm:mx-1 md:mx-4 lg:mx-8">
          <NavLink linkRoute="/home" linkName="Home" />
          <NavLink linkRoute="/slip" linkName="Practical Slips" />
          <NavLink linkRoute="/labbook" linkName="Lab Book" />
          <NavLink linkRoute="/roadmaps" linkName="Roadmaps" />
          <NavLink linkRoute="/dsa" linkName="DSA" />
        </ul>
      </div>
      <div className="flex justify-between">
        <a href="/login">
          <button className="bg-accent px-2 py-2 rounded-md text-primary font-bold hover:text-primary hover:bg-black transition ease-in-out duration-200">
            Login
          </button>
        </a>

=======
function Navbar() {
  return (
    <nav className="w-full h-14 bg-primary flex justify-between items-center px-4 md:px-6">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="">
        <ul className="md:flex hidden font-semibold justify-center">
          <li className="mx-[10px] cursor-pointer hover:bg-primary2 px-2 py-2 rounded hover:ease-in-out duration-200">
            <a href="/" className="px-2 py-2">
              Home
            </a>
          </li>
          <li className="mx-[10px] cursor-pointer hover:bg-primary2 px-2 py-2 rounded hover:ease-in-out duration-200">
            <a href="/slip" className="px-2 py-2">
              Practical Slips
            </a>
          </li>
          <li className="mx-[10px] cursor-pointer hover:bg-primary2 px-2 py-2 rounded hover:ease-in-out duration-200">
            <a href="/labbook" className="px-2 py-2">
              LabBook
            </a>
          </li>
          <li className="mx-[10px] cursor-pointer hover:bg-primary2 px-2 py-2 rounded hover:ease-in-out duration-200">
            <a href="/roadmaps" className="px-2 py-2">
              Roadmaps
            </a>
          </li>
          <li className="mx-[10px] cursor-pointer hover:bg-primary2 px-2 py-2 rounded hover:ease-in-out duration-200">
            <a href="/dsa" className="px-2 py-2">
              DSA
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between">
        <a href="/login">
          <button className="bg-accent px-2 py-2 rounded-md text-primary font-bold hover:text-primary hover:bg-black transition ease-in-out duration-200">
            Login
          </button>
        </a>

>>>>>>> aee20924c30b2fb75120de81dae92ed46b0c93ec
        <div className="bg-accent border-secondary-1 h-10 w-10 rounded-full hidden"></div>
      </div>
    </nav>
  );
}

export default Navbar;
