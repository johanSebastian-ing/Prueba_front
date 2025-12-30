import React, { useState } from "react";
import ModalBase from "../index";
import Unfold from "../../../assets/images/upload.png";
const ModalCreate = ({ isOpen, onClose, text }) => {
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [color, setColor] = useState("");
  const [isActive, setIsActive] = useState(true);

  const handleCategoryNameChange = (e) => setCategoryName(e.target.value);
  const handleCategoryDescriptionChange = (e) => setCategoryDescription(e.target.value);
  const handleColorChange = (e) => setColor(e.target.value);
  const handleToggleChange = () => setIsActive(!isActive);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoFile(null);
    setLogoPreview(null);
  };

  const isFormValid = () => {
    return (
      categoryName.trim() !== "" &&
      categoryDescription.trim() !== "" &&
      logoFile !== null &&
      color.trim() !== ""
    );
  };

  const handleClose = () => {
    onClose();
    setCategoryName("");
    setCategoryDescription("");
    setLogoFile(null);
    setLogoPreview(null);
    setColor("");
    setIsActive(true);
  };

  const handleCreate = () => {
    if (isFormValid()) {
      console.log({
        categoryName,
        categoryDescription,
        logoFile,
        color,
        isActive
      });
      alert("Categoría creada exitosamente");
      handleClose();
    }
  };

  return (
    <ModalBase isOpen={isOpen} onClose={handleClose}>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">{text}</h2>

        <div>
          <label className="block text-[14px] font-normal text-gray-700 font-archivo">
            Nombre de la categoría <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={categoryName}
            onChange={handleCategoryNameChange}
            placeholder="Escribe el nombre de la buena acción"
            className="mt-2 w-full p-2 border border-gray-300 text-[14px] rounded-md font-normal text-gray-700 font-archivo"
          />
        </div>

        <div>
          <label className="block text-[14px] font-normal text-gray-700 font-archivo mb-2">
            Descripción de la buena acción <span className="text-red-500">*</span>
          </label>
          <textarea
            value={categoryDescription}
            onChange={handleCategoryDescriptionChange}
            placeholder="Agregar descripción"
            className="mt-2 w-full p-2 border border-gray-300 rounded-md text-[14px] font-normal text-gray-700 font-archivo"
            maxLength="200"
          />
          <div className="flex justify-end mt-1">
            <span className="text-xs text-gray-500">{categoryDescription.length}/200</span>
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-normal text-gray-700 font-archivo mb-2">
            Logo <span className="text-red-500">*</span>
          </label>
          <div className="relative w-full border border-gray-300 rounded-md p-3 flex items-center justify-between bg-white">
            <input
              type="file"
              onChange={handleLogoChange}
              accept="image/*"
              className="hidden"
              id="logo-input"
            />
            
            {!logoPreview ? (
              <>
                <label htmlFor="logo-input" className="text-[14px] text-gray-500 font-archivo cursor-pointer flex-1">
                  Carga archivo
                </label>
                <label htmlFor="logo-input" className="cursor-pointer text-gray-400 hover:text-gray-600">
                  <div className="w-[16px] h-[16px]">
                    <img
                      src={Unfold}
                      alt="Sidebar background"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </label>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={logoPreview}
                    alt="Logo"
                    className="w-10 h-10 object-contain"
                  />
                  <p className="text-[14px] text-gray-700 font-archivo truncate">
                    {logoFile?.name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={removeLogo}
                  className="text-gray-400 hover:text-red-500 ml-2 font-bold text-lg"
                >
                  ✕
                </button>
              </>
            )}
          </div>
        </div>

        <div>
          <label className="block text-[14px] font-normal text-gray-700 font-archivo">
            Color <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={color}
            onChange={handleColorChange}
            placeholder="Registra color código HEX"
            className="mt-2 w-full p-2 border border-gray-300 rounded-md text-[14px] font-normal text-gray-700 font-archivo"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleChange}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors border-2 ${
              isActive ? 'bg-white border-[#01BABB]' : 'bg-gray-100 border-gray-300'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full transition-transform ${
                isActive ? 'bg-[#01BABB] translate-x-5' : 'bg-gray-400 translate-x-1'
              }`}
            />
          </button>
          <label className="text-sm font-medium text-gray-700">Activo</label>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={handleClose}
            className="flex-1 py-2 bg-white text-black rounded-md font-archivo text-[14px] font-medium border-2 border-[#1E1B4D]"
          >
            Cancelar
          </button>
          <button
            onClick={handleCreate}
            disabled={!isFormValid()}
            className={`flex-1 py-2 rounded-md font-archivo text-[14px] font-medium text-white transition-opacity ${
              isFormValid() ? 'bg-[#1E1B4D] cursor-pointer' : 'bg-[#D2D1D4] cursor-not-allowed opacity-50 text-gray-500'
            }`}
          >
            Crear
          </button>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalCreate;