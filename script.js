// Sample Products Data
const products = [
    {
        id: 1,
        name: "قلادة ذهب وردي فاخرة",
        description: "سلسلة رقيقة مع قلادة جميلة من الذهب الوردي، مثالية للأناقة اليومية أو المناسبات الخاصة.",
        price: "350 ريال",
        image: "https://media.istockphoto.com/id/2206131645/photo/rose-gold-heart-pendant-with-diamond.jpg?s=612x612&w=0&k=20&c=VjB1QYw_2sDU4pMaGvkT49CMTTi05n5bNVj8yj4dz4g=",
        category: "jewelry",
        whatsappMessage: "مرحباً! أنا مهتمة بقلادة الذهب الوردي الفاخرة بسعر 350 ريال."
    },
    {
        id: 2,
        name: "وشاح حرير وردي ناعم",
        description: "وشاح فاخر من الحرير 100% بلون وردي ناعم ورائع مع نقوش زهور رقيقة.",
        price: "250 ريال",
        image: "https://media.istockphoto.com/id/2223345467/photo/cashmere-pink-stole-texture-background-drapery.jpg?s=612x612&w=0&k=20&c=Jdw9OqVTQHS7yLXdeSgQ1lIjcQv7UexgFKmcfZiCddQ=",
        category: "accessories",
        whatsappMessage: "أهلاً! أعجبني وشاح الحرير الوردي الناعم (250 ريال)."
    },
    {
        id: 3,
        name: "حقيبة يد لافندر الحالمة",
        description: "حقيبة يد صغيرة وأنيقة بلون الخزامى الحالم، مصنوعة من جلد نباتي فاخر.",
        price: "450 ريال",
        image: "https://media.istockphoto.com/id/1392525768/photo/purple-womens-mini-bag-isolated-on-white.jpg?s=612x612&w=0&k=20&c=pHoyL7v4Yb7Y_PfE62eWQkNuCeUU9Jz-EVubjfzwujE=",
        category: "bags",
        whatsappMessage: "مرحباً! أنا مهتمة بحقيبة يد لافندر الحالمة بسعر 450 ريال."
    },
    {
        id: 4,
        name: "أقراط لؤلؤ كلاسيكية",
        description: "أقراط أنيقة من اللؤلؤ الطبيعي، تضيف لمسة من الرقي والأناقة الكلاسيكية.",
        price: "280 ريال",
        image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&q=80",
        category: "jewelry",
        whatsappMessage: "مرحباً! أريد معرفة المزيد عن أقراط اللؤلؤ الكلاسيكية."
    },
    {
        id: 5,
        name: "حزام جلد أنيق",
        description: "حزام من الجلد الطبيعي عالي الجودة، مثالي لإضافة لمسة أنيقة لإطلالتك.",
        price: "180 ريال",
        image: "https://media.istockphoto.com/id/1498996338/photo/fancy-details-of-orange-textured-coat-with-leather-brown-belt.jpg?s=612x612&w=0&k=20&c=w8YC-kMWsVypcpISs9EA5G5JBuA4CbO7Lb-jMNjQSWs=",
        category: "accessories",
        whatsappMessage: "مرحباً! مهتمة بالحزام الجلدي الأنيق بسعر 180 ريال."
    },
    // {
    //     id: 6,
    //     name: "محفظة جلد صغيرة",
    //     description: "محفظة صغيرة عملية ومدمجة من الجلد الطبيعي، مثالية للاستخدام اليومي.",
    //     price: "320 ريال",
    //     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    //     category: "bags",
    //     whatsappMessage: "مرحباً! أريد معلومات أكثر عن المحفظة الجلدية الصغيرة."
    // }
];

// Configuration
const WHATSAPP_NUMBER = "+966532447642";

// DOM Elements
const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const productsGrid = document.getElementById('productsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const backToTop = document.getElementById('backToTop');

// Initialize Website
document.addEventListener('DOMContentLoaded', function() {
    initializeHeader();
    initializeNavigation();
    initializeProducts();
    initializeScrollEffects();
    initializeAnimations();
});

// Header Functionality
function initializeHeader() {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Navigation Functionality
function initializeNavigation() {
    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = menuToggle.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu
                    nav.classList.remove('active');
                    menuToggle.classList.remove('active');
                    menuToggle.querySelectorAll('span').forEach(span => {
                        span.style.transform = 'none';
                        span.style.opacity = '1';
                    });
                    
                    // Update active nav link
                    updateActiveNavLink(href);
                }
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavOnScroll);
}

