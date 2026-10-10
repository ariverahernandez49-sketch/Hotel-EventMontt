const pg = document.body.dataset.page;

/* ─── Header & Footer ─── */
const NAV = [
  ['index.html', 'Inicio'],
  ['paquetes.html', 'Paquetes'],
  ['index.html#servicios', 'Servicios'],
  ['index.html#restaurante', 'Restaurante'],
  ['index.html#eventos', 'Eventos'],
  ['galeria.html', 'Galería'],
  ['contacto.html', 'Contacto']
];

const socialIcons = `
  <a href="${HOTEL.social.facebook}" target="_blank" rel="noopener" aria-label="Facebook">
    <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  </a>
  <a href="${HOTEL.social.instagram}" target="_blank" rel="noopener" aria-label="Instagram">
    <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/></svg>
  </a>
  <a href="${HOTEL.social.youtube}" target="_blank" rel="noopener" aria-label="YouTube">
    <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--ink)"/></svg>
  </a>
  <a href="${HOTEL.social.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">
    <svg viewBox="0 0 24 24"><path d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/><path d="M12 2C6.48 2 2 6.48 2 12c0 1.95.56 3.77 1.53 5.32L2.05 22l4.82-1.26A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.68 0-3.26-.46-4.62-1.26l-.33-.2-3.48.91.93-3.39-.22-.35A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z"/></svg>
  </a>
`;

document.body.insertAdjacentHTML('afterbegin', `
<header id="h">
  <a class="brand" href="index.html">
    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&q=60" alt="Logo Evermont" onerror="this.style.display='none'">
    The Evermont Hotel
  </a>
  <nav id="nv">${NAV.map(n => `<a href="${n[0]}">${n[1]}</a>`).join('')}</nav>
  <a class="btn sm" href="index.html#reservar">Reservar</a>
  <button id="bur" aria-label="Menú">☰</button>
</header>`);

document.body.insertAdjacentHTML('beforeend', `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="serif">The Evermont Hotel</div>
      <p>Lujo y naturaleza frente al Lago de Yojoa.<br>${HOTEL.address}<br>${HOTEL.location}</p>
      <div class="socials">${socialIcons}</div>
    </div>
    <div class="footer-col">
      <h4>Explorar</h4>
      <a href="index.html">Inicio</a>
      <a href="paquetes.html">Paquetes</a>
      <a href="index.html#servicios">Servicios</a>
      <a href="index.html#restaurante">Restaurante Ámbar</a>
      <a href="galeria.html">Galería</a>
    </div>
    <div class="footer-col">
      <h4>Contacto</h4>
      <p>${HOTEL.phone}</p>
      <p>${HOTEL.whatsapp} (WhatsApp)</p>
      <p>${HOTEL.email}</p>
      <p>${HOTEL.hours}</p>
    </div>
    <div class="footer-col">
      <h4>Ubicación</h4>
      <p>Santa Cruz de Yojoa<br>Cortés, Honduras</p>
      <p>A 84 km de San Pedro Sula<br>A 157 km de Tegucigalpa</p>
      <a href="contacto.html">Cómo llegar →</a>
    </div>
  </div>
  <div class="footer-bottom">
    <small>© 2026 The Evermont Hotel. Todos los derechos reservados. · Precios en USD y Lempiras (tasa referencial L ${RATE})</small>
  </div>
</footer>
<div id="ov"><div id="md" role="dialog" aria-modal="true"><button id="x" aria-label="Cerrar">✕</button><div id="mb"></div></div></div>
`);

/* ─── Modal ─── */
const open = h => { $('#mb').innerHTML = h; $('#ov').classList.add('on'); document.body.style.overflow = 'hidden'; };
const close = () => { $('#ov').classList.remove('on'); document.body.style.overflow = ''; };
$('#x').onclick = close;
$('#ov').onclick = e => { if (e.target.id === 'ov') close(); };
addEventListener('keydown', e => e.key === 'Escape' && close());

