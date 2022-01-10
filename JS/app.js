
async function MostrarJson() {
 let response = await fetch('./JS/data.json');
 let data = await response.json();
// let x = await  show(data);
 return data;
}

let datos;
MostrarJson().then(datos);
console.log(datos);
//for(x of datos){ console.log(x) }
//showName(nombre);
async function show(d){
    let info = await d;
    for(let i = 0 ; i >= info.length ; i++){
 // alert(info[i]);
    //console.log(info[i].title);
   // showName(info);
    }
 }
function showName(nombre){

    console.log(nombre)
    //document.querySelector('#name-user').innerHTML = nombre;
}

console.log(MostrarJson());
/*
for(d of data){
    console.log(d);
}
*/
