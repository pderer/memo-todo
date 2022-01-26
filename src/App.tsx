import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Memo from "./routes/Memo";
import Todos from "./routes/Todos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/memo" element={<Memo />}></Route>
      <Route path="/todo" element={<Todos />}></Route>
    </Routes>
  );
}

export default App;
