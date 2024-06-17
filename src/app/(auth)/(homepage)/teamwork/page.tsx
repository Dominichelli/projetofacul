import Equipes from "@/components/equipe";
import { db } from "../../../../../lib/db";
import DialogUser from "@/components/usernew";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function TeamWorkPage() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
    return null;
  }
  let email = session?.user?.email;
  let name = session?.user?.name;
  let image = session?.user?.image;
  if (!email || !name || !image) {
    (email = ""), (name = ""), (image = "");
  }

  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  // Se o usuário não existir, exibe o DialogUser
  if (!user) {
    console.log("User nao encontrado");
    return <DialogUser emailgit={email} image={image} />;
  }
  const users = await db.user.findMany({});
  const teamwork = await db.tB_Equipe.findMany({});
  const cards = await db.tB_Card.findMany({});
  return (
    <div>
      <Equipes Users={users} Equipe={teamwork} Cards={cards} self={user} />
    </div>
  );
}
