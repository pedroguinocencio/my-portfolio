/* ==========================================================================
   MENU MOBILE
   ========================================================================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

function linkAction() {
    if (navMenu) navMenu.classList.remove('show-menu');
}

navLinks.forEach((link) => link.addEventListener('click', linkAction));

/* ==========================================================================
   TEMA E IDIOMA
   ========================================================================== */
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
function getHeroWord() {
    return document.getElementById('hero-word');
}
const savedTheme = localStorage.getItem('theme') || 'dark';
const savedLang = localStorage.getItem('lang') || 'pt';
let heroWordIndex = 0;
let heroWordTimer;
let wordRuler;

const translations = {
    pt: {
        'controls.themeAria': 'Alternar tema',
        'controls.langAria': 'Mudar idioma',
        'controls.themeLight': 'Claro',
        'controls.themeDark': 'Escuro',
        'nav.about': 'Sobre',
        'nav.services': 'Serviços',
        'nav.projects': 'Projetos',
        'nav.experience': 'Trajetória',
        'nav.skills': 'Skills',
        'nav.reach': 'Alcance',
        'nav.contact': 'Fale Comigo',
        'hero.eyebrow': 'My Portfolio',
        'hero.headline': 'Software Developer & Social Media Designer',
        'hero.about': 'Sobre mim',
        'hero.greeting': 'Pedro Inocêncio',
        'hero.availability': 'Disponível para projetos selecionados',
        'hero.titleA': 'Desenvolvo',
        'hero.titleB': 'com propósito.',
        'hero.wordFallback': 'interfaces',
        'hero.words': ['interfaces', 'marcas', 'páginas', 'conteúdos', 'experiências'],
        'hero.description': 'Software, interfaces e direção visual no mesmo fluxo: código organizado, telas responsivas e conteúdo digital com acabamento profissional.',
        'hero.projects': 'Ver projetos',
        'hero.contact': 'Começar conversa',
        'about.label': 'Sobre mim',
        'about.title': 'Software Developer & Social Media Designer.',
        'about.description': 'Sou Pedro Inocêncio. Trabalho criando soluções digitais, páginas responsivas e peças para redes sociais que unem código limpo, hierarquia visual e atenção ao detalhe.',
        'about.scout.label': 'Escotismo',
        'about.scout.title': 'Desde os 2 anos no Grupo Escoteiro Padre Aleixo Monteiro Mafra.',
        'about.scout.description': 'Faço parte do movimento escoteiro em São Miguel Paulista desde a infância. Essa vivência fortaleceu disciplina, liderança, trabalho em equipe, responsabilidade social e capacidade de resolver problemas com autonomia.',
        'about.summary.role.label': 'Atuação',
        'about.summary.role.value': 'Software & Design',
        'about.summary.scout.label': 'Escotismo',
        'about.summary.scout.value': 'Desde os 2 anos',
        'about.summary.focus.label': 'Foco',
        'about.summary.focus.value': 'Web, marca e social media',
        'services.title': 'O que eu faço',
        'services.subtitle': 'Software, interfaces e identidade visual trabalhando juntos.',
        'services.web.title': 'Desenvolvimento Web',
        'services.web.description': 'Páginas, interfaces e aplicações com estrutura limpa, boa responsividade e atenção à experiência de uso.',
        'services.social.title': 'Social Media Design',
        'services.social.description': 'Peças para redes sociais com direção visual consistente, pensadas para campanha, posicionamento e rotina de conteúdo.',
        'services.ui.title': 'UI/UX Design',
        'services.ui.description': 'Fluxos, telas e protótipos objetivos, com foco em leitura, hierarquia e decisões simples para quem usa.',
        'works.title': 'Trabalhos recentes',
        'works.subtitle': 'Uma seleção em formato de janelas, com páginas do meu portfólio de design e projetos digitais.',
        'works.all': 'Todos',
        'works.view': 'Ver projeto',
        'works.devProject': 'Software Lab',
        'works.hubLabel': 'Projetos',
        'works.energy': 'Intensidade do projeto',
        'works.connected': 'Conexões',
        'experience.title': 'Experiência Profissional',
        'experience.current': 'Atual',
        'experience.previous': 'Outros',
        'experience.roleCurrent': 'Designer Gráfico',
        'experience.rolePrevious': 'Designer de Social Media',
        'education.title': 'Educação',
        'education.degree': 'Formação',
        'education.technicalDate': '2023',
        'education.technical': 'Ensino Técnico',
        'education.technicalCompany': 'ETEC Guaianazes, 3 semestres concluídos',
        'education.higherDate': 'Previsão: dez. 2027',
        'education.higher': 'Ensino Superior',
        'education.higherCompany': 'FATEC Mogi das Cruzes, 3º semestre',
        'skills.title': 'Ferramentas e áreas',
        'skills.subtitle': 'Tecnologias e ferramentas que uso para transformar ideias em experiências reais.',
        'reach.titleA': 'Atendimento',
        'reach.titleB': 'remoto',
        'reach.description': 'Trabalho com clientes de diferentes regiões, mantendo processo simples: briefing claro, entregas revisadas e comunicação direta.',
        'reach.captionTitle': 'Brasil conectado',
        'reach.captionText': 'Design, web e social media sem depender da distância.',
        'contact.titleA': 'Tem algo',
        'contact.titleB': 'em mente?',
        'contact.description': 'Se você precisa de uma interface, página ou direção visual para conteúdo, me chama e me conta o contexto.',
        'form.name': 'Seu nome',
        'form.email': 'Seu email',
        'form.message': 'Sua mensagem',
        'form.submit': 'Enviar mensagem',
        'footer.copy': '© 2026 Pedro Inocêncio. Todos os direitos reservados.'
    },
    en: {
        'controls.themeAria': 'Toggle theme',
        'controls.langAria': 'Change language',
        'controls.themeLight': 'Light',
        'controls.themeDark': 'Dark',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.reach': 'Reach',
        'nav.contact': 'Contact',
        'hero.eyebrow': 'My Portfolio',
        'hero.headline': 'Software Developer & Social Media Designer',
        'hero.about': 'About me',
        'hero.greeting': 'Pedro Inocêncio',
        'hero.availability': 'Available for selected projects',
        'hero.titleA': 'I develop',
        'hero.titleB': 'with purpose.',
        'hero.wordFallback': 'interfaces',
        'hero.words': ['interfaces', 'brands', 'pages', 'content', 'experiences'],
        'hero.description': 'Software, interfaces and visual direction in the same flow: organized code, responsive screens and polished digital content.',
        'hero.projects': 'View work',
        'hero.contact': 'Start a conversation',
        'about.label': 'About me',
        'about.title': 'Software Developer & Social Media Designer.',
        'about.description': 'I am Pedro Inocêncio. I create digital solutions, responsive pages and social media assets that combine clean code, visual hierarchy and attention to detail.',
        'about.scout.label': 'Scouting',
        'about.scout.title': 'Since age 2 at Grupo Escoteiro Padre Aleixo Monteiro Mafra.',
        'about.scout.description': 'I have been part of the Scout movement in São Miguel Paulista since childhood. This experience strengthened discipline, leadership, teamwork, social responsibility and autonomy in problem solving.',
        'about.summary.role.label': 'Role',
        'about.summary.role.value': 'Software & Design',
        'about.summary.scout.label': 'Scouting',
        'about.summary.scout.value': 'Since age 2',
        'about.summary.focus.label': 'Focus',
        'about.summary.focus.value': 'Web, brand and social media',
        'services.title': 'What I do',
        'services.subtitle': 'Software, interfaces and visual identity working together.',
        'services.web.title': 'Web Development',
        'services.web.description': 'Pages, interfaces and applications with clean structure, responsive behavior and attention to the user experience.',
        'services.social.title': 'Social Media Design',
        'services.social.description': 'Social content with consistent direction, built for campaigns, positioning and day-to-day publishing.',
        'services.ui.title': 'UI/UX Design',
        'services.ui.description': 'Straightforward flows, screens and prototypes focused on readability, hierarchy and simple user decisions.',
        'works.title': 'Recent work',
        'works.subtitle': 'A window-style selection with pages from my design portfolio and digital projects.',
        'works.all': 'All',
        'works.view': 'View project',
        'works.devProject': 'Software Lab',
        'works.hubLabel': 'Projects',
        'works.energy': 'Project intensity',
        'works.connected': 'Connections',
        'experience.title': 'Professional Experience',
        'experience.current': 'Current',
        'experience.previous': 'Other',
        'experience.roleCurrent': 'Graphic Designer',
        'experience.rolePrevious': 'Social Media Designer',
        'education.title': 'Education',
        'education.degree': 'Degree',
        'education.technicalDate': '2023',
        'education.technical': 'Technical Education',
        'education.technicalCompany': 'ETEC Guaianazes, 3 semesters completed',
        'education.higherDate': 'Expected: Dec. 2027',
        'education.higher': 'Higher Education',
        'education.higherCompany': 'FATEC Mogi das Cruzes, 3rd semester',
        'skills.title': 'Tools and areas',
        'skills.subtitle': 'Technologies and tools I use to turn ideas into real experiences.',
        'reach.titleA': 'Remote',
        'reach.titleB': 'work',
        'reach.description': 'I work with clients from different regions through a simple process: clear briefing, reviewed deliveries and direct communication.',
        'reach.captionTitle': 'Connected Brazil',
        'reach.captionText': 'Design, web and social media without distance getting in the way.',
        'contact.titleA': 'Have something',
        'contact.titleB': 'in mind?',
        'contact.description': 'If you need an interface, page or visual direction for content, send me the context and let’s talk.',
        'form.name': 'Your name',
        'form.email': 'Your email',
        'form.message': 'Your message',
        'form.submit': 'Send message',
        'footer.copy': '© 2026 Pedro Inocêncio. All rights reserved.'
    }
};

