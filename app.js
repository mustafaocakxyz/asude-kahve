const CAFE = {
  name: "Asude Kahve",
  tagline: "Sükûnetin ve lezzetin adresi.",
  phone: "+905466659199",
  phoneLabel: "0546 665 91 99",
  email: "asudekahve@gmail.com",
  address: "Merkez Mahallesi İskele Caddesi, Kızıl Mescit Sk. No: 2A, 34050 Eyüpsultan / İstanbul",
  maps: "https://www.google.com/maps/search/?api=1&query=Asude%20Kahve%20K%C4%B1z%C4%B1l%20Mescit%20Sk.%20No%3A%202A%20Ey%C3%BCpsultan",
  hours: "10:00 – 23:00",
};

const CATEGORIES = [
  { id: "tatli", name: "Tatlılar", image: "images/antep-san-sebastian.jpg" },
  { id: "soguk", name: "Soğuk İçecekler", image: "images/iced-asude-latte.jpg" },
  { id: "sicak", name: "Sıcak İçecekler", image: "images/cappuccino.jpg" },
  { id: "ekstra", name: "Ekstralar", image: "images/cay.jpg" },
];

const PRODUCTS = [
  { id: "cilekli-magnolia", cat: "tatli", name: "Çilekli Magnolya", desc: "Vanilyalı magnolia, bisküvi kırığı ve çilek.", kcal: 450, price: 250, image: "images/cilekli-magnolia.jpg" },
  { id: "muzlu-magnolia", cat: "tatli", name: "Muzlu Magnolya", desc: "Vanilyalı magnolia, bisküvi kırığı ve muz.", kcal: 480, price: 250, image: "images/muzlu-magnolia.jpg" },
  { id: "tiramisu", cat: "tatli", name: "Tiramisu", desc: "Kedidili, mascarpone krema ve espresso ile.", kcal: 430, price: 240, image: "images/tiramisu.jpg" },
  { id: "cookie", cat: "tatli", name: "Çikolatalı Cookie", desc: "Çikolatalı cookie, üzeri Belçika çikolatası ile (isteğe bağlı).", kcal: 350, price: 160, image: "images/cookie.jpg" },
  { id: "profiterol", cat: "tatli", name: "Profiterol", desc: "Choux hamuru, kadifemsi pastacı kreması ve akışkan çikolata sosu.", kcal: 500, price: 260, image: "images/profiterol.jpg" },
  { id: "cikolatali-pasta", cat: "tatli", name: "Çikolatalı Pasta", desc: "Kakaolu kek, akışkan çikolatalı krema ve kıtır fındık parçaları.", kcal: 550, price: 270, image: "images/cikolatali-pasta.jpg" },
  { id: "frambuaz-cheesecake", cat: "tatli", name: "Frambuaz Cheesecake", desc: "Vanilyalı cheesecake üzeri frambuaz dolgu, tereyağlı bisküvi kırığı.", kcal: 520, price: 260, image: "images/frambuaz-cheesecake.jpg" },
  { id: "lotus-cheesecake", cat: "tatli", name: "Lotus Cheesecake", desc: "Vanilyalı cheesecake üzeri lotus kreması.", kcal: 600, price: 270, image: "images/lotus-cheesecake.jpg" },
  { id: "asude-ruyasi", cat: "tatli", name: "Asude Rüyası", desc: "Antep fıstıklı çıtır kadayıf, Callebaut sütlü çikolata, fıstıklı pralin ve magnolia.", kcal: 650, price: 300, image: "images/asude-ruyasi.jpg" },
  { id: "kazandibi", cat: "tatli", name: "Kazandibi", desc: "Karamelize dış yüzeyi ve ipeksi dokusuyla geleneksel sütlü muhallebi.", kcal: 300, price: 240, image: "images/kazandibi.jpg" },
  { id: "trilece", cat: "tatli", name: "Trileçe", desc: "Üç farklı sütün eşsiz uyumuyla hazırlanan, hafif ve süngerimsi keki, yoğun süt şerbeti ve nefis karamel sosu ile hafif bir tatlı klasiği.", kcal: 400, price: 240, image: "images/trilece.jpg" },
  { id: "brownie", cat: "tatli", name: "Beyaz Çikolatalı Brownie", desc: "Arasında beyaz çikolata, sütlü Belçika çikolatası ile servis edilir.", kcal: 550, price: 290, image: "images/brownie.jpg" },
  { id: "cikolatali-san-sebastian", cat: "tatli", name: "Çikolatalı San Sebastian", desc: "Karamelize dış yüzey, yoğun kremamsı doku ve akışkan iç kıvam, çikolata sos ile servis edilir.", kcal: 600, price: 290, image: "images/cikolatali-san-sebastian.jpg" },
  { id: "antep-san-sebastian", cat: "tatli", name: "Antep Fıstıklı San Sebastian", desc: "Karamelize dış yüzey, yoğun kremamsı doku ve akışkan iç kıvam, antep fıstığı sos ve kadayıf parçaları ile servis edilir.", kcal: 650, price: 300, image: "images/antep-san-sebastian.jpg" },
  { id: "lotus-san-sebastian", cat: "tatli", name: "Lotus San Sebastian", desc: "Karamelize dış yüzey, yoğun kremamsı doku ve akışkan iç kıvam, lotus sos ile servis edilir.", kcal: 650, price: 290, image: "images/lotus-san-sebastian.jpg" },

  { id: "iced-latte", cat: "soguk", name: "Ice Latte", desc: "", kcal: 280, price: 190, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-americano", cat: "soguk", name: "Ice Americano", desc: "", kcal: 10, price: 160, image: "images/iced-americano.jpg" },
  { id: "iced-karamel-latte", cat: "soguk", name: "Ice Karamel Latte", desc: "", kcal: 280, price: 210, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-pumpkin-spice-latte", cat: "soguk", name: "Ice Pumpkin Spice Latte", desc: "", kcal: 280, price: 210, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-vanilya-latte", cat: "soguk", name: "Ice Vanilya Latte", desc: "", kcal: 280, price: 210, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-findik-latte", cat: "soguk", name: "Ice Fındık Latte", desc: "", kcal: 280, price: 210, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-lotus-latte", cat: "soguk", name: "Ice Lotus Latte", desc: "", kcal: 280, price: 210, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-spanish-latte", cat: "soguk", name: "Ice Spanish Latte", desc: "", kcal: 280, price: 220, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-toffee-nut-latte", cat: "soguk", name: "Ice Toffee Nut Latte", desc: "", kcal: 280, price: 220, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-white-mocha", cat: "soguk", name: "Ice White Mocha", desc: "", kcal: 280, price: 220, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-creme-brulee", cat: "soguk", name: "Ice Crème Brûlée", desc: "", kcal: 280, price: 220, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-mocha", cat: "soguk", name: "Ice Mocha", desc: "", kcal: 280, price: 220, image: "images/iced-latte-cesitleri.jpg" },
  { id: "iced-asude-latte", cat: "soguk", name: "Ice Asude Latte", desc: "", kcal: 280, price: 220, image: "images/iced-asude-latte.jpg" },
  { id: "ice-tea-seftali", cat: "soguk", name: "Ice Tea Şeftali", desc: "", kcal: 100, price: 150, image: "images/ice-tea.jpg" },
  { id: "ice-tea-limon", cat: "soguk", name: "Ice Tea Limon", desc: "", kcal: 100, price: 150, image: "images/ice-tea.jpg" },
  { id: "mango-dragon", cat: "soguk", name: "Mango & Dragon", desc: "Ejder meyvesinin göz alıcı rengi ve mangonun yoğun tropikal tatlılığının ferahlatıcı bir dokunuşla birleştiği, canlı ve egzotik bir lezzet.", kcal: 180, price: 210, image: "images/mango-dragon.jpg" },
  { id: "passion-guava", cat: "soguk", name: "Passion & Guava", desc: "Çarkıfelek meyvesi ve guavanın tropikal uyumu. Ferahlatıcı bir dokunuşla birleşen, dengeli, canlandırıcı ve akılda kalan bir tat.", kcal: 180, price: 210, image: "images/passion-guava.jpg" },
  { id: "mango-coconut", cat: "soguk", name: "Mango & Coconut", desc: "Hindistan cevizinin kremsi dokunuşu ve mangonun zengin tatlılığıyla harmanlanmış, her yudumda ferahlık sunan egzotik bir tat.", kcal: 250, price: 230, image: "images/mango-coconut.jpg" },
  { id: "bitter-orange", cat: "soguk", name: "Bitter Orange & Strawberry", desc: "Çileğin canlı aroması ve bitter portakalın aromatik dokunuşuyla harmanlanmış; ferahlatıcı, dengeli ve gurme bir lezzet.", kcal: 180, price: 230, image: "images/bitter-orange.jpg" },
  { id: "mandarin-guava", cat: "soguk", name: "Mandarin & Guava", desc: "Mandalinanın canlandırıcı, taze narenciye notaları ve guavanın yumuşak tropikal aromasıyla dengelenmiş, hafif ve akılda kalan bir lezzet.", kcal: 180, price: 230, image: "images/mandarin-guava.jpg" },
  { id: "cilekli-milkshake", cat: "soguk", name: "Çilekli Milkshake", desc: "", kcal: 450, price: 220, image: "images/cilekli-milkshake.jpg" },
  { id: "berry-hibiscus", cat: "soguk", name: "Berry Hibiscus", desc: "Zengin kırmızı meyve aromaları ve hibiskusun zarif dokunuşuyla harmanlanmış, ferahlatıcı ve canlandırıcı bir lezzet.", kcal: 120, price: 200, image: "images/berry-hibiscus.jpg" },
  { id: "limonata", cat: "soguk", name: "Limonata", desc: "", kcal: 150, price: 150, image: "images/limonata.jpg" },
  { id: "cilekli-limonata", cat: "soguk", name: "Çilekli Limonata", desc: "", kcal: 200, price: 180, image: "images/cilekli-limonata.jpg" },
  { id: "portakal-suyu", cat: "soguk", name: "Portakal Suyu", desc: "", kcal: 180, price: 150, image: "images/portakal-suyu.jpg" },

  { id: "espresso", cat: "sicak", name: "Espresso", desc: "", kcal: 5, price: 135, image: "images/espresso.jpg" },
  { id: "cappuccino", cat: "sicak", name: "Cappuccino", desc: "", kcal: 120, price: 190, image: "images/cappuccino.jpg" },
  { id: "cortado", cat: "sicak", name: "Cortado", desc: "", kcal: 80, price: 170, image: "images/cortado.jpg" },
  { id: "filtre-kahve", cat: "sicak", name: "Filtre Kahve", desc: "Günün her saati taze çekilmiş ve demlenmiş blend filtre kahve.", kcal: 5, price: 140, image: "images/filtre-kahve.jpg" },
  { id: "turk-kahvesi", cat: "sicak", name: "Türk Kahvesi", desc: "", kcal: 5, price: 125, image: "images/turk-kahvesi.jpg" },
  { id: "double-turk-kahvesi", cat: "sicak", name: "Double Türk Kahvesi", desc: "", kcal: 10, price: 145, image: "images/double-turk-kahvesi.jpg" },
  { id: "cafe-latte", cat: "sicak", name: "Latte", desc: "", kcal: 150, price: 190, image: "images/cafe-latte.jpg" },
  { id: "espresso-macchiato", cat: "sicak", name: "Macchiato", desc: "", kcal: 40, price: 150, image: "images/espresso-macchiato.jpg" },
  { id: "spanish-latte", cat: "sicak", name: "Spanish Latte", desc: "", kcal: 250, price: 220, image: "images/latte-cesitleri.jpg" },
  { id: "pumpkin-spice-latte", cat: "sicak", name: "Pumpkin Spice Latte", desc: "", kcal: 250, price: 210, image: "images/latte-cesitleri.jpg" },
  { id: "karamel-latte", cat: "sicak", name: "Karamel Latte", desc: "", kcal: 250, price: 210, image: "images/latte-cesitleri.jpg" },
  { id: "vanilya-latte", cat: "sicak", name: "Vanilya Latte", desc: "", kcal: 250, price: 210, image: "images/latte-cesitleri.jpg" },
  { id: "findik-latte", cat: "sicak", name: "Fındık Latte", desc: "", kcal: 250, price: 210, image: "images/latte-cesitleri.jpg" },
  { id: "lotus-latte", cat: "sicak", name: "Lotus Latte", desc: "", kcal: 250, price: 210, image: "images/latte-cesitleri.jpg" },
  { id: "asude-latte", cat: "sicak", name: "Asude Latte", desc: "", kcal: 250, price: 220, image: "images/latte-cesitleri.jpg" },
  { id: "white-chocolate-latte", cat: "sicak", name: "White Chocolate Mocha", desc: "", kcal: 250, price: 220, image: "images/latte-cesitleri.jpg" },
  { id: "creme-brulee-latte", cat: "sicak", name: "Crème Brûlée", desc: "", kcal: 250, price: 220, image: "images/latte-cesitleri.jpg" },

  { id: "cay", cat: "ekstra", name: "Çay", desc: "", kcal: 2, price: 50, image: "images/cay.jpg" },
  { id: "fincan-cay", cat: "ekstra", name: "Fincan Çay", desc: "", kcal: 2, price: 70, image: "images/fincan-cay.jpg" },
];

const I = {
  back: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>',
  search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3-3"/></svg>',
  home: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  chat: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  info: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v6"/><path d="M12 8h.01"/></svg>',
  pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  phone: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.55 2.81.68A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>',
};

const DAYS = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
const app = document.querySelector("#app");
let rating = 5;

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[ch]));
}

