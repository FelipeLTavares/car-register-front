import React, { useState } from "react";
import axios from "axios";
import { Carro } from "../../../interfaces";
import { Container } from "./styles";
import {
  Title,
  Label,
  Input,
  Select,
  Button,
  Form,
  LinkButton,
} from "../../../styles/styles";
import { Link } from "react-router-dom";
import { ages, API_URL, CambioTypes, InitialCarData } from "../../../utils";

export default function RegisterForm() {
  const [formData, setFormaData] = useState<Carro>(InitialCarData);
  const [loading, setLoading] = useState<boolean>(false);

  const sendFormData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const registerData = formData;
      axios
        .post(API_URL, registerData)
        .then((res) => {
          window.alert("Carro registrado com sucesso!");
          console.log("1");
        })
        .catch((err) => {
          if (err.status === 400) window.alert("Carro já registrado!");
        });
    } catch (error) {
      window.alert("Ocorreu um erro. Tente novamente mais tarde.");
    } finally {
      setFormaData(InitialCarData);
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Title>Formulario</Title>
        <Form onSubmit={sendFormData}>
          <Label>Placa</Label>
          <Input
            type="text"
            placeholder="Placa"
            value={formData.placa}
            onChange={(e) =>
              setFormaData({ ...formData, placa: e.target.value })
            }
            required
          />

          <Label>Marca</Label>
          <Input
            type="text"
            placeholder="Marca"
            value={formData.marca}
            onChange={(e) =>
              setFormaData({ ...formData, marca: e.target.value })
            }
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
          <Select
            required
            onChange={(e) =>
              setFormaData({
                ...formData,
                anoFabricacao: Number(e.target.value),
              })
            }
          >
            <option value="">Ano de Fabricação</option>
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
            <option value="">Ano do Modelo</option>
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
            required
          />

          <Button
            type="submit"
            value={loading ? "Carregando..." : "Cadastrar"}
            disabled={loading}
            isDisabled={loading ? "disabled" : undefined}
          />
        </Form>

        <LinkButton>
          <Link to="/">Lista de carros</Link>
        </LinkButton>
      </Container>
    </>
  );
}