const projectData = {
    pt: {
        dev: {
            title: 'Software Lab',
            date: 'Tech',
            status: 'Em evolução',
            content: 'Soluções web com foco em estrutura, responsividade, componentes e experiência de uso. O lado de software sustenta a direção visual.',
            energy: 94,
            related: ['sillage', 'arch'],
            link: '#contact'
        },
        sillage: {
            title: 'Sillage Perfumaria',
            date: 'Design + UI',
            status: 'Finalizado',
            content: 'Direção visual e peças digitais para uma marca de perfumaria, conectando composição, hierarquia visual e leitura de produto.',
            energy: 86,
            related: ['dev', 'arch'],
            link: 'https://www.behance.net/pedroinocencio1'
        },
        arch: {
            title: 'Arch Valor',
            date: 'Design',
            status: 'Finalizado',
            content: 'Conteúdo visual para uma marca ligada a arquitetura e valor percebido, usando composição limpa, hierarquia forte e presença premium.',
            energy: 88,
            related: ['dev', 'sillage'],
            link: 'https://www.behance.net/pedroinocencio1'
        }
    },
    en: {
        dev: {
            title: 'Software Lab',
            date: 'Tech',
            status: 'In progress',
            content: 'Web solutions focused on structure, responsiveness, components and user experience. Software supports the visual direction.',
            energy: 94,
            related: ['sillage', 'arch'],
            link: '#contact'
        },
        sillage: {
            title: 'Sillage Perfumery',
            date: 'Design + UI',
            status: 'Completed',
            content: 'Visual direction and digital assets for a perfume brand, connecting composition, visual hierarchy and product readability.',
            energy: 86,
            related: ['dev', 'arch'],
            link: 'https://www.behance.net/pedroinocencio1'
        },
        arch: {
            title: 'Arch Valor',
            date: 'Design',
            status: 'Completed',
            content: 'Visual content for an architecture-related brand, using clean composition, strong hierarchy and a premium presence.',
            energy: 88,
            related: ['dev', 'sillage'],
            link: 'https://www.behance.net/pedroinocencio1'
        }
    }
};

