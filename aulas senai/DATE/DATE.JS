// trabalho com datas js

// console.log(Date.now())
// let date = new Date()
// console.log(date)

function Day(){
    let day = new Date(document.getElementById("day").value.split('-').join('/')) 
    let day2 = new Date(document.getElementById("day2").value.split('-').join('/')) 

    if(day > day2){
        document.getElementById("display1").innerHTML = day + "Massa!"
    }else{
        document.getElementById("display1").innerHTML = day2 + "Legal!"
    }


console.log(day)
    //document.getElementById("display").innerHTML = new Date()   //data e hora do momento
    //document.getElementById("display1").innerHTML = new Date(day)
}