/* ─── Nav mobile & scroll ─── */
$('#bur').onclick = () => $('#nv').classList.toggle('on');
addEventListener('scroll', () => $('#h').classList.toggle('s', scrollY > 40));
$('#h').classList.toggle('s', scrollY > 40);

/* ─── Carousel helper ─── */
const car = h => `<div class="car"><button class="ar l" aria-label="Anterior">‹</button><div class="trk">${h}</div><button class="ar r" aria-label="Siguiente">›</button></div>`;
document.addEventListener('click', e => {
  const a = e.target.closest('.car .ar');
  if (a) {
    const t = a.parentNode.querySelector('.trk');
    t.scrollBy({ left: (a.classList.contains('r') ? 1 : -1) * t.clientWidth * .8, behavior: 'smooth' });
  }
  const c = e.target.closest('[data-p]');
  if (c) pkg(c.dataset.p);
  const s = e.target.closest('[data-i]');
  if (s) info(...s.dataset.i.split('|'));
  const r = e.target.closest('[data-r]');
  if (r) bookForm({ p: r.dataset.r });
});

/* ─── Package card ─── */
const pc = p => `
<button class="card" data-p="${p.id}">
  ${ph(p.img, G[P.indexOf(p) % 6])}
  <div class="b">
    <span class="tag">${p.t} · hasta ${p.pax} personas</span>
    <h3>${p.n}</h3>
    <p>${p.d}</p>
    <div class="price-dual">
      <span class="price">${M(p.usd)} <small>por noche</small></span>
      <span class="lps" style="font-size:.9rem;opacity:.85">${M(p.usd, '$')} USD / noche</span>
    </div>
  </div>
</button>`;

const pkg = id => {
  const p = P.find(x => x.id === id);
  open(`
    ${ph(p.img, G[P.indexOf(p) % 6])}
    <div class="b">
      <span class="tag">${p.t} · hasta ${p.pax} personas</span>
      <h2>${p.n}</h2>
      <p>${p.d}</p>
      <ul class="inc">${p.inc.map(i => `<li>${i}</li>`).join('')}</ul>
      <div class="facts">
        <span>Check-in: 15:00</span>
        <span>Check-out: 12:00</span>
        <span>Cancelación gratis hasta 48 h</span>
        <span>Impuestos y servicio incluidos</span>
      </div>
      <div class="price-dual" style="margin:16px 0">
        <span class="price">${M(p.usd)} <small>por noche</small></span>
        <span style="font-size:.95rem;opacity:.85">${M(p.usd, '$')} USD</span>
      </div>
      <button class="btn" data-r="${p.id}">Reservar este paquete</button>
    </div>`);
};

/* ─── Service / Event info ─── */
const info = (i, _, k) => {
  const d = (k === 's' ? S : E)[i];
  const x = (k === 's' ? SX : EX)[i];
  const imgUrl = k === 's' ? IMG.servicios[i] : IMG.eventos[i];
  open(`
    ${ph(imgUrl, G[(+i + 2) % 6])}
    <div class="b">
      <h2>${d[0]}</h2>
      <p>${d[1]}</p>
      <div class="facts">
        <span>${x[0]}</span>
        <span>${x[1]}</span>
        <span>${x[2]}</span>
      </div>
      <a class="btn" href="contacto.html" style="margin-top:16px">Consultar disponibilidad</a>
    </div>`);
};

