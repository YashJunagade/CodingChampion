import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="mt-4 py-4 bg-offWhite dark:bg-black dark:text-white">
      {/* <div className="text-center font-bold">
        Made with ❤️ by Yash and Dipak
      </div> */}
      <div className="mx-auto w-full items-center justify-between px-4 text-center">
        <div className="inline-flex items-center">
          <Link to="/">
            <img
              className="hidden dark:block"
              src="https://res.cloudinary.com/yashjunagade/image/upload/v1725779658/DarkModeLogo_if19sr.svg"
              alt="CodingChampion logo"
              width={200}
            />
            <img
              className="dark:hidden"
              src="https://res.cloudinary.com/yashjunagade/image/upload/v1725779657/LightModeLogo_b4g7mj.svg"
              alt="CodingChampion logo"
              width={200}
            />
          </Link>
        </div>
        <div className="-mt-2">
          <p className="text-sm font-medium text-primary2">
            © 2024 Coding🏆Champion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
