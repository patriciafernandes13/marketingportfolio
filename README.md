<!doctype html>
<html lang="pt-PT" class="h-full scroll-smooth">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Marketing Portfolio</title>

  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.263.0/dist/umd/lucide.min.js"></script>

  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Sora:wght@300;400;500;600&display=swap" rel="stylesheet">

  <style>
    html, body {
      height: 100%;
      margin: 0;
      background: #0a0a0a;
    }

    * {
      box-sizing: border-box;
    }

    body {
      font-family: 'Sora', sans-serif;
      color: white;
      overflow-x: hidden;
    }

    .font-display {
      font-family: 'Playfair Display', serif;
    }

    .glass {
      background: rgba(255,255,255,0.05);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.08);
    }

    .gold-line {
      height: 2px;
      background: linear-gradient(90deg, #D97706, transparent);
    }

    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      animation: fadeUp 0.8s ease forwards;
    }

    @keyframes fadeUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .delay-1 { animation-delay: .1s; }
    .delay-2 { animation-delay: .2s; }
    .delay-3 { animation-delay: .3s; }
    .delay-4 { animation-delay: .4s; }

    .project-card {
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      transition: all .4s ease;
    }

    .project-card:hover {
      transform: translateY(-4px);
    }

    .project-card .overlay {
      opacity: 0;
      transition: .4s ease;
    }

    .project-card:hover .overlay {
      opacity: 1;
    }

    .skill-pill {
      border: 1px solid rgba(255,255,255,0.08);
      background: rgba(255,255,255,0.03);
    }

    .doc-item {
      transition: .3s ease;
    }

    .doc-item:hover {
      transform: translateX(6px);
    }

    .modal-bg {
      background: rgba(0,0,0,0.92);
      backdrop-filter: blur(12px);
    }
  </style>
</head>

<body>

<!-- NAVBAR -->
<header class="fixed top-0 left-0 right-0 z-50 glass px-6 py-4">
  <div class="max-w-7xl mx-auto flex items-center justify-between">

    <h1 class="font-display text-2xl text-[#D97706] font-bold">
      O TEU NOME
    </h1>

    <nav class="hidden md:flex gap-8 text-sm text-gray-300">
      <a href="#about" class="hover:text-[#D97706] transition">About</a>
      <a href="#projects" class="hover:text-[#D97706] transition">Projects</a>
      <a href="#documents" class="hover:text-[#D97706] transition">Case Studies</a>
      <a href="#contact" class="hover:text-[#D97706] transition">Contact</a>
    </nav>

  </div>
</header>

<!-- HERO -->
<section class="min-h-screen flex items-center px-6 pt-32">

  <div class="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

    <!-- LEFT -->
    <div>

      <div class="gold-line w-20 mb-8 fade-up"></div>

      <h1 class="font-display text-5xl md:text-7xl leading-tight font-bold fade-up delay-1">
        Marketing Strategist <br>
        & Creative Branding
      </h1>

      <p class="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl fade-up delay-2">
        Crio estratégias de comunicação, branding e conteúdo digital que ajudam marcas a construir uma presença forte, memorável e visualmente impactante.
      </p>

      <div class="mt-10 flex gap-4 fade-up delay-3">

        <a href="#projects"
          class="px-7 py-3 rounded-full bg-[#D97706] text-black font-medium hover:bg-[#b45309] transition">
          Ver Projetos
        </a>

        <a href="#contact"
          class="px-7 py-3 rounded-full border border-gray-700 hover:border-[#D97706] hover:text-[#D97706] transition">
          Contacto
        </a>

      </div>

    </div>

    <!-- RIGHT -->
    <div class="flex justify-center fade-up delay-4">

      <div class="relative">

        <div class="absolute inset-0 bg-[#D97706]/20 blur-3xl rounded-full"></div>

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
          alt="Profile"
          class="relative w-[380px] h-[500px] object-cover rounded-[30px] border border-white/10"
        />

      </div>

    </div>

  </div>

</section>

