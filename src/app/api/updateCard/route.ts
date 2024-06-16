import { NextResponse } from "next/server";
import { db } from "../../../../lib/db"; // Ajuste o caminho conforme necessário

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id_card, status, id_update_Card } = body;

    if (!id_card || !status || !id_update_Card) {
      return new NextResponse("Campos faltando", { status: 400 });
    }
    const updateCard = await db.tB_Card.update({
      where: {
        id: id_card,
      },
      data: {
        status,
        id_update_Card,
      },
    });

    return NextResponse.json({
      message: "Card atualizado com sucesso!",
      tB_Card: updateCard,
    });
  } catch (error) {
    console.error("[UPDATE CARD]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
