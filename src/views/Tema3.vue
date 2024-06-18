<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Manejo cultural
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img1.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8
        p Cuando se habla de manejo cultural, se hace referencia a una serie de actividades que se llevan a cabo durante la producción (desde la siembra hasta la cosecha) de los cultivos, con el fin de proporcionar las condiciones y requerimientos necesarios para un adecuado crecimiento de las plantas, ya que están enfocadas en el cuidado y mantenimiento; estas labores influyen en los rendimientos y la calidad de los cultivos porque su adecuada y oportuna realización aumentan y mejoran la producción.
    p.mb-5 De forma general, dentro de las principales labores de manejo cultural están:
    SlyderF.mb-5(columnas="col-9 col-md-6 col-xl-4")(data-aos="fade-down")
      .tarjeta.color-piel.mx-0
        .row.h-100
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema3/img1.svg' alt='Imagen Decorativa' style="width: 210px").m-auto
          .col-12
            p.bg-c7.p-4.mb-0.text-center #[b Dar soporte y formación de las plantas como son tutorado, poda, raleo, aporque.]
      .tarjeta.color-piel
        .row.h-100
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema3/img2.svg' alt='Imagen Decorativa' style="width: 220px").m-auto
          .col-12
            p.bg-c7.p-4.mb-0.text-center #[b Evitar la competencia por nutrientes, agua, luz, espacio, como son el manejo de arvenses.]
      .tarjeta.color-piel
        .row.h-100
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema3/img3.svg' alt='Imagen Decorativa' style="width: 210px").m-auto
          .col-12
            p.bg-c7.p-4.mb-0.text-center #[b Satisfacer necesidades hídricas como las actividades de riego y drenaje.]
      .tarjeta.color-piel
        .row.h-100
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema3/img4.svg' alt='Imagen Decorativa' style="width: 210px").m-auto
          .col-12
            p.bg-c7.p-4.mb-0.text-center #[b Las de aplicación y regulación de nutrientes.]
      .tarjeta.color-piel
        .row.h-100
          .col-12.p-4
            figure
              img(src='@/assets/curso/tema3/img29.svg' alt='Imagen Decorativa' style="width: 210px").m-auto
          .col-12
            p.bg-c7.p-4.mb-0.text-center #[b Las labores de control para evitar enfermedades, disminución o pérdida de los cultivos, como son embolsado de frutos, manejo ecológico de plagas y enfermedades.]
    p Estas actividades de manejo cultural de los cultivos van de la mano con las buenas prácticas agrícolas (BPA), que son una serie de normas y recomendaciones técnicas para toda la cadena de producción, es decir, desde la planeación del cultivo, la cosecha y poscosecha, con la finalidad de garantizar la inocuidad de los productos y a su vez cuidar la salud humana, proteger el medio ambiente y brindar bienestar y seguridad de los trabajadores.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 Técnicas y métodos
    p.mb-5 Existen diversos tipos de actividades, técnicas y métodos que se desarrollan en el manejo cultural de los cultivos, los cuales son de carácter preventivo, de manejo y control para el desarrollo fisiológico, el manejo de poblaciones asociadas. A continuación se establecen las actividades básicas que se realizan a los cultivos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
      .row(titulo="Trasplante").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img5.svg' alt='Imagen Decorativa' style="width: 150px").m-auto
        .col-lg
          p.mb-0 Consiste en llevar una planta que se encuentra creciendo es un lugar temporal al lugar donde completará su ciclo de vida.
      .row(titulo="Raleo").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img6.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Consiste en dar espacio a las plantas, quitando de su alrededor aquellas plantas que están más débiles o demasiado cerca.
      .row(titulo="Aporque").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img7.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Consiste en arrimar o amontonar tierra alrededor del tallo o base de la planta para fortalecer el tallo y permitir un crecimiento ideal.
      .row(titulo="Repique").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img8.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Consiste en cambiar las plantas que no se han desarrollado bien después del trasplante, por nuevas.
      .row(titulo="Riego").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img9.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Práctica de aplicar agua a un suelo, para garantizar las condiciones de humedad necesarias para el buen desarrollo de las plantas.
      .row(titulo="Tutorado").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img10.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Consiste en mantener a la planta en posición vertical y así evitar daño a los frutos durante la fase productiva de la planta.
      .row(titulo="Control de arvenses deshierbe").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img11.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Consiste en retirar plantas no deseadas, conocidas como mala hierbas.
      .row(titulo="Poda").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img12.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Operación de suprimirle ramas a la planta, con la finalidad de mejorar su arquitectura, favorecer el desarrollo vegetativo e incrementar la capacidad productiva de las plantas.
      .row(titulo="Manejo de plagas y enfermedades").align-items-center
        .col-lg-auto.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/img13.svg' alt='Imagen Decorativa' style="width: 200px").m-auto
        .col-lg
          p.mb-0 Selección, integración e implementación de medidas de control que eviten o minimicen el daño causado por plagas y enfermedades.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Trasplante
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        p El trasplante consiste en trasladar las plantas que se encuentran en los semilleros al lugar o terreno definitivo donde la planta va a llevar a cabo su ciclo de vida. Esta técnica en comparación con la siembra directa genera beneficios ya que permite que la siembra sea planificada, que el crecimiento de las plantas sea uniforme, eficiencia en las semillas, floración temprana, lo que conlleva a la obtención de la producción más rápido. Pero también, el trasplante causa estrés y normalmente algunas plantas se marchitan y mueren, debido a que se afecta la estructura de la raíz, siendo necesario su regeneración y así lograr la adecuada absorción de nutrientes y agua para continuar con el proceso de crecimiento vegetativo.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Es importante tener en cuenta para minimizar el estrés de las plantas durante el proceso de trasplante asegurarse que el sistema radicular esté bien desarrollado, adecuar el terreno al cual van a ser trasladadas, verificar las condiciones ambientales (iluminación, humedad, temperatura, ventilación) a las que se van a exponer las plantas al ser trasplantadas, resembrar a una profundidad adecuada.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Raleo
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Esta actividad también conocida como aclareos o entresaca consiste en la eliminación de plantas con el objetivo de beneficiar y asegurar el adecuado desarrollo y crecimiento de las más sanas; a medida que los árboles crecen los requerimientos son mayores y aumenta la competencia por espacio, nutrientes, agua y luz, siendo necesario retirar los más débiles, los que estén enfermos, torcidos o de baja calidad y así concentrar el crecimiento y favorecer el desarrollo de las mejores plantas.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Con el raleo se logra seleccionar las plantas de mejor calidad, se brinda mayor espacio y menos competencia que estimula su crecimiento e incrementa el vigor haciéndolas más resistentes a plagas y enfermedades.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img3.png' alt='Imagen Decorativa' style="width: 350px").m-auto
    p.mb-5 Este es un proceso selectivo y la cantidad y frecuencia para realizar esta práctica cultural depende del crecimiento que tenga la plantación. También el raleo se puede realizar no solo eliminando de forma total la planta, sino que existe el raleo para frutos, con el objetivo de obtener frutos de mejor tamaño, más uniformes, con mayor concentración de azúcares y evitar que las ramas se parten por el peso. En este caso la intensidad y frecuencia del raleo de frutos depende de la variedad y las exigencias del mercado.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Aporque
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img4.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        p El aporque es la actividad que consiste en #[span.txt-c1 amontonar o arrimar] tierra alrededor del tallo o base de la planta con el objetivo de #[span.txt-c1 brindar estabilidad, anclaje, resistencia al viento, fortalecer el tallo, favorecer el desarrollo de las raíces, aumentar el espacio para el desarrollo tanto aéreo como subterráneo, conservar la humedad, minimizar el ataque de plagas y enfermedades, ayudar al control de arvenses, mejora la estructura y aireación del suelo, facilita el aprovechamiento de fertilizantes]. Pero también, esta actividad si no es realizada adecuadamente puede causar daño y asfixia a la raíz, propiciando la penetración de agentes bióticos.
    p.text-center.mb-5 Existen diversos tipos de aporque, entre los que se encuentran:
    .row.bg-c10(data-aos="fade-down")
      .col-12.px-5
        .row.justify-content-center.mb-5
          .col-lg-8
            figure
              img(src='@/assets/curso/tema3/img14.svg' alt='Muestra dos tipos de apoque, el mecanizadoque se utilizan los equipos enganchados a un tractor. Manual, es el proceso que se realiza empleando herramientas menores, es decir implementos de mano como rastrillo o escardillas.' style="width: 850px").m-auto
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Riego
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p Esta es una de las actividades de mayor importancia porque asegura la humedad que requieren las plantas para lograr un adecuado crecimiento y desarrollo. El agua debe ser aplicada directamente al suelo y no a la planta, es decir, se debe garantizar y reponer el agua consumida por esta, mediante un riego oportuno y uniforme en la zona de la raíz, evitando excesos y déficit que puedan llegar a causar problemáticas como bajos rendimientos, lavado de nutrientes, erosión del suelo, pérdida de agua y drenaje inadecuado. El agua requerida para realizar el riego puede ser obtenida de fuentes naturales como el agua lluvia, quebradas, ríos, lagunas, etc. y existen sistemas de riegos que según Aidarov, Golovanov y Mamaév (1985), referenciado por Cisneros A. R. (2003) son el conjunto de instalaciones técnicas que aseguran la organización y ejecución de la optimización de las tierras, y a su vez existen diversos métodos o formas de riego, en la siguiente infografía se pueden identificar estos métodos:
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img5.png' alt='Imagen Decorativa' style="width: 350px").m-auto
    h4.text-center.mb-5 Métodos de riego
    .tarjeta.tarjeta--verde.p-4.mb-5(data-aos="fade-up")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Riego superficial o por gravedad
            p Siendo los más representativos de este grupo el riego por surcos, por inundación, tendido, por bordes o melgas.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img6.png' alt='Imagen Decorativa' style="width: 550px").m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Riego subterráneo
            p Es una alternativa para incrementar la productividad del agua en la agricultura, en virtud de que minimiza la evaporación superficial e incrementa la eficiencia de aportación hídrica en zona de raíz.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img7.png' alt='Imagen Decorativa' style="width: 550px").m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Riego a presión
            p Por aspersión; por microaspersión; por goteo y por exudación.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img8.png' alt='Imagen Decorativa' style="width: 550px").m-auto
    p.mb-5 Se deben tener presente varios criterios para seleccionar el método de riego:
    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-10.col-md-6.col-lg.bg-c8.p-3.m-2
        .row.align-items-center.h-100
          .col-4
            figure
              img(src='@/assets/curso/tema3/img15.svg' alt='Imagen Decorativa' style="width: 80px").m-auto
          .col
            p.mb-0 #[b El suelo]
      .col-10.col-md-6.col-lg.bg-c8.p-3.m-2
        .row.align-items-center.h-100
          .col-4
            figure
              img(src='@/assets/curso/tema3/img16.svg' alt='Imagen Decorativa' style="width: 80px").m-auto
          .col
            p.mb-0 #[b El clima]
      .col-10.col-md-6.col-lg.bg-c8.p-3.m-2
        .row.align-items-center.h-100
          .col-4
            figure
              img(src='@/assets/curso/tema3/img17.svg' alt='Imagen Decorativa' style="width: 80px").m-auto
          .col
            p.mb-0 #[b La disponibilidad de agua]
      .col-10.col-md-6.col-lg.bg-c8.p-3.m-2
        .row.align-items-center.h-100
          .col-4
            figure
              img(src='@/assets/curso/tema3/img18.svg' alt='Imagen Decorativa' style="width: 80px").m-auto
          .col
            p.mb-0 #[b Mano de obra]
      .col-10.col-md-6.col-lg.bg-c8.p-3.m-2
        .row.align-items-center
          .col-4
            figure
              img(src='@/assets/curso/tema3/img19.svg' alt='Imagen Decorativa' style="width: 80px").m-auto
          .col
            p.mb-0 #[b Los costos de construcción y operación.]
    p.mb-5 Por tanto, para lograr que el agua sea empleada de manera eficiente y racional en el riego, es necesario evaluar el por qué (beneficio se obtiene), cuánto (durante que tiempo, frecuencia, número de veces), cuándo (con qué frecuencia) y cómo regar (de qué forma). En relación con la frecuencia con que se debe realizar esta práctica cultural para lograr conseguir un adecuado rendimiento del cultivo no sólo en términos de cantidad, sino que también de calidad, existen diversos factores que influyen como son el tipo de cultivo, el estado vegetativo, las condiciones climáticas, la disponibilidad de agua y capacidad de retención y almacenamiento de agua en el suelo.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Control de arvenses
    .row.align-items-center.mb-4
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img9.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        p Esta actividad cultural consiste en minimizar y eliminar las plantas no deseadas conocidas comúnmente como maleza, que se encuentran presentes en los cultivos y evitar que interfieran en el crecimiento de estos y generen consecuencias negativas. Por tanto, esta labor puede estar enfocada a la #[span.txt-c1 prevención, reducción y erradicación de malezas], para lo cual existen diversos métodos que se pueden combinar para lograr que sean más eficientes, económicos y menos nocivos con el medio ambiente.
        p La selección del método más apropiado para el control de arvenses depende del:
        ul.lista-ul
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Conocimiento que se tenga del arvense, es decir de su biología, morfología, modo de desarrollo, forma de reproducción, comportamiento, medios de difusión, etc.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Cantidad y especies de arvenses que haya en el cultivo, el estado de cultivo y la capacidad económica del agricultor.
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Dentro de los métodos para el control de arvenses están los mecánicos donde se utilizan #[span.txt-c1 herramientas manuales] como el azadón para realizar el deshierbe o eliminación de la maleza, con la ventaja que no se introducen químicos al suelo; #[span.txt-c1 los biológicos] que consiste en la introducción de enemigos naturales que se encargan de atacar y destruir la maleza y también #[span.txt-c1 el método químico] que consiste en la aplicación de productos químicos conocidos normalmente como herbicidas.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Poda
    .row.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p La poda es la práctica o labor que modifica el comportamiento, crecimiento y desarrollo de la planta, debido a que regula su capacidad reproductiva y vegetativa; esta consiste en cortar o suprimir partes como las ramas con el objetivo de beneficiar el desarrollo vegetativo, aumentar la capacidad de producción y mejorar la arquitectura. Esta práctica cultural ayuda a la circulación del aire, regula el paso de luz para el proceso de fotosíntesis, estimula el desarrollo de ramas, facilita el desarrollo de las demás labores culturales, las ramas se distribuyen de forma adecuada, mejoran las cosechas, se obtiene frutos de mejor calidad, se genera mayor resistencia a plagas y enfermedades y se logra la restauración del cultivo sin necesidad de volver a sembrar.
      .col-lg-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img10.png' alt='Imagen Decorativa' style="width: 350px").m-auto
    .row.bg-c3.mb-5(data-aos="fade-down")
      .col-12.p-5
        p.text-center.mb-5 Existen diferentes tipos de podas y distintos criterios para clasificar, según sea su objetivo están:
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 8]. Tipos de poda
        figure
          img(src='@/assets/curso/tema3/img20.svg' alt='Muestra un mapa conceptual con los tipos de poda: Formación, que contienen el mantenimiento, la producción y el rejuveneciendo o regeneración. En función a los órganos eliminados, que contiene, hojas, flores, frutos, yemas, brotes terminales y tallo. Tipos de corte, que contiene despunte o rebaje y clareo o aleo. Época del año, contiene seco o invierno y verde o verano. Por último, la forma de efectuar, que contienen manual, mecánica y química.' style="width: 1150px").m-auto
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p De forma específica en la poda de formación se cortan la yema terminal o apical para estimular el crecimiento de ramas nuevas; la poda de mantenimiento busca aportar a la arquitectura, crecimiento y desarrollo mediante la eliminación de ramas enfermas o afectadas por hongos, bacterias o insectos, secas, improductivas, débiles, mal orientados o de crecimiento inadecuado ya sea hacia adentro, abajo, cruzadas o  entrelazadas; la poda de producción está orientada a estimular el desarrollo de la raíz y hojas, la formación de más frutos, evitar el engrosamiento del tallo; y, la poda de recuperación implica dejar sola la estructura principal para inducir la brotación de nuevos y gran cantidad de retoños que se encargue de formar nuevamente el árbol.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img11.png' alt='Imagen Decorativa' style="width: 450px").m-auto
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Manejo de plagas y enfermedades
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img12.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        p El manejo de plagas y enfermedades consiste en la elección, integración e implementación de medidas de control, es decir estrategias enfocadas a proteger el cultivo de acuerdo con consideraciones sociales, económicas y ecológicas.  Las plagas es el conjunto de individuos de una especie pueden ser insectos, hongos, nematodos, virus, bacterias, ácaros, moluscos, aunque también existen otros tipos de animales que afectan los cultivos como las aves (pájaros y patos), roedores, murciélagos, reptiles (iguanas, lobones), pueden causar daños directos a los procesos de germinación, desarrollo, crecimiento, floración, fructificación, fotosíntesis, y afectaciones como perforaciones, defoliaciones, deformaciones, cortes e inoculación de toxinas ya sea en la raíz, tallo, hojas, flores, semillas o frutos y por ende generar aumento en los costos de producción, reducir la cantidad y calidad de la cosecha, transmitir enfermedades y causar hasta la muerte.
    .row.bg-c9.mb-5(data-aos="fade-down")
      .col-12.p-5
        .row.align-items-center.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            p Por su parte, las enfermedades son alteraciones del estado o funcionamiento de la planta, para que esto ocurra se necesita la presencia de un hospedante susceptible, un patógeno u organismo que cause la enfermedad y unas condiciones ambientales que favorezcan el desarrollo de la enfermedad (temperatura, humedad, precipitaciones). Las cuales pueden llegar a generar destrucción parcial o completa de la cosecha, inestabilidad y bajo rendimiento, deterioro en la calidad y durabilidad de los productos, aumento de los costos.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/img22.svg' alt='Imagen Decorativa' style="width: 550px").m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 Las enfermedades según el patógeno que las origine se pueden clasificar en virosis (virus), fungosas (hongos), bacterianas (bacterias) y algunos de los síntomas que causan son malformaciones, manchas, agallas, marchitamiento, necrosis y pudriciones. Además, los principales medios de dispersión son a través de semillas contaminadas, viento, agua, insectos, herramientas y utensilios.
    p.text-center.mb-5 Los métodos aplicados para combatir las plagas y enfermedades son:
    .row.mb-5
      .col-lg-9.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img24.svg' alt='AvatarTop').fig-p2
          .tarjeta.tarjeta--verde
            .p-4
              h5.mb-0 El control mecánico
              p.mb-0 Mediante el uso de herramientas.
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img25.svg' alt='AvatarTop').fig-p2
          .tarjeta.tarjeta--verde2
            .p-4
              h5.mb-0 Control físico
              p.mb-0 Consiste en el manejo de humedad, temperatura, quemas con fuego, instalación de mallas metálicas, etc.
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img26.svg' alt='AvatarTop').fig-p2
          .tarjeta.tarjeta--verde3
            .p-4
              h5.mb-0 Control biológico y autocida
              p.mb-0 Se emplean enemigos naturales como abejas, mariquitas, avispas que se alimenten y suprimen insectos perjudiciales para el cultivo y así logran ejercer control de las poblaciones y diseminar las plagas.
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img27.svg' alt='AvatarTop').fig-p2
          .tarjeta.tarjeta--verde4
            .p-4
              h5.mb-0 Control etológico
              p.mb-0 Mediante el uso de trampas de color, luz, agua, cebo o también de sustancias químicas como feromonas.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img28.svg' alt='AvatarTop').fig-p2
          .tarjeta.tarjeta--verde5
            .p-4
              h5.mb-0 Control químico
              p.mb-0 Productos específicos como herbicidas (maleza o arvenses), insecticidas (insectos), bactericidas o antibióticos (bacterias), fungicidas (hongos), acaricidas (ácaros), nematicidas (nematodos).
      .col-lg-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img23.svg' style="width: 350px").m-auto
    p.mb-5 El uso de estos agroquímicos puede ser reemplazado por productos orgánicos que cada día son más empleados ya que son menos nocivos para la salud y el medio ambiente.
    .titulo-sexto.color-acento-contenido.mb-4
      p.mb-0 #[b Figura 9]. Plagas que atacan raíces, tallos, hojas, flores y frutos de las plantas
    figure(data-aos="fade-up")
      img(src='@/assets/curso/tema3/img13.png' alt='Muestra una planta y diferentes plagas que atacan raíces, tallos, flores y frutos de las plantas.')
      figcaption Nota. MINEP. (2005). Manejo agronómico de los cultivos.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 Equipos y herramientas
    p.mb-5 Para el desarrollo de las labores culturales se requieren de diversas herramientas, equipos y utensilios de distintas formas y tamaños que facilitan la realización de las actividades, por ejemplo, las más comunes y utilizadas se pueden detallar en el siguiente recurso:
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Aporque, control de arvenses, raleo
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img14.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul
          li 
            p
              i.fas.fa-leaf(style="color: #FFA686")
              b El machete 
              | con diferentes formas de hoja.
          li 
            p
              i.fas.fa-leaf(style="color: #FFA686")
              b El azadón 
              | que se usan comúnmente para abrir nuevas tierras, el borde de corte se usa para cortar raíces y los picos para trabajos de excavación y construcción.
          li 
            p
              i.fas.fa-leaf(style="color: #FFA686")
              b Palas 
              | que son implementos de excavación que se utilizan para mover materiales sueltos o no consolidados en distancias cortas, existiendo una amplia gama de diseños disponibles como rectangular y redonda.
          li 
            p
              i.fas.fa-leaf(style="color: #FFA686")
              b Hoz y rastrillos.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Aporque, control de arvenses, raleo
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img15.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8(data-aos="fade-left")
        ul.lista-ul
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Tijeras, las cuales son usadas directamente por el operario y existen diversos modelos como automáticas, de una o dos manos, de hoja curvo o yunque.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Serruchos.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Motosierra.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Pértigas.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Hachas.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Serpeta o cuchilla curva.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Ataduras.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Cañas.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Productos de protección de heridas.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Escaleras.
          li 
            i.fas.fa-leaf(style="color: #FFA686")
            | Equipos de plataforma o cesto.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Aplicación fitosanitaria de fertilizantes o control químico arvenses
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img16.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8
        p Se emplean #[span.txt-c1 equipos manuales] de diferentes capacidades, estos principalmente son portátiles y son portados en la espalda del operario. 
        p Se utilizan principalmente #[span.txt-c1 bombas que impulsan] el agua, éstas varían según su potencial y combustible que emplean.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' alt='Imagen Decorativa' style="width: 30px")
      .col-auto.p-0
        h3.mb-0 Herramientas manuales
    p.mb-5 Como existe una gran variedad de herramientas manuales de acuerdo con la actividad que se vaya a desarrollar, estas poseen características de diseño y seguridad para garantizar la adecuada manipulación. De forma general se pueden clasificar en herramientas de:
    .row.justify-content-center(data-aos="fade-right")
      .col-10.col-md-6.col-lg.mb-4.mb-lg-0
        .row.m-1
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema3/img17.png' alt='Imagen Decorativa' )
          .col-12.p-3.bg-c11
            p.text-center.mb-0 #[b Martillos, mazo, cinceles]
      .col-10.col-md-6.col-lg.mb-4.mb-lg-0
        .row.m-1
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema3/img18.png' alt='Imagen Decorativa' )
          .col-12.p-3.bg-c11
            p.text-center.mb-0 #[b Tijeras, alicates, tenazas]
      .col-10.col-md-6.col-lg.mb-4.mb-lg-0
        .row.m-1
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema3/img19.png' alt='Imagen Decorativa' )
          .col-12.p-3.bg-c11
            p.text-center.mb-0 #[b Machetes, hachas, palas]
      .col-10.col-md-6.col-lg
        .row.m-1
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema3/img20.png' alt='Imagen Decorativa' )
          .col-12.p-3.bg-c11
            p.text-center.mb-0 #[b Destornilladores, llaves]

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
