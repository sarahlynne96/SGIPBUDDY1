// ui.js - rendering and form updates
export function renderResults(result) {
  const el = document.getElementById("results");
  el.innerHTML = `
    <p>Pathway: ${result.path}</p>
    <p>Rate: $${result.storageRate.toFixed(2)}/Wh</p>
    <p>Estimated Rebate: $${result.rebate.toLocaleString()}</p>
  `;
}
// ui.js - rendering and form updates
