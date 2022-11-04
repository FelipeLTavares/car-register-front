import React, { useState } from "react";
import axios from "axios";
import { Carro } from "../../interfaces";
import {
  Form,
  Title,
  Container,
  Label,
  Input,
  AgeSelect,
  Submit,
} from "./styles";

export default function RegisterForm() {
  //Car ages length
  let ages: number[] = [];
  for (let i = 2024; i > 1950; i--) ages.push(i);

  //Cambio List
  const CambioTypes: string[] = ["manual", "automatico", "automatizado", "CVT"];

  const [formData, setFormaData] = useState<Carro>({
    marca: "",
    modelo: "",
    cor: "",
    anoFabricacao: 1950,
    anoModelo: 1950,
    tipoCambio: "",
  });

  function submitCarForm(e: React.SyntheticEvent) {
    e.preventDefault();
    console.log(formData);
    setFormaData({
      marca: "",
      modelo: "",
      cor: "",
      anoFabricacao: 1950,
      anoModelo: 1950,
      tipoCambio: "",
    });
  }

  function teste() {
    const BASE_URL = import.meta.env.VITE_API;
    console.log(BASE_URL);
  }

  return (
    <Container>
      <Title>Formulario</Title>
      <Form onSubmit={submitCarForm}>
        <Label>Marca</Label>
        <Input
          type="text"
          placeholder="Marca"
          value={formData.marca}
          onChange={(e) => setFormaData({ ...formData, marca: e.target.value })}
          required
        />

        <Label>Modelo</Label>
        <Input
          type="text"
          placeholder="Modelo"
          value={formData.modelo}
          onChange={(e) =>
            setFormaData({ ...formData, modelo: e.target.value })
          }
          required
        />

        <Label>Ano de Fabricação</Label>
        <AgeSelect required>
          <option value=""></option>
          {ages.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </AgeSelect>

        <Label>Ano do Modelo</Label>
        <AgeSelect required>
          <option value=""></option>
          {ages.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </AgeSelect>

        <Label>Tipo de Câmbio</Label>
        <AgeSelect required>
          <option value=""></option>
          {CambioTypes.map((camb) => (
            <option value={camb} key={camb}>
              {camb.toUpperCase()}
            </option>
          ))}
        </AgeSelect>

        <Label>Cor</Label>
        <Input
          type="text"
          placeholder="Cor"
          value={formData.cor}
          onChange={(e) => setFormaData({ ...formData, cor: e.target.value })}
          required
        />

        <Submit type="submit" value="Cadastrar" />
        <button onClick={() => teste()}>TESTE</button>
      </Form>
    </Container>
  );
}