<!-- ABOUT -->
<section id="about" class="py-32 px-6">

  <div class="max-w-7xl mx-auto">

    <div class="flex items-center gap-4 mb-14">
      <span class="text-[#D97706] uppercase tracking-[0.3em] text-sm">
        About Me
      </span>

      <div class="gold-line flex-1"></div>
    </div>

    <div class="grid lg:grid-cols-2 gap-20">

      <div>

        <h2 class="font-display text-4xl mb-8">
          Estratégia, criatividade e posicionamento de marca.
        </h2>

        <p class="text-gray-400 leading-relaxed text-lg mb-6">
          Sou uma profissional focada em marketing, branding e comunicação digital, com experiência no desenvolvimento de estratégias criativas para marcas de diferentes setores.
        </p>

        <p class="text-gray-400 leading-relaxed text-lg mb-6">
          Trabalho desde a construção de identidade visual até à criação de campanhas, conteúdos para redes sociais, posicionamento de marca e direção criativa para fotografia e comunicação.
        </p>

        <p class="text-gray-400 leading-relaxed text-lg">
          Gosto de criar projetos visualmente fortes, estratégicos e orientados para resultados, combinando criatividade com pensamento analítico para desenvolver marcas memoráveis.
        </p>

      </div>

      <!-- SKILLS -->
      <div>

        <div class="mb-12">

          <h3 class="text-xl font-semibold mb-6">
            Competências
          </h3>

          <div class="flex flex-wrap gap-4">

            <div class="skill-pill px-5 py-3 rounded-full">Branding & Positioning</div>
            <div class="skill-pill px-5 py-3 rounded-full">Social Media Strategy</div>
            <div class="skill-pill px-5 py-3 rounded-full">Creative Direction</div>
            <div class="skill-pill px-5 py-3 rounded-full">Content Planning</div>
            <div class="skill-pill px-5 py-3 rounded-full">Campaign Strategy</div>
            <div class="skill-pill px-5 py-3 rounded-full">Copywriting</div>
            <div class="skill-pill px-5 py-3 rounded-full">Visual Communication</div>
            <div class="skill-pill px-5 py-3 rounded-full">Consumer Analysis</div>

          </div>

        </div>

        <div>

          <h3 class="text-xl font-semibold mb-6">
            Ferramentas
          </h3>

          <div class="grid grid-cols-2 gap-4 text-gray-300">

            <div>Canva</div>
            <div>CapCut</div>
            <div>Figma</div>
            <div>Notion</div>
            <div>Google Slides</div>
            <div>Mailchimp</div>
            <div>Meta Business Suite</div>
            <div>Adobe Express</div>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- PROJECTS -->
<section id="projects" class="py-32 px-6">

  <div class="max-w-7xl mx-auto">

    <div class="flex items-center gap-4 mb-14">
      <span class="text-[#D97706] uppercase tracking-[0.3em] text-sm">
        Selected Work
      </span>

      <div class="gold-line flex-1"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">

      <!-- PROJECT -->
      <div class="project-card h-80 glass cursor-pointer p-10 flex flex-col justify-end"
        onclick="showProject(0)">

        <div class="overlay absolute inset-0 bg-black/50"></div>

        <div class="relative z-10">

          <span class="text-[#D97706] text-xs tracking-[0.3em] uppercase">
            Social Media Strategy
          </span>

          <h3 class="font-display text-3xl mt-3">
            Ceviche
          </h3>

          <p class="text-gray-400 mt-3">
            Planeamento estratégico de conteúdos para redes sociais com foco em posicionamento visual e engagement.
          </p>

        </div>

      </div>

      <!-- PROJECT -->
      <div class="project-card h-80 glass cursor-pointer p-10 flex flex-col justify-end"
        onclick="showProject(1)">

        <div class="relative z-10">

          <span class="text-[#D97706] text-xs tracking-[0.3em] uppercase">
            Marketing Strategy
          </span>

          <h3 class="font-display text-3xl mt-3">
            Farmácia Ferreira da Silva
          </h3>

          <p class="text-gray-400 mt-3">
            Proposta estratégica de marketing focada em posicionamento, comunicação e crescimento digital.
          </p>

        </div>

      </div>

      <!-- PROJECT -->
      <div class="project-card h-80 glass cursor-pointer p-10 flex flex-col justify-end"
        onclick="showProject(2)">

        <div class="relative z-10">

          <span class="text-[#D97706] text-xs tracking-[0.3em] uppercase">
            Brand Identity
          </span>

          <h3 class="font-display text-3xl mt-3">
            Ikeda
          </h3>

          <p class="text-gray-400 mt-3">
            Redefinição da imagem visual da marca e direção criativa para sessão fotográfica.
          </p>

        </div>

      </div>

      <!-- PROJECT -->
      <div class="project-card h-80 glass cursor-pointer p-10 flex flex-col justify-end"
        onclick="showProject(3)">

        <div class="relative z-10">

          <span class="text-[#D97706] text-xs tracking-[0.3em] uppercase">
            Branding & Digital Strategy
          </span>

          <h3 class="font-display text-3xl mt-3">
            Julieta Joias
          </h3>

          <p class="text-gray-400 mt-3">
            Estratégia de comunicação e identidade visual para marca de joalharia contemporânea.
          </p>

        </div>

      </div>

      <!-- PROJECT -->
      <div class="project-card h-80 glass cursor-pointer p-10 flex flex-col justify-end"
        onclick="showProject(4)">

        <div class="relative z-10">

          <span class="text-[#D97706] text-xs tracking-[0.3em] uppercase">
            Creative Direction
          </span>

          <h3 class="font-display text-3xl mt-3">
            Trendy Pillows
          </h3>

          <p class="text-gray-400 mt-3">
            Direção criativa e conceptual para comunicação visual e sessão fotográfica.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- CASE STUDIES -->
