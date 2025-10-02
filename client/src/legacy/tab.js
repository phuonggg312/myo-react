$(function () {
  const $slider = $('.cate-slider,.brew-grid,.product-carousel--ct__list');

  function applyFilter(filter) {
    $slider.slick('slickUnfilter');

    if (filter !== 'all') {
      $slider.slick('slickFilter', '.cate-item[data-cat="' + filter + '"]');
    }

    $slider.slick('slickGoTo', 0, true);
  }

  $('.cate-nav').on('click', '[data-filter]', function () {
    const $btn = $(this);
    const filter = $btn.data('filter');

    // UI state + ARIA
    $btn.addClass('is-active').attr('aria-selected', 'true')
      .siblings('[data-filter]').removeClass('is-active').attr('aria-selected', 'false');

    applyFilter(filter);
  });
});

$(function () {
  const $brew = $('.brew-grid');

  function applyBrewFilter(filter) {
    $brew.slick('slickUnfilter');

    $brew.slick('slickFilter', function (_, el) {
      const tokens = ($(el).attr('data-cat') || '').toLowerCase().split(/\s+/);
      return tokens.includes(filter);
    });

    $brew.slick('slickGoTo', 0, true);
  }

  applyBrewFilter('featured');

  $('.brew-tabs').on('click', '[data-filter]', function () {
    const $btn = $(this);
    const filter = $btn.data('filter');

    // UI/ARIA
    $btn.addClass('is-active').attr('aria-selected', 'true')
      .siblings('[data-filter]').removeClass('is-active').attr('aria-selected', 'false');

    applyBrewFilter(filter);
  });
});

