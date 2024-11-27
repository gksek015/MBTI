import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./shared/Router";
import { AuthProvider } from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Router/>
      <ToastContainer/>
      </AuthProvider>
  )
}

export default App;
