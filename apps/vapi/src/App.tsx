import { Outlet, Route, Routes } from "react-router-dom";

function App() {
  console.info(import.meta.env.VITE_API_KEY);

  return (
    <Routes>
      <Route element={<Outlet />}>
      <Route path="/">
        <p>hello</p>
      </Route></Route>
    </Routes>
  );
}

export default App;
