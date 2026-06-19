/**
 * @fileoverview Portfolio interactive engine.
 * Geometric particle system with mouse interaction (repulsion field),
 * scroll reveal, navbar shrink, and mobile drawer.
 */

class DynamicParticle {
    constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.vx = (Math.random() - 0.5) * 0.84;
        this.vy = (Math.random() - 0.5) * 0.84;
        this.radius = Math.random() * 2 + 1;
        this.baseColor = "rgba(79, 70, 229,";
    }

    update(mouse) {
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const interactRadius = 150;

            if (distance < interactRadius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (interactRadius - distance) / interactRadius;
                
                // Repel particles slightly for dynamic feel
                this.vx -= forceDirectionX * force * 0.1;
                this.vy -= forceDirectionY * force * 0.1;
            }
        }

        // Apply velocity
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls
        if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1;
        if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1;
        
        // Speed limit
        const maxSpeed = 1.4;
        const currentSpeed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (currentSpeed > maxSpeed) {
            this.vx = (this.vx / currentSpeed) * maxSpeed;
            this.vy = (this.vy / currentSpeed) * maxSpeed;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.baseColor + " 0.4)";
        ctx.fill();
    }
}

class ParticleEngine {
    constructor() {
        this.canvas = document.getElementById("particles-canvas");
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext("2d");
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.baseResolution = 1920 * 1080;
        this.baseParticleCount = 90;
        this.connectionDistance = 120;
        this.animationId = null;
        this.resizeTimeout = null;

        this.canvas.style.pointerEvents = "none";

        window.addEventListener("mousemove", (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener("mouseleave", () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        window.addEventListener("touchmove", (e) => {
            if (e.touches.length > 0) {
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        }, { passive: true });

        window.addEventListener("touchend", () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        this.handleResize();
        window.addEventListener("resize", () => this.debouncedResize());
        this.animate();
    }

    debouncedResize() {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => this.handleResize(), 200);
    }

    handleResize() {
        const dpr = window.devicePixelRatio || 1;
        this.canvas.width = window.innerWidth * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.canvas.style.width = window.innerWidth + "px";
        this.canvas.style.height = window.innerHeight + "px";
        this.ctx.scale(dpr, dpr);

        const currentArea = window.innerWidth * window.innerHeight;
        const ratio = currentArea / this.baseResolution;
        const particleCount = Math.floor(this.baseParticleCount * ratio);
        this.connectionDistance = 120 * Math.sqrt(ratio);

        this.particles = [];
        for (let i = 0; i < particleCount; i++) {
            this.particles.push(new DynamicParticle(window.innerWidth, window.innerHeight));
        }
    }

    drawConnections() {
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance) {
                    const alpha = (1 - distance / this.connectionDistance) * 0.15;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
                    this.ctx.strokeStyle = "rgba(79, 70, 229, " + alpha + ")";
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                }
            }

            // Interactive mouse connections
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = this.particles[i].x - this.mouse.x;
                const dy = this.particles[i].y - this.mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.connectionDistance * 1.5) {
                    const alpha = (1 - distance / (this.connectionDistance * 1.5)) * 0.25;
                    this.ctx.beginPath();
                    this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
                    this.ctx.lineTo(this.mouse.x, this.mouse.y);
                    this.ctx.strokeStyle = "rgba(79, 70, 229, " + alpha + ")";
                    this.ctx.lineWidth = 1.2;
                    this.ctx.stroke();
                }
            }
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const particle of this.particles) {
            particle.update(this.mouse);
            particle.draw(this.ctx);
        }

        this.drawConnections();
        this.animationId = requestAnimationFrame(() => this.animate());
    }
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    if (!revealElements.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => entry.target.classList.add("visible"), index * 100);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealElements.forEach((el) => observer.observe(el));
}

function initNavbarShrink() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;

    window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 50);
    }, { passive: true });
}

function initMobileDrawer() {
    const hamburger = document.getElementById("nav-hamburger");
    const drawer = document.getElementById("mobile-drawer");
    const overlay = document.getElementById("mobile-drawer-overlay");
    if (!hamburger || !drawer || !overlay) return;

    function toggleDrawer() {
        const isOpen = drawer.classList.contains("open");
        drawer.classList.toggle("open");
        overlay.classList.toggle("open");
        hamburger.classList.toggle("active");
        document.body.style.overflow = isOpen ? "" : "hidden";
    }

    function closeDrawer() {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        hamburger.classList.remove("active");
        document.body.style.overflow = "";
    }

    hamburger.addEventListener("click", toggleDrawer);
    overlay.addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeDrawer));
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const targetId = anchor.getAttribute("href");
            if (targetId === "#") return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

function initTypewriter() {
    const element = document.getElementById("typewriter");
    if (!element) return;

    const text = element.getAttribute("data-text");
    element.textContent = "";
    
    let i = 0;
    const speed = 40;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.classList.add("typing-idle");
            setTimeout(() => {
                element.classList.remove("typing-idle");
                element.classList.add("typing-finished");
            }, 2000);
        }
    }

    setTimeout(type, 300);
}

document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!prefersReducedMotion) new ParticleEngine();

    initScrollReveal();
    initNavbarShrink();
    initMobileDrawer();
    initSmoothScroll();
    initTypewriter();
});
