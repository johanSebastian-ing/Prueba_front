import React from "react";
import FilterIcon from "../../assets/images/IconLeft.png";

const ButtonFilter = () => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-write text-black rounded-lg hover:bg-gray-100 transition duration-200 border-2">
      <img
        src={FilterIcon}
        alt="Filtro"
        className="w-4 h-4" 
      />
      <span>Filtros</span>
    </button>
  );
};

export default ButtonFilter;
