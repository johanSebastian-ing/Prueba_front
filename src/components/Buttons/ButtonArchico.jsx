import { useState } from 'react';
import Unfold from "../../assets/images/upload.png";
export default function LogoUpload() {
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

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

  return (
    <div className="w-full">
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
          required
        />
        
        {!logoPreview ? (
          <>
            <label htmlFor="logo-input" className="text-[14px] text-gray-500 font-archivo cursor-pointer flex-1">
              Carga archivo
            </label>
            <label htmlFor="logo-input" className="cursor-pointer text-gray-400 hover:text-gray-600">
                <img
                src={Unfold}
                alt="Sidebar background"
                className="w-full h-full object-cover"
                />
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
  );
}