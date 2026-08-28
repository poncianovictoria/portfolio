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
            width: 900,
            height: 435,
            imgCls: 'w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700',
            liveHref: 'https://poncianovictoria.github.io/site-feirao-emprego-eniac/',
            isExternal: true,
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
            alt: 'Captura de tela do Sistema Operacional de Orçamentos e CRM Comercial Polibalbino',
            width: 900,
            height: 463,
            imgCls: 'w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700',
            liveHref: '#',
            isExternal: false,
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
            width: 900,
            height: 434,
            imgCls: 'w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700',
            liveHref: 'https://poncianovictoria.github.io/site-eniac-comunidades/',
            isExternal: true,
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

    // Helper: cria um <i> do FontAwesome desativando a leitura por leitores de tela
    function icon(className) {
        const i = document.createElement('i');
        i.className = className;
        i.setAttribute('aria-hidden', 'true');
        return i;
    }

    // Helper: cria um link de ação no overlay do card
    function actionLink(href, isExternal, className, label) {
        const a = document.createElement('a');
        if (isExternal) {
            a.href = href;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', label);
        } else {
            a.href = href;
        }
        a.className = className;
        return a;
    }

    // Build do card de projeto via DOM API (sem innerHTML -> sem vetor de injeção)
    function buildProjectCard(p) {
        const card = document.createElement('div');
        card.className = p.cardCls;

        const media = document.createElement('div');
        media.className = 'relative h-64 overflow-hidden';

        const img = document.createElement('img');
        img.src = p.img;
        img.alt = p.alt;
        img.width = p.width;
        img.height = p.height;
        img.loading = 'lazy';
        img.decoding = 'async';
        img.className = p.imgCls;

        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4';

        const liveLink = actionLink(p.liveHref, p.isExternal, 'w-12 h-12 rounded-full bg-white text-dark flex items-center justify-center hover:scale-110 transition-transform', 'Abrir site do projeto');
        liveLink.appendChild(icon('fa-solid fa-link'));

        const githubLink = actionLink('#', false, 'w-12 h-12 rounded-full bg-dark/80 text-white flex items-center justify-center hover:scale-110 transition-transform border border-white/20');
        githubLink.appendChild(icon('fa-brands fa-github'));

        overlay.appendChild(liveLink);
        overlay.appendChild(githubLink);
        media.appendChild(img);
        media.appendChild(overlay);

        const body = document.createElement('div');
        body.className = 'p-8';

        const tagRow = document.createElement('div');
        tagRow.className = 'flex gap-2 mb-3';
        p.tags.forEach((cls, i) => {
            const tag = document.createElement('span');
            tag.className = cls;
            tag.textContent = p.tagLabels[i];
            tagRow.appendChild(tag);
        });

        const title = document.createElement('h3');
        title.className = p.titleCls;
        title.textContent = p.title;

        const desc = document.createElement('p');
        desc.className = 'text-slate-400 text-sm';
        desc.textContent = p.desc;

        body.appendChild(tagRow);
        body.appendChild(title);
        body.appendChild(desc);

        card.appendChild(media);
        card.appendChild(body);
        return card;
    }

    // Renderiza as pills de habilidades
    const skillsContainer = document.getElementById('skills-pills');
    const skillsFragment = document.createDocumentFragment();
    skills.forEach(skill => {
        const pill = document.createElement('span');
        pill.className = pillCls;
        pill.textContent = skill;
        skillsFragment.appendChild(pill);
    });
    skillsContainer.appendChild(skillsFragment);

    // Renderiza os cards de projeto antes da chamada para o GitHub
    const cta = document.getElementById('projects-cta');
    const cardsFragment = document.createDocumentFragment();
    projects.forEach(p => cardsFragment.appendChild(buildProjectCard(p)));
    cta.before(cardsFragment);

    // 1. Lógica do Menu Mobile
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    function setMenuOpen(open) {
        menu.classList.toggle('hidden', !open);
        btn.setAttribute('aria-expanded', String(open));
    }

    btn.addEventListener('click', () => {
        setMenuOpen(menu.classList.contains('hidden'));
    });

    // Fechar menu ao clicar em um link (delegação de evento)
    menu.addEventListener('click', (e) => {
        if (e.target.closest('.mobile-link')) setMenuOpen(false);
    });

    // A11Y: fechar menu ao clicar fora ou pressionar Esc
    document.addEventListener('click', (e) => {
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
            setMenuOpen(false);
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
            setMenuOpen(false);
            btn.focus();
        }
    });

    // 2. Mudar background da navbar ao rolar (com requestAnimationFrame)
    const navbar = document.getElementById('navbar');
    let ticking = false;
    function updateNavbar() {
        navbar.classList.toggle('shadow-md', window.scrollY > 50);
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
    const loader = document.getElementById('loader');
    if (!loader) return;

    let done = false;

    function hideLoader() {
        loader.classList.add('loaded');
        // Remove do DOM após a transição para não ficar pendurado
        setTimeout(() => {
            if (loader.parentNode) loader.parentNode.removeChild(loader);
        }, 600);
    }

    // Tempo máximo de segurança (nunca deixa a splash travar o site)
    const safetyTimer = setTimeout(finish, 2000);

    function finish() {
        if (done) return;
        done = true;
        clearTimeout(safetyTimer);
        window.removeEventListener('load', finish);
        hideLoader();
    }

    if (document.readyState === 'complete') {
        finish();
    } else {
        window.addEventListener('load', finish);
    }

    // As fontes também precisam estar prontas
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => finish()).catch(() => finish());
    }
})();