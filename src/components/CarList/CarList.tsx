import { Container } from "./styles";
import { CarListProps } from "../../interfaces";
import CarInfo from "../CarInfo/CarInfo";
import { Link } from "react-router-dom";

export default function CarList({ list }: CarListProps) {
  return (
    <>
      <Container>
        {list.map((car) => {
          return <CarInfo car={car} key={car.id}></CarInfo>;
        })}
      </Container>
      <Link to="/register">CADASTRAR NOVO</Link>
    </>
  );
}
