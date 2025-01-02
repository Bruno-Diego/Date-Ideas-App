import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
import Link from "next/link";

const StartButton = () => {
  return (
    <div className="flex items-center justify-center">
      <Link href="/dates">
        {/* <!-- Botão com Slide --> */}
        <div
          id="slideBtn"
          className="relative w-64 h-16 bg-white rounded-full flex items-center cursor-pointer overflow-hidden"
        >
          <div className="w-60 h-12 bg-white rounded-full flex items-center mx-auto border-2 border-[#C32228] cursor-pointer overflow-hidden">
            <div className="w-56 h-9 bg-[#C32228] rounded-full flex items-center mx-auto cursor-pointer overflow-hidden">
              {/* <!-- Ícone de Coração --> */}

              <div
                id="heart"
                className="absolute left-4 flex items-center justify-center bg-white text-white w-10 h-10 rounded-full transition-transform duration-300"
              >
                <div className="text-[#C32228] text-2xl">
                  <BsFillHeartFill />
                </div>
              </div>
              <div className="uppercase text-white mx-auto font-bold text-xl">
                começar
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default StartButton;
