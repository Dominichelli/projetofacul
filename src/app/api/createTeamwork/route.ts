// pages/api/teamwork/createTeamwork.ts
import { NextResponse } from "next/server";
import { db } from "../../../../lib/db"; // Ajuste o caminho conforme necessário

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, desc, setor } = body;

    if (!name || !desc || !setor) {
      return new NextResponse("Campos faltando", { status: 400 });
    }
    const setorint = parseInt(setor);

    const newTeamwork = await db.tB_Equipe.create({
      data: {
        titulo: name,
        descricao: desc,
        id_cargo: setorint,
      },
    });

    return NextResponse.json({
      message: "Equipe criada com sucesso!",
      tB_Equipe: newTeamwork,
    });
  } catch (error) {
    console.error("[CREATE TEAMWORK]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
