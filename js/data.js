const RATE = 26.4;
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const M = (u, l = 'L') => l === 'L' ? 'L ' + Math.round(u * RATE).toLocaleString('es-HN') : '$' + u.toLocaleString('en-US');
const iso = d => d.toISOString().slice(0, 10);

const HOTEL = {
  name: 'The Evermont Hotel',
  tagline: 'Lujo frente al Lago de Yojoa',
  location: 'Santa Cruz de Yojoa, Cortés, Honduras',
  address: 'Carretera CA-5, Km 84 · Frente al Lago de Yojoa',
  phone: '+504 2550-0000',
  whatsapp: '+504 9999-0000',
  email: 'reservas@evermonthotel.com',
  email2: 'info@evermonthotel.com',
  hours: 'Recepción 24 horas · Check-in 15:00 · Check-out 12:00',
  social: {
    facebook: 'https://facebook.com/evermonthotel',
    instagram: 'https://instagram.com/evermonthotel',
    tripadvisor: 'https://tripadvisor.com/evermonthotel',
    youtube: 'https://youtube.com/@evermonthotel',
    whatsapp: 'https://wa.me/50499990000'
  },
  coords: { lat: 14.8667, lng: -87.9833 },
  year: 2010,
  rooms: 120,
  rating: 4.9,
  reviews: 1284
};

const G = [
  'linear-gradient(135deg,#3a2c1c,#c9a45d)',
  'linear-gradient(135deg,#1d3d36,#6aa392)',
  'linear-gradient(135deg,#2c2440,#9a7bd0)',
  'linear-gradient(135deg,#40242a,#d98a7a)',
  'linear-gradient(135deg,#1c3040,#6fa8c9)',
  'linear-gradient(135deg,#2e3a1c,#a9c96a)'
];

/* Imágenes de Unsplash de alta calidad (gratuitas) */
const IMG = {
  hero: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1600&q=80'
  ],
  paquetes: {
    romance: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    dorada: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    familiar: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    luna: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80',
    aventura: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    presi: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    eco: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    wellness: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80'
  },
  servicios: [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80',
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
  ],
  eventos: [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80'
  ],
  menu: {
    huevos: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80',
    baleadas: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80',
    hotcakes: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80',
    ceviche: 'https://images.unsplash.com/photo-1535399831214-97f4d0c53a2c?w=400&q=80',
    pollo: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&q=80',
    sopa: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&q=80',
    filete: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80',
    langosta: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80',
    risotto: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
    cafe: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
    cocktail: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80',
    vino: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80',
    pescado: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
    postre: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80',
    ensalada: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80',
    jugo: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400&q=80'
  },
  gallery: [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80',
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80',
    'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=900&q=80',
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80',
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=900&q=80'
  ]
};

const ph = (url, g, c = '') =>
  `<div class="ph ${c}" style="--g:${g};background-image:url('${url}'),${g}"></div>`;

