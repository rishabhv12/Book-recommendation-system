import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Loginpage from "./components/Loginpage";
import Newuser from "./components/NewUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/newuser" element={<Newuser />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
