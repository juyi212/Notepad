import { Routes, Route } from "react-router-dom"
import Layout from "../components/Layout";
import TodoDetail from "../components/TodoDetail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";



const App = () => {
    return (

            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}>
                        <Route path="/todos/:id" element={<TodoDetail />}/>
                    </Route>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/signup" element={<Signup />}/>
                </Route>
            </Routes>
    )
}

export default App;