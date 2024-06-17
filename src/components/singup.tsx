
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Singup() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex items-center justify-center bg-[#F4F7FD] dark:bg-gray-900">
        <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:text-white">
          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-gray-500 dark:text-gray-400">Criar uma conta para iniciar</p>
          </div>
          <form>
            <div className="mb-4">
              <Label htmlFor="name">Nome</Label>
              <Input className="w-full" id="name" placeholder="Seu nome" type="text" />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Email</Label>
              <Input className="w-full" id="email" placeholder="Seu email" type="email" />
            </div>
            <div className="mb-6">
              <Label htmlFor="password">Senha</Label>
              <Input className="w-full" id="password" placeholder="Sua senha" type="password" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Checkbox id="terms" />
                <Label className="ml-2 text-sm" htmlFor="terms">
Eu estou de acordo com os termos e as condicoes                </Label>
              </div>
            </div>
            <Button className="w-full" type="submit">
              Cadastrar-se
            </Button>
          </form>
          <div className="mt-6 text-center text-gray-500 dark:text-gray-400">
            Você ja tem uma conta?
            <Link className="text-[#6C5CE7] hover:underline" href="/login">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <footer className="bg-[#6C5CE7] text-white p-4 text-center">
        <p>© 2024 Task Tracker. Todos os direitos estão reservados.</p>
      </footer>
    </div>
  )
}
