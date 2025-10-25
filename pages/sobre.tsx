import Head from 'next/head';

export default function Sobre() {
  return (
    <main>
      <Head><title>Sobre — CBTJ-AM</title></Head>
      <section className="min-h-[60vh] py-24" style={{ background: '#F2F2F2' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="title-style text-4xl">Sobre o CBTJ-AM</h1>
          <p className="mt-4 text-cbtj-dark text-base">
            Página institucional. Substitua este texto pelo conteúdo definitivo do clube.
          </p>
        </div>
      </section>
    </main>
  );
}