function catById(id) {
  return CATEGORIES.find((category) => category.id === id);
}

function productById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function inCategory(id) {
  return PRODUCTS.filter((product) => product.cat === id);
}

function norm(value) {
  return value.toLocaleLowerCase("tr-TR");
}

function priceLabel(product) {
  return `${product.price} ₺`;
}

function metaLabel(product) {
  const calories = product.kcal != null ? `<span class="cal">${product.kcal} kcal</span>` : "";
  return `<span class="meta"><span class="kcal">${esc(priceLabel(product))}</span>${calories}</span>`;
}

function itemRow(product) {
  const desc = product.desc ? `<p>${esc(product.desc)}</p>` : "";
  return `<a class="item" href="#/p/${product.id}">
    <img src="${esc(product.image)}" alt="${esc(product.name)}">
    <div class="item-body">
      <h3>${esc(product.name)}</h3>
      ${desc}
      ${metaLabel(product)}
    </div>
  </a>`;
}

function nav(active) {
  const tab = (id, href, icon, label) =>
    `<a href="${href}" class="${active === id ? "active" : ""}" ${active === id ? 'aria-current="page"' : ""}>${icon}<span>${label}</span></a>`;
  return `<nav class="nav">
    ${tab("menu", "#/menu", I.home, "Ana Sayfa")}
    ${tab("geri", "#/geri-bildirim", I.chat, "Geri Bildirim")}
    ${tab("bilgi", "#/bilgi", I.info, "Bilgi")}
  </nav>`;
}

