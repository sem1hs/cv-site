import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/app" replace></Navigate>}
        ></Route>
        <Route path="/app" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
