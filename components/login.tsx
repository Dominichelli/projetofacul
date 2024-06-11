import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Login() {
  return (
    <div className="bg-logo flex justify-center items-center h-screen">
        <Card className="w-full h-[350px] max-w-md ">
      <CardHeader className="space-y-1 ">
        <CardTitle className="text-2xl flex justify-center">Login</CardTitle>
        <CardDescription className="flex justify-center">Entre com sua conta Google ou do GitHub.</CardDescription>
      </CardHeader>
      <CardContent className="flex-col  mt-5 flex justify-center">
        <div className="space-y-2">
            <div className="flex items-center justify-center py-4 ">
            <Button size="vd" variant="corroxo">Logar com Google</Button>
            </div>
          
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-center">
           <Button size="vd" variant="corroxo">Logar com GitHub</Button>
          </div>
          
        </div>
      </CardContent>
      <CardFooter>
      
        
      </CardFooter>
    </Card>
    </div>
    
  )
}