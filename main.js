// main.js - orchestrates calculator workflow
import { geocodeAddress } from './geocode.js';
import { checkEligibility } from './eligibility.js';
import { fetchRates } from './rates.js';
import { renderResults } from './ui.js';

document.getElementById("sgipForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const address = document.getElementById("address").value;
  const systemSize = parseFloat(document.getElementById("systemSize").value) || 0;
  const income = document.getElementById("incomeLevel").value;

  const coords = await geocodeAddress(address);
  const { path, storageRate } = checkEligibility({ ...coords, income });
  const rebate = systemSize * 1000 * storageRate;

  renderResults({ path, storageRate, rebate });
});
// main.js - orchestrates calculator workflow
