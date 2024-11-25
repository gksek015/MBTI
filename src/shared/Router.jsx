import { BrowserRouter, Route, Routes } from "react-router-dom"
// import ProtectedRoute from "./components/ProtectedRoute"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import TestPage from "../pages/TestPage"
import TestResult from "../pages/TestResult"
import TestResultList from "../pages/TestResultList"
import Profile from "../pages/Profile"
import ProtectedRoute from "../components/ProtectedRoute"


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<ProtectedRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/test-page" element={<TestPage/>}/>
            <Route path="/test-result" element={<TestResult/>}/>
            <Route path="/test-list" element={<TestResultList/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router