$(function () {
  function addNavigationArrows() {
    const $viewport = $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__viewport');

    // Check if arrows don't already exist
    if ($viewport.find('.cate-arrow').length === 0) {
      const prevArrow = `
        <button class="cate-arrow cate-prev" aria-label="Previous products">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
      `;

      const nextArrow = `
        <button class="cate-arrow cate-next" aria-label="Next products">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      `;

      $viewport.prepend(prevArrow + nextArrow);
    }
  }

  function filterProducts(category) {
    // Only filter items in the "Elevate your brew experience" section (not "Recently viewed")
    const $items = $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__item');

    $items.each(function () {
      const $item = $(this);
      const itemCategory = $item.data('cat');

      if (category === 'all' || itemCategory === category) {
        $item.show();
      } else {
        $item.hide();
      }
    });

    // Update arrow visibility based on filtered items
    updateArrowVisibility();
  }

  function updateArrowVisibility() {
    const $visibleItems = $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__item:visible');
    const $viewport = $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__viewport');

    if ($visibleItems.length > 3) { // Show arrows if more than 3 items
      $viewport.find('.cate-arrow').show();
    } else {
      $viewport.find('.cate-arrow').hide();
    }
  }

  // Handle navigation arrow clicks
  $(document).on('click', '.cate-prev', function () {
    const $list = $('.product-carousel--ct__list');
    const scrollAmount = 372; // width of one product card + gap
    const currentScroll = $list.scrollLeft();
    $list.animate({ scrollLeft: currentScroll - scrollAmount }, 300);
  });

  $(document).on('click', '.cate-next', function () {
    const $list = $('.product-carousel--ct__list');
    const scrollAmount = 372; // width of one product card + gap
    const currentScroll = $list.scrollLeft();
    $list.animate({ scrollLeft: currentScroll + scrollAmount }, 300);
  });

  // Handle tab clicks in product carousel section (only for sections with nav)
  $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__nav').on('click', '.cate-pill', function (e) {
    e.preventDefault();

    const $btn = $(this);
    const filter = $btn.data('filter');

    // Update active state - remove from siblings first
    $btn.addClass('is-active').attr('aria-selected', 'true')
      .siblings('.cate-pill').removeClass('is-active').attr('aria-selected', 'false');

    // Filter products
    filterProducts(filter);
  });

  // Initialize - show all products initially (only for sections with nav)
  addNavigationArrows();
  const $navSection = $('.product-carousel--ct-upsell:not(.p-c--ct) .product-carousel--ct__nav');
  if ($navSection.length > 0) {
    // Remove any initial active state from tabs
    $navSection.find('.cate-pill').removeClass('is-active').attr('aria-selected', 'false');
    // Show all products initially instead of filtering
    filterProducts('all');
  }

  // Debug: Check Recently viewed section
  console.log('Recently viewed items:', $('.p-c--ct .product-carousel--ct__item').length);
  console.log('Recently viewed section exists:', $('.p-c--ct').length);
});
(function () {
  const root = document.querySelector('#product-tabs');
  if (!root) return;
  const panels = [...root.querySelectorAll('[role="tabpanel"]')];

  function activateDesktop(id) {
    // Desktop behavior - show/hide panels
    tabs.forEach(t => {
      const on = t.dataset.target === id;
      t.classList.toggle('is-active', on);
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });

    panels.forEach(p => {
      p.hidden = (p.id !== id);
    });
  }

  function activateMobile(id) {
    // Mobile behavior - accordion
    tabs.forEach(t => {
      const isTarget = t.dataset.target === id;
      const wasOpen = t.classList.contains('is-open');

      // Close all first
      t.classList.remove('is-open');
      t.classList.remove('is-active');
      t.setAttribute('aria-selected', 'false');

      // Open target if it wasn't already open
      if (isTarget && !wasOpen) {
        t.classList.add('is-open');
        t.classList.add('is-active');
        t.setAttribute('aria-selected', 'true');
      }
    });

    panels.forEach(p => {
      const isTarget = p.id === id;
      const wasOpen = p.classList.contains('is-open');

      p.classList.remove('is-open');
      p.hidden = true;

      if (isTarget && !wasOpen) {
        p.classList.add('is-open');
        p.hidden = false;
      }
    });
  }

  function handleTabClick(btn) {
    if (isMobile) {
      activateMobile(btn.dataset.target);
    } else {
      activateDesktop(btn.dataset.target);
    }
  }

  // Event listeners
  root.addEventListener('click', e => {
    const btn = e.target.closest('.p-tabs__tab');
    if (!btn) return;
    handleTabClick(btn);
  });

  // Keyboard navigation
  root.addEventListener('keydown', e => {
    const current = document.activeElement;
    if (!current.classList.contains('p-tabs__tab')) return;

    const i = tabs.indexOf(current);
    let j = i;

    if (e.key === 'ArrowRight') j = (i + 1) % tabs.length;
    else if (e.key === 'ArrowLeft') j = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === 'Home') j = 0;
    else if (e.key === 'End') j = tabs.length - 1;
    else return;

    e.preventDefault();
    tabs[j].focus();
    handleTabClick(tabs[j]);
  });

  // Handle resize
  function handleResize() {
    const newIsMobile = window.innerWidth <= 768;
    if (newIsMobile !== isMobile) {
      // Reset to first tab on resize
      const firstId = tabs[0].dataset.target;
      if (newIsMobile) {
        activateMobile(firstId);
      } else {
        activateDesktop(firstId);
      }
    }
  }

  // Initial setup
  const hash = location.hash.replace('#', '');
  const firstId = tabs[0].dataset.target;
  const targetId = panels.some(p => p.id === hash) ? hash : firstId;

  if (isMobile) {
    activateMobile(targetId);
  } else {
    activateDesktop(targetId);
  }

  window.addEventListener('resize', handleResize);
})();
const sm = document.querySelector('.search--mobile');
sm?.addEventListener('submit', e => e.preventDefault());
sm?.querySelector('.search_mode')?.setAttribute('type', 'button');

sm?.querySelector('.search_mode')?.addEventListener('click', e => {
  e.stopPropagation();
  sm.classList.toggle('is-open');
});
document.addEventListener('click', e => { if (sm && !sm.contains(e.target)) sm.classList.remove('is-open'); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') sm?.classList.remove('is-open'); });

const mq = window.matchMedia('(min-width: 769px)');
function sync() { sm?.classList.remove('is-open'); }
mq.addEventListener ? mq.addEventListener('change', sync) : mq.addListener(sync);
sync();

(function () {
  const fig = document.querySelector('.howto__video');
  if (!fig) return;

  function playEmbed() {
    const url = fig.getAttribute('data-embed');
    if (!url) return;

    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.title = 'How to brew video';
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.setAttribute('frameborder', '0');
    iframe.style.position = 'absolute';
    iframe.style.inset = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    fig.innerHTML = '';
    fig.appendChild(iframe);
    fig.classList.add('is-playing');
  }

  fig.addEventListener('click', playEmbed);
  fig.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      playEmbed();
    }
  });
})();