import Link from "next/link"
import { ArrowLeft, Database } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Demo() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">ChainMD</span>
        </Link>
      </header>
      <main className="flex-1 overflow-auto p-2 sm:p-4 md:p-6">
        <div className="mx-auto max-w-2xl space-y-4 sm:space-y-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al inicio</span>
            </Link>
            <h1 className="text-3xl font-bold">Solicitar Demostración</h1>
            <p className="text-muted-foreground">
              Complete el formulario para solicitar una demostración personalizada de ChainMD para su institución.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>
                Proporcione sus datos para que podamos contactarlo y programar una demostración.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Nombre</Label>
                  <Input id="first-name" placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Apellido</Label>
                  <Input id="last-name" placeholder="Pérez" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo Electrónico</Label>
                <Input id="email" type="email" placeholder="juan.perez@institucion.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input id="phone" type="tel" placeholder="+54 11 5555-1234" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution">Institución</Label>
                <Input id="institution" placeholder="Hospital Central" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Cargo</Label>
                <Input id="role" placeholder="Director de Sistemas" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="institution-type">Tipo de Institución</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hospital-public">Hospital Público</SelectItem>
                    <SelectItem value="hospital-private">Hospital Privado</SelectItem>
                    <SelectItem value="clinic">Clínica</SelectItem>
                    <SelectItem value="insurance">Obra Social / Prepaga</SelectItem>
                    <SelectItem value="laboratory">Laboratorio</SelectItem>
                    <SelectItem value="other">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  placeholder="Cuéntenos sobre sus necesidades específicas y cómo podemos ayudarle con ChainMD."
                  rows={4}
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full">Solicitar Demostración</Button>
              <p className="text-center text-xs text-muted-foreground">
                Al enviar este formulario, acepta nuestra{" "}
                <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
                  Política de Privacidad
                </Link>{" "}
                y{" "}
                <Link href="/terms" className="text-primary underline-offset-4 hover:underline">
                  Términos de Servicio
                </Link>
                .
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

