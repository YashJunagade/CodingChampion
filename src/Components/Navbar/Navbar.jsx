import style from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>Unknown</div>
      <div className={style.profile}>
        <div className={style.darkLightMode}>Light/Dark</div>
        <div className={style.profilePic}>Pic</div>
      </div>
    </nav>
  );
}

export default Navbar;
