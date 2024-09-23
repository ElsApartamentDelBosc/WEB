const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
const grande    = document.querySelector('.grande')
const punto     = document.querySelectorAll('.punto')

navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});


document.addEventListener('DOMContentLoaded', function() {
  var mainImage = document.getElementById('mainImage');
  var modal = document.getElementById('myModal');
  var closeModal = document.getElementById('closeModal');
  var modalImages = modal.getElementsByTagName('img');

  mainImage.addEventListener('click', function() {
      modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  for (var i = 0; i < modalImages.length; i++) {
      modalImages[i].addEventListener('click', function() {
          mainImage.src = this.src;
          modal.style.display = 'none';
      });
  }
});





document.addEventListener('DOMContentLoaded', function() {
  var arrow = document.getElementById('arrow');
  arrow.addEventListener('click', function(event) {
      event.preventDefault(); // Evita la acción predeterminada del enlace
      window.location.href = 'index.html'; // Redirige a index.html
  });
});






const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}





function changeLanguage(lang) {
  const pageTitle = document.getElementById('page-title');
  const welcomeText = document.getElementById('welcome-text');

  switch (lang) {
    case 'es':
    extrasTitulo.textContent = 'EXTRAS'; 
    tituloFooter.textContent = 'Sobre nosotros'; 
    descripcionFooter.textContent = 'Los apartamentos del bosque son dos casetas de piedra adosadas, situadas en un espacio de finca familiar a 400 metros en coche del pueblo de Ribes de Freser. También hay acceso a pie por dos senderos que en 8 minutos nos acercan al pueblo. Estaréis rodeados de montaña y bosque, por lo que las vistas son espectaculares.'; 
    preguntaFooter.textContent = '¿Tienes una pregunta?'; 
    bannerPromocional.textContent = 'Vive una experiencia única en medio de la naturaleza. Apartamentos a pocos minutos de Ribes de Freser.';
    inicio.textContent = 'Inicio';
    servicios.textContent = 'Servicios';
    habitaciones.textContent = 'Habitaciones';
    extras.textContent = 'Extras';
    encuéntranos.textContent = 'Encuéntranos';  
    serviciosTitulo.textContent = 'SERVICIOS'; 
    servicioPetfriendly.textContent = 'Pet Friendly';  
    servicios1.textContent = '¡Tu mascota es bienvenida! Ofrecemos amplios espacios al aire libre para que corra y juegue. En la habitación, encontrarás un bowl para el agua. Aplicamos un suplemento de 8 € por noche y mascota. Este cargo adicional respalda nuestros esfuerzos adicionales de limpieza y cuidado, garantizando un ambiente acogedor para todos.'; 
    servicioPiscina.textContent = 'Piscina de temporada y área de descanso'; 
    servicios2.textContent = 'Disfruta de nuestra amplia piscina al aire libre diseñada para relajarte al máximo. Sumérgete en este oasis de confort después de emocionantes excursiones. Con cómodas tumbonas y toallas, es el lugar perfecto para recargar energías tras tus aventuras diarias.'; 
    servicioActividadesExtras.textContent = 'Actividades y atracciones'; 
    servicios3.textContent = 'A solo 400 metros del encantador pueblo de Ribes de Freser, disfrute de una ubicación excepcional rodeado por majestuosas montañas y exuberantes bosques.'; 
    servicioParking.textContent = 'Parking'; 
    servicios4.textContent = 'Nuestro establecimiento ofrece un práctico estacionamiento, asegurándote un lugar cercano y seguro para aparcar tu vehículo. Cada apartamento cuenta con su espacio designado en nuestro parking, proporcionando comodidad y seguridad exclusiva para nuestros huéspedes'; 
    servicioOnlyAldults.textContent = 'Solo adultos'; 
    servicios5.textContent = 'Nuestros apartementos son exclusivamente para dos adultos que buscan una experiencia serena y relajante. Apreciamos tu comprension y te deseamos que disfrutes al maximo tu estancia.';
    serviciosAguaOzonizada.textContent = 'Agua Ozonizada';
    servicios6.textContent = 'En nuestro compromiso con la excelencia, utilizamos tecnología de vanguardia para la limpieza. Con el agua ozonizada, libre de productos tóxicos, garantizamos un ambiente limpio y saludable.'; 
    apartamentos1.textContent = 'APARTAMENTOS'; 
    titulo1_1.textContent = 'La Cabaña del bosque'; 
    descripcion1_1.textContent = 'Cabaña entera'; 
    descripcion1_2.textContent = 'Terraza con vistas'; 
    descripcion1_3.textContent = 'Descubre nuestra Cabaña del Bosque, un acogedor apartamento de dos niveles con diseño tipo tiny house. En la parte superior, encontrarás el dormitorio, mientras que en la inferior disfrutarás de la sala, comedor, cocina y baño. Equipado con todos los utensilios para cocinar, microondas, vitrocerámica y una pequeño nevera. Disfruta de una espaciosa ducha estilo italiano, un cómodo sofá y una televisión de 52 pulgadas. La amplia terraza te invita a disfrutar de tus comidas con vistas a la montaña y el bosque.En la cabaña nos comprometemos con equilibrio ecológico mediante el uso de estufa de pellets y paneles solares para la calefacción del espacio y el suministro de agua caliente, desempeñando nuestro papel en la preservación del medio ambiente y la creación de un futuro más sostenible.'; 
    descripcion1_4.textContent = 'Por Noche'; 
    titulo1_2.textContent = 'Los Apartamentos del bosque'; 
    descripcion2_1.textContent = 'Alojamiento entero'; 
    descripcion2_2.textContent = 'Terraza con vistas'; 
    descripcion2_3.textContent = 'Vive nuestros Apartementos, un acogedor ambiente con diseño tipo loft. Cuenta con un espacio armonioso que integra el dormitorio, la sala, el comedor y la cocina, creando una sensación de hogar. El único rincón cerrado es el baño, destacando por su espaciosa ducha al estilo italiano. Equipado con todos los utensilios necesarios para cocinar, microondas, vitrocerámica y una pequeña nevera. Siente la conexión con la naturaleza en la amplia terraza privada, donde puedes meditar y respirar aire fresco con vistas a la montaña y el bosque.Cuenta con un eficiente sistema de calefacción central alimentado por dos energías renovables, la solar y la biomasa, contribuyendo a la preservación de un medio ambiente más sostenible.'; 
    descripcion2_4.textContent = 'Por Noche'; 
    titulo1_3.textContent = 'La Glorieta'; 
    descripcion3_1.textContent = 'Apartamento privado en edificio'; 
    descripcion3_2.textContent = 'Torreón con vistas'; 
    descripcion3_3.textContent = 'Este apartamento privado se encuentra en el piso más alto de un edificio modernista de 3 plantas. El alojamiento se distribuye en tres espacios distintos: la acogedora habitación con su baño privado, un segundo espacio que engloba la sala, comedor y cocina, y la guinda del pastel, el torreón. En el torreón, encontrarás dos tumbonas para relajarte y disfrutar de las impresionantes vistas, junto con una pequeña mesa para deleitarte con tus comidas en este espacio único. La cocina está completamente equipada con todos los utensilios necesarios para cocinar, incluyendo microondas, vitrocerámica y una práctica nevera. En este apartamento, nos comprometemos con la sostenibilidad utilizando energía geotérmica y solar para calentar el espacio, contribuyendo así a la preservación del medio ambiente y a la construcción de un futuro más sostenible.'; 
    descripcion3_4.textContent = 'Por Noche';  
    titulo1_4.textContent = 'El Petit Estudi'; 
    descripcion4_1.textContent = 'Apartamento privado en edificio'; 
    descripcion4_2.textContent = 'Ventanas con vistas'; 
    descripcion4_3.textContent = 'El Petit Estudi, tal como su nombre dice, es un pequeño apartamento situado en la parte alta de la gran casa de estilo modernista de tres plantas que ocupa la finca. El alojamiento se distribuye en dos espacios distintos: la acogedora habitación con su baño privado y un segundo espacio que engloba la sala, comedor y cocina. La cocina está completamente equipada con todos los utensilios necesarios para cocinar, incluyendo microondas, vitrocerámica y una práctica nevera. En este apartamento, nos comprometemos con la sostenibilidad utilizando energía geotérmica y solar para calentar el espacio, contribuyendo así a la preservación del medio ambiente y a la construcción de un futuro más sostenible.';
    descripcion4_4.textContent = 'Por Noche'; 
    pie1.textContent = "Las tarifas están sujetas a variaciones según la demanda y la disponibilidad."
    pie2.textContent = "Las tarifas están sujetas a variaciones según la demanda y la disponibilidad."
    pie3.textContent = "Las tarifas están sujetas a variaciones según la demanda y la disponibilidad."
    pie4.textContent = "Las tarifas están sujetas a variaciones según la demanda y la disponibilidad."
    break;
    case 'ca':
    extrasTitulo.textContent = "EXTRES";
    tituloFooter.textContent = "Sobre nosaltres";
    descripcionFooter.textContent = "Els apartaments del bosc són dues casetes de pedra adossades, situades en un espai de finca familiar a 400 metres en cotxe del poble de Ribes de Freser. També hi ha accés a peu per dos senders que en 8 minuts ens acosten al poble. Estareu envoltats de muntanya i bosc, pel que les vistes són espectaculars.";
    preguntaFooter.textContent = "¿Tens alguna pregunta?";
    bannerPromocional.textContent = "Viure una experiència única en mig de la natura. Apartaments a pocs minuts de Ribes de Freser.";
    inicio.textContent = "Inici";
    servicios.textContent = "Serveis";
    habitaciones.textContent = "Habitacions";
    extras.textContent = "Extres";
    encuéntranos.textContent = "Troba";
    serviciosTitulo.textContent = "SERVEIS";
    servicios1.textContent = "¡La teva mascota és benvinguda! Oferim àmplies zones a l'aire lliure perquè corri i jugui. A l'habitació, trobaràs un bol per a l'aigua. Apliquem un suplement de 8 € per nit i mascota. Aquest càrrec addicional recolza els nostres esforços addicionals de neteja i cura, assegurant un ambient acollidor per a tothom.";
    servicioPiscina.textContent = 'Piscina de temporada i zona de descans'; 
    servicios2.textContent = "Gaudeix de la nostra àmplia piscina a l'aire lliure dissenyada per relaxar-te al màxim. Submergeix-te en aquest oasi de confort després d'emocionants excursionst. Amb còmodes tumbones i tovalloles, és el lloc perfecte per recarregar energies després de les teves aventures diàries.";
    servicioActividadesExtras.textContent = "Activitats i atraccions";
    servicios3.textContent = "Descobreix la bellesa de Ribes de Freser, a només 400 metres del nostre allotjament. A 912 metres sobre el nivell del mar, el nostre refugi ofereix un entorn excepcional entre muntanyes, boscos i rius pirinencs. Ideal per relaxar-te o gaudir d'esports a l'aire lliure com l'esquí, el ciclisme i el senderisme.";
    servicioParking.textContent = 'Aparcament'; 
    servicios4.textContent = "El nostre establiment ofereix un còmode estacionament, assegurant-te un lloc proper i segur per aparcar el teu vehicle. Cada allotjament compta amb el seu espai assignat de l'aparcament, proporcionant comoditat i seguretat exclusiva pels nostres hostes.";
    servicioOnlyAldults.textContent = 'Només per a adults'; 
    servicios5.textContent = 'Els nostres apartaments són exclusivament per a dues persones adultes que busquen una experiència serena i relaxant. Apreciem la teva comprensió i et desitgem que gaudeixis al màxim de la teva estada.';
    serviciosAguaOzonizada.textContent = 'Neteja amb aigua ozonitzada';
    servicios6.textContent = "En el nostre compromís amb l'excel·lència, utilitzem tecnologia d'avantguarda per a la neteja. Amb l'aigua ozonitzada, lliure de productes tòxics, garantim un ambient net i saludable."; 
    apartamentos1.textContent = "APARTAMENTS";
    titulo1_1.textContent = "La cabana del bosc";
    descripcion1_1.textContent = "Unitat d'allotjament completa";
    descripcion1_2.textContent = "Terrassa amb vistes";
    descripcion1_3.textContent = "Descobreix la nostra Cabana del Bosc, un acollidor apartament de dos nivells amb disseny de tipus tiny house. A la part superior, trobaràs l'habitació, mentre que a la inferior gaudiràs de la sala, menjador, cuina i bany. Equipat amb tots els estris per cuinar, microones, vitroceràmica i una petita nevera. Gaudeix d'una àmplia dutxa estil italià, un còmode sofà i una televisió de 52 polzades. L’àmplia terrassa et convida a gaudir dels teus àpats amb vistes a la muntanya i al bosc. A la cabana ens comprometem amb l'equilibri ecològic mitjançant l'ús d'estufa de pellets i panells solars per a la calefacció de l'espai i el subministrament d'aigua calenta, jugant el nostre paper en la preservació del medi ambient i la creació d'un futur més sostenible.";
    descripcion1_4.textContent = "Per Nit";
    titulo1_2.textContent = "Els Apartaments del bosc";
    descripcion2_1.textContent = "Unitat d'allotjament completa";
    descripcion2_2.textContent = "Terrassa amb vistes";
    descripcion2_3.textContent = "Viu els nostres Apartaments, un ambient acollidor amb disseny de tipus loft. Compta amb un espai harmoniós que integra l'habitació, la sala, el menjador i la cuina, creant una sensació de llar. L'únic racó tancat és el bany, destacant per la seva àmplia dutxa a l’estil italià. Equipat amb tots els estris necessaris per cuinar, microones, vitroceràmica i una petita nevera. Sent la connexió amb la natura a l’àmplia terrassa privada, on pots meditar i respirar aire fresc amb vistes a la muntanya i al bosc. Compta amb un eficient sistema de calefacció central alimentat per dues energies renovables, la solar i la biomassa, contribuint a la preservació d'un medi ambient més sostenible.";
    descripcion2_4.textContent = "Per Nit";
    titulo1_3.textContent = "La Glorieta";
    descripcion3_1.textContent = "Apartament privat en edifici";
    descripcion3_2.textContent = "Torreón amb vistes";
    descripcion3_3.textContent = "La Glorieta és un loft amb torreó i bones vistes que es troba a Ribes de Freser i ofereix piscina a l'aire lliure i vistes a la muntanya. Es troba a 7,4 km de l'estació d'esquí de Vall de Núria i ofereix jardí i aparcament privat gratuït. L'apartament consta d'1 dormitori, sala d'estar, cuina totalment equipada amb nevera i cafetera i bany amb dutxa i articles de tocador gratuïts. Es proporcionen tovalloles i roba de llit.";
    descripcion3_4.textContent = "Per Nit";  
    descripcion4_1.textContent = "Apartament privat en edifici";
    descripcion4_2.textContent = "Finestres amb vistes";
    descripcion4_3.textContent = "El Petit Estudi, tal com el seu nom indica, és un petit apartament situat a la part alta de la gran casa d'estil modernista de tres plantes que ocupa la finca. L'allotjament es distribueix en dos espais diferents: l'acollidora habitació amb el seu bany privat i un segon espai que engloba la sala, el menjador i la cuina, equipada amb tots els estris necessaris per cuinar, incloent microones, vitroceràmica i una pràctica nevera.En aquest apartament, ens comprometem amb la sostenibilitat utilitzant energia geotèrmica i solar per escalfar l'espai, contribuint així a la preservació del medi ambient i a la construcció d'un futur més sostenible.";
    descripcion4_4.textContent = "Per Nit";
    pie1.textContent = "Les tarifes estan subjectes a variacions segons la demanda i la disponibilitat"
    pie2.textContent = "Les tarifes estan subjectes a variacions segons la demanda i la disponibilitat."
    pie3.textContent = "Les tarifes estan subjectes a variacions segons la demanda i la disponibilitat."
    pie4.textContent = "Les tarifes estan subjectes a variacions segons la demanda i la disponibilitat."
    break;
    case 'fr':
      extrasTitulo.textContent = 'SUPPLÉMENTS';
      tituloFooter.textContent = 'À propos de nous';
      descripcionFooter.textContent = 'Les appartements de la forêt sont deux chalets en pierre attenants, situés sur une propriété familiale à 400 mètres en voiture du village de Ribes de Freser. Il y a également un accès à pied par deux sentiers qui nous amènent au village en 8 minutes. Vous serez entourés de montagnes et de forêt, offrant ainsi des vues spectaculaires.';
      preguntaFooter.textContent = 'Vous avez une question ?';
      bannerPromocional.textContent = 'Vivez une expérience unique au cœur de la nature. Appartements à quelques minutes de Ribes de Freser.';
      inicio.textContent = 'Accueil';
      servicios.textContent = 'Services';
      habitaciones.textContent = 'Chambres';
      extras.textContent = 'Suppléments';
      encuéntranos.textContent = 'Où nous trouver';
      serviciosTitulo.textContent = 'SERVICES';
      servicios1.textContent = 'Ici, votre animal de compagnie est plus que bienvenu ! Nous comprenons à quel point il est important pour vous que votre fidèle compagnon passe des vacances aussi spéciales que les vôtres.';
      servicioPiscina.textContent = 'Piscina de temporada y área de descanso'; 
      servicios2.textContent = 'Notre hôtel propose une piscine spacieuse et rafraîchissante, conçue pour que vous puissiez vous détendre et en profiter au maximum.';
      servicioActividadesExtras.textContent = 'Activités Supplémentaires';
      servicios3.textContent = "À seulement 400 mètres du charmant village de Ribes de Freser, profitez d'un emplacement exceptionnel entouré de majestueuses montagnes et de forêts luxuriantes.";
      servicioParking.textContent = 'Parking'; 
      servicios4.textContent = "Nous disposons d'un parking pratique, vous garantissant une place proche et sécurisée pour garer votre véhicule.";
      servicioOnlyAldults.textContent = 'Solo adultos'; 
      servicios5.textContent = 'Nuestros apartementos son exclusivamente para dos adultos que buscan una experiencia serena y relajante. Apreciamos tu comprension y te deseamos que disfrutes al maximo tu estancia.';
      serviciosAguaOzonizada.textContent = 'Agua Ozonizada';
      servicios6.textContent = 'En nuestro compromiso con la excelencia, utilizamos tecnología de vanguardia para la limpieza. Con el agua ozonizada, libre de productos tóxicos, garantizamos un ambiente limpio y saludable.'; 
      apartamentos1.textContent = 'APPARTEMENTS';
      titulo1_1.textContent = 'La Cabane de la Forêt';
      descripcion1_1.textContent = 'Appartement entier';
      descripcion1_2.textContent = 'Terrasse';
      descripcion1_3.textContent = "La Cabane de la Forêt offre une vue sur la montagne et un hébergement avec une terrasse et un balcon à environ 50 km de la cathédrale de Vic. La propriété se trouve à 7,4 km de la station de ski de Vall de Núria et propose une piscine extérieure saisonnière ainsi qu'un parking privé gratuit. Cet appartement comprend 1 chambre, une cuisine avec réfrigérateur et micro-ondes, une télévision à écran plat, un coin salon et une salle de bains avec douche. Des serviettes et du linge de lit sont fournis.";
      descripcion1_4.textContent = 'Par Nuit';
      titulo1_2.textContent = 'Les Appartements de la Forêt';
      descripcion2_1.textContent = 'Appartement entier';
      descripcion2_2.textContent = 'Terrasse';
      descripcion2_3.textContent = "Les appartements de la forêt se situent à Ribes de Freser et proposent une piscine extérieure saisonnière, un jardin, une connexion WiFi gratuite ainsi que des vues sur la piscine. Ils offrent l'accès à un balcon et un parking privé gratuit. L'appartement compte 1 chambre, 1 salle de bains, du linge de lit, des serviettes, une télévision par satellite à écran plat, un coin repas, une cuisine entièrement équipée et une terrasse avec vue sur la montagne. Il y a un point de vente de forfaits de ski sur place. Le ski est possible dans les environs.";
      descripcion2_4.textContent = 'Par Nuit';
      titulo1_3.textContent = 'La Glorieta';
      descripcion3_1.textContent = 'Appartement privé dans un bâtiment';
      descripcion3_2.textContent = 'Tour avec vue sur la montagne';
      descripcion3_3.textContent = "La Glorieta est un loft avec une tour et de belles vues situé à Ribes de Freser, offrant une piscine extérieure ainsi que des vues sur la montagne. Il se trouve à 7,4 km de la station de ski de Vall de Núria et propose un jardin ainsi qu'un parking privé gratuit. L'appartement se compose de 1 chambre, d'un salon, d'une cuisine entièrement équipée avec réfrigérateur et cafetière, ainsi que d'une salle de bains avec douche et articles de toilette gratuits. Des serviettes et du linge de lit sont fournis.";
      descripcion3_4.textContent = 'Par Nuit';
      titulo1_4.textContent = 'Le Petit Studio';
      descripcion4_1.textContent = 'Appartement privé dans un bâtiment';
      descripcion4_2.textContent = 'TV avec service de streaming';
      descripcion4_3.textContent = "Ce petit appartement est situé sur une belle propriété entourée de forêt, avec une piscine et divers coins où vous aimerez vous promener et vous perdre. Le Petit Studio, comme son nom l'indique, est un petit appartement situé dans la partie supérieure de la maison de style moderniste qui occupe la propriété. L'appartement comprend 1 chambre ainsi qu'une cuisine avec réfrigérateur, micro-ondes et cafetière. Des serviettes et du linge de lit sont fournis. Son espace est divisé d'un côté avec une chambre et une salle de bains, et de l'autre côté avec un salon, une cuisine et une salle à manger. L'appartement se compose de 1 chambre, d'un salon, d'une cuisine entièrement équipée avec réfrigérateur et cafetière, ainsi que d'une salle de bains avec douche et articles de toilette gratuits. Des serviettes et du linge de lit sont fournis.";
      descripcion4_4.textContent = 'Par Nuit';
      pie1.textContent = "Les tarifs sont sujets à changement en fonction de la demande et de la disponibilité."
      pie2.textContent = "Les tarifs sont sujets à changement en fonction de la demande et de la disponibilité."
      pie3.textContent = "Les tarifs sont sujets à changement en fonction de la demande et de la disponibilité."
      pie4.textContent = "LLes tarifs sont sujets à changement en fonction de la demande et de la disponibilité."
      break;
    case 'en':
      extrasTitulo.textContent = 'MORE';
      tituloFooter.textContent = 'About us';
      descripcionFooter.textContent = 'The forest apartments are two attached stone cottages, located on a family estate 400 meters by car from the town of Ribes de Freser. There are also two paths that lead to the town on foot in 8 minutes. You will be surrounded by mountains and forest, so the views are spectacular.';
      preguntaFooter.textContent = 'Do you have a question?';
      bannerPromocional.textContent = 'Live a unique experience in the middle of nature. Apartments just minutes away from Ribes de Freser.';
      inicio.textContent = 'Home';
      servicios.textContent = 'Services';
      habitaciones.textContent = 'Rooms';
      extras.textContent = 'More';
      encuéntranos.textContent = 'Find Us';
      serviciosTitulo.textContent = 'SERVICES';
      servicios1.textContent = "Your pet is welcome! We offer spacious outdoor areas for them to run and play. In the room, you'll find a bowl for water. We apply a supplement of €8 per night per pet. This additional charge supports our extra cleaning and care efforts, ensuring a cozy environment for everyone.";
      servicioPiscina.textContent = 'Seasonal Pool and Relaxation Area'; 
      servicios2.textContent = "Enjoy our spacious outdoor pool designed for maximum relaxation. Immerse yourself in this oasis of comfort after thrilling excursions. With comfortable loungers and towels, it's the perfect place to recharge after your daily adventures.";
      servicioActividadesExtras.textContent = 'Activities and Attractions';
      servicios3.textContent = 'Discover the beauty of Ribes de Freser, just 400 meters from our accommodation. At 912 meters above sea level, our refuge provides an exceptional setting amidst mountains, forests, and Pyrenean rivers. Ideal for relaxation or enjoying outdoor activities such as skiing, cycling, and hiking.';
      servicioParking.textContent = 'Parking'; 
      servicios4.textContent = 'Our establishment offers convenient parking, ensuring a close and secure spot for your vehicle. Each apartment has its designated space in our parking lot, providing exclusive comfort and security for our guests.';
      servicioOnlyAldults.textContent = 'Adults Only'; 
      servicios5.textContent = 'Our apartments are exclusively for two adults seeking a serene and relaxing experience. We appreciate your understanding and wish you to enjoy your stay to the fullest.';
      serviciosAguaOzonizada.textContent = 'Ozonated Water Cleaning';
      servicios6.textContent = 'In our commitment to excellence, we use cutting-edge technology for cleaning. With ozonated water, free from toxic products, we guarantee a clean and healthy environment.'; 
      apartamentos1.textContent = 'APARTMENTS';
      titulo1_1.textContent = 'La cabana del bosc';
      descripcion1_1.textContent = 'Entire Cabin';
      descripcion1_2.textContent = 'Porch with views';
      descripcion1_3.textContent = "Discover our Forest Cabin, a cozy two-level apartment with a tiny house design. Upstairs, you'll find the bedroom, while downstairs, you'll enjoy the living room, dining area, kitchen, and bathroom. Equipped with all cooking utensils, microwave, ceramic hob, and a small fridge. Enjoy a spacious Italian-style shower, a comfortable sofa, and a 52-inch TV. The spacious porch invites you to enjoy your meals with views of the mountains and the forest.";
      descripcion1_4.textContent = 'Per Night';
      titulo1_2.textContent = 'Els apartaments del bosc';
      descripcion2_1.textContent = 'Entire Accommodation';
      descripcion2_2.textContent = 'Terrace with Views';
      descripcion2_3.textContent = 'Experience our Apartments, a cozy loft-style environment. It features a harmonious space integrating the bedroom, living room, dining area, and kitchen, creating a cozzy atmosphere. The only enclosed corner is the bathroom, highlighted by its spacious Italian-style shower. Equipped with all necessary cooking utensils, microwave, ceramic hob, and a small fridge. Feel the connection with nature on the spacious private terrace, where you can meditate and breathe fresh air with views of the mountains and the forest.';
      descripcion2_4.textContent = 'Per Night';
      titulo1_3.textContent = 'La Glorieta';
      descripcion3_1.textContent = 'Private apartment in building';
      descripcion3_2.textContent = 'Tower with mountain views';
      descripcion3_3.textContent = 'La Glorieta is a loft with a tower and good views located in Ribes de Freser, offering an outdoor pool and mountain views. It is 7.4 km from Vall de Núria Ski Resort and offers a garden and free private parking. The apartment consists of 1 bedroom, a living room, a fully equipped kitchen with a fridge and coffee maker, and a bathroom with a shower and free toiletries. Towels and bed linen are provided.';
      descripcion3_4.textContent = 'Per Night';
      titulo1_4.textContent = 'El Petit Estudi';
      descripcion4_1.textContent = 'Private apartment in building';
      descripcion4_2.textContent = 'Tower with Views';
      descripcion4_3.textContent = "This private apartment is located on the top floor of a 3-story modernist building. The accommodation is distributed in three distinct spaces: the cozy bedroom with its private bathroom, a second space encompassing the living room, dining area, and kitchen, and the cherry on top, the tower.In the tower, you'll find two loungers to relax and enjoy the stunning views, along with a small table to savor your meals in this unique space. The kitchen is fully equipped with all necessary cooking utensils, including microwave, ceramic hob, and a practical fridge.";
      descripcion4_4.textContent = 'Per Night';
      pie1.textContent = "Rates are subject to change based on demand and availability."
      pie2.textContent = "Rates are subject to change based on demand and availability."
      pie3.textContent = "Rates are subject to change based on demand and availability."
      pie4.textContent = "Rates are subject to change based on demand and availability." 
     break;
    default:
      break;
  }
}
