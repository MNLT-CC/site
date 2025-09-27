import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-white text-black">
      {/* HERO */}
      <section className="text-center mt-20">
        <h1 className="text-6xl tracking-tight font-mono font-normal">MNLT™</h1>
        <p className="mt-4 font-mono text-sm leading-3">Estruturas digitais. Concretas. Funcionais.</p>
      </section>

      {/* MANIFESTO */}
      

      {/* CONTATO */}
      <section className="text-center mt-8">
        
        <a
          href="mailto:hello@mnlt.cc"
          className="mt-4 inline-block border-black px-6 py-3 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition border-0"
        >
          hello@mnlt.cc
        </a>
      </section>

      {/* FOOTER */}
      
    </main>
  )
}
