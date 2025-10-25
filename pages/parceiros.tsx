import Head from 'next/head';

export default function Parceiros() {
  return (
    <main>
      <Head><title>Parceiros — CBTJ-AM</title></Head>
      <section className="min-h-[60vh] py-24 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="title-style text-4xl">Parceiros</h1>
          <p className="mt-4 text-cbtj-dark text-base">
            Em breve você verá aqui as ofertas e condições especiais dos nossos parceiros.
          </p>
        </div>
      </section>
    </main>
  );
}
