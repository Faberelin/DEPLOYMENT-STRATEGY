/**
 * STRATOS SHOPIFY THEME — CORE JAVASCRIPT
 * Stack: Modular Vanilla JavaScript (Zero Build Steps, Zero Dependencies)
 * State: sessionStorage persistence, DOM CustomEvents, ARIA accessibility
 * Currency: Indian Rupees (₹ - INR)
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // 01. CATALOGUE DATABASE (FROM EXCEL FILE)
  // ---------------------------------------------------------------------------
  const PRODUCTS_DATABASE = [
    {
      id: 'casual-t-shirt',
      handle: 'casual-t-shirt',
      title: 'Casual T-Shirt',
      type: 'T-Shirt',
      category: 'Casual',
      price: 599,
      badge: 'CASUAL',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          name: 'Beige',
          hex: '#D8C8B4',
          image: 'assets/images/beige_casual_t-shirt_1.png',
          gallery: [
            'assets/images/beige_casual_t-shirt_1.png',
            'assets/images/beige_casual_t-shirt_2.png',
            'assets/images/beige_casual_t-shirt_3.png',
            'assets/images/beige_casual_t-shirt_4.png',
          ],
        },
        {
          name: 'Coral',
          hex: '#E06B5E',
          image: 'assets/images/coral_casual_t-shirt_1.png',
          gallery: [
            'assets/images/coral_casual_t-shirt_1.png',
            'assets/images/coral_casual_t-shirt_2.png',
            'assets/images/coral_casual_t-shirt_3.png',
            'assets/images/coral_casual_t-shirt_4.png',
          ],
        },
        {
          name: 'Jade',
          hex: '#8CA696',
          image: 'assets/images/jade_casual_t-shirt_1.png',
          gallery: [
            'assets/images/jade_casual_t-shirt_1.png',
            'assets/images/jade_casual_t-shirt_2.png',
            'assets/images/jade_casual_t-shirt_3.png',
            'assets/images/jade_casual_t-shirt_4.png',
          ],
        },
        {
          name: 'Off White',
          hex: '#ECE7DE',
          image: 'assets/images/offwhite_casual_t-shirt_1.png',
          gallery: [
            'assets/images/offwhite_casual_t-shirt_1.png',
            'assets/images/offwhite_casual_t-shirt_2.png',
            'assets/images/offwhite_casual_t-shirt_3.png',
            'assets/images/offwhite_casual_t-shirt_4.png',
          ],
        },
      ],
      gallery: [
        'assets/images/beige_casual_t-shirt_1.png',
        'assets/images/coral_casual_t-shirt_1.png',
        'assets/images/jade_casual_t-shirt_1.png',
        'assets/images/offwhite_casual_t-shirt_1.png',
      ],
      description:
        'Meticulously crafted from 100% pre-shrunk organic long-staple cotton. Features reinforced double-needle seam construction and tailored rib necklines for effortless everyday comfort and resilience.',
      materials: '100% cotton with 180 GSM for lightweight comfort.',
    },
    {
      id: 'polo-t-shirt',
      handle: 'polo-t-shirt',
      title: 'Polo T-Shirt',
      type: 'T-Shirt',
      category: 'Polo',
      price: 699,
      badge: 'POLO',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          name: 'Black',
          hex: '#1C1C1C',
          image: 'assets/images/black_polo_t-shirt_1.png',
          gallery: [
            'assets/images/black_polo_t-shirt_1.png',
            'assets/images/black_polo_t-shirt_2.png',
            'assets/images/black_polo_t-shirt_3.png',
          ],
        },
        {
          name: 'Brick Red',
          hex: '#96372D',
          image: 'assets/images/brickred_polo_t-shirt_1.png',
          gallery: [
            'assets/images/brickred_polo_t-shirt_1.png',
            'assets/images/brickred_polo_t-shirt_2.png',
            'assets/images/brickred_polo_t-shirt_3.png',
          ],
        },
        {
          name: 'Coffee Brown',
          hex: '#5A3F33',
          image: 'assets/images/coffeebrown_polo_t-shirt_1.png',
          gallery: [
            'assets/images/coffeebrown_polo_t-shirt_1.png',
            'assets/images/coffeebrown_polo_t-shirt_2.png',
            'assets/images/coffeebrown_polo_t-shirt_3.png',
          ],
        },
        {
          name: 'Maroon',
          hex: '#691F26',
          image: 'assets/images/maroon_polo_t-shirt_1.png',
          gallery: [
            'assets/images/maroon_polo_t-shirt_1.png',
            'assets/images/maroon_polo_t-shirt_2.png',
            'assets/images/maroon_polo_t-shirt_3.png',
          ],
        },
      ],
      gallery: [
        'assets/images/black_polo_t-shirt_1.png',
        'assets/images/brickred_polo_t-shirt_1.png',
        'assets/images/coffeebrown_polo_t-shirt_1.png',
        'assets/images/maroon_polo_t-shirt_1.png',
      ],
      description:
        'Classic double-knit piqué cotton polo featuring a structured rib-knit collar, 3-button placket with tonal river shell buttons, and tailored side gussets for elevated smart-casual refinement.',
      materials: '100% cotton, 220 GSM Airtex – textured finish that keeps it cool and classy.',
    },
    {
      id: 'oversized-t-shirt',
      handle: 'oversized-t-shirt',
      title: 'Oversized T-Shirt',
      type: 'T-Shirt',
      category: 'Oversized',
      price: 999,
      badge: 'OVERSIZED',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          name: 'Copper',
          hex: '#B26747',
          image: 'assets/images/cooper_oversized_t-shirt_1.png',
          gallery: [
            'assets/images/cooper_oversized_t-shirt_1.png',
            'assets/images/cooper_oversized_t-shirt_2.png',
            'assets/images/cooper_oversized_t-shirt_3.png',
          ],
        },
        {
          name: 'Lavender',
          hex: '#A799B7',
          image: 'assets/images/lavender_oversized_t-shirt_1.png',
          gallery: [
            'assets/images/lavender_oversized_t-shirt_1.png',
            'assets/images/lavender_oversized_t-shirt_2.png',
            'assets/images/lavender_oversized_t-shirt_3.png',
          ],
        },
        {
          name: 'Light Baby Pink',
          hex: '#E8BFD0',
          image: 'assets/images/lightbabypink_oversized_t-shirt_1.png',
          gallery: [
            'assets/images/lightbabypink_oversized_t-shirt_1.png',
            'assets/images/lightbabypink_oversized_t-shirt_2.png',
            'assets/images/lightbabypink_oversized_t-shirt_3.png',
          ],
        },
        {
          name: 'White',
          hex: '#F7F6F2',
          image: 'assets/images/white_oversized_t-shirt_1.png',
          gallery: [
            'assets/images/white_oversized_t-shirt_1.png',
            'assets/images/white_oversized_t-shirt_2.png',
            'assets/images/white_oversized_t-shirt_3.png',
          ],
        },
      ],
      gallery: [
        'assets/images/cooper_oversized_t-shirt_1.png',
        'assets/images/lavender_oversized_t-shirt_1.png',
        'assets/images/lightbabypink_oversized_t-shirt_1.png',
        'assets/images/white_oversized_t-shirt_1.png',
      ],
      description:
        'Heavyweight 240 GSM organic cotton with dropped shoulders, exaggerated boxy proportions, and dense ribbing for an iconic contemporary drape.',
      materials: '100% cotton with 240 GSM heavyweight yet breathable for that perfect oversized drape.',
    },
    {
      id: 'essential-hoodie',
      handle: 'essential-hoodie',
      title: 'Essential Hoodie',
      type: 'Hoodies',
      category: 'Essential',
      price: 1099,
      badge: 'ESSENTIAL',
      sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          name: 'Black',
          hex: '#1C1C1C',
          image: 'assets/images/black_essential_hoodie_1.png',
          gallery: [
            'assets/images/black_essential_hoodie_1.png',
            'assets/images/black_essential_hoodie_2.png',
            'assets/images/black_essential_hoodie_3.png',
          ],
        },
        {
          name: 'Coral',
          hex: '#E06B5E',
          image: 'assets/images/coral_essential_hoodie_1.png',
          gallery: [
            'assets/images/coral_essential_hoodie_1.png',
            'assets/images/coral_essential_hoodie_2.png',
            'assets/images/coral_essential_hoodie_3.png',
          ],
        },
        {
          name: 'Lavender',
          hex: '#A799B7',
          image: 'assets/images/lavender_essential_hoodie_1.png',
          gallery: [
            'assets/images/lavender_essential_hoodie_1.png',
            'assets/images/lavender_essential_hoodie_2.png',
            'assets/images/lavender_essential_hoodie_3.png',
          ],
        },
        {
          name: 'Light Baby Pink',
          hex: '#E8BFD0',
          image: 'assets/images/lightbabypink_essential_hoodie_1.png',
          gallery: [
            'assets/images/lightbabypink_essential_hoodie_1.png',
            'assets/images/lightbabypink_essential_hoodie_2.png',
            'assets/images/lightbabypink_essential_hoodie_3.png',
          ],
        },
      ],
      gallery: [
        'assets/images/black_essential_hoodie_1.png',
        'assets/images/coral_essential_hoodie_1.png',
        'assets/images/lavender_essential_hoodie_1.png',
        'assets/images/lightbabypink_essential_hoodie_1.png',
      ],
      description:
        'Crafted from 380 GSM brushed fleece with a double-layered structured hood, hidden kangaroo pocket, and heavy-duty ribbed cuffs for peak insulation.',
      materials: '100% cotton, 300 GSM brushed fleece – heavyweight and cozy, for chilly days.',
    },
    {
      id: 'oversized-hoodie',
      handle: 'oversized-hoodie',
      title: 'Oversized Hoodie',
      type: 'Hoodies',
      category: 'Oversized',
      price: 1399,
      badge: 'OVERSIZED',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          name: 'Black',
          hex: '#1C1C1C',
          image: 'assets/images/black_oversized_hoodie_1.png',
          gallery: [
            'assets/images/black_oversized_hoodie_1.png',
            'assets/images/black_oversized_hoodie_2.png',
            'assets/images/black_oversized_hoodie_3.png',
          ],
        },
        {
          name: 'Lavender',
          hex: '#A799B7',
          image: 'assets/images/lavender_oversized_hoodie_1.png',
          gallery: [
            'assets/images/lavender_oversized_hoodie_1.png',
            'assets/images/lavender_oversized_hoodie_2.png',
            'assets/images/lavender_oversized_hoodie_3.png',
          ],
        },
        {
          name: 'Light Baby Pink',
          hex: '#E8BFD0',
          image: 'assets/images/lightbabypink_oversized_hoodie_1.png',
          gallery: [
            'assets/images/lightbabypink_oversized_hoodie_1.png',
            'assets/images/lightbabypink_oversized_hoodie_2.png',
            'assets/images/lightbabypink_oversized_hoodie_3.png',
          ],
        },
        {
          name: 'Maroon',
          hex: '#691F26',
          image: 'assets/images/maroon_oversized_hoodie_1.png',
          gallery: [
            'assets/images/maroon_oversized_hoodie_1.png',
            'assets/images/maroon_oversized_hoodie_2.png',
            'assets/images/maroon_oversized_hoodie_3.png',
          ],
        },
      ],
      gallery: [
        'assets/images/black_oversized_hoodie_1.png',
        'assets/images/lavender_oversized_hoodie_1.png',
        'assets/images/lightbabypink_oversized_hoodie_1.png',
        'assets/images/maroon_oversized_hoodie_1.png',
      ],
      description:
        'Slouchy dropped shoulders, 420 GSM ultra-heavy French Terry fleece, and clean minimalist finishings for unmatched streetwear luxury.',
      materials: '90% cotton & 10% polyester, 400 GSM – soft, and made to keep you warm without feeling stuffy.',
    },
    {
      id: 'essential-sweatpants',
      handle: 'essential-sweatpants',
      title: 'Essential Sweatpants',
      type: 'Sweatpants',
      category: 'Essential',
      price: 1099,
      badge: 'ESSENTIAL',
      sizes: ['S', 'M', 'L', 'XL', '2XL'],
      colors: [
        {
          name: 'Black',
          hex: '#1C1C1C',
          image: 'assets/images/black_sweatpants_1.png',
          gallery: [
            'assets/images/black_sweatpants_1.png',
            'assets/images/black_sweatpants_2.png',
          ],
        },
      ],
      gallery: [
        'assets/images/black_sweatpants_1.png',
        'assets/images/black_sweatpants_2.png',
      ],
      description:
        'Tailored fleece sweatpants with an elasticated waistband, waxed cotton drawcords, deep welt side pockets, and tapered ribbed ankle cuffs.',
      materials: 'Made from 260 GSM terry fabric, blending 90% cotton and 10% polyester for softness, durability, and breathability.',
    },
  ];

  window.PRODUCTS_DATABASE = PRODUCTS_DATABASE;

  // Currency Formatter (INR)
  function formatINR(val) {
    return '₹' + Number(val).toLocaleString('en-IN');
  }
  window.formatINR = formatINR;

  // ---------------------------------------------------------------------------
  // 02. STATE MANAGEMENT & STORAGE
  // ---------------------------------------------------------------------------
  const STORAGE_KEYS = {
    CART: 'stratos_cart_items',
    PROMO: 'stratos_applied_promo',
    ACTIVE_PRODUCT: 'stratos_selected_product',
    ACTIVE_COLOR: 'stratos_selected_color',
    ACTIVE_SIZE: 'stratos_selected_size',
  };

  const INITIAL_CART = [];

  class ThemeState {
    static getCart() {
      try {
        const stored = sessionStorage.getItem(STORAGE_KEYS.CART);
        return stored ? JSON.parse(stored) : INITIAL_CART;
      } catch (e) {
        return INITIAL_CART;
      }
    }

    static setCart(cart) {
      try {
        sessionStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
      } catch (e) {
        console.warn('SessionStorage unavailable', e);
      }
      document.dispatchEvent(new CustomEvent('theme:cart-updated', { detail: { cart } }));
    }

    static getSelectedProduct() {
      return sessionStorage.getItem(STORAGE_KEYS.ACTIVE_PRODUCT) || 'casual-t-shirt';
    }

    static setSelectedProduct(handle) {
      sessionStorage.setItem(STORAGE_KEYS.ACTIVE_PRODUCT, handle);
    }

    static getSelectedColor() {
      return sessionStorage.getItem(STORAGE_KEYS.ACTIVE_COLOR) || 'Off White';
    }

    static setSelectedColor(color) {
      sessionStorage.setItem(STORAGE_KEYS.ACTIVE_COLOR, color);
    }

    static getSelectedSize() {
      return sessionStorage.getItem(STORAGE_KEYS.ACTIVE_SIZE) || 'M';
    }

    static setSelectedSize(size) {
      sessionStorage.setItem(STORAGE_KEYS.ACTIVE_SIZE, size);
    }
  }

  window.ThemeState = ThemeState;

  // ---------------------------------------------------------------------------
  // 03. PRODUCT CAROUSEL CONTROLLER
  // ---------------------------------------------------------------------------
  class ProductCarouselController {
    constructor() {
      this.viewport = document.getElementById('ProductCarouselViewport');
      this.track = document.getElementById('ProductCarouselTrack');
      this.slides = this.viewport ? this.viewport.querySelectorAll('.product-carousel-slide') : [];
      this.prevBtn = document.querySelector('.carousel-nav-prev');
      this.nextBtn = document.querySelector('.carousel-nav-next');
      this.counterBadge = document.getElementById('ProductCarouselCounter') || document.querySelector('.carousel-counter-badge');
      this.dotsContainer = document.getElementById('ProductCarouselDots');

      this.currentIndex = 0;
      this.totalSlides = this.slides ? this.slides.length : 0;
      this.startX = 0;
      this.deltaX = 0;
      this.isDragging = false;
      this.dragThreshold = 40;

      if (this.track && this.totalSlides > 0) {
        this.init();
      }
    }

    init() {
      if (this.prevBtn) {
        this.prevBtn.onclick = (e) => {
          if (e) { e.preventDefault(); e.stopPropagation(); }
          this.prev();
        };
      }

      if (this.nextBtn) {
        this.nextBtn.onclick = (e) => {
          if (e) { e.preventDefault(); e.stopPropagation(); }
          this.next();
        };
      }

      this.bindTouchGestures();
      this.updateState();
    }

    loadProductGallery(product, customGallery = null) {
      if (!this.track || !product) return;
      const gallery = (customGallery && customGallery.length > 0)
        ? customGallery
        : ((product.gallery && product.gallery.length > 0)
          ? product.gallery
          : product.colors.map((c) => c.image));

      this.track.innerHTML = gallery.map((imgUrl, sIdx) => `
        <div class="product-carousel-slide ${sIdx === 0 ? 'is-active' : ''}" data-slide-index="${sIdx}">
          <img
            src="${imgUrl}"
            alt="${product.title} view ${sIdx + 1}"
            width="1200"
            height="1500"
            loading="${sIdx === 0 ? 'eager' : 'lazy'}"
          />
        </div>
      `).join('');

      this.slides = this.viewport ? this.viewport.querySelectorAll('.product-carousel-slide') : [];
      this.totalSlides = this.slides.length;
      this.currentIndex = 0;

      if (!this.dotsContainer) {
        this.dotsContainer = document.getElementById('ProductCarouselDots');
      }
      if (this.dotsContainer) {
        this.dotsContainer.innerHTML = gallery.map((_, dIdx) => `
          <button
            type="button"
            class="carousel-dot-btn ${dIdx === 0 ? 'is-active' : ''}"
            onclick="window.carouselGoTo(${dIdx})"
            aria-label="View Image ${dIdx + 1}"
          ></button>
        `).join('');
      }

      this.updateState();
    }

    bindTouchGestures() {
      if (!this.viewport) return;

      const onPointerDown = (e) => {
        this.isDragging = true;
        this.startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        this.deltaX = 0;
      };

      const onPointerMove = (e) => {
        if (!this.isDragging) return;
        const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
        this.deltaX = currentX - this.startX;
      };

      const onPointerUp = () => {
        if (!this.isDragging) return;
        this.isDragging = false;
        if (this.deltaX < -this.dragThreshold) {
          this.next();
        } else if (this.deltaX > this.dragThreshold) {
          this.prev();
        }
      };

      this.viewport.addEventListener('mousedown', onPointerDown);
      window.addEventListener('mousemove', onPointerMove);
      window.addEventListener('mouseup', onPointerUp);

      this.viewport.addEventListener('touchstart', onPointerDown, { passive: true });
      this.viewport.addEventListener('touchmove', onPointerMove, { passive: true });
      this.viewport.addEventListener('touchend', onPointerUp);
    }

    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.totalSlides - 1;
      }
      this.updateState();
    }

    next() {
      if (this.currentIndex < this.totalSlides - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updateState();
    }

    goToSlide(index) {
      if (index >= 0 && index < this.totalSlides) {
        this.currentIndex = index;
        this.updateState();
      }
    }

    setHeroImage(imgSrc) {
      if (!imgSrc) return;
      const heroSlide = this.slides && this.slides[0];
      if (heroSlide) {
        const img = heroSlide.querySelector('img');
        if (img) {
          img.src = imgSrc;
        }
      }
      this.goToSlide(0);
    }

    updateState() {
      if (this.track) {
        this.track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
      }

      if (this.slides) {
        this.slides.forEach((s, i) => {
          s.classList.toggle('is-active', i === this.currentIndex);
        });
      }

      if (this.counterBadge) {
        this.counterBadge.textContent = `${this.currentIndex + 1} / ${this.totalSlides}`;
      }

      const dotBtns = document.querySelectorAll('.carousel-dot-btn');
      dotBtns.forEach((dot, idx) => {
        dot.classList.toggle('is-active', idx === this.currentIndex);
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 04. CART DRAWER CONTROLLER
  class CartDrawerController {
    constructor() {
      this.drawer = document.getElementById('CartDrawer');
      this.overlay = document.getElementById('CartOverlay');
      this.body = document.getElementById('CartDrawerBody');
      this.countBadges = document.querySelectorAll('.cart-count-badge');
      this.subtotalEl = document.getElementById('CartSubtotalAmount');
      this.shippingBar = document.getElementById('ShippingMeterFill');
      this.shippingMsg = document.getElementById('ShippingMeterMsg');
      this.freeShippingThreshold = 1499; // ₹1,499 for free shipping
      this.discountRate = 0;

      this.init();
    }

    init() {
      document.querySelectorAll('[data-action="open-cart"]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.open();
        });
      });

      document.querySelectorAll('[data-action="close-cart"]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.close();
        });
      });

      document.addEventListener('theme:cart-updated', (e) => {
        this.render(e.detail.cart);
      });

      this.render(ThemeState.getCart());
    }

    open() {
      if (this.drawer && this.overlay) {
        this.drawer.classList.add('is-active');
        this.overlay.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      }
    }

    close() {
      if (this.drawer && this.overlay) {
        this.drawer.classList.remove('is-active');
        this.overlay.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    }

    addItem(item) {
      let cart = ThemeState.getCart();
      const existingIdx = cart.findIndex((i) => i.id === item.id);

      if (existingIdx > -1) {
        cart[existingIdx].quantity += item.quantity || 1;
      } else {
        cart.push(item);
      }

      ThemeState.setCart(cart);
      ThemeUI.bumpCartBadge();
      this.open();
    }

    updateQuantity(itemId, delta) {
      let cart = ThemeState.getCart();
      const item = cart.find((i) => i.id === itemId);
      if (!item) return;

      item.quantity = (item.quantity || 1) + delta;
      if (item.quantity <= 0) {
        cart = cart.filter((i) => i.id !== itemId);
      }

      ThemeState.setCart(cart);
    }

    removeItem(itemId) {
      let cart = ThemeState.getCart().filter((i) => i.id !== itemId);
      ThemeState.setCart(cart);
    }

    render(cart) {
      const safeCart = Array.isArray(cart) ? cart : [];
      const totalCount = safeCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      const subtotal = safeCart.reduce((sum, item) => sum + (item.price || 0) * (item.quantity || 1), 0);
      const finalTotal = subtotal * (1 - this.discountRate);

      if (this.countBadges) {
        this.countBadges.forEach((badge) => {
          if (badge) badge.textContent = totalCount;
        });
      }

      if (this.subtotalEl) {
        this.subtotalEl.textContent = formatINR(finalTotal);
      }

      if (this.shippingBar && this.shippingMsg) {
        const remaining = this.freeShippingThreshold - subtotal;
        if (remaining <= 0 || totalCount === 0) {
          this.shippingBar.style.width = '100%';
          this.shippingMsg.innerHTML = '🎉 <strong>Unlocked!</strong> You qualify for free delivery.';
        } else {
          const percent = Math.min(100, Math.max(0, (subtotal / this.freeShippingThreshold) * 100));
          this.shippingBar.style.width = `${percent}%`;
          this.shippingMsg.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more to unlock <strong>Free Delivery</strong>`;
        }
      }

      if (this.body) {
        if (safeCart.length === 0) {
          this.body.innerHTML = `
            <div style="text-align: center; padding: var(--spacing-xl) 0; color: var(--color-text-muted);">
              <p style="font-size: var(--text-sm); margin-bottom: var(--spacing-md);">Your shopping bag is currently empty.</p>
              <button type="button" class="btn-primary" data-action="close-cart" onclick="switchView('view-catalogue')" style="max-width: 200px; margin-inline: auto;">Explore Catalogue</button>
            </div>
          `;
          const closeBtn = this.body.querySelector('[data-action="close-cart"]');
          if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
          }
          return;
        }

        this.body.innerHTML = safeCart
          .map(
            (item) => `
          <div class="cart-item" data-id="${item.id}">
            <img src="${item.image || ''}" alt="${item.title || ''}" class="cart-item-img" loading="lazy" />
            <div class="cart-item-info">
              <div class="cart-item-top">
                <div>
                  <h4 class="cart-item-name">${item.title || ''}</h4>
                  <div class="cart-item-variant">${item.color || ''} / ${item.size || ''}</div>
                </div>
                <button type="button" class="cart-item-remove" data-remove="${item.id}" aria-label="Remove item">✕</button>
              </div>
              <div class="cart-item-bottom">
                <div class="qty-control">
                  <button type="button" class="qty-btn" data-qty-change="-1" data-id="${item.id}">−</button>
                  <span class="qty-value">${item.quantity}</span>
                  <button type="button" class="qty-btn" data-qty-change="1" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-price">${formatINR((item.price || 0) * (item.quantity || 1))}</div>
              </div>
            </div>
          </div>
        `
          )
          .join('');

        this.body.querySelectorAll('[data-qty-change]').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            const delta = parseInt(e.currentTarget.getAttribute('data-qty-change'), 10);
            if (id && !isNaN(delta)) {
              this.updateQuantity(id, delta);
            }
          });
        });

        this.body.querySelectorAll('[data-remove]').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const id = e.currentTarget.getAttribute('data-remove');
            if (id) {
              this.removeItem(id);
            }
          });
        });
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 05. PRODUCT DETAIL CONTROLLER (WITH DYNAMIC CATALOGUE LOADER)
  // ---------------------------------------------------------------------------
  class ProductDetailController {
    constructor() {
      this.currentProduct = PRODUCTS_DATABASE[0];
      this.selectedColor = this.currentProduct.colors[0].name;
      this.selectedSize = 'M';
      this.unitPrice = this.currentProduct.price;
      this.quantity = 1;
      this.isAdding = false;

      this.mainAddToCartBtn = document.getElementById('MainAddToCartBtn');
      this.mainAddToCartText = document.getElementById('MainAddToCartText');
      this.qtyMinusBtn = document.getElementById('ProductQtyMinus');
      this.qtyPlusBtn = document.getElementById('ProductQtyPlus');
      this.qtyInput = document.getElementById('ProductQtyInput');
      this.priceLabel = document.getElementById('AddToCartPriceLabel');
      this.removeBtn = document.getElementById('ProductRemoveFromCartBtn');
      this.productTitleEl = document.getElementById('ProductTitle');
      this.productPriceHeaderEl = document.getElementById('ProductPriceHeader');
      this.productCategoryTagEl = document.getElementById('ProductCategoryTag');
      this.productDescriptionEl = document.getElementById('ProductDescriptionText');
      this.swatchesContainer = document.getElementById('ProductSwatchesContainer');
      this.sizesContainer = document.getElementById('ProductSizesContainer');

      this.init();
    }

    init() {
      // Quantity Buttons
      if (this.qtyMinusBtn) {
        this.qtyMinusBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.changeQuantity(-1);
        });
      }

      if (this.qtyPlusBtn) {
        this.qtyPlusBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.changeQuantity(1);
        });
      }

      // Quantity Number Input Listener
      if (this.qtyInput) {
        const handleQtyInput = (e) => {
          const val = parseInt(e.target.value, 10);
          if (!isNaN(val) && val >= 1) {
            this.quantity = Math.min(99, val);
            this.renderQuantity(false);
          }
        };

        this.qtyInput.addEventListener('input', handleQtyInput);
        this.qtyInput.addEventListener('keyup', handleQtyInput);
        this.qtyInput.addEventListener('change', (e) => {
          let val = parseInt(e.target.value, 10);
          if (isNaN(val) || val < 1) val = 1;
          this.quantity = Math.min(99, val);
          this.renderQuantity(true);
        });
        this.qtyInput.addEventListener('blur', (e) => {
          let val = parseInt(e.target.value, 10);
          if (isNaN(val) || val < 1) val = 1;
          this.quantity = Math.min(99, val);
          this.renderQuantity(true);
        });
      }

      // Merged In-Cart Remove Listener
      if (this.removeBtn) {
        this.removeBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.removeCurrentItemFromCart();
        });
      }

      document.addEventListener('theme:cart-updated', () => {
        this.syncInCartState();
      });

      if (this.mainAddToCartBtn) {
        this.mainAddToCartBtn.addEventListener('click', (e) => {
          e.preventDefault();
          this.executeAddToCart(this.mainAddToCartBtn);
        });
      }

      this.setupStickyBar();
      this.loadProduct(ThemeState.getSelectedProduct() || 'casual-t-shirt');
    }

    loadProduct(handle) {
      const product = PRODUCTS_DATABASE.find((p) => p.handle === handle) || PRODUCTS_DATABASE[0];
      this.currentProduct = product;
      this.unitPrice = product.price;
      this.selectedColor = product.colors[0].name;
      this.selectedSize = 'M';
      this.quantity = 1;

      ThemeState.setSelectedProduct(product.handle);
      ThemeState.setSelectedColor(this.selectedColor);
      ThemeState.setSelectedSize(this.selectedSize);

      // Update Text Elements
      if (this.productTitleEl) this.productTitleEl.textContent = product.title;
      if (this.productPriceHeaderEl) this.productPriceHeaderEl.textContent = formatINR(product.price);
      if (this.productCategoryTagEl) this.productCategoryTagEl.textContent = `${product.type.toUpperCase()} • ${product.category.toUpperCase()}`;
      if (this.productDescriptionEl) this.productDescriptionEl.textContent = product.description;
      const accordionDesc = document.getElementById('ProductAccordionDescription');
      if (accordionDesc) accordionDesc.textContent = product.description;

      const fitBody = document.getElementById('ProductFitBody');
      if (fitBody) {
        if (product.handle === 'essential-hoodie') {
          fitBody.innerHTML = `
            <p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>
            <div class="size-chart-table-wrap">
              <table class="size-chart-table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>CHEST</th>
                    <th>LENGTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>XS</td><td>38</td><td>25</td></tr>
                  <tr><td>S</td><td>40</td><td>26</td></tr>
                  <tr><td>M</td><td>42</td><td>27</td></tr>
                  <tr><td>L</td><td>44</td><td>28</td></tr>
                  <tr><td>XL</td><td>46</td><td>29</td></tr>
                  <tr><td>2XL</td><td>48</td><td>30</td></tr>
                </tbody>
              </table>
            </div>
          `;
        } else if (product.handle === 'polo-t-shirt') {
          fitBody.innerHTML = `
            <p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>
            <div class="size-chart-table-wrap">
              <table class="size-chart-table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>CHEST</th>
                    <th>LENGTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>38</td><td>26</td></tr>
                  <tr><td>M</td><td>40</td><td>27</td></tr>
                  <tr><td>L</td><td>42</td><td>28</td></tr>
                  <tr><td>XL</td><td>44</td><td>29</td></tr>
                  <tr><td>2XL</td><td>46</td><td>30</td></tr>
                </tbody>
              </table>
            </div>
          `;
        } else if (product.handle === 'oversized-hoodie') {
          fitBody.innerHTML = `
            <p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>
            <div class="size-chart-table-wrap">
              <table class="size-chart-table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>CHEST</th>
                    <th>LENGTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>40</td><td>27</td></tr>
                  <tr><td>M</td><td>42</td><td>28</td></tr>
                  <tr><td>L</td><td>44</td><td>29</td></tr>
                  <tr><td>XL</td><td>46</td><td>30</td></tr>
                  <tr><td>2XL</td><td>48</td><td>31</td></tr>
                </tbody>
              </table>
            </div>
          `;
        } else if (product.handle === 'essential-sweatpants') {
          fitBody.innerHTML = `
            <p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>
            <div class="size-chart-table-wrap">
              <table class="size-chart-table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>WAIST</th>
                    <th>HIP</th>
                    <th>OUTSEAM</th>
                    <th>INSEAM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>S</td><td>30</td><td>36</td><td>39</td><td>27</td></tr>
                  <tr><td>M</td><td>32</td><td>38</td><td>40</td><td>27</td></tr>
                  <tr><td>L</td><td>34</td><td>40</td><td>41</td><td>27</td></tr>
                  <tr><td>XL</td><td>36</td><td>44</td><td>42</td><td>27</td></tr>
                  <tr><td>2XL</td><td>38</td><td>46</td><td>43</td><td>27</td></tr>
                </tbody>
              </table>
            </div>
          `;
        } else if (product.handle === 'oversized-t-shirt') {
          fitBody.innerHTML = `
            <p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>
            <div class="size-chart-table-wrap">
              <table class="size-chart-table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>CHEST</th>
                    <th>LENGTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>XS</td><td>40</td><td>27</td></tr>
                  <tr><td>S</td><td>42</td><td>28</td></tr>
                  <tr><td>M</td><td>44</td><td>29</td></tr>
                  <tr><td>L</td><td>46</td><td>30</td></tr>
                  <tr><td>XL</td><td>48</td><td>31</td></tr>
                  <tr><td>2XL</td><td>50</td><td>32</td></tr>
                </tbody>
              </table>
            </div>
          `;
        } else if (product.handle === 'casual-t-shirt') {
          fitBody.innerHTML = `
            <p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>
            <div class="size-chart-table-wrap">
              <table class="size-chart-table">
                <thead>
                  <tr>
                    <th>SIZE</th>
                    <th>CHEST</th>
                    <th>LENGTH</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>XS</td><td>36</td><td>25</td></tr>
                  <tr><td>S</td><td>38</td><td>26</td></tr>
                  <tr><td>M</td><td>40</td><td>27</td></tr>
                  <tr><td>L</td><td>42</td><td>28</td></tr>
                  <tr><td>XL</td><td>44</td><td>29</td></tr>
                  <tr><td>2XL</td><td>46</td><td>30</td></tr>
                </tbody>
              </table>
            </div>
          `;
        } else {
          fitBody.innerHTML = `<p id="ProductFitText">Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.</p>`;
        }
      } else {
        const fitEl = document.getElementById('ProductFitText');
        if (fitEl) {
          fitEl.textContent = 'Unisex oversized fit – relaxed all around with dropped shoulders for an easygoing look.';
        }
      }

      const materialsEl = document.getElementById('ProductMaterialsText');
      if (materialsEl && product.materials) {
        materialsEl.textContent = product.materials;
      }

      const mobileTitle = document.getElementById('MobileATCTitle');
      if (mobileTitle) mobileTitle.textContent = product.title;

      // Render Swatches
      this.renderColorSwatches();
      this.renderSizeChips();

      // Load all images strictly inside the carousel
      const activeColorObj = product.colors.find((c) => c.name === this.selectedColor) || product.colors[0];
      if (window.carouselController) {
        if (activeColorObj && activeColorObj.gallery && activeColorObj.gallery.length > 0) {
          window.carouselController.loadProductGallery(product, activeColorObj.gallery);
        } else {
          window.carouselController.loadProductGallery(product);
        }
      }

      // Update Active Product Switcher Buttons
      document.querySelectorAll('.product-switcher-btn').forEach((btn) => {
        if (btn.getAttribute('data-product-handle') === product.handle) {
          btn.classList.add('is-active');
        } else {
          btn.classList.remove('is-active');
        }
      });

      this.renderQuantity(true);
      this.syncInCartState();
    }

    renderColorSwatches() {
      if (!this.swatchesContainer) return;
      const colorLabel = document.getElementById('SelectedColorLabel');
      if (colorLabel) colorLabel.textContent = this.selectedColor.toUpperCase();

      this.swatchesContainer.innerHTML = this.currentProduct.colors
        .map(
          (c) => `
        <button
          type="button"
          class="color-swatch-btn ${c.name === this.selectedColor ? 'is-active' : ''}"
          data-swatch-color="${c.name}"
          data-swatch-hex="${c.hex}"
          style="background-color: ${c.hex};"
          title="${c.name}"
          aria-label="Color ${c.name}"
        ></button>
      `
        )
        .join('');

      this.swatchesContainer.querySelectorAll('.color-swatch-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const color = btn.getAttribute('data-swatch-color');
          if (color) this.setColor(color);
        });
      });
    }

    renderSizeChips() {
      if (!this.sizesContainer) return;
      const sizeLabel = document.getElementById('SelectedSizeLabel');
      if (sizeLabel) sizeLabel.textContent = this.selectedSize;

      this.sizesContainer.innerHTML = this.currentProduct.sizes
        .map(
          (s) => `
        <button
          type="button"
          class="size-chip-btn ${s === this.selectedSize ? 'is-active' : ''}"
          data-size-chip="${s}"
        >${s}</button>
      `
        )
        .join('');

      this.sizesContainer.querySelectorAll('.size-chip-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const size = btn.getAttribute('data-size-chip');
          if (size) this.setSize(size);
        });
      });
    }

    setColor(color) {
      this.selectedColor = color;
      ThemeState.setSelectedColor(color);

      const colorLabel = document.getElementById('SelectedColorLabel');
      if (colorLabel) colorLabel.textContent = color.toUpperCase();

      if (this.swatchesContainer) {
        this.swatchesContainer.querySelectorAll('.color-swatch-btn').forEach((btn) => {
          if (btn.getAttribute('data-swatch-color') === color) {
            btn.classList.add('is-active');
          } else {
            btn.classList.remove('is-active');
          }
        });
      }

      const colorObj = this.currentProduct.colors.find((c) => c.name === color);
      if (colorObj && window.carouselController) {
        if (colorObj.gallery && colorObj.gallery.length > 0) {
          window.carouselController.loadProductGallery(this.currentProduct, colorObj.gallery);
        } else {
          window.carouselController.setHeroImage(colorObj.image);
        }
      }

      this.syncInCartState();
    }

    setSize(size) {
      this.selectedSize = size;
      ThemeState.setSelectedSize(size);

      const sizeLabel = document.getElementById('SelectedSizeLabel');
      if (sizeLabel) sizeLabel.textContent = size;

      if (this.sizesContainer) {
        this.sizesContainer.querySelectorAll('.size-chip-btn').forEach((btn) => {
          if (btn.getAttribute('data-size-chip') === size) {
            btn.classList.add('is-active');
          } else {
            btn.classList.remove('is-active');
          }
        });
      }

      this.syncInCartState();
    }

    getCurrentItemId() {
      return `${this.currentProduct.id}-${this.selectedColor.toLowerCase().replace(/\s+/g, '-')}-${this.selectedSize.toLowerCase()}`;
    }

    syncInCartState() {
      const cart = ThemeState.getCart();
      const currentId = this.getCurrentItemId();
      const inCartItem = cart.find((i) => i.id === currentId);
      const removeBtn = document.getElementById('ProductRemoveFromCartBtn');
      const mainBtn = document.getElementById('MainAddToCartBtn');
      const textEl = document.getElementById('MainAddToCartText');
      const mobileBtn = document.getElementById('MobileATCActionBtn');

      if (inCartItem && inCartItem.quantity > 0) {
        if (removeBtn) removeBtn.style.display = 'inline-flex';
        if (mainBtn) mainBtn.classList.add('is-in-bag');
        if (mobileBtn) mobileBtn.classList.add('is-in-bag');
        if (textEl) textEl.textContent = `IN BAG (${inCartItem.quantity})`;
        this.renderQuantity(false);
      } else {
        this.resetProductPage(false);
      }
    }

    resetProductPage(resetVariant = false) {
      this.quantity = 1;

      if (resetVariant && this.currentProduct) {
        if (this.currentProduct.colors && this.currentProduct.colors[0]) {
          this.setColor(this.currentProduct.colors[0].name);
        }
        this.setSize('M');
      }

      this.renderQuantity(true);

      const removeBtn = document.getElementById('ProductRemoveFromCartBtn');
      const mainBtn = document.getElementById('MainAddToCartBtn');
      const textEl = document.getElementById('MainAddToCartText');
      const dividerEl = document.getElementById('MainAddToCartDivider');
      const priceEl = document.getElementById('AddToCartPriceLabel');
      const mobileBtn = document.getElementById('MobileATCActionBtn');

      if (removeBtn) removeBtn.style.display = 'none';
      if (mainBtn) {
        mainBtn.classList.remove('is-in-bag', 'is-added');
      }
      if (mobileBtn) {
        mobileBtn.classList.remove('is-in-bag', 'is-added');
      }
      if (textEl) {
        textEl.textContent = 'ADD TO CART';
      }
      if (dividerEl) {
        dividerEl.style.display = '';
      }
      if (priceEl) {
        priceEl.style.display = '';
        priceEl.textContent = formatINR(this.unitPrice);
      }
    }

    removeCurrentItemFromCart() {
      const currentId = this.getCurrentItemId();
      if (window.cartController) {
        window.cartController.removeItem(currentId);
      }
      this.resetProductPage(false);
      ThemeUI.showToast(`${this.currentProduct.title} removed from bag. Product page reset.`);
    }

    changeQuantity(delta) {
      const currentVal = parseInt(this.quantity, 10) || 1;
      this.quantity = Math.max(1, Math.min(99, currentVal + delta));
      this.renderQuantity(true);
    }

    renderQuantity(syncInput = true) {
      const qty = Math.max(1, Math.min(99, parseInt(this.quantity, 10) || 1));
      this.quantity = qty;

      const total = this.unitPrice * qty;
      const formattedPrice = formatINR(total);

      const priceEls = document.querySelectorAll('#AddToCartPriceLabel, #MobileATCPrice');
      priceEls.forEach((el) => {
        if (el) el.textContent = formattedPrice;
      });

      const qtyInput = document.getElementById('ProductQtyInput');
      if (syncInput && qtyInput) {
        qtyInput.value = qty;
      }

      const minusBtn = document.getElementById('ProductQtyMinus');
      if (minusBtn) {
        minusBtn.disabled = qty <= 1;
        minusBtn.style.opacity = qty <= 1 ? '0.35' : '1';
        minusBtn.style.cursor = qty <= 1 ? 'not-allowed' : 'pointer';
      }
    }

    executeAddToCart(btn) {
      if (this.isAdding) return;
      this.isAdding = true;
      setTimeout(() => {
        this.isAdding = false;
      }, 500);

      const qtyToAdd = Math.max(1, parseInt(this.quantity, 10) || 1);
      const colorObj = this.currentProduct.colors.find((c) => c.name === this.selectedColor) || this.currentProduct.colors[0];

      const item = {
        id: this.getCurrentItemId(),
        handle: this.currentProduct.handle,
        title: this.currentProduct.title,
        color: this.selectedColor,
        size: this.selectedSize,
        price: this.unitPrice,
        quantity: qtyToAdd,
        image: colorObj.image,
      };

      const textEl = document.getElementById('MainAddToCartText');
      const dividerEl = document.getElementById('MainAddToCartDivider');
      const priceEl = document.getElementById('AddToCartPriceLabel');

      if (btn) {
        btn.classList.add('is-added');
        if (textEl) textEl.textContent = `ADDED (${qtyToAdd}) ✓`;
        if (dividerEl) dividerEl.style.display = 'none';
        if (priceEl) priceEl.style.display = 'none';

        setTimeout(() => {
          btn.classList.remove('is-added');
          if (dividerEl) dividerEl.style.display = '';
          if (priceEl) priceEl.style.display = '';
          this.syncInCartState();
          this.renderQuantity(true);
        }, 1200);
      }

      if (window.cartController) {
        window.cartController.addItem(item);
      }
      this.syncInCartState();
    }

    setupStickyBar() {
      const mobileBar = document.getElementById('MobileStickyATC');
      if (!mobileBar || !this.mainAddToCartBtn) return;

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                mobileBar.classList.add('is-visible');
                document.body.classList.add('has-sticky-atc');
              } else {
                mobileBar.classList.remove('is-visible');
                document.body.classList.remove('has-sticky-atc');
              }
            });
          },
          { threshold: 0 }
        );

        observer.observe(this.mainAddToCartBtn);
      }

      const mobileBtn = document.getElementById('MobileATCActionBtn');
      if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
          this.executeAddToCart(this.mainAddToCartBtn);
        });
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 06. CATALOGUE / COLLECTION CONTROLLER
  // ---------------------------------------------------------------------------
  class CollectionController {
    constructor() {
      this.gridContainer = document.getElementById('ProductGridContainer');
      this.typeFilterPills = document.querySelectorAll('[data-filter-type]');
      this.categoryFilterPills = document.querySelectorAll('[data-filter-category]');
      this.colButtons = document.querySelectorAll('[data-grid-cols]');
      this.sortSelect = document.getElementById('SortBy');

      this.activeType = 'all';
      this.activeCategory = 'all';
      this.currentSort = 'featured';

      this.init();
    }

    init() {
      // Type Filters
      if (this.typeFilterPills) {
        this.typeFilterPills.forEach((pill) => {
          pill.addEventListener('click', () => {
            this.typeFilterPills.forEach((p) => p.classList.remove('is-active'));
            pill.classList.add('is-active');
            this.activeType = pill.getAttribute('data-filter-type') || 'all';
            this.renderProducts();
          });
        });
      }

      // Category / Style Filters
      if (this.categoryFilterPills) {
        this.categoryFilterPills.forEach((pill) => {
          pill.addEventListener('click', () => {
            this.categoryFilterPills.forEach((p) => p.classList.remove('is-active'));
            pill.classList.add('is-active');
            this.activeCategory = pill.getAttribute('data-filter-category') || 'all';
            this.renderProducts();
          });
        });
      }

      // Grid Column Density Switchers (with Mobile & Horizontal Axis Adaptation)
      if (this.colButtons) {
        this.colButtons.forEach((btn) => {
          btn.addEventListener('click', () => {
            this.colButtons.forEach((b) => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const cols = btn.getAttribute('data-grid-cols');
            if (this.gridContainer) {
              if (cols === 'axis') {
                this.gridContainer.className = `product-grid horizontal-axis`;
              } else if (cols === '2') {
                this.gridContainer.className = `product-grid grid-cols-2 mobile-cols-1`;
              } else if (cols === '4') {
                this.gridContainer.className = `product-grid grid-cols-4 mobile-cols-2`;
              } else {
                this.gridContainer.className = `product-grid grid-cols-3 mobile-cols-2`;
              }
            }
          });
        });
      }

      // Sort Select
      if (this.sortSelect) {
        this.sortSelect.addEventListener('change', (e) => {
          this.currentSort = e.target.value;
          this.renderProducts();
        });
      }

      this.renderProducts();
    }

    renderProducts() {
      if (!this.gridContainer) return;

      let filtered = [...PRODUCTS_DATABASE];

      // Type Filter
      if (this.activeType !== 'all') {
        filtered = filtered.filter((p) => p.type.toLowerCase() === this.activeType.toLowerCase());
      }

      // Category Filter
      if (this.activeCategory !== 'all') {
        filtered = filtered.filter((p) => p.category.toLowerCase() === this.activeCategory.toLowerCase());
      }

      // Sorting
      if (this.currentSort === 'price-ascending') {
        filtered.sort((a, b) => a.price - b.price);
      } else if (this.currentSort === 'price-descending') {
        filtered.sort((a, b) => b.price - a.price);
      }

      if (filtered.length === 0) {
        this.gridContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-2xl) 0; color: var(--color-text-muted);">
            <p style="font-size: var(--text-base); margin-bottom: var(--spacing-sm);">No garments match the selected filters.</p>
            <button type="button" class="btn-primary" onclick="window.resetCatalogueFilters()" style="max-width: 220px; margin-inline: auto;">View All Garments</button>
          </div>
        `;
        return;
      }

      this.gridContainer.innerHTML = filtered
        .map((p) => {
          const gallery = p.gallery && p.gallery.length > 0 ? p.gallery : p.colors.map((c) => c.image);

          return `
          <div class="product-card" data-product-handle="${p.handle}" data-type="${p.type.toLowerCase()}" data-category="${p.category.toLowerCase()}">
            <div class="product-card-media" aria-label="${p.title} image gallery">
              <!-- Card Multi-Image Carousel Track -->
              <div class="card-carousel-track" data-current-slide="0" onclick="selectCatalogueProduct('${p.handle}')">
                ${gallery
                  .map(
                    (imgUrl, sIdx) => `
                  <div class="card-carousel-slide" data-slide-index="${sIdx}">
                    <img
                      src="${imgUrl}"
                      alt="${p.title} view ${sIdx + 1}"
                      loading="${sIdx === 0 ? 'eager' : 'lazy'}"
                    />
                  </div>
                `
                  )
                  .join('')}
              </div>

              <!-- Carousel Previous Arrow -->
              <button
                type="button"
                class="card-carousel-btn card-carousel-prev"
                onclick="cardCarouselPrev(event, '${p.handle}')"
                aria-label="Previous view of ${p.title}"
                title="Previous image"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              <!-- Carousel Next Arrow -->
              <button
                type="button"
                class="card-carousel-btn card-carousel-next"
                onclick="cardCarouselNext(event, '${p.handle}')"
                aria-label="Next view of ${p.title}"
                title="Next image"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>

              <!-- Carousel Progress Dots -->
              <div class="card-carousel-dots" role="tablist" aria-label="${p.title} images">
                ${gallery
                  .map(
                    (_, dIdx) => `
                  <button
                    type="button"
                    class="card-carousel-dot ${dIdx === 0 ? 'is-active' : ''}"
                    onclick="cardCarouselGoTo(event, '${p.handle}', ${dIdx})"
                    aria-label="View slide ${dIdx + 1}"
                  ></button>
                `
                  )
                  .join('')}
              </div>
            </div>

            <div class="product-card-info">
              <div class="product-card-category-tag">${p.badge} · ${p.type} · ${p.category}</div>
              <a href="javascript:void(0)" onclick="selectCatalogueProduct('${p.handle}')" class="product-card-title">${p.title}</a>
              <div class="product-card-price">${formatINR(p.price)}</div>
              <div class="product-card-sizes">${p.sizes.join(' · ')}</div>
              <div class="product-card-swatches">
                ${p.colors
                  .map(
                    (c, cIdx) => `
                  <span
                    class="mini-swatch"
                    style="background-color: ${c.hex};"
                    title="${c.name}"
                    onmouseenter="cardCarouselGoTo(event, '${p.handle}', ${cIdx})"
                    onclick="selectCatalogueProductVariant('${p.handle}', '${c.name}')"
                  ></span>
                `
                  )
                  .join('')}
              </div>
            </div>
          </div>
        `;
        })
        .join('');

      // Attach touch swipe handlers for mobile
      this.gridContainer.querySelectorAll('.card-carousel-track').forEach((track) => {
        let startX = 0;
        const card = track.closest('.product-card');
        const handle = card ? card.getAttribute('data-product-handle') : null;
        if (!handle) return;

        track.addEventListener(
          'touchstart',
          (e) => {
            startX = e.changedTouches[0].clientX;
          },
          { passive: true }
        );

        track.addEventListener(
          'touchend',
          (e) => {
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            if (Math.abs(diff) > 35) {
              if (diff > 0) {
                window.cardCarouselNext(null, handle);
              } else {
                window.cardCarouselPrev(null, handle);
              }
            }
          },
          { passive: true }
        );
      });
    }
  }

  // ---------------------------------------------------------------------------
  // 07. GLOBAL DISPATCHERS & INTERACTION HELPERS
  // ---------------------------------------------------------------------------
  window.cardCarouselNext = function (e, handle) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const card = document.querySelector(`.product-card[data-product-handle="${handle}"]`);
    if (!card) return;
    const track = card.querySelector('.card-carousel-track');
    const slides = card.querySelectorAll('.card-carousel-slide');
    const dots = card.querySelectorAll('.card-carousel-dot');
    if (!track || slides.length <= 1) return;

    let currentIndex = parseInt(track.getAttribute('data-current-slide') || '0', 10);
    let nextIndex = (currentIndex + 1) % slides.length;

    track.style.transform = `translateX(-${nextIndex * 100}%)`;
    track.setAttribute('data-current-slide', nextIndex);

    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === nextIndex);
    });
  };

  window.cardCarouselPrev = function (e, handle) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const card = document.querySelector(`.product-card[data-product-handle="${handle}"]`);
    if (!card) return;
    const track = card.querySelector('.card-carousel-track');
    const slides = card.querySelectorAll('.card-carousel-slide');
    const dots = card.querySelectorAll('.card-carousel-dot');
    if (!track || slides.length <= 1) return;

    let currentIndex = parseInt(track.getAttribute('data-current-slide') || '0', 10);
    let prevIndex = (currentIndex - 1 + slides.length) % slides.length;

    track.style.transform = `translateX(-${prevIndex * 100}%)`;
    track.setAttribute('data-current-slide', prevIndex);

    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === prevIndex);
    });
  };

  window.cardCarouselGoTo = function (e, handle, targetIdx) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const card = document.querySelector(`.product-card[data-product-handle="${handle}"]`);
    if (!card) return;
    const track = card.querySelector('.card-carousel-track');
    const slides = card.querySelectorAll('.card-carousel-slide');
    const dots = card.querySelectorAll('.card-carousel-dot');
    if (!track || targetIdx >= slides.length) return;

    track.style.transform = `translateX(-${targetIdx * 100}%)`;
    track.setAttribute('data-current-slide', targetIdx);

    dots.forEach((dot, idx) => {
      dot.classList.toggle('is-active', idx === targetIdx);
    });
  };

  window.selectCatalogueProduct = function (handle) {
    if (window.productController) {
      window.productController.loadProduct(handle);
    }
    switchView('view-product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.selectCatalogueProductVariant = function (handle, colorName) {
    if (window.productController) {
      window.productController.loadProduct(handle);
      window.productController.setColor(colorName);
    }
    switchView('view-product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.quickAddProduct = function (handle) {
    const product = PRODUCTS_DATABASE.find((p) => p.handle === handle);
    if (!product) return;

    const item = {
      id: `${product.id}-${product.colors[0].name.toLowerCase().replace(/\s+/g, '-')}-m`,
      handle: product.handle,
      title: product.title,
      color: product.colors[0].name,
      size: 'M',
      price: product.price,
      quantity: 1,
      image: product.colors[0].image,
    };

    if (window.cartController) {
      window.cartController.addItem(item);
      ThemeUI.showToast(`Added ${product.title} (${formatINR(product.price)}) to your bag`);
    }
  };

  window.resetCatalogueFilters = function () {
    document.querySelectorAll('[data-filter-type]').forEach((p, idx) => {
      if (idx === 0) p.classList.add('is-active');
      else p.classList.remove('is-active');
    });
    document.querySelectorAll('[data-filter-category]').forEach((p, idx) => {
      if (idx === 0) p.classList.add('is-active');
      else p.classList.remove('is-active');
    });
    if (window.collectionController) {
      window.collectionController.activeType = 'all';
      window.collectionController.activeCategory = 'all';
      window.collectionController.renderProducts();
    }
  };

  // ---------------------------------------------------------------------------
  // 08. SEARCH CONTROLLER
  // ---------------------------------------------------------------------------
  class SearchController {
    constructor() {
      this.input = document.getElementById('HeaderSearchInput');
      this.clearBtn = document.getElementById('HeaderSearchClear');
      this.dropdown = document.getElementById('HeaderSearchDropdown');
      this.init();
    }

    init() {
      if (!this.input || !this.dropdown) return;

      this.input.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length > 0) {
          if (this.clearBtn) this.clearBtn.style.display = 'block';
          this.performSearch(query);
        } else {
          if (this.clearBtn) this.clearBtn.style.display = 'none';
          this.dropdown.classList.remove('is-open');
        }
      });

      if (this.clearBtn) {
        this.clearBtn.addEventListener('click', () => {
          this.input.value = '';
          this.clearBtn.style.display = 'none';
          this.dropdown.classList.remove('is-open');
          this.input.focus();
        });
      }

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-search-wrapper')) {
          this.dropdown.classList.remove('is-open');
        }
      });
    }

    performSearch(query) {
      const matches = PRODUCTS_DATABASE.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.colors.some((c) => c.name.toLowerCase().includes(query))
      );

      if (matches.length === 0) {
        this.dropdown.innerHTML = `
          <div style="padding: 0.85rem; font-size: 0.78rem; color: #8A7A6F; text-align: center;">
            No garments found for "${query}".
          </div>
        `;
      } else {
        this.dropdown.innerHTML = matches
          .map(
            (p) => `
          <a href="javascript:void(0)" class="search-result-item" onclick="selectCatalogueProduct('${p.handle}'); document.getElementById('HeaderSearchDropdown').classList.remove('is-open');">
            <img src="${p.colors[0]?.image || ''}" alt="${p.title}" class="search-result-thumb" />
            <div class="search-result-info">
              <span class="search-result-title">${p.title}</span>
              <span class="search-result-price">${p.type} • ${p.category} • ${formatINR(p.price)}</span>
            </div>
          </a>
        `
          )
          .join('');
      }

      this.dropdown.classList.add('is-open');
    }
  }

  // ---------------------------------------------------------------------------
  // 09. ACCORDION & MODALS
  // ---------------------------------------------------------------------------
  class AccordionController {
    constructor() {
      this.items = document.querySelectorAll('.accordion-item');
      this.init();
    }

    init() {
      if (!this.items) return;
      this.items.forEach((item) => {
        const trigger = item.querySelector('.accordion-trigger');
        const content = item.querySelector('.accordion-content');
        if (!trigger || !content) return;

        trigger.addEventListener('click', () => {
          const isOpen = item.classList.contains('is-open');

          this.items.forEach((other) => {
            if (other !== item) {
              other.classList.remove('is-open');
              const otherTrigger = other.querySelector('.accordion-trigger');
              if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
              const otherContent = other.querySelector('.accordion-content');
              if (otherContent) otherContent.style.maxHeight = null;
            }
          });

          if (isOpen) {
            item.classList.remove('is-open');
            trigger.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = null;
          } else {
            item.classList.add('is-open');
            trigger.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
          }
        });
      });
    }
  }

  class ModalController {
    constructor() {
      this.initModals();
    }

    initModals() {
      const sizeTriggers = document.querySelectorAll('[data-action="open-size-guide"]');
      sizeTriggers.forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          window.openSizeGuide();
        });
      });

      document.querySelectorAll('[data-action="close-modal"]').forEach((btn) => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.modal-dialog').forEach((m) => m.classList.remove('is-open'));
          document.body.style.overflow = '';
        });
      });

      const unitBtns = document.querySelectorAll('[data-unit-switch]');
      if (unitBtns) {
        unitBtns.forEach((btn) => {
          btn.addEventListener('click', () => {
            unitBtns.forEach((b) => b.classList.remove('is-active'));
            btn.classList.add('is-active');
            const unit = btn.getAttribute('data-unit-switch');
            document.querySelectorAll('[data-val-in]').forEach((cell) => {
              cell.textContent = unit === 'cm' ? cell.getAttribute('data-val-cm') : cell.getAttribute('data-val-in');
            });
          });
        });
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 10. MOBILE NAVIGATION DRAWER CONTROLLER
  // ---------------------------------------------------------------------------
  class MobileNavDrawerController {
    constructor() {
      this.toggleBtn = document.getElementById('MobileNavToggle');
      this.drawer = document.getElementById('MobileNavDrawer');
      this.backdrop = document.getElementById('MobileNavBackdrop');
      this.closeBtn = document.getElementById('MobileNavCloseBtn');
      this.isOpen = false;

      this.init();
    }

    init() {
      if (this.toggleBtn) {
        this.toggleBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.toggle();
        });
      }

      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }

      if (this.backdrop) {
        this.backdrop.addEventListener('click', () => this.close());
      }

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });

      window.openMobileNavDrawer = () => this.open();
      window.closeMobileNavDrawer = () => this.close();
      window.toggleMobileNavDrawer = () => this.toggle();
    }

    open() {
      this.isOpen = true;
      if (this.drawer) {
        this.drawer.classList.add('is-open');
        this.drawer.setAttribute('aria-hidden', 'false');
      }
      if (this.backdrop) {
        this.backdrop.classList.add('is-open');
        this.backdrop.setAttribute('aria-hidden', 'false');
      }
      if (this.toggleBtn) {
        this.toggleBtn.classList.add('is-active');
        this.toggleBtn.setAttribute('aria-expanded', 'true');
      }
      document.body.style.overflow = 'hidden';
    }

    close() {
      this.isOpen = false;
      if (this.drawer) {
        this.drawer.classList.remove('is-open');
        this.drawer.setAttribute('aria-hidden', 'true');
      }
      if (this.backdrop) {
        this.backdrop.classList.remove('is-open');
        this.backdrop.setAttribute('aria-hidden', 'true');
      }
      if (this.toggleBtn) {
        this.toggleBtn.classList.remove('is-active');
        this.toggleBtn.setAttribute('aria-expanded', 'false');
      }
      document.body.style.overflow = '';
    }

    toggle() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  // ---------------------------------------------------------------------------
  // 11. THEME UI UTILITIES
  // ---------------------------------------------------------------------------
  class ThemeUI {
    static init() {
      const header = document.querySelector('.site-header');
      if (header) {
        window.addEventListener(
          'scroll',
          () => {
            if (window.scrollY > 20) {
              header.classList.add('is-scrolled');
            } else {
              header.classList.remove('is-scrolled');
            }
          },
          { passive: true }
        );
      }

      document.querySelectorAll('.newsletter-form').forEach((form) => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const input = form.querySelector('.newsletter-input');
          if (input && input.value) {
            ThemeUI.showToast('Thank you for subscribing to Faberelin Journal.');
            input.value = '';
          }
        });
      });
    }

    static showToast(message) {
      let toast = document.getElementById('ThemeToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'ThemeToast';
        toast.className = 'theme-toast';
        document.body.appendChild(toast);
      }

      toast.textContent = message;
      toast.classList.add('is-visible');

      setTimeout(() => {
        toast.classList.remove('is-visible');
      }, 2800);
    }

    static bumpCartBadge() {
      document.querySelectorAll('.cart-count-badge').forEach((badge) => {
        badge.classList.add('is-bumped');
        setTimeout(() => badge.classList.remove('is-bumped'), 300);
      });
    }
  }

  window.ThemeUI = ThemeUI;

  // Global helper functions
  window.openCart = function () {
    if (window.cartController) window.cartController.open();
  };

  window.closeCart = function () {
    if (window.cartController) window.cartController.close();
  };

  window.triggerProductAddToCart = function () {
    if (window.productController) {
      window.productController.executeAddToCart(document.getElementById('MainAddToCartBtn'));
    }
  };

  window.carouselPrev = function () {
    if (window.carouselController) window.carouselController.prev();
  };

  window.carouselNext = function () {
    if (window.carouselController) window.carouselController.next();
  };

  window.carouselGoTo = function (idx) {
    if (window.carouselController) window.carouselController.goToSlide(idx);
  };

  window.scrollHorizontalAxis = function (direction) {
    const track = document.getElementById('HorizontalAxisCollectionTrack');
    if (!track) return;
    const scrollAmount = Math.round(track.clientWidth * 0.75) || 260;
    if (direction === 'prev') {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  window.openSizeGuide = function () {
    const sizeModal = document.getElementById('SizeGuideModal');
    if (!sizeModal) return;
    const currentProductHandle = ThemeState.getSelectedProduct() || 'casual-t-shirt';
    const container = document.getElementById('SizeGuideTableContainer');
    const heading = document.getElementById('SizeGuideHeading');

    if (container) {
      if (currentProductHandle === 'essential-sweatpants') {
        if (heading) heading.textContent = 'Sweatpants Measurement Guide';
        container.innerHTML = `
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Waist</th>
                <th>Hip</th>
                <th>Outseam</th>
                <th>Inseam</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>S</strong></td>
                <td data-val-in="30&quot;" data-val-cm="76.2 cm">30"</td>
                <td data-val-in="36&quot;" data-val-cm="91.4 cm">36"</td>
                <td data-val-in="39&quot;" data-val-cm="99.1 cm">39"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td data-val-in="32&quot;" data-val-cm="81.3 cm">32"</td>
                <td data-val-in="38&quot;" data-val-cm="96.5 cm">38"</td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td data-val-in="34&quot;" data-val-cm="86.4 cm">34"</td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="41&quot;" data-val-cm="104.1 cm">41"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td data-val-in="36&quot;" data-val-cm="91.4 cm">36"</td>
                <td data-val-in="44&quot;" data-val-cm="111.8 cm">44"</td>
                <td data-val-in="42&quot;" data-val-cm="106.7 cm">42"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td data-val-in="38&quot;" data-val-cm="96.5 cm">38"</td>
                <td data-val-in="46&quot;" data-val-cm="116.8 cm">46"</td>
                <td data-val-in="43&quot;" data-val-cm="109.2 cm">43"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (currentProductHandle === 'polo-t-shirt') {
        if (heading) heading.textContent = "Men's Polo T-Shirt Measurement Guide";
        container.innerHTML = `
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>S</strong></td>
                <td data-val-in="38&quot;" data-val-cm="96.5 cm">38"</td>
                <td data-val-in="26&quot;" data-val-cm="66.0 cm">26"</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td data-val-in="42&quot;" data-val-cm="106.7 cm">42"</td>
                <td data-val-in="28&quot;" data-val-cm="71.1 cm">28"</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td data-val-in="44&quot;" data-val-cm="111.8 cm">44"</td>
                <td data-val-in="29&quot;" data-val-cm="73.7 cm">29"</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td data-val-in="46&quot;" data-val-cm="116.8 cm">46"</td>
                <td data-val-in="30&quot;" data-val-cm="76.2 cm">30"</td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (currentProductHandle === 'oversized-hoodie') {
        if (heading) heading.textContent = 'Oversized Hoodie Measurement Guide';
        container.innerHTML = `
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>S</strong></td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td data-val-in="42&quot;" data-val-cm="106.7 cm">42"</td>
                <td data-val-in="28&quot;" data-val-cm="71.1 cm">28"</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td data-val-in="44&quot;" data-val-cm="111.8 cm">44"</td>
                <td data-val-in="29&quot;" data-val-cm="73.7 cm">29"</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td data-val-in="46&quot;" data-val-cm="116.8 cm">46"</td>
                <td data-val-in="30&quot;" data-val-cm="76.2 cm">30"</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td data-val-in="48&quot;" data-val-cm="121.9 cm">48"</td>
                <td data-val-in="31&quot;" data-val-cm="78.7 cm">31"</td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (currentProductHandle === 'essential-hoodie') {
        if (heading) heading.textContent = 'Essential Hoodie Measurement Guide';
        container.innerHTML = `
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>XS</strong></td>
                <td data-val-in="38&quot;" data-val-cm="96.5 cm">38"</td>
                <td data-val-in="25&quot;" data-val-cm="63.5 cm">25"</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="26&quot;" data-val-cm="66.0 cm">26"</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td data-val-in="42&quot;" data-val-cm="106.7 cm">42"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td data-val-in="44&quot;" data-val-cm="111.8 cm">44"</td>
                <td data-val-in="28&quot;" data-val-cm="71.1 cm">28"</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td data-val-in="46&quot;" data-val-cm="116.8 cm">46"</td>
                <td data-val-in="29&quot;" data-val-cm="73.7 cm">29"</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td data-val-in="48&quot;" data-val-cm="121.9 cm">48"</td>
                <td data-val-in="30&quot;" data-val-cm="76.2 cm">30"</td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (currentProductHandle === 'oversized-t-shirt') {
        if (heading) heading.textContent = 'Oversized Classic T-Shirt Measurement Guide';
        container.innerHTML = `
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>XS</strong></td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td data-val-in="42&quot;" data-val-cm="106.7 cm">42"</td>
                <td data-val-in="28&quot;" data-val-cm="71.1 cm">28"</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td data-val-in="44&quot;" data-val-cm="111.8 cm">44"</td>
                <td data-val-in="29&quot;" data-val-cm="73.7 cm">29"</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td data-val-in="46&quot;" data-val-cm="116.8 cm">46"</td>
                <td data-val-in="30&quot;" data-val-cm="76.2 cm">30"</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td data-val-in="48&quot;" data-val-cm="121.9 cm">48"</td>
                <td data-val-in="31&quot;" data-val-cm="78.7 cm">31"</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td data-val-in="50&quot;" data-val-cm="127.0 cm">50"</td>
                <td data-val-in="32&quot;" data-val-cm="81.3 cm">32"</td>
              </tr>
            </tbody>
          </table>
        `;
      } else if (currentProductHandle === 'casual-t-shirt') {
        if (heading) heading.textContent = 'Casual T-Shirt Measurement Guide';
        container.innerHTML = `
          <table class="size-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest</th>
                <th>Length</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>XS</strong></td>
                <td data-val-in="36&quot;" data-val-cm="91.4 cm">36"</td>
                <td data-val-in="25&quot;" data-val-cm="63.5 cm">25"</td>
              </tr>
              <tr>
                <td><strong>S</strong></td>
                <td data-val-in="38&quot;" data-val-cm="96.5 cm">38"</td>
                <td data-val-in="26&quot;" data-val-cm="66.0 cm">26"</td>
              </tr>
              <tr>
                <td><strong>M</strong></td>
                <td data-val-in="40&quot;" data-val-cm="101.6 cm">40"</td>
                <td data-val-in="27&quot;" data-val-cm="68.6 cm">27"</td>
              </tr>
              <tr>
                <td><strong>L</strong></td>
                <td data-val-in="42&quot;" data-val-cm="106.7 cm">42"</td>
                <td data-val-in="28&quot;" data-val-cm="71.1 cm">28"</td>
              </tr>
              <tr>
                <td><strong>XL</strong></td>
                <td data-val-in="44&quot;" data-val-cm="111.8 cm">44"</td>
                <td data-val-in="29&quot;" data-val-cm="73.7 cm">29"</td>
              </tr>
              <tr>
                <td><strong>2XL</strong></td>
                <td data-val-in="46&quot;" data-val-cm="116.8 cm">46"</td>
                <td data-val-in="30&quot;" data-val-cm="76.2 cm">30"</td>
              </tr>
            </tbody>
          </table>
        `;
      }
    }

    sizeModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  window.closeSizeGuide = function () {
    const sizeModal = document.getElementById('SizeGuideModal');
    if (sizeModal) {
      sizeModal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  window.openPolicyModal = function (tabName = 'contact') {
    const modal = document.getElementById('PolicyModal');
    if (modal) {
      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      window.switchPolicyTab(tabName);
    }
  };

  window.closePolicyModal = function () {
    const modal = document.getElementById('PolicyModal');
    if (modal) {
      modal.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  window.switchPolicyTab = function (tabName) {
    const tabKeys = ['contact', 'shipping', 'refund', 'privacy', 'terms'];
    const activeKey = tabKeys.includes(tabName) ? tabName : 'contact';

    tabKeys.forEach((key) => {
      const btn = document.getElementById(`PolicyTabBtn-${key}`);
      const pane = document.getElementById(`PolicyPane-${key}`);
      if (btn) {
        btn.classList.toggle('is-active', key === activeKey);
        btn.setAttribute('aria-selected', key === activeKey ? 'true' : 'false');
      }
      if (pane) {
        pane.style.display = key === activeKey ? 'block' : 'none';
        pane.classList.toggle('is-active', key === activeKey);
      }
    });

    const modalBody = document.querySelector('.policy-modal-body');
    if (modalBody) modalBody.scrollTop = 0;
  };

  window.handleContactSubmit = function (form) {
    const name = document.getElementById('ContactName')?.value || '';
    const email = document.getElementById('ContactEmail')?.value || '';
    const subject = document.getElementById('ContactSubject')?.value || 'Inquiry';
    
    ThemeUI.showToast(`Thank you, ${name || 'Customer'}! Your inquiry regarding "${subject}" has been received. We will respond to ${email} within 24 hours.`);
    if (form) form.reset();
  };

  // ---------------------------------------------------------------------------
  // 12. INITIALIZATION
  // ---------------------------------------------------------------------------
  function initializeTheme() {
    window.carouselController = new ProductCarouselController();
    window.cartController = new CartDrawerController();
    window.productController = new ProductDetailController();
    window.collectionController = new CollectionController();
    window.searchController = new SearchController();
    window.accordionController = new AccordionController();
    window.modalController = new ModalController();
    window.mobileNavDrawerController = new MobileNavDrawerController();
    ThemeUI.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme);
  } else {
    initializeTheme();
  }
})();
