let cargaRegion = document.getElementById("region");
let cargaPais = document.getElementById("pais");
let stringSearch = document.getElementById("field-search");

let region = ["África", "América", "Asia", "Europa"];
let pais = [
  { nombre: "Argentina", region: "América" },
  { nombre: "Brasil", region: "América" },
  { nombre: "Chile", region: "América" },
  { nombre: "Estados Unidos", region: "América" },
  { nombre: "México", region: "América" },
  { nombre: "Uruguay", region: "América" },
  { nombre: "Paraguay", region: "América" },
  { nombre: "Nigeria", region: "África" },
  { nombre: "Sudáfrica", region: "África" },
  { nombre: "Argelia", region: "África" },
  { nombre: "Egipto", region: "África" },
  { nombre: "Austria", region: "Europa" },
  { nombre: "España", region: "Europa" },
  { nombre: "Francia", region: "Europa" },
  { nombre: "Italia", region: "Europa" },
  { nombre: "Portugal", region: "Europa" },
  { nombre: "China", region: "Asia" },
  { nombre: "Japón", region: "Asia" },
  { nombre: "India", region: "Asia" },
  { nombre: "Tailandia", region: "Asia" },
];

var sucursales = [
  {
    nombre: "First Office RG",
    direccion: "Avenida Corrientes 2645",
    numero: "0114215789",
    ubicacion: "Argentina",
  },
  {
    nombre: "RG Boxes",
    direccion: "Juan José Passo 225",
    numero: "0114285319",
    ubicacion: "Argentina",
  },
  {
    nombre: "RollingGames Pitch",
    direccion: "San Martín 3361",
    numero: "0114625149",
    ubicacion: "Argentina",
  },
  {
    nombre: "RollingGames Pitch Plus",
    direccion: "Avenida 9 de Julio 155",
    numero: "0114325698",
    ubicacion: "Argentina",
  },

  {
    nombre: "Office RG Br",
    direccion: "Venâncio Shopping",
    numero: "6138785372",
    ubicacion: "Brasil",
  },
  {
    nombre: "Salao 7 de Setembro",
    direccion: "SHCS CLS 103 Sul",
    numero: "6132249208",
    ubicacion: "Brasil",
  },
  {
    nombre: "RollingGames Sede Nacional",
    direccion: "SGAS 605",
    numero: "8005700800",
    ubicacion: "Brasil",
  },
  {
    nombre: "Saldao Mano RG",
    direccion: "Via L2 Sul",
    numero: "7005722833",
    ubicacion: "Brasil",
  },

  {
    nombre: "E-Commercial RG",
    direccion: "Bascuñán Guerrero 1504",
    numero: "26802601",
    ubicacion: "Chile",
  },
  {
    nombre: "RG Olimpia",
    direccion: "Francisco Pizarro 1685",
    numero: "25415869",
    ubicacion: "Chile",
  },
  {
    nombre: "RollingGames Pitch Ch",
    direccion: "Manuel de Amat 3113",
    numero: "56258771",
    ubicacion: "Chile",
  },
  {
    nombre: "Champion Games",
    direccion: "Exposición 1511",
    numero: "25608300",
    ubicacion: "Chile",
  },

  {
    nombre: "La Grande RG",
    direccion: "145W 53rd St",
    numero: "1215107714",
    ubicacion: "Estados Unidos",
  },
  {
    nombre: "Rag and Bone",
    direccion: "182A Columbus Ave",
    numero: "2123627138",
    ubicacion: "Estados Unidos",
  },
  {
    nombre: "Luxembourg Pitch",
    direccion: "200W 70th St",
    numero: "2128737411",
    ubicacion: "Estados Unidos",
  },
  {
    nombre: "RollingGames Central",
    direccion: "21W End Ave",
    numero: "2122657625",
    ubicacion: "Estados Unidos",
  },

  {
    nombre: "Mesones Rolling",
    direccion: "Calle Regina 96",
    numero: "5562528044",
    ubicacion: "México",
  },
  {
    nombre: "E-Vip",
    direccion: "República de Uruguay 53",
    numero: "8009008477",
    ubicacion: "México",
  },
  {
    nombre: "Topacio Pitch",
    direccion: "Puerto Santo Tomas 3",
    numero: "5555228718",
    ubicacion: "México",
  },
  {
    nombre: "Topacio Pitch Plus",
    direccion: "Médico Militar 30",
    numero: "5523358771",
    ubicacion: "México",
  },

  {
    nombre: "Color Text",
    direccion: "Constituyente 2016",
    numero: "24132999",
    ubicacion: "Uruguay",
  },
  {
    nombre: "Second Office RG",
    direccion: "21 de Septiembre 333",
    numero: "24118777",
    ubicacion: "Uruguay",
  },
  {
    nombre: "KFE E-Commerce",
    direccion: "Edil Hugo Prato 2289",
    numero: "24070695",
    ubicacion: "Uruguay",
  },
  {
    nombre: "Topacio Pitch Uru",
    direccion: "Bulevar General Artigas 1079",
    numero: "24070013",
    ubicacion: "Uruguay",
  },

  {
    nombre: "Galería Bonanza",
    direccion: "Avenida Dr José Gaspar Rodriguez de Francia",
    numero: "213004510",
    ubicacion: "Paraguay",
  },
  {
    nombre: "RimEc",
    direccion: "Teniente Rojas 255",
    numero: "21200030",
    ubicacion: "Paraguay",
  },
  {
    nombre: "Topacio Pitch Py",
    direccion: "Vice Presidente Sanchez 1102",
    numero: "214141991",
    ubicacion: "Paraguay",
  },
  {
    nombre: "E-Biggie",
    direccion: "Luis Alberto de Herrera y Acá Vera",
    numero: "217290300",
    ubicacion: "Paraguay",
  },
  {
    nombre: "Taj Limited",
    direccion: "72 Ahmudu Bello Way",
    numero: "7008252265",
    ubicacion: "Nigeria",
  },
  {
    nombre: "Cedi Abuja Rolling",
    direccion: "264 Tafawa Balewa Way",
    numero: "7011676822",
    ubicacion: "Nigeria",
  },
  {
    nombre: "Third Office RG",
    direccion: "154 3rd Avenue",
    numero: "7002154145",
    ubicacion: "Nigeria",
  },
  {
    nombre: "Royal Devices",
    direccion: "1214 Sani Abacha Way",
    numero: "0114325698",
    ubicacion: "Nigeria",
  },

  {
    nombre: "Programming Collage",
    direccion: "17 Milner Rd",
    numero: "216899533",
    ubicacion: "Sudáfrica",
  },
  {
    nombre: "Huis Boxes",
    direccion: "42 Alma Rd",
    numero: "216893612",
    ubicacion: "Sudáfrica",
  },
  {
    nombre: "Play Pitch",
    direccion: "3 Lancaster Rd",
    numero: "21621445",
    ubicacion: "Sudáfrica",
  },
  {
    nombre: "SouthBit Data",
    direccion: "7700 Ground Liesbeek",
    numero: "216805323",
    ubicacion: "Sudáfrica",
  },

  {
    nombre: "King Baby Algerie",
    direccion: "31 Rue Mohammed Fellah",
    numero: "551265697",
    ubicacion: "Argelia",
  },
  {
    nombre: "Data Belogbi",
    direccion: "106 Rue Mohammed Fellah",
    numero: "551244785",
    ubicacion: "Argelia",
  },
  {
    nombre: "S3D Ecole",
    direccion: "1605 Rue Hacéne El Basri",
    numero: "557450386",
    ubicacion: "Argelia",
  },
  {
    nombre: "ASMOS Consulting",
    direccion: "89 Cite Mohammed Saidoune Kouba",
    numero: "799922536",
    ubicacion: "Argelia",
  },

  {
    nombre: "Beggah",
    direccion: "40 Mohammed Farid",
    numero: "1030777134",
    ubicacion: "Egipto",
  },
  {
    nombre: "El Masry Vip",
    direccion: "2564 El-Nasereya",
    numero: "23953546",
    ubicacion: "Egipto",
  },
  {
    nombre: "Nile City",
    direccion: "1143 River Street",
    numero: "124511548",
    ubicacion: "Egipto",
  },
  {
    nombre: "Semsema Pitch",
    direccion: "233 Al Dokki St",
    numero: "1010005100",
    ubicacion: "Egipto",
  },
  {
    nombre: "Scotch Club",
    direccion: "Parkriing 10",
    numero: "6767607955",
    ubicacion: "Austria",
  },
  {
    nombre: "Steffl Viena",
    direccion: "Karntner St 19",
    numero: "1930560",
    ubicacion: "Austria",
  },
  {
    nombre: "Kaisergruft Pitch",
    direccion: "Tegetthoffstraße 2",
    numero: "+431512685388",
    ubicacion: "Austria",
  },
  {
    nombre: "Kaisergruft Pitch Plus",
    direccion: "Kärntner Str. 33, 1010 Wien, Austria",
    numero: "+431533041629",
    ubicacion: "Austria",
  },
  {
    nombre: "Paredes REC",
    direccion: "C. de Atocha, 30, 28012 Madrid, España",
    numero: "+34914296663",
    ubicacion: "España",
  },
  {
    nombre: "Citynizer Plaza",
    direccion: "Calle de Juanelo, 17, 28012 Madrid, España",
    numero: "+34915395630",
    ubicacion: "España",
  },
  {
    nombre: "TASCHEN",
    direccion: "Calle del Barquillo, 30, 28004 Madrid, España",
    numero: "+34916033042",
    ubicacion: "España",
  },
  {
    nombre: "Veinti7 E-Commerce",
    direccion: "Calle de San Mateo, 26, 28004 Madrid, España",
    numero: "+34692348284",
    ubicacion: "España",
  },
  {
    nombre: "FREE-P-STAR",
    direccion: "61 Rue de la Verrerie, 75004 Paris, Francia",
    numero: "+33142780076",
    ubicacion: "Francia",
  },
  {
    nombre: "Tabac de Rivoli",
    direccion: "44 Rue de Rivoli, 75004 Paris, Francia",
    numero: "+33972226596",
    ubicacion: "Francia",
  },
  {
    nombre: "Odeón",
    direccion: "104 Bd Saint-Germain, 75006 Paris, Francia",
    numero: "+33187760330",
    ubicacion: "Francia",
  },
  {
    nombre: "Zadkine Pitch",
    direccion: "100bis Rue d-Assas, 75006 Paris, Francia",
    numero: "+33155427720",
    ubicacion: "Francia",
  },
  {
    nombre: "TheCourt",
    direccion: "Via Labicana, 125, 00184 Roma RM, Italia",
    numero: "+390669354581",
    ubicacion: "Italia",
  },
  {
    nombre: "AMA Data",
    direccion: "Via Marco Aurelio, 40, 00184 Roma RM, Italia",
    numero: "+390670450630",
    ubicacion: "Italia",
  },
  {
    nombre: "Arco di Dolabella",
    direccion: "Via di S. Paolo della Croce, 00184 Roma RM, Italia",
    numero: "+39060608",
    ubicacion: "Italia",
  },
  {
    nombre: "Grandi Scuole RG",
    direccion: "Via della Ferratella in Laterano, 25, 00184 Roma RM, Italia",
    numero: "+390670495114",
    ubicacion: "Italia",
  },
  {
    nombre: "First Office RG",
    direccion: "Avenida Corrientes 2645",
    numero: "0114215789",
    ubicacion: "Portugal",
  },
  {
    nombre: "RG Boxes",
    direccion: "Juan José Passo 225",
    numero: "0114285319",
    ubicacion: "Portugal",
  },
  {
    nombre: "RollingGames Pitch",
    direccion: "San Martín 3361",
    numero: "0114625149",
    ubicacion: "Portugal",
  },
  {
    nombre: "RollingGames Pitch Plus",
    direccion: "Avenida 9 de Julio 155",
    numero: "0114325698",
    ubicacion: "Portugal",
  },
  {
    nombre: "Ping An Financer",
    direccion: "Futian CBD, Futian, Shenzhen, China",
    numero: "0644841245415",
    ubicacion: "China",
  },
  {
    nombre: "Polison RG",
    direccion:
      "Xinwen Rd, Futian District, Shenzhen, Guangdong Province, China",
    numero: "102412454",
    ubicacion: "China",
  },
  {
    nombre: "Aiziji",
    direccion:
      "Shennan Ave, Xiangmihu, Futian District, Shenzhen, Guangdong Province, China",
    numero: "0454561651",
    ubicacion: "China",
  },
  {
    nombre: "Baoji",
    direccion:
      "Meihua Rd, Meilin, Futian District, Shenzhen, Guangdong Province, China",
    numero: "03546516",
    ubicacion: "China",
  },
  {
    nombre: "Kids Osaka",
    direccion:
      "2 Chome-1-7 Ogimachi, Kita Ward, Osaka, 530-0025, Japón",
    numero: "+81663116601",
    ubicacion: "Japón",
  },
  {
    nombre: "Mirinomiya RG",
    direccion:
      "2 Chome-1-88 Morinomiya, Joto Ward, Osaka, 536-0025, Japón",
    numero: "+81669690111",
    ubicacion: "Japón",
  },
  {
    nombre: "Kōkoku High",
    direccion:
      "1 Chome-4-26 Teradacho, Tennoji Ward, Osaka, 543-0045, Japón",
    numero: "+81667798151",
    ubicacion: "Japón",
  },
  {
    nombre: "Osaka Shiritsu Tajima Junior",
    direccion:
      "5 Chome-23-7 Tajima, Ikuno Ward, Osaka, 544-0011, Japón",
    numero: "+81667581021",
    ubicacion: "Japón",
  },
  {
    nombre: "Asia House",
    direccion:
      "KG Marg, 1688 Barracks, New Delhi, Delhi 110001, India",
    numero: "+911123385466",
    ubicacion: "India",
  },
  {
    nombre: "Shangri-La",
    direccion:
      "19, Ashoka Rd, Janpath, Connaught Place, New Delhi, Delhi 110001, India",
    numero: "+911141191919",
    ubicacion: "India",
  },
  {
    nombre: "Paharganj",
    direccion:
      "Multani Dhanda, Paharganj, New Delhi, Delhi 110055, India",
    numero: "+914251191719",
    ubicacion: "India",
  },
  {
    nombre: "National Archives",
    direccion:
      "Janpath Road, Opposite Indira Gandhi National Centre for the Arts, near Shastri Bhavan, New Delhi, Delhi 110001, India",
    numero: "+911123384797",
    ubicacion: "India",
  },
  {
    nombre: "Wat Arun",
    direccion:
      "158 Thanon Wang Doem, Wat Arun, Bangkok Yai, Bangkok 10600, Tailandia",
    numero: "+6628912185",
    ubicacion: "Tailandia",
  },
  {
    nombre: "Nan Ah Pitch",
    direccion:
      "323 Prachathipok Road 323 Somdet Chaopraya Klongsan Bangkok 10600, Tailandia",
    numero: "+6624395100",
    ubicacion: "Tailandia",
  },
  {
    nombre: "Tha Din Daeng",
    direccion:
      "163 Tha Din Daeng Rd, Khwaeng Somdet Chao Phraya, Khlong San, Bangkok 10600, Tailandia",
    numero: "+6624383738",
    ubicacion: "Tailandia",
  },
  {
    nombre: "Pra Dipat",
    direccion:
      "1444 97 Thanon Nakhon Chaisi Rd, Thanon Nakhon Chai Si, Dusit District, Bangkok 10300, Tailandia",
    numero: "+6626692291",
    ubicacion: "Tailandia",
  },
];

