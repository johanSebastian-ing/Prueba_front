const ButtonCreate = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-4 py-2 bg-[#1E1B4D] text-white rounded-lg transition duration-200 border-2"
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonCreate;