// for products array
let products = {
  data: [
    {
      productName: "insidiuos",
      category: "Pelicula",
      hours: "1h 43m",
      genre: "terror",
      sipnosis: "Josh y Renai se mudan a una nueva casa, donde su hijo tiene un terrible accidente y queda en estado de coma.",
      image:
        "images/favorite/f1.jpg",
      link:
        "FRW3K0LlsD0",
    },
    {
      productName: "War",
      category: "Pelicula",
      hours: "1h 45m",
      genre: "accion",
      sipnosis: "Durante una misión de rutina, los soldados se ven envueltos en un fuego cruzado y Claus debe tomar una decisión crucial que tiene graves consecuencias para él y su familia cuando vuelve a casa.",
      image:
        "images/favorite/f2.jpg",
      link:
        "tQ0mzXRk-oM",
    },
    {
      productName: "A dos metros de ti",
      category: "Pelicula",
      hours: "1h 57m",
      genre: "drama",
      sipnosis: "Stella, de 17 años, está ingresada en un hospital porque padece fibrosis quística. Su monótona existencia cambia cuando llega Will, un adolescente con la misma dolencia. Sin embargo, las normas del hospital prohíben el contacto entre ellos.",
      image:
        "images/favorite/f3.jpg",
      link:
        "vWhX8aTj5TI",
    },
    {
      productName: "Avatar",
      category: "Pelicula",
      hours: "2h 42m",
      genre: "fantasia",
      sipnosis: "Jake Sully es reclutado para participar en el programa Avatar en el lejano planeta de Pandora. Utilizando avatares biológicamente modificados, los humanos intentan establecer relaciones con la tribu nativa Na'vi y extraer valiosos minerales. ",
      image:
        "images/parallax/avatar.jpg",
      link:
        "96d3jsVWnOE",
    },
    {
      productName: "Doctor Strange",
      category: "Pelicula",
      hours: "2h 6m",
      genre: "accion",
      sipnosis: "Stephen Strange, un cirujano talentoso que sufre un accidente automovilístico que deja sus manos dañadas. Desesperado por recuperar su habilidad quirúrgica, busca curación en Nepal, donde encuentra a un anciano hechicero conocido como el Anciano.",
      image:
        "images/favorite/f5.jpg",
      link:
        "KREBGtEeW9U",
    },
    {
      productName: "Mulan",
      category: "Pelicula",
      hours: "1h 28m",
      genre: "aventura",
      sipnosis: "una joven china que se disfraza de hombre y se une al ejército imperial en lugar de su padre enfermo para luchar contra una invasión enemiga.",
      image:
        "images/popular/u1.jpg",
      link:
        "R-eFm--k21c",
    },
    {
      productName: "Capitan America",
      category: "Pelicula",
      hours: "2h 16m",
      genre: "accion",
      sipnosis: "Steve Rogers, un joven frágil que se convierte en un supersoldado durante la Segunda Guerra Mundial gracias a un suero experimental.",
      image:
        "images/popular/u3.jpg",
      link:
        "Ics4g1xppFg",
    },
    {
      productName: "The crown",
      category: "Series",
      hours: "2 temploradas",
      genre: "historia",
      sipnosis: " una mezcla de acontecimientos históricos reales y dramatización, ofreciendo una visión intrigante detrás de las escenas de la realeza y el poder político.",
      image:
        "images/trending/01.jpg",
      link:
        "OkPeb0QPKYo",
    },
    {
      productName: "The Big Bang Theory",
      category: "Series",
      hours: "10 temporadas",
      genre: "comedia",
      sipnosis:"se centra en un grupo de amigos científicos, en su mayoría físicos y expertos en tecnología, que enfrentan desafíos en su vida personal y profesional mientras navegan por situaciones cómicas y situaciones sociales incómodas.",
      image:
        "images/trending/02.jpg",
      link:
        "_uQXxvZ3afQ",
    },
    {
      productName: "Peaky Blinders",
      category: "Series",
      hours: "1 temporada",
      genre: "comedia",
      sipnosis: "La familia enfrenta desafíos de la policía, rivales y tensiones internas mientras buscan ascender en la jerarquía criminal y mejorar su posición en la sociedad.",
      image:
        "images/trending/03.jpg",
      link:
        "ZHZG6UArE3I",
    },
    {
      productName: "Narcos",
      category: "Series",
      hours: "2 temporadas",
      genre: "crimen",
      sipnosis: "personajes históricos y eventos reales, así como por su representación cruda y a menudo violenta de la industria del narcotráfico y los esfuerzos por combatirla. ",
      image:
        "images/trending/04.jpg",
      link:
        "iiuW754iw7o",
    },
    {
      productName: "Friends",
      category: "Series",
      hours: "16 temporadas",
      genre: "comedia",
      sipnosis: "sigue las aventuras y desventuras en el trabajo, el amor y la vida de seis amigos veinteañeros que viven en Manhattan durante los noventa.",
      image:
        "images/trending/05.jpg",
      link:
        "IEEbUzffzrk",
    },
    {
      productName: "Mizarpur",
      category: "Series",
      hours: "1 temporada",
      genre: "suspenso",
      sipnosis: "Akhandanand Tripathi facturó millones exportando alfombras y se convirtió en el jefe de la mafia de Mirzapur. Su hijo Munna no se detiene ante nada para continuar con el legado de su padre.",
      image:
        "images/trending/06.jpg",
      link:
        "ZNeGF-PvRHY",
    },
    {
      productName: "Basquetball",
      category: "Deportes",
      hours: "live",
      image:
        "images/suggested/01.jpg",
      link:
        "pW4e3xwqMm0",
    },
    {
      productName: "Volleball",
      category: "Deportes",
      hours: "live",
      image:
        "images/suggested/02.jpg",
      link:
        "JZ_Yuu0IU_M",
    },
    {
      productName: "Futbol",
      category: "Deportes",
      hours: "live",
      image:
        "images/suggested/03.jpg",
      link:
        "5VaF2BIhjUg",
    },
    {
      productName: "El conjuro",
      category: "Pelicula",
      hours: "1h 52m",
      genre: "terror",
      sipnosis: "A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja.",
      image:
        "images/slider/slider3.jpg",
      link:
        "oUyHULb7xDI",
    },
    {
      productName: "Golf",
      category: "Deportes",
      hours: "live",
      image:
        "images/suggested/05.jpg",
      link:
        "SBrLYubahDw",
    },
    {
      productName: "Beisbol",
      category: "Deportes",
      hours: "live",
      image:
        "images/suggested/04.jpg",
      link:
        "yq2DIhEU69A",
    },
    {
      productName: "GREENLAN",
      category: "Pelicula",
      hours: "1h 23m",
      genre: "suspenso",
      sipnosis: "Una familia emprende un viaje para encontrar un refugio seguro cuando un gran cometa arremete contra la Tierra. A medida que el apocalipsis se acerca, la increíble travesía termina en una batalla de último minuto para llegar a puerto seguro.",
      image:
        "images/popular/u5.jpg",
      link:
        "https://youtu.be/3XJ8n7RTuQc",
    },
    {
      productName: "Harry Poter",
      category: "Pelicula",
      hours: "2h 26m",
      genre: "aventura",
      sipnosis: " Harry Potter descubre que es hijo de dos conocidos hechiceros, de los que ha heredado poderes mágicos.",
      image:
        "images/top-10/01.jpg",
      link:
        "Luq2aEeRoKQ",
    },
    {
      productName: "The queen of Gambit",
      category: "Series",
      hours: "1 temporada",
      genre: "historia",
      sipnosis: "La huérfana y prodigio del ajedrez, Beth Harmon, lucha contra la adicción mientras busca convertirse en la mejor jugadora de ajedrez del mundo.",
      image:
        "images/top-10/02.jpg",
      link:
        "oZn3qSgmLqI",
    },
    {
      productName: "BoJack Horseman",
      category: "Series",
      hours: "3 temporadas",
      genre: "comedia",
      sipnosis: "es un olvidado actor que supo vivir sus días de gloria gracias a una comedia televisiva, y que se enfrenta a las más duras crisis existenciales y adicciones mientras intenta volver a las grandes ligas.",
      image:
        "images/top-10/05.jpg",
      link:
        "i1eJMig5Ik4",
    },
    {
      productName: "Mision Imposible",
      category: "Pelicula",
      hours: "2h 43m",
      genre: "accion",
      sipnosis: "Ethan debe detener a una inteligencia artificial que todas las potencias mundiales codician, la cual se ha vuelto tan poderosa que se rebeló contra sus creadores y ahora es una amenaza en sí misma.",
      image:
        "images/tvthrillers/05.jpg",
      link:
        "3kM40dT0WdY",
    },
    {
      productName: "Casino Royale",
      category: "Pelicula",
      hours: "2h 3m",
      genre: "accion",
      sipnosis: "La primera misión del agente británico James Bond como agente 007 lo lleva hasta Le Chiffre, banquero de los terroristas de todo el mundo.",
      image:
        "images/tvthrillers/04.jpg",
      link:
        "cKMKkptqAdw",
    },
    {
      productName: "Kingsman",
      category: "Pelicula",
      hours: "1h 37m",
      genre: "suspenso",
      sipnosis: "un joven problemático reclutado por una organización secreta de espionaje llamada Kingsman.",
      image:
        "images/tvthrillers/03.jpg",
      link:
        "Rs5J8kh62yo",
    },
    {
      productName: "Unhinge",
      category: "Pelicula",
      hours: "1h 56m",
      genre: "accion",
      sipnosis: "El horrendo día de Rachel, madre soltera, se torna una pesadilla infernal cuando toca la bocina a otro conductor. Lo que empieza como una discusión corriente por el tráfico se vuelve, en la cabeza de un psicópata, en una afrenta que merece venganza.",
      image:
        "images/tvthrillers/02.jpg",
      link:
        "GoqLErZfoq4",
    },
    {
      productName: " 13 Reasons Why",
      category: "Series",
      hours: "4 temporadas",
      genre: "suspenso",
      sipnosis: "El adolescente Clay Jensen se halla en medio de una serie de misterios desgarradores accionados por el trágico suicidio de una de sus amigas.", 
      image:
        "images/Series/13reasons.jpg",
      link:
        "KMv28IzioSs",
    },
    {
      productName: "Dark",
      category: "Series",
      hours: "3 temporadas",
      genre: "mistero",
      sipnosis: "La desaparición de dos niños muestra los vínculos entre cuatro familias y expone el pasado de una pequeña ciudad.",
      image:
        "images/Series/dark.jpg",
      link:
        "ESEUoa-mz2c",
    },
    {
      productName: "Elite",
      category: "Series",
      hours: "4 temporadas",
      genre: "misterio",
      sipnosis: "Las Encinas es el colegio más exclusivo de España, el lugar donde estudian los hijos de la élite y donde acaban de ser admitidos tres jóvenes de clase baja, procedentes de un colegio público en ruinas.",
      image:
        "images/Series/elite.jpg",
      link:
        "4rTBAlB1JkQ",
    },
    {
      productName: "La casa de papel",
      category: "Series",
      hours: "5 temporadas",
      genre: "drama",
      sipnosis: "Una banda organizada de ladrones se propone cometer el atraco del siglo en la Fábrica Nacional de Moneda y Timbre. Cinco meses de preparación quedarán reducidos a once días para poder llevar a cabo con éxito el gran golpe.",
      image:
        "images/Series/lacasadepapel.jpg",
      link:
        "3y-6iaveY6c",
    },
    {
      productName: "Merlina",
      category: "Series",
      hours: "1 temporada",
      genre: "fantasia",
      sipnosis: "Mientras asiste a la Academia Nevermore, Merlina Addams intenta dominar su incipiente habilidad psíquica, frustrar una ola de asesinatos y resolver el misterio que involucró a sus padres 25 años atrás.",
      image:
        "images/Series/merlina.jpg",
      link:
        "gmp7LTKnVPo",
    },
    {
      productName: "Estamos muertos",
      category: "Series",
      hours: "1 temporada",
      genre: "drama",
      sipnosis: "Una epidemia mortal estalla en una escuela. Acorralados, los alumnos solo tienen una opción: luchar con todas sus fuerzas para evitar convertirse en zombis.",
      image:
        "images/Series/estamosmuertos.jpg",
      link:
        "62jVLZ4JfjM",
    },
    {
      productName: "Freddy Dahmer",
      category: "Series",
      hours: "1 temporada",
      genre: "suspenso",
      sipnosis: " la complicada infancia y adolescencia de Jeffrey Dahmer. Con una madre drogadicta y un padre ausente debido a sus constantes viajes de trabajo, el pequeño Dahmer vivía en un hogar donde el afecto brillaba por su ausencia la complicada infancia y adolescencia de Jeffrey Dahmer.",
      image:
        "images/Series/001.jpg",
      link:
        "Ro3iCwDUWFI",
    },
    {
      productName: "Insidiuos 2",
      category: "Pelicula",
      hours: "1h 50m",
      genre: "terror",
      sipnosis: "Josh y Renai Lambert se han mudado con sus hijos a la casa de la madre de Josh, esperando olvidar el pasado y comenzar una nueva vida. Sin embargo, pronto experimentan visiones extrañas y fenómenos relacionados con los espíritus y un oscuro secreto.",
      image:
        "images/Series/002.jpg",
      link:
        "bBnKimrEZXY",
    },
    {
      productName: "Insidiuos 3",
      category: "Pelicula",
      genre: "terror",
      hours: "1h 37m",
      sipnosis: "La psíquica Elise Rainier acepta a regañadientes utilizar su capacidad de contacto con los muertos, con el fin de ayudar a una adolescente que se ha convertido en blanco de una peligrosa entidad sobrenatural.",
      image:
        "images/Series/005.jpg",
      link:
        "QK15n5I--8A",
    },
    {
      productName: "Desde mi cielo",
      category: "Pelicula",
      hours: "2h 15m",
      genre: "suspenso",
      sipnosis: "Después de que es violada y asesinada, una joven de 14 años vigila desde el cielo mientras su familia intenta superar lo vivido y el homicida continúa impune.",
      image:
        "images/Series/003.jpg",
      link: "CK3_6phS20g",
    },
    {
      productName: "Mas alla del cielo",
      category: "Pelicula",
      hours: "1h 40m",
      genre: "drama",
      sipnosis: "Charlie aceptó un trabajo en el cementerio en el que está enterrado su hermano pequeño y cada noche habla y juega con él. ",
      image:
        "images/Series/004.jpg",
      link: "14idGebUFMA",
    },
    {
      productName: "insidiuos 4",
      category: "Pelicula",
      hours: "1h 40m",
      genre: "terror",
      sipnosis: "Una prestigiosa parapsicóloga y su equipo se desplazan a Nuevo México para investigar los fenómenos que ocurren en la casa en la que ella creció. Allá, ella deberá enfrentarse a su mayor miedo: el demonio que sin querer liberó en el pasado.",
      image:
        "images/Series/006.jpg",
      link: "lUwaosQZkHU",
    },
    {
      productName: "Buscando a Nemo",
      category: "Pelicula",
      hours: "1h 40m",
      genre: "aventura",
      sipnosis: "Marlin, un pez payaso, siempre ha intentado proteger de todos los peligros a su hijo. Sin embargo, un buzo atrapa al pequeño, y ahora el padre deberá embarcarse en una increíble aventura por las aguas australianas para encontrarlo.",
      image:
        "images/Series/007.jpg",
      link: "ba4TwyaNhSQ",
    },




  ],
};

