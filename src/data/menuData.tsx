import { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiBookAlt } from "react-icons/bi";
import { ImProfile } from "react-icons/im";

interface SideBarItem {
  icon: ReactNode;
  link: string;
  name: string;
}

export const sideBarItems: SideBarItem[] = [
  {
    icon: <LuLayoutDashboard />,
    link: "dashboard",
    name: "داشبورد",
  },
  {
    icon: <BiBookAlt />,
    link: "manage",
    name: "مدیریت کتاب ها",
  },
  {
    icon: <ImProfile />,
    name: "فروشگاه",
    link: "/",
  },
];
