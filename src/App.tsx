import axios from "axios";
import { useEffect, useState } from "react";
import CarList from "./components/CarList/CarList";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { Carro } from "./interfaces";
import { GlobalStyles } from "./styles/global.styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";

export default function App() {
  GlobalStyles();
  const [carros, setCarros] = useState<Carro[] | undefined>();

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const carsList = await axios.get("http://localhost:8080/");
    setCarros(carsList.data);
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  );
}
