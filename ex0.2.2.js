const usuarios = [
  {
    id: 1,
    nome: 'Maria',
    idade: 22,
    cpf: 77788833344,
    comentarioOutroUsuario: 'babaca',
    cidade: 'Campinas',
  },
  {
    id: 2,
    nome: 'Pedro',
    idade: 27,
    cpf: 99944422255,
    comentarioOutroUsuario: 'modesto',
    cidade: 'Brasilia',
  },
  {
    id: 3,
    nome: 'Paulo',
    idade: 30,
    cpf: 55588822211,
    comentarioOutroUsuario: 'fantastico',
    cidade: 'Canoas',
  },
];

const resultado = usuarios.filter(
  (usuario) => usuario.comentarioOutroUsuario.toLowerCase() === 'modesto'
);
console.log(resultado);
