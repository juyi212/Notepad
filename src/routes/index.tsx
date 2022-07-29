import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            {/* <Route path="/signup" element={<Login />}/> */}
        </Routes>
    )
}

export default App;