const P = [
  {
    id: 'romance',
    n: 'Romance Evermont',
    t: 'Pareja',
    pax: 2,
    usd: 189,
    d: 'Noche íntima con cena a la luz de las velas, vistas al jardín y detalles románticos.',
    inc: ['Suite Junior', 'Cena de 3 tiempos', 'Botella de vino premium', 'Desayuno en la cama', 'Pétalos y decoración', 'Salida tardía 14:00'],
    img: IMG.paquetes.romance
  },
  {
    id: 'dorada',
    n: 'Escapada Dorada',
    t: 'Pareja +',
    pax: 4,
    usd: 279,
    d: 'Ideal para dos parejas o grupos pequeños que quieren lujo compartido sin perder privacidad.',
    inc: ['Suite doble conectada', 'Desayuno buffet para 4', 'Acceso spa (2 pers.)', 'Cóctel de bienvenida', 'Wi-Fi premium', 'Estacionamiento'],
    img: IMG.paquetes.dorada
  },
  {
    id: 'familiar',
    n: 'Familiar Esencial',
    t: 'Familiar',
    pax: 4,
    usd: 229,
    d: 'Habitación amplia con camas dobles, pensada para que los niños se sientan como en casa.',
    inc: ['Habitación familiar', 'Desayuno para 4', 'Club infantil', 'Piscina y toallas', 'Menú infantil', 'Película bajo las estrellas'],
    img: IMG.paquetes.familiar
  },
  {
    id: 'luna',
    n: 'Luna de Miel',
    t: 'Pareja',
    pax: 2,
    usd: 249,
    d: 'Experiencia nupcial completa: suite con jacuzzi privado y masaje en pareja.',
    inc: ['Suite con jacuzzi', 'Masaje 60 min en pareja', 'Cena privada', 'Champán francés', 'Fotografía de cortesía', 'Traslado aeropuerto'],
    img: IMG.paquetes.luna
  },
  {
    id: 'aventura',
    n: 'Familiar Aventura',
    t: 'Familiar',
    pax: 6,
    usd: 329,
    d: 'Dos habitaciones conectadas + actividades guiadas para toda la familia en el Lago de Yojoa.',
    inc: ['2 habitaciones conectadas', 'Desayuno para 6', 'Tour guiado al lago', 'Alquiler de bicicletas', 'Cena familiar', 'Traslados'],
    img: IMG.paquetes.aventura
  },
  {
    id: 'presi',
    n: 'Suite Presidencial',
    t: 'Pareja',
    pax: 2,
    usd: 450,
    d: 'La mejor suite del hotel: terraza privada, mayordomo personal y chofer a disposición.',
    inc: ['Suite presidencial', 'Mayordomo 24 h', 'Chofer privado', 'Cena de 5 tiempos', 'Spa ilimitado', 'Bar privado'],
    img: IMG.paquetes.presi
  },
  {
    id: 'eco',
    n: 'Eco Lago',
    t: 'Pareja',
    pax: 2,
    usd: 169,
    d: 'Experiencia sostenible con vista directa al Lago de Yojoa y desayuno orgánico.',
    inc: ['Habitación Eco', 'Desayuno orgánico', 'Kayak 1 h', 'Tour de aves', 'Producto local de regalo', 'Wi-Fi'],
    img: IMG.paquetes.eco
  },
  {
    id: 'wellness',
    n: 'Wellness Retreat',
    t: 'Pareja',
    pax: 2,
    usd: 319,
    d: 'Retiro de bienestar completo: spa, yoga, alimentación saludable y desconexión total.',
    inc: ['Suite Wellness', '2 masajes 60 min', 'Clase de yoga', 'Menú detox', 'Acceso spa ilimitado', 'Kit de aromaterapia'],
    img: IMG.paquetes.wellness
  }
];

const S = [
  ['Spa & Bienestar', 'Masajes, sauna, vapor y tratamientos faciales con productos naturales de la región.', '9:00 – 21:00'],
  ['Piscina infinita', 'Piscina climatizada con vista a la montaña, bar húmedo y camastros exclusivos.', '7:00 – 21:00'],
  ['Gimnasio & Yoga', 'Equipo de última generación y clases guiadas de yoga cada mañana frente al lago.', '5:00 – 23:00'],
  ['Concierge 24 h', 'Traslados al aeropuerto, tours personalizados, reservaciones y atención permanente.', '24 horas'],
  ['Club Infantil', 'Actividades supervisadas, cine, manualidades y niñera para niños de 4 a 12 años.', '9:00 – 17:00'],
  ['Business Center', 'Lavandería express, sala de reuniones, impresiones y Wi-Fi de alta velocidad.', '24 horas']
];

const SX = [
  ['Sauna, vapor, masaje sueco, facial', 'Reserva con 2 horas de anticipación', 'Productos orgánicos locales'],
  ['Piscina climatizada, bar húmedo, toallas', 'Menores con adulto responsable', 'Servicio de coctelería'],
  ['Pesas, cardio, yoga matutino', 'Acceso gratuito para huéspedes', 'Instructor personal disponible'],
  ['Traslados, tours, taxis, reservaciones', 'Pide en recepción o app', 'Tours a Cascada Pulhapanzak'],
  ['Juegos, cine, manualidades, niñera', 'Niños de 4 a 12 años', 'Supervisión certificada'],
  ['Lavandería, sala de reuniones, Wi-Fi', 'Impresiones sin costo', 'Proyector y pizarra']
];

const E = [
  ['Bodas de ensueño', 'Ceremonia y recepción para hasta 250 invitados con coordinadora, menú gourmet y decoración personalizada.'],
  ['Eventos corporativos', 'Salas con proyector 4K, catering ejecutivo y paquetes de hospedaje para equipos completos.'],
  ['Quinceaños & celebraciones', 'Salón privado, DJ profesional, pastel artesanal y banquete a la medida de tu familia.']
];

const EX = [
  ['Hasta 250 invitados', 'Coordinadora, menú, decoración, DJ', 'Desde $2,500 USD'],
  ['Hasta 120 personas', 'Proyector, catering, hospedaje grupal', 'Desde $900 USD'],
  ['Hasta 150 invitados', 'Salón privado, pastel, banquete', 'Desde $1,200 USD']
];

