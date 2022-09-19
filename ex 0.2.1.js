const filmesFavoritos = [
  {
    nome: 'Missao Imposivel I',
    genero: 'acao',
    elencoprincipal: 'Tom Cruise',
    lancamento: 27 - 08 - 2004,
    censura: 12,
  },
  {
    nome: 'Jogo de amor em Las Vegas',
    genero: 'comedia',
    elencoPrincipal: 'Ashton KutCher',
    lancamento: 01 - 05 - 2008,
    censura: 12,
  },
  {
    nome: 'Os outros',
    genero: 'suspense',
    elencoPrincipal: 'Nicole Kidman',
    linguagemOriginal: 'ingles',
  },
];
console.log(filmesFavoritos.some((filme) => filme.tipo === 'String'));
