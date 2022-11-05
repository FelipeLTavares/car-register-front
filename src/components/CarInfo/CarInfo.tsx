import { useState } from "react";
import { ItemContainer, Content, Item, Info } from "./styles";
import { CarInfoProps } from "../../interfaces";

export default function CarInfo({ car }: CarInfoProps) {
  const [selected, setSelected] = useState<string | undefined>();

  function showinfo() {
    if (selected === "selected") {
      setSelected(undefined);
      return;
    }
    setSelected("selected");
  }

  return (
    <ItemContainer key={car.placa}>
      <Item selected={selected} onClick={showinfo}>
        {car.placa.toUpperCase()}
      </Item>
      <Content selected={selected}>
        <Info>Marca: {car.marca}</Info>
        <Info>Modelo: {car.modelo}</Info>
        <Info>Cor: {car.cor}</Info>
        <Info>Ano Fabricação: {car.anoFabricacao}</Info>
        <Info>Ano Modelo: {car.anoModelo}</Info>
        <Info>Câmbio: {car.cambio}</Info>
      </Content>
    </ItemContainer>
  );
}
