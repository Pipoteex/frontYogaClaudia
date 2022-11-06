import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { Welcome } from "../components/welcome";
import { ComisionYoga } from "../components/yogaMisiones/ComisionYoga";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={ <App></App> } />
                <Route path="/" element={ <App></App> } />
                <Route path="/martin" element={ <Welcome></Welcome> } />
                <Route path="/comision_yoga" element={ <ComisionYoga/> } />
            </Routes>
        </BrowserRouter>
    )
}
