const DB = {
  Hauptgerichte: [
    {
      name: "BBQ-Rippchen",
      ingredients: [
        "Schweinerippchen",
        "BBQ-Soße",
        "Brauner Zucker",
        "Knoblauchpulver",
        "Paprika",
      ],
      price: 18.99,
      description:
        "Zarte Schweinerippchen mit einer würzigen BBQ-Soße und perfekt karamellisiertem Belag.",
      basketValue: 0,
    },
    {
      name: "Gegrilltes Hähnchen",
      ingredients: [
        "Hähnchenbrust",
        "BBQ-Soße",
        "Honig",
        "Zitronensaft",
        "Schwarzer Pfeffer",
      ],
      price: 15.49,
      description:
        "Saftige Hähnchenbrust, mariniert in einer süß-sauren BBQ-Mischung und perfekt gegrillt.",
      basketValue: 0,
    },
    {
      name: "Geräuchertes Brisket",
      ingredients: [
        "Rinderbrust",
        "Salz",
        "Pfeffer",
        "Geräuchertes Paprikapulver",
        "Zwiebelpulver",
      ],
      price: 22.99,
      description:
        "Langsam gegarte Rinderbrust mit intensiven Raucharomen und einer würzigen Kruste.",
      basketValue: 0,
    },
    {
      name: "Pulled Pork Sandwich",
      ingredients: [
        "Pulled Pork",
        "BBQ-Soße",
        "Brioche-Brötchen",
        "Krautsalat",
        "Gewürzgurken",
      ],
      price: 12.99,
      description:
        "Zartes Pulled Pork in einem fluffigen Brioche-Brötchen mit frischem Krautsalat.",
      basketValue: 0,
    },
    {
      name: "BBQ-Lachs",
      ingredients: [
        "Lachsfilet",
        "BBQ-Glasur",
        "Knoblauch",
        "Limettensaft",
        "Dill",
      ],
      price: 17.49,
      description:
        "Frischer Lachs, glasiert mit einer süß-herzhaften BBQ-Sauce und leicht gegrillt.",
      basketValue: 0,
    },
  ],
  Snacks: [
    {
      name: "BBQ-Nachos",
      ingredients: [
        "Tortilla-Chips",
        "Pulled Pork",
        "Käsesoße",
        "Jalapeños",
        "Sauerrahm",
      ],
      price: 9.99,
      description:
        "Knusprige Tortilla-Chips belegt mit saftigem Pulled Pork, Käse und pikanten Jalapeños.",
      basketValue: 0,
    },
    {
      name: "Geräucherte Flügel",
      ingredients: [
        "Hähnchenflügel",
        "BBQ-Gewürz",
        "Honig-Senf",
        "Sellerie",
        "Karottensticks",
      ],
      price: 8.99,
      description:
        "Knusprige Hähnchenflügel mit einer rauchigen Gewürzmischung und Honig-Senf-Dip.",
      basketValue: 0,
    },
    {
      name: "BBQ-Fleischbällchen",
      ingredients: [
        "Hackfleisch",
        "BBQ-Soße",
        "Semmelbrösel",
        "Zwiebeln",
        "Eier",
      ],
      price: 7.99,
      description:
        "Herzhafte Fleischbällchen, umhüllt von einer süß-würzigen BBQ-Soße.",
      basketValue: 0,
    },
    {
      name: "Gegrillte Garnelenspieße",
      ingredients: [
        "Garnelen",
        "BBQ-Glasur",
        "Knoblauch",
        "Zitrone",
        "Petersilie",
      ],
      price: 10.49,
      description:
        "Zarte Garnelen am Spieß, verfeinert mit einer würzigen BBQ-Glasur.",
      basketValue: 0,
    },
    {
      name: "Gefüllte Jalapeños",
      ingredients: [
        "Jalapeños",
        "Frischkäse",
        "Speck",
        "Cheddar",
        "Frühlingszwiebeln",
      ],
      price: 6.99,
      description:
        "Würzige Jalapeños, gefüllt mit cremigem Käse und knusprigem Speck.",
      basketValue: 0,
    },
  ],
  Getränke: [
    {
      name: "BBQ-Limonade",
      price: 3.99,
      description:
        "Erfrischende Limonade mit einem Hauch von Rauch und Zitrus.",
      basketValue: 0,
    },
    {
      name: "Geräucherter Old Fashioned",
      price: 7.99,
      description: "Ein klassischer Cocktail mit einer rauchigen Note.",
      basketValue: 0,
    },
    {
      name: "Süßer Tee",
      price: 2.99,
      description: "Hausgemachter süßer Tee, perfekt gekühlt.",
      basketValue: 0,
    },
    {
      name: "BBQ-Bier",
      price: 5.49,
      description: "Ein speziell gebrautes Bier mit einer rauchigen Note.",
      basketValue: 0,
    },
    {
      name: "Root Beer Float",
      price: 4.99,
      description: "Cremiges Vanilleeis in spritzigem Root Beer.",
      basketValue: 0,
    },
    {
      name: "Sprudelwasser",
      price: 2.49,
      description: "Erfrischendes Mineralwasser mit Kohlensäure.",
      basketValue: 0,
    },
    {
      name: "Eiskaffee",
      price: 3.49,
      description: "Gekühlter Kaffee mit einer süßen Note.",
      basketValue: 0,
    },
    {
      name: "Beerenlimonade",
      price: 4.49,
      description: "Fruchtige Limonade mit frischen Beeren.",
      basketValue: 0,
    },
  ],
  Nachspeisen: [
    {
      name: "BBQ-Käsekuchen",
      ingredients: [
        "Frischkäse",
        "BBQ-Glasur",
        "Keksboden",
        "Zucker",
        "Vanille",
      ],
      price: 6.99,
      description: "Cremiger Käsekuchen mit einer einzigartigen BBQ-Glasur.",
      basketValue: 0,
    },
    {
      name: "Gegrillte Ananas",
      ingredients: [
        "Ananas",
        "Brauner Zucker",
        "Zimt",
        "Honig",
        "Limettenschale",
      ],
      price: 5.49,
      description:
        "Süße Ananas, gegrillt und mit einem Hauch von Zimt und Honig verfeinert.",
      basketValue: 0,
    },
    {
      name: "Geräucherter Apfelkuchen",
      ingredients: [
        "Äpfel",
        "Mürbeteig",
        "Zimt",
        "Brauner Zucker",
        "Muskatnuss",
      ],
      price: 7.99,
      description:
        "Klassischer Apfelkuchen mit einem Hauch von Rauch für ein besonderes Aroma.",
      basketValue: 0,
    },
    {
      name: "BBQ-Brownies",
      ingredients: ["Schokolade", "Butter", "Zucker", "Eier", "BBQ-Gewürz"],
      price: 6.49,
      description: "Saftige Brownies mit einer dezenten BBQ-Würze.",
      basketValue: 0,
    },
    {
      name: "Vanilleeis mit BBQ-Soße",
      ingredients: ["Vanilleeis", "BBQ-Soße", "Karamell", "Nüsse", "Kirschen"],
      price: 5.99,
      description:
        "Cremiges Vanilleeis, garniert mit einer süß-würzigen BBQ-Soße.",
      basketValue: 0,
    },
  ],
};
