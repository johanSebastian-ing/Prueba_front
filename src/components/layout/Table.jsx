import { useCategoriasTable } from "../../hooks/useTable";
import Edit from "../../assets/images/Edit.png";
import Delete from "../../assets/images/delete.png";
import Detail from "../../assets/images/join_inner.png";
import IconoOrdenamiento from "../../assets/images/unfold_more.png"; 
import Buttons from "../../components/Buttons/ButtonFilter"
import ButtonsCreate from "../../components/Buttons/ButtonsCategory"
import React, { useState } from "react";
import ModalCreate from "../../components/modal/modalcrear/index";
export default function Table() {
  const {
    data,
    search,
    setSearch,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
    total,
    sortKey,
    sortDirection,
    handleSort,
  } = useCategoriasTable();

  const renderSortIcon = (key) => {
    if (sortKey !== key) return <img src={IconoOrdenamiento} alt="Ordenar" className="w-[16px] h-[16px]" />;
    return sortDirection === "asc" ? "▲" : "▼";
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2"> 
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar"
            className="border px-3 py-2 rounded text-sm w-[236px]"
          />
          <Buttons/> 
        </div>
        <ButtonsCreate text="Crear tipo de categoria" onClick={openModal} /> 
      </div>
      <ModalCreate isOpen={isModalOpen} onClose={closeModal} text="Crear tipo de categoría" />
      <div className="border rounded">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th
                className="p-4 text-left cursor-pointer"
                onClick={() => handleSort("nombre")}
              >
                <div className="flex items-center gap-2">
                  Nombre de la categoría
                  <span className="text-xs">{renderSortIcon("nombre")}</span>
                </div>
              </th>
              <th className="p-4 text-center">Icono</th>
              <th className="p-4 text-center">Estado</th>
              <th className="p-4 text-left">Descripción</th>
              <th
                className="p-4 text-center cursor-pointer"
                onClick={() => handleSort("fechaCreacion")}
              >
                <div className="flex items-center justify-center gap-2">
                  Fecha de creación
                  <span className="text-xs">{renderSortIcon("fechaCreacion")}</span>
                </div>
              </th>
              <th className="p-4 text-center">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-t hover:bg-gray-50">
                <td className="p-4 text-left">{row.nombre}</td>
                <td className="p-4 text-center">
                  <img
                    src={row.icono}
                    alt="Icono categoría"
                    className="w-5 h-5 mx-auto"
                  />
                </td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    {row.estado}
                  </span>
                </td>
                <td className="p-4 text-left text-gray-700">{row.descripcion}</td>
                <td className="p-4 text-center">{row.fechaCreacion}</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <img
                      src={Edit}
                      alt="Editar"
                      className="w-[16px] h-[16px] cursor-pointer"
                    />
                    <img
                      src={Delete}
                      alt="Eliminar"
                      className="w-[16px] h-[16px] cursor-pointer"
                    />
                    <img
                      src={Detail}
                      alt="Ver detalle"
                      className="w-[16px] h-[16px] cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <span>Resultados por página</span>
          <select
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border border-gray-300 rounded px-2 py-1 text-[14px]"
          >
            {[10, 20, 30].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>

        <div className="text-[14px]">
          {(page - 1) * rowsPerPage + 1} - {Math.min(page * rowsPerPage, total)} de {total}
        </div>

        <div className="flex items-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage(1)}
            className="px-2 py-1  border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            title="Primera página"
          >
            ‹‹
          </button>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-2 py-1  border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            title="Página anterior"
          >
            ‹
          </button>
          <button
            disabled={page * rowsPerPage >= total}
            onClick={() => setPage(page + 1)}
            className="px-2 py-1  border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            title="Página siguiente"
          >
            ›
          </button>
          <button
            disabled={page * rowsPerPage >= total}
            onClick={() => setPage(Math.ceil(total / rowsPerPage))}
            className="px-2 py-1  border-gray-300 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            title="Última página"
          >
            ››
          </button>
        </div>
      </div>
    </div>
  );
}
