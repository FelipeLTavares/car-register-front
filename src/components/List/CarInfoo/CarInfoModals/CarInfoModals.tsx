import axios from "axios";
import { useContext, useState } from "react";
import { CarContext } from "../../../../context/CarContext";
import { CarInfoModalsProps } from "../../../../interfaces/PropsInterfaces";
import { API_URL } from "../../../../utils";
import UpdateModal from "../UpdateModal/UpdateModal";
import { Container, Option, Info, Options } from "./styles";

export const CarInfoModals = ({ car }: CarInfoModalsProps) => {
  const [mode, setMode] = useState(true);
  const { SetCars } = useContext(CarContext);

  const changeMode = () => {
    setMode(!mode);
  };
  const DeleteRegister = async () => {
    await axios
      .delete(API_URL, {
        data: { id: car.id },
      })
      .then((resp) => {
        SetCars(resp.data);
        changeMode();
      });
  };

  return (
    <>
      {mode ? (
        <Container>
          <Info>Placa: {car.placa}</Info>
          <Info>Marca: {car.marca}</Info>
          <Info>Modelo: {car.modelo}</Info>
          <Info>Cor: {car.cor}</Info>
          <Info>Ano Fabricação: {car.anoFabricacao}</Info>
          <Info>Ano Modelo: {car.anoModelo}</Info>
          <Info>Câmbio: {car.cambio}</Info>
          <Options>
            <Option onClick={changeMode} mode="edit">
              Editar
            </Option>
            <Option onClick={DeleteRegister} mode="delete">
              Apagar
            </Option>
          </Options>
        </Container>
      ) : (
        <UpdateModal carId={car.id} changeMode={changeMode} />
      )}
    </>
  );
};
