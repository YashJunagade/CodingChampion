function Navbar() {
  return (
    <nav className="w-full h-14 bg-primary flex justify-between items-center px-4 md:px-6 xl:px-8">
      <div>
        <img src="" alt="logo" />
      </div>
      <div className="flex w-45  justify-between items-center">
        <div className="h-8 flex items-center pr-3">
          <img
            className=" h-full"
            src="src/assets/night-mode.png"
            alt="night-mode"
          />
        </div>
        <div className="bg-accent border-secondary-1 w-12 h-12 rounded-full "></div>
      </div>
    </nav>
  );
}

export default Navbar;
