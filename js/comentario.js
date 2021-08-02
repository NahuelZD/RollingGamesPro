//Ejecutar cuando cargue la página!
var open;
function init() {
  open = document.getElementsByClassName("open");
  for (let i = 0; i < open.length; i++) {
    open[i].addEventListener("click", () => {
      modalContainer.classList.add("mostrar-modal");
	  console.log(open[i].id)
      let integrante = filtrarPorIdentificador(open[i].id);
	  console.log(integrante)
      cargarModal(integrante);
    });
  }
}
init();
const integrantes = [
  {
    nombre: "Francisco Nahuel Zelaya",
    nacimiento: "18 de Abril de 1993",
    educacion: "Universidad Nacional de Tucumán UNT",
    descri:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consectetur, sequi exercitationem ut adipisci officia nesciunt harum molestiae odit ipsa ullam aut? Quam, sequi! Porro autem voluptatibus commodi ut perferendis.",
    urlImg: "/img/us/user1.jfif",
    identificador: "nahuel",
  },
  {
    nombre: "Agustín Gómez Aranda",
    nacimiento: "18 de Abril de 1993",
    educacion: "Universidad Nacional de Tucumán UNT",
    descri:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consectetur, sequi exercitationem ut adipisci officia nesciunt harum molestiae odit ipsa ullam aut? Quam, sequi! Porro autem voluptatibus commodi ut perferendis.",
    urlImg: "/img/us/user2.jfif",
    identificador: "agustin",
  },
  {
    nombre: "Benjamin Morton",
    nacimiento: "18 de Abril de 1993",
    educacion: "Universidad Nacional de Tucumán UNT",
    descri:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consectetur, sequi exercitationem ut adipisci officia nesciunt harum molestiae odit ipsa ullam aut? Quam, sequi! Porro autem voluptatibus commodi ut perferendis.",
    urlImg: "/img/us/user1.jfif",
    identificador: "bejamin",
  },
  {
    nombre: "Eric Eduardo Rodriguez",
    nacimiento: "18 de Abril de 1993",
    educacion: "Universidad Nacional de Tucumán UNT",
    descri:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit consectetur, sequi exercitationem ut adipisci officia nesciunt harum molestiae odit ipsa ullam aut? Quam, sequi! Porro autem voluptatibus commodi ut perferendis.",
    urlImg: "/img/us/user1.jfif",
    identificador: "eric",
  },
];

const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");

console.log(open);
close.addEventListener("click", () => {
  modalContainer.classList.remove("mostrar-modal");
});

function filtrarPorIdentificador(valor) {
  let integrante = integrantes.filter((c) => c.identificador == valor);
  return integrante;
}

function cargarModal(persona) {
  let titulo = document.getElementById("modal_titulo");
  let descripcion = document.getElementById("modal_descripcion");
  let datos = document.getElementById('modal_datos');
  let perfil = document.getElementById('imagen_modal');
  console.log(persona)
  console.log(persona[0].nombre)

  titulo.innerHTML = persona[0].nombre;
  datos.innerHTML = 'Fecha de nacimiento: ' + persona[0].nacimiento + '<br>' + 'Estudió en:  ' + persona[0].educacion;
  descripcion.innerHTML = persona[0].descri;
  perfil.src = persona[0].urlImg
}
