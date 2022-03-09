let fs = require('fs')
let uruguay = require('./Uruguay.json')
let guardar = (data) => fs.writeFileSync('./Uruguay.json', JSON.stringify(data,null,2),'utf-8')

let Departamentos = [
  "Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres",
],
  Artigas = [
    "Artigas", "Bella Union", "Baltasar Brum", "Bernabe Rivera", "Colonia Palma", "Montes Quintela", "Paso Campamento", "Sequeira", "Tomas Gomensoro"
  ],
  Canelones = [
    "Atlantida", "Barra de Carrasco", "Canelones", "Ciudad de la Costa", "Colonia Nicolich", "La Paz, Las piedras", "Pando", "Paso Carrasco", "Santa Lucia",
  ],
  CerroLago = [
    "Aceguá", "Fraile Muerto", "Isidoro Noblía", "Lago Merín", "Melo", "Plácido Rosas", "Río Branco", "Tupambaé",
  ],
  Colonia = [
    "Carmelo", "Colonia de Sacramento", "Juan Lacaze", "Nueva Helvecia", "Nueva Palmira", "Rosario", "Tarariras",
  ],
  Durazno = [
    "Durazno", "Sarandí del Yí", "Villa del Carmen"
  ],
  Flores = [
    "Andresito", "Área Rural", "Ismael Cortinas", "La Casilla", "Trinidad",
  ],
  Florida = [
    "25 de Agosto", "25 de Mayo", "Cardal", "Casupá", "Cerro Colorado", "Florida", "Fray Marcos", "Nico Pérez", "Sarandí Grande",
  ],
  Lavalleja = [
    "Colón", "Illescas", "José Batlle y Ordóñez", "José Pedro Varela", "Mariscala", "Minas", "Pirarajá", "Solís de Mataojo", "Zapicán",
  ],
  Maldonado = [
    "Aiguá", "Cerro Pelado", "Gregorio Aznárez", "Hipódromo", "José Ignacio", "La Barra", "Maldonado", "Pan de Azúcar", "Pinares-Las Delicias", "Piriápolis", "Portezuelo", "Punta del Este", "San Carlos", "San Rafael-El placer",
  ],
  Montevideo = [
    "Abayubá", "Montevideo", "Montevideo Rural", "Pajas Blancas", "Santiago Vázquez",
  ],
  Paysandu = [
    "Barrio Norte", "Guichón", "Nuevo Paysandú", "Paysandú", "Porvenir", "Piedras Coloradas", "Quebracho", "Sam Félix", "Tambores",
  ],
  RioNegro = [
    "Algorta", "Bellaco", "Colonia Ofir", "El Ombú", "Gartenal", "Grecco", "General Borges", "Fray Bentos", "Los Arrayanes", "Las Cañas", "Menafra", "Nuevo Berlín", "Paso de los Mellizos", "San Javier", "Sarandí de Navarro", "Villa María", "Young",
  ],
  Rivera = [
    "La Pedrera", "Masoller", "Minas de Corrales", "Rivera", "Santa Teresa", "Tranqueras", "Vichadero",
  ],
  Rocha = [
    "Chuy", "Castillos", "Lascano", "La Paloma"
  ],
  Salto = [
    "Albisu", "Belén", "Biassini", "Colonia 18 de Julio", "Colonia Itapebí", "Constitución", "Fernández", "Garibaldi", "Pueblo Lavalleja", "Rincón de Valentín", "Salto", "San Antonio", "Saucedo", "Sarandí del Arapey", "Termas del Daymán",
  ],
  SanJose = [
    "Ciudad de Plata", "Ecilda Paullier", "Libertad", "Puntas de Valdez", "Rafael Perazza", "Rodríguez", "San José de Mayo",
  ],
  Soriano = [
    "Cardona", "Chacras de Dolores", "Dolores", "José Enrique Rodó", "La Pedrera", "Mercedes", "Palmitas", "Villa Soriano",
  ],
  Tacuarembo = [
    "Achar", "Balneario Iporá", "Cuchilla de Peralta", "Curtina", "Cuchilla del Ombú", "Clara", "Chamberlain", "Cardozo", "Las Toscas", "Laureles", "Paso de toros", "Paso Bonilla", "Paso del Cerro", "Piedra Sola", "Punta de Cinco Sauces", "Pueblo de Barro", "Rincón del Bonete", "Sauce de Batoví", "San Gregorio de Polanco", "Tacuarembó", "Tambores", "Villa Ansina",
  ],
  TreintayTres = [
    "Cerro Chato", "Ejido de Treinta y Tres", "General Enrique Martínez", "Santa Clara de Olimar", "Treinta y Tres", "Vergara", "Villa Sara",
  ];

/* Añadir los departamentos de Uruguay */

let algo = () => {
  Departamentos.forEach((e,index) => {
    let base = {
      Id: index + 1,
      Nombre: e,
      Localidades : []
    }
    uruguay.push(base)
  });
  guardar(uruguay)
}
algo()

/* Añadir las localidades de Uruguay */

let localidad = (id,arr) => {
  uruguay.forEach((e,index) => {
    if (id === e.Id) {
        arr.forEach((localidad,index) => {
          let base = {
            Id: index + 1,
            Ciudad : localidad,
          }
          e.Localidades.push(base)
          return e.Localidades
        });
    }
    return uruguay
  })
  console.log(uruguay);
  guardar(uruguay)
}

/* Recorrer la funcion la cantidad de veces como departamentos tenga */

localidad(1,Artigas)
localidad(2,Canelones)
localidad(3,CerroLago)
localidad(4,Colonia)
localidad(5,Durazno)
localidad(6,Flores)
localidad(7,Florida)
localidad(8,Lavalleja)
localidad(9,Maldonado)
localidad(10,Montevideo)
localidad(11,Paysandu)
localidad(12,RioNegro)
localidad(13,Rivera)
localidad(14,Rocha)
localidad(15,Salto)
localidad(16,SanJose)
localidad(17,Soriano)
localidad(18,Tacuarembo)
localidad(19,TreintayTres)

