// pages/api/cards/createCard.ts
import { NextResponse } from "next/server";
import { db } from "../../../../lib/db"; // Ajuste o caminho conforme necessário

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id_card } = body;

    if (!id_card) {
      return new NextResponse("Campos faltando", { status: 400 });
    }
    const deleteCard = await db.tB_Card.delete({
      where: {
        id: id_card,
      },
    });

    return NextResponse.json({
      message: "Card deletado com sucesso!",
      tB_Card: deleteCard,
    });
  } catch (error) {
    console.error("[DELETE CARD]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
