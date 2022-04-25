import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Agendamentos from "./pages/Agendamentos";
import Cadastro from "./pages/Castrastro";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/agendamentos" element={<Agendamentos />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

