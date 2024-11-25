import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/ui/AppLayout";
import "./index.css";
import store from "@/store";
import { Provider } from "react-redux";
import DashboardLayout from "./ui/DashboardLayout";
import QueryProvider from "./hooks/queryProvider";
import { Suspense, lazy } from "react";
import FallBackSpinner from "./ui/FallBackSpinner";

const Publishers = lazy(() => import("@/page/Publishers"));
const Dashboard = lazy(() => import("@/page/Dashboard"));
const ManageBooks = lazy(() => import("@/page/ManageBooks"));
const Books = lazy(() => import("@/page/Books"));

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryProvider>
        <BrowserRouter>
          <Suspense fallback={<FallBackSpinner />}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" index element={<Books />}></Route>
                <Route path="publishers" element={<Publishers />}></Route>
              </Route>
              <Route element={<DashboardLayout />}>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="manage" element={<ManageBooks />}></Route>
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryProvider>
    </Provider>
  );
}
export default App;
