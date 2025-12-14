import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProjectDetails from "../pages/ProjectDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
    </Routes>
  );
}
