# West Boca Apartment Compare 🏌️🛒

A tiny, no-dependency web app for comparing apartments in **West Boca Raton, FL** —
near the golf-course communities (Boca West Country Club / Boca Lago), close to **Aldi**,
tuned to a **~$2,000/month** budget.

## Use it

Just open `index.html` in any browser. No build, no install.

```
open index.html        # macOS
xdg-open index.html    # Linux
```

## What it does

- **Fit score (0–100)** for each apartment based on *your* priorities.
- **Adjustable weights** — slide how much you care about budget vs. being near Aldi
  vs. near the golf course vs. amenities. The scores re-rank live.
- **Filter** by max rent and **toggle** 1BR / 2BR pricing.
- **Sort** by best fit, lowest rent, closest to Aldi, or closest to golf.
- **Side-by-side compare** — tick "compare" on two or more and a table highlights
  the best value in each row.

## The data

Five real West Boca communities are seeded in `data.js`:

| Community | 2BR from | To Aldi | To golf |
|---|---|---|---|
| Arbor Oaks Apartments & Townhomes | ~$2,150 (1BR ~$1,930) | ~2.5 mi | ~1.5 mi |
| Cortland Uptown Boca | ~$2,645 | **~0.3 mi (walk)** | ~2.0 mi |
| The Residences at Uptown | ~$2,400 (1BR ~$1,800) | ~0.5 mi | ~3.0 mi |
| Addison Place | ~$2,185 | ~1.0 mi | ~2.0 mi |
| The Luxe at Boca | ~$2,295 | ~2.0 mi | ~2.0 mi |

### Honest caveats

- **Prices and distances are approximate** (public listings, May 2026) and change
  constantly. Each card links to the live listing — verify before deciding.
- Distances are straight-line estimates for *relative* comparison.
- There is **no public "Breakers" golf course in West Boca** — The Breakers golf
  course is in Palm Beach. Distances here use the nearest West Boca golf course.
- Around **$2,000/month** in West Boca realistically gets you a **1-bedroom** in
  the newer luxury communities, or a smaller **2-bedroom** in an older community
  like Arbor Oaks. Most 2BR units run $2,150+.

## Make it yours

Edit `data.js` to add communities or correct any number — change a `rent2br`,
`milesToAldi`, etc., and reload. To point "Aldi"/"golf" at a specific address,
update the distances per apartment.
