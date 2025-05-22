export const subcategories = [
  // Schönwalde entdecken
  // {
  //   name: "Schönwalde entdecken",
  //   category: "Schönwalde entdecken",
  //   path: "/",
  // },

  // Bauland
  {
    name: "Baugrundstücke",
    category: "Bauland",
    path: "/bauLand#baugrundstuecke",
  },

  // Bildung & Gemeinschaft
  {
    name: "Kita Regenbogen",
    category: "Bildung & Gemeinschaft",
    path: "/education#kita",
    pathMain: "/education",
  },
  {
    name: "Grundschule",
    category: "Bildung & Gemeinschaft",
    path: "/education#grundschule",
    // path: "/education",
  },

  {
    name: "Mini - Bibliotek",
    category: "Bildung & Gemeinschaft",
    path: "/education#mini-bibliotek",
  },

  // Gemeinde & Verwaltung
  {
    name: "Amt Unterspreewald",
    category: "Gemeinde & Verwaltung",
    path: "/municipality#amt-unterspreewald",
  },
  {
    name: "Feuerwehr Schönwalde",
    category: "Gemeinde & Verwaltung",
    path: "/municipality#feuerwehr-schoenwalde",
  },
  {
    name: "Feuerwehr Waldow",
    category: "Gemeinde & Verwaltung",
    path: "/municipality#feuerwehr-waldow",
  },
  {
    name: "Kirche",
    category: "Gemeinde & Verwaltung",
    path: "/municipality#kirche",
  },

  // Handwerkgewerbe & Dienstleistungen

  {
    name: "Handwerkgewerbe & Dienstleistungen",
    category: "Handwerkgewerbe & Dienstleistungen",
    path: "/tradeServices",
    isCategoryLink: true, // спецпрапорець
  },

  {
    name: "Agrargemeinschaft Freiwalde/Schönwalde",
    category: "Handwerkgewerbe & Dienstleistungen",
    // path: "/tradeServices#autohaus-kunath",
    subCategory: "Landwirtschaft & Imkerei",
    path: "/tradeServices/landwirtschaft-&-imkerei#agrargemeinschaft-freiwalde-schoenwalde",
  },
  {
    name: "Autohaus Kunath",
    category: "Handwerkgewerbe & Dienstleistungen",
    // path: "/tradeServices#autohaus-kunath",
    path: "/tradeServices/kfz#autohaus-kunath",
    subCategory: "Kfz",
  },
  {
    name: "Autohaus Vogler",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Kfz",
    path: "/tradeServices/kfz#autohaus-vogler",
  },
  {
    name: "KFZ Werkstatt Mathias Wenske",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Kfz",
    path: "/tradeServices/kfz#kfz-werkstatt-mathias-wenske",
    },
  {
    name: "KFZ Meisterbetrieb Ronny Hess",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Kfz",
    path: "/tradeServices/kfz#kfz-meisterbetrieb-ronny-hess",
  },
  {
    name: "Bäckerei & Konditorei Kuske",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Lebensmittel & Genuss",
    path: "/tradeServices/lebensmittel-&-genuss#baeckerei-und-konditorei-kuske",
  },
  {
    name: "Der Pflegedienst",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Pflege & Betreuung",
    path: "/tradeServices/pflege-&-betreuung#der-pflegedienst",
  },
  {
    name: "Fleischerei Tischler",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Lebensmittel & Genuss",
    path: "/tradeServices/lebensmittel-&-genuss#fleischerei-tischler",
  },
  {
    name: "Friseursalon",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Schönheit",
    path: "/tradeServices/schoenheit#friseursalon",
  },
  {
    name: "Hämmerling B. Häusliche Krankenpflege",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Pflege & Betreuung",
    path: "/tradeServices/pflege-&-betreuung#haemmerling-b-haeusliche-krankenpflege",
  },
  // {
  //   name: "Hundesalon Schick Schick",
  //   category: "Handwerkgewerbe & Dienstleistungen",
  //   subCategory: "Pflege, Schönheit & Betreuung",
  //   path: "/tradeServices/pflege-schoenheit-&-betreuung#hundesalon-schick-schick",
  // },
  {
    name: "Imkerei Morgner",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Landwirtschaft & Imkerei",
    path: "/tradeServices/landwirtschaft-&-imkerei#imkerei-morgner",
  },
  {
    name: "Imkerei Rippert",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Landwirtschaft & Imkerei",
    path: "/tradeServices/landwirtschaft-&-imkerei#imkerei-rippert",
  },
  {
    name: "Imkerei Haus 5",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Landwirtschaft & Imkerei",
    path: "/tradeServices/landwirtschaft-&-imkerei#imkerei-haus5",
  },
  {
    name: "Ingo Richter Dachdecker",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Bau & Renovierung",
    path: "/tradeServices/bau-&-renovierung#ingo-richter-dachdecker",
  },
  {
    name: "Kampfmittelbergung & Sprengtechnik",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Technische Dienstleistungen",
    path: "/tradeServices/technische-dienstleistungen#kampfmittelbergung-und-sprengtechnik",
  },
  {
    name: "KOMPLETT Gerüstbau GmbH",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Bau & Renovierung",
    path: "/tradeServices/bau-&-renovierung#komplett-geruestbau-gmbh",
  },
  {
    // name: "Mädchenträume by Eileen",
    name: "Mädchenträume by Eileen",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Schönheit",
    path: "/tradeServices/schoenheit#madchentraume-by-eileen",
  },
  {
    name: "Malerbetrieb Dieter Ihl",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Bau & Renovierung",
    path: "/tradeServices/bau-&-renovierung#malerbetrieb-dieter-ihl",
  },
  {
    name: "Morgner Haustechnik",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Bau & Renovierung",
    path: "/tradeServices/bau-&-renovierung#morgner-haustechnik",
  },
  {
    name: "MSD Baustoffrecycling Schoenwalde",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Bau & Renovierung",
    path: "/tradeServices/bau-&-renovierung#msd-baustoffrecycling-schoenwalde",
  },
  {
    name: "NOTUS energy",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Energie & Umwelt",
    path: "/tradeServices/energie-&-umwelt#notus-energy",
  },
  {
    name: "Tischlerei Schneider",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Energie & Umwelt",
    path: "/tradeServices/bau-&-renovierung#tischlerei-schneider",
  },
  {
    name: "Trocknungsservice Gefreiter GmbH",
    category: "Handwerkgewerbe & Dienstleistungen",
    subCategory: "Bau & Renovierung",
    path: "/tradeServices/bau-&-renovierung#trocknungsservice-gefreiter-gmbh",
  },

  // Natur & Freizeit
  {
    name: "Alpakafarm",
    category: "Natur & Freizeit",
    path: "/leisure#alpakafarm",
  },
  {
    name: "Dorfgemeindschaftshaus",
    category: "Natur & Freizeit",
    path: "/leisure#dorfgemeindschaftshaus",
  },
  {
    name: "Jugendclub",
    category: "Natur & Freizeit",
    path: "/leisure#jugendclub",
  },
  // {
  //   name: "Lebendiges Schönwalde",
  //   category: "Natur & Freizeit",
  //   path: "/leisure#lebendiges-schoenwalde",
  // },
  {
    name: "Mühlenverein",
    category: "Natur & Freizeit",
    path: "/leisure#muehlenverein",
  },
  {
    name: "Spreewald Ring Training Center",
    category: "Natur & Freizeit",
    path: "/leisure#spreewald-ring-training-center",
  },
  {
    name: "See",
    category: "Natur & Freizeit",
    path: "/leisure#see",
  },
  {
    name: "Spreewald Ring Kart Center",
    category: "Natur & Freizeit",
    path: "/leisure#spreewald-ring-kart-center",
  },
  {
    name: "Sportlerheim und Stadion",
    category: "Natur & Freizeit",
    path: "/leisure#sportlerheim-und-stadion",
  },

  // Verkehr & Infrastruktur
  {
    name: "Autobahn",
    category: "Verkehr & Infrastruktur",
    path: "/transport#autobahn",
  },
  {
    name: "Bahnhof",
    category: "Verkehr & Infrastruktur",
    path: "/transport#bahnhof",
  },
];
