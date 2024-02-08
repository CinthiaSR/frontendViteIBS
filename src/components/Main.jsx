// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";
// import Header from "./Header";
import {BsSearch, BsPersonCircle, BsArrowLeftSquareFill} from "react-icons/bs";

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openOrders, setOpenOrders] = useState(false);

  const handleOpenLi = () => {
    console.log("aqui abre menu de pedidos");
    setOpenOrders(!openOrders);
  };

  const handleSidebar = () => {
    console.log("aqui boton de menu movil");
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex">
      {/* <div className={`${menuOpen? }basis-[15%] h-[100vh]`}> */}
      <div
        className={`${
          menuOpen
            ? "w-[30%] 2xl:w-[12%] xl:w-[13%] lg:w-[18%] md:w-[23%]"
            : "2xl:xl:lg:w-[5%]  2xl:xl:md:w-[5%]"
        } h-[100vh]  duration-300 bg-[#7C081A] `}>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
      {/* <div className={`basis-[85%] border`}> */}
      <div
        className={`${
          menuOpen
            ? "w-[70%] 2xl:w-[88%] xl:w-[87%] lg:w-[82%] md:w-[77%]"
            : "w-[95%]"
        } border duration-300`}>
        {/* <Header /> */}
        <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px] bg-white">
          {/* btn menu movil */}
          <div>
            <button className="flex items-center gap-3" onClick={handleSidebar}>
              <span className="font-semibold">MENÚ</span>
              <BsArrowLeftSquareFill
                className={`text-red-900 text-2xl ${!menuOpen && "rotate-180"}`}
                // onClick={handleSidebar}
              />
            </button>
          </div>
          {/* <form action="" className="flex items-center rounded-md w-[50%]">
            <input
              type="text"
              className="bg-gray-200 h-[40px] outline-none pl-[130px] w-[350] rounded-b rounded-t placeholder:text-[14px] leading-[20px] font-normal"
              placeholder="Buscar..."
            />
            <div className="bg-[#7C081A] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
              <BsSearch color="white" />
            </div>
          </form> */}
          <div className="flex items-center gap-4">
            <p>Cinthia Sanchez</p>
            <span className="cursor-pointer">
              <BsPersonCircle className="text-[#7C081A] text-3xl" />
            </span>
          </div>
        </div>
        {/* <Dashboardview /> */}
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
