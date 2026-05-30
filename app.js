/* West Boca apartment comparison — vanilla JS, no build step. */

// Working copy (editable in-memory; resets on reload).
let apartments = SEED_APARTMENTS.map((a) => ({ ...a }));

// Default priority weights (0-10). Tuned to the original ask:
// budget ~$2k, close to Aldi, near the golf course.
const state = {
  maxRent: 2800,
  bedType: "rent2br", // or "rent1br"
  sort: "score",
  selected: new Set(),
  weights: { budget: 8, aldi: 7, golf: 5, amenities: 3 },
};

/* ---------- Scoring ---------- */
// Each apartment gets a 0-100 fit score based on your weighted priorities.
function scoreOf(apt) {
  const rent = apt[state.bedType] ?? apt.rent2br;

  // Budget: 100 if at/under target, decaying as it exceeds it.
  const over = rent - TARGET.budget;
  const budgetScore = over <= 0 ? 100 : Math.max(0, 100 - (over / TARGET.budget) * 220);

  // Proximity: closer is better. ~0 mi => 100, 4+ mi => ~0.
  const prox = (mi) => Math.max(0, 100 - (mi / 4) * 100);
  const aldiScore = prox(apt.milesToAldi);
  const golfScore = prox(apt.milesToGolf);

  // Amenities: more listed perks => higher, capped.
  const amenScore = Math.min(100, (apt.amenities?.length || 0) * 20);

  const w = state.weights;
  const total = w.budget + w.aldi + w.golf + w.amenities || 1;
  const score =
    (budgetScore * w.budget +
      aldiScore * w.aldi +
      golfScore * w.golf +
      amenScore * w.amenities) /
    total;

  return Math.round(score);
}

/* ---------- Rendering ---------- */
function rentFor(apt) {
  return apt[state.bedType] ?? apt.rent2br;
}

function fmt$(n) {
  return "$" + Number(n).toLocaleString("en-US");
}

function visibleApartments() {
  let list = apartments
    .map((a) => ({ ...a, _rent: rentFor(a), _score: scoreOf(a) }))
    .filter((a) => a._rent <= state.maxRent);

  const sorters = {
    score: (a, b) => b._score - a._score,
    rentLow: (a, b) => a._rent - b._rent,
    aldi: (a, b) => a.milesToAldi - b.milesToAldi,
    golf: (a, b) => a.milesToGolf - b.milesToGolf,
  };
  list.sort(sorters[state.sort] || sorters.score);
  return list;
}

function cardHTML(apt) {
  const rent = apt._rent;
  const under = rent <= TARGET.budget;
  const sel = state.selected.has(apt.id) ? " selected" : "";
  const checked = state.selected.has(apt.id) ? "checked" : "";
  const bedLabel = state.bedType === "rent1br" ? "1BR" : "2BR";

  return `
  <div class="card${sel}">
    <div class="card-head">
      <div>
        <h3>${apt.name}</h3>
        <div class="addr">${apt.address}</div>
      </div>
      <div class="score-badge"><div class="n">${apt._score}</div><div class="l">fit</div></div>
    </div>

    <div class="rent-row">
      <div class="rent">${fmt$(rent)}<span class="unit">/mo · ${bedLabel}</span></div>
      <span class="pill ${under ? "under" : "over"}">${under ? "at/under $2k" : "over $2k"}</span>
    </div>

    <div class="metrics">
      <div><span class="k">To golf:</span> ${apt.milesToGolf} mi</div>
      <div><span class="k">To Aldi:</span> ${apt.milesToAldi} mi</div>
      <div><span class="k">Size:</span> ${apt.sqftLow}-${apt.sqftHigh} ft²</div>
      <div><span class="k">Pets:</span> ${apt.petFriendly ? "Yes" : "No"}</div>
    </div>

    <div class="chips">${apt.amenities.map((x) => `<span class="chip">${x}</span>`).join("")}</div>

    ${apt.notes ? `<div class="note">${apt.notes}</div>` : ""}

    <div class="card-foot">
      <a href="${apt.source}" target="_blank" rel="noopener">View listing ↗</a>
      <label class="cmp"><input type="checkbox" data-id="${apt.id}" ${checked}> compare</label>
    </div>
  </div>`;
}

