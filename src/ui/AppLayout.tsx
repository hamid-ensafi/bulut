import { Outlet } from "react-router-dom";
import Header from "./Header";
import ContentLayout from "./ContentLayout";
function AppLayout(): React.JSX.Element {
  return (
    <>
      <Header />
      <main className="mt-4 flex justify-center">
        <ContentLayout>
          <Outlet />
        </ContentLayout>
      </main>
    </>
  );
}

export default AppLayout;
