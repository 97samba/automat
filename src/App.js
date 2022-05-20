import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
