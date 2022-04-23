import { BrowserRouter, Route, Routes } from "react-router-dom";

import PacienteForm from "./pages/Cadastro/PacienteForm";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/agendamentos" element={<PacienteForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

