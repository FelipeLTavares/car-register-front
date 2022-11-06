import { Container } from "./styles";
import CarInfo from "../CarInfoo/CarInfo/CarInfo";
import { Link } from "react-router-dom";
import { LinkButton } from "../../../styles/styles";
import { CarListProps } from "../../../interfaces/PropsInterfaces";

export default function CarList({ list }: CarListProps) {
  return (
    <>
      <Container>
        {list.map((car) => {
          return <CarInfo car={car} key={car.id}></CarInfo>;
        })}
      </Container>
      <LinkButton>
        <Link to="/register">Fazer novo registro</Link>
      </LinkButton>
    </>
  );
}
