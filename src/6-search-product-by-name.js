const stockProducts = require('./data.json');

const searchProductByName = (name) => {
  // Desenvolva seu código dentro dessa função...

  for( let index = 0; index < stockProducts.length; index += 1){

     if(stockProducts[index].productName === name){

      return  {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`
      };
     
   }
   
 };
return null
};
//console.log(searchProductByName("Azeite"));

module.exports = { searchProductByName };
