import React, { useContext, useState } from "react";
import {
  UpdateForm,
  UpdateInput,
  UpdateLabel,
  UpdateSelect,
  UpdateButton,
  UpdateTitle,
  Close,
} from "./styles";
import { Cambio, Carro } from "../../../../interfaces";
import axios from "axios";
import { CarContext } from "../../../../context/CarContext";
import { UpdateModalProps } from "../../../../interfaces/PropsInterfaces";
import { ages, API_URL, CambioTypes, InitialCarData } from "../../../../utils";

export default function UpdateModal({ carId, changeMode }: UpdateModalProps) {
  const [updateFormData, setUpdateFormData] = useState<Carro>({});
  const { SetCars }: any = useContext(CarContext);

  const submitUpdateForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const response = await axios.put(API_URL, {
      changes: updateFormData,
      id: carId,
    });
    SetCars(response.data);
    changeMode();
  };

  return (
    <>
      <UpdateForm onSubmit={submitUpdateForm}>
        <Close onClick={changeMode}>x</Close>
        <UpdateTitle>Modificar registro</UpdateTitle>
        <UpdateLabel>Placa</UpdateLabel>
        <UpdateInput
          type="text"
          placeholder="Placa"
          value={updateFormData.placa}
          onChange={(e) =>
            setUpdateFormData({ ...updateFormData, placa: e.target.value })
          }
        />
        <UpdateLabel>Marca</UpdateLabel>
        <UpdateInput
          type="text"
          placeholder="Marca"
          value={updateFormData.marca}
          onChange={(e) =>
            setUpdateFormData({ ...updateFormData, marca: e.target.value })
          }
        />
        <UpdateLabel>Modelo</UpdateLabel>
        <UpdateInput
          type="text"
          placeholder="Modelo"
          value={updateFormData.modelo}
          onChange={(e) =>
            setUpdateFormData({ ...updateFormData, modelo: e.target.value })
          }
        />
        <UpdateLabel>Cor</UpdateLabel>
        <UpdateInput
          type="text"
          placeholder="Cor"
          value={updateFormData.cor}
          onChange={(e) =>
            setUpdateFormData({ ...updateFormData, cor: e.target.value })
          }
        />
        <UpdateLabel>Ano de Fabricação</UpdateLabel>
        <UpdateSelect
          onChange={(e) =>
            setUpdateFormData({
              ...updateFormData,
              anoFabricacao: Number(e.target.value),
            })
          }
        >
          <option value=""></option>
          {ages.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </UpdateSelect>
        <UpdateLabel>Ano do Modelo</UpdateLabel>
        <UpdateSelect
          onChange={(e) =>
            setUpdateFormData({
              ...updateFormData,
              anoModelo: Number(e.target.value),
            })
          }
        >
          <option value=""></option>
          {ages.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </UpdateSelect>
        <UpdateLabel>Teste</UpdateLabel>
        <UpdateSelect
          onChange={(e) =>
            setUpdateFormData({
              ...updateFormData,
              cambio: e.target.value as Cambio,
            })
          }
        >
          <option value=""></option>
          {CambioTypes.map((cambio) => (
            <option value={cambio} key={cambio}>
              {cambio}
            </option>
          ))}
        </UpdateSelect>
        <UpdateButton type="submit" value="Mudar" />
      </UpdateForm>
    </>
  );
}
