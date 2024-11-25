import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "@/ui/AppLayout";
import "./index.css";
import Books from "@/page/Books";
import ManageBooks from "@/page/ManageBooks";
import Dashboard from "@/page/Dashboard";
import Publishers from "@/page/Publishers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "@/store";
import { Provider } from "react-redux";
import DashboardLayout from "./ui/DashboardLayout";
const queryClient = new QueryClient();
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
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
        </BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
}
export default App;
