/*
 * Seed apartment data for the West Boca apartment comparison tool.
 *
 * IMPORTANT: rents and distances below are approximate, gathered from public
 * listing sites in May 2026. Pricing changes constantly — treat these as a
 * starting point and confirm with each community before deciding. Every entry
 * has a `source` link so you can verify the latest numbers.
 *
 * Distances are straight-line estimates within West Boca Raton and are meant
 * for relative comparison only. You can edit any field right in the app.
 *
 * The "golf course" reference point is the cluster of West Boca golf
 * communities (Boca West Country Club / Boca Lago / Boca Golf & Tennis).
 * There is no public "Breakers" golf course in West Boca — The Breakers is in
 * Palm Beach — so distances use the nearest West Boca golf course.
 */

const SEED_APARTMENTS = [
  {
    id: "arbor-oaks",
    name: "Arbor Oaks Apartments & Townhomes",
    address: "9817 Arbor Oaks Ln, Boca Raton, FL 33428",
    beds: 2,
    baths: 2,
    sqftLow: 820,
    sqftHigh: 1400,
    rent2br: 2150,        // 2BR starting; smaller 1BR units start ~$1,930
    rent1br: 1930,
    milesToGolf: 1.5,     // near Boca Lago Golf & Country Club
    milesToAldi: 2.5,
    petFriendly: true,
    petNote: "$500 non-refundable + $50/mo per pet",
    amenities: ["Resort-style pool", "Fitness center", "Game room", "Lake views", "Townhome options"],
    source: "https://www.apartments.com/arbor-oaks-apartments-townhomes-boca-raton-fl/gq30stx/",
    notes: "Best shot at staying near/under $2k — lower-end 1BR units dip below budget.",
  },
  {
    id: "cortland-uptown",
    name: "Cortland Uptown Boca",
    address: "20940 Uptown Ave, Boca Raton, FL 33428",
    beds: 2,
    baths: 2,
    sqftLow: 718,
    sqftHigh: 1737,
    rent2br: 2645,
    rent1br: 2100,
    milesToGolf: 2.0,
    milesToAldi: 0.3,     // Aldi is inside the Uptown Boca shopping center — walkable
    petFriendly: true,
    petNote: "Pet friendly (deposit + monthly rent apply)",
    amenities: ["Walk to Aldi/shops/dining", "Luxury finishes", "Pool", "Fitness center", "Near Turnpike"],
    source: "https://www.apartments.com/cortland-uptown-boca-boca-raton-fl/dxnyyhl/",
    notes: "Unbeatable for the Aldi requirement (walkable), but 2BR runs well over $2k.",
  },
  {
    id: "residences-uptown",
    name: "The Residences at Uptown",
    address: "9500 Glades Rd, Boca Raton, FL 33428",
    beds: 1,
    baths: 1,
    sqftLow: 800,
    sqftHigh: 1400,
    rent2br: 2400,
    rent1br: 1800,        // some units advertised starting ~$1,800
    milesToGolf: 3.0,
    milesToAldi: 0.5,
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["On Glades Rd corridor", "Class-A luxury", "Pool", "Fitness center", "Close to Aldi"],
    source: "https://rpfla.com/portfolio_page/the-residences-at-uptown/",
    notes: "Smaller units can land near budget; great Aldi proximity on Glades Rd.",
  },
  {
    id: "addison-place",
    name: "Addison Place",
    address: "21925 Mizner Way, Boca Raton, FL 33433",
    beds: 2,
    baths: 2,
    sqftLow: 1000,
    sqftHigh: 1450,
    rent2br: 2185,
    rent1br: 1850,
    milesToGolf: 2.0,     // near Boca West Country Club
    milesToAldi: 1.0,     // Aldi on Powerline Rd nearby
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["Resort pool & spa", "Clubhouse", "24hr fitness", "Tennis court", "Car wash"],
    source: "https://www.apartments.com/addison-place-boca-raton-fl/pdv5gss/",
    notes: "Closest of the luxury options to Boca West golf; 2BR just over $2k.",
  },
  {
    id: "luxe-boca",
    name: "The Luxe at Boca",
    address: "9860 SW 3rd St, Boca Raton, FL 33428",
    beds: 2,
    baths: 2,
    sqftLow: 750,
    sqftHigh: 1300,
    rent2br: 2295,
    rent1br: 1950,
    milesToGolf: 2.0,
    milesToAldi: 2.0,
    petFriendly: true,
    petNote: "Two dog parks on-site",
    amenities: ["Multiple pools", "Tennis court", "Two dog parks", "Spa/hot tub", "Granite counters"],
    source: "https://www.theluxeatboca.com/",
    notes: "Strong amenities; 1BR can approach budget, 2BR a bit above.",
  },
];

// Reference points used for the "what matters to you" scoring.
const TARGET = {
  budget: 2000,          // your target monthly rent
  golfLabel: "West Boca golf course (Boca West / Boca Lago area)",
  aldiLabel: "Nearest Aldi",
};
