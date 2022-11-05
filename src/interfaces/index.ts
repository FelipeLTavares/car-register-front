//Types
export type Cambio = "manual" | "automatico" | "";

//Interface
export interface Carro {
  placa: string;
  marca: string;
  modelo: string;
  cor: string;
  anoFabricacao: number;
  anoModelo: number;
  cambio: Cambio;
}

export interface CarroFilter {
  placa: string | undefined;
  marca: string | undefined;
  modelo: string | undefined;
  cor: string | undefined;
  cambio: string | undefined;
  anoModelo: {
    de: number | undefined;
    ate: number | undefined;
  };
  anoFabricacao: {
    de: number | undefined;
    ate: number | undefined;
  };
}

//Props
export interface CarInfoProps {
  car: Carro;
}

export interface CarListProps {
  list: Carro[];
}

/*   function teste() {
    const API_URL = import.meta.env.VITE_API;
    console.log(BASE_URL);
  } */