let activeProjectId = 'dev';

function setTheme(theme) {
    const isLight = theme === 'light';
    const lang = localStorage.getItem('lang') || savedLang;
    const dictionary = translations[lang] || translations.pt;
    document.body.classList.toggle('light-theme', isLight);
    localStorage.setItem('theme', theme);

    if (themeToggle) {
        themeToggle.setAttribute('title', isLight ? dictionary['controls.themeDark'] : dictionary['controls.themeLight']);
        themeToggle.setAttribute('aria-pressed', String(isLight));
    }
}

function setLanguage(lang) {
    const dictionary = translations[lang] || translations.pt;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        if (dictionary[key] !== undefined) element.innerHTML = dictionary[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (dictionary[key]) element.setAttribute('placeholder', dictionary[key]);
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
        const key = element.getAttribute('data-i18n-aria');
        if (dictionary[key]) element.setAttribute('aria-label', dictionary[key]);
    });

    if (langToggle) {
        langToggle.textContent = lang === 'pt' ? 'EN' : 'PT';
        langToggle.setAttribute('aria-pressed', String(lang === 'en'));
    }

    localStorage.setItem('lang', lang);
    setTheme(localStorage.getItem('theme') || 'dark');
    startHeroWords(lang);
    renderProject(activeProjectId, lang);
}