/* ─── Booking form (professional) ─── */
function bookForm(pre = {}) {
  open(`
    <div class="b">
      <h2>Completa tu reserva</h2>
      <p style="color:var(--mist);margin-bottom:20px">Todos los precios incluyen impuestos y servicio. Confirmación inmediata por correo.</p>
      <form id="bf" class="mf" novalidate>
        <label>Nombre completo<input id="bn" required placeholder="Tu nombre"></label>
        <label>Correo electrónico<input id="be" type="email" required placeholder="tu@email.com"></label>
        <label>Teléfono / WhatsApp<input id="bph" type="tel" placeholder="+504 9999-0000"></label>
        <label>Paquete
          <select id="bp">${P.map(p => `<option value="${p.id}">${p.n} — ${M(p.usd)} (${M(p.usd, '$')})</option>`).join('')}</select>
        </label>
        <label>Llegada<input id="bi" type="date" min="${iso(new Date())}" required></label>
        <label>Salida<input id="bo" type="date" required></label>
        <label>Huéspedes<select id="bg"></select></label>
        <label class="full">Peticiones especiales<textarea id="bx" rows="2" placeholder="Celebración, dieta especial, cuna..."></textarea></label>
        <div class="full tot" id="btt"></div>
        <div class="full err" id="ber"></div>
        <div class="full"><button class="btn full" type="submit">Confirmar reserva</button></div>
      </form>
    </div>`);

  const n = () => Math.round((new Date($('#bo').value) - new Date($('#bi').value)) / 864e5);
  const u = () => {
    const p = P.find(x => x.id === $('#bp').value);
    return [p, n()];
  };
  const gs = () => {
    const p = u()[0];
    $('#bg').innerHTML = Array.from({ length: p.pax }, (_, i) => `<option>${i + 1}</option>`).join('');
  };
  const up = () => {
    const [p, k] = u();
    $('#btt').innerHTML = k > 0
      ? `Total ${k} noche(s): <strong style="font-size:1.5em">${M(p.usd * k)}</strong><br><span style="font-size:.85em;opacity:.85">${M(p.usd * k, '$')} USD</span>`
      : 'Total: selecciona tus fechas';
  };

  if (pre.p) $('#bp').value = pre.p;
  if (pre.i) $('#bi').value = pre.i;
  if (pre.o) $('#bo').value = pre.o;
  gs();
  if (pre.g) $('#bg').value = pre.g;
  up();
  $('#bp').onchange = () => { gs(); up(); };
  $('#bi').onchange = $('#bo').onchange = up;

  $('#bf').onsubmit = e => {
    e.preventDefault();
    const [p, k] = u();
    let m = '';
    if ($('#bn').value.trim().length < 3) m = 'Escribe tu nombre completo.';
    else if (!/^\S+@\S+\.\S+$/.test($('#be').value)) m = 'Escribe un correo válido.';
    else if (!(k > 0)) m = 'La salida debe ser después de la llegada.';
    $('#ber').textContent = m;
    if (m) return;

    const code = 'EVM-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    const b = {
      c: code,
      nm: $('#bn').value.trim(),
      email: $('#be').value.trim(),
      phone: $('#bph').value.trim(),
      p: p.n,
      pid: p.id,
      ci: $('#bi').value,
      co: $('#bo').value,
      k,
      g: $('#bg').value,
      u: p.usd * k,
      notes: $('#bx').value.trim()
    };

    try {
      localStorage.setItem('ev', JSON.stringify([...(JSON.parse(localStorage.getItem('ev') || '[]')), b]));
    } catch (x) {}

    /* Simulación realista de envío de correo + WhatsApp */
    const subject = encodeURIComponent(`Confirmación de reserva ${code} — The Evermont Hotel`);
    const body = encodeURIComponent(
`Estimado/a ${b.nm},

¡Gracias por elegir The Evermont Hotel!

DETALLES DE SU RESERVA
─────────────────────
Código: ${b.c}
Paquete: ${b.p}
Fechas: ${b.ci} → ${b.co} (${b.k} noche/s)
Huéspedes: ${b.g}
Total: ${M(b.u)}  (${M(b.u, '$')} USD)

Ubicación: ${HOTEL.address}
${HOTEL.location}

Check-in: 15:00  |  Check-out: 12:00
Recepción 24 horas: ${HOTEL.phone}

¡Le esperamos para una experiencia inolvidable frente al Lago de Yojoa!

Atentamente,
Equipo The Evermont Hotel
${HOTEL.email}`
    );

    /* Abrir mailto como simulación profesional de envío */
    const mailto = `mailto:${b.email}?subject=${subject}&body=${body}`;
    /* También preparar WhatsApp confirmation */
    const waText = encodeURIComponent(
      `¡Hola! Acabo de reservar en The Evermont Hotel.\nCódigo: ${b.c}\nPaquete: ${b.p}\nFechas: ${b.ci} al ${b.co}\nTotal: ${M(b.u)} (${M(b.u, '$')} USD)`
    );

    open(`
      <div class="b" style="text-align:center">
        <div style="font-size:3rem;margin-bottom:12px">✓</div>
        <h2>¡Reserva confirmada!</h2>
        <p style="color:var(--mist);margin:12px 0 24px">
          Gracias, <strong>${b.nm}</strong>. Hemos registrado tu reserva y preparamos el correo de confirmación.
        </p>
        <div style="background:#0a1411;border:1px solid rgba(201,164,93,.3);border-radius:8px;padding:24px;margin-bottom:24px;text-align:left">
          <p style="margin-bottom:8px">Código de reserva: <b class="price" style="font-size:1.4rem">${b.c}</b></p>
          <p>${b.p} · ${b.k} noche(s) · ${b.g} huésped(es)</p>
          <p>Del <strong>${b.ci}</strong> al <strong>${b.co}</strong></p>
          <div class="tot" style="margin-top:14px">${M(b.u)} <span style="font-size:.7em;opacity:.85">· ${M(b.u, '$')} USD</span></div>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
          <a class="btn" href="${mailto}">Enviar confirmación por correo</a>
          <a class="btn o" href="https://wa.me/50499990000?text=${waText}" target="_blank" rel="noopener">Confirmar por WhatsApp</a>
          <button class="btn o" onclick="window.print()">Imprimir comprobante</button>
        </div>
        <p style="color:var(--mist);font-size:.85rem;margin-top:20px">
          También puedes contactarnos al ${HOTEL.phone} o escribir a ${HOTEL.email}
        </p>
      </div>`);
  };
}

