const stockProducts = require('./data.json');

const getUniqueProductsName = (name) => {
  // Desenvolva seu código dentro dessa função...
  let produtoNome = [];
   for(let index = 0; index < stockProducts.length; index += 1){
    const name = stockProducts[index].productName;
    produtoNome.push(name);
   
}
return produtoNome;
};

//console.log(getUniqueProductsName());
module.exports = { getUniqueProductsName };
