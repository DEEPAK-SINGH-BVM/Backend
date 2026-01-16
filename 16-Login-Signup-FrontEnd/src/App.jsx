import Login from "./Login";
import Signup from "./Signup";
import DashBoard from "./dashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./route";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={
            <ProtectedRoute>
              <DashBoard /> 
              </ProtectedRoute>
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