/* ─── Reveal on scroll ─── */
const observeReveal = () => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
};

/* ═══════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════ */
if (pg === 'home') {
  const HS = [
    ['Bienvenido a The Evermont', 'Un refugio de lujo frente al Lago de Yojoa donde cada noche se convierte en un recuerdo.'],
    ['Suites con vista al lago', 'Cenas privadas, jacuzzi y amaneceres que no se olvidan.'],
    ['Diversión en familia', 'Piscina infinita, club infantil y aventuras en la naturaleza.'],
    ['Sabores con propósito', 'Cocina de autor con producto local en el restaurante Ámbar.']
  ];
  let cur = 0, tm;

  $('#sl').innerHTML = HS.map((_, i) =>
    `<div class="sl" style="background-image:url('${IMG.hero[i]}')"></div>`
  ).join('');
  $('#dt').innerHTML = HS.map((_, i) => `<i data-d="${i}"></i>`).join('');

  const show = i => {
    cur = (i + HS.length) % HS.length;
    $$('.sl').forEach((s, j) => {
      s.classList.remove('on');
      if (j === cur) { void s.offsetWidth; s.classList.add('on'); }
    });
    $$('#dt i').forEach((d, j) => d.classList.toggle('on', j === cur));
    $('#ht').textContent = HS[cur][0];
    $('#hp').textContent = HS[cur][1];
    clearInterval(tm);
    tm = setInterval(() => show(cur + 1), 7000);
  };
  $('#pl').onclick = () => show(cur - 1);
  $('#nx').onclick = () => show(cur + 1);
  $('#dt').onclick = e => e.target.dataset.d && show(+e.target.dataset.d);
  show(0);

  /* Widget */
  $('#wp').innerHTML = P.map(p => `<option value="${p.id}">${p.n} — ${M(p.usd)} (${M(p.usd, '$')})</option>`).join('');
  $('#wi').min = iso(new Date());
  $('#wd').onsubmit = e => {
    e.preventDefault();
    bookForm({ p: $('#wp').value, i: $('#wi').value, o: $('#wo').value });
  };

  /* Packages preview */
  $('#pg1').innerHTML = car(P.slice(0, 6).map(pc).join(''));

  /* Services */
  $('#sg').innerHTML = car(S.map((s, i) => `
    <button class="card" data-i="${i}|s">
      ${ph(IMG.servicios[i], G[i % 6])}
      <div class="b">
        <h3>${s[0]}</h3>
        <p>${s[1].split('.')[0]}.</p>
        <span class="tag">${s[2]}</span>
      </div>
    </button>`).join(''));

  /* Events */
  $('#eg').innerHTML = car(E.map((s, i) => `
    <button class="card" data-i="${i}|e">
      ${ph(IMG.eventos[i], G[(i + 3) % 6])}
      <div class="b">
        <h3>${s[0]}</h3>
        <p>${s[1]}</p>
      </div>
    </button>`).join(''));

  /* Restaurant menu with images */
  const dm = k => {
    $('#mn').innerHTML = MN[k].map(m => `
      <div class="mi">
        <img class="mi-img" src="${m.img}" alt="${m.n}" loading="lazy">
        <div class="mi-info">
          <h3>${m.n}</h3>
          <p>${m.d}</p>
        </div>
        <div class="price-dual" style="text-align:right">
          <span class="price" style="font-size:1.25rem">${M(m.u)}</span>
          <span style="font-size:.8rem;color:var(--mist)">${M(m.u, '$')} USD</span>
        </div>
      </div>`).join('');
  };
  $('#mt').innerHTML = Object.keys(MN).map((k, i) =>
    `<button class="${i ? '' : 'on'}">${k}</button>`
  ).join('');
  dm('Desayuno');
  $('#mt').onclick = e => {
    if (e.target.tagName !== 'BUTTON') return;
    $$('#mt button').forEach(b => b.classList.toggle('on', b === e.target));
    dm(e.target.textContent);
  };

  /* Reviews */
  $('#bars').innerHTML = [[5, 86], [4, 11], [3, 2], [2, 1], [1, 0]]
    .map(([s, v]) => `<div class="bar">${s}★<i><b data-w="${v}"></b></i>${v}%</div>`).join('');
  $('#rg').innerHTML = car(R.map(r => `
    <div class="card" style="cursor:default">
      <div class="b">
        <div style="color:var(--brass);letter-spacing:2px">★★★★★</div>
        <p>“${r[2]}”</p>
        <br><b>${r[0]}</b><br><small style="color:var(--mist)">${r[1]}</small>
      </div>
    </div>`).join(''));

  new IntersectionObserver((en, o) => en.forEach(x => {
    if (x.isIntersecting) {
      $$('[data-w]').forEach(b => b.style.width = b.dataset.w + '%');
      o.disconnect();
    }
  })).observe($('#bars'));

  /* Attractions */
  if ($('#attr')) {
    $('#attr').innerHTML = ATTRACTIONS.map(a => `
      <div class="attr-card">
        <h3>${a.n}</h3>
        <p>${a.d}</p>
        <span class="dist">${a.dist} del hotel</span>
      </div>`).join('');
  }

  observeReveal();
}

