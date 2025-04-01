// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Banner Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.querySelector('.carousel-dots');

// Create dots
slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => goToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

// Auto advance slides
setInterval(nextSlide, 5000);

// Banner Animations
window.addEventListener('DOMContentLoaded', () => {
    gsap.fromTo('#banner',
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo('#banner-title',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, delay: 0.5, ease: "back.out" }
    );
});

// Smooth scroll function
function scrollToDescription() {
    document.getElementById('description').scrollIntoView({ behavior: 'smooth' });
}

// Description Section Animations
gsap.from('.info-card', {
    scrollTrigger: {
        trigger: '.event-details',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out"
});

// Participants Data
const participants = [
    {
        id: 1,
        name: "Ana Silva",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
        voteUrl: "#"
    },
    {
        id: 2,
        name: "Carlos Santos",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80",
        voteUrl: "#"
    },
    {
        id: 3,
        name: "Julia Lima",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80",
        voteUrl: "#"
    },
    {
        id: 4,
        name: "Marco Oliveira",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
        voteUrl: "#"
    },
    {
        id: 5,
        name: "Patricia Costa",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80",
        voteUrl: "#"
    },
    {
        id: 6,
        name: "Roberto Dias",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
        voteUrl: "#"
    }
];

// Create participant cards
function createParticipantCards() {
    const container = document.getElementById('participants-container');
    container.innerHTML = ''; // Clear existing cards
    
    participants.forEach((participant) => {
        const card = document.createElement('div');
        card.className = 'participant-card';
        card.innerHTML = `
            <div class="participant-image-container">
                <img 
                    src="${participant.image}" 
                    alt="${participant.name}" 
                    class="participant-image"
                    loading="lazy"
                />
            </div>
            <div class="participant-info">
                <h3 class="participant-name">${participant.name}</h3>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize participant cards
createParticipantCards();

// Participants carousel navigation
const container = document.getElementById('participants-container');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentPosition = 0;
const cardWidth = 270; // Card width + gap

function updateCarousel(direction) {
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (direction === 'next') {
        currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
    } else {
        currentPosition = Math.max(currentPosition - cardWidth, 0);
    }
    
    container.style.transform = `translateX(-${currentPosition}px)`;
}

prevButton.addEventListener('click', () => updateCarousel('prev'));
nextButton.addEventListener('click', () => updateCarousel('next'));

// Auto scroll
let autoScrollInterval;

function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
        const isAtEnd = currentPosition >= (container.scrollWidth - container.clientWidth);
        if (isAtEnd) {
            currentPosition = 0;
        } else {
            currentPosition += cardWidth;
        }
        container.style.transform = `translateX(-${currentPosition}px)`;
    }, 2000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

container.addEventListener('mouseenter', stopAutoScroll);
container.addEventListener('mouseleave', startAutoScroll);
prevButton.addEventListener('mouseenter', stopAutoScroll);
nextButton.addEventListener('mouseenter', stopAutoScroll);
prevButton.addEventListener('mouseleave', startAutoScroll);
nextButton.addEventListener('mouseleave', startAutoScroll);

// Start auto-scroll
startAutoScroll();

// Animate participants on scroll
gsap.from('.participant-card', {
    scrollTrigger: {
        trigger: '.participants-carousel',
        start: 'top 80%',
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: "power2.out"
});

//js alta costura
// alta-costura.js - Versão otimizada

document.addEventListener('DOMContentLoaded', function() {
    // Verifica se GSAP está carregado
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP e ScrollTrigger carregados com sucesso!');
    } else {
        console.error('GSAP não está carregado. Verifique os links no HTML.');
    }

    // Dados dos designers
    const designers = [
        {
            name: "Carlos Miele",
            image: "https://via.placeholder.com/400x320",
            collection: "Brasilidade Contemporânea",
            bio: "Conhecido por misturar técnicas artesanais brasileiras com alta costura internacional."
        },
        {
            name: "Donatella Versace",
            image: "https://via.placeholder.com/400x320",
            collection: "Neon Renaissance",
            bio: "A força criativa por trás da Versace, trazendo seu estilo ousado para a alta costura."
        },
        {
            name: "Oskar Metsavaht",
            image: "https://via.placeholder.com/400x320",
            collection: "Sustainable Luxury",
            bio: "Pioneiro em moda sustentável de luxo, combinando ética ambiental com alta costura."
        }
    ];

    // Função para criar cards de designers
    function createDesignerCards() {
        const grid = document.querySelector('.ac-participants-grid');
        
        if (!grid) {
            console.error('Elemento .ac-participants-grid não encontrado');
            return;
        }

        grid.innerHTML = ''; // Limpa o conteúdo existente

        designers.forEach(designer => {
            const card = document.createElement('div');
            card.className = 'ac-participant-card';
            card.innerHTML = `
                <img src="${designer.image}" alt="${designer.name}" class="ac-participant-image">
                <div class="ac-participant-info">
                    <h3 class="ac-participant-name">${designer.name}</h3>
                    <p class="ac-participant-collection">"${designer.collection}"</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    // Botão Voltar
    const backBtn = document.querySelector('.ac-back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            window.history.back();
        });
    }

    // Inicializa animações
    function initAnimations() {
        if (typeof gsap !== 'undefined') {
            gsap.from('.ac-event-header', {
                opacity: 0,
                y: -50,
                duration: 1,
                ease: "power2.out"
            });

            gsap.from('.ac-main-content', {
                scrollTrigger: {
                    trigger: '.ac-main-content',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power2.out"
            });

            gsap.from('.ac-participant-card', {
                scrollTrigger: {
                    trigger: '.ac-participants-section',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.15,
                ease: "power2.out"
            });

            gsap.from('.ac-gallery-item', {
                scrollTrigger: {
                    trigger: '.ac-gallery-section',
                    start: 'top 80%'
                },
                opacity: 0,
                y: 50,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            });
        }
    }

    // Inicializa tudo
    createDesignerCards();
    initAnimations();

    console.log('Script alta-costura.js carregado com sucesso!');
});