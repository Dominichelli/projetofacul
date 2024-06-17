import { NextResponse } from "next/server";
import { db } from "../../../../../lib/db";

export async function POST(req: Request) {
  if (req.method === "POST") {
    try {
      const body = await req.json();

      let { email, name, image, cargoTitle } = body;

      if (!email || !name || !cargoTitle) {
        return new NextResponse("User not authenticated", { status: 401 });
      }

      if (!image) {
        image = "vazio";
      }
      const cargo = await db.cargo.findFirst({
        where: { titulo: cargoTitle },
      });
      // Encontre o usuário no banco de dados pelo email
      let user = await db.user.findUnique({
        where: { email },
      });

      if (!cargo) {
        return new NextResponse("Falta do cargo", { status: 401 });
      }

      // Se o usuário não for encontrado, crie um novo usuário
      if (!user) {
        user = await db.user.create({
          data: {
            name: name,
            email: email,
            image: image,
            id_cargoXuser: cargo?.id,
          },
        });
      }

      const response = NextResponse.json({ message: "Login successful", user });
      return response;
    } catch (error) {
      console.error("[LOGIN]", error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }
}
