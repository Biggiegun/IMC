/*Code Here*/
let arregloDatos = new Array();
let myBtn = document.querySelector("#calcular");
let myBtn2 =document.querySelector(".btnEstadisticas");


myBtn.addEventListener("click", (e) => {
  e.preventDefault();
    let sexo = document.querySelector('input[type = "radio"]:checked');
    genero = sexo.value;
    let edad = document.getElementById("edad").value;
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    const imc = (peso/(altura*altura)).toFixed(2);
  calcularIMC(imc);
  guardarInfo(genero, edad, peso, altura, imc);
  guardarObjeto();

});



///////////////////////////////////////////////////////////////////

const calcularIMC = (imc) =>{
    console.log(imc);
    let resultado = document.querySelector("#calculoIMC");
    var plantilla = `<h4 id="calculoIMC" class="col-12">${imc}</h4>`
   resultado.innerHTML = plantilla;
   
   if (imc < 18.5) {
       let pintarCategoriaIMC = document.querySelector("h6");
       var plantilla2 = `<h6 class="col-12">
   INDICE DE MASA CORPORAL CATEGORÍA <br><br>
   •<strong>Por debajo de 18.5 Por debajo del peso</strong><br>
   •18.5 a 24.9 Saludable <br>
   •25.0 a 29.9 Con sobrepeso <br>
   •30.0 a 39.9 Obeso <br>
   •Más de 40 Obesidad extrema o de alto riesgo <br>    
   </h6>`
       pintarCategoriaIMC.innerHTML = plantilla2;
   
   } else if(imc>= 18.5 && imc<24.9){
       let pintarCategoriaIMC1 = document.querySelector("h6");
       var plantilla3 = `<h6 class="col-12">
   INDICE DE MASA CORPORAL CATEGORÍA <br><br>
   •Por debajo de 18.5 Por debajo del peso<br>
   •<strong>18.5 a 24.9 Saludable</strong><br>
   •25.0 a 29.9 Con sobrepeso <br>
   •30.0 a 39.9 Obeso <br>
   •Más de 40 Obesidad extrema o de alto riesgo <br>    
   </h6>`
       pintarCategoriaIMC1.innerHTML = plantilla3;
   
   } else if(imc>=25 && imc<29.9){
       let pintarCategoriaIMC2 = document.querySelector("h6");
       var plantilla4 = `<h6 class="col-12">
   INDICE DE MASA CORPORAL CATEGORÍA <br><br>
   •Por debajo de 18.5 Por debajo del peso<br>
   •18.5 a 24.9 Saludable <br>
   •<strong>25.0 a 29.9 Con sobrepeso</strong><br>
   •30.0 a 39.9 Obeso <br>
   •Más de 40 Obesidad extrema o de alto riesgo <br>    
   </h6>`
       pintarCategoriaIMC2.innerHTML = plantilla4;
       
   } else if(imc>=29.9 && imc<39.9){
       let pintarCategoriaIMC3 = document.querySelector("h6");
       var plantilla5 = `<h6 class="col-12">
   INDICE DE MASA CORPORAL CATEGORÍA <br><br>
   •Por debajo de 18.5 Por debajo del peso<br>
   •18.5 a 24.9 Saludable <br>
   •25.0 a 29.9 Con sobrepeso <br>
   •<strong>30.0 a 39.9 Obeso</strong><br>
   •Más de 40 Obesidad extrema o de alto riesgo <br>    
   </h6>`
       pintarCategoriaIMC3.innerHTML = plantilla5;
   } else if(imc>=39.9){
       let pintarCategoriaIMC4 = document.querySelector("h6");
       var plantilla6 = `<h6 class="col-12">
   INDICE DE MASA CORPORAL CATEGORÍA <br><br>
   •Por debajo de 18.5 Por debajo del peso<br>
   •18.5 a 24.9 Saludable <br>
   •25.0 a 29.9 Con sobrepeso <br>
   •30.0 a 39.9 Obeso <br>
   •<strong>Más de 40 Obesidad extrema o de alto riesgo</strong> <br>    
   </h6>`
       pintarCategoriaIMC4.innerHTML = plantilla6;
   }
   }

   
///////////////////////////////////////////////////////////////////
const guardarInfo = (genero, edad, peso, altura, imc) => {
    let info = {
      sexo: genero,
      años: edad,
      pesaje: peso,
      alto: altura,
      indice: imc
    };
  
    arregloDatos.push(info);
    console.log(arregloDatos);
  
  };


///////////////////////////////////////////////////////////////////

const guardarObjeto = () => {
    localStorage.setItem('Datos Usuario',JSON.stringify(arregloDatos));

}

///////////////////////////////////////////////////////////////////

myBtn2.addEventListener('click', (e) =>{
 let estadistica = localStorage.getItem('Datos Usuario');
 const estadisticaAString = JSON.parse(estadistica);

 traerEstadisticas(estadisticaAString);
});

traerEstadisticas = (estadisticaAString) =>{

    console.log(estadisticaAString);

    for (let i = 0; i < estadisticaAString.length; i++) {
        //const element = estadisticaAString[i];
        //console.log(element);
        
        let page = document.getElementById('Usuarios');

 let dataTable = `
        <table">
  <colgroup span="4" class="columns"></colgroup>
  <tr>
    <th>Usuario</th>
    <th>Género</th>
    <th>Edad</th>
    <th>Peso</th>
    <th>Altura</th>
    <th>IMC</th>
  </tr>
  <tr>
    <td>${i+1}</td>
    <td>${estadisticaAString[i].sexo}</td>
    <td>${estadisticaAString[i].años}</td>
    <td>${estadisticaAString[i].pesaje}</td>
    <td>${estadisticaAString[i].alto}</td>
    <td>${estadisticaAString[i].indice}</td>
  </tr>
</table>
        `
        page.innerHTML += dataTable;

    
    }
}