import Navigations from "./components/navigations/Navigations";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <ToastContainer limit={1} style={{ fontSize: "16px" }} />
      <Routes>
        <Route path="/" element={<Navigations />} />
      </Routes>
    </div>
  );
}

export default App;