setTheme(savedTheme);
setLanguage(savedLang);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const nextTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
        setTheme(nextTheme);
    });
}

if (langToggle) {
    langToggle.addEventListener('click', () => {
        const nextLang = localStorage.getItem('lang') === 'en' ? 'pt' : 'en';
        setLanguage(nextLang);
    });
}

function adjustWrapperWidth(word) {
    const heroWord = getHeroWord();
    if (!heroWord) return;
    if (!document.body) {
        window.addEventListener('DOMContentLoaded', () => adjustWrapperWidth(word));
        return;
    }
    if (!wordRuler) {
        wordRuler = document.createElement('span');
        wordRuler.style.visibility = 'hidden';
        wordRuler.style.position = 'absolute';
        wordRuler.style.whiteSpace = 'nowrap';
        document.body.appendChild(wordRuler);
    }
    const heroStyle = window.getComputedStyle(heroWord);
    wordRuler.style.fontFamily = heroStyle.fontFamily;
    wordRuler.style.fontSize = heroStyle.fontSize;
    wordRuler.style.fontWeight = heroStyle.fontWeight;
    wordRuler.style.letterSpacing = heroStyle.letterSpacing;
    
    wordRuler.textContent = word;
    const width = wordRuler.getBoundingClientRect().width;
    const wrapper = heroWord.parentElement;
    if (wrapper) {
        wrapper.style.width = `${width}px`;
    }
}

function startHeroWords(lang) {
    const heroWord = getHeroWord();
    if (!heroWord) return;

    const dictionary = translations[lang] || translations.pt;
    const words = dictionary['hero.words'] || translations.pt['hero.words'];
    heroWordIndex = 0;
    
    heroWord.textContent = words[heroWordIndex];
    heroWord.classList.remove('is-leaving');
    heroWord.classList.add('is-entering');
    adjustWrapperWidth(words[heroWordIndex]);
    
    clearInterval(heroWordTimer);

    heroWordTimer = setInterval(() => {
        heroWord.classList.remove('is-entering');
        heroWord.classList.add('is-leaving');

        window.setTimeout(() => {
            heroWordIndex = (heroWordIndex + 1) % words.length;
            heroWord.textContent = words[heroWordIndex];
            adjustWrapperWidth(words[heroWordIndex]);
            heroWord.classList.remove('is-leaving');
            heroWord.classList.add('is-entering');
        }, 400);
    }, 2500);
}




