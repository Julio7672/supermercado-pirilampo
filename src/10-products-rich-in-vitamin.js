const stockProducts = require('./data.json');

const arrayvitamilho = (vitamina) => {
  let arrayvita = [];
 for(let index = 0; index < vitamina.length; index += 1){
  arrayvita.push(vitamina[index].join(" - "));
 }
 return arrayvita
};

const getProductsRichInVitamin  = () => {
  // Desenvolva seu código dentro dessa função...

     arrayObj = [];
   for( let index = 0; index < stockProducts.length; index += 1){
    
    if(stockProducts[index].nutritionalInfo.vitamins){
      let vitamina = Object.entries(stockProducts[index].nutritionalInfo.vitamins);
      let vitaminsInfo = arrayvitamilho(vitamina);
      let description = stockProducts[index].description;
      let formattedPrice = `R$ ${stockProducts[index].price}`;
      vitaminsInformation = vitaminsInfo

     // arrayObj.push({
     //   description: stockProducts[index].description,
       // formattedPrice: `R$ ${stockProducts[index].price}`,
      //  vitaminsInformation: stockProducts[index].nutritionalInfo.vitamins

     // });

      arrayObj.push({description, formattedPrice, vitaminsInformation})
      // arrayObj.push({description, formattedPrice, vitaminsInformat});
      
    }
   
  }
  return arrayObj;
};

//console.log(getProductsRichInVitamin());
module.exports = { getProductsRichInVitamin };



