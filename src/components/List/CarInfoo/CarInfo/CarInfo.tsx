import { useState } from "react";
import { ItemContainer, Item } from "./styles";
import { CarInfoModals } from "../CarInfoModals/CarInfoModals";
import { CarInfoProps } from "../../../../interfaces/PropsInterfaces";

export default function CarInfo({ car }: CarInfoProps) {
  const [selected, setSelected] = useState(true);

  const ShowModals = () => {
    setSelected(!selected);
  };

  return (
    <>
      <ItemContainer key={car.placa} onClick={ShowModals}>
        <Item>{car.placa!.toUpperCase()}</Item>
      </ItemContainer>
      {!selected ? <CarInfoModals car={car} /> : null}
    </>
  );
}
