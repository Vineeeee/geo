import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Date } from "./date"
import { Cu } from "./cu"

const AppRoutes = () => {

    return(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Date/>} />
            <Route exact path="/feliz-aniversario-gatinha" element={<Cu/>} />
        </Routes>
    </BrowserRouter>
    )
}

export { AppRoutes }