import { HomePage } from "@/components/home-page";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "../../../../lib/db";
import DialogUser from "@/components/usernew";

export default async function Home() {
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
  const equip = await db.tB_Equipe.findFirst({
    where: {
      id_cargo: user.id_cargoXuser,
    },
  });
  const cards = await db.tB_Card.findMany({
    where: {
      id_equipe: equip?.id,
    },
  });
  const coments = await db.tb_Comentarios.findMany({});
  if (!equip) {
    return <DialogUser emailgit={email} image={image} />;
  }
  // Se o usuário existir, continua com a renderização da HomePage
  const users = await db.user.findMany({
    where: {
      id_cargoXuser: equip.id,
    },
  });
  return (
    <div className="">
      <HomePage
        Users={users}
        Equipe={equip}
        self={user}
        Cards={cards}
        coments={coments}
      />
    </div>
  );
}
