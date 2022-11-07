import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CarList from "../components/List/CarList/CarList";
import ListFilter from "../components/List/ListFilter/ListFilter";
import { Button } from "../styles/styles";
import { Carro } from "../interfaces";
import { styled } from "@stitches/react";
import { CarContext } from "../context/CarContext";
import { API_URL } from "../utils";

const Container = styled("div", {
  width: 360,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export default function Home() {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const { cars, SetCars }: any = useContext(CarContext);

  function showHideFilter() {
    setShowFilter(showFilter ? false : true);
  }

  async function getCars() {
    await axios
      .get(API_URL)
      .then((resp) => {
        SetCars(resp.data);
      })
      .catch((err) => {
        window.alert("Ocorreu um erro. Tente novamente mais tarde.");
      });
  }

  function setCarsOnList(data: Carro[]) {
    SetCars(data);
  }

  useEffect(() => {
    getCars();
  }, []);

  return (
    <Container>
      <Button type="button" value="Filtro" onClick={showHideFilter} />
      {showFilter ? (
        <ListFilter set={setCarsOnList} show={showHideFilter} />
      ) : null}
      {!cars ? <p>Sem conexão com o BD</p> : <CarList list={cars}></CarList>}
    </Container>
  );
}
