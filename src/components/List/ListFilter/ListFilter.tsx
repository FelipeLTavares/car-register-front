import { AgeFilterContainer, Container } from "./styles";
import {
  Input,
  Label,
  Title,
  Select,
  Button,
  Form,
} from "../../../styles/styles";
import React, { useState } from "react";
import { CarroFilter } from "../../../interfaces";
import axios from "axios";
import { ListFilterprops } from "../../../interfaces/PropsInterfaces";
import {
  ages,
  API_URL,
  CambioTypes,
  IntialStateCarFilter,
} from "../../../utils";

export default function ListFilter({ set, show }: ListFilterprops) {
  const [formData, setFormaData] = useState<CarroFilter>({});
  const [loading, setLoading] = useState<boolean>(false);

  const filterCars = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(`${API_URL}filter`, formData)
      .then((resp) => {
        set(resp.data);
      })
      .catch((err) => {
        window.alert("Ocorreu um erro. Tente novamente mais tarde.");
      })
      .finally(() => {
        setLoading(false);
        show();
      });
  };

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
          <Select
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoModelo: {
                  ...formData.anoModelo,
                  de: Number(e.target.value),
                },
              })
            }
          >
            <option value="">A partir de</option>
            {ages.map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </Select>

          <Select
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoModelo: {
                  ...formData.anoModelo,
                  ate: Number(e.target.value),
                },
              })
            }
          >
            <option value="">Até</option>
            {ages.map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </Select>
        </AgeFilterContainer>

        <Label>Ano de Fabricação</Label>
        <AgeFilterContainer>
          <Select
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoFabricacao: {
                  ...formData.anoFabricacao,
                  de: Number(e.target.value),
                },
              })
            }
          >
            <option value="">A partir de</option>
            {ages.map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </Select>

          <Select
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoFabricacao: {
                  ...formData.anoFabricacao,
                  ate: Number(e.target.value),
                },
              })
            }
          >
            <option value="">Até</option>
            {ages.map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </Select>
        </AgeFilterContainer>

        <Label>Tipo de Câmbio</Label>
        <Select
          onChange={(e) =>
            setFormaData({ ...formData, cambio: e.target.value })
          }
        >
          <option value="">Câmbio</option>
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

        <Button
          type="submit"
          value={loading ? "Carregando..." : "Filtrar"}
          disabled={loading}
          isDisabled={loading ? "disabled" : undefined}
        />
      </Form>
    </Container>
  );
}
