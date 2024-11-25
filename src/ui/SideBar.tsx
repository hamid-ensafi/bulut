import { IoIosLogOut } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import MenuItem from "./MenuItem";

function SideBar() {
 
  return (
    <aside className=" w-max border-l border-t border-dark-200">
      <div className="h-screen sticky top-0 bg-white text-dark-700">
        <nav className="p-6 flex flex-col justify-between h-full">
          <div>
            <div className="py-3 ">
              <Button type="purpleBg">
                <IoMdArrowForward className="text-purpleprime-500" />
              </Button>
            </div>
           <MenuItem></MenuItem>
          </div>
          <div>
            <NavLink className="flex items-center gap-2" to="/">
              <IoIosLogOut />
              <p>خروج از حساب کاربری </p>
            </NavLink>
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default SideBar;
