import { Routes, Route } from "react-router-dom"
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/:id" element={<Detail />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
        </Routes>
    )
}

export default App;