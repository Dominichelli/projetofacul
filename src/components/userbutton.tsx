import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ButtonLogout from "../../utils/logout";
import { user } from "@prisma/client";

interface UserButtonProps {
  user: user;
}

const UserButton: React.FC<UserButtonProps> = ({ user }) => {
  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src={user.image || "/fallback-image.png"} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
          <DropdownMenuGroup>
            <ButtonLogout />
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default UserButton;
