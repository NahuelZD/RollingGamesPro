let cargaRegion = document.getElementById("region");
let cargaPais = document.getElementById("pais");

let region = ["África", "América", "Asia", "Europa"];
let pais = [
  "Argentina",
  "Brasil",
  "Chile",
  "Estados Unidos",
  "México",
  "Uruguay",
  "Paraguay",
  "Nigeria",
  "Sudáfrica",
  "Argelia",
  "Egipto",
  "Austria",
  "España",
  "Francia",
  "Italia",
  "Portugal",
  "China",
  "Japón",
  "India",
  "Tailandia",
];

function mostrarLugares(arreglo, lugar) {
  let elementos = "<option selected value='0'>--Seleccione--</option>";
  for (let i = 0; i < arreglo.length; i++) {
    elementos +=
      '<option value="' + arreglo[i] + '">' + arreglo[i] + "</option>";
  }

  lugar.innerHTML = elementos;
}

mostrarLugares(region, cargaRegion);
function recortar(array, inicio, fin) {
  let recortar = array.slice(inicio, fin);
  mostrarLugares(recortar, cargaPais);
}

function reset(lugar){
  let elementos = "<option selected disabled value='0'>--Seleccione--</option>";
  lugar.innerHTML = elementos;
}

cargaRegion.addEventListener("change", function () {
  let valor = cargaRegion.value;
  console.log(valor);
  switch (valor) {
    case "África":
      recortar(pais, 7, 11);
      break;
    case "América":
      recortar(pais, 0, 7);
      break;
    case "Asia":
      recortar(pais, 16);
      break;
    case "Europa":
      recortar(pais, 11, 16);
      break;
    case "0":
      reset(cargaPais);
      break;
  }
});