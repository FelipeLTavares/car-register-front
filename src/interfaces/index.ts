//Types
type Cambio = "manual" | "automatico" | "automatizado" | "CVT" | "";

//Interface
export interface Carro {
  marca: string;
  modelo: string;
  cor: string;
  anoFabricacao: number;
  anoModelo: number;
  tipoCambio: Cambio;
}