<section id="documents" class="py-32 px-6">

  <div class="max-w-5xl mx-auto">

    <div class="flex items-center gap-4 mb-14">
      <span class="text-[#D97706] uppercase tracking-[0.3em] text-sm">
        Case Studies
      </span>

      <div class="gold-line flex-1"></div>
    </div>

    <div class="space-y-6">

      <div class="doc-item glass rounded-2xl p-8">
        <h3 class="font-semibold text-xl mb-3">
          Ceviche — Social Media Planning
        </h3>

        <p class="text-gray-400">
          Estratégia de conteúdos, planeamento visual e pilares de comunicação para redes sociais.
        </p>
      </div>

      <div class="doc-item glass rounded-2xl p-8">
        <h3 class="font-semibold text-xl mb-3">
          Farmácia Ferreira da Silva — Marketing Proposal
        </h3>

        <p class="text-gray-400">
          Desenvolvimento de proposta estratégica de marketing e objetivos de campanha.
        </p>
      </div>

      <div class="doc-item glass rounded-2xl p-8">
        <h3 class="font-semibold text-xl mb-3">
          Ikeda — Rebranding Direction
        </h3>

        <p class="text-gray-400">
          Construção de nova direção visual e briefing criativo para produção fotográfica.
        </p>
      </div>

      <div class="doc-item glass rounded-2xl p-8">
        <h3 class="font-semibold text-xl mb-3">
          Julieta Joias — Branding Strategy
        </h3>

        <p class="text-gray-400">
          Análise de público, identidade visual e proposta estratégica de comunicação.
        </p>
      </div>

      <div class="doc-item glass rounded-2xl p-8">
        <h3 class="font-semibold text-xl mb-3">
          Trendy Pillows — Creative Campaign
        </h3>

        <p class="text-gray-400">
          Moodboards, direção criativa, briefing fotográfico e comunicação visual.
        </p>
      </div>

    </div>

  </div>

</section>

<!-- CONTACT -->
<section id="contact" class="py-32 px-6 text-center">

  <div class="max-w-4xl mx-auto">

    <h2 class="font-display text-5xl leading-tight">
      Let's Work <br>
      <span class="text-[#D97706]">
        Together
      </span>
    </h2>

    <p class="text-gray-400 text-lg mt-8">
      Disponível para oportunidades em marketing, branding, social media e comunicação digital.
    </p>

    <div class="mt-12 flex justify-center gap-5">

      <a href="#"
        class="w-14 h-14 rounded-full glass flex items-center justify-center hover:border-[#D97706] transition">
        <i data-lucide="linkedin"></i>
      </a>

      <a href="#"
        class="w-14 h-14 rounded-full glass flex items-center justify-center hover:border-[#D97706] transition">
        <i data-lucide="mail"></i>
      </a>

      <a href="#"
        class="w-14 h-14 rounded-full glass flex items-center justify-center hover:border-[#D97706] transition">
        <i data-lucide="instagram"></i>
      </a>

    </div>

  </div>

