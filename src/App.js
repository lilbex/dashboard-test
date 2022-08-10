import Navigations from "./components/navigations/Navigations";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigations />} />
      </Routes>
    </div>
  );
}

export default App;
