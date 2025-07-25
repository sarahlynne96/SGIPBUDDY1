// eligibility.js - DAC and fire zone logic
export function checkEligibility({ lat, lon, income }) {
  let path = "General Market";
  let storageRate = 0.15;
  if (income === "low") {
    path = "Equity";
    storageRate = 1.10;
  }
  return { path, storageRate };
}
// eligibility.js - DAC and fire zone logic
