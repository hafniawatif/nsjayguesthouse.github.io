// Bilingual translation dictionary
const translations = {
  en: {
    // Navigation
    "nav-home": "Home",
    "nav-location": "Our Location",
    "nav-layout": "Guest House Layout",
    "nav-book": "How to Book",
    "nav-rules": "House Rules",
    "btn-book-now": "Book Now",

    // Hero Section
    "hero-badge-1": "Cozy Stay",
    "hero-badge-1-sub": "Besut, Terengganu",
    "hero-badge-2": "Family Friendly",
    "hero-badge-2-sub": "Fully Equipped",
    "hero-title": "Welcome to NSJay Guest House",
    "hero-desc": "A cosy and fully equipped guest house in Besut, perfect for family holidays, weekend escapes, business trips, or a relaxing beach and island getaway.",
    "btn-explore": "Explore Layout",
    "btn-contact": "Contact Us",

    // Location Section
    "loc-title": "Our Location",
    "loc-desc": "Conveniently located in Besut, Malaysia. A perfect stopover or staycation spot near beautiful beaches and transit points.",
    "loc-address-title": "Address",
    "loc-address-text": "Lot 1234, Jalan Pantai, Kampung Kuala Besut, 22200 Besut, Terengganu, Malaysia",
    "loc-nearby-title": "Nearby Attractions",
    "loc-nearby-text": "Kuala Besut Jetty (Gateway to Perhentian Island) - 5 mins drive\nBukit Keluang Beach & Hiking Trail - 10 mins drive\nLocal Seafood Restaurants & Markets - walking distance",
    "loc-desc-card": "NSJay Guest House is located in Anak Ikan, Besut, Terengganu, in a peaceful and convenient area for guests.",
    "btn-maps-waze": "Open in Google Maps",

    // Layout Section
    "layout-title": "Guest House Layout",
    "layout-tab-semid": "Semi-D House (Units 1 & 2)",
    "layout-tab-tiny": "Tiny House (Unit 3)",
    "space-living": "Living Room",
    "space-bedroom": "Bedroom",
    "space-toilet": "Toilet",
    "space-dining": "Dining Area",
    
    // Layout - Semi-D House
    "layout-semid-title": "Spacious 3-Bedroom Homestay",
    "layout-semid-desc": "Rent a full Semi-D house unit, perfect for families and groups looking for space, privacy, and convenience.",
    "amenity-rooms": "3 Bedrooms",
    "amenity-bathrooms": "2 Bathrooms",
    "amenity-ac": "Fully Air-Conditioned",
    "amenity-kitchen": "Equipped Kitchen",
    "amenity-tv": "Smart TV",
    "amenity-parking": "Private Parking (2 cars)",

    // Layout - Tiny House
    "layout-tiny-title": "Cozy Tiny House Unit",
    "layout-tiny-desc": "Our modern tiny house offers a warm, fully air-conditioned bedroom, a comfortable living area with TV, and kitchen amenities. Ideal for couples or small families.",
    "amenity-tiny-bedroom": "Cozy Bedroom (1 Queen Bed)",
    "amenity-tiny-living": "Living Hall with Sofa & TV",
    "amenity-tiny-dining": "Dining Set & Kettle",
    "amenity-tiny-ac": "Fully Air-Conditioned",
    "amenity-tiny-fans": "Ceiling Fans",
    "amenity-tiny-parking": "Private Parking",

    // How to Book Section
    "book-title": "How to Book",
    "book-desc": "Follow these three simple steps to secure your stay with us.",
    "step-1-title": "Check Availability",
    "step-1-desc": "Contact us via WhatsApp or phone call to check if your desired dates are available.",
    "step-2-title": "Confirm Booking Details",
    "step-2-desc": "Provide us with guest details, duration of stay, and make a reservation deposit.",
    "step-3-title": "Welcome to Besut!",
    "step-3-desc": "Receive check-in details and key collection instructions. Your cozy stay awaits!",
    
    "action-title": "Ready to book your cozy stay?",
    "action-desc": "Direct WhatsApp booking guarantees the quickest response and the best local rates.",
    "btn-whatsapp": "Chat on WhatsApp",
    "btn-call": "Call Direct",

    // House Rules Section
    "rules-title": "House Rules",
    "rules-desc": "Please observe our homestay guidelines to ensure a comfortable stay for everyone.",
    "rules-allowed-title": "What's Welcome",
    "rule-a1": "Keep the house tidy and clean.",
    "rule-a2": "Turn off air conditioners and lights when going out.",
    "rule-a3": "Dispose of garbage in the designated outdoor bins.",
    "rule-a4": "Park vehicles responsibly within the gate.",
    "rules-not-allowed-title": "What's Prohibited",
    "rule-n1": "Strictly no smoking inside the house.",
    "rule-n2": "No pets allowed.",
    "rule-n3": "No loud parties or events after 11:00 PM.",
    "rule-n4": "No illegal activities or hazardous items.",

    // Footer
    "footer-about": "NSJay Guest House provides a comfortable, clean, and charming claymorphic stay in Kuala Besut, Terengganu, Malaysia.",
    "footer-quick-links": "Quick Links",
    "footer-contact-title": "Contact Us",
    "footer-rights": "© 2026 NSJay Guest House. All rights reserved."
  },
  ms: {
    // Navigation
    "nav-home": "Utama",
    "nav-location": "Lokasi Kami",
    "nav-layout": "Susun Atur",
    "nav-book": "Cara Tempah",
    "nav-rules": "Peraturan Homestay",
    "btn-book-now": "Tempah Sekarang",

    // Hero Section
    "hero-badge-1": "Penginapan Selesa",
    "hero-badge-1-sub": "Besut, Terengganu",
    "hero-badge-2": "Mesra Keluarga",
    "hero-badge-2-sub": "Lengkap Segala Kemudahan",
    "hero-title": "Selamat Datang ke NSJay Guest House",
    "hero-desc": "Sebuah rumah tetamu yang selesa dan lengkap di Besut, sesuai untuk percutian keluarga, percutian hujung minggu, perjalanan perniagaan, atau percutian pantai dan pulau yang santai.",
    "btn-explore": "Lihat Susun Atur",
    "btn-contact": "Hubungi Kami",

    // Location Section
    "loc-title": "Lokasi Kami",
    "loc-desc": "Terletak secara strategik di Besut, Malaysia. Sesuai untuk persinggahan atau staycation berdekatan pantai-pantai indah.",
    "loc-address-title": "Alamat",
    "loc-address-text": "Lot 1234, Jalan Pantai, Kampung Kuala Besut, 22200 Besut, Terengganu, Malaysia",
    "loc-nearby-title": "Tarikan Berhampiran",
    "loc-nearby-text": "Jeti Kuala Besut (Pintu ke Pulau Perhentian) - 5 minit memandu\nPantai Bukit Keluang & Laluan Mendaki - 10 minit memandu\nKedai Makan Seafood & Pasar Tempatan - jarak berjalan kaki",
    "loc-desc-card": "NSJay Guest House terletak di Besut, Terengganu, di kawasan yang tenang dan mudah untuk para tetamu.",
    "btn-maps-waze": "Buka Google Maps",

    // Layout Section
    "layout-title": "Susun Atur Guest House",
    "layout-tab-semid": "Rumah Semi-D (Unit 1 & 2)",
    "layout-tab-tiny": "Tiny House (Unit 3)",
    "space-living": "Ruang Tamu",
    "space-bedroom": "Bilik Tidur",
    "space-toilet": "Tandas",
    "space-dining": "Ruang Makan",

    // Layout - Semi-D House
    "layout-semid-title": "Homestay Semi-D 3-Bilik yang Luas",
    "layout-semid-desc": "Sewa keseluruhan unit rumah Semi-D kami, sangat sesuai untuk keluarga dan kumpulan besar yang inginkan keselesaan dan privasi.",
    "amenity-rooms": "3 Bilik Tidur",
    "amenity-bathrooms": "2 Bilik Air",
    "amenity-ac": "Pendingin Hawa Penuh",
    "amenity-kitchen": "Dapur Lengkap",
    "amenity-tv": "Smart TV",
    "amenity-parking": "Parkir Peribadi (2 kereta)",

    // Layout - Tiny House
    "layout-tiny-title": "Unit Tiny House yang Selesa",
    "layout-tiny-desc": "Tiny house moden kami menawarkan bilik tidur berhawa dingin yang selesa, ruang tamu dengan TV, dan ruang makan yang cantik. Sangat sesuai untuk pasangan atau keluarga kecil.",
    "amenity-tiny-bedroom": "Bilik Tidur Selesa (1 Katil Queen)",
    "amenity-tiny-living": "Ruang Tamu dengan Sofa & TV",
    "amenity-tiny-dining": "Meja Makan & Cerek Elektrik",
    "amenity-tiny-ac": "Pendingin Hawa Penuh",
    "amenity-tiny-fans": "Kipas Siling",
    "amenity-tiny-parking": "Parkir Peribadi",

    // How to Book Section
    "book-title": "Cara Menempah",
    "book-desc": "Ikuti tiga langkah mudah ini untuk mengesahkan penginapan anda.",
    "step-1-title": "Semak Tarikh",
    "step-1-desc": "Hubungi kami melalui WhatsApp atau talian telefon untuk menyemak kekosongan tarikh pilihan anda.",
    "step-2-title": "Sahkan Maklumat",
    "step-2-desc": "Hantar maklumat tetamu, tempoh menginap, dan lakukan bayaran deposit untuk pengesahan.",
    "step-3-title": "Selamat Datang ke Besut!",
    "step-3-desc": "Dapatkan info daftar masuk dan panduan kunci. Penginapan anda sedia menanti anda!",

    "action-title": "Sedia untuk menempah staycation anda?",
    "action-desc": "Tempahan terus melalui WhatsApp menjamin maklum balas pantas dan kadar harga terbaik.",
    "btn-whatsapp": "Mesej di WhatsApp",
    "btn-call": "Hubungi Terus",

    // House Rules Section
    "rules-title": "Peraturan Homestay",
    "rules-desc": "Sila patuhi panduan berikut demi keselesaan semua tetamu dan komuniti sekitar.",
    "rules-allowed-title": "Perkara Dibenarkan",
    "rule-a1": "Kekalkan kebersihan dan kekemasan rumah.",
    "rule-a2": "Tutup pendingin hawa dan lampu apabila keluar rumah.",
    "rule-a3": "Buang sampah di tong luar yang disediakan.",
    "rule-a4": "Letakkan kenderaan dengan cermat di dalam kawasan pagar.",
    "rules-not-allowed-title": "Perkara Dilarang",
    "rule-n1": "Dilarang keras merokok di dalam rumah.",
    "rule-n2": "Haiwan peliharaan tidak dibenarkan.",
    "rule-n3": "Tiada parti bising atau acara selepas jam 11:00 malam.",
    "rule-n4": "Dilarang melakukan aktiviti haram atau membawa barangan bahaya.",

    // Footer
    "footer-about": "NSJay Guest House menyediakan penginapan yang bersih, selesa, dan menarik bertemakan reka bentuk claymorphic di Kuala Besut, Terengganu.",
    "footer-quick-links": "Pautan Pantas",
    "footer-contact-title": "Hubungi Kami",
    "footer-rights": "© 2026 NSJay Guest House. Hak cipta terpelihara."
  }
};

