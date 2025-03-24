import Link from "next/link"
import { ArrowRight, CheckCircle, Database, Lock, Share2, ShieldCheck, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Database className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">ChainMD</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Características
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Beneficios
            </Link>
            <Link href="#clients" className="text-sm font-medium hover:text-primary">
              Clientes
            </Link>
            <Link href="/interactive-demo" className="text-sm font-medium hover:text-primary">
              Demo Interactiva
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Iniciar Sesión</Button>
            </Link>
            <Link href="/interactive-demo">
              <Button>Probar Demo</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                  Historia Clínica Segura en Blockchain
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  ChainMD es una plataforma B2B que permite gestionar y compartir registros médicos de forma segura y
                  descentralizada mediante tecnología blockchain.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/demo">
                  <Button size="lg" className="w-full min-[400px]:w-auto gap-1">
                    Solicitar Demo <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="w-full min-[400px]:w-auto">
                    Conocer más
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-full h-[300px] sm:h-[400px] bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[85%] sm:w-3/4 h-[85%] sm:h-3/4 bg-background rounded-xl shadow-2xl p-4 sm:p-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-4">
                      <Database className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                      <span className="font-semibold text-sm sm:text-base">Historia Clínica Digital</span>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-2 sm:gap-4">
                      <div className="bg-muted rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                        <div className="font-medium mb-1">Datos del Paciente</div>
                        <div className="text-muted-foreground text-[10px] sm:text-sm">Acceso seguro y controlado</div>
                      </div>
                      <div className="bg-muted rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                        <div className="font-medium mb-1">Historial Médico</div>
                        <div className="text-muted-foreground text-[10px] sm:text-sm">Inmutable y verificable</div>
                      </div>
                      <div className="bg-muted rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                        <div className="font-medium mb-1">Permisos</div>
                        <div className="text-muted-foreground text-[10px] sm:text-sm">Control del paciente</div>
                      </div>
                      <div className="bg-muted rounded-lg p-2 sm:p-3 text-xs sm:text-sm">
                        <div className="font-medium mb-1">Interoperabilidad</div>
                        <div className="text-muted-foreground text-[10px] sm:text-sm">Entre instituciones</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Características Principales
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestra plataforma utiliza tecnología blockchain para garantizar la seguridad, integridad y
                accesibilidad de los registros médicos.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Seguridad Blockchain</h3>
              <p className="text-center text-muted-foreground">
                Registros médicos inmutables y seguros mediante tecnología blockchain, evitando alteraciones no
                autorizadas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Control del Paciente</h3>
              <p className="text-center text-muted-foreground">
                Contratos inteligentes que permiten al paciente gestionar quién accede a su información médica.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Share2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Interoperabilidad</h3>
              <p className="text-center text-muted-foreground">
                Compartir información entre instituciones de salud de forma segura y eficiente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Cumplimiento Normativo</h3>
              <p className="text-center text-muted-foreground">
                Alineado con HIPAA, GDPR, HL7 y FHIR, facilitando auditorías y evitando sanciones.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Identidad Digital</h3>
              <p className="text-center text-muted-foreground">
                Identidad digital descentralizada (DID) para que el paciente controle su información.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Eficiencia Operativa</h3>
              <p className="text-center text-muted-foreground">
                Reducción de costos operativos y mejora en la coordinación entre instituciones de salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Beneficios para su Institución
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                ChainMD ofrece ventajas significativas para hospitales, clínicas y aseguradoras de salud.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-12">
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Mejora la Colaboración</h3>
              </div>
              <p className="text-muted-foreground">
                Facilita la coordinación entre diferentes instituciones de salud, mejorando la atención al paciente.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Reducción de Costos</h3>
              </div>
              <p className="text-muted-foreground">
                Disminuye gastos operativos asociados a la gestión de registros médicos y trámites manuales.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Seguridad y Privacidad</h3>
              </div>
              <p className="text-muted-foreground">
                Garantiza la protección de datos sensibles mediante tecnología blockchain y contratos inteligentes.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Acceso Rápido</h3>
              </div>
              <p className="text-muted-foreground">
                Permite acceder de forma inmediata a la información del paciente, mejorando la calidad de atención.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Cumplimiento Regulatorio</h3>
              </div>
              <p className="text-muted-foreground">
                Facilita el cumplimiento de normativas como HIPAA y GDPR, evitando sanciones y problemas legales.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Diferenciación Competitiva</h3>
              </div>
              <p className="text-muted-foreground">
                Posiciona a su institución como innovadora en el sector salud, atrayendo más pacientes y profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Para Quién es ChainMD</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nuestra solución está diseñada para diferentes tipos de instituciones de salud.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 3v12h5c.023-3.681-.184-7.406-5-12zm0 12v6h1v-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Hospitales Públicos</h3>
              <p className="text-center text-muted-foreground">
                Modernización y protección de información de forma segura para infraestructuras complejas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Clínicas Privadas</h3>
              <p className="text-center text-muted-foreground">
                Diferenciación mediante tecnología moderna para clientes exigentes.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Obras Sociales</h3>
              <p className="text-center text-muted-foreground">
                Trazabilidad y transparencia para gestionar múltiples historias clínicas y convenios.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
              <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                  <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                  <path d="M12 3v6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Consultorios</h3>
              <p className="text-center text-muted-foreground">
                Soluciones simples y seguras para evitar pérdida de datos y cumplir normativas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Comience Hoy Mismo</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Solicite una demostración personalizada para su institución y descubra cómo ChainMD puede transformar la
                gestión de historias clínicas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/interactive-demo">
                <Button size="lg" variant="secondary" className="gap-1">
                  Probar Demo Interactiva <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Solicitar Demo Completa
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contactar Ventas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Producto</h3>
              <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                Características
              </Link>
              <Link href="#benefits" className="text-sm text-muted-foreground hover:text-foreground">
                Beneficios
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Precios
              </Link>
              <Link href="/roadmap" className="text-sm text-muted-foreground hover:text-foreground">
                Roadmap
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Recursos</h3>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
                Documentación
              </Link>
              <Link href="/webinars" className="text-sm text-muted-foreground hover:text-foreground">
                Webinars
              </Link>
              <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-foreground">
                Casos de Éxito
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Empresa</h3>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                Sobre Nosotros
              </Link>
              <Link href="/careers" className="text-sm text-muted-foreground hover:text-foreground">
                Carreras
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contacto
              </Link>
              <Link href="/partners" className="text-sm text-muted-foreground hover:text-foreground">
                Partners
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-medium">Legal</h3>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacidad
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Términos
              </Link>
              <Link href="/security" className="text-sm text-muted-foreground hover:text-foreground">
                Seguridad
              </Link>
              <Link href="/compliance" className="text-sm text-muted-foreground hover:text-foreground">
                Cumplimiento
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <span className="font-bold">ChainMD</span>
            </div>
            <p className="text-sm text-muted-foreground mt-4 md:mt-0">© 2025 ChainMD. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

