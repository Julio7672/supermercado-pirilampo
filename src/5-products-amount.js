const stockProducts = require('./data.json');

const getProductsAmount = () => {
  // Desenvolva seu código dentro dessa função...

   let somatorio = 0;
   for(let index = 0; index < stockProducts.length; index += 1){
    let totalStock = stockProducts[index].quantityInStock;

      somatorio += totalStock;

   }
   return somatorio;
};
//console.log(getProductsAmount());
module.exports = { getProductsAmount };
