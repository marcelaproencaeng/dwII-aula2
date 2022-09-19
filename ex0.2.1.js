const filmesFavoritos = [
  {
    nome: 'Missao Imposivel I',
    genero: 'acao',
    elencoprincipal: 'Tom Cruise',
    lancamento: 2004 - 08 - 27,
    censura: 12,
    ehTipoString: false,
  },
  {
    nome: 'Jogo de amor em Las Vegas',
    genero: 'comedia',
    elencoPrincipal: 'Ashton KutCher',
    lancamento: 2008 - 05 - 01,
    censura: 12,
    ehTipoString: false,
  },
  {
    nome: 'Os outros',
    genero: 'suspense',
    elencoPrincipal: 'Nicole Kidman',
    linguagemOriginal: 'ingles',
    ehTipoString: true,
  },
];

const resultado = filmesFavoritos.filter(
  (filme) => filme.nome.toLowerCase() === 'os outros'
);
console.log(resultado);

console.log(filmesFavoritos.some((filme) => filme.ehTipoString === 'true'));
