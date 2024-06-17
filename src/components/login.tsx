import LoginButton from "../../utils/login";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
export function Login() {
  return (
    <div className="bg-logo flex justify-center items-center h-screen">
      <Card className="w-full h-[350px] max-w-md ">
        <CardHeader className="space-y-1 ">
          <CardTitle className="text-2xl flex justify-center">Login</CardTitle>
          <CardDescription className="flex justify-center">
            Entre com sua conta Google ou do GitHub.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-col  mt-5 flex justify-center">
          <LoginButton />
        </CardContent>
      </Card>
    </div>
  );
}
