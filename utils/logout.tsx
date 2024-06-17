"use client";
import {
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";

export default function ButtonLogout() {
  return <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>;
}
