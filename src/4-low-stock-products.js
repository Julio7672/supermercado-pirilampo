const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  // Desenvolva seu código dentro dessa função...
  let produtosEstoque = [];
for(index = 0; index < stockProducts.length; index += 1){

  const quantidadeEstoque = stockProducts[index].quantityInStock;
  const nomeProduto = stockProducts[index].productName;

  if(quantidadeEstoque > 0 &&  quantidadeEstoque <= 10){
    produtosEstoque.push(`${nomeProduto}: ${quantidadeEstoque} unidades`);
  }
}

  return produtosEstoque;
};
//console.log(getLowStockProducts());

module.exports = { getLowStockProducts };
