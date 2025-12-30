import { useState } from "react";
import Categorias from "./categorias";
import Tipos from "./categorias";
import Evidencias from "./categorias";

const tabs = ["Categorias", "Tipos", "Evidencias"];


export default function Home() {
  const [activeTab, setActiveTab] = useState("Categorias");

  const renderContent = () => {
    switch (activeTab) {
      case "Categorias":
        return <Categorias />;
      case "Tipos":
        return <Tipos />;
      case "Evidencias":
        return <Evidencias />;
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      {/* Título */}
      <h1 className="text-xl font-semibold mb-6">
        {activeTab}
      </h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        {tabs.map((tab) => {
          const isActive = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                relative pb-3 text-sm font-medium transition
                ${isActive ? "text-[#1E1B4D]" : "text-black"}
              `}
            >
              {tab}

              {isActive && (
                <span
                  className="
                    absolute left-0 right-0 -bottom-[1px]
                    h-[2px] bg-[#1E1B4D]
                  "
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Contenido */}
      {renderContent()}
    </div>
  );
}