let currentLanguage = 'en';

// Apply translation to all element with data-translate attribute
function updateLanguageUI(lang) {
  currentLanguage = lang;
  
  // Update translation attributes
  document.querySelectorAll('[data-translate]').forEach(element => {
    const translationKey = element.getAttribute('data-translate');
    if (translations[lang][translationKey]) {
      // Replace breaks with real html breaks if needed, or preserve clean content
      const text = translations[lang][translationKey];
      if (text.includes('\n')) {
        element.innerHTML = text.replace(/\n/g, '<br>');
      } else {
        element.textContent = text;
      }
    }
  });

  // Translate elements with custom bilingual attributes (data-en and data-bm)
  document.querySelectorAll('[data-en][data-bm]').forEach(element => {
    const textEn = element.getAttribute('data-en');
    const textBm = element.getAttribute('data-bm');
    const text = lang === 'en' ? textEn : textBm;
    if (text !== null) {
      if (text.includes('\n')) {
        element.innerHTML = text.replace(/\n/g, '<br>');
      } else {
        element.textContent = text;
      }
    }
  });

  // Toggle active class on language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Save selection
  localStorage.setItem('nsjay-preferred-lang', lang);
}

// Initialize JS functionality
document.addEventListener('DOMContentLoaded', () => {
  // 1. Language preference initialization
  const savedLang = localStorage.getItem('nsjay-preferred-lang');
  if (savedLang && (savedLang === 'en' || savedLang === 'ms')) {
    updateLanguageUI(savedLang);
  } else {
    updateLanguageUI('en');
  }

  // Language switcher button listeners
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const selectedLang = e.target.getAttribute('data-lang');
      updateLanguageUI(selectedLang);
    });
  });

  // 2. Mobile Menu Toggling
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Layout Tab Toggle Interaction
  const tabBtns = document.querySelectorAll('.layout-toggle-btn');
  const panes = document.querySelectorAll('.layout-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetPane = e.target.getAttribute('data-tab');
      
      // Update active button state
      tabBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');

      // Show/Hide relevant content panes
      panes.forEach(pane => {
        if (pane.id === `layout-${targetPane}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });

  // 3.5. Space Tab Toggle Interaction (Local to each Photo Tour container)
  document.querySelectorAll('.photo-tour-container').forEach(container => {
    const spaceBtns = container.querySelectorAll('.space-nav-btn');
    const spacePanes = container.querySelectorAll('.space-pane');

    spaceBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const clickedBtn = e.currentTarget;
        const targetSpace = clickedBtn.getAttribute('data-space');
        
        // Update active button state locally
        spaceBtns.forEach(b => b.classList.remove('active'));
        clickedBtn.classList.add('active');

        // Show/Hide relevant space panes locally
        spacePanes.forEach(pane => {
          if (pane.id === `space-${targetSpace}`) {
            pane.classList.add('active');
          } else {
            pane.classList.remove('active');
          }
        });
      });
    });
  });

  // 4. Header Scroll Styling Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});

// Function to change layout main image when clicking thumbnails
window.changeLayoutImage = function(thumbElement, mainImageId) {
  const mainImg = document.getElementById(mainImageId);
  if (mainImg) {
    mainImg.src = thumbElement.src;
    mainImg.alt = thumbElement.alt;
    
    // Update active class on siblings
    const parent = thumbElement.parentElement;
    parent.querySelectorAll('.layout-thumb').forEach(thumb => {
      thumb.classList.remove('active');
    });
    thumbElement.classList.add('active');
  }
};

// --- ADMIN MODE & EDITING PORTAL INTEGRATION ---
document.addEventListener('DOMContentLoaded', () => {
  let isAdminLoggedIn = false;
  let cropper = null;
  let activeImageContainer = null;
  let activeImgElement = null;

  const adminTrigger = document.getElementById('admin-trigger');
  const adminModal = document.getElementById('admin-modal');
  const adminClose = document.getElementById('admin-close');
  const adminLoginForm = document.getElementById('admin-login-form');
  const loginErrorMsg = document.getElementById('login-error-msg');
  const adminControlBar = document.getElementById('admin-control-bar');
  const btnExitAdmin = document.getElementById('btn-exit-admin');
  const btnExportCode = document.getElementById('btn-export-code');
  const btnSaveAll = document.getElementById('btn-save-all');
  const githubTokenInput = document.getElementById('github-token');

  // Photo Editor Modal elements
  const photoEditorModal = document.getElementById('photo-editor-modal');
  const photoEditorClose = document.getElementById('photo-editor-close');
  const photoEditorFile = document.getElementById('photo-editor-file');
  const photoEditorImg = document.getElementById('photo-editor-img');
  const photoEditorSave = document.getElementById('photo-editor-save');
  const photoEditorCancel = document.getElementById('photo-editor-cancel');
  
  const resizeWidthInput = document.getElementById('photo-resize-width');
  const resizeHeightInput = document.getElementById('photo-resize-height');
  const widthValLabel = document.getElementById('photo-width-val');
  const heightValLabel = document.getElementById('photo-height-val');

  // Load saved token from localStorage if available
  const savedToken = localStorage.getItem('nsjay-github-token');
  if (savedToken && githubTokenInput) {
    githubTokenInput.value = savedToken;
  }

  if (githubTokenInput) {
    githubTokenInput.addEventListener('input', () => {
      localStorage.setItem('nsjay-github-token', githubTokenInput.value.trim());
    });
  }

  // Toggle Login Modal
  if (adminTrigger) {
    adminTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      adminModal.classList.remove('hidden');
    });
  }

  if (adminClose) {
    adminClose.addEventListener('click', () => {
      adminModal.classList.add('hidden');
      if (loginErrorMsg) loginErrorMsg.classList.add('hidden');
    });
  }

  // Admin Login Handle
  if (adminLoginForm) {
    adminLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('admin-username').value.trim();
      const password = document.getElementById('admin-password').value;

      // Local mock login credentials check
      if (username.toLowerCase() === 'nsjayguesthouse') {
        enterAdminMode();
        adminModal.classList.add('hidden');
      } else {
        if (loginErrorMsg) {
          loginErrorMsg.textContent = 'Invalid credentials. Try again.';
          loginErrorMsg.classList.remove('hidden');
        }
      }
    });
  }

  function enterAdminMode() {
    isAdminLoggedIn = true;
    document.body.classList.add('admin-mode');
    if (adminControlBar) adminControlBar.classList.remove('hidden');

    // Make elements with data-en/data-bm and editable-text contenteditable
    const editables = document.querySelectorAll('.editable-text, [data-en][data-bm]');
    editables.forEach(el => {
      // Don't make SVGs, images, inputs or wrapper blocks contenteditable
      if (['SVG', 'PATH', 'IMG', 'INPUT', 'BUTTON', 'FORM'].includes(el.tagName)) return;
      el.setAttribute('contenteditable', 'plaintext-only');
      el.classList.add('focus:outline-none', 'focus:ring-2', 'focus:ring-blue-400/50', 'rounded-lg', 'transition-all');

      // Blur handler to update the correct language attribute value dynamically
      el.addEventListener('blur', () => {
        const text = el.textContent.trim();
        if (currentLanguage === 'en') {
          el.setAttribute('data-en', text);
        } else {
          el.setAttribute('data-bm', text);
        }
      });
    });

    // Wire click triggers on image containers
    document.querySelectorAll('.editable-img-container').forEach(container => {
      container.classList.add('hover:ring-4', 'hover:ring-blue-400/50', 'transition-all');
      container.addEventListener('click', handleImageContainerClick);
    });
  }

  function exitAdminMode() {
    isAdminLoggedIn = false;
    document.body.classList.remove('admin-mode');
    if (adminControlBar) adminControlBar.classList.add('hidden');

    const editables = document.querySelectorAll('.editable-text, [data-en][data-bm]');
    editables.forEach(el => {
      el.removeAttribute('contenteditable');
      el.classList.remove('focus:outline-none', 'focus:ring-2', 'focus:ring-blue-400/50');
    });

    document.querySelectorAll('.editable-img-container').forEach(container => {
      container.classList.remove('hover:ring-4', 'hover:ring-blue-400/50');
      container.removeEventListener('click', handleImageContainerClick);
    });
  }

  if (btnExitAdmin) {
    btnExitAdmin.addEventListener('click', exitAdminMode);
  }

  // Handle click on image containers
  function handleImageContainerClick(e) {
    if (!isAdminLoggedIn) return;
    activeImageContainer = e.currentTarget;
    activeImgElement = activeImageContainer.querySelector('img');
    
    // Open photo editor modal
    if (photoEditorModal) {
      photoEditorModal.classList.remove('hidden');
      if (photoEditorFile) photoEditorFile.value = '';
      if (photoEditorImg) {
        photoEditorImg.src = activeImgElement.src.startsWith('data:') ? activeImgElement.src : 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="100" height="100" fill="%23eee"/></svg>';
      }
      if (cropper) {
        cropper.destroy();
        cropper = null;
      }
    }
  }

  // File selection inside photo editor
  if (photoEditorFile) {
    photoEditorFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
          if (cropper) cropper.destroy();
          photoEditorImg.src = event.target.result;
          
          photoEditorImg.onload = () => {
            cropper = new Cropper(photoEditorImg, {
              aspectRatio: 4 / 3,
              viewMode: 1,
              ready() {
                const data = cropper.getImageData();
                if (resizeWidthInput && resizeHeightInput) {
                  resizeWidthInput.value = Math.round(data.naturalWidth);
                  resizeHeightInput.value = Math.round(data.naturalHeight);
                  if (widthValLabel) widthValLabel.textContent = Math.round(data.naturalWidth) + 'px';
                  if (heightValLabel) heightValLabel.textContent = Math.round(data.naturalHeight) + 'px';
                }
              }
            });
            photoEditorImg.onload = null;
          };
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Ratio Buttons setup
  document.querySelectorAll('.photo-ratio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!cropper) return;
      const ratio = parseFloat(btn.getAttribute('data-ratio'));
      cropper.setAspectRatio(isNaN(ratio) ? NaN : ratio);
    });
  });

  // Aspect Ratio dimensions ranges change
  if (resizeWidthInput) {
    resizeWidthInput.addEventListener('input', () => {
      if (widthValLabel) widthValLabel.textContent = resizeWidthInput.value + 'px';
    });
  }
  if (resizeHeightInput) {
    resizeHeightInput.addEventListener('input', () => {
      if (heightValLabel) heightValLabel.textContent = resizeHeightInput.value + 'px';
    });
  }

  // Photo editor save
  if (photoEditorSave) {
    photoEditorSave.addEventListener('click', async () => {
      if (!cropper || !activeImgElement) return;

      const width = resizeWidthInput ? parseInt(resizeWidthInput.value) : undefined;
      const height = resizeHeightInput ? parseInt(resizeHeightInput.value) : undefined;

      const canvas = cropper.getCroppedCanvas({
        width: width,
        height: height
      });

      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      
      const token = githubTokenInput ? githubTokenInput.value.trim() : '';
      if (token) {
        // We have a token: attempt to upload directly to GitHub as a binary file first!
        showLoadingOverlay(true, 'Uploading image to GitHub...');
        try {
          const base64Data = dataUrl.split(',')[1];
          const filename = `images/uploaded_img_${Date.now()}.jpeg`;
          
          const repo = 'hafniawatif/nsjayguesthouse.github.io';
          const uploadUrl = `https://api.github.com/repos/${repo}/contents/${filename}`;
          
          const response = await fetch(uploadUrl, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${token}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify({
              message: `Update ${filename} via Admin Portal`,
              content: base64Data
            })
          });

          if (!response.ok) throw new Error('Image upload failed');

          activeImgElement.src = filename;
          activeImgElement.classList.remove('opacity-0');
        } catch (err) {
          alert('Failed to upload image file to GitHub. Fallback to base64 encoding inside HTML.');
          activeImgElement.src = dataUrl;
          activeImgElement.classList.remove('opacity-0');
        } finally {
          showLoadingOverlay(false);
        }
      } else {
        // No token: save locally as base64 inside DOM (user can save it when clicking Save All)
        activeImgElement.src = dataUrl;
        activeImgElement.classList.remove('opacity-0');
      }

      closePhotoEditor();
    });
  }

  function closePhotoEditor() {
    if (photoEditorModal) photoEditorModal.classList.add('hidden');
    if (cropper) {
      cropper.destroy();
      cropper = null;
    }
  }

  if (photoEditorCancel) photoEditorCancel.addEventListener('click', closePhotoEditor);
  if (photoEditorClose) photoEditorClose.addEventListener('click', closePhotoEditor);

  // Save all changes directly to GitHub
  if (btnSaveAll) {
    btnSaveAll.addEventListener('click', async () => {
      const token = githubTokenInput ? githubTokenInput.value.trim() : '';
      if (!token) {
        alert('Please enter a GitHub Personal Access Token (PAT) first.');
        return;
      }

      if (!confirm('Are you sure you want to commit these changes to the GitHub repository?')) {
        return;
      }

      showLoadingOverlay(true, 'Updating index.html on GitHub...');

      try {
        // Prepare clean HTML
        // Temporarily exit admin mode to get clean HTML representation without editor UI highlights
        const wasAdmin = isAdminLoggedIn;
        if (wasAdmin) exitAdminMode();

        // Parse outerHTML
        let cleanHtml = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;

        // Restore admin mode locally if it was active
        if (wasAdmin) enterAdminMode();

        const repo = 'hafniawatif/nsjayguesthouse.github.io';
        const fileUrl = `https://api.github.com/repos/${repo}/contents/index.html`;

        // 1. Get current SHA of index.html
        const getFileResponse = await fetch(fileUrl, {
          headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        if (!getFileResponse.ok) throw new Error('Could not retrieve current index.html information from GitHub');
        const fileData = await getFileResponse.json();
        const sha = fileData.sha;

        // 2. Commit updated index.html
        const base64Content = btoa(unescape(encodeURIComponent(cleanHtml)));
        const commitResponse = await fetch(fileUrl, {
          method: 'PUT',
          headers: {
            'Authorization': `token ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/vnd.github.v3+json'
          },
          body: JSON.stringify({
            message: 'Update index.html via Admin Portal',
            content: base64Content,
            sha: sha
          })
        });

        if (!commitResponse.ok) throw new Error('Failed to update index.html on GitHub');

        alert('Changes saved successfully to GitHub!');
      } catch (err) {
        alert(`Error: ${err.message}`);
      } finally {
        showLoadingOverlay(false);
      }
    });
  }

  // Export Code utility
  if (btnExportCode) {
    btnExportCode.addEventListener('click', () => {
      const wasAdmin = isAdminLoggedIn;
      if (wasAdmin) exitAdminMode();
      
      const cleanHtml = '<!DOCTYPE html>\n' + document.documentElement.outerHTML;
      
      if (wasAdmin) enterAdminMode();

      const blob = new Blob([cleanHtml], { type: 'text/html' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'index.html';
      a.click();
    });
  }

  function showLoadingOverlay(show, text = '') {
    const overlay = document.getElementById('loading-overlay');
    if (!overlay) return;
    if (show) {
      overlay.classList.remove('hidden');
      const textEl = overlay.querySelector('p');
      if (textEl && text) textEl.textContent = text;
    } else {
      overlay.classList.add('hidden');
    }
  }

  // Hide loading overlay by default
  showLoadingOverlay(false);
});

