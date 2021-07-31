let cargaRegion = document.getElementById("region");
let cargaPais = document.getElementById("pais");

var sucursales = [
  {nombre:'First Office RG', direccion: 'Avenida Corrientes 2645', numero: '0114215789', ubicacion: 'Argentina'},
  {nombre:'RG Boxes', direccion: 'Juan José Passo 225', numero: '0114285319', ubicacion: 'Argentina'},
  {nombre:'RollingGames Pitch', direccion: 'San Martín 3361', numero: '0114625149', ubicacion: 'Argentina'},
  {nombre:'RollingGames Pitch Plus', direccion: 'Avenida 9 de Julio 155', numero: '0114325698', ubicacion: 'Argentina'},

  {nombre:'Office RG Br', direccion: 'Venâncio Shopping', numero: '6138785372', ubicacion: 'Brasil'},
  {nombre:'Salao 7 de Setembro', direccion: 'SHCS CLS 103 Sul', numero: '6132249208', ubicacion: 'Brasil'},
  {nombre:'RollingGames Sede Nacional', direccion: 'SGAS 605', numero: '8005700800', ubicacion: 'Brasil'},
  {nombre:'Saldao Mano RG', direccion: 'Via L2 Sul', numero: '7005722833', ubicacion: 'Brasil'},

  {nombre:'E-Commercial RG', direccion: 'Bascuñán Guerrero 1504', numero: '26802601', ubicacion: 'Chile'},
  {nombre:'RG Olimpia', direccion: 'Francisco Pizarro 1685', numero: '25415869', ubicacion: 'Chile'},
  {nombre:'RollingGames Pitch Ch', direccion: 'Manuel de Amat 3113', numero: '56258771', ubicacion: 'Chile'},
  {nombre:'Champion Games', direccion: 'Exposición 1511', numero: '25608300', ubicacion: 'Chile'},

  {nombre:'La Grande RG', direccion: '145W 53rd St', numero: '1215107714', ubicacion: 'Estados Unidos'},
  {nombre:'Rag and Bone', direccion: '182A Columbus Ave', numero: '2123627138', ubicacion: 'Estados Unidos'},
  {nombre:'Luxembourg Pitch', direccion: '200W 70th St', numero: '2128737411', ubicacion: 'Estados Unidos'},
  {nombre:'RollingGames Central', direccion: '21W End Ave', numero: '2122657625', ubicacion: 'Estados Unidos'},

  {nombre:'Mesones Rolling', direccion: 'Calle Regina 96', numero: '5562528044', ubicacion: 'México'},
  {nombre:'E-Vip', direccion: 'República de Uruguay 53', numero: '8009008477', ubicacion: 'México'},
  {nombre:'Topacio Pitch', direccion: 'Puerto Santo Tomas 3', numero: '5555228718', ubicacion: 'México'},
  {nombre:'Topacio Pitch Plus', direccion: 'Médico Militar 30', numero: '5523358771', ubicacion: 'México'},

  {nombre:'Color Text', direccion: 'Constituyente 2016', numero: '24132999', ubicacion: 'Uruguay'},
  {nombre:'Second Office RG', direccion: '21 de Septiembre 333', numero: '24118777', ubicacion: 'Uruguay'},
  {nombre:'KFE E-Commerce', direccion: 'Edil Hugo Prato 2289', numero: '24070695', ubicacion: 'Uruguay'},
  {nombre:'Topacio Pitch Uru', direccion: 'Bulevar General Artigas 1079', numero: '24070013', ubicacion: 'Uruguay'},

  {nombre:'Galería Bonanza', direccion: 'Avenida Dr José Gaspar Rodriguez de Francia', numero: '213004510', ubicacion: 'Paraguay'},
  {nombre:'RimEc', direccion: 'Teniente Rojas 255', numero: '21200030', ubicacion: 'Paraguay'},
  {nombre:'Topacio Pitch Py', direccion: 'Vice Presidente Sanchez 1102', numero: '214141991', ubicacion: 'Paraguaya'},
  {nombre:'E-Biggie', direccion: 'Luis Alberto de Herrera y Acá Vera', numero: '217290300', ubicacion: 'Paraguay'},

  {nombre:'Taj Limited', direccion: '72 Ahmudu Bello Way', numero: '7008252265', ubicacion: 'Nigeria'},
  {nombre:'Cedi Abuja Rolling', direccion: '264 Tafawa Balewa Way', numero: '7011676822', ubicacion: 'Nigeria'},
  {nombre:'Third Office RG', direccion: '154 3rd Avenue', numero: '7002154145', ubicacion: 'Nigeria'},
  {nombre:'Royal Devices', direccion: '1214 Sani Abacha Way', numero: '0114325698', ubicacion: 'Nigeria'},

  {nombre:'First Office RG', direccion: 'Avenida Corrientes 2645', numero: '0114215789', ubicacion: 'Argentina'},
  {nombre:'RG Boxes', direccion: 'Juan José Passo 225', numero: '0114285319', ubicacion: 'Argentina'},
  {nombre:'RollingGames Pitch', direccion: 'San Martín 3361', numero: '0114625149', ubicacion: 'Argentina'},
  {nombre:'RollingGames Pitch Plus', direccion: 'Avenida 9 de Julio 155', numero: '0114325698', ubicacion: 'Argentina'},

  {nombre:'Programming Collage', direccion: '17 Milner Rd', numero: '216899533', ubicacion: 'Sudáfrica'},
  {nombre:'Huis Boxes', direccion: '42 Alma Rd', numero: '216893612', ubicacion: 'Sudáfrica'},
  {nombre:'Play Pitch', direccion: '3 Lancaster Rd', numero: '21621445', ubicacion: 'Sudáfrica'},
  {nombre:'SouthBit Data', direccion: '7700 Ground Liesbeek', numero: '216805323', ubicacion: 'Sudáfrica'},

  {nombre:'King Baby Algerie', direccion: '31 Rue Mohammed Fellah', numero: '551265697', ubicacion: 'Argelia'},
  {nombre:'Data Belogbi', direccion: '106 Rue Mohammed Fellah', numero: '551244785', ubicacion: 'Argelia'},
  {nombre:'S3D Ecole', direccion: '1605 Rue Hacéne El Basri', numero: '557450386', ubicacion: 'Argelia'},
  {nombre:'ASMOS Consulting', direccion: '89 Cite Mohammed Saidoune Kouba', numero: '799922536', ubicacion: 'Argelia'},

  {nombre:'Beggah', direccion: '40 Mohammed Farid', numero: '1030777134', ubicacion: 'Egipto'},
  {nombre:'El Masry Vip', direccion: '2564 El-Nasereya', numero: '23953546', ubicacion: 'Egipto'},
  {nombre:'Nile City', direccion: '1143 River Street', numero: '124511548', ubicacion: 'Egipto'},
  {nombre:'Semsema Pitch', direccion: '233 Al Dokki St', numero: '1010005100', ubicacion: 'Egipto'},

  {nombre:'Scotch Club', direccion: 'Parkriing 10', numero: '6767607955', ubicacion: 'Austria'},
  {nombre:'Steffl Viena', direccion: 'Karntner St 19', numero: '1930560', ubicacion: 'Austria'},
  {nombre:'Kaisergruft Pitch', direccion: 'Tegetthoffstraße 2', numero: '+431512685388', ubicacion: 'Austria'},
  {nombre:'Kaisergruft Pitch Plus', direccion: 'Kärntner Str. 33, 1010 Wien, Austria', numero: '+431533041629', ubicacion: 'Austria'},

  {nombre:'Paredes REC', direccion: 'C. de Atocha, 30, 28012 Madrid, España', numero: '+34914296663', ubicacion: 'España'},
  {nombre:'Citynizer Plaza', direccion: 'Calle de Juanelo, 17, 28012 Madrid, España', numero: '+34915395630', ubicacion: 'España'},
  {nombre:'TASCHEN', direccion: 'Calle del Barquillo, 30, 28004 Madrid, España', numero: '+34916033042', ubicacion: 'España'},
  {nombre:'Veinti7 E-Commerce', direccion: 'Calle de San Mateo, 26, 28004 Madrid, España', numero: '+34692348284', ubicacion: 'España'},

  {nombre:'FREE-P-STAR', direccion: '61 Rue de la Verrerie, 75004 Paris, Francia', numero: '+33142780076', ubicacion: 'Francia'},
  {nombre:'Tabac de Rivoli', direccion: '44 Rue de Rivoli, 75004 Paris, Francia', numero: '+33972226596', ubicacion: 'Francia'},
  {nombre:'Odeón', direccion: '104 Bd Saint-Germain, 75006 Paris, Francia', numero: '+33187760330', ubicacion: 'Francia'},
  {nombre:'Zadkine Pitch', direccion: '100bis Rue d-Assas, 75006 Paris, Francia', numero: '+33155427720', ubicacion: 'Francia'},

  {nombre:'TheCourt', direccion: 'Via Labicana, 125, 00184 Roma RM, Italia', numero: '+390669354581', ubicacion: 'Italia'},
  {nombre:'AMA Data', direccion: 'Via Marco Aurelio, 40, 00184 Roma RM, Italia', numero: '+390670450630', ubicacion: 'Italia'},
  {nombre:'Arco di Dolabella', direccion: 'Via di S. Paolo della Croce, 00184 Roma RM, Italia', numero: '+39060608', ubicacion: 'Italia'},
  {nombre:'Grandi Scuole RG', direccion: 'Via della Ferratella in Laterano, 25, 00184 Roma RM, Italia', numero: '+390670495114', ubicacion: 'Italia'},
]

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