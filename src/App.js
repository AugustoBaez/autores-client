import "./App.css";
import EditAuthor from "./components/EditAuthor";
import Authors from "./components/Authors";
import AddAuthor from "./components/Authors";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Authors />}></Route>
          <Route path="/add" element={<AddAuthor />}></Route>
          <Route path="/edit/:id" element={<EditAuthor />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
