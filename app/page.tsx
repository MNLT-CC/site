import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white text-black">
      {/* HERO */}
      <section className="text-center mt-20">
        <h1 className="text-6xl font-bold tracking-tight">MNLT™</h1>
        <p className="mt-4 text-xl">Estruturas digitais. Concretas. Funcionais.</p>
      </section>

      {/* MANIFESTO */}
      <section className="max-w-2xl text-center mt-16 space-y-4">
        <p>Contra o ornamento. A favor da estrutura.</p>
        <p>Não fazemos bonito. Fazemos necessário.</p>
        <p>Não seguimos tendências. Criamos estruturas que permanecem.</p>
        <p>Somos MNLT™.</p>
      </section>

      {/* CONTATO */}
      <section className="mt-20 text-center">
        <p className="text-lg">Vamos falar de produto.</p>
        <a
          href="mailto:hello@mnlt.cc"
          className="mt-4 inline-block border border-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition"
        >
          hello@mnlt.cc
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 mb-10 text-sm text-gray-500">
        © 2025 MNLT™ – LinkedIn | Instagram
      </footer>
    </main>
  )
}
