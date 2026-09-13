import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {

  // Shared navigation links used in both the desktop navbar and mobile menu.
  const navMenu = () => {
      return (
          <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            </>
      )
  }

  return (
    <nav>
      <div className="navbar mx-auto max-w-[1920px] px-5 py-4 lg:px-10 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            {/* The hamburger menu is visible below the lg breakpoint. */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FiMenu aria-label="Menu" className="h-5 w-5" />
            </div>

            {/* Mobile navigation also contains the Register and Login links. */}
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg font-semibold shadow"
            >
              {
                navMenu()
              }
              <li className="mt-2 border-t border-gray-200 pt-2">
                <Link href="/register">Register</Link>
              </li>
              <li><Link href="/login">Login</Link></li>
            </ul>
          </div>

          {/* Brand logo links back to the home page. */}
          <Link href={"/"} className="text-xl">
            <Image
              src={"/assets/logo.svg"}
              className="h-auto"
              width={100}
              height={80}
              style={{ width: "100px", height: "auto" }}
              alt="Brand Image"
            ></Image>
          </Link>
        </div>

        {/* Desktop navigation is hidden on smaller screens. */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-semibold">
            {navMenu()}
          </ul>
        </div>

        {/* Register and Login show on desktop; Appointment stays visible at every size. */}
        <div className="navbar-end gap-2">
          <Link
            href="/register"
            className="btn btn-md hidden rounded-md border border-red-200 bg-white px-5 font-semibold text-red-500 transition-colors hover:border-red-400 hover:bg-red-50 lg:flex"
          >
            Register
          </Link>
          <Link
            href="/login"
            className="btn btn-md hidden rounded-md border border-red-500 bg-red-500 px-5 font-semibold text-white transition-colors hover:border-red-600 hover:bg-red-600 lg:flex"
          >
            Login
          </Link>
          <Link
            href="/appointment"
            className="btn btn-md rounded-md border border-red-200 bg-transparent px-5 font-semibold text-red-500 transition-colors hover:border-red-400 hover:bg-red-50"
          >
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