// Update Active Navigation Link
function updateActiveNavLink(activeHref) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === activeHref) {
            link.classList.add('active');
        }
    });
}

// Update Active Nav on Scroll
function updateActiveNavOnScroll() {
    const sections = ['home', 'products', 'about', 'contact'];
    const scrollPos = window.scrollY + 150;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const offsetTop = section.offsetTop;
            const height = section.offsetHeight;

            if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
                updateActiveNavLink(`#${sectionId}`);
            }
        }
    });
}

// Products Functionality
function initializeProducts() {
    // Show loading initially
    setTimeout(() => {
        displayProducts(products);
    }, 2000);

    // Filter functionality
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter products
            const filter = this.getAttribute('data-filter');
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.category === filter);
            
            displayProducts(filteredProducts);
        });
    });
}

// Display Products
function displayProducts(productsToShow) {
    productsGrid.innerHTML = '';

    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>لا توجد منتجات في هذه الفئة</h3>
                <p>جاري إضافة منتجات جديدة قريباً</p>
            </div>
        `;
        return;
    }

    productsToShow.forEach((product, index) => {
        const productCard = createProductCard(product);
        productCard.style.animationDelay = `${index * 0.1}s`;
        productsGrid.appendChild(productCard);
    });
}

// Create Product Card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-wishlist">
                <i class="fas fa-heart"></i>
            </div>
        </div>
        <div class="product-content">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">${product.price}</div>
            <button class="product-btn" onclick="contactWhatsApp('${product.whatsappMessage}')">
                <i class="fab fa-whatsapp"></i>
                <span>تواصلي عبر واتساب</span>
            </button>
        </div>
    `;

    // Add wishlist functionality
    const wishlistBtn = card.querySelector('.product-wishlist');
    wishlistBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        const icon = this.querySelector('i');
        
        if (this.classList.contains('active')) {
            icon.style.color = '#e91e63';
            showNotification('تمت الإضافة للمفضلة ❤️');
        } else {
            icon.style.color = '';
            showNotification('تم الحذف من المفضلة');
        }
    });

    return card;
}

// WhatsApp Contact Function
function contactWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Scroll Effects
function initializeScrollEffects() {
    // Back to top button
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Parallax effect for hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// Initialize Animations
function initializeAnimations() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll(
        '.section-header, .category-card, .about-content, .contact-card, .hero-content > *'
    );
    
    elementsToAnimate.forEach(el => observer.observe(el));

    // Add CSS animation classes
    const style = document.createElement('style');
    style.textContent = `
        .section-header { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .section-header.animate { opacity: 1; transform: translateY(0); }
        
        .category-card { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .category-card.animate { opacity: 1; transform: translateY(0); }
        
        .contact-card { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
        .contact-card.animate { opacity: 1; transform: translateY(0); }
    `;
    document.head.appendChild(style);
}

// Utility Functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #e91e63, #9c27b0);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search Functionality (if needed)
function initializeSearch() {
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            // Implement search modal or redirect
            showNotification('البحث قريباً! 🔍');
        });
    }
}

// Cart Functionality (if needed)
function initializeCart() {
    const cartBtn = document.querySelector('.cart-btn');
    let cartCount = 0;
    
    if (cartBtn) {
        cartBtn.addEventListener('click', function() {
            showNotification('عربة التسوق قريباً! 🛍️');
        });
    }
}

// Initialize additional features
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    initializeCart();
});

// Mouse move effects for decorations
document.addEventListener('mousemove', function(e) {
    const decorations = document.querySelectorAll('.decoration');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    decorations.forEach((decoration, index) => {
        const speed = (index + 1) * 0.5;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        decoration.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Error handling for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x300/f8f9fa/6c757d?text=صورة+غير+متاحة';
        });
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial style
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});