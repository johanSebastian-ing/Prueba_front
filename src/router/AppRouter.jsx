import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "../components/layout/Navbar";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const Bakanes = lazy(() => import("../pages/Bakanes"));
const NotFound = lazy(() => import("../pages/NotFound"));


export default function AppRouter() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/Bakanes" element={<Bakanes />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}