const MN = {
  Desayuno: [
    { n: 'Huevos Evermont', d: 'Huevos pochados, aguacate y pan de masa madre', u: 9, img: IMG.menu.huevos },
    { n: 'Baleadas gourmet', d: 'Tortilla artesanal, frijoles, mantequilla y queso', u: 7, img: IMG.menu.baleadas },
    { n: 'Hot cakes de plátano', d: 'Miel de abeja y frutos rojos de temporada', u: 8, img: IMG.menu.hotcakes },
    { n: 'Jugo verde detox', d: 'Espinaca, piña, jengibre y limón', u: 5, img: IMG.menu.jugo }
  ],
  Almuerzo: [
    { n: 'Ceviche de la casa', d: 'Pescado fresco del lago, limón y cilantro', u: 13, img: IMG.menu.ceviche },
    { n: 'Pollo al tapado', d: 'Receta catracha con yuca y plátano maduro', u: 15, img: IMG.menu.pollo },
    { n: 'Sopa de mariscos', d: 'Coco, camarones, pescado y verduras', u: 18, img: IMG.menu.sopa },
    { n: 'Ensalada del lago', d: 'Hojas locales, queso fresco y aderezo de miel', u: 11, img: IMG.menu.ensalada }
  ],
  Cena: [
    { n: 'Filete de res 8 oz', d: 'Puré trufado y vegetales asados de la huerta', u: 32, img: IMG.menu.filete },
    { n: 'Langosta a la mantequilla', d: 'Arroz de coco y ensalada de temporada', u: 44, img: IMG.menu.langosta },
    { n: 'Risotto de hongos', d: 'Parmesano añejo y aceite de trufa negra', u: 24, img: IMG.menu.risotto },
    { n: 'Pescado del lago', d: 'Tilapia fresca a la plancha con vegetales', u: 22, img: IMG.menu.pescado }
  ],
  Bebidas: [
    { n: 'Café de altura', d: 'Cosecha local de Santa Bárbara', u: 4, img: IMG.menu.cafe },
    { n: 'Cóctel Evermont', d: 'Ron añejo, miel de abeja y cítricos', u: 10, img: IMG.menu.cocktail },
    { n: 'Copa de vino', d: 'Tinto o blanco de la casa', u: 9, img: IMG.menu.vino },
    { n: 'Postre del día', d: 'Pregunta por la creación del chef', u: 8, img: IMG.menu.postre }
  ]
};

const R = [
  ['Mariela G.', 'Viaje en pareja', 'Atención impecable y una suite preciosa. Volveremos pronto. La vista al lago es mágica.'],
  ['Carlos y familia', 'Viaje familiar', 'Los niños amaron el club infantil y la cena fue excelente. Todo el personal muy atento.'],
  ['Daniela R.', 'Evento de negocios', 'Salón muy bien equipado y un servicio profesional. El catering superó expectativas.'],
  ['Luis y Ana', 'Luna de miel', 'La suite con jacuzzi fue un sueño. Todo el personal nos trató como realeza.'],
  ['Familia Pineda', 'Viaje familiar', 'Habitaciones amplias y limpias; el desayuno es espectacular. Ideal para familias.'],
  ['Roberto M.', 'Escapada', 'El mejor restaurante en kilómetros. Vale cada lempira. La piscina infinita es única.']
];

const FAQ = [
  ['¿Cuál es el horario de check-in y check-out?', 'Check-in a partir de las 15:00 y check-out hasta las 12:00. Salida tardía disponible bajo solicitud y disponibilidad.'],
  ['¿Aceptan mascotas?', 'Sí, aceptamos mascotas pequeñas (hasta 10 kg) con un cargo adicional de $25 USD por noche. Favor avisar al reservar.'],
  ['¿Hay estacionamiento?', 'Sí, contamos con estacionamiento gratuito y seguro para todos los huéspedes.'],
  ['¿Ofrecen traslados desde el aeropuerto?', 'Sí, desde el Aeropuerto Ramón Villeda Morales (SAP) de San Pedro Sula. Solicítalo al reservar.'],
  ['¿Cuál es la política de cancelación?', 'Cancelación gratuita hasta 48 horas antes de la llegada. Después se aplica el cargo de la primera noche.'],
  ['¿Tienen acceso a personas con movilidad reducida?', 'Sí, contamos con habitaciones adaptadas y acceso a todas las áreas principales del hotel.']
];

const ATTRACTIONS = [
  { n: 'Lago de Yojoa', d: 'El lago más grande de Honduras. Kayak, pesca y atardeceres inolvidables.', dist: '5 min' },
  { n: 'Cascada Pulhapanzak', d: 'Cascada de 43 metros con pozas naturales y canopy.', dist: '25 min' },
  { n: 'Cerro Azul Meámbar', d: 'Parque nacional con bosque nuboso, senderos y cascadas.', dist: '40 min' },
  { n: 'Parque Los Naranjos', d: 'Sitio arqueológico y ecológico a orillas del lago.', dist: '10 min' }
];
