import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const ProtectedRoot = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

function App() {
  return (
    <main>
      <div className="w-full px-6 min-h-screen bg-gray-100 md:px-20">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/sigup" element={<SignUp />} />
          <Route element={<ProtectedRoot />}>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
