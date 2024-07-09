/**
 * coin counter function using closure 
 * this will allow us to pass coin types and their values dynamically
 * @param {*} coins 
 * @returns 
 */
function makeCoinCounter(coins) {
    return function(amount) {
      if (amount < 0) throw new Error("Invalid Amount");
      if (amount === 0) return [];
  
      const change = [];
      for (let coin of coins) {
        const { denomination, count } = calculateChangeInternal(amount, coin);
        change.push({ denomination, count });
        amount -= count * denomination;
      }
  
      return change;
    };
  }
  
  function calculateChangeInternal(amount, coin) {
    const { denomination, value } = coin;
    const count = Math.floor(amount / value);
    return { denomination, count };
  }
  