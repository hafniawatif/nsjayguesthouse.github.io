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
    "layout-desc": "Choose the perfect configuration for your stay. We offer spacious rooms designed for comfort and relaxation.",
    "layout-tab-entire": "Entire House",
    "layout-tab-master": "Master Bedroom",
    "layout-tab-living": "Living Area",
    
    // Layout - Entire House
    "layout-entire-title": "Spacious 3-Bedroom Homestay",
    "layout-entire-desc": "Rent the entire guest house for maximum privacy. Ideal for families and groups looking for a complete home experience.",
    "amenity-rooms": "3 Bedrooms",
    "amenity-bathrooms": "2 Bathrooms",
    "amenity-ac": "Fully Air-Conditioned",
    "amenity-kitchen": "Equipped Kitchen",
    "amenity-tv": "Smart TV",
    "amenity-parking": "Private Parking (2 cars)",

    // Layout - Master Bedroom
    "layout-master-title": "Master Bedroom Cozy Suite",
    "layout-master-desc": "Features a comfortable King-size bed, private attached bathroom, and peaceful garden views.",
    "amenity-kingbed": "King-Sized Bed",
    "amenity-ensuite": "Attached Bathroom",
    "amenity-closet": "Wardrobe & Hangers",
    "amenity-vanity": "Vanity Table & Mirror",

    // Layout - Living Area
    "layout-living-title": "Comfortable Shared Spaces",
    "layout-living-desc": "Relax in our warm living hall complete with cozy sofas, dining table, and direct access to the kitchen.",
    "amenity-sofas": "Plush Sofas",
    "amenity-dining": "6-Seater Dining Set",
    "amenity-fridge": "Large Refrigerator",
    "amenity-water": "Water Dispenser",

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
    "layout-desc": "Pilih susunan bilik terbaik untuk penginapan anda. Kami menawarkan bilik luas yang direka untuk keselesaan.",
    "layout-tab-entire": "Keseluruhan Rumah",
    "layout-tab-master": "Bilik Utama",
    "layout-tab-living": "Ruang Tamu",

    // Layout - Entire House
    "layout-entire-title": "Homestay Luas 3 Bilik",
    "layout-entire-desc": "Sewa keseluruhan rumah untuk privasi penuh. Sangat sesuai untuk keluarga dan kumpulan besar.",
    "amenity-rooms": "3 Bilik Tidur",
    "amenity-bathrooms": "2 Bilik Air",
    "amenity-ac": "Pendingin Hawa Penuh",
    "amenity-kitchen": "Dapur Lengkap",
    "amenity-tv": "Smart TV",
    "amenity-parking": "Parkir Peribadi (2 kereta)",

    // Layout - Master Bedroom
    "layout-master-title": "Bilik Tidur Utama Cozy",
    "layout-master-desc": "Dilengkapi dengan katil bersaiz King, bilik air peribadi di dalam, dan pemandangan taman yang tenang.",
    "amenity-kingbed": "Katil Bersaiz King",
    "amenity-ensuite": "Bilik Air attached",
    "amenity-closet": "Almari Pakaian & Penyangkut",
    "amenity-vanity": "Meja Solek & Cermin",

    // Layout - Living Area
    "layout-living-title": "Ruang Berkongsi Selesa",
    "layout-living-desc": "Bersantai di ruang tamu kami yang selesa lengkap dengan sofa empuk, meja makan, dan akses terus ke dapur.",
    "amenity-sofas": "Sofa Empuk",
    "amenity-dining": "Meja Makan 6 Kerusi",
    "amenity-fridge": "Peti Sejuk Besar",
    "amenity-water": "Penapis Air",

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
