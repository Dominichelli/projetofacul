"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <div className="text-white">
      <div className="space-y-2">
        <div className="flex items-center justify-center py-4 ">
          <Button
            size="vd"
            variant="corroxo"
            onClick={() => {
              signIn("google", { callbackUrl: "/" });
            }}
          >
            Logar com Google
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-center">
          <Button
            size="vd"
            variant="corroxo"
            onClick={() => {
              signIn("github", { callbackUrl: "/" });
            }}
          >
            Logar com GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
