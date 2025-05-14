let amigos = [];


let precoCorrida = 50;

function adicionarAmigo(nome) {
  if (nome) {
    amigos.push(nome);
    console.log(`Amigo ${nome} adicionado.`);
  }
}

function calcularValorPorPessoa() {
  let totalPessoas = amigos.length + 1; // +1 é o dono da corrida
  let valorPorPessoa = precoCorrida / totalPessoas;

  console.log(`Destino: Centro da cidade`);
  console.log(`Total de pessoas: ${totalPessoas}`);
  console.log(`Valor por pessoa: R$ ${valorPorPessoa.toFixed(2)}`);
}
