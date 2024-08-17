import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <h3>Unknown</h3>
      <div className={style.list}>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Practical Slips</a>
        </li>
        <li>
          <a href="">LabBook</a>
        </li>
        <li>
          <a href="">Roadmaps</a>
        </li>
        <li>
          <a href="">DSA</a>
        </li>
      </div>
      <div className={style.profilLogInDetails}>
        <li>
          <a href="">Login</a>
        </li>
        <div className={style.profileAvatar}></div>
      </div>
    </nav>
  );
}

export default Navbar;
