// rates.js - fetches live SGIP rates from backend
export async function fetchRates() {
  const res = await fetch("http://localhost:3000/api/rates");
  return await res.json();
}
// rates.js - fetches live SGIP rates from backend
