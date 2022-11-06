//Types
export type Cambio = "manual" | "automatico" | "";

//Interfaces
export interface Carro {
  id?: number;
  placa?: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  anoFabricacao?: number;
  anoModelo?: number;
  cambio?: Cambio;
}

export interface CarroFilter {
  placa?: string;
  marca?: string;
  modelo?: string;
  cor?: string;
  cambio?: string;
  anoModelo: {
    de?: number;
    ate?: number;
  };
  anoFabricacao: {
    de?: number;
    ate?: number;
  };
}
