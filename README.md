# Palm Beach Area Apartment Compare 🏌️🛒

A tiny, no-dependency web app for comparing apartments near **The Breakers golf course** in Palm Beach, FL — close to **Aldi**, tuned to a **~$2,000/month** budget.

## Use it

Just open `index.html` in any browser. No build, no install.

```
open index.html        # macOS
xdg-open index.html    # Linux
```

## What it does

- **Fit score (0–100)** for each apartment based on *your* priorities.
- **Adjustable weights** — slide how much you care about budget, being near Aldi, near The Breakers golf course, and amenities. Scores re-rank live.
- **Filter** by max rent and toggle **1BR / 2BR** pricing.
- **Sort** by best fit, lowest rent, closest to Aldi, or closest to golf.
- **Side-by-side compare** — tick "compare" on two or more and a table highlights the best value in each row.

## The data

Four real Palm Beach–area communities seeded in `data.js`:

| Community | 2BR from | To Breakers | To Aldi |
|---|---|---|---|
| Royal St. George at the Villages (WPB) | **~$1,965** | ~8 mi | ~2.5 mi |
| The MID Apartment Residences (Lake Worth Beach) | ~$2,200 (1BR ~$1,799) | **~5.5 mi** | **~0.4 mi (same street)** |
| Avery Lake Worth Beach | ~$2,100 (1BR ~$1,870) | ~7.5 mi | ~2.0 mi |
| Inscription West Palm Beach | ~$3,090 (1BR ~$2,200) | ~4 mi (golf views!) | ~3.5 mi |

Golf reference point: **The Breakers**, One South County Road, Palm Beach, FL 33480.

Nearest Aldi locations:
- 214 N Dixie Hwy, Lake Worth Beach, FL 33460
- 2481 Okeechobee Blvd, West Palm Beach, FL 33409

### Honest caveats

- **Prices and distances are approximate** (public listings, May 2026). Each card links to the live listing — verify before deciding.
- At **~$2k/month** in the Palm Beach area, the most realistic 2BR is Royal St. George (starts ~$1,965). Most other 2BR units in this corridor run above budget; 1BR units in Lake Worth Beach can land in range.
- The Palm Beach island itself averages **$7,500+/mo** for 2BR — the communities here are on the mainland, which is how they stay near budget while still being reasonably close to The Breakers.

## Make it yours

Edit `data.js` to add communities or correct any number. To change the golf reference point or Aldi distance, just update the `milesToGolf` / `milesToAldi` fields on any apartment and reload.
