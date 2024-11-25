import { NavLink } from "react-router-dom";
import logo from "@/assets/image/logo.png";
import Avatar from "./Avatar";
function Header(): React.JSX.Element {
  return (
    <header className="flex justify-center py-4 px-6 bg-white">
      <div className="w-full 2xl:container ">
        <div className="flex  justify-between">
          <div className="flex items-center gap-8">
            <figure>
              <img
                className="block w-18"
                src={logo}
                alt="لوگو  پروژه ی تستی "
              />
            </figure>
            <nav>
              <ul className="flex items-center gap-2 text-dark-800">
                <li>
                  <NavLink className="block p-2 [&.active]:text-purpleprime-500" to={"/manage"}>
                    داشبورد
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block p-2 [&.active]:text-purpleprime-500" to={"/"}>
                    کتاب ها
                  </NavLink>
                </li>
                <li>
                  <NavLink className="block p-2 [&.active]:text-purpleprime-500" to={"/publishers"}>
                    ناشران
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <Avatar />
        </div>
      </div>
    </header>
  );
}

export default Header;
