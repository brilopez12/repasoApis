function consumirApi() {
  var sexo = [];
  var contadorMujeres = 0;
  var contadorHombres = 0;

  fetch('https://www.datos.gov.co/resource/6rvy-hipa.json')
  .then(datos=>datos.json())
  .then(function(datos){
    datos.forEach(elemento => {
      if(elemento.sexo === 'Mujeres'){
        contadorMujeres = contadorMujeres + 1;
    }else{
        contadorHombres = contadorHombres + 1;
      }
    });

    var data = {
      type: 'bar',
      x: ["Hombres", "Mujeres"],
      y: [contadorHombres, contadorMujeres],
    };

    Plotly.newPlot('tester', data);
})
}


/* function contarMujeres(datos) {
  let contador = 0;
  datos.forEach(dato => {
    if(dato.sexo === 'Mujeres') {
      contador++;
    }
  });
  return contador;
}

function contarHombres(datos) {
  let contador = 0;
  datos.forEach(dato => {
    if(dato.sexo === 'Hombres') {
      contador++;
    }
  });
  return contador;
} */

