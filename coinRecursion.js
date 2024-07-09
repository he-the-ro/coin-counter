/**
 * coun counter using recusrsion
 * we have to define each coin type in cents
 */
const QUARTER_VALUE = 25;
const DIME_VALUE = 10;
const NICKEL_VALUE = 5;
const PENNY_VALUE = 1;

function calculateChange(amount) {
  if (amount < 0) throw new Error("Amount must be positive");
  if (amount === 0) return [];

  const denominations = [QUARTER_VALUE, DIME_VALUE, NICKEL_VALUE, PENNY_VALUE];
  const change = [];

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const count = Math.floor(amount / denomination);
    change.push({ denomination, count });
    amount -= count * denomination;
  }

  return change;
}
