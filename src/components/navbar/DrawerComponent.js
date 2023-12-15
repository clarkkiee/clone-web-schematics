import React from "react";
import schlogo from "../../img/schlogo.png";
import Dropdown from "./Dropdown";

function DrawerComponent() {
  return (
    <>
      <div className="flex flex-col w-[100vw] bg-[rgb(33,33,33)] h-full">
        <div className="flex mx-auto h-max gap-2 justify-center items-center px-4 py-8">
          <img className="w-[10%]" src={schlogo} alt="schlogo" />
          <h1 className="text-white font-primary text-sm">
            SCHEMATICS 2023 X UBS GOLD
          </h1>
        </div>
        <div className="p-4 flex flex-col">
          <Dropdown />
          <a href={"/"} className="text-slate-300 font-semibold text-lg py-2">
            Tentang Kami
          </a>
        </div>
        <div className="p-3">
          <a href={"/"} className="bg-white">
            <p className="bg-white p-2 flex justify-center font-semibold rounded-md">Masuk</p>
          </a>
        </div>
        <div className="p-3 py-1">
          <a href={"/"} className="">
            <p className="bg-[rgb(33,33,33)] text-white border-2 border-white p-2 flex justify-center font-semibold rounded-md">Daftar</p>
          </a>
        </div>

        <div className="flex absolute bottom-16 left-[calc(50vw-28px)] justify-center p-2 rounded-full border-white border-2 w-max mx-auto ">
            <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 384 512">
                <path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
            </svg>
        </div>

      </div>
    </>
  );
}

export default DrawerComponent;
