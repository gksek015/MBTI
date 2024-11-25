import { BrowserRouter, Route, Routes } from "react-router-dom"
// import ProtectedRoute from "./components/ProtectedRoute"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import TestResult from "../pages/TestResult"
import Profile from "../pages/Profile"
import ProtectedRoute from "../components/ProtectedRoute"
import Test from "../pages/Test"


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/test" element={<Test/>}/>
            <Route path="/result" element={<TestResult/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router