import Link from "next/link"
import {
  Activity,
  Bell,
  Calendar,
  ChevronDown,
  Database,
  FileText,
  Home,
  Lock,
  Menu,
  MessageSquare,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6">
        <Button variant="outline" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <div className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">ChainMD</span>
        </div>
        <div className="flex-1">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar pacientes, registros..."
                className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificaciones</span>
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Configuración</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
              <AvatarFallback>HC</AvatarFallback>
            </Avatar>
            <span className="hidden md:inline-flex">Hospital Central</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[250px] flex-col border-r bg-muted/40 md:flex">
          <nav className="grid gap-2 p-4 text-sm font-medium">
            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-lg bg-primary text-primary-foreground px-3 py-2 transition-all"
            >
              <Home className="h-4 w-4" />
              Inicio
            </Link>
            <Link
              href="/dashboard/patients"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Users className="h-4 w-4" />
              Pacientes
            </Link>
            <Link
              href="/dashboard/records"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <FileText className="h-4 w-4" />
              Registros Médicos
            </Link>
            <Link
              href="/dashboard/appointments"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Calendar className="h-4 w-4" />
              Citas
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <MessageSquare className="h-4 w-4" />
              Mensajes
            </Link>
            <Link
              href="/dashboard/permissions"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Lock className="h-4 w-4" />
              Permisos
            </Link>
            <Link
              href="/dashboard/analytics"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <Activity className="h-4 w-4" />
              Analíticas
            </Link>
            <Link
              href="/dashboard/profile"
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
            >
              <User className="h-4 w-4" />
              Perfil
            </Link>
          </nav>
        </aside>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Panel de Control</h1>
              <Button>Nuevo Registro</Button>
            </div>
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-3">
                <TabsTrigger value="overview">Resumen</TabsTrigger>
                <TabsTrigger value="recent">Recientes</TabsTrigger>
                <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Pacientes</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">1,248</div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground">+12% desde el mes pasado</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Registros Médicos</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">8,492</div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground">+18% desde el mes pasado</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Transacciones Blockchain</CardTitle>
                      <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">12,345</div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground">+24% desde el mes pasado</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Permisos Activos</CardTitle>
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-xl sm:text-2xl font-bold">3,782</div>
                      <p className="text-[10px] xs:text-xs text-muted-foreground">+8% desde el mes pasado</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-full lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Actividad de Registros</CardTitle>
                      <CardDescription>Registros médicos creados y accedidos en los últimos 30 días</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px] w-full bg-muted/20 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Gráfico de actividad de registros</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-full lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Actividad Reciente</CardTitle>
                      <CardDescription>Últimas transacciones en la blockchain</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">Nuevo registro médico</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <span>Paciente #12345</span>
                              <span className="mx-1">•</span>
                              <span>Hace 5 minutos</span>
                            </div>
                          </div>
                          <Badge variant="outline">Verificado</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Lock className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">Permiso concedido</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <span>Dr. Martínez → Paciente #54321</span>
                              <span className="mx-1">•</span>
                              <span>Hace 12 minutos</span>
                            </div>
                          </div>
                          <Badge variant="outline">Activo</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <FileText className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">Actualización de registro</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <span>Paciente #78901</span>
                              <span className="mx-1">•</span>
                              <span>Hace 25 minutos</span>
                            </div>
                          </div>
                          <Badge variant="outline">Verificado</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Users className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">Nuevo paciente</p>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <span>Paciente #23456</span>
                              <span className="mx-1">•</span>
                              <span>Hace 42 minutos</span>
                            </div>
                          </div>
                          <Badge variant="outline">Registrado</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="recent" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Registros Médicos Recientes</CardTitle>
                    <CardDescription>Lista de los últimos registros médicos creados o modificados</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">Registro #{(12345 + i).toString()}</p>
                              <Badge variant="outline">Verificado</Badge>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Paciente: {(54321 + i).toString()}</span>
                              <span className="mx-2">•</span>
                              <span>Dr. {["García", "Rodríguez", "López", "Martínez", "Fernández"][i]}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {
                                [
                                  "Consulta general",
                                  "Análisis de sangre",
                                  "Radiografía",
                                  "Consulta especialista",
                                  "Vacunación",
                                ][i]
                              }
                            </p>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <p>{["Hoy", "Ayer", "Hace 2 días", "Hace 3 días", "Hace 4 días"][i]}</p>
                            <p>{["10:25", "14:30", "09:15", "16:45", "11:20"][i]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="blockchain" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Transacciones Blockchain</CardTitle>
                    <CardDescription>Últimas transacciones registradas en la blockchain</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Database className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">
                                Hash: 0x
                                {Array.from({ length: 8 })
                                  .map(() => Math.floor(Math.random() * 16).toString(16))
                                  .join("")}
                                ...
                              </p>
                              <Badge variant="outline">
                                {["Creación", "Actualización", "Permiso", "Acceso", "Verificación"][i]}
                              </Badge>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <span>Bloque: #{(1000000 + i * 10).toString()}</span>
                              <span className="mx-2">•</span>
                              <span>Timestamp: {new Date().toISOString().slice(0, 19).replace("T", " ")}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {
                                [
                                  "Creación de registro médico",
                                  "Actualización de datos del paciente",
                                  "Concesión de permiso",
                                  "Acceso a registro",
                                  "Verificación de integridad",
                                ][i]
                              }
                            </p>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <p>{["Hace 5 min", "Hace 15 min", "Hace 30 min", "Hace 1 hora", "Hace 2 horas"][i]}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

