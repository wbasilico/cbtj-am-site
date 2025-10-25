import Head from "next/head";
import { useState, useMemo, useRef, useEffect } from "react";

const COLORS = {
  white: "#FFFFFF",
  lightGray: "#F2F2F2",
  blue: "#245894",
  red: "#c73633",
  darkGray: "#333333",
};

const CONTACTS = {
  whatsappCadastro: "https://wa.me/5592999999999",
  whatsappBoleto: "https://wa.me/5592988888888",
  whatsappComercial: "https://wa.me/5592977777777",
  whatsappOuvidoria: "https://wa.me/5592966666666",
};

const BRAND_LOGOS = Array.from({ length: 26 }).map((_, i) => ({
  id: i + 1,
  src: `/brands/brand-${i + 1}.png`,
  alt: `Marca ${i + 1}`,
}));

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Close on click outside & ESC, lock scroll
  useEffect(() => {
    function onDown(e: MouseEvent) {
      const t = e.target as Node;
      if (!menuRef.current || !buttonRef.current) return;
      if (!menuRef.current.contains(t) && ! buttonRef.current.contains(t)) {
        setMobileOpen(false);
      }
    }
    function onKey(e: KeyboardEvent){ if(e.key === "Escape") setMobileOpen(false); }
    if (mobileOpen) {
      document.addEventListener("mousedown", onDown);
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const rows = useMemo(() => {
    const r1 = BRAND_LOGOS.slice(0, 9);
    const r2 = BRAND_LOGOS.slice(9, 18);
    const r3 = BRAND_LOGOS.slice(18, 26);
    return [r1, r2, r3];
  }, []);

  return (
    <main className="min-h-screen" style={{ color: COLORS.darkGray }}>
      <Head>
        <title>CBTJ-AM — Clube de Benefícios do TJ-AM</title>
      </Head>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#home" className="flex items-center gap-3 group" aria-label="Ir para a Home">
              <img
              src="/logo.png"
              alt="CBTJ-AM"
              className="h-12 w-auto object-contain"
              />
          <div className="leading-tight">
          <div
          className="text-xl"
            style={{ color: '#245894', fontFamily: 'Arial, sans-serif', fontWeight: 800 }}
    >
      CBTJ-AM
    </div>
    <div className="text-[12px] sm:text-xs font-light" style={{ color: '#245894' }}>
      Clube de Benefícios do Tribunal de Justiça do Amazonas
    </div>
  </div>
</a>


            <nav className="hidden md:flex items-center gap-2">
              {[
                { href: '#home', label: 'Home' },
                { href: '/parceiros', label: 'Parceiros' },
                { href: '#contato', label: 'Contato' },
                { href: '/sobre', label: 'Sobre' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 rounded-md text-[15px] font-medium text-[#245894] transition-colors duration-200 hover:bg-[#c73633] hover:text-[#F2F2F2] hover:font-bold"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={CONTACTS.whatsappCadastro}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 inline-flex items-center px-4 py-2 rounded-full text-sm font-bold text-white transition-colors duration-200"
                style={{ backgroundColor: COLORS.blue }}
              >
                <span className="mr-1">Quero me Cadastrar</span>
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {mobileOpen && (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 z-40 bg-black/40 opacity-100 transition-opacity duration-200 md:hidden"
      onClick={() => setMobileOpen(false)}
    />
    {/* Slide-in Panel */}
    <div className="fixed right-0 top-0 z-50 h-full w-72 max-w-[85vw] bg-white border-l border-gray-200 shadow-xl md:hidden
                    transform transition-transform duration-200 translate-x-0"
         ref={menuRef}
         role="dialog" aria-modal="true">
      <div className="p-5 flex flex-col gap-2">
        {[
          { href: '#home', label: 'Home' },
          { href: '/parceiros', label: 'Parceiros' },
          { href: '#contato', label: 'Contato' },
          { href: '/sobre', label: 'Sobre' },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="px-4 py-3 rounded-md text-[15px] font-medium text-[#245894] transition-colors duration-200 hover:bg-[#c73633] hover:text-[#F2F2F2] hover:font-bold"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href={CONTACTS.whatsappCadastro}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center px-4 py-3 rounded-full text-sm font-bold text-white transition-colors duration-200"
          style={{ backgroundColor: COLORS.blue }}
        >
          Quero me Cadastrar
        </a>
      </div>
    </div>
  </>
)}
        </div>
      </header>

      <div className="fixed-header-offset" id="home">
        {/* HERO */}
        <section className="relative h-[78vh] min-h-[520px] w-full bg-black">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/hero/hero.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-500/50" />

          <div className="relative z-10 h-full w-full flex flex-col items-center justify-center px-6 text-center">
            <h1 className="title-style text-white !text-4xl sm:!text-5xl md:!text-6xl">
              Bem-vindo ao CBTJ-AM
            </h1>
            <p className="mt-4 max-w-3xl text-white/90 text-lg sm:text-xl font-medium">
              O seu <span className="accent-red">clube de benefícios</span> com vantagens reais para servidores do TJ-AM.
            </p>
          </div>
        </section>

        {/* O que é o Clube? */}
        <section id="sobre" className="py-16 sm:py-20" style={{ background: COLORS.lightGray }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="title-style text-3xl sm:text-4xl">O que é o Clube?</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="text-[15px] leading-relaxed">
                <p>
                  [Coloque aqui o seu texto de apresentação do clube. Você pode usar a classe
                  <span className="accent-red"> destaque</span> em trechos específicos.] Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="mt-4">
                  Proin id urna sed metus vehicula interdum. Praesent condimentum magna risus volutpat lacus.
                </p>
              </div>
              <div className="w-full h-64 sm:h-80 md:h-96 bg-white border border-gray-200 rounded-xl grid place-items-center">
                <span className="text-gray-500 text-sm">IMAGEM COMPLEMENTAR</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-16 sm:py-20" style={{ background: COLORS.white }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="title-style text-3xl sm:text-4xl">Benefícios</h2>
            <p className="mt-2 text-center text-sm sm:text-base font-medium" style={{ color: COLORS.darkGray }}>
              Vantagens pensadas para o seu dia a dia.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 sm:p-7 text-white text-center shadow-md"
                  style={{ background: COLORS.blue }}
                >
                  <h3 className="text-lg sm:text-xl font-extrabold">Título do Benefício {idx}</h3>
                  <p className="mt-2 text-sm sm:text-base font-bold opacity-90">
                    Texto de complemento breve explicando o benefício.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Parcerias de Sucesso */}
        <section id="parceiros" className="py-16 sm:py-20" style={{ background: COLORS.lightGray }}>
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <h2 className="title-style text-3xl sm:text-4xl">Parcerias de Sucesso</h2>
            <p className="mt-2 text-center text-sm sm:text-base font-medium" style={{ color: COLORS.darkGray }}>
              Marcas que confiam no CBTJ-AM.
            </p>

            <div className="mt-10 space-y-6">
              {[0,1,2].map((rowIndex) => (
                <div key={rowIndex} className="relative overflow-hidden w-full">
                  <div
                    className="flex items-center gap-10 whitespace-nowrap"
                    style={
                      rowIndex % 2 === 0
                        ? { animation: `marquee-left ${24 + rowIndex * 4}s linear infinite` }
                        : { animation: `marquee-right ${26 + rowIndex * 4}s linear infinite` }
                    }
                  >
                    {[...BRAND_LOGOS.slice(rowIndex*9, rowIndex*9 + (rowIndex===2?8:9)),
                      ...BRAND_LOGOS.slice(rowIndex*9, rowIndex*9 + (rowIndex===2?8:9))].map((logo, i) => (
                      <MarqueeLogo key={`${logo.id}-${i}`} logo={logo} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="/parceiros"
                className="inline-flex items-center px-6 py-3 rounded-full font-bold text-white transition-colors duration-200"
                style={{ background: COLORS.blue }}
              >
                Quero Aproveitar as Ofertas
              </a>
            </div>
          </div>
        </section>

        {/* Fale Conosco */}
        <section id="contato" className="py-16 sm:py-20" style={{ background: COLORS.white }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="title-style text-3xl sm:text-4xl">Fale Conosco</h2>
            <p className="mt-2 text-center text-sm sm:text-base font-medium" style={{ color: COLORS.darkGray }}>
              Escolha uma opção para falar conosco pelo WhatsApp.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href={CONTACTS.whatsappBoleto} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-6 py-3 rounded-full font-bold text-white transition-colors duration-200"
                 style={{ background: COLORS.blue }}>
                2ª Via de Boleto
              </a>
              <a href={CONTACTS.whatsappComercial} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-6 py-3 rounded-full font-bold transition-colors duration-200 border"
                 style={{ borderColor: COLORS.red, color: COLORS.red }}>
                Comercial
              </a>
              <a href={CONTACTS.whatsappOuvidoria} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center px-6 py-3 rounded-full font-bold transition-colors duration-200 border"
                 style={{ borderColor: COLORS.red, color: COLORS.red }}>
                Ouvidoria
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12" style={{ background: COLORS.blue }}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-[#F2F2F2]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
              <div>
                <a href="#home" className="inline-block" aria-label="Ir para a Home">
                  <div className="h-12 w-12 rounded-lg bg-white/10 border border-white/20 grid place-items-center">
                    <span className="text-[10px] text-white/80">LOGO</span>
                  </div>
                </a>
                <address className="not-italic mt-4 text-sm leading-relaxed">
                  Rua Exemplo, 123 — Bairro — Manaus/AM<br />
                  CEP 00000-000
                </address>
                <p className="mt-2 text-sm">CNPJ: 00.000.000/0000-00</p>
              </div>

              <div>
                <h4 className="text-lg font-extrabold">Links Institucionais</h4>
                <ul className="mt-3 space-y-2 text-sm">
                  <li><a href="#" className="underline-offset-4 hover:underline">Políticas de Privacidade</a></li>
                  <li><a href="#" className="underline-offset-4 hover:underline">Termos de Uso</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-extrabold">Siga o CBTJ-AM nas redes</h4>
                <div className="mt-3 flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 grid place-items-center">
                    <span className="text-[10px] text-white/80">FB</span>
                  </a>
                  <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-lg bg-white/10 border border-white/20 grid place-items-center">
                    <span className="text-[10px] text-white/80">IG</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="py-6 text-center text-xs">
              © {new Date().getFullYear()} CBTJ-AM. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        a[href^='https://wa.me/']{
          transition: background-color 200ms linear, color 200ms linear;
        }
        nav a:hover, .md\:hidden a:hover {
          border-radius: 0.5rem;
        }
        nav a, .md\:hidden a { color: ${COLORS.blue}; }
        nav a:hover, .md\:hidden a:hover { color: #F2F2F2; font-weight: 700; }
        a[rel~='noopener'][href^='https://wa.me/']:hover{ background: ${COLORS.red} !important; }
      `}</style>
    </main>
  );
}

function MarqueeLogo({ logo }: { logo: { id: number; src: string; alt: string } }) {
  return (
    <div className="relative shrink-0">
      <div className="h-16 sm:h-20 md:h-24 w-auto px-4 py-2 rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-h-12 sm:max-h-14 md:max-h-16 object-contain filter grayscale hover:grayscale-0 transition duration-200"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gray-200/60 opacity-100 hover:opacity-0 transition-opacity duration-200" />
    </div>
  );
}