function renderProject(projectId = activeProjectId, lang = localStorage.getItem('lang') || 'pt') {
    const dictionary = projectData[lang] || projectData.pt;
    const project = dictionary[projectId] || dictionary.sillage;
    const nodes = document.querySelectorAll('.project-node');
    const title = document.getElementById('project-title');
    const status = document.getElementById('project-status');
    const date = document.getElementById('project-date');
    const content = document.getElementById('project-content');
    const energyLabel = document.getElementById('project-energy-label');
    const energyBar = document.getElementById('project-energy-bar');
    const relatedContainer = document.getElementById('project-related');
    const projectLink = document.getElementById('project-link');

    if (!title || !status || !date || !content || !energyLabel || !energyBar || !relatedContainer || !projectLink) return;

    activeProjectId = projectId;
    title.textContent = project.title;
    status.textContent = project.status;
    date.textContent = project.date;
    content.textContent = project.content;
    energyLabel.textContent = `${project.energy}%`;
    energyBar.style.width = `${project.energy}%`;
    projectLink.setAttribute('href', project.link);
    projectLink.toggleAttribute('target', !project.link.startsWith('#'));

    nodes.forEach((node) => {
        const nodeId = node.getAttribute('data-project-id');
        node.classList.toggle('is-active', nodeId === projectId);
        node.classList.toggle('is-related', project.related.includes(nodeId));
    });

    relatedContainer.innerHTML = '';
    project.related.forEach((relatedId) => {
        const relatedProject = dictionary[relatedId];
        if (!relatedProject) return;

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'project-chip';
        button.textContent = relatedProject.title;
        button.addEventListener('click', () => renderProject(relatedId));
        relatedContainer.appendChild(button);
    });
}

document.querySelectorAll('.project-node').forEach((node) => {
    node.addEventListener('click', () => {
        const projectId = node.getAttribute('data-project-id');
        if (projectId) renderProject(projectId);
    });
});

/* ==========================================================================
   CARROSSEL DE PROJETOS
   ========================================================================== */
const carouselTrack = document.getElementById('carousel-track');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselDots = document.querySelectorAll('.carousel-dot');
const carouselSlides = document.querySelectorAll('.browser-window');
let activeSlide = 0;

function updateCarousel(index) {
    if (!carouselTrack || carouselSlides.length === 0) return;

    activeSlide = (index + carouselSlides.length) % carouselSlides.length;
    carouselTrack.style.transform = `translateX(-${activeSlide * 100}%)`;

    carouselDots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === activeSlide);
        dot.setAttribute('aria-label', `Ir para o slide ${dotIndex + 1}`);
        dot.setAttribute('aria-current', dotIndex === activeSlide ? 'true' : 'false');
    });
}

if (carouselTrack && carouselSlides.length) {
    carouselPrev?.addEventListener('click', () => updateCarousel(activeSlide - 1));
    carouselNext?.addEventListener('click', () => updateCarousel(activeSlide + 1));

    carouselDots.forEach((dot) => {
        dot.addEventListener('click', () => {
            const index = Number(dot.getAttribute('data-index'));
            updateCarousel(index);
        });
    });

    updateCarousel(0);
}

/* ==========================================================================
   MODAL DO PORTFÓLIO EM PDF
   ========================================================================== */
const portfolioOpen = document.getElementById('portfolio-open');
const portfolioModal = document.getElementById('portfolio-modal');
const portfolioDialog = portfolioModal?.querySelector('.pdf-modal__window');
const portfolioCloseControls = portfolioModal?.querySelectorAll('[data-pdf-close]');

function openPortfolioModal() {
    if (!portfolioModal) return;
    portfolioModal.classList.add('is-open');
    portfolioModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('pdf-modal-open');
    portfolioDialog?.focus();
}

function closePortfolioModal() {
    if (!portfolioModal) return;
    portfolioModal.classList.remove('is-open');
    portfolioModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('pdf-modal-open');
    portfolioOpen?.focus();
}

portfolioOpen?.addEventListener('click', openPortfolioModal);

portfolioCloseControls?.forEach((control) => {
    control.addEventListener('click', closePortfolioModal);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && portfolioModal?.classList.contains('is-open')) {
        closePortfolioModal();
    }
});

/* ==========================================================================
   FILTROS DE PROJETOS
   ========================================================================== */