/* ═══════════════════════════════════════
   PAQUETES PAGE
═══════════════════════════════════════ */
if (pg === 'paq') {
  let t = 'Todos';
  const d = () => {
    $('#pg2').innerHTML = P
      .filter(p => t === 'Todos' || p.t.startsWith(t) || (t === 'Pareja' && p.t.includes('Pareja')))
      .map(pc).join('');
  };
  $('#pt').innerHTML = ['Todos', 'Pareja', 'Familiar'].map(x =>
    `<button class="${x === t ? 'on' : ''}">${x}</button>`
  ).join('');
  $('#pt').onclick = e => {
    if (e.target.tagName !== 'BUTTON') return;
    t = e.target.textContent;
    $$('#pt button').forEach(b => b.classList.toggle('on', b === e.target));
    d();
  };
  d();
  observeReveal();
}

/* ═══════════════════════════════════════
   CONTACTO PAGE
═══════════════════════════════════════ */
if (pg === 'contact') {
  $('#cf').onsubmit = e => {
    e.preventDefault();
    let m = '';
    if ($('#cn').value.trim().length < 3) m = 'Escribe tu nombre.';
    else if (!/^\S+@\S+\.\S+$/.test($('#ce').value)) m = 'Escribe un correo válido.';
    else if ($('#cm').value.trim().length < 10) m = 'Escribe tu mensaje (mínimo 10 caracteres).';
    $('#cer').textContent = m;
    if (m) return;

    const name = $('#cn').value.trim();
    const email = $('#ce').value.trim();
    const msg = $('#cm').value.trim();

    try {
      localStorage.setItem('evmsg', JSON.stringify([
        ...(JSON.parse(localStorage.getItem('evmsg') || '[]')),
        { n: name, e: email, m: msg, date: new Date().toISOString() }
      ]));
    } catch (x) {}

    const subject = encodeURIComponent(`Consulta desde la web — ${name}`);
    const body = encodeURIComponent(
`Nombre: ${name}
Correo: ${email}

Mensaje:
${msg}

---
Enviado desde evermonthotel.com`
    );
    const mailto = `mailto:${HOTEL.email}?subject=${subject}&body=${body}`;

    open(`
      <div class="b" style="text-align:center">
        <div style="font-size:3rem;margin-bottom:12px">✓</div>
        <h2>Mensaje enviado</h2>
        <p style="color:var(--mist);margin:12px 0 24px">
          Gracias, <strong>${name}</strong>. Te responderemos en menos de 24 horas.
        </p>
        <a class="btn" href="${mailto}">Abrir en tu cliente de correo</a>
        <br><br>
        <a class="btn o" href="https://wa.me/50499990000?text=${encodeURIComponent('Hola, vengo de la web de The Evermont Hotel. ' + msg)}" target="_blank" rel="noopener">Enviar por WhatsApp</a>
      </div>`);
    $('#cf').reset();
  };
  observeReveal();
}

