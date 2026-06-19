/**
 * @fileoverview Internationalization (i18n) engine for the portfolio.
 * Supports pt-BR and en-US with localStorage persistence and
 * automatic browser language detection on first visit.
 */

const TRANSLATIONS = {
    "pt-BR": {
        // -- Meta / SEO (applied via special handler) --
        "meta.title": "Gustavo Pimentel — Desenvolvedor de Software & Soluções Tecnológicas",
        "meta.description": "Portfólio de Gustavo Pimentel. Desenvolvimento de soluções tecnológicas: IA, Visão Computacional, plataformas web escaláveis e jogos 3D interativos.",
        "meta.og.title": "Gustavo Pimentel — Portfolio",
        "meta.og.description": "Desenvolvedor de Software. IA, Web, DevOps, Jogos 3D.",

        // -- Nav --
        "nav.projects": "Projetos",
        "nav.workflow": "Metodologia",
        "nav.experience": "Experiência",
        "nav.contact": "Contato",
        "nav.hamburger.aria": "Abrir menu de navegação",

        // -- Hero --
        "hero.status.title": "Focado em soluções",
        "hero.typewriter": "> Desenvolvedor de Software · Estudante de Eng. Mecânica",
        "hero.description": "Desenvolvimento de soluções tecnológicas para empresas. Arquiteturas robustas, IA aplicada, plataformas web escaláveis e infraestrutura em nuvem.",
        "hero.cta.projects": "Ver Projetos ↓",
        "hero.cta.contact": "Contato",
        "hero.img.alt": "Foto de Perfil de Gustavo Pimentel",

        // -- About panel --
        "about.title": "Sobre",
        "about.text": "Graduando em Engenharia Mecânica pelo IFES Vitória com foco em soluções tecnológicas. Experiência real em plataformas de produção com Django, FastAPI, Angular e Next.js, além de pipelines de Machine Learning com PyTorch e infraestrutura containerizada com Docker e Kubernetes.",

        // -- Tech Stack --
        "tech.title": "Tech Stack",
        "tech.cat.infra": "Infraestrutura",

        // -- Projects section --
        "projects.divider": "Portfólio",
        "projects.title": "Projetos em Destaque",
        "projects.subtitle": "Soluções completas — do treinamento de redes neurais ao deploy em produção.",

        // -- Pokédex project --
        "project.pokedex.img.alt": "Pokédex AI — Interface de upload de silhueta com Aurora Mesh e partículas interativas",
        "project.pokedex.status": "Live",
        "project.pokedex.tagline": "Who's That Pokémon? — Computer Vision",
        "project.pokedex.description": "Classificação de 1.025 espécies a partir de silhuetas binárias usando um ensemble de 5 modelos ResNet-18 treinados do zero, com segmentação profunda BiRefNet e pipeline de Knowledge Distillation para MobileNetV3. Top-1 Accuracy: 90.24%.",
        "project.pokedex.cta": "Ver Projeto →",

        // -- Muralfy project --
        "project.muralfy.img.alt": "Muralfy — Plataforma de montagem de painéis fotográficos para impressão",
        "project.muralfy.status": "Beta",
        "project.muralfy.tagline": "Painéis Fotográficos para Impressão",
        "project.muralfy.description": "Plataforma web para montagem de painéis fotográficos em grande formato. O frontend (React/Vite) realiza compressão client-side de até 250 imagens. O backend fornece uma REST API em Django acoplada a um motor de processamento e geração de PDF otimizado em Rust.",
        "project.muralfy.cta": "Ver Projeto →",

        // -- Brabos project --
        "project.brabos.img.alt": "Brabos.dev — Jogo arcade 3D de futebol com personagem estilizado do Brasil",
        "project.brabos.status": "Em Breve",
        "project.brabos.tagline": "Jogo Arcade 3D — Copa do Mundo",
        "project.brabos.description": "Jogo arcade 3D para web com temática de futebol da Copa do Mundo. Personagens estilizados representando seleções (Brasil e EUA funcionais), motor gráfico em Three.js com alta performance em mobile via navegador.",
        "project.brabos.cta": "Ver Projeto →",

        // -- Workflow section --
        "workflow.divider": "Fluxo de Trabalho",
        "workflow.title": "AI-Assisted Engineering",
        "workflow.subtitle": "Integração de Inteligência Artificial no ciclo de vida de desenvolvimento ágil, maximizando a velocidade de entrega sem abrir mão do rigor técnico e arquitetural.",

        "workflow.sdd.title": "Spec-Driven Development (SDD)",
        "workflow.sdd.description": "Orientação do desenvolvimento a partir de especificações rigorosas e contratos de API bem definidos. Isso permite que agentes de IA entendam o escopo exato do domínio e gerem, testem e iterem sobre o código de forma previsível e determinística.",

        "workflow.orchestration.title": "Orquestração Autônoma",
        "workflow.orchestration.description": "Utilização avançada de agentes de linha de comando como <strong>Claude Code</strong> e <strong>OpenCode</strong> para <em>pair programming</em> autônomo. Aplico essas ferramentas para refatoração profunda, geração de testes unitários e implementação de features no terminal.",

        "workflow.agile.title": "Agilidade Aumentada por IA",
        "workflow.agile.description": "Adaptação de rituais ágeis (Scrum/Kanban) para incluir a IA como parte da força de trabalho. Isso inclui automação de revisões de código, análise estática e prototipagem rápida, acelerando drasticamente o <em>Time-to-Market</em> (TTM).",

        // -- Experience section --
        "experience.divider": "Trajetória",
        "experience.title": "Experiência Profissional",
        "experience.subtitle": "Engenharia de software aplicada em ambientes reais de produção.",

        "exp1.period": "ABR 2025 — ABR 2026",
        "exp1.role": "Estagiário de Engenharia Mecânica",
        "exp1.company": "CLIMA VIX COMÉRCIO E SERVIÇOS LTDA · Cariacica, ES",
        "exp1.item1": "Plataforma completa de orçamentos técnicos com Python (Django REST Framework) + Angular, integrando redes neurais para otimização",
        "exp1.item2": "Arquitetura assíncrona com Celery e Redis para processamento de tarefas pesadas em segundo plano",
        "exp1.item3": "DevOps end-to-end: containerização com Docker, orquestração Kubernetes e servidores com domínio registrado em alta disponibilidade",
        "exp1.item4": "Engenharia de manutenção: montagens, instalações e manutenções preventivas/corretivas de equipamentos mecânicos e elétricos",

        "exp2.period": "ABR 2023 — ABR 2026",
        "exp2.role": "Extensionista — Desenvolvimento de Software",
        "exp2.company": "Projeto E-TRÂNSITO ADUANEIRO · IFES / Receita Federal · Alfândega do Porto de Vitória",
        "exp2.item1": "Desenvolvimento de solução tecnológica para a Alfândega do Porto de Vitória (ALF/VIT) em parceria com a Receita Federal",
        "exp2.item2": "Customização de interface, versionamento de código e configuração de infraestrutura escalável",
        "exp2.item3": "Stack: Python, Django REST Framework, com foco em segurança e compliance aduaneiro",

        "exp3.period": "MAR 2022 — JAN 2023",
        "exp3.role": "Extensionista — Robótica Educacional",
        "exp3.company": "A Escola de Inovação de Vitória, ES · IFES",
        "exp3.item1": "Suporte a professores e estudantes em programação e montagem de robôs com Lego Spike Prime e Arduino",
        "exp3.item2": "Fabricação digital: Impressão 3D e CNC aplicados em contexto educacional",
        "exp3.item3": "Acompanhamento de atividades de robótica, metodologias ativas e torneios entre estudantes",

        // -- Contact section --
        "contact.divider": "Contato",
        "contact.title.pre": "Vamos ",
        "contact.title.accent": "Construir",
        "contact.title.post": " Algo?",
        "contact.subtitle": "Se você tem um projeto que precisa de engenharia de software séria — da arquitetura ao deploy — entre em contato.",
        "contact.cta": "Enviar Email",

        // -- Footer --
        "footer.text": "© 2026 Gustavo Pimentel. Construído com HTML, CSS e JavaScript puro.",
    },

    "en-US": {
        // -- Meta / SEO --
        "meta.title": "Gustavo Pimentel — Software Developer & Tech Solutions",
        "meta.description": "Gustavo Pimentel's Portfolio. Building technology solutions: AI, Computer Vision, scalable web platforms and interactive 3D games.",
        "meta.og.title": "Gustavo Pimentel — Portfolio",
        "meta.og.description": "Software Developer. AI, Web, DevOps, 3D Games.",

        // -- Nav --
        "nav.projects": "Projects",
        "nav.workflow": "Methodology",
        "nav.experience": "Experience",
        "nav.contact": "Contact",
        "nav.hamburger.aria": "Open navigation menu",

        // -- Hero --
        "hero.status.title": "Solution-focused",
        "hero.typewriter": "> Software Developer · Mechanical Engineering Student",
        "hero.description": "Building technology solutions for businesses. Robust architectures, applied AI, scalable web platforms and cloud infrastructure.",
        "hero.cta.projects": "View Projects ↓",
        "hero.cta.contact": "Contact",
        "hero.img.alt": "Gustavo Pimentel Profile Photo",

        // -- About panel --
        "about.title": "About",
        "about.text": "Mechanical Engineering undergraduate at IFES Vitória focused on technology solutions. Real-world experience with production platforms using Django, FastAPI, Angular and Next.js, plus Machine Learning pipelines with PyTorch and containerized infrastructure with Docker and Kubernetes.",

        // -- Tech Stack --
        "tech.title": "Tech Stack",
        "tech.cat.infra": "Infrastructure",

        // -- Projects section --
        "projects.divider": "Portfolio",
        "projects.title": "Featured Projects",
        "projects.subtitle": "End-to-end solutions — from neural network training to production deployment.",

        // -- Pokédex project --
        "project.pokedex.img.alt": "Pokédex AI — Silhouette upload interface with Aurora Mesh and interactive particles",
        "project.pokedex.status": "Live",
        "project.pokedex.tagline": "Who's That Pokémon? — Computer Vision",
        "project.pokedex.description": "Classification of 1,025 species from binary silhouettes using an ensemble of 5 ResNet-18 models trained from scratch, with BiRefNet deep segmentation and a Knowledge Distillation pipeline for MobileNetV3. Top-1 Accuracy: 90.24%.",
        "project.pokedex.cta": "View Project →",

        // -- Muralfy project --
        "project.muralfy.img.alt": "Muralfy — Photo panel assembly platform for printing",
        "project.muralfy.status": "Beta",
        "project.muralfy.tagline": "Photo Panels for Printing",
        "project.muralfy.description": "Web platform for assembling large-format photo panels. The frontend (React/Vite) performs client-side compression of up to 250 images. The backend provides a Django REST API coupled with a processing engine and Rust-optimized PDF generation.",
        "project.muralfy.cta": "View Project →",

        // -- Brabos project --
        "project.brabos.img.alt": "Brabos.dev — 3D arcade soccer game with stylized Brazilian character",
        "project.brabos.status": "Coming Soon",
        "project.brabos.tagline": "3D Arcade Game — World Cup",
        "project.brabos.description": "3D arcade web game with a World Cup soccer theme. Stylized characters representing national teams (Brazil and USA functional), Three.js graphics engine with high mobile performance via browser.",
        "project.brabos.cta": "View Project →",

        // -- Workflow section --
        "workflow.divider": "Workflow",
        "workflow.title": "AI-Assisted Engineering",
        "workflow.subtitle": "Integrating Artificial Intelligence into the agile development lifecycle, maximizing delivery speed without compromising technical and architectural rigor.",

        "workflow.sdd.title": "Spec-Driven Development (SDD)",
        "workflow.sdd.description": "Development guided by rigorous specifications and well-defined API contracts. This enables AI agents to understand the exact domain scope and generate, test and iterate on code in a predictable, deterministic manner.",

        "workflow.orchestration.title": "Autonomous Orchestration",
        "workflow.orchestration.description": "Advanced use of command-line agents like <strong>Claude Code</strong> and <strong>OpenCode</strong> for autonomous <em>pair programming</em>. I apply these tools for deep refactoring, unit test generation and feature implementation in the terminal.",

        "workflow.agile.title": "AI-Augmented Agility",
        "workflow.agile.description": "Adapting agile rituals (Scrum/Kanban) to include AI as part of the workforce. This includes automated code reviews, static analysis and rapid prototyping, drastically accelerating <em>Time-to-Market</em> (TTM).",

        // -- Experience section --
        "experience.divider": "Career Path",
        "experience.title": "Professional Experience",
        "experience.subtitle": "Software engineering applied in real production environments.",

        "exp1.period": "APR 2025 — APR 2026",
        "exp1.role": "Mechanical Engineering Intern",
        "exp1.company": "CLIMA VIX COMÉRCIO E SERVIÇOS LTDA · Cariacica, ES",
        "exp1.item1": "Full technical quoting platform with Python (Django REST Framework) + Angular, integrating neural networks for optimization",
        "exp1.item2": "Asynchronous architecture with Celery and Redis for heavy background task processing",
        "exp1.item3": "End-to-end DevOps: Docker containerization, Kubernetes orchestration and high-availability servers with registered domain",
        "exp1.item4": "Maintenance engineering: assembly, installation and preventive/corrective maintenance of mechanical and electrical equipment",

        "exp2.period": "APR 2023 — APR 2026",
        "exp2.role": "Extension Researcher — Software Development",
        "exp2.company": "E-TRÂNSITO ADUANEIRO Project · IFES / Brazilian Federal Revenue Service · Port of Vitória Customs",
        "exp2.item1": "Development of a technology solution for the Port of Vitória Customs (ALF/VIT) in partnership with the Brazilian Federal Revenue Service",
        "exp2.item2": "Interface customization, code versioning and scalable infrastructure configuration",
        "exp2.item3": "Stack: Python, Django REST Framework, focused on security and customs compliance",

        "exp3.period": "MAR 2022 — JAN 2023",
        "exp3.role": "Extension Researcher — Educational Robotics",
        "exp3.company": "Innovation School of Vitória, ES · IFES",
        "exp3.item1": "Support for teachers and students in programming and robot assembly with Lego Spike Prime and Arduino",
        "exp3.item2": "Digital fabrication: 3D Printing and CNC applied in educational context",
        "exp3.item3": "Monitoring robotics activities, active methodologies and student tournaments",

        // -- Contact section --
        "contact.divider": "Contact",
        "contact.title.pre": "Let's ",
        "contact.title.accent": "Build",
        "contact.title.post": " Something?",
        "contact.subtitle": "If you have a project that needs serious software engineering — from architecture to deployment — get in touch.",
        "contact.cta": "Send Email",

        // -- Footer --
        "footer.text": "© 2026 Gustavo Pimentel. Built with vanilla HTML, CSS and JavaScript.",
    },
};

