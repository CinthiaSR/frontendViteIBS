import "./App.css";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/1.home/Home";
import Users from "./pages/2.users/Users";
import Clients from "./pages/3.clients/Clients";
import Permisos from "./pages/4.permisos/Permisos";
import Login from "./pages/login/Login";
import Recovery from "./pages/login/Recovery";

import Test from "./pages/tst";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Rutas publicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/testRecaptcha" element={<Test />} />

        {/*  */}
        <Route path="/app-dashboard" element={<Main />}>
          {/* <Route path="/" element={<Main />}> */}
          {/* <Route path="/" element={<Main />} /> */}
          {/* <Route path="dashboard" element={<Main />} /> */}
          <Route path="usuarios" element={<Users />} />
          <Route path="clientes" element={<Clients />} />
          <Route path="permisos" element={<Permisos />} />
        </Route>
      </Routes>
    </div>
    // <div className="flex">
    //   <div className="basis-[15%] h-[100vh]">
    //     <Sidebar />
    //   </div>
    //   <div className="basis-[85%] border">
    //     <Dashboardview />
    //     <div>
    //       <Outlet />
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
