const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayObj = [];
  for(index = 0; index < stockProducts.length; index += 1){
       if(stockProducts[index].onSale === true ){
        let description = stockProducts[index].description;
        let formattedPrice = `R$ ${stockProducts[index].price}`;
        let onSale = true;
        arrayObj.push({description, formattedPrice, onSale});
       }
  }
  return arrayObj;
};
//console.log(getProductsOnSale())

module.exports = { getProductsOnSale };
