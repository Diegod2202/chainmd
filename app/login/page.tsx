import Link from "next/link"
import { Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40 p-2 sm:p-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-2">
            <Database className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">ChainMD</CardTitle>
          <CardDescription>Ingrese sus credenciales para acceder a la plataforma</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" placeholder="nombre@institucion.com" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Contraseña</Label>
              <Link href="/forgot-password" className="text-sm text-primary underline-offset-4 hover:underline">
                ¿Olvidó su contraseña?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Iniciar Sesión
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">O continúe con</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
            <Button variant="outline" className="text-xs sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="21.17" x2="12" y1="8" y2="8" />
                <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
                <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
              </svg>
              Institución
            </Button>
            <Button variant="outline" className="text-xs sm:text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
              Tarjeta
            </Button>
          </div>
          <div className="text-center text-sm">
            ¿No tiene una cuenta?{" "}
            <Link href="/demo" className="text-primary underline-offset-4 hover:underline">
              Solicite una demostración
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

