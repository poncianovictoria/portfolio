document.addEventListener("DOMContentLoaded", () => {

    // 0. Dados de conteúdo (reproduzem exatamente o HTML estático original)
    const skills = [
        'HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js',
        'Tailwind CSS', 'Figma para Código', 'Git & GitHub'
    ];

    const pillCls = 'px-4 py-2 rounded-xl bg-card border border-white/5 hover:border-primary/50 hover:text-primary cursor-default transition-colors';

    const projects = [
        {
            cardCls: 'reveal-up group relative rounded-[2rem] bg-card overflow-hidden border border-white/5 hover:border-primary/30 transition-colors',
            img: 'src/assets/images/feirao-de-empregos.png',
            alt: 'Landing Page para o Feirão do Emprego ENIAC',
            imgCls: 'w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700',
            liveHref: 'https://poncianovictoria.github.io/site-feirao-emprego-eniac/',
            liveExtra: ' target="_blank" rel="noopener noreferrer" aria-label="Abrir site do projeto"',
            tags: [
                'text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md',
                'text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-md',
                'text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md'
            ],
            tagLabels: ['Landing Page', 'JavaScript', 'CSS'],
            titleCls: 'text-2xl font-bold mb-2 group-hover:text-primary transition-colors',
            title: 'Site Feirão do Emprego ENIAC',
            desc: 'Criação e publicação da landing page institucional para a divulgação do evento Feirão do Emprego ENIAC 2025. O projeto consiste em uma página informativa e responsiva desenvolvida para conectar estudantes e profissionais ao mercado de trabalho, apresentando detalhes das vagas, programação do evento e canal de inscrição rápida.'
        },
        {
            cardCls: 'reveal-up delay-100 md:mt-16 group relative rounded-[2rem] bg-card overflow-hidden border border-white/5 hover:border-secondary/30 transition-colors',
            img: 'src/assets/images/sistema-crm-polibalbino.png',
            alt: 'Projeto 2',
            imgCls: 'w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700',
            liveHref: '#',
            liveExtra: '',
            tags: [
                'text-xs font-semibold text-pink-400 bg-pink-400/10 px-2 py-1 rounded-md',
                'text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-md',
                'text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md'
            ],
            tagLabels: ['Sistema Web', 'React', 'Tailwind'],
            titleCls: 'text-2xl font-bold mb-2 group-hover:text-secondary transition-colors',
            title: 'Sistema Operacional de Orçamentos e CRM Comercial – Polibalbino',
            desc: 'Desenvolvimento e implantação de um sistema operacional e CRM personalizado para a Polibalbino. A plataforma automatiza a geração de orçamentos a partir de pedidos vinculados à tabela de preços e ao estoque em tempo real. Além de otimizar a rotina operacional da equipe de vendas, o sistema centraliza o histórico comercial e gera métricas estratégicas para orientar a tomada de decisão da diretoria.'
        },
        {
            cardCls: 'reveal-up delay-200 md:-mt-16 group relative rounded-[2rem] bg-card overflow-hidden border border-white/5 hover:border-primary/30 transition-colors',
            img: 'src/assets/images/eniac-comunidade.jpeg',
            alt: 'Site Institucional – ENIAC Comunidades',
            imgCls: 'w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700',
            liveHref: 'https://poncianovictoria.github.io/site-eniac-comunidades/',
            liveExtra: ' target="_blank" rel="noopener noreferrer" aria-label="Abrir site do projeto"',
            tags: [
                'text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md',
                'text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded-md',
                'text-xs font-semibold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-md'
            ],
            tagLabels: ['Landing Page', 'JavaScript', 'CSS'],
            titleCls: 'text-2xl font-bold mb-2 group-hover:text-primary transition-colors',
            title: 'Site Institucional – ENIAC Comunidades',
            desc: 'Criação e publicação do portal web institucional para a iniciativa ENIAC Comunidades. O projeto consiste em uma plataforma informativa e responsiva desenvolvida para mapear, divulgar e conectar estudantes, professores e a comunidade local a projetos sociais, grupos de estudo e ações comunitárias promovidas pela instituição, facilitando o engajamento e a participação em iniciativas de impacto social.'
        }
    ];

    // Renderiza as pills de habilidades
    const skillsContainer = document.getElementById('skills-pills');
    skills.forEach(skill => {
        const pill = document.createElement('span');
        pill.className = pillCls;
        pill.textContent = skill;
        skillsContainer.appendChild(pill);
    });

    // Renderiza os cards de projeto antes da chamada para o GitHub
    const cta = document.getElementById('projects-cta');
    const cardsHtml = projects.map(p => `
        <div class="${p.cardCls}">
            <div class="relative h-64 overflow-hidden">
                <img src="${p.img}" alt="${p.alt}" loading="lazy" class="${p.imgCls}">
                <div class="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href="${p.liveHref}"${p.liveExtra} class="w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center hover:scale-110 transition-transform"><i class="fa-solid fa-link" aria-hidden="true"></i></a>
                    <a href="#" class="w-12 h-12 rounded-full bg-dark/80 text-white flex items-center justify-center hover:scale-110 transition-transform border border-white/20"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
                </div>
            </div>
            <div class="p-8">
                <div class="flex gap-2 mb-3">
                    ${p.tags.map((cls, i) => `<span class="${cls}">${p.tagLabels[i]}</span>`).join('\n')}
                </div>
                <h3 class="${p.titleCls}">${p.title}</h3>
                <p class="text-slate-400 text-sm">${p.desc}</p>
            </div>
        </div>`).join('\n');
    cta.insertAdjacentHTML('beforebegin', cardsHtml);

    // 1. Lógica do Menu Mobile
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const navbar = document.getElementById('navbar');

    function closeMenu() {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', String(!isOpen));
    });

    // Fechar menu ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // A11Y: fechar menu ao clicar fora ou pressionar Esc
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
            closeMenu();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            closeMenu();
        }
    });

    // 2. Mudar background da navbar ao rolar (com requestAnimationFrame)
    let ticking = false;
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
        } else {
            navbar.classList.remove('shadow-md');
        }
        ticking = false;
    }
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    }, { passive: true });

    // 3. Links de placeholder (#) não rolam a página para o topo
    document.querySelectorAll('a[href="#"]').forEach(a => {
        a.addEventListener('click', (e) => e.preventDefault());
    });

    // 4. API Intersection Observer para as Animações de Scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale').forEach(el => {
        observer.observe(el);
    });

});

// Esconde a tela de carregamento quando o site termina de carregar
(function () {
    var loader = document.getElementById('loader');
    if (!loader) return;

    function hideLoader() {
        loader.classList.add('loaded');
        // Remove do DOM após a transição para não ficar pendurado
        setTimeout(function () {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 600);
    }

    // Tempo máximo de segurança (nunca deixa a splash travar o site)
    var safetyTimer = setTimeout(hideLoader, 2000);

    function done() {
        clearTimeout(safetyTimer);
        hideLoader();
    }

    var loaded = false;
    function onLoad() { if (!loaded) { loaded = true; done(); } }

    if (document.readyState === 'complete') {
        onLoad();
    } else {
        window.addEventListener('load', onLoad);
    }

    // As fontes também precisam estar prontas
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(onLoad).catch(function(){});
    }
})();
