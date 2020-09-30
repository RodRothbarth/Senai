let alunos = []
//let mostra = document.getElementById("mostra")
//let nota = document.getElementsByName("notas") //retorna um node list
let nome = document.getElementById("name")
let notas = Array.from(document.getElementsByName("notas")).map(function(element){
    return element.value;
}) // array.from() transforma node list em array. map() para fazer um novo array vindo do array de elementos html. 


function Alunos(name, grd1){
    this.nome = name
    this.notas = grd1
}

function Add(){
    // let notas = []
    // for(let i = 0; i < nota.length; i++){
    //     notas.push(nota[i].value)
    // }
    let add = new Alunos (nome.value, notas)
    alunos.push(add)
    alert(Object.entries(add))
    localStorage.setItem("alunos", JSON.stringify(alunos))
}

function Show(){
    let lista = ""
    let test = JSON.parse(localStorage.getItem("alunos"))
    
    for(let i = 0; i < test.length; i++){
    lista += (Object.values(test[i]).join(', ')) + "<br>" 
    }
    document.getElementById("mostra").innerHTML = lista
}