console.log(sucursales[0].nombre);

cargaPais.addEventListener("change", function () {
  let valorSucur = cargaPais.value;
  console.log(valorSucur);
  let sucur = filtrarSucursalPorPais(valorSucur);
  console.log(sucur);
  var lista = document.getElementById("frame1");
  lista.innerHTML = "";
  console.log(lista);
  sucur.forEach(function (data, index) {
    var linew = document.createElement("p");
    var espacio = document.createElement("br");
    var espacio2 = document.createElement("br");
    var textSpanSucu = document.createTextNode(
      "Sucursal: " + data.nombre
    )
    var textSpanDirec = document.createTextNode(
      "Dirección: " + data.direccion
    )
    var contenido = document.createTextNode(
        "Teléfono: " +
        data.numero
    );
    linew.appendChild(textSpanSucu);
    linew.appendChild(espacio);
    linew.appendChild(textSpanDirec);
    linew.appendChild(espacio2);
    lista.appendChild(linew);
    linew.appendChild(contenido);
  });
});

cargarRegion();

stringSearch.addEventListener("change", function () {
  let sucur = filtrarPorTexto(stringSearch.value);
  console.log(sucur);
  var lista = document.getElementById("frame1");
  lista.innerHTML = "";
  console.log(lista);
  sucur.forEach(function (data, index) {
    var linew = document.createElement("p");
    var espacio = document.createElement("br");
    var espacio2 = document.createElement("br");
    var textSpanSucu = document.createTextNode(
      "Sucursal: " + data.nombre
    )
    var textSpanDirec = document.createTextNode(
      "Dirección: " + data.direccion
    )
    var contenido = document.createTextNode(
        "Teléfono: " +
        data.numero
    );
    linew.appendChild(textSpanSucu);
    linew.appendChild(espacio);
    linew.appendChild(textSpanDirec);
    linew.appendChild(espacio2);
    lista.appendChild(linew);
    linew.appendChild(contenido);
  });
});

cargaRegion.addEventListener("change", function () {
  let valor = cargaRegion.value;
  let paises = filtrarPaisPorRegion(valor);
  let elementos = "<option selected value='0'>--Seleccione--</option>";
  for (let i = 0; i < paises.length; i++) {
    elementos +=
      '<option value="' +
      paises[i].nombre +
      '">' +
      paises[i].nombre +
      "</option>";
  }
  let comboPais = document.getElementById("pais");
  comboPais.innerHTML = elementos;
});

function filtrarPaisPorRegion(nombreReg) {
  let paises = pais.filter((paises) => paises.region == nombreReg);
  return paises;
}

function filtrarSucursalPorPais(sucur) {
  let negocios = sucursales.filter((c) => c.ubicacion == sucur);
  return negocios;
}

function filtrarPorTexto(texto) {
  let negocios = sucursales.filter((c) => c.nombre.includes(texto));
  console.log(negocios);
  return negocios;
}

function cargarRegion() {
  let continentes = document.getElementById("region");
  let elementos = "<option selected value='0'>--Seleccione--</option>";
  for (i = 0; i < region.length; i++) {
    elementos += '<option value="' + region[i] + '">' + region[i] + "</option>";
  }
  continentes.innerHTML = elementos;
}