const SUPPORTED_LANGS = ["pt-BR", "en-US"];
const DEFAULT_LANG = "pt-BR";

/**
 * Detect preferred language from browser settings,
 * falling back to DEFAULT_LANG.
 */
function detectBrowserLang() {
    const browserLangs = navigator.languages || [navigator.language];
    for (const lang of browserLangs) {
        if (lang && lang.startsWith("en")) return "en-US";
        if (lang && lang.startsWith("pt")) return "pt-BR";
    }
    return DEFAULT_LANG;
}

/**
 * Get the current language from localStorage or browser detection.
 */
function getCurrentLang() {
    const stored = localStorage.getItem("portfolio-lang");
    if (stored && SUPPORTED_LANGS.includes(stored)) return stored;
    return detectBrowserLang();
}

/**
 * Apply translations to the DOM for the given language.
 */
function applyTranslations(lang) {
    const dict = TRANSLATIONS[lang];
    if (!dict) return;

    // Update <html lang="">
    document.documentElement.lang = lang;

    // Update <title>
    document.title = dict["meta.title"];

    // Update meta tags
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.description"]);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", dict["meta.og.title"]);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", dict["meta.og.description"]);

    // Update all data-i18n elements (textContent)
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
            el.textContent = dict[key];
        }
    });

    // Update all data-i18n-html elements (innerHTML — for <strong>, <em> etc.)
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (dict[key] !== undefined) {
            el.innerHTML = dict[key];
        }
    });

    // Update data-i18n-alt elements
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const key = el.getAttribute("data-i18n-alt");
        if (dict[key] !== undefined) {
            el.setAttribute("alt", dict[key]);
        }
    });

    // Update data-i18n-title elements
    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
        const key = el.getAttribute("data-i18n-title");
        if (dict[key] !== undefined) {
            el.setAttribute("title", dict[key]);
        }
    });

    // Update data-i18n-aria elements
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const key = el.getAttribute("data-i18n-aria");
        if (dict[key] !== undefined) {
            el.setAttribute("aria-label", dict[key]);
        }
    });

    // Update data-i18n-data-text (for typewriter)
    document.querySelectorAll("[data-i18n-data-text]").forEach((el) => {
        const key = el.getAttribute("data-i18n-data-text");
        if (dict[key] !== undefined) {
            el.setAttribute("data-text", dict[key]);
        }
    });

    // Update language switcher button text
    const switcher = document.getElementById("lang-switcher");
    if (switcher) {
        const flagSpan = switcher.querySelector(".lang-flag");
        const labelSpan = switcher.querySelector(".lang-label");

        if (lang === "en-US") {
            if (flagSpan) flagSpan.textContent = "🇺🇸";
            if (labelSpan) labelSpan.textContent = "EN";
        } else {
            if (flagSpan) flagSpan.textContent = "🇧🇷";
            if (labelSpan) labelSpan.textContent = "PT";
        }
    }
}

