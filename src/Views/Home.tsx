import axios from "axios";
import { useEffect, useState } from "react";
import CarList from "../components/CarList/CarList";
import ListFilter from "../components/ListFilter/ListFilter";
import { Button } from "../components/UI/GeneralStyles/styles";
import { Carro } from "../interfaces";
import { styled } from "@stitches/react";

const Container = styled("div", {
  width: 360,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 20,
});

export default function Home() {
  const [carros, setCarros] = useState<Carro[] | undefined>();
  const [showFilter, setShowFilter] = useState<boolean>(false);

  function showHideFilter() {
    setShowFilter(showFilter ? false : true);
  }

  async function getCars() {
    const API_URL = import.meta.env.VITE_API_URL;
    const carsList = await axios.get(API_URL);
    setCarros(carsList.data);
  }

  function setCarsOnList(data: Carro[]) {
    setCarros(data);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container>
      <Button type="button" value="Filtro" onClick={showHideFilter} />
      {showFilter ? <ListFilter set={setCarsOnList} /> : null}
      {!carros ? (
        <p>Sem conexão com o BD</p>
      ) : (
        <CarList list={carros}></CarList>
      )}
    </Container>
  );
}
