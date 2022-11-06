import { Carro, CarroFilter } from "../interfaces";

//Select informations
export const ages: number[] = [];
for (let i = 2024; i > 1950; i--) ages.push(i);

export const CambioTypes: string[] = ["manual", "automatico"];

//Intial States
export const InitialCarData: Carro = {
  placa: "",
  marca: "",
  modelo: "",
  cor: "",
  anoFabricacao: 1950,
  anoModelo: 1950,
  cambio: "",
};

export const IntialStateCarFilter: CarroFilter = {
  placa: undefined,
  marca: undefined,
  modelo: undefined,
  cor: undefined,
  anoFabricacao: {
    de: undefined,
    ate: undefined,
  },
  anoModelo: {
    de: undefined,
    ate: undefined,
  },
  cambio: undefined,
};

//API URL
export const API_URL = import.meta.env.VITE_API_URL;
