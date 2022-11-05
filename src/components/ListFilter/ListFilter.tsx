import { AgeFilterContainer, Container } from "./styles";
import {
  Input,
  Label,
  Title,
  Select,
  Button,
  Form,
} from "../UI/GeneralStyles/styles";
import React, { useState } from "react";
import { Carro, CarroFilter } from "../../interfaces";
import axios from "axios";

export interface ListFilterprops {
  set: (data: Carro[]) => void;
}

export default function ListFilter({ set }: ListFilterprops) {
  const [formData, setFormaData] = useState<CarroFilter>({
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
  });
  //Car ages length
  let ages: number[] = [];
  for (let i = 2024; i > 1950; i--) ages.push(i);
  //Cambio List
  const CambioTypes: string[] = ["manual", "automatico"];

  function filterCars(e: React.SyntheticEvent) {
    e.preventDefault();
    const API_URL = import.meta.env.VITE_API_URL;
    axios.post(`${API_URL}filter`, formData).then((resp) => {
      set(resp.data);
    });
  }

  return (
    <Container>
      <Form onSubmit={filterCars}>
        <Title>Filtro</Title>
        <Label>Placa</Label>
        <Input
          type="text"
          placeholder="Placa"
          value={formData.placa}
          onChange={(e) => setFormaData({ ...formData, placa: e.target.value })}
        />

        <Label>Marca</Label>
        <Input
          type="text"
          placeholder="Marca"
          value={formData.marca}
          onChange={(e) => setFormaData({ ...formData, marca: e.target.value })}
        />

        <Label>Modelo</Label>
        <Input
          type="text"
          placeholder="Modelo"
          value={formData.modelo}
          onChange={(e) =>
            setFormaData({ ...formData, modelo: e.target.value })
          }
        />

        <Label>Ano do Modelo</Label>
        <AgeFilterContainer>
          <Input
            type="number"
            placeholder="A partir de"
            value={formData.anoModelo.de}
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoModelo: {
                  ...formData.anoModelo,
                  de: Number(e.target.value),
                },
              })
            }
          />
          <Input
            type="number"
            placeholder="Até"
            value={formData.anoModelo.ate}
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoModelo: {
                  ...formData.anoModelo,
                  ate: Number(e.target.value),
                },
              })
            }
          />
        </AgeFilterContainer>

        <Label>Ano do Modelo</Label>
        <AgeFilterContainer>
          <Input
            type="number"
            placeholder="A partir de"
            value={formData.anoFabricacao.de}
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoFabricacao: {
                  ...formData.anoFabricacao,
                  de: Number(e.target.value),
                },
              })
            }
          />
          <Input
            type="number"
            placeholder="Até"
            value={formData.anoFabricacao.ate}
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoFabricacao: {
                  ...formData.anoFabricacao,
                  ate: Number(e.target.value),
                },
              })
            }
          />
        </AgeFilterContainer>

        <Label>Tipo de Câmbio</Label>
        <Select
          onChange={(e) =>
            setFormaData({ ...formData, cambio: e.target.value })
          }
        >
          <option value=""></option>
          {CambioTypes.map((camb) => (
            <option value={camb} key={camb}>
              {camb.toUpperCase()}
            </option>
          ))}
        </Select>

        <Label>Cor</Label>
        <Input
          type="text"
          placeholder="Cor"
          value={formData.cor}
          onChange={(e) => setFormaData({ ...formData, cor: e.target.value })}
        />

        <Button type="submit" value="Filtrar" />
      </Form>
    </Container>
  );
}
