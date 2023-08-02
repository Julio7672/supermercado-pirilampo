const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let outOfStock = [];
  
  for(index =0; index < stockProducts.length; index += 1){
    const name = stockProducts[index].productName;
    if (stockProducts[index].quantityInStock === 0){
      outOfStock.push(name);
  }
  }
  return outOfStock;
};
//console.log(getOutOfStockProducts());

module.exports = { getOutOfStockProducts };
