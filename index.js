const alunos = [
  {
    nome: 'Melissa',
    matricula: 2021222,
    idade: 26,
    turno: 'noite',
    notas: [
      {
        nome: 'DW2',
        nota: 10,
      },
    ],
    cursos: [
      {
        id: 1,
        nome: 'informatica',
        cargaHoraria: 120,
      },
    ],
  },
  {
    nome: 'Daniel',
    matricula: 2021222,
    idade: 18,
    turno: 'manha',
    notas: [
      {
        nome: 'DW2',
        nota: 6,
      },
    ],
    cursos: [],
  },
  {
    nome: 'Matheus',
    matricula: 2021222,
    idade: 18,
    turno: 'tarde',
    notas: [
      {
        nome: 'DW2',
        nota: 2,
      },
      {
        nome: 'LP2',
        nota: 10,
      },
    ],
    cursos: [],
  },
];

const alunosManhaTarde = alunos.filter((aluno) => {
  const { turno } = aluno;
  const ehDaManha = turno === 'manha';
  const ehDaTarde = turno === 'tarde';
  return ehDaManha || ehDaTarde;
});

const alunosManhaTarde2 = alunos.filter(
  ({ turno }) => turno === 'tarde' || turno === 'manha'
);

console.log(alunosManhaTarde);

function filtrarAlunosAprovados(alunosBancoDeDados, curso = 'DW2', media = 7) {
  const aprovados = alunosBancoDeDados.filter((aluno) => {
    const dw2 = aluno.notas.find((nota) => {
      const nome = nota.nome;
      return nome === curso;
    });
    const nota = dw2.nota;
    return nota >= media;
  });

  return aprovados;
}

const alunosAprovados = filtrarAlunosAprovados(alunos);

console.log(alunosAprovados);

const professores = [
  {
    registro: 1010,
    telefone: '(51) 99999-9999',
  },
];
