const stockProducts = require('./data.json');

const searchProductsByBrand = (marcaProduto) => {
  // Desenvolva seu código dentro dessa função...
  let arrayObj = [];
  if(marcaProduto === ""){
    return arrayObj;
  }

  for(let index = 0; index < stockProducts.length; index += 1){
      if(stockProducts[index].brand === marcaProduto){
     //  const info =  {
         let description = stockProducts[index].description;
         let formattedPrice = `R$ ${stockProducts[index].price}`;
      //  }
        arrayObj.push({description, formattedPrice});
    } 
};
return arrayObj;
};

//console.log(searchProductsByBrand("Hortifruti"));

module.exports = { searchProductsByBrand };