/**
 * Switch to the other language and persist choice.
 */
function toggleLanguage(e) {
    if (e) e.preventDefault();
    const current = getCurrentLang();
    let idx = SUPPORTED_LANGS.indexOf(current);
    if (idx === -1) idx = 0;
    const next = SUPPORTED_LANGS[(idx + 1) % SUPPORTED_LANGS.length];
    
    localStorage.setItem("portfolio-lang", next);
    applyTranslations(next);

    // Re-run typewriter with the new language text
    restartTypewriter();
}

/**
 * Re-run the typewriter effect with the current data-text value.
 */
function restartTypewriter() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    if (window.typewriterTimeout) {
        clearTimeout(window.typewriterTimeout);
    }

    const text = element.getAttribute("data-text");
    element.textContent = "";
    element.classList.remove("typing-idle", "typing-finished");

    let i = 0;
    const speed = 40;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            window.typewriterTimeout = setTimeout(type, speed);
        } else {
            element.classList.add("typing-idle");
            window.typewriterTimeout = setTimeout(() => {
                element.classList.remove("typing-idle");
                element.classList.add("typing-finished");
            }, 2000);
        }
    }

    window.typewriterTimeout = setTimeout(type, 100);
}

/**
 * Initialize i18n on page load.
 */
function initI18n() {
    const lang = getCurrentLang();
    applyTranslations(lang);

    const switcher = document.getElementById("lang-switcher");
    if (switcher) {
        switcher.addEventListener("click", toggleLanguage);
    }
}
