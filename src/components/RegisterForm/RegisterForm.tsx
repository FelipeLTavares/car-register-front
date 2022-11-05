import React, { useState } from "react";
import axios from "axios";
import { Carro } from "../../interfaces";
import { Container } from "./styles";
import {
  Title,
  Label,
  Input,
  Select,
  Button,
  Form,
} from "../UI/GeneralStyles/styles";

export default function RegisterForm() {
  //Car ages length
  let ages: number[] = [];
  for (let i = 2024; i > 1950; i--) ages.push(i);

  //Cambio List
  const CambioTypes: string[] = ["manual", "automatico"];

  const [formData, setFormaData] = useState<Carro>({
    placa: "",
    marca: "",
    modelo: "",
    cor: "",
    anoFabricacao: 1950,
    anoModelo: 1950,
    cambio: "",
  });

  async function sendFormData(e: React.SyntheticEvent) {
    e.preventDefault();
    const registerData = formData;
    const API_URL = import.meta.env.VITE_API_URL;
    axios.post(API_URL, registerData).then((resp) => console.log(resp));
  }

  return (
    <Container>
      <Title>Formulario</Title>
      <Form onSubmit={sendFormData}>
        <Label>Placa</Label>
        <Input
          type="text"
          placeholder="Placa"
          value={formData.placa}
          onChange={(e) => setFormaData({ ...formData, placa: e.target.value })}
          required
        />

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

        <Label>Ano do Modelo</Label>
        <Select
          required
          onChange={(e) =>
            setFormaData({ ...formData, anoFabricacao: Number(e.target.value) })
          }
        >
          <option value=""></option>
          {ages.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </Select>

        <Label>Ano do Modelo</Label>
        <Select
          required
          onChange={(e) =>
            setFormaData({ ...formData, anoModelo: Number(e.target.value) })
          }
        >
          <option value=""></option>
          {ages.map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </Select>

        <Label>Tipo de Câmbio</Label>
        <Select
          required
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
          required
        />

        <Button type="submit" value="Cadastrar" />
      </Form>
    </Container>
  );
}
