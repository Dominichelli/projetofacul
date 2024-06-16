// utils/cdur.ts
import axios from "axios";

export async function Teste(email: string, name: string, image: string) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      {
        email,
        name,
        image,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("deu bom", response.data);
    } else {
      console.error("Erro ao fazer login:", response.statusText);
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Erro de rede:", error.message);
      if (error.response) {
        console.error("Erro de resposta:", error.response.data);
      } else if (error.request) {
        console.error("Erro de solicitação:", error.request);
      } else {
        console.error("Erro desconhecido:", error.message);
      }
    } else {
      console.error("Erro inesperado:", error);
    }
  }
}
