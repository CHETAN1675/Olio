import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Spinner from "../components/common/Spinner";

const HomePage = lazy(() => import("../components/layout/HomePage"));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
}