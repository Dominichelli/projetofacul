import { NextResponse } from "next/server";
import { db } from "../../../../lib/db"; // Ajuste o caminho conforme necessário

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id_card, id_login, descricao } = body;

    if (!id_card || !id_login || !descricao) {
      return new NextResponse("Campos faltando", { status: 400 });
    }
    const comentCard = await db.tb_Comentarios.create({
      data: {
        id_card,
        id_login,
        descricao,
      },
    });

    return NextResponse.json({
      message: "Comentario criado com sucesso!",
      tB_Card: comentCard,
    });
  } catch (error) {
    console.error("[COMENT CARD]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
