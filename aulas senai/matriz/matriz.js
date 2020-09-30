let multi = [[10,7,9,8], [7,8,8,10], [12,10,25,36,7]];

let array1 = multi[0]; //[10,7,9,8]
let array2 = multi[1]; //[7,8,8,10]

// console.log(array1[0]);
// console.log(array1[1]);
// console.log(array1[2]);
// console.log(array1[3]);
// console.log(array2[0]);
// console.log(array2[1]);
// console.log(array2[2]);
// console.log(array2[3]);

//console.log(multi[0][0]); // igual a linha 6
//console.log(multi[1][0]); // igual a linha 10
//console.log(multi[3][3]); // da erro pq o multi nao tem os 4 arrays, apenas 2

for (let i = 0; i < multi.length; i++){    
    
    for (let j = 0; j < multi[i].length; j++){
        console.log(multi[i][j]);    
    }

}

let alunos = [
    {
        nome: "Rodrigo", 
        notas: [1,2,3]
    },
    {
        nome: "Rodolfo", 
        notas: [4,5,6]
    },
    {
        nome: "Rogério", 
        notas: [7,8,9]
    }, ]

    console.log(alunos[1].notas[1]) // imprime nota 5 do rodolfo.