// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {
  BsHouseFill,
  BsChevronDown,
  BsChevronUp,
  BsPeopleFill,
  BsPersonCircle,
  BsFillKeyFill,
  BsCashCoin,
  BsCardHeading,
  BsBoxArrowInRight,
} from "react-icons/bs";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({menuOpen, setMenuOpen}) => {
  const [openOrders, setOpenOrders] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenLi = () => {
    console.log("aqui abre menu de pedidos");
    setOpenOrders(!openOrders);
  };
  // const handleSidebar = () => {
  //   console.log("aqui boton de menu movil");
  //   setMenuOpen(!menuOpen);
  // };

  return (
    <div className="inline-flex mt-8">
      <ul>
        <div className="flex items-center justify-center">
          {!menuOpen ? (
            <h1 className="font-semibold text-white text-[16px]">Admin</h1>
          ) : (
            <h1 className="font-semibold text-white text-[16px]">
              Administrador
            </h1>
          )}
          {/* <h1>ADMINISTRADOR</h1> */}
        </div>
        <nav>
          <Link to={"/"}>
            <li className="flex items-center m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
              <BsHouseFill className="text-white text-2xl" />
              <span
                className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                  !menuOpen ? "hidden" : "block"
                }`}>
                Dashboard
              </span>
              {/* <span className={`hidden`}>Dashboard</span> */}
            </li>
          </Link>
          <Link to={"usuarios"}>
            <li className="flex items-center m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
              <BsPersonCircle className="text-white text-2xl " />
              <span
                className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                  !menuOpen ? "hidden" : "block"
                }`}>
                Usuarios
              </span>
              <div
                id="tooltip-right"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Tooltip on right
                <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
          </Link>
          <Link to={"clientes"}>
            <li className="flex items-center m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
              <BsPeopleFill className="text-white text-2xl" />
              <span
                className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                  !menuOpen ? "hidden" : "block"
                }`}>
                Clientes
              </span>
            </li>
          </Link>
          <Link to={"permisos"}>
            <li className="flex items-center m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
              <BsFillKeyFill className="text-white text-2xl" />
              <span
                className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                  !menuOpen ? "hidden" : "block"
                }`}>
                Permisos
              </span>
            </li>
          </Link>
          <Link to={"cobranza"}>
            <li className="flex items-center m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
              <BsCashCoin className="text-white text-2xl" />
              <span
                className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                  !menuOpen ? "hidden" : "block"
                }`}>
                Cobranza
              </span>
            </li>
          </Link>
          <li
            className="m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md  cursor-pointer"
            onClick={handleOpenLi}>
            <div className="flex items-center justify-between gap-[10px]">
              <div className="flex items-center gap-[15px]">
                <BsCardHeading className="text-white text-2xl" />
                <span
                  className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                    !menuOpen ? "hidden" : "block"
                  }`}>
                  Pedidos
                </span>
              </div>
              <BsChevronUp
                className={`text-white ${!openOrders && "rotate-180"} ${
                  !menuOpen ? "hidden" : "block"
                }`}
              />
            </div>

            <div
              className={` bg-transparent ${openOrders ? "block" : "hidden"} `}>
              <nav>
                <ul>
                  <li className="text-white px-3 py-[8px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                    Arcos
                  </li>
                  <li className="text-white px-3 py-[8px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointertext-white ">
                    Horizontales
                  </li>
                  <li className="text-white px-3 py-[8px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointertext-white ">
                    Roller Shades
                  </li>
                  <li className="text-white px-3 py-[8px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointertext-white ">
                    Shutter
                  </li>
                </ul>
              </nav>
            </div>
          </li>
          <Link to={"#"}>
            <li className="flex items-center m-4 gap-5 px-3 py-[10px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
              <BsBoxArrowInRight className={`text-white text-2xl`} />
              <span
                className={`text-white font-medium text-[16px] flex-1 duration-300 ${
                  !menuOpen ? "hidden" : "block"
                }`}>
                Salir
              </span>
            </li>
          </Link>
        </nav>
      </ul>
    </div>
  );
};

export default Sidebar;
