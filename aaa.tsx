/**
 * v0 by Vercel.
 * @see https://v0.dev/t/StoOKIM4lBy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Equipe de Desenvolvimento</CardTitle>
        <CardDescription>
          Projeto de criação de um novo site para a empresa.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div>
            <h3 className="text-lg font-medium">Participantes</h3>
            <div className="flex items-center gap-4 mt-2">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gerente de Projeto
                </p>
              </div>
              <Avatar>
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Jane Smith</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Desenvolvedor Front-end
                </p>
              </div>
              <Avatar>
                <AvatarImage src="/avatars/03.png" />
                <AvatarFallback>MB</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Michael Brown</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Desenvolvedor Back-end
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium">Tarefas em Andamento</h3>
            <div className="grid gap-4 mt-2">
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      Criar layout da página inicial
                    </p>
                    <Badge
                      className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      variant="outline"
                    >
                      Em Andamento
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">
                      Implementar funcionalidade de login
                    </p>
                    <Badge
                      className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                      variant="outline"
                    >
                      Em Andamento
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Criar página de contato</p>
                    <Badge
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                      variant="outline"
                    >
                      Concluída
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
