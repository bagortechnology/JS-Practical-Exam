function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let highestProfit = Number.NEGATIVE_INFINITY;
    let topProduct = '';
  
    for (const { product, profit } of productProfitArray) {
      if (profit > highestProfit) {
        highestProfit = profit;
        topProduct = product;
      }
    }
  
    return topProduct;
  }

  function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let lowestProfit = Number.POSITIVE_INFINITY;
    let bottomProduct = '';
  
    for (const { product, profit } of productProfitArray) {
      if (profit < lowestProfit) {
        lowestProfit = profit;
        bottomProduct = product;
      }
    }
  
    return bottomProduct;
  }

  function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
  
    let closestProfit = Number.POSITIVE_INFINITY;
    let zeroProfitProduct = '';
  
    for (const { product, profit } of productProfitArray) {
      if (Math.abs(profit) < Math.abs(closestProfit)) {
        closestProfit = profit;
        zeroProfitProduct = product;
      } else if (Math.abs(profit) === Math.abs(closestProfit) && profit > 0) {
        closestProfit = profit;
        zeroProfitProduct = product;
      }
    }
  
    return zeroProfitProduct;
  }

  // Test Code to Check if the JS code above is correct
  const productProfitArray = [
    { product: 'A', profit: 500 },
    { product: 'B', profit: -200 },
    { product: 'C', profit: 100 },
    { product: 'D', profit: 10}
  ];
  
  console.log(topProduct(productProfitArray)); // Output: Product A
  console.log(bottomProduct(productProfitArray)); // Output: Product B
  console.log(zeroProfitProduct(productProfitArray)); // Output: Product C (if profit is closest to 0)
    