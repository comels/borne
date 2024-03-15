import { PiKeyReturn } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-sky-700 p-5">
      <NavLink
        to="/"
        className="flex max-w-xs items-center justify-center gap-4 rounded-lg bg-white py-2 text-xl font-medium text-sky-700"
      >
        <PiKeyReturn size={32} className="text-sky-700" />
        Retourner à l&apos;accueil
      </NavLink>
    </div>
  );
};

export default Nav;
