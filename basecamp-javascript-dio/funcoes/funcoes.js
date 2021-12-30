const alunos = [
    {
        nome: 'João',
        nota:5,
        turma:'1B',
    },
    {
        nome:'Sofia',
        nota:9,
        turma: '1B',
    },
    {  
        nome:'Pedro',
        nota: 4,
        turma: '1B',
    },
    {
        
        nome:'Samuel',
        nota:8,
        turma: '1B',
    },   
    {
        nome:'Joaquim',
        nota:3,
        turma: '2A',

    },
];

function alunosAprovados(alunos,media){
        let aprovados =[];

        for(let i = 0 ; i< alunos.length; i++){
            let {nota,nome}=alunos[i];

            if ( nota>=media){
                aprovados.push(nome);
            }
            return aprovados;

        }
    }
        console.log(alunosAprovados(alunos, 5));