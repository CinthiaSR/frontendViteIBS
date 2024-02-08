/* eslint-disable no-unused-vars */
import React from "react";
import {BsSearch, BsPersonCircle} from "react-icons/bs";
const Header = () => {
  return (
    <div className="flex items-center justify-between h-[70px] shadow-lg px-[25px]">
      <form action="" className="flex items-center rounded-md">
        <input
          type="text"
          className="bg-gray-200 h-[40px] outline-none pl-[13px] w-[350] rounded-b rounded-t placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Buscar..."
        />
        <div className="bg-[#7C081A] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <BsSearch color="white" />
        </div>
      </form>
      <div className="flex items-center gap-4">
        <p>Cinthia Sanchez</p>
        <span className="cursor-pointer">
          <BsPersonCircle className="text-[#7C081A] text-3xl" />
        </span>
      </div>
    </div>
  );
};

export default Header;
