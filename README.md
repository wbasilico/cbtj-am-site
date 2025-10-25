# CBTJ-AM — Website (Next.js + Tailwind)

Projeto inicial do site do **CBTJ-AM** para deploy no **Vercel** e versionamento no **GitHub**.

## Tecnologias
- Next.js 14 (Pages Router)
- React 18
- Tailwind CSS 3
- TypeScript

## Cores & Tipografia
- Fundo: Branco `#FFFFFF` e Cinza Claro `#F2F2F2` (seções alternadas)
- Azul `#245894` para títulos e botões
- Vermelho `#c73633` para destaques e hover
- Cinza Escuro `#333333` para textos
- Fonte: **Montserrat** (todas as variações via Google Fonts). **Exceção**: no Header, a palavra “CBTJ-AM” usa **Arial Extrabold** (inline).

### Classes utilitárias globais
- `.accent-red` → negrito + vermelho `#c73633`
- `.title-style` → azul `#245894`, **extrabold**, centralizado

## Como rodar localmente
```bash
npm install
npm run dev
# abra http://localhost:3000
```

## Deploy (Vercel)
1. Crie um repositório no GitHub e faça o push deste projeto.
2. No painel da **Vercel**, escolha **New Project** → importe o repositório.
3. Framework Preset: **Next.js**. As configurações padrão já funcionam.
4. Clique em **Deploy**. O domínio temporário será gerado automaticamente.

## Estrutura
- `pages/index.tsx` → Home (com âncora **#contato** no menu em vez de página)
- `pages/parceiros.tsx` → placeholder
- `pages/sobre.tsx` → placeholder
- `public/hero/hero-placeholder.jpg` → imagem do hero (substitua)
- `public/brands/brand-1.png...brand-26.png` → placeholders das marcas
- `styles/globals.css` → Tailwind + helpers
- `tailwind.config.js` / `postcss.config.js` → configs Tailwind
- `next.config.js` / `tsconfig.json` → configs Next/TS

## Ajustes rápidos
- Atualize os números de WhatsApp em `pages/index.tsx` (const `CONTACTS`).
- Substitua os PNGs das marcas e a imagem do hero por versões reais.
- Mantenha o **menu Contato** como âncora para a seção “Fale Conosco” da Home.
