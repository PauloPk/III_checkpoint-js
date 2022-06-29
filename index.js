function aluno(nome, quantidadeFaltas, notas) {
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;


    this.calcularMedia = function () {
        let array = this.notas;

        let media = array.reduce((a, b) => (a + b)) / array.length;

        return media;

    }

    this.calcularFalta = function (){
        return this.quantidadeFaltas += 1;

    };

};

const camila = new aluno('camila', 2, [9, 10, 9]);
// console.log(camila);

let camilaMedia = camila.calcularMedia();
// console.log(camilaMedia);

let camilaFaltas = camila.calcularFalta();
// console.log(camilaFaltas);



const paulo = new aluno('paulo', 3, [3, 4, 9]);
const carlos = new aluno('carlos', 4, [10, 7, 9]);

const listaDeAlunos = [camila, paulo, carlos];
// console.log(listaDeAlunos);


let curso = {
    nomeDoCurso:'Digital House',
    notaDeAprovacao: 5,
    faltasMaximas: 3,
    listaDeAlunos: listaDeAlunos,


    adicionarAluno(nome,quantidadeFaltas,notas){
        let alunoInsert = new aluno(nome, quantidadeFaltas, notas);
        this.listaDeAlunos.push(alunoInsert);
    },

    verificandoAprovacaoAluno(estudante) {
        let media = estudante.calcularMedia();
        let mediaComPorcentagem = this.notaDeAprovacao + this.notaDeAprovacao * 0.10;

        if (media >= this.notaAprovacao && estudante.quantidadeFaltas < this.faltasMaximas){
            return true
        }
        else if ((media >= mediaComPorcentagem) && estudante.quantidadeFaltas == this.faltasMaximas){
            return true
        }
        else{
            return false
        }
    },

    verificandoAprovacaoTurma(){
        let resultado = [];
        for (let i = 0; i < this.listaDeAlunos.length; i++){
            resultado.push(this.verificandoAprovacaoAluno(this.listaDeAlunos[i]));
        }
        return resultado
    }
    

};


let aprovacaoGeral = curso.verificandoAprovacaoTurma();
console.log(aprovacaoGeral);

const adicionarEstudante = curso.adicionarAluno('vinicios', 2, [10, 8, 9]);
console.log(listaDeAlunos);

let aprovacaoIndividual = curso.verificandoAprovacaoAluno(paulo);
console.log(aprovacaoIndividual);





