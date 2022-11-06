import { createContext, useState } from "react";
import { Carro } from "../interfaces";

export const CarContext = createContext();

export default function CarProvider({ children }) {
  const [cars, setCarros] = useState<Carro[] | undefined>([]);

  const SetCars = (carsGetted: Carro[]) => {
    setCarros(carsGetted);
  };

  return (
    <CarContext.Provider value={{ cars, SetCars }}>
      {children}
    </CarContext.Provider>
  );
}
