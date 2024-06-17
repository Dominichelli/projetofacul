// pages/api/cards/createCard.ts
import { NextResponse } from "next/server";
import { db } from "../../../../lib/db"; // Ajuste o caminho conforme necessário

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      titulo,
      descricao,
      status,
      id_resp,
      tag,
      id_update_Card,
      id_comentar,
      id_equipe,
    } = body;

    if (!titulo || !descricao || !status || !id_equipe || !id_resp) {
      return new NextResponse("Campos faltando", { status: 400 });
    }
    const nwid = parseInt(id_resp);
    const newCard = await db.tB_Card.create({
      data: {
        titulo,
        descricao,
        status,
        id_resp: nwid,
        tag,
        id_update_Card,
        id_comentar,
        id_equipe,
      },
    });

    return NextResponse.json({
      message: "Card criado com sucesso!",
      tB_Card: newCard,
    });
  } catch (error) {
    console.error("[CREATE CARD]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
