# Breakers West Apartment Compare 🏌️🛒

A tiny, no-dependency web app for comparing apartments near **Breakers West Country Club** (1550 Flagler Pkwy, West Palm Beach, FL 33411) — close to **Aldi** on US-441, tuned to a **~$2,000/month** budget.

## Use it

Just open `index.html` in any browser. No build, no install.

```
open index.html        # macOS
xdg-open index.html    # Linux
```

## What it does

- **Fit score (0–100)** for each apartment based on *your* priorities.
- **Adjustable weights** — slide how much you care about budget, being near Aldi, near Breakers West, and amenities. Scores re-rank live.
- **Filter** by max rent and toggle **1BR / 2BR** pricing.
- **Sort** by best fit, lowest rent, closest to Aldi, or closest to golf.
- **Side-by-side compare** — tick "compare" on two or more and a table highlights the best value in each row.

## The data

Three real communities in the Breakers West / Royal Palm Beach area, seeded in `data.js`:

| Community | 2BR from | To Breakers West | To Aldi |
|---|---|---|---|
| St. Andrews Palm Beach (WPB) | **~$1,662** (1BR ~$1,453) | ~3.5 mi | ~2.5 mi |
| Belvedere Isles (WPB) | ~$1,900 | ~3.0 mi | ~2.0 mi |
| Rosemont Royal Palm (RPB) | ~$2,026 (1BR ~$1,750) | ~4.5 mi | **~1.5 mi** |

Reference points:
- **Golf:** Breakers West Country Club, 1550 Flagler Pkwy, West Palm Beach, FL 33411
- **Aldi:** 1111 N State Rd 7 (US-441), Royal Palm Beach, FL 33411

### Honest caveats

- **Prices and distances are approximate** (public listings, May 2026). Each card links to the live listing — verify before deciding.
- This is the **western** Breakers club near Royal Palm Beach — not the oceanfront Breakers on Palm Beach island (where 2BR averages $7,500+).
- Out here $2k actually works: **St. Andrews** offers true 2BR units comfortably under budget. Belvedere Isles inventory skews toward 3BR, so confirm 2BR availability.

## Make it yours

Edit `data.js` to add communities or correct any number. To change the golf or Aldi reference, update the `milesToGolf` / `milesToAldi` fields on any apartment and reload.