/* ═══════════════════════════════════════
   GALERÍA PAGE
═══════════════════════════════════════ */
if (pg === 'gallery') {
  const imgs = IMG.gallery;
  $('#gallery').innerHTML = imgs.map((url, i) =>
    `<div class="ph" style="background-image:url('${url}')" data-g="${i}"></div>`
  ).join('');

  document.addEventListener('click', e => {
    const g = e.target.closest('[data-g]');
    if (!g) return;
    const i = +g.dataset.g;
    open(`
      <div style="position:relative">
        <img src="${imgs[i]}" alt="Galería Evermont" style="width:100%;max-height:70vh;object-fit:contain;border-radius:8px 8px 0 0">
        <div class="b" style="text-align:center">
          <p style="color:var(--mist)">The Evermont Hotel · Santa Cruz de Yojoa</p>
          <div style="display:flex;gap:12px;justify-content:center;margin-top:12px">
            <button class="btn o" id="gprev">‹ Anterior</button>
            <button class="btn o" id="gnext">Siguiente ›</button>
          </div>
        </div>
      </div>`);
    let cur = i;
    const showG = n => {
      cur = (n + imgs.length) % imgs.length;
      $('#mb img').src = imgs[cur];
    };
    $('#gprev').onclick = () => showG(cur - 1);
    $('#gnext').onclick = () => showG(cur + 1);
  });
  observeReveal();
}
