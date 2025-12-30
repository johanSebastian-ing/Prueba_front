import { useMemo, useState } from "react";
import CameraIcon from "../assets/images/LeadingIcon.png";

export interface Categoria {
  id: number;
  nombre: string;
  icono: string;
  estado: "Activo" | "Inactivo";
  descripcion: string;
  fechaCreacion: string;
}

const MOCK_CATEGORIAS: Categoria[] = Array.from({ length: 40 }).map(
  (_, i) => ({
    id: i + 1,
    nombre: "Foto + Descripción",
    icono: CameraIcon,
    estado: "Activo",
    descripcion: "Realizar actividad física al menos 30 minutos cada día",
    fechaCreacion: "Abr 3, 2024",
  })
);

type SortKey = keyof Categoria | null;
type SortDirection = "asc" | "desc";

export function useCategoriasTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [sortKey, setSortKey] = useState<SortKey>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const filteredData = useMemo(() => {
    return MOCK_CATEGORIAS.filter((item) =>
      item.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortDirection]);

  const total = sortedData.length;

  const paginatedData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, page, rowsPerPage]);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  return {
    data: paginatedData,
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
  };
}
