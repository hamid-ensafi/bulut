import { Outlet } from "react-router-dom";
import HeaderDashboard from "./HeaderDashboard";
import SideBar from "./SideBar";

function DashboardLayout(): React.JSX.Element {
  return (
    <>
      <HeaderDashboard />
      <main>
        <section className="flex  justify-center">
          <div className="w-full 2xl:container flex  ">
            <div className="flex gap-[2%] w-full ">
              <SideBar />
              <div className=" w-10/12  bg-white rounded-xl px-6 py-8  mt-4 ">
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DashboardLayout;