function shell(inner, active) {
  return `<div class="shell"><div class="bg"></div><div class="frame">${inner}</div>${nav(active)}</div>`;
}

function iconLink(href, label, icon) {
  return `<a class="icon-btn" href="${href}" aria-label="${label}">${icon}</a>`;
}

function splash() {
  return `<div class="splash">
    <header class="topbar">ASUDE KAHVE</header>
    <section class="hero">
      <img class="hero-bg" src="images/cappuccino.jpg" alt="">
      <div class="hero-shade"></div>
      <div class="splash-logo"><img src="images/logo.jpg" alt="Asude Kahve"></div>
      <div class="socials">
        <a href="tel:${CAFE.phone}" aria-label="Telefon">${I.phone}</a>
        <a href="${CAFE.maps}" target="_blank" rel="noopener" aria-label="Harita">${I.pin}</a>
        <a href="mailto:${CAFE.email}" aria-label="E-posta">${I.mail}</a>
      </div>
      <div class="ctas">
        <a class="btn primary" href="#/menu">Menüyü Görüntüle</a>
        <a class="btn ghost" href="${CAFE.maps}" target="_blank" rel="noopener">${I.pin} Bizi Değerlendir</a>
      </div>
    </section>
  </div>`;
}

function menuHome() {
  const cards = CATEGORIES.map((category) =>
    `<a class="card" href="#/c/${category.id}">
      <img src="${esc(category.image)}" alt="">
      <span>${esc(category.name)}</span>
    </a>`).join("");
  return shell(`
    <header class="home-head">
      ${iconLink("#/", "Geri", I.back)}
      <div class="logo-badge"><img src="images/logo.jpg" alt=""></div>
      ${iconLink("#/ara", "Ara", I.search)}
    </header>
    <div class="intro">
      <h1>${esc(CAFE.name)}</h1>
      <p>${esc(CAFE.tagline)}</p>
    </div>
    <div class="grid">${cards}</div>`, "menu");
}

