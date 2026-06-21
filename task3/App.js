import { BrowserRouter, Routes, Route, Link }
from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/users">Users</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;