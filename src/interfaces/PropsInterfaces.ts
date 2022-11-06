import { Carro } from ".";

export interface CarInfoProps {
  car: Carro;
}

export interface CarListProps {
  list: Carro[];
}

export interface UpdateModalProps {
  carId: any;
  changeMode: () => void;
}

export interface ListFilterprops {
  set: (data: Carro[]) => void;
  show: () => void;
}

export interface CarInfoModalsProps {
  car: Carro;
}
