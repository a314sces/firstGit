/*
 * Seed apartment data — near Breakers West Country Club, West Palm Beach.
 *
 * Golf reference point: Breakers West Country Club / Rees Jones Course,
 * 1550 Flagler Pkwy, West Palm Beach, FL 33411 (the western Breakers club,
 * near Royal Palm Beach — not the oceanfront Breakers on Palm Beach island).
 *
 * Aldi reference point: 1111 N State Road 7 (US-441), Royal Palm Beach, FL 33411.
 *
 * IMPORTANT: rents and distances are approximate, gathered from public listing
 * sites in May 2026. Pricing changes constantly — treat these as a starting
 * point and verify with each community before deciding. Every entry has a
 * `source` link for current numbers. Distances are straight-line estimates for
 * relative comparison only. You can edit any field right in the app.
 */

const SEED_APARTMENTS = [
  {
    id: "st-andrews",
    name: "St. Andrews Palm Beach",
    address: "1081 N Benoist Farms Rd, West Palm Beach, FL 33411",
    beds: 2,
    baths: 2,
    sqftLow: 900,
    sqftHigh: 1300,
    rent2br: 1662,    // 2BR starting ~$1,662; lowest units ~$1,453
    rent1br: 1453,
    milesToGolf: 3.5, // ~3.5 mi east of Breakers West, off Okeechobee Blvd
    milesToAldi: 2.5, // Aldi at 1111 N State Rd 7
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["3 swimming pools", "Spa", "Two playgrounds", "Private patios", "60-acre courtyard w/ pond"],
    source: "https://www.apartments.com/st-andrews-palm-beach-west-palm-beach-fl/xljxqlm/",
    notes: "Best overall value — a genuine 2BR well under $2k, closest to Breakers West of the affordable options.",
  },
  {
    id: "belvedere-isles",
    name: "Belvedere Isles",
    address: "1145 Golden Lakes Blvd, West Palm Beach, FL 33411",
    beds: 2,
    baths: 2,
    sqftLow: 950,
    sqftHigh: 1250,
    rent2br: 1900,    // est.; listings cluster ~$1,950-$2,050 (skews 3BR)
    rent1br: 1700,
    milesToGolf: 3.0,
    milesToAldi: 2.0,
    petFriendly: true,
    petNote: "Pet friendly (verify)",
    amenities: ["Lake views", "Pool", "Near Golden Lakes", "Easy 441 access", "Spacious floor plans"],
    source: "https://www.apartments.com/belvedere-isles-west-palm-beach-fl/",
    notes: "Inventory skews toward 3BR (~$1,950-$2,050); confirm current 2BR availability and pricing.",
  },
  {
    id: "rosemont-royal-palm",
    name: "Rosemont Royal Palm",
    address: "222 Kingfisher Way, Royal Palm Beach, FL 33411",
    beds: 2,
    baths: 2,
    sqftLow: 1000,
    sqftHigh: 1350,
    rent2br: 2026,    // 2BR range ~$1,956-$2,235
    rent1br: 1750,
    milesToGolf: 4.5,
    milesToAldi: 1.5,
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["Luxury finishes", "Resort pool", "Fitness center", "Near Coral Sky Plaza & Wellington Mall", "Clubhouse"],
    source: "https://www.apartments.com/rosemont-royal-palm-royal-palm-beach-fl/jeszge6/",
    notes: "Newest/most upscale of the three; 2BR hovers right around the $2k line. Closest to Aldi.",
  },
];

// Reference points used for scoring.
const TARGET = {
  budget: 2000,
  golfLabel: "Breakers West Country Club (1550 Flagler Pkwy, WPB 33411)",
  aldiLabel: "Aldi — 1111 N State Rd 7 (US-441), Royal Palm Beach",
};
