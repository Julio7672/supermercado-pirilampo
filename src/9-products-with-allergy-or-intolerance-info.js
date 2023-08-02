const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  // Desenvolva seu código dentro dessa função...
  let arrayObj = [];

  for(let index = 0; index < stockProducts.length; index += 1){
    let description = stockProducts[index].description;
    let formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;

       if(stockProducts[index].allergyOrIntolerance){
        let allergyOrIntoleranceMessage = `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(" ")}`
        arrayObj.push({description, formattedPrice, allergyOrIntoleranceMessage});
       }
     //  else{
       /// arrayObj.push({description, formattedPrice});
    //  }

     }

  return arrayObj;
};

//console.log(getProductsWithAllergyOrIntoleranceInfo());
module.exports = { getProductsWithAllergyOrIntoleranceInfo };