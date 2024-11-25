import Avatar from "./Avatar";
import logo from "@/assets/image/logo.png";
import { FaRegBell } from "react-icons/fa";

function HeaderDashboard(): React.JSX.Element {
  return (
    <header className="flex justify-center py-4 px-6  bg-white">
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
            <h4 className="font-bold">پروژه تستی</h4>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-dark-200">
              <FaRegBell size={20} />
            </div>
            <Avatar />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeaderDashboard;
