import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  FileText,
  Lock,
  MessageSquare,
  MoreHorizontal,
  Share2,
  ShieldCheck,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function PatientRecord() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-2 sm:gap-4 border-b bg-background px-4 sm:px-6">
        <Link
          href="/dashboard"
          className="flex items-center gap-1 sm:gap-2 text-muted-foreground hover:text-foreground text-xs sm:text-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Volver</span>
        </Link>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm">
            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Exportar</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-1 sm:gap-2 text-xs sm:text-sm">
            <Share2 className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden xs:inline">Compartir</span>
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 sm:h-9 sm:w-9">
            <MoreHorizontal className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Más opciones</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Historia Clínica del Paciente</h1>
              <p className="text-muted-foreground">ID: #12345678 • Última actualización: 15/03/2025</p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="gap-1 border-green-500 text-green-500">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verificado en Blockchain
              </Badge>
              <Badge variant="outline" className="gap-1">
                <Lock className="h-3.5 w-3.5" />
                Acceso Controlado
              </Badge>
            </div>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Información del Paciente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="text-xl font-bold">María Pérez</h3>
                    <p className="text-sm text-muted-foreground">42 años • Femenino</p>
                  </div>
                </div>
                <Separator />
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <User className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">DNI</p>
                      <p className="text-sm text-muted-foreground">28.456.789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Fecha de Nacimiento</p>
                      <p className="text-sm text-muted-foreground">15/07/1982</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MessageSquare className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Contacto</p>
                      <p className="text-sm text-muted-foreground">+54 11 5555-1234</p>
                      <p className="text-sm text-muted-foreground">maria.perez@email.com</p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="mb-2 text-sm font-medium">Permisos de Acceso</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border p-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>DR</AvatarFallback>
                        </Avatar>
                        <span>Dr. Rodríguez</span>
                      </div>
                      <Badge>Completo</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>DG</AvatarFallback>
                        </Avatar>
                        <span>Dra. González</span>
                      </div>
                      <Badge variant="outline">Parcial</Badge>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback>CL</AvatarFallback>
                        </Avatar>
                        <span>Clínica Norte</span>
                      </div>
                      <Badge variant="outline">Parcial</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full gap-2">
                  <Lock className="h-4 w-4" />
                  Gestionar Permisos
                </Button>
              </CardFooter>
            </Card>

            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Historial Médico</CardTitle>
                <CardDescription>Registros médicos verificados en blockchain</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="records">
                  <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
                    <TabsTrigger value="records" className="text-xs sm:text-sm">
                      Registros
                    </TabsTrigger>
                    <TabsTrigger value="diagnostics" className="text-xs sm:text-sm">
                      Diagnósticos
                    </TabsTrigger>
                    <TabsTrigger value="medications" className="text-xs sm:text-sm">
                      Medicamentos
                    </TabsTrigger>
                    <TabsTrigger value="blockchain" className="text-xs sm:text-sm">
                      Blockchain
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="records" className="space-y-4 pt-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between flex-wrap sm:flex-nowrap">
                          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto mb-2 sm:mb-0">
                            <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm sm:text-base">
                                {
                                  [
                                    "Consulta General",
                                    "Análisis de Sangre",
                                    "Radiografía de Tórax",
                                    "Consulta Cardiología",
                                  ][i]
                                }
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Dr. {["Rodríguez", "González", "Martínez", "López"][i]}</span>
                                <span>•</span>
                                <span>{["15/03/2025", "10/02/2025", "05/01/2025", "20/12/2024"][i]}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="gap-1">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Verificado
                          </Badge>
                        </div>
                        <div className="mt-3 text-sm">
                          <p>
                            {
                              [
                                "Paciente acude a consulta por dolor de cabeza y fatiga. Se recomienda descanso y paracetamol cada 8 horas.",
                                "Resultados normales en general. Leve anemia que requiere suplementación con hierro.",
                                "No se observan anomalías significativas. Pulmones claros.",
                                "Evaluación cardiovascular normal. Se recomienda ejercicio moderado y dieta baja en sodio.",
                              ][i]
                            }
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Actualizado hace {[2, 35, 70, 85][i]} días</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="diagnostics" className="space-y-4 pt-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between flex-wrap sm:flex-nowrap">
                          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto mb-2 sm:mb-0">
                            <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm sm:text-base">
                                {["Migraña Crónica", "Anemia Leve", "Hipertensión Controlada"][i]}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Dr. {["Rodríguez", "González", "López"][i]}</span>
                                <span>•</span>
                                <span>{["15/03/2025", "10/02/2025", "20/12/2024"][i]}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="gap-1">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Verificado
                          </Badge>
                        </div>
                        <div className="mt-3 text-sm">
                          <p>
                            {
                              [
                                "Diagnóstico de migraña crónica. Se recomienda evitar desencadenantes y seguir tratamiento preventivo.",
                                "Anemia ferropénica leve. Se recomienda suplementación con hierro y dieta rica en hierro.",
                                "Hipertensión arterial controlada con medicación. Continuar con tratamiento actual.",
                              ][i]
                            }
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Actualizado hace {[2, 35, 85][i]} días</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="medications" className="space-y-4 pt-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between flex-wrap sm:flex-nowrap">
                          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto mb-2 sm:mb-0">
                            <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm sm:text-base">
                                {["Paracetamol 500mg", "Suplemento de Hierro", "Enalapril 10mg"][i]}
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Dr. {["Rodríguez", "González", "López"][i]}</span>
                                <span>•</span>
                                <span>{["15/03/2025", "10/02/2025", "20/12/2024"][i]}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline" className="gap-1">
                            <ShieldCheck className="h-3.5 w-3.5" />
                            Verificado
                          </Badge>
                        </div>
                        <div className="mt-3 text-sm">
                          <p>
                            {
                              [
                                "Tomar 1 comprimido cada 8 horas en caso de dolor. No exceder 3 comprimidos por día.",
                                "Tomar 1 comprimido diario con las comidas durante 3 meses.",
                                "Tomar 1 comprimido diario por la mañana. Control de presión arterial semanal.",
                              ][i]
                            }
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Actualizado hace {[2, 35, 85][i]} días</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Ver Detalles
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent value="blockchain" className="space-y-4 pt-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="rounded-lg border p-4">
                        <div className="flex items-start justify-between flex-wrap sm:flex-nowrap">
                          <div className="flex items-start gap-2 sm:gap-3 w-full sm:w-auto mb-2 sm:mb-0">
                            <div className="rounded-full bg-primary/10 p-1.5 sm:p-2">
                              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-medium text-xs md:text-sm font-mono">
                                Hash: 0x
                                {Array.from({ length: 12 })
                                  .map(() => Math.floor(Math.random() * 16).toString(16))
                                  .join("")}
                                ...
                              </h4>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <span>Bloque #{(1000000 + i * 100).toString()}</span>
                                <span>•</span>
                                <span>{["15/03/2025", "10/02/2025", "05/01/2025", "20/12/2024"][i]}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant="outline">{["Creación", "Actualización", "Permiso", "Acceso"][i]}</Badge>
                        </div>
                        <div className="mt-3 text-sm">
                          <p>
                            {
                              [
                                "Creación de registro médico para consulta general.",
                                "Actualización de registro con resultados de análisis de sangre.",
                                "Concesión de permiso de acceso a Dra. González.",
                                "Acceso a registro por Dr. López para consulta de cardiología.",
                              ][i]
                            }
                          </p>
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" />
                            <span>Timestamp: {new Date().toISOString().slice(0, 19).replace("T", " ")}</span>
                          </div>
                          <Button variant="ghost" size="sm">
                            Verificar en Blockchain
                          </Button>
                        </div>
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Ver Historial Completo</Button>
                <Button>Añadir Nuevo Registro</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

