import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-900 text-gray-50">
      <section>
        <NavLink to="/">
          <div>
            <h3 className="font-serif text-2xl md:text-4xl text-yellow-100 tracking-[4px] cursor-pointer">
              Apartment Locator
            </h3>
            <p className="uppercase hidden md:block">
              Stunning Apartments. Amazing Bargins.
            </p>
          </div>
        </NavLink>
      </section>
      <ul className="flex justify-center items-center gap-2 text-xl uppercase">
        <NavLink to="/apartmentindex">
          <li className=" cursor-pointer hover:text-yellow-100 hover:underline duration-200">
            All Listings
          </li>
        </NavLink>
        <li className="hidden md:inline cursor-pointer hover:text-yellow-100 hover:underline duration-200">
          Log In
        </li>
        <li className="hidden md:inline cursor-pointer hover:text-yellow-100 hover:underline duration-200">
          Sign Up
        </li>
      </ul>
    </header>
  );
}
