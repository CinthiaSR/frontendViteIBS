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

const Sidebar = () => {
  const [openOrders, setOpenOrders] = useState(false);

  const handleOpenLi = () => {
    console.log("aqui abre menu de pedidos");
    setOpenOrders(!openOrders);
  };

  return (
    <div className=" bg-[#7C081A] h-screen px-[20px]">
      <div className="px-[15px] py-[25px] flex items-center justify-center border-b-[1px] border-gray-200/[0.3]">
        <h1 className="text-white text-[20px] leading-[24px] font-extrabold cursor-pointer">
          Menú
        </h1>
      </div>
      <div>
        <nav>
          <ul>
            <Link to={"/"}>
              <li className="px-3 flex items-center gap-[15px] py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                <BsHouseFill className="text-white text-2xl" />
                <span className="text-white font-medium text-[16px] leading-[20px] ">
                  Dashboard
                </span>
              </li>
            </Link>
            <Link to={"usuarios"}>
              <li className="px-3 flex items-center gap-[15px] py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                <BsPersonCircle className="text-white text-2xl" />
                <span className="text-white font-medium text-[16px] leading-[20px]">
                  Usuarios
                </span>
              </li>
            </Link>
            <Link to={"clientes"}>
              <li className="px-3 flex items-center gap-[15px] py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                <BsPeopleFill className="text-white text-2xl" />
                <span className="text-white font-medium text-[16px] leading-[20px]">
                  Clientes
                </span>
              </li>
            </Link>
            <Link to={"permisos"}>
              <li className="px-3 flex items-center gap-[15px] py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                <BsFillKeyFill className="text-white text-2xl" />
                <span className="text-white font-medium text-[16px] leading-[20px]">
                  Permisos
                </span>
              </li>
            </Link>
            <Link to={"cobranza"}>
              <li className="px-3 flex items-center gap-[15px] py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                <BsCashCoin className="text-white text-2xl" />
                <span className="text-white font-medium text-[16px] leading-[20px]">
                  Cobranza
                </span>
              </li>
            </Link>
            {/* <Link to={"pedidos"}> */}
            <li
              className="px-3 py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md  cursor-pointer"
              onClick={handleOpenLi}>
              <div className="flex items-center justify-between gap-[10px]">
                <div className="flex items-center gap-[15px]">
                  <BsCardHeading className="text-white text-2xl" />
                  <span className="text-white font-medium text-[16px] leading-[20px]">
                    Pedidos
                  </span>
                </div>
                {openOrders ? (
                  <BsChevronUp className="text-white" />
                ) : (
                  <BsChevronDown className="text-white" />
                )}
                {/* <BsChevronDown className="text-white" /> */}
              </div>

              <div
                className={` bg-transparent ${
                  openOrders ? "block" : "hidden"
                } `}>
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
              <li className="px-3 flex items-center gap-[15px] py-[15px] border-b-[1px] border-gray-200/[0.3] hover:border-gray-100 hover:border-b-[4px] rounded-md cursor-pointer">
                <BsBoxArrowInRight className="text-white text-2xl" />
                <span className="text-white font-medium text-[16px] leading-[20px]">
                  Salir
                </span>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      {/* <div className="flex items-center gap-[15px] py-[20px] border-b-[1px] border-gray-200/[0.3]">
        <BsHouse />
        <span>Dashboard</span>
      </div> */}

      {/* <div className="inline-flex mt-14">
          <ul>
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
                  className={` bg-transparent ${
                    openOrders ? "block" : "hidden"
                  } `}>
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
        </div> */}
    </div>
  );
};