const filterButtons = document.querySelectorAll('.filter__btn');
const workCards = document.querySelectorAll('.work-card');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');

        workCards.forEach((card) => {
            const shouldShow = filter === 'all' || card.classList.contains(filter);
            card.hidden = !shouldShow;
        });
    });
});

/* ==========================================================================
   MUDAR HEADER AO ROLAR E ACTIVE LINK
   ========================================================================== */
const header = document.getElementById('header');
const sections = document.querySelectorAll('section[id]');

/* ==========================================================================
   SCROLL HEADER (OPTIMIZED WITH REQUESTANIMATIONFRAME)
   ========================================================================== */
let headerTicking = false;
function scrollHeader() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY >= 50);
}

window.addEventListener('scroll', () => {
    if (!headerTicking) {
        window.requestAnimationFrame(() => {
            scrollHeader();
            headerTicking = false;
        });
        headerTicking = true;
    }
});
scrollHeader();

/* ==========================================================================
   ACTIVE LINK NO MENU (OPTIMIZED WITH INTERSECTIONOBSERVER)
   ========================================================================== */
const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute('id');
            const link = document.querySelector('.nav__list a[href*=' + sectionId + ']');
            if (link) {
                document.querySelectorAll('.nav__list a').forEach((l) => l.classList.remove('active-link'));
                link.classList.add('active-link');
            }
        }
    });
}, {
    rootMargin: '-30% 0px -50% 0px'
});

sections.forEach((section) => {
    activeLinkObserver.observe(section);
});

/* ==========================================================================
   ANIMAÇÃO DE REVEAL (SCROLL DETECTED VIA INTERSECTIONOBSERVER)
   ========================================================================= */
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
}, {
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.05
});

document.querySelectorAll('.reveal, .reveal-right').forEach((el) => {
    revealObserver.observe(el);
});

/* ==========================================================================
   ANIMAR NÚMEROS (CONTADORES HERO VIA INTERSECTIONOBSERVER)
   ========================================================================== */
const counters = document.querySelectorAll('.stat__number');
const statsSection = document.querySelector('.hero__stats');

if (statsSection) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counters.forEach((counter) => {
                    const updateCount = () => {
                        const target = Number(counter.getAttribute('data-target'));
                        const count = Number(counter.innerText);
                        const inc = target / 40;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc);
                            setTimeout(updateCount, 40);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.1
    });
    counterObserver.observe(statsSection);
}

function initCustomCursor() {
    if (window.matchMedia('(hover: none)').matches) return;

    const cursorCircle = document.createElement('div');
    cursorCircle.className = 'cursor-circle';
    document.body.appendChild(cursorCircle);

    let mouseX = -100;
    let mouseY = -100;
    let circleX = -100;
    let circleY = -100;
    let isMoving = false;

    document.addEventListener('mousemove', (e) => {
        if (!isMoving) {
            cursorCircle.style.opacity = '1';
            isMoving = true;
        }
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCircle() {
        if (isMoving) {
            circleX += (mouseX - circleX) * 0.12;
            circleY += (mouseY - circleY) * 0.12;
            cursorCircle.style.transform = `translate3d(${circleX}px, ${circleY}px, 0) translate(-50%, -50%)`;
        }
        requestAnimationFrame(animateCircle);
    }
    requestAnimationFrame(animateCircle);

    function addHoverListeners() {
        const hoverTargets = document.querySelectorAll('a, button, .project-node, .project-chip, .theme-toggle, input, textarea');
        hoverTargets.forEach((target) => {
            if (target.dataset.hasCursorListener) return;
            target.dataset.hasCursorListener = 'true';

            target.addEventListener('mouseenter', () => {
                cursorCircle.classList.add('is-hovered');
            });
            target.addEventListener('mouseleave', () => {
                cursorCircle.classList.remove('is-hovered');
            });
        });
    }

    addHoverListeners();
    
    const observer = new MutationObserver(() => {
        addHoverListeners();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    initCustomCursor();
} else {
    window.addEventListener('DOMContentLoaded', initCustomCursor);
}
