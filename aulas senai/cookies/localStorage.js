let name = document.getElementById("name")
let age = document.getElementById("age")
let email = document.getElementById("email")

let dados = []

function Pessoa (name, age, email){
    this.name = name
    this.age = age
    this.email = email
}

function Cadastrar(){
    if(name.value || age.value || email.value){
        dados.push(new Pessoa (name.value, age.value, email.value))
        localStorage.setItem("pessoas", JSON.stringify(dados))
    }
}

function Mostrar(){
    let lista = ""
    let test = JSON.parse(localStorage.getItem("pessoas"))
    
    for(let i = 0; i < test.length; i++){
    lista += (Object.values(test[i]).join(',')) + "<br>" 
    }
    document.getElementById("result").innerHTML = lista
    
}

// function Nova(){
//     document.getElementById("result").innerHTML = lista
// } para mostrar em outra pagina ou algo do tipo (junto com um return no Mostrar() no lugar do innerhtml do lista)