function comparePanelHTML(list) {
  const chosen = list.filter((a) => state.selected.has(a.id));
  if (chosen.length < 2) {
    return `<div class="compare-panel"><h2>Side-by-side</h2><div class="empty">Tick “compare” on two or more apartments to see them side by side.</div></div>`;
  }

  const rows = [
    ["Monthly rent", (a) => fmt$(a._rent), (vals) => Math.min(...vals.map((v) => v._rent)), (a, best) => a._rent === best],
    ["Fit score", (a) => a._score, (vals) => Math.max(...vals.map((v) => v._score)), (a, best) => a._score === best],
    ["Miles to golf", (a) => a.milesToGolf + " mi", (vals) => Math.min(...vals.map((v) => v.milesToGolf)), (a, best) => a.milesToGolf === best],
    ["Miles to Aldi", (a) => a.milesToAldi + " mi", (vals) => Math.min(...vals.map((v) => v.milesToAldi)), (a, best) => a.milesToAldi === best],
    ["Size (ft²)", (a) => `${a.sqftLow}-${a.sqftHigh}`, () => null, () => false],
    ["Pet friendly", (a) => (a.petFriendly ? "Yes" : "No"), () => null, () => false],
    ["Amenities", (a) => a.amenities.length, (vals) => Math.max(...vals.map((v) => v.amenities.length)), (a, best) => a.amenities.length === best],
  ];

  const head = `<tr><th>Feature</th>${chosen.map((a) => `<th>${a.name}</th>`).join("")}</tr>`;
  const body = rows
    .map(([label, get, bestFn, isBest]) => {
      const best = bestFn(chosen);
      const cells = chosen
        .map((a) => `<td class="${best !== null && isBest(a, best) ? "best" : ""}">${get(a)}</td>`)
        .join("");
      return `<tr><th>${label}</th>${cells}</tr>`;
    })
    .join("");

  return `<div class="compare-panel"><h2>Side-by-side</h2><table>${head}${body}</table></div>`;
}

function render() {
  const list = visibleApartments();
  const grid = document.getElementById("grid");
  grid.innerHTML = list.length
    ? list.map(cardHTML).join("")
    : `<div class="empty">No apartments under ${fmt$(state.maxRent)}. Raise the max-rent slider.</div>`;

  // wire compare checkboxes
  grid.querySelectorAll('input[type="checkbox"][data-id]').forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      if (e.target.checked) state.selected.add(id);
      else state.selected.delete(id);
      render();
    });
  });

  document.getElementById("compare").innerHTML = comparePanelHTML(list);
}

/* ---------- Controls wiring ---------- */
function setupControls() {
  const maxRent = document.getElementById("maxRent");
  const maxRentVal = document.getElementById("maxRentVal");
  maxRent.addEventListener("input", () => {
    state.maxRent = +maxRent.value;
    maxRentVal.textContent = fmt$(state.maxRent);
    render();
  });

  document.getElementById("bedType").addEventListener("change", (e) => {
    state.bedType = e.target.value;
    render();
  });

  document.getElementById("sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    render();
  });

  // weight sliders
  ["budget", "aldi", "golf", "amenities"].forEach((key) => {
    const el = document.getElementById("w_" + key);
    const out = document.getElementById("w_" + key + "_val");
    el.value = state.weights[key];
    out.textContent = state.weights[key];
    el.addEventListener("input", () => {
      state.weights[key] = +el.value;
      out.textContent = el.value;
      render();
    });
  });

  // init labels
  maxRentVal.textContent = fmt$(state.maxRent);
}

document.addEventListener("DOMContentLoaded", () => {
  setupControls();
  render();
});
