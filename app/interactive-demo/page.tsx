"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, CheckCircle, Database, FileText, Upload, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function InteractiveDemo() {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "verifying" | "success" | "error">("idle")
  const [recordCreated, setRecordCreated] = useState(false)
  const [selectedTab, setSelectedTab] = useState("upload")

  const handleNext = () => {
    if (step === 3 && !recordCreated) {
      setLoading(true)

      // Simulate file upload progress
      let progress = 0
      const interval = setInterval(() => {
        progress += 5
        setUploadProgress(progress)

        if (progress >= 100) {
          clearInterval(interval)

          // After upload complete, simulate blockchain verification
          setVerificationStatus("verifying")
          setTimeout(() => {
            setVerificationStatus("success")
            setRecordCreated(true)
            setLoading(false)
          }, 2000)
        }
      }, 150)

      return
    }

    if (step < 4) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const resetDemo = () => {
    setStep(1)
    setLoading(false)
    setUploadProgress(0)
    setVerificationStatus("idle")
    setRecordCreated(false)
    setSelectedTab("upload")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6">
        <Link href="/" className="flex items-center gap-2">
          <Database className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold">ChainMD</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Demo Interactiva</h1>
            <p className="text-muted-foreground">
              Experimente cómo funciona ChainMD para gestionar historias clínicas en blockchain
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-[15px] h-[2px] bg-muted">
              <div
                className="absolute h-full bg-primary transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>

            <div className="relative flex justify-between">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="flex flex-col items-center">
                  <div
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                      step >= s ? "border-primary bg-primary text-primary-foreground" : "border-muted bg-background"
                    }`}
                  >
                    {step > s ? <Check className="h-4 w-4" /> : s}
                  </div>
                  <span className="mt-2 text-xs font-medium">
                    {s === 1 && "Seleccionar Paciente"}
                    {s === 2 && "Tipo de Registro"}
                    {s === 3 && "Cargar Datos"}
                    {s === 4 && "Confirmación"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Card className="mt-8">
            {step === 1 && (
              <>
                <CardHeader>
                  <CardTitle>Seleccionar Paciente</CardTitle>
                  <CardDescription>
                    Busque o seleccione el paciente para el cual desea crear un nuevo registro médico
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Input placeholder="Buscar paciente por nombre o ID..." className="pl-10" />
                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  </div>

                  <div className="mt-4 space-y-4">
                    <h3 className="font-medium">Pacientes Recientes</h3>
                    <div className="grid gap-3">
                      {[
                        { id: "12345", name: "María Pérez", age: 42, gender: "Femenino" },
                        { id: "12346", name: "Juan Gómez", age: 35, gender: "Masculino" },
                        { id: "12347", name: "Ana Rodríguez", age: 28, gender: "Femenino" },
                      ].map((patient) => (
                        <div
                          key={patient.id}
                          className="flex items-center gap-4 rounded-lg border p-3 cursor-pointer hover:bg-muted/50"
                        >
                          <Avatar>
                            <AvatarFallback>
                              {patient.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-medium">{patient.name}</div>
                            <div className="text-sm text-muted-foreground">
                              ID: {patient.id} • {patient.age} años • {patient.gender}
                            </div>
                          </div>
                          <RadioGroup defaultValue="12345">
                            <RadioGroupItem value={patient.id} id={patient.id} />
                          </RadioGroup>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </>
            )}

            {step === 2 && (
              <>
                <CardHeader>
                  <CardTitle>Tipo de Registro Médico</CardTitle>
                  <CardDescription>
                    Seleccione el tipo de registro médico que desea crear para María Pérez
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {[
                      { icon: FileText, title: "Consulta Médica", desc: "Registro de consulta general o especialista" },
                      { icon: FileText, title: "Análisis Clínico", desc: "Resultados de laboratorio y análisis" },
                      { icon: FileText, title: "Diagnóstico", desc: "Diagnóstico médico y recomendaciones" },
                      { icon: FileText, title: "Medicación", desc: "Prescripción de medicamentos" },
                      { icon: FileText, title: "Procedimiento", desc: "Registro de procedimientos médicos" },
                      { icon: FileText, title: "Otro", desc: "Otro tipo de registro médico" },
                    ].map((type, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center rounded-lg border p-4 text-center cursor-pointer hover:bg-muted/50"
                      >
                        <div className="rounded-full bg-primary/10 p-3 mb-3">
                          <type.icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="font-medium">{type.title}</h3>
                        <p className="text-sm text-muted-foreground">{type.desc}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </>
            )}

            {step === 3 && (
              <>
                <CardHeader>
                  <CardTitle>Cargar Datos del Registro</CardTitle>
                  <CardDescription>Complete la información para la consulta médica de María Pérez</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs value={selectedTab} onValueChange={setSelectedTab}>
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upload">Formulario</TabsTrigger>
                      <TabsTrigger value="file">Subir Archivo</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload" className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="date">Fecha de Consulta</Label>
                        <Input id="date" type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="doctor">Médico</Label>
                        <Select defaultValue="rodriguez">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar médico" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rodriguez">Dr. Rodríguez</SelectItem>
                            <SelectItem value="gonzalez">Dra. González</SelectItem>
                            <SelectItem value="martinez">Dr. Martínez</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Especialidad</Label>
                        <Select defaultValue="general">
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar especialidad" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">Medicina General</SelectItem>
                            <SelectItem value="cardiology">Cardiología</SelectItem>
                            <SelectItem value="neurology">Neurología</SelectItem>
                            <SelectItem value="dermatology">Dermatología</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reason">Motivo de Consulta</Label>
                        <Textarea
                          id="reason"
                          placeholder="Describa el motivo de la consulta"
                          defaultValue="Dolor de cabeza y fatiga desde hace 3 días"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="diagnosis">Diagnóstico</Label>
                        <Textarea
                          id="diagnosis"
                          placeholder="Diagnóstico del médico"
                          defaultValue="Migraña leve. Se recomienda descanso y medicación."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="treatment">Tratamiento</Label>
                        <Textarea
                          id="treatment"
                          placeholder="Tratamiento recomendado"
                          defaultValue="Paracetamol 500mg cada 8 horas durante 3 días. Reposo relativo."
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="file" className="pt-4">
                      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8">
                        <Upload className="h-10 w-10 text-muted-foreground mb-4" />
                        <h3 className="font-medium">Arrastre archivos aquí o haga clic para seleccionar</h3>
                        <p className="text-sm text-muted-foreground mt-1">Soporta PDF, DOCX, JPG, PNG hasta 10MB</p>
                        <Button variant="outline" className="mt-4">
                          Seleccionar Archivo
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </>
            )}

            {step === 4 && (
              <>
                <CardHeader>
                  <CardTitle>Confirmación</CardTitle>
                  <CardDescription>El registro médico ha sido creado y verificado en blockchain</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <h3 className="font-medium">Registro Creado Exitosamente</h3>
                      </div>
                      <Badge variant="outline" className="gap-1 border-green-500 text-green-500">
                        <Check className="h-3.5 w-3.5" />
                        Verificado
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Paciente</h4>
                        <p>María Pérez (ID: 12345)</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Tipo de Registro</h4>
                        <p>Consulta Médica - Medicina General</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Médico</h4>
                        <p>Dr. Rodríguez</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Fecha</h4>
                        <p>{new Date().toLocaleDateString()}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Hash de Blockchain</h4>
                        <p className="font-mono text-xs">
                          0x
                          {Array.from({ length: 16 })
                            .map(() => Math.floor(Math.random() * 16).toString(16))
                            .join("")}
                          ...
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <h3 className="font-medium mb-2">¿Qué sucede ahora?</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>El registro ha sido encriptado y almacenado de forma segura</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Una huella digital (hash) ha sido registrada en la blockchain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>El paciente puede controlar quién tiene acceso a este registro</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Cualquier modificación quedará registrada en la cadena de bloques</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </>
            )}

            <CardFooter className="flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={handlePrevious} disabled={loading}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Anterior
                </Button>
              ) : (
                <Button variant="outline" asChild>
                  <Link href="/">Cancelar</Link>
                </Button>
              )}

              {step < 4 ? (
                <Button onClick={handleNext} disabled={loading}>
                  {step === 3 && !recordCreated ? (
                    loading ? (
                      <>
                        {verificationStatus === "idle" && (
                          <>
                            <span>Subiendo... {uploadProgress}%</span>
                            <Progress value={uploadProgress} className="w-20 ml-2" />
                          </>
                        )}
                        {verificationStatus === "verifying" && "Verificando en blockchain..."}
                        {verificationStatus === "success" && "¡Verificado!"}
                        {verificationStatus === "error" && "Error de verificación"}
                      </>
                    ) : (
                      <>Crear Registro</>
                    )
                  ) : (
                    <>
                      Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              ) : (
                <Button onClick={resetDemo}>Reiniciar Demo</Button>
              )}
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}

