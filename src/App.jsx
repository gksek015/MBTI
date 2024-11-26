import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Router from "./shared/Router";


function App() {
  return (
    <>
      <Router/>
      <ToastContainer/>
      </>
  )
}

export default App;