</section>

<!-- FOOTER -->
<footer class="border-t border-white/5 py-8 px-6">

  <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

    <span>
      © 2026 O TEU NOME
    </span>

    <span class="mt-3 md:mt-0">
      Marketing Portfolio
    </span>

  </div>

</footer>

<!-- MODAL -->
<div id="project-modal"
  class="fixed inset-0 z-50 hidden modal-bg overflow-y-auto">

  <div class="min-h-screen flex items-center justify-center p-6">

    <div class="max-w-3xl w-full glass rounded-[30px] p-10 relative">

      <button onclick="closeProject()"
        class="absolute top-6 right-6 text-gray-400 hover:text-[#D97706]">
        <i data-lucide="x"></i>
      </button>

      <div id="modal-content"></div>

    </div>

  </div>

</div>

<script>

const projects = [

{
title: 'Ceviche',
category: 'Social Media Strategy',
desc: 'Desenvolvimento de estratégia de conteúdos para redes sociais da marca Ceviche, incluindo definição de linguagem visual, pilares de conteúdo e direção criativa para comunicação digital.',
highlights: [
'Estratégia de conteúdo para Instagram',
'Definição de pilares de comunicação',
'Planeamento visual para redes sociais'
]
},

{
title: 'Farmácia Ferreira da Silva',
category: 'Marketing Strategy',
desc: 'Desenvolvimento de uma proposta completa de marketing incluindo objetivos de campanha, análise estratégica e comunicação digital.',
highlights: [
'Estratégia de marketing integrada',
'Objetivos de campanha definidos',
'Planeamento de comunicação digital'
]
},

{
title: 'Ikeda',
category: 'Brand Identity',
desc: 'Projeto focado no reposicionamento visual da marca através da criação de nova direção estética e briefing criativo.',
highlights: [
'Nova direção visual da marca',
'Briefing criativo para fotografia',
'Estratégia estética e visual'
]
},

{
title: 'Julieta Joias',
category: 'Branding & Digital Strategy',
desc: 'Desenvolvimento de análise de público-alvo, proposta de comunicação, manual de identidade visual e conceito para homepage.',
highlights: [
'Análise de público-alvo',
'Manual de identidade visual',
'Estratégia de comunicação',
'Design conceptual para website'
]
},

{
title: 'Trendy Pillows',
category: 'Creative Direction',
desc: 'Projeto de direção criativa incluindo moodboards, briefing fotográfico, tom de comunicação e apresentação comercial.',
highlights: [
'Moodboards e referências criativas',
'Briefing para sessão fotográfica',
'Desenvolvimento de tom de voz',
'Apresentação comercial'
]
}

];

function showProject(i) {

const p = projects[i];

document.getElementById('modal-content').innerHTML = `

<span class="text-[#D97706] uppercase tracking-[0.3em] text-xs">
${p.category}
</span>

<h2 class="font-display text-5xl mt-5">
${p.title}
</h2>

<div class="gold-line w-24 mt-6"></div>

<p class="text-gray-300 text-lg leading-relaxed mt-10">
${p.desc}
</p>

<div class="grid gap-4 mt-10">

${p.highlights.map(h => `

<div class="glass rounded-2xl p-5 flex items-center gap-4">

<i data-lucide="check-circle"
class="text-[#D97706] w-5 h-5"></i>

<span class="text-gray-200">
${h}
</span>

</div>

`).join('')}

</div>

`;

document.getElementById('project-modal').classList.remove('hidden');

document.body.style.overflow = 'hidden';

lucide.createIcons();

}

function closeProject() {

document.getElementById('project-modal').classList.add('hidden');

document.body.style.overflow = '';

}

lucide.createIcons();

</script>

</body>
</html>
