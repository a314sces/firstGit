/*
 * Seed apartment data — Palm Beach area, near The Breakers Golf Course.
 *
 * Reference point: The Breakers Palm Beach golf courses (Ocean Course & Rees
 * Jones Course), One South County Road, Palm Beach, FL 33480.
 *
 * IMPORTANT: rents and distances are approximate, gathered from public listing
 * sites in May 2026. Pricing changes constantly — treat these as a starting
 * point and verify with each community before deciding. Every entry has a
 * `source` link for current numbers.
 *
 * Distances are straight-line estimates via the most likely route (Dixie Hwy
 * or A1A / Southern Blvd bridge to Palm Beach island) and are for relative
 * comparison only.
 *
 * Nearest Aldi locations used for distances:
 *   • 214 N Dixie Hwy, Lake Worth Beach, FL 33460  (closest to south options)
 *   • 2481 Okeechobee Blvd, West Palm Beach, FL 33409  (closest to WPB options)
 */

const SEED_APARTMENTS = [
  {
    id: "royal-st-george",
    name: "Royal St. George at the Villages",
    address: "1441 Brandywine Rd, West Palm Beach, FL 33409",
    beds: 2,
    baths: 2,
    sqftLow: 900,
    sqftHigh: 1300,
    rent2br: 1965,    // 2BR starting; range runs up to ~$3,387 depending on unit
    rent1br: 1620,
    milesToGolf: 8.0, // ~8 mi to The Breakers via Southern Blvd bridge
    milesToAldi: 2.5, // Aldi at 2481 Okeechobee Blvd, WPB
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["In-unit washer/dryer", "Pool", "Fitness center", "Near I-95", "Minutes to shopping"],
    source: "https://www.apartments.com/royal-st-george-at-the-villages-apartment-homes-west-palm-beach-fl/jedjtp4/",
    notes: "Best shot at a true 2BR under $2k — entry-level units start at $1,965. In the Villages of Palm Beach Lakes.",
  },
  {
    id: "the-mid",
    name: "The MID Apartment Residences",
    address: "1601 N Dixie Hwy, Lake Worth Beach, FL 33460",
    beds: 2,
    baths: 1,
    sqftLow: 635,
    sqftHigh: 1028,
    rent2br: 2200,   // 2BR est.; range $1,799–$2,349 across 1BR/2BR
    rent1br: 1799,
    milesToGolf: 5.5, // ~5.5 mi north on Dixie Hwy / via Lake Worth bridge
    milesToAldi: 0.4, // Aldi Lake Worth at 214 N Dixie Hwy — same street, walkable!
    petFriendly: true,
    petNote: "$500 fee (1st pet) + $250 (2nd pet); $30–$50/mo pet rent",
    amenities: ["Walkable to Aldi", "Close to downtown Lake Worth", "1 mi to beach", "Modern finishes", "Pet friendly"],
    source: "https://www.apartments.com/the-mid-apartment-residences-lake-worth-fl/phj0mkt/",
    notes: "Best Aldi score — Aldi is literally on the same street, under half a mile. Closest to The Breakers of the budget options.",
  },
  {
    id: "avery-lake-worth",
    name: "Avery Lake Worth Beach",
    address: "3300 Boutwell Rd, Lake Worth Beach, FL 33461",
    beds: 2,
    baths: 2,
    sqftLow: 593,
    sqftHigh: 936,
    rent2br: 2100,   // 2BR est.; advertised starting at $1,870 (likely 1BR)
    rent1br: 1870,
    milesToGolf: 7.5, // ~7.5 mi south of The Breakers
    milesToAldi: 2.0, // Aldi Lake Worth Beach ~2 mi
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["2 Months FREE promo (verify)", "Modern finishes", "Pool", "Fitness center", "Lake Worth Beach location"],
    source: "https://www.apartments.com/avery-lake-worth-beach-lake-worth-beach-fl/w25tpkh/",
    notes: "Active move-in promotion (2 months free on select units) — effective monthly cost can dip well under $2k.",
  },
  {
    id: "inscription-wpb",
    name: "Inscription West Palm Beach",
    address: "1991 Presidential Way, West Palm Beach, FL 33401",
    beds: 2,
    baths: 2,
    sqftLow: 1150,
    sqftHigh: 1179,
    rent2br: 3090,   // 2BR starting ~$3,090; over budget but best golf views
    rent1br: 2200,
    milesToGolf: 4.0, // ~4 mi; overlooks a Jack Nicklaus-designed course, close to downtown WPB
    milesToAldi: 3.5, // Aldi WPB ~3.5 mi
    petFriendly: true,
    petNote: "Pet friendly",
    amenities: ["Golf course views", "Jack Nicklaus course on-site", "Luxury finishes", "Pool", "Near downtown WPB"],
    source: "https://www.apartments.com/inscription-west-palm-beach-west-palm-beach-fl/tkf2rfb/",
    notes: "Closest to a golf course of any option (overlooks one) but 2BR is well over budget. 1BR at ~$2,200 is more realistic.",
  },
];

// Reference points used for scoring.
const TARGET = {
  budget: 2000,
  golfLabel: "The Breakers Golf Course, Palm Beach (One South County Rd)",
  aldiLabel: "Nearest Aldi (Lake Worth Beach: 214 N Dixie Hwy · West Palm Beach: 2481 Okeechobee Blvd)",
};