let currentModal = null;

for (let i of products.data) {
  //   console.log(i);

  //Create Card
  let card = document.createElement("div");
  card.classList.add("card", i.category, i.genre, "hide");

  //container
  let container = document.createElement("div");
  container.classList.add("container");

  card.innerHTML = `
  
    <div class="image-container"><img src="${i.image}"></div>
    <div><i class='bx bx-heart' id="heart-icon" ></i></div>
    <div class="container">
         <div>
            <h5 class="product-name">${i.productName.toUpperCase()}</h5>
            <h6 class="time"> ${i.sipnosis}</h6>
        </div>
        <div>
          <h6 class="camino"> ${i.hours}</h6>
        </div>
    </div>

    
    <div>
    <button class="modal-button">Trailer</button>
    </div>
    
    
`;
  card.appendChild(container);
  document.getElementById("products").appendChild(card);

  // Modal Button Click Event
  const modalButton = card.querySelector(".modal-button");
  modalButton.addEventListener("click", () => {
    if (currentModal) {
      document.body.removeChild(currentModal);
    }
    currentModal = openModal(i.link);
  });
}



//parameter passed from button (Parameter same as category)
function filterProduct(valuar) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (valuar.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");

  //loop through all cards
  elements.forEach((element) => {
    if (valuar == "Pelicula") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(valuar)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

//genero
//parameter passed from button (Parameter same as genery)
function filterProduct(value) {
  let buttonss = document.querySelectorAll(".geney-value");
  buttonss.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let intento = document.querySelectorAll(".card");

  //loop through all cards
  intento.forEach((inten) => {
    if (value == products.data.genre) {
      inten.classList.remove("hide");
    } else {
      if (inten.classList.contains(value)) {
        inten.classList.remove("hide");
      } else {
        inten.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    // console.log(index + " Index");

    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

//Initially display all products
window.onload = () => {
  filterProduct("all");
};

// heart btn click

let heartBtns = document.querySelectorAll("#heart-icon");
heartBtns.forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.toggle("bxs-heart");
  });
});

//miremos

// Modal Functions
function openModal(videoLink) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <iframe src="https://www.youtube.com/embed/${videoLink}" title="${products.data.productName}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  `;

  modal.innerHTML = modalContent;
  document.body.appendChild(modal);

  const closeModal = () => {
    document.body.removeChild(modal);
    currentModal = null;
  };

  const closeButton = modal.querySelector(".close-modal");
  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });


}


















