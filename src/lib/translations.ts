export const languages = ["en", "es", "fr", "ru"] as const;

export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = {
  en: "EN",
  es: "ES",
  fr: "FR",
  ru: "RU",
};

export const translations = {
  en: {
    nav: {
      home: "Home",
      destinations: "Destinations",
      tours: "Tours",
      hotels: "Hotels",
      activities: "Activities",
      about: "About",
      contact: "Contact",
      blog: "Blog",
      bookTour: "Book a Tour",
      language: "Language",
    },
    home: {
      metaTitle: "Southern USA Travel Guide | SouthVoyage",
      metaDescription:
        "Southern USA travel guide with South Beach hotels, Key West tours, New Orleans food, Savannah trips, and South Padre Island tips.",
      metaKeywords:
        "southern usa travel, south beach miami hotels, best hotels south beach miami, miami beach oceanfront hotels, key west tours, key west snorkeling, new orleans tours, french quarter food tours, south padre island hotels, savannah georgia travel guide, things to do in the american south, southern usa vacation ideas",
      ogTitle: "SouthVoyage — Discover the American South",
      ogDescription:
        "Find destination guides, hotel tips, food tours, beach escapes, and top-rated activities across South Beach, Key West, New Orleans, Savannah, and South Padre Island.",
      hero: {
        eyebrow: "Your Southern USA Travel Guide",
        titleTop: "Discover the",
        titleAccent: "American South",
        description:
          "From Miami's vibrant beaches to New Orleans' jazz-filled streets. Explore the best tours, hotels, and hidden gems across the Southern United States.",
        primaryCta: "Explore Destinations",
        secondaryCta: "Find Tours",
      },
      destinations: {
        eyebrow: "Where to Go",
        title: "Top Southern Destinations",
        description:
          "Explore the most captivating cities and beaches across the American South, each offering unforgettable experiences and warm hospitality.",
        cards: [
          {
            name: "South Beach, Miami",
            description:
              "Iconic Art Deco architecture, world-class nightlife, and pristine white sand beaches along Ocean Drive.",
            tag: "Most Popular",
          },
          {
            name: "Key West",
            description:
              "The southernmost point of the US, famous for stunning sunsets, Hemingway's home, and vibrant coral reefs.",
            tag: "Island Paradise",
          },
          {
            name: "New Orleans",
            description:
              "The birthplace of jazz, legendary Cajun cuisine, and the unforgettable energy of the French Quarter.",
            tag: "Culture & Music",
          },
          {
            name: "South Padre Island",
            description:
              "Texas' premier beach destination with dolphin watching, deep-sea fishing, and year-round sunshine.",
            tag: "Beach Escape",
          },
          {
            name: "Savannah",
            description:
              "Charming squares draped in Spanish moss, historic architecture, and Southern hospitality at its finest.",
            tag: "Historic South",
          },
        ],
      },
      tours: {
        eyebrow: "Experiences & Activities",
        title: "Popular Tours & Activities",
        description:
          "Book the best-rated tours and activities across the Southern USA. Handpicked experiences with verified reviews and instant confirmation.",
        reviewsLabel: "reviews",
        viewDetails: "View Details",
        browseAll: "Browse All Tours",
        cards: [
          {
            title: "Miami: South Beach Art Deco Walking Tour",
            location: "Miami Beach, FL",
            duration: "2 hours",
            price: "From $25",
          },
          {
            title: "Key West: Snorkeling Trip with Breakfast & Lunch",
            location: "Key West, FL",
            duration: "6.5 hours",
            price: "From $95",
          },
          {
            title: "New Orleans: French Quarter Food Walking Tour",
            location: "New Orleans, LA",
            duration: "3 hours",
            price: "From $39",
          },
          {
            title: "South Padre Island: Dolphin Watch & Snorkeling",
            location: "South Padre Island, TX",
            duration: "3 hours",
            price: "From $45",
          },
          {
            title: "Savannah: Trolley Tour of Historic District",
            location: "Savannah, GA",
            duration: "1.5 hours",
            price: "From $35",
          },
          {
            title: "Everglades: Airboat Ride & Wildlife Show",
            location: "Miami, FL",
            duration: "4 hours",
            price: "From $29",
          },
        ],
      },
      hotels: {
        eyebrow: "Where to Stay",
        title: "Best Southern Hotels",
        description:
          "Find the perfect accommodation — from beachfront resorts in South Beach to charming boutique hotels in Savannah. Book with confidence.",
        checkAvailability: "Check Availability",
        cards: [
          {
            name: "South Beach Oceanfront Hotels",
            description:
              "Stay steps from the sand in Miami's most iconic beachfront properties. Art Deco charm meets luxury amenities.",
            location: "South Beach, Miami",
            priceRange: "$180 – $600/night",
            amenities: ["Oceanfront", "Pool", "Dining"],
          },
          {
            name: "Miami Beach Oceanfront Resorts",
            description:
              "World-class oceanfront resorts with infinity pools, spa treatments, and direct beach access in Miami Beach.",
            location: "Miami Beach, FL",
            priceRange: "$250 – $900/night",
            amenities: ["Resort", "Spa", "Beach"],
          },
          {
            name: "Best Hotels in Key West",
            description:
              "Charming boutique hotels and tropical resorts. Wake up to turquoise waters and palm-lined pools.",
            location: "Key West, FL",
            priceRange: "$150 – $450/night",
            amenities: ["Boutique", "Pool", "Free WiFi"],
          },
          {
            name: "South Padre Island Hotels",
            description:
              "Beachfront condos and family-friendly resorts on the Texas coast. Perfect for water sports and relaxation.",
            location: "South Padre Island, TX",
            priceRange: "$120 – $350/night",
            amenities: ["Beachfront", "Family", "Parking"],
          },
        ],
      },
      blog: {
        eyebrow: "Travel Guides & Tips",
        title: "From the Blog",
        description:
          "Expert travel guides, hotel reviews, and insider tips to help you plan the perfect Southern getaway.",
        viewAll: "View All Articles",
      },
    },
    footer: {
      tagline:
        "Your ultimate guide to exploring the best destinations, tours, and hotels across the Southern United States.",
      destinations: "Destinations",
      resources: "Resources",
      legal: "Legal",
      travelBlog: "Travel Blog",
      aboutUs: "About Us",
      contact: "Contact",
      bestHotels: "Best Hotels South Beach",
      foodTours: "New Orleans Food Tours",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      dmca: "DMCA",
      legalNotice: "Legal Notice",
      parentsInfo: "Parents Info",
      rights: "All rights reserved.",
      poweredBy: "Tours & activities powered by",
      destinationsList: [
        "South Beach Miami",
        "Key West",
        "New Orleans",
        "South Padre Island",
        "Savannah",
      ],
    },
    about: {
      metaTitle: "About SouthVoyage | Southern USA Travel Guide",
      metaDescription:
        "About SouthVoyage, your Southern USA travel guide for South Beach, Key West, New Orleans, Savannah, and South Padre Island.",
      metaKeywords:
        "about southvoyage, southern usa travel guide, south beach miami travel guide, key west travel guide, new orleans travel planning, savannah tourism guide, south padre island vacation planning, florida louisiana georgia texas travel",
      ogDescription:
        "Discover how SouthVoyage curates destination guides, hotel reviews, booking tips, and activity recommendations for travelers exploring the American South.",
      heroEyebrow: "About Us",
      heroTitleTop: "Your Guide to the",
      heroTitleAccent: "American South",
      heroDescription:
        "SouthVoyage helps thousands of travelers discover the best tours, hotels, and hidden gems across the Southern United States — from the Art Deco glamour of South Beach to the soulful streets of New Orleans.",
      missionEyebrow: "Our Mission",
      missionTitle: "Making Southern Travel Effortless",
      missionParagraphs: [
        "We believe the Southern United States is one of the most diverse and exciting travel regions in the world. From turquoise Gulf waters and barrier island beaches to world-class cuisine, live music, and centuries of history — there's something here for every type of traveler.",
        "SouthVoyage was created to cut through the noise. We research, review, and curate the best experiences so you can spend less time planning and more time exploring.",
      ],
      stats: [
        { value: "5", label: "Destinations" },
        { value: "50+", label: "Curated Tours" },
        { value: "8", label: "Travel Guides" },
        { value: "4", label: "US States" },
      ],
      valuesEyebrow: "Why SouthVoyage",
      valuesTitle: "What Sets Us Apart",
      values: [
        {
          title: "Expert Curation",
          description:
            "We handpick every tour, hotel, and activity recommendation based on real traveler reviews, local insights, and firsthand experience across the American South.",
        },
        {
          title: "Traveler-First",
          description:
            "Our guides are designed to save you time and money. We highlight the best seasons to visit, insider booking tips, and honest price comparisons.",
        },
        {
          title: "Local Knowledge",
          description:
            "From the French Quarter's hidden gems to South Beach's best-kept secrets, we partner with local experts who know these destinations inside out.",
        },
        {
          title: "Trusted Partners",
          description:
            "We work exclusively with reputable booking platforms to ensure secure reservations, instant confirmations, and hassle-free cancellation policies.",
        },
      ],
      coverageEyebrow: "Our Coverage",
      coverageTitle: "Destinations We Cover",
      coverageDescription:
        "We specialize in the most sought-after destinations across Florida, Louisiana, Georgia, and Texas — with more coming soon.",
      destinations: [
        "South Beach, Miami",
        "Key West, Florida",
        "New Orleans, Louisiana",
        "South Padre Island, Texas",
        "Savannah, Georgia",
      ],
      legalTitle: "Legal Notice",
      legalSections: [
        {
          title: "Website Operator",
          description:
            "SouthVoyage.com is an independently operated travel information and affiliate website. We provide curated travel guides, hotel recommendations, and tour listings for destinations across the Southern United States.",
        },
        {
          title: "Affiliate Disclosure",
          description:
            "SouthVoyage.com participates in affiliate programs, including the GetYourGuide Partner Program. When you book a tour or activity through our links, we may earn a commission at no additional cost to you. This helps support our team and allows us to continue creating free travel content.",
        },
        {
          title: "Content & Accuracy",
          description:
            "All information on this website — including hotel descriptions, tour details, prices, and travel tips — is provided for informational purposes and based on our research at the time of publication. Prices, availability, and details may change. We recommend verifying all information directly with the service provider before booking.",
        },
        {
          title: "Copyright",
          description:
            "© SouthVoyage.com — All rights reserved. All content, including text, images, and design, is the property of SouthVoyage.com and may not be reproduced without written permission.",
        },
        {
          title: "Contact",
          description:
            "For questions, corrections, or business inquiries, please contact us at",
        },
      ],
      ctaTitle: "Ready to Explore?",
      ctaDescription:
        "Start planning your Southern adventure with our curated destination guides and top-rated tour recommendations.",
      ctaPrimary: "Explore Destinations",
      ctaSecondary: "Read the Blog",
    },
    contact: {
      metaTitle: "Contact SouthVoyage | Southern USA Travel Help",
      metaDescription:
        "Contact SouthVoyage for Southern USA travel tips, hotel and tour recommendations, partnerships, press, and content corrections.",
      metaKeywords:
        "contact southvoyage, southern usa travel help, south beach travel questions, key west travel advice, new orleans travel contact, partnership inquiries southvoyage, travel guide corrections",
      heroEyebrow: "Contact",
      heroTitle: "Get in Touch",
      heroDescription:
        "Have a question, suggestion, or partnership inquiry? We'd love to hear from you.",
      cards: [
        {
          title: "Email Us",
          desc: "contact@southvoyage.com",
          sub: "We respond within 24–48 hours",
        },
        {
          title: "Content Corrections",
          desc: "editor@southvoyage.com",
          sub: "Help us keep info accurate",
        },
        {
          title: "Coverage Area",
          desc: "Southern United States",
          sub: "FL, LA, GA, TX & expanding",
        },
      ],
      formTitle: "Send Us a Message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "you@email.com",
      subjectPlaceholder: "What's this about?",
      messagePlaceholder: "Tell us more...",
      sending: "Sending...",
      send: "Send Message",
      toastErrorTitle: "Message not sent",
      toastErrorDescription: "Please try again in a moment or email us directly.",
      toastSuccessTitle: "Message sent",
      toastSuccessDescription: "Thanks for reaching out — we'll get back to you soon.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      destinations: "Destinos",
      tours: "Tours",
      hotels: "Hoteles",
      activities: "Actividades",
      about: "Sobre nosotros",
      contact: "Contacto",
      blog: "Blog",
      bookTour: "Reservar tour",
      language: "Idioma",
    },
    home: {
      metaTitle: "Guía del Sur de EE. UU. | SouthVoyage",
      metaDescription:
        "Guía del sur de EE. UU. con hoteles en South Beach, tours en Key West, comida en Nueva Orleans y consejos para Savannah y South Padre Island.",
      metaKeywords:
        "viajes sur de estados unidos, hoteles south beach miami, mejores hoteles south beach, hoteles frente al mar miami beach, tours key west, snorkel key west, tours nueva orleans, food tours french quarter, hoteles south padre island, guía savannah georgia",
      ogTitle: "SouthVoyage — Descubre el sur de Estados Unidos",
      ogDescription:
        "Encuentra guías de destinos, consejos de hoteles, tours gastronómicos, escapadas de playa y actividades destacadas en South Beach, Key West, Nueva Orleans, Savannah y South Padre Island.",
      hero: {
        eyebrow: "Tu guía de viaje del sur de EE. UU.",
        titleTop: "Descubre el",
        titleAccent: "sur de Estados Unidos",
        description:
          "Desde las playas vibrantes de Miami hasta las calles llenas de jazz de Nueva Orleans. Explora los mejores tours, hoteles y rincones ocultos del sur de Estados Unidos.",
        primaryCta: "Explorar destinos",
        secondaryCta: "Encontrar tours",
      },
      destinations: {
        eyebrow: "Dónde ir",
        title: "Mejores destinos del sur",
        description:
          "Explora las ciudades y playas más cautivadoras del sur de Estados Unidos, cada una con experiencias inolvidables y hospitalidad cálida.",
        cards: [
          {
            name: "South Beach, Miami",
            description:
              "Arquitectura Art Deco icónica, vida nocturna de clase mundial y playas de arena blanca impecable junto a Ocean Drive.",
            tag: "Más popular",
          },
          {
            name: "Key West",
            description:
              "El punto más al sur de Estados Unidos, famoso por sus atardeceres, la casa de Hemingway y sus vibrantes arrecifes de coral.",
            tag: "Paraíso isleño",
          },
          {
            name: "Nueva Orleans",
            description:
              "La cuna del jazz, la legendaria cocina cajún y la energía inolvidable del French Quarter.",
            tag: "Cultura y música",
          },
          {
            name: "South Padre Island",
            description:
              "El principal destino de playa de Texas con observación de delfines, pesca en alta mar y sol todo el año.",
            tag: "Escapada de playa",
          },
          {
            name: "Savannah",
            description:
              "Plazas encantadoras cubiertas de musgo español, arquitectura histórica y hospitalidad sureña en su máxima expresión.",
            tag: "Sur histórico",
          },
        ],
      },
      tours: {
        eyebrow: "Experiencias y actividades",
        title: "Tours y actividades populares",
        description:
          "Reserva los tours y actividades mejor valorados del sur de EE. UU. Experiencias seleccionadas con reseñas verificadas y confirmación instantánea.",
        reviewsLabel: "reseñas",
        viewDetails: "Ver detalles",
        browseAll: "Ver todos los tours",
        cards: [
          { title: "Miami: tour a pie Art Deco por South Beach", location: "Miami Beach, FL", duration: "2 horas", price: "Desde 25 $" },
          { title: "Key West: snorkel con desayuno y almuerzo", location: "Key West, FL", duration: "6,5 horas", price: "Desde 95 $" },
          { title: "Nueva Orleans: tour gastronómico a pie por French Quarter", location: "Nueva Orleans, LA", duration: "3 horas", price: "Desde 39 $" },
          { title: "South Padre Island: avistamiento de delfines y snorkel", location: "South Padre Island, TX", duration: "3 horas", price: "Desde 45 $" },
          { title: "Savannah: tour en tranvía por el distrito histórico", location: "Savannah, GA", duration: "1,5 horas", price: "Desde 35 $" },
          { title: "Everglades: paseo en aerodeslizador y show de fauna", location: "Miami, FL", duration: "4 horas", price: "Desde 29 $" },
        ],
      },
      hotels: {
        eyebrow: "Dónde alojarse",
        title: "Mejores hoteles del sur",
        description:
          "Encuentra el alojamiento ideal: desde resorts frente al mar en South Beach hasta hoteles boutique con encanto en Savannah. Reserva con confianza.",
        checkAvailability: "Ver disponibilidad",
        cards: [
          {
            name: "Hoteles frente al mar en South Beach",
            description:
              "Alójate a pasos de la arena en algunas de las propiedades más icónicas de Miami. Encanto Art Deco y servicios de lujo.",
            location: "South Beach, Miami",
            priceRange: "180 $ – 600 $/noche",
            amenities: ["Frente al mar", "Piscina", "Restauración"],
          },
          {
            name: "Resorts frente al mar en Miami Beach",
            description:
              "Resorts de primer nivel con piscinas infinitas, spa y acceso directo a la playa en Miami Beach.",
            location: "Miami Beach, FL",
            priceRange: "250 $ – 900 $/noche",
            amenities: ["Resort", "Spa", "Playa"],
          },
          {
            name: "Mejores hoteles en Key West",
            description:
              "Hoteles boutique con encanto y resorts tropicales. Despierta con aguas turquesa y piscinas rodeadas de palmeras.",
            location: "Key West, FL",
            priceRange: "150 $ – 450 $/noche",
            amenities: ["Boutique", "Piscina", "Wi‑Fi gratis"],
          },
          {
            name: "Hoteles en South Padre Island",
            description:
              "Condominios frente a la playa y resorts familiares en la costa de Texas. Perfectos para deportes acuáticos y relax.",
            location: "South Padre Island, TX",
            priceRange: "120 $ – 350 $/noche",
            amenities: ["Frente a la playa", "Familiar", "Parking"],
          },
        ],
      },
      blog: {
        eyebrow: "Guías y consejos de viaje",
        title: "Desde el blog",
        description:
          "Guías expertas, reseñas de hoteles y consejos locales para ayudarte a planear la escapada sureña perfecta.",
        viewAll: "Ver todos los artículos",
      },
    },
    footer: {
      tagline:
        "Tu guía definitiva para descubrir los mejores destinos, tours y hoteles del sur de Estados Unidos.",
      destinations: "Destinos",
      resources: "Recursos",
      legal: "Legal",
      travelBlog: "Blog de viajes",
      aboutUs: "Sobre nosotros",
      contact: "Contacto",
      bestHotels: "Mejores hoteles en South Beach",
      foodTours: "Tours gastronómicos en Nueva Orleans",
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      cookies: "Política de cookies",
      dmca: "DMCA",
      legalNotice: "Aviso legal",
      parentsInfo: "Información para padres",
      rights: "Todos los derechos reservados.",
      poweredBy: "Tours y actividades con tecnología de",
      destinationsList: ["South Beach Miami", "Key West", "Nueva Orleans", "South Padre Island", "Savannah"],
    },
    about: {
      metaTitle: "Sobre SouthVoyage | Guía del Sur de EE. UU.",
      metaDescription:
        "Conoce SouthVoyage, tu guía del sur de EE. UU. para South Beach, Key West, Nueva Orleans, Savannah y South Padre Island.",
      metaKeywords:
        "sobre southvoyage, guía de viaje sur de estados unidos, guía south beach miami, guía key west, viaje nueva orleans, guía turismo savannah, vacaciones south padre island",
      ogDescription:
        "Descubre cómo SouthVoyage selecciona guías de destinos, reseñas de hoteles, consejos de reserva y actividades para viajeros que exploran el sur de Estados Unidos.",
      heroEyebrow: "Sobre nosotros",
      heroTitleTop: "Tu guía del",
      heroTitleAccent: "sur de Estados Unidos",
      heroDescription:
        "SouthVoyage ayuda a miles de viajeros a descubrir los mejores tours, hoteles y rincones ocultos del sur de Estados Unidos, desde el glamour Art Deco de South Beach hasta las calles llenas de alma de Nueva Orleans.",
      missionEyebrow: "Nuestra misión",
      missionTitle: "Hacer que viajar por el sur sea más fácil",
      missionParagraphs: [
        "Creemos que el sur de Estados Unidos es una de las regiones de viaje más diversas y emocionantes del mundo. Desde aguas turquesa del golfo y playas en islas barrera hasta cocina de primer nivel, música en vivo y siglos de historia, aquí hay algo para cada tipo de viajero.",
        "SouthVoyage nació para filtrar el ruido. Investigamos, revisamos y seleccionamos las mejores experiencias para que pases menos tiempo planeando y más tiempo explorando.",
      ],
      stats: [
        { value: "5", label: "Destinos" },
        { value: "50+", label: "Tours seleccionados" },
        { value: "8", label: "Guías de viaje" },
        { value: "4", label: "Estados" },
      ],
      valuesEyebrow: "Por qué SouthVoyage",
      valuesTitle: "Lo que nos diferencia",
      values: [
        {
          title: "Selección experta",
          description:
            "Elegimos cada tour, hotel y actividad según opiniones reales de viajeros, conocimiento local y experiencia de primera mano en el sur de Estados Unidos.",
        },
        {
          title: "Pensado para el viajero",
          description:
            "Nuestras guías están diseñadas para ahorrarte tiempo y dinero. Destacamos las mejores temporadas, consejos de reserva y comparaciones honestas de precios.",
        },
        {
          title: "Conocimiento local",
          description:
            "Desde joyas ocultas del French Quarter hasta secretos bien guardados de South Beach, colaboramos con expertos locales que conocen estos destinos a fondo.",
        },
        {
          title: "Socios de confianza",
          description:
            "Trabajamos únicamente con plataformas de reserva reputadas para ofrecer reservas seguras, confirmaciones inmediatas y políticas de cancelación sencillas.",
        },
      ],
      coverageEyebrow: "Nuestra cobertura",
      coverageTitle: "Destinos que cubrimos",
      coverageDescription:
        "Nos especializamos en los destinos más buscados de Florida, Luisiana, Georgia y Texas, y pronto habrá más.",
      destinations: ["South Beach, Miami", "Key West, Florida", "Nueva Orleans, Luisiana", "South Padre Island, Texas", "Savannah, Georgia"],
      legalTitle: "Aviso legal",
      legalSections: [
        {
          title: "Operador del sitio web",
          description:
            "SouthVoyage.com es un sitio independiente de información de viajes y afiliación. Ofrecemos guías seleccionadas, recomendaciones de hoteles y listados de tours para destinos del sur de Estados Unidos.",
        },
        {
          title: "Divulgación de afiliación",
          description:
            "SouthVoyage.com participa en programas de afiliados, incluido el programa de socios de GetYourGuide. Cuando reservas un tour o actividad mediante nuestros enlaces, podemos recibir una comisión sin coste adicional para ti. Esto ayuda a financiar nuestro trabajo y a seguir creando contenido gratuito.",
        },
        {
          title: "Contenido y exactitud",
          description:
            "Toda la información de este sitio —incluidas descripciones de hoteles, detalles de tours, precios y consejos de viaje— se ofrece solo con fines informativos y se basa en nuestra investigación en el momento de publicación. Los precios, la disponibilidad y los detalles pueden cambiar. Recomendamos verificar todo directamente con el proveedor antes de reservar.",
        },
        {
          title: "Derechos de autor",
          description:
            "© SouthVoyage.com — Todos los derechos reservados. Todo el contenido, incluidos textos, imágenes y diseño, es propiedad de SouthVoyage.com y no puede reproducirse sin permiso escrito.",
        },
        {
          title: "Contacto",
          description:
            "Para preguntas, correcciones o consultas comerciales, contáctanos en",
        },
      ],
      ctaTitle: "¿Listo para explorar?",
      ctaDescription:
        "Empieza a planear tu aventura sureña con nuestras guías de destinos y recomendaciones de tours mejor valorados.",
      ctaPrimary: "Explorar destinos",
      ctaSecondary: "Leer el blog",
    },
    contact: {
      metaTitle: "Contacto SouthVoyage | Ayuda de viaje",
      metaDescription:
        "Contacta con SouthVoyage para viajes por el sur de EE. UU., hoteles, tours, colaboraciones, prensa y correcciones de contenido.",
      metaKeywords:
        "contacto southvoyage, ayuda viajes sur de estados unidos, preguntas south beach, consejos key west, contacto nueva orleans, colaboraciones southvoyage",
      heroEyebrow: "Contacto",
      heroTitle: "Ponte en contacto",
      heroDescription:
        "¿Tienes una pregunta, sugerencia o propuesta de colaboración? Nos encantará saber de ti.",
      cards: [
        { title: "Escríbenos", desc: "contact@southvoyage.com", sub: "Respondemos en 24–48 horas" },
        { title: "Correcciones de contenido", desc: "editor@southvoyage.com", sub: "Ayúdanos a mantener la información precisa" },
        { title: "Zona de cobertura", desc: "Sur de Estados Unidos", sub: "FL, LA, GA, TX y en expansión" },
      ],
      formTitle: "Envíanos un mensaje",
      name: "Nombre",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@email.com",
      subjectPlaceholder: "¿De qué se trata?",
      messagePlaceholder: "Cuéntanos más...",
      sending: "Enviando...",
      send: "Enviar mensaje",
      toastErrorTitle: "Mensaje no enviado",
      toastErrorDescription: "Inténtalo de nuevo en un momento o escríbenos directamente.",
      toastSuccessTitle: "Mensaje enviado",
      toastSuccessDescription: "Gracias por escribirnos; te responderemos pronto.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      destinations: "Destinations",
      tours: "Tours",
      hotels: "Hôtels",
      activities: "Activités",
      about: "À propos",
      contact: "Contact",
      blog: "Blog",
      bookTour: "Réserver un tour",
      language: "Langue",
    },
    home: {
      metaTitle: "Guide du Sud des États-Unis | SouthVoyage",
      metaDescription:
        "Guide du sud des États-Unis avec hôtels à South Beach, tours à Key West, gastronomie à La Nouvelle-Orléans et conseils pour Savannah.",
      metaKeywords:
        "voyage sud des états-unis, hôtels south beach miami, meilleurs hôtels south beach, hôtels front de mer miami beach, tours key west, snorkeling key west, tours nouvelle-orléans, hôtels south padre island, guide savannah georgie",
      ogTitle: "SouthVoyage — Découvrez le sud des États-Unis",
      ogDescription:
        "Trouvez des guides de destination, conseils hôteliers, food tours, escapades balnéaires et activités incontournables à South Beach, Key West, La Nouvelle-Orléans, Savannah et South Padre Island.",
      hero: {
        eyebrow: "Votre guide de voyage du sud des États-Unis",
        titleTop: "Découvrez le",
        titleAccent: "sud des États-Unis",
        description:
          "Des plages animées de Miami aux rues pleines de jazz de La Nouvelle-Orléans. Explorez les meilleurs tours, hôtels et trésors cachés du sud des États-Unis.",
        primaryCta: "Explorer les destinations",
        secondaryCta: "Trouver des tours",
      },
      destinations: {
        eyebrow: "Où aller",
        title: "Les meilleures destinations du Sud",
        description:
          "Explorez les villes et plages les plus fascinantes du sud des États-Unis, chacune offrant des expériences inoubliables et une hospitalité chaleureuse.",
        cards: [
          {
            name: "South Beach, Miami",
            description:
              "Architecture Art déco emblématique, vie nocturne de classe mondiale et plages de sable blanc immaculées le long d'Ocean Drive.",
            tag: "Le plus populaire",
          },
          {
            name: "Key West",
            description:
              "Le point le plus au sud des États-Unis, célèbre pour ses couchers de soleil, la maison d'Hemingway et ses récifs coralliens vibrants.",
            tag: "Paradis insulaire",
          },
          {
            name: "La Nouvelle-Orléans",
            description:
              "Berceau du jazz, cuisine cajun légendaire et énergie inoubliable du French Quarter.",
            tag: "Culture & musique",
          },
          {
            name: "South Padre Island",
            description:
              "La destination balnéaire phare du Texas, avec observation des dauphins, pêche en haute mer et soleil toute l'année.",
            tag: "Escapade plage",
          },
          {
            name: "Savannah",
            description:
              "Charmantes places couvertes de mousse espagnole, architecture historique et hospitalité du Sud à son meilleur.",
            tag: "Sud historique",
          },
        ],
      },
      tours: {
        eyebrow: "Expériences & activités",
        title: "Tours et activités populaires",
        description:
          "Réservez les activités les mieux notées du sud des États-Unis. Des expériences sélectionnées avec des avis vérifiés et une confirmation instantanée.",
        reviewsLabel: "avis",
        viewDetails: "Voir les détails",
        browseAll: "Voir tous les tours",
        cards: [
          { title: "Miami : visite à pied Art déco de South Beach", location: "Miami Beach, FL", duration: "2 heures", price: "À partir de 25 $" },
          { title: "Key West : sortie snorkeling avec petit-déjeuner et déjeuner", location: "Key West, FL", duration: "6,5 heures", price: "À partir de 95 $" },
          { title: "La Nouvelle-Orléans : food tour à pied dans le French Quarter", location: "La Nouvelle-Orléans, LA", duration: "3 heures", price: "À partir de 39 $" },
          { title: "South Padre Island : dauphins et snorkeling", location: "South Padre Island, TX", duration: "3 heures", price: "À partir de 45 $" },
          { title: "Savannah : tour en trolley du quartier historique", location: "Savannah, GA", duration: "1,5 heure", price: "À partir de 35 $" },
          { title: "Everglades : hydroglisseur et spectacle animalier", location: "Miami, FL", duration: "4 heures", price: "À partir de 29 $" },
        ],
      },
      hotels: {
        eyebrow: "Où séjourner",
        title: "Les meilleurs hôtels du Sud",
        description:
          "Trouvez l'hébergement idéal, des resorts en bord de mer à South Beach aux hôtels-boutiques pleins de charme à Savannah. Réservez en toute confiance.",
        checkAvailability: "Vérifier la disponibilité",
        cards: [
          {
            name: "Hôtels en bord de mer à South Beach",
            description:
              "Séjournez à quelques pas du sable dans les établissements les plus emblématiques de Miami. Charme Art déco et équipements haut de gamme.",
            location: "South Beach, Miami",
            priceRange: "180 $ – 600 $/nuit",
            amenities: ["Bord de mer", "Piscine", "Restauration"],
          },
          {
            name: "Resorts en bord de mer à Miami Beach",
            description:
              "Resorts haut de gamme avec piscines à débordement, spa et accès direct à la plage à Miami Beach.",
            location: "Miami Beach, FL",
            priceRange: "250 $ – 900 $/nuit",
            amenities: ["Resort", "Spa", "Plage"],
          },
          {
            name: "Meilleurs hôtels à Key West",
            description:
              "Hôtels-boutiques charmants et resorts tropicaux. Réveillez-vous face à des eaux turquoise et des piscines bordées de palmiers.",
            location: "Key West, FL",
            priceRange: "150 $ – 450 $/nuit",
            amenities: ["Boutique", "Piscine", "Wi‑Fi gratuit"],
          },
          {
            name: "Hôtels à South Padre Island",
            description:
              "Condos en bord de mer et resorts familiaux sur la côte texane. Parfaits pour les sports nautiques et la détente.",
            location: "South Padre Island, TX",
            priceRange: "120 $ – 350 $/nuit",
            amenities: ["Front de mer", "Famille", "Parking"],
          },
        ],
      },
      blog: {
        eyebrow: "Guides et conseils de voyage",
        title: "Depuis le blog",
        description:
          "Guides experts, avis d'hôtels et conseils locaux pour vous aider à préparer l'escapade parfaite dans le Sud.",
        viewAll: "Voir tous les articles",
      },
    },
    footer: {
      tagline:
        "Votre guide essentiel pour découvrir les meilleures destinations, activités et hôtels du sud des États-Unis.",
      destinations: "Destinations",
      resources: "Ressources",
      legal: "Mentions légales",
      travelBlog: "Blog voyage",
      aboutUs: "À propos",
      contact: "Contact",
      bestHotels: "Meilleurs hôtels de South Beach",
      foodTours: "Food tours à La Nouvelle-Orléans",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      cookies: "Politique de cookies",
      dmca: "DMCA",
      legalNotice: "Mentions légales",
      parentsInfo: "Infos parents",
      rights: "Tous droits réservés.",
      poweredBy: "Tours et activités fournis par",
      destinationsList: ["South Beach Miami", "Key West", "La Nouvelle-Orléans", "South Padre Island", "Savannah"],
    },
    about: {
      metaTitle: "À propos de SouthVoyage | Guide du Sud des États-Unis",
      metaDescription:
        "Découvrez SouthVoyage, votre guide du sud des États-Unis pour South Beach, Key West, La Nouvelle-Orléans, Savannah et South Padre Island.",
      metaKeywords:
        "à propos southvoyage, guide voyage sud états-unis, guide south beach miami, guide key west, voyage nouvelle-orléans, guide savannah, vacances south padre island",
      ogDescription:
        "Découvrez comment SouthVoyage sélectionne des guides de destination, avis d'hôtels, conseils de réservation et activités pour les voyageurs explorant le sud des États-Unis.",
      heroEyebrow: "À propos",
      heroTitleTop: "Votre guide du",
      heroTitleAccent: "sud des États-Unis",
      heroDescription:
        "SouthVoyage aide des milliers de voyageurs à découvrir les meilleurs tours, hôtels et trésors cachés du sud des États-Unis, du glamour Art déco de South Beach aux rues pleines d'âme de La Nouvelle-Orléans.",
      missionEyebrow: "Notre mission",
      missionTitle: "Rendre le voyage dans le Sud plus simple",
      missionParagraphs: [
        "Nous pensons que le sud des États-Unis est l'une des régions les plus diverses et passionnantes au monde. Des eaux turquoise du golfe et des plages insulaires à la gastronomie de haut niveau, à la musique live et à des siècles d'histoire, il y en a pour tous les voyageurs.",
        "SouthVoyage a été créé pour filtrer le bruit. Nous recherchons, évaluons et sélectionnons les meilleures expériences pour que vous passiez moins de temps à planifier et plus de temps à explorer.",
      ],
      stats: [
        { value: "5", label: "Destinations" },
        { value: "50+", label: "Tours sélectionnés" },
        { value: "8", label: "Guides" },
        { value: "4", label: "États" },
      ],
      valuesEyebrow: "Pourquoi SouthVoyage",
      valuesTitle: "Ce qui nous distingue",
      values: [
        {
          title: "Sélection experte",
          description:
            "Nous choisissons chaque tour, hôtel et activité à partir d'avis voyageurs réels, d'informations locales et d'une expérience concrète dans le sud des États-Unis.",
        },
        {
          title: "Pensé pour le voyageur",
          description:
            "Nos guides vous font gagner du temps et de l'argent. Nous mettons en avant les meilleures saisons, les astuces de réservation et des comparatifs de prix honnêtes.",
        },
        {
          title: "Connaissance locale",
          description:
            "Des adresses cachées du French Quarter aux secrets bien gardés de South Beach, nous collaborons avec des experts locaux qui connaissent ces destinations sur le bout des doigts.",
        },
        {
          title: "Partenaires fiables",
          description:
            "Nous travaillons uniquement avec des plateformes de réservation reconnues afin d'assurer des réservations sécurisées, des confirmations immédiates et des conditions d'annulation simples.",
        },
      ],
      coverageEyebrow: "Notre couverture",
      coverageTitle: "Destinations couvertes",
      coverageDescription:
        "Nous nous concentrons sur les destinations les plus recherchées de Floride, Louisiane, Géorgie et Texas, avec d'autres à venir bientôt.",
      destinations: ["South Beach, Miami", "Key West, Floride", "La Nouvelle-Orléans, Louisiane", "South Padre Island, Texas", "Savannah, Géorgie"],
      legalTitle: "Mentions légales",
      legalSections: [
        {
          title: "Éditeur du site",
          description:
            "SouthVoyage.com est un site indépendant d'information voyage et d'affiliation. Nous proposons des guides sélectionnés, recommandations d'hôtels et listes de tours pour des destinations du sud des États-Unis.",
        },
        {
          title: "Divulgation d'affiliation",
          description:
            "SouthVoyage.com participe à des programmes d'affiliation, notamment le programme partenaire de GetYourGuide. Lorsque vous réservez via nos liens, nous pouvons percevoir une commission sans coût supplémentaire pour vous. Cela nous aide à continuer à produire du contenu gratuit.",
        },
        {
          title: "Contenu et exactitude",
          description:
            "Toutes les informations de ce site — descriptions d'hôtels, détails des tours, prix et conseils de voyage — sont fournies à titre informatif et reposent sur nos recherches au moment de la publication. Les prix, disponibilités et détails peuvent évoluer. Nous vous recommandons de vérifier directement auprès du prestataire avant de réserver.",
        },
        {
          title: "Droits d'auteur",
          description:
            "© SouthVoyage.com — Tous droits réservés. L'ensemble du contenu, y compris textes, images et design, est la propriété de SouthVoyage.com et ne peut être reproduit sans autorisation écrite.",
        },
        {
          title: "Contact",
          description:
            "Pour toute question, correction ou demande commerciale, contactez-nous à",
        },
      ],
      ctaTitle: "Prêt à explorer ?",
      ctaDescription:
        "Commencez à planifier votre aventure dans le Sud grâce à nos guides de destination et recommandations de tours les mieux notés.",
      ctaPrimary: "Explorer les destinations",
      ctaSecondary: "Lire le blog",
    },
    contact: {
      metaTitle: "Contact SouthVoyage | Aide voyage",
      metaDescription:
        "Contactez SouthVoyage pour conseils voyage dans le sud des États-Unis, hôtels, tours, partenariats, presse et corrections.",
      metaKeywords:
        "contact southvoyage, aide voyage sud états-unis, questions south beach, conseils key west, contact nouvelle-orléans, partenariats southvoyage",
      heroEyebrow: "Contact",
      heroTitle: "Entrer en contact",
      heroDescription:
        "Une question, une suggestion ou une demande de partenariat ? Nous serons ravis d'échanger avec vous.",
      cards: [
        { title: "Écrivez-nous", desc: "contact@southvoyage.com", sub: "Réponse sous 24 à 48 h" },
        { title: "Corrections de contenu", desc: "editor@southvoyage.com", sub: "Aidez-nous à garder nos informations exactes" },
        { title: "Zone couverte", desc: "Sud des États-Unis", sub: "FL, LA, GA, TX et plus à venir" },
      ],
      formTitle: "Envoyez-nous un message",
      name: "Nom",
      email: "E-mail",
      subject: "Sujet",
      message: "Message",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "vous@email.com",
      subjectPlaceholder: "Quel est le sujet ?",
      messagePlaceholder: "Dites-nous en plus...",
      sending: "Envoi en cours...",
      send: "Envoyer le message",
      toastErrorTitle: "Message non envoyé",
      toastErrorDescription: "Veuillez réessayer dans un instant ou nous écrire directement.",
      toastSuccessTitle: "Message envoyé",
      toastSuccessDescription: "Merci pour votre message — nous reviendrons vers vous rapidement.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      destinations: "Направления",
      tours: "Туры",
      hotels: "Отели",
      activities: "Активности",
      about: "О нас",
      contact: "Контакты",
      blog: "Блог",
      bookTour: "Забронировать тур",
      language: "Язык",
    },
    home: {
      metaTitle: "Гид по югу США | SouthVoyage",
      metaDescription:
        "Гид по югу США: отели South Beach, туры Key West, кухня New Orleans и советы для Savannah и South Padre Island.",
      metaKeywords:
        "путешествия по югу сша, отели south beach miami, лучшие отели south beach, отели у океана miami beach, туры key west, снорклинг key west, туры new orleans, отели south padre island, гид savannah",
      ogTitle: "SouthVoyage — откройте юг США",
      ogDescription:
        "Найдите гиды по направлениям, советы по отелям, гастротуры, пляжные поездки и лучшие активности в South Beach, Key West, Новом Орлеане, Savannah и South Padre Island.",
      hero: {
        eyebrow: "Ваш гид по югу США",
        titleTop: "Откройте",
        titleAccent: "юг США",
        description:
          "От ярких пляжей Майами до джазовых улиц Нового Орлеана. Исследуйте лучшие туры, отели и скрытые жемчужины южных штатов.",
        primaryCta: "Смотреть направления",
        secondaryCta: "Найти туры",
      },
      destinations: {
        eyebrow: "Куда поехать",
        title: "Лучшие направления юга",
        description:
          "Исследуйте самые захватывающие города и пляжи юга США — каждое направление дарит теплое гостеприимство и яркие впечатления.",
        cards: [
          {
            name: "South Beach, Miami",
            description:
              "Знаменитая архитектура ар-деко, мировая ночная жизнь и безупречные белые пляжи вдоль Ocean Drive.",
            tag: "Самое популярное",
          },
          {
            name: "Key West",
            description:
              "Самая южная точка США, известная потрясающими закатами, домом Хемингуэя и коралловыми рифами.",
            tag: "Островной рай",
          },
          {
            name: "New Orleans",
            description:
              "Родина джаза, легендарная каджунская кухня и незабываемая атмосфера French Quarter.",
            tag: "Культура и музыка",
          },
          {
            name: "South Padre Island",
            description:
              "Главный пляжный курорт Техаса с наблюдением за дельфинами, морской рыбалкой и солнцем круглый год.",
            tag: "Пляжный отдых",
          },
          {
            name: "Savannah",
            description:
              "Очаровательные площади под испанским мхом, историческая архитектура и южное гостеприимство во всей красе.",
            tag: "Исторический Юг",
          },
        ],
      },
      tours: {
        eyebrow: "Впечатления и активности",
        title: "Популярные туры и активности",
        description:
          "Бронируйте лучшие туры и развлечения по югу США. Отобранные впечатления с проверенными отзывами и мгновенным подтверждением.",
        reviewsLabel: "отзывов",
        viewDetails: "Подробнее",
        browseAll: "Смотреть все туры",
        cards: [
          { title: "Майами: пешеходный тур по ар-деко в South Beach", location: "Miami Beach, FL", duration: "2 часа", price: "от 25 $" },
          { title: "Key West: снорклинг с завтраком и обедом", location: "Key West, FL", duration: "6,5 часа", price: "от 95 $" },
          { title: "Новый Орлеан: гастропрогулка по French Quarter", location: "New Orleans, LA", duration: "3 часа", price: "от 39 $" },
          { title: "South Padre Island: дельфины и снорклинг", location: "South Padre Island, TX", duration: "3 часа", price: "от 45 $" },
          { title: "Savannah: тур на trolley по историческому району", location: "Savannah, GA", duration: "1,5 часа", price: "от 35 $" },
          { title: "Everglades: аэролодка и шоу дикой природы", location: "Miami, FL", duration: "4 часа", price: "от 29 $" },
        ],
      },
      hotels: {
        eyebrow: "Где остановиться",
        title: "Лучшие отели Юга",
        description:
          "Найдите идеальное проживание: от пляжных курортов South Beach до уютных бутик-отелей Savannah. Бронируйте уверенно.",
        checkAvailability: "Проверить наличие",
        cards: [
          {
            name: "Пляжные отели South Beach",
            description:
              "Живите в нескольких шагах от океана в самых знаковых отелях Майами. Очарование ар-деко и роскошные удобства.",
            location: "South Beach, Miami",
            priceRange: "180 $ – 600 $/ночь",
            amenities: ["У моря", "Бассейн", "Рестораны"],
          },
          {
            name: "Пляжные курорты Miami Beach",
            description:
              "Курорты мирового уровня с инфинити-бассейнами, спа и прямым выходом к пляжу в Miami Beach.",
            location: "Miami Beach, FL",
            priceRange: "250 $ – 900 $/ночь",
            amenities: ["Курорт", "Спа", "Пляж"],
          },
          {
            name: "Лучшие отели Key West",
            description:
              "Уютные бутик-отели и тропические курорты. Просыпайтесь рядом с бирюзовой водой и пальмами.",
            location: "Key West, FL",
            priceRange: "150 $ – 450 $/ночь",
            amenities: ["Бутик", "Бассейн", "Бесплатный Wi‑Fi"],
          },
          {
            name: "Отели South Padre Island",
            description:
              "Пляжные кондо и семейные курорты на побережье Техаса. Идеально для водных видов спорта и отдыха.",
            location: "South Padre Island, TX",
            priceRange: "120 $ – 350 $/ночь",
            amenities: ["У пляжа", "Для семьи", "Парковка"],
          },
        ],
      },
      blog: {
        eyebrow: "Гиды и советы",
        title: "Из блога",
        description:
          "Экспертные гиды, обзоры отелей и локальные советы, которые помогут спланировать идеальное путешествие по Югу.",
        viewAll: "Смотреть все статьи",
      },
    },
    footer: {
      tagline:
        "Ваш главный гид по лучшим направлениям, турам и отелям юга США.",
      destinations: "Направления",
      resources: "Ресурсы",
      legal: "Правовая информация",
      travelBlog: "Блог о путешествиях",
      aboutUs: "О нас",
      contact: "Контакты",
      bestHotels: "Лучшие отели South Beach",
      foodTours: "Гастротуры Нового Орлеана",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      cookies: "Политика cookies",
      dmca: "DMCA",
      legalNotice: "Юридическая информация",
      parentsInfo: "Информация для родителей",
      rights: "Все права защищены.",
      poweredBy: "Туры и активности предоставлены",
      destinationsList: ["South Beach Miami", "Key West", "New Orleans", "South Padre Island", "Savannah"],
    },
    about: {
      metaTitle: "О SouthVoyage | Гид по югу США",
      metaDescription:
        "Узнайте о SouthVoyage — вашем гиде по югу США для South Beach, Key West, New Orleans, Savannah и South Padre Island.",
      metaKeywords:
        "о southvoyage, гид по югу сша, гид south beach miami, гид key west, путешествие new orleans, гид savannah, отдых south padre island",
      ogDescription:
        "Узнайте, как SouthVoyage отбирает гиды по направлениям, обзоры отелей, советы по бронированию и активности для путешественников по югу США.",
      heroEyebrow: "О нас",
      heroTitleTop: "Ваш гид по",
      heroTitleAccent: "югу США",
      heroDescription:
        "SouthVoyage помогает тысячам путешественников находить лучшие туры, отели и скрытые жемчужины юга США — от ар-деко South Beach до атмосферных улиц Нового Орлеана.",
      missionEyebrow: "Наша миссия",
      missionTitle: "Сделать путешествия по Югу проще",
      missionParagraphs: [
        "Мы считаем юг США одним из самых разнообразных и захватывающих туристических регионов мира. От бирюзовых вод залива и барьерных островов до выдающейся кухни, живой музыки и вековой истории — здесь найдется что-то для каждого путешественника.",
        "SouthVoyage создан, чтобы отсечь шум. Мы исследуем, оцениваем и отбираем лучшие впечатления, чтобы вы тратили меньше времени на планирование и больше — на путешествия.",
      ],
      stats: [
        { value: "5", label: "Направлений" },
        { value: "50+", label: "Отобранных туров" },
        { value: "8", label: "Путеводителей" },
        { value: "4", label: "Штата" },
      ],
      valuesEyebrow: "Почему SouthVoyage",
      valuesTitle: "Что нас отличает",
      values: [
        {
          title: "Экспертный отбор",
          description:
            "Мы отбираем каждый тур, отель и активность на основе реальных отзывов путешественников, локальных знаний и практического опыта по югу США.",
        },
        {
          title: "Сначала путешественник",
          description:
            "Наши гиды помогают экономить время и деньги. Мы выделяем лучшие сезоны, инсайдерские советы по бронированию и честные сравнения цен.",
        },
        {
          title: "Локальная экспертиза",
          description:
            "От скрытых жемчужин French Quarter до малоизвестных мест South Beach — мы сотрудничаем с местными экспертами, которые знают эти направления изнутри.",
        },
        {
          title: "Надежные партнеры",
          description:
            "Мы работаем только с проверенными платформами бронирования, чтобы обеспечить безопасные резервации, мгновенные подтверждения и удобные условия отмены.",
        },
      ],
      coverageEyebrow: "Наше покрытие",
      coverageTitle: "Направления, которые мы освещаем",
      coverageDescription:
        "Мы специализируемся на самых востребованных направлениях Флориды, Луизианы, Джорджии и Техаса — и скоро добавим новые.",
      destinations: ["South Beach, Miami", "Key West, Florida", "New Orleans, Louisiana", "South Padre Island, Texas", "Savannah, Georgia"],
      legalTitle: "Юридическая информация",
      legalSections: [
        {
          title: "Оператор сайта",
          description:
            "SouthVoyage.com — независимый сайт о путешествиях и партнерских предложениях. Мы публикуем отобранные путеводители, рекомендации по отелям и подборки туров по югу США.",
        },
        {
          title: "Партнерское раскрытие",
          description:
            "SouthVoyage.com участвует в партнерских программах, включая программу GetYourGuide. Когда вы бронируете тур или активность по нашим ссылкам, мы можем получить комиссию без дополнительной стоимости для вас. Это помогает нам продолжать выпускать бесплатный контент.",
        },
        {
          title: "Контент и точность",
          description:
            "Вся информация на сайте — включая описания отелей, детали туров, цены и советы — предоставляется только в информационных целях и основана на наших исследованиях на момент публикации. Цены, наличие и детали могут меняться. Рекомендуем проверять информацию у поставщика перед бронированием.",
        },
        {
          title: "Авторские права",
          description:
            "© SouthVoyage.com — Все права защищены. Весь контент, включая тексты, изображения и дизайн, принадлежит SouthVoyage.com и не может воспроизводиться без письменного разрешения.",
        },
        {
          title: "Контакты",
          description:
            "По вопросам, исправлениям или деловым запросам пишите на",
        },
      ],
      ctaTitle: "Готовы исследовать?",
      ctaDescription:
        "Начните планировать свое путешествие по югу США с нашими гидами по направлениям и лучшими рекомендациями по турам.",
      ctaPrimary: "Смотреть направления",
      ctaSecondary: "Читать блог",
    },
    contact: {
      metaTitle: "Контакты SouthVoyage | Помощь в поездке",
      metaDescription:
        "Свяжитесь с SouthVoyage по поездкам по югу США, отелям, турам, партнёрствам, прессе и исправлениям контента.",
      metaKeywords:
        "контакты southvoyage, помощь по путешествиям юг сша, вопросы south beach, советы key west, контакты new orleans, партнерство southvoyage",
      heroEyebrow: "Контакты",
      heroTitle: "Связаться с нами",
      heroDescription:
        "Есть вопрос, идея или предложение о сотрудничестве? Будем рады получить ваше сообщение.",
      cards: [
        { title: "Напишите нам", desc: "contact@southvoyage.com", sub: "Отвечаем в течение 24–48 часов" },
        { title: "Исправления контента", desc: "editor@southvoyage.com", sub: "Помогите нам сохранять точность информации" },
        { title: "Регион покрытия", desc: "Юг США", sub: "FL, LA, GA, TX и расширяемся" },
      ],
      formTitle: "Отправьте нам сообщение",
      name: "Имя",
      email: "Email",
      subject: "Тема",
      message: "Сообщение",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "you@email.com",
      subjectPlaceholder: "О чем это сообщение?",
      messagePlaceholder: "Расскажите подробнее...",
      sending: "Отправка...",
      send: "Отправить сообщение",
      toastErrorTitle: "Сообщение не отправлено",
      toastErrorDescription: "Пожалуйста, попробуйте снова чуть позже или напишите нам напрямую.",
      toastSuccessTitle: "Сообщение отправлено",
      toastSuccessDescription: "Спасибо за сообщение — мы скоро ответим.",
    },
  },
} as const;