function categoryView(id) {
  const category = catById(id);
  if (!category) return menuHome();
  const items = inCategory(id);
  const seen = new Set();
  const featured = [];
  items.forEach((product) => {
    if (seen.has(product.image) || featured.length >= 6) return;
    seen.add(product.image);
    featured.push(product);
  });
  const chips = CATEGORIES.map((entry) =>
    `<a class="chip ${entry.id === id ? "active" : ""}" href="#/c/${entry.id}">${esc(entry.name)}</a>`).join("");
  const slides = featured.map((product) =>
    `<a href="#/p/${product.id}"><img src="${esc(product.image)}" alt="${esc(product.name)}"></a>`).join("");
  return shell(`
    <header class="bar">
      ${iconLink("#/menu", "Geri", I.back)}
      <h1>Asude Kahve</h1>
      ${iconLink("#/ara", "Ara", I.search)}
    </header>
    <div class="chips">${chips}</div>
    <div class="featured">${slides}</div>
    <div class="list">${items.map(itemRow).join("")}</div>
    <p class="note vat">Fiyatlarımıza KDV dahildir.</p>`, "menu");
}

function productView(id) {
  const product = productById(id);
  if (!product) return menuHome();
  const category = catById(product.cat);
  const similar = inCategory(product.cat).filter((entry) => entry.id !== product.id).slice(0, 8);
  const desc = product.desc ? `<p class="desc">${esc(product.desc)}</p>` : "";
  const more = similar.length
    ? `<h2 class="section-title">Benzer lezzetler</h2>
      <div class="similar">${similar.map((entry) =>
        `<a href="#/p/${entry.id}">
          <img src="${esc(entry.image)}" alt="">
          <strong>${esc(entry.name)}</strong>
          <em>${esc(priceLabel(entry))}</em>
        </a>`).join("")}</div>`
    : "";
  return shell(`
    <header class="bar">
      ${iconLink(`#/c/${category.id}`, "Geri", I.back)}
      <h1 class="product-title">${esc(product.name)}</h1>
      <span></span>
    </header>
    <div class="product-hero"><img src="${esc(product.image)}" alt="${esc(product.name)}"></div>
    <div class="sheet">
      ${metaLabel(product)}
      ${desc}
    </div>
    ${more}`, "menu");
}

function resultMarkup(query) {
  const q = norm(query.trim());
  if (!q) {
    return CATEGORIES.map((category) => {
      const items = inCategory(category.id);
      return `<div class="group-label">${esc(category.name)}</div><div class="list">${items.map(itemRow).join("")}</div>`;
    }).join("");
  }
  const hits = PRODUCTS.filter((product) => norm(`${product.name} ${product.desc}`).includes(q));
  if (!hits.length) return `<p class="empty">“${esc(query.trim())}” için sonuç yok.</p>`;
  return `<div class="list">${hits.map(itemRow).join("")}</div>`;
}

function searchView() {
  return shell(`
    <header class="bar">
      ${iconLink("#/menu", "Geri", I.back)}
      <h1>Ara</h1>
      <span></span>
    </header>
    <div class="search-wrap">
      <input id="q" type="search" placeholder="Kahve, tatlı veya içecek ara" enterkeyhint="search" autocomplete="off">
    </div>
    <div id="results">${resultMarkup("")}</div>`, "menu");
}

function infoView() {
  const rows = DAYS.map((day) => `<tr><td>${day}</td><td>${esc(CAFE.hours)}</td></tr>`).join("");
  return shell(`
    <header class="bar">
      ${iconLink("#/menu", "Geri", I.back)}
      <h1>Bilgi</h1>
      <span></span>
    </header>
    <section class="panel">
      <h2>${esc(CAFE.name)}</h2>
      <div class="facts">
        <div>${I.pin}<div><small>Adres</small><b>${esc(CAFE.address)}</b></div></div>
        <a href="tel:${CAFE.phone}">${I.phone}<div><small>Telefon</small><b>${esc(CAFE.phoneLabel)}</b></div></a>
        <a href="mailto:${CAFE.email}">${I.mail}<div><small>E-posta</small><b>${esc(CAFE.email)}</b></div></a>
        <div>${I.clock}<div><small>Saatler</small><b>Her gün ${esc(CAFE.hours)}</b></div></div>
      </div>
      <table class="hours">${rows}</table>
      <a class="btn solid" href="${CAFE.maps}" target="_blank" rel="noopener">${I.pin} Yol tarifi</a>
      <p class="note">Kalori değerleri porsiyon başına yaklaşık bilgidir.</p>
    </section>`, "bilgi");
}

function feedbackView() {
  const stars = [1, 2, 3, 4, 5].map((value) =>
    `<button type="button" data-star="${value}" class="${value <= rating ? "on" : ""}" aria-label="${value} yıldız">★</button>`).join("");
  return shell(`
    <header class="bar">
      ${iconLink("#/menu", "Geri", I.back)}
      <h1>Geri Bildirim</h1>
      <span></span>
    </header>
    <section class="panel">
      <h2>Nasıldık?</h2>
      <p class="note">Puanınız e-posta taslağı olarak ${esc(CAFE.email)} adresine gider. Yorumun Google’da görünmesi için haritadaki değerlendirmeyi de kullanabilirsiniz.</p>
      <form id="feedback">
        <div class="stars" role="group" aria-label="Puan">${stars}</div>
        <textarea id="note" placeholder="Kısaca neyi sevdiniz?"></textarea>
        <p><button class="btn solid" type="submit">Gönder</button></p>
      </form>
      <p><a class="btn ghost" href="${CAFE.maps}" target="_blank" rel="noopener">${I.pin} Google’da değerlendir</a></p>
      <p id="thanks" class="thanks" hidden>Teşekkürler. E-posta uygulamanız açıldı.</p>
    </section>`, "geri");
}

function paint(html, title) {
  app.innerHTML = html;
  document.title = title;
  window.scrollTo(0, 0);
  document.querySelector(".chip.active")?.scrollIntoView({ inline: "center", block: "nearest" });
}

function render() {
  const hash = location.hash || "#/";
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [head, arg] = parts;

  if (!head) {
    paint(splash(), "Asude Kahve");
    return;
  }
  if (head === "menu") {
    paint(menuHome(), "Asude Kahve | Menü");
    return;
  }
  if (head === "c") {
    const category = catById(arg);
    paint(categoryView(arg), category ? `${category.name} | Asude Kahve` : "Asude Kahve");
    return;
  }
  if (head === "p") {
    const product = productById(arg);
    paint(productView(arg), product ? `${product.name} | Asude Kahve` : "Asude Kahve");
    return;
  }
  if (head === "ara") {
    paint(searchView(), "Ara | Asude Kahve");
    const input = document.querySelector("#q");
    input?.focus();
    return;
  }
  if (head === "bilgi") {
    paint(infoView(), "Bilgi | Asude Kahve");
    return;
  }
  if (head === "geri-bildirim") {
    paint(feedbackView(), "Geri Bildirim | Asude Kahve");
    return;
  }
  paint(splash(), "Asude Kahve");
}

document.body.addEventListener("click", (event) => {
  const star = event.target.closest("[data-star]");
  if (!star) return;
  rating = Number(star.dataset.star);
  document.querySelectorAll("[data-star]").forEach((button) => {
    button.classList.toggle("on", Number(button.dataset.star) <= rating);
  });
});

document.body.addEventListener("input", (event) => {
  if (event.target.id !== "q") return;
  const results = document.querySelector("#results");
  if (results) results.innerHTML = resultMarkup(event.target.value);
});

document.body.addEventListener("submit", (event) => {
  if (event.target.id !== "feedback") return;
  event.preventDefault();
  const note = document.querySelector("#note")?.value.trim() || "";
  const body = [`Puan: ${rating}/5`, note].filter(Boolean).join("\n\n");
  const url = `mailto:${CAFE.email}?subject=${encodeURIComponent(`Asude Kahve geri bildirimi — ${rating}/5`)}&body=${encodeURIComponent(body)}`;
  const thanks = document.querySelector("#thanks");
  if (thanks) thanks.hidden = false;
  location.href = url;
});

window.addEventListener("hashchange", render);
render();
