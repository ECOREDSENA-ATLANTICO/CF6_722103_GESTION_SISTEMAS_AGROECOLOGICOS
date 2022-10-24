<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fisiología vegetal
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png' style="width: 350px").m-auto
      .col-lg-8
        p La fisiología vegetal es la ciencia que se encarga de comprender el desarrollo y comportamiento de las plantas mediante el estudio del funcionamiento, procesos y funciones vitales que se llevan a cabo a lo largo de su ciclo de vida, específicamente responde el interrogante: #[span.txt-c1 ¿Qué es lo que mantiene vivas las plantas?]
        .cajon.color-primario.p-4.mb-4
          p.mb-0 La fisiología  vegetal desarrollo que está enfocado al crecimiento, desarrollo, reproducción y fisiología del metabolismo que abarca las transformaciones químicas y físicas que se dan en los órganos y células de las plantas.
        p Las plantas al igual que todos los seres vivos, cumplen un ciclo de vida en el cual realizan consecutivamente una serie de procesos y estados, los cuales desde el punto de vista fisiológico se puede identificar y son comúnmente conocidos como fase juvenil, maduro o adulto y senescente.
    .row.justify-content-center.mb-5
      .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-0 Esta etapa se caracteriza por la presencia de procesos de crecimiento y desarrollo vegetativo. Inicia con la germinación y finaliza en el momento en que la planta es apta para iniciar los procesos de tipo reproductivo (aunque éstos no se dan). La duración del período juvenil es muy variable: desde unos pocos días o semanas, en las plantas herbáceas, hasta varios años en las plantas leñosas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img1.svg')})`}")
      .col-10.col-md-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-0 Es el período en el que la planta es capaz de florecer si se dan las condiciones para ello. Es decir que haya florecido al recibir el estímulo adecuado. También, en esta fase se origina un cambio drástico relacionado con la transición de meristemo vegetativo a reproductivo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img2.svg')})`}")
      .col-10.col-md-6.col-xl-3
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-5.mb-lg-0 No es el resultado de un proceso de deterioro y decadencia, sino un proceso de desarrollo encaminado a conseguir el desmantelamiento y reciclaje ordenado de una parte de las estructuras y las moléculas que ya no resultan útiles para la planta en un momento dado. Y en ocasiones al final de este proceso se produce la muerte de la planta.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/tema1/img3.svg')})`}")
    p.text-center.mb-5 Durante estas fases, las plantas atraviesan un proceso de crecimiento y desarrollo vegetativo el cual:
    figure.mb-5
      img(src='@/assets/curso/tema1/img2.png' style="width: 850px").m-auto
    .row.align-items-center.mb-4
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img3.png' style="width: 450px").m-auto
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador.mb-0
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F") 1
            | La fecundación, es decir con la embriogénesis que radica en la germinación de semillas y la formación básica del sistema radicular.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F")  2
            | Mediante procesos metabólicos como la fotosíntesis, transpiración y respiración se da el proceso de construcción de las plantas mediante la aparición de órganos vegetativos como la raíz, tallo y hojas, los cuales rápidamente crecen y ganan altura y grosor.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F")  3
            | Con el paso del tiempo surgen nuevos órganos como las flores, la planta alcanza el desarrollo reproductivo y seguidamente las flores se van transformando en frutos.
          li 
            .lista-ol--cuadro__vineta
              span(style="color: #12263F")  4
            | Beneficios en la mejora de procesos, garantizando optimización de las operaciones de las empresas.
    p Sin embargo, es importante resaltar, que existen gran variedad de hábitos y formas de crecimiento, debido a la amplia gama de especies y condiciones ambientales, por ejemplo, al comparar las hojas del mismo árbol estas pueden tener una constitución, forma, tamaño, color y composición diferente, producto de que éstas se desarrollan en ambientes (grado de iluminación) diferentes. #[span.txt-c1 Por tanto, las plantas están en constante y permanente desarrollo y adaptación al entorno y hábitat.]
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 Arquitectura de la planta
    .row.bg-c3.mb-5
      .col-12.p-5
        p.mb-5 El cuerpo de las plantas como lo indica Chuncho y Aguirre, (2019) cuenta con dos sistemas de órganos denominados #[span.txt-c1 sistema subterráneo o radicular] el cual incluye las #[span.txt-c1 raíces, bulbos, rizomas, tubérculos] y en general todo lo que se encuentra por debajo del suelo y el sistema aéreo o vástago que corresponde a la parte de la planta que va por encima del suelo y comprende órganos como #[span.txt-c1 tallo, hojas, flores y frutos].
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-4
              p.mb-0 #[b Figura 1]. Partes de la planta
            figure
              img(src='@/assets/curso/tema1/img4.png' style="width: 650px").m-auto
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' style="width: 30px")
      .col-auto.p-0
        h4.mb-0 Raíz
    p.mb-5 La raíz es el órgano encargado de fijación, la absorción de agua y nutrientes del suelo y, el almacenamiento de alimento; esta posee varias formas, pero en general se caracteriza por la existencia de una raíz principal o primaria que va unida al tallo, cuenta con ramificaciones denominadas raíces secundarias, también cuenta con cofia o punta de la raíz y pelos absorbentes.
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 2]. Partes de la raíz
        figure
          img(src='@/assets/curso/tema1/img5.png' style="width: 650px").m-auto
    p.mb-5 A continuación se presentan los diversos criterios para clasificar las raíces:
    .row.justify-content-center.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 3]. Criterios de clasificación de las raíces
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img5.svg')
        figure.d-block.d-lg-none
          img(src='@/assets/curso/tema1/img5m.svg')
    p.mb-5 Las raíces tienen gran utilidad y muchas son cultivadas por los usos y aplicaciones que tienen, ya que pueden ser comestibles como la remolacha, zanahoria, yuca, entre otros, o se pueden emplear para extraer productos medicinales o con fines industriales.
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img6.svg')
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' style="width: 30px")
      .col-auto.p-0
        h4.mb-0 Tallo
    p.mb-5 El tallo es el órgano encargado de soportar las hojas, flores y frutos, también transportan sustancias desde las raíces a las hojas y a la inversa, y se encargan de la propagación vegetal. La principal clasificación de los tallos es según su consistencia en herbáceos, leñosos y semileñosos. Sus partes principales son:
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        p.mb-0.mb-lg-5 Los nudos es la parte donde las hojas se conectan con el tallo.
        p.mb-0.mb-lg-5 Los entrenudos que son los espacios existentes entre nudo y nudo.
        p.mb-lg-5 Las yemas que son protuberancias que al desarrollarse forman las ramificaciones, hojas y flores, estas yemas a su vez se pueden clasificar de acuerdo con la posición que ocupen en el tallo en:
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #FFA686")
            | Terminales
          li 
            i.fas.fa-check(style="color: #FFA686")
            | Axiales
          li 
            i.fas.fa-check(style="color: #FFA686")
            | Adventicias
      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 4]. Partes del tallo
        figure
          img(src='@/assets/curso/tema1/img6.png' style="width: 350px").m-auto
    p.mb-5 Los tallos tienen gran variedad de utilidades y se emplean en la alimentación tanto del hombre (cebolla, espárragos), como la de animales (henos y pastos) y, también son usados en diversas industrias y oficios como la alimentaria, textil, papel, medicina, ebanistería y carpintería.
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' style="width: 30px")
      .col-auto.p-0
        h4.mb-0 Hojas
    p.mb-5 El tallo es el órgano encargado de soportar las hojas, flores y frutos, también transportan sustancias desde las raíces a las hojas y a la inversa, y se encargan de la propagación vegetal. La principal clasificación de los tallos es según su consistencia en herbáceos, leñosos y semileñosos. Sus partes principales son:
    .row.justify-content-center.mb-5
      .col-lg-5
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 5]. Partes de la hoja
        figure
          img(src='@/assets/curso/tema1/img7.svg' style="width: 420px").m-auto
    p.mb-5 Las hojas tienen gran cantidad de características que generan variedad de clasificaciones como:
    .row.mb-5
      .col-12
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 6]. Clasificación de las hojas
        figure.d-none.d-lg-block
          img(src='@/assets/curso/tema1/img8.svg')
        figure.d-block.d-lg-none
          img(src='@/assets/curso/tema1/img8m.svg')
    p.mb-5 Al igual que los tallos, las hojas tienen gran variedad de utilidades y se emplean en la alimentación tanto del hombre (lechuga, espinaca), como la de animales (forrajes), en la industria (tabaco) y gracias a sus propiedades son empleadas en la medicina.
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/tema1/img9.svg')
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' style="width: 30px")
      .col-auto.p-0
        h4.mb-0 Flor
    p.mb-5 La flor es la estructura reproductiva de las plantas, su función se basa en la producción de semillas, está compuesta por cuatro partes fundamentales que son corola, cáliz, estambres y pistilo. En la siguiente infografía se pueden observar las partes de la flor y las diferentes clases:
    .row.justify-content-center.mb-5
      .col-lg-8.mb-5
        h4.text-center.txt-c1.mb-4 Partes de la flor
        figure
          img(src='@/assets/curso/tema1/img10.svg' style="width: 850px").m-auto
      .col-lg-8
        h4.text-center.txt-c1.mb-4 Clasificación
        figure
          img(src='@/assets/curso/tema1/img9.png' style="width: 850px").m-auto
    .row.align-items-center.mb-4
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img4.svg' style="width: 30px")
      .col-auto.p-0
        h4.mb-0 Fruto
    p.mb-5 El fruto es el ovario maduro y desarrollado, se encarga de contener las semillas; está conformado por el pericarpio que a su vez se divide en epicarpio (piel o capa externa), mesocarpio (carne o capa interna) y endocarpio (cáscara o capa interna leñosa). Existen diversos tipos de frutos y se clasifican de forma general en simples y compuestos, donde los simples se subdividen en indehiscentes o dehiscentes; según el pericarpio en secos y carnosos, y de acuerdo con el número de semillas en monospermos o polispermos.
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          p.mb-0 #[b Figura 7]. Partes del  fruto
        figure
          img(src='@/assets/curso/tema1/img10.png' style="width: 1420px").m-auto
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 Desarrollo vegetativo
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img13.svg' style="width: 160px").m-auto
      .col-lg
        p Las plantas a lo largo de sus vidas transcurren por un conjunto de eventos que tienen características y necesidades diferentes, entre las que se encuentran el desarrollo vegetativo, que es el proceso de construcción de las mismas, esta etapa de desarrollo aporta a la sucesiva creación del cuerpo de la planta, adaptación a su entorno y le enseña y prepara para conseguir su sustento y reproducirse. 
        p El desarrollo se da a través de una operación organizada que requiere un gran número de señales y abarca específicamente dos procesos esenciales de las plantas, que son #[span.txt-c1 el crecimiento, y la diferenciación]. Estos procesos consisten:
    .row.justify-content-center.mb-5
      .col-10.col-md-7.col-lg-4.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h5.text-center El crecimiento
              p Hace referencia al conjunto de cambios cuantitativos que se dan de forma gradual y progresiva en lo concerniente al tamaño.
      .col-10.col-md-7.col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/img15.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h5.text-center La diferenciación
              p Los cambios son de tipo cualitativo relacionados con la estructura y función; pero, en conclusión, estos permiten la transformación de un zigoto en una planta completa capaz de reproducirse.
    p.text-center.mb-5 #[span.txt-c2 Durante el crecimiento la planta incrementa de forma irreversible su tamaño y volumen, producto del alargamiento o expansión celular, pero para que la planta no solo crezca, sino que también alcance su desarrollo se requiere que las células se especialicen, lo que genera cambios denominados diferenciación.]
    .row.justify-content-center.mb-5
      .col-lg-8
        figure
          img(src='@/assets/curso/tema1/img16.svg' style="width: 1100px").m-auto
    .row.bg-c4
      .col-12.p-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            p Pero, el proceso de desarrollo a pesar de ser una operación organizada cuenta con gran variedad de formas y hábitos de crecimiento, producto de la gran  variedad de especies existentes y los cambios en las condiciones ambientales, lo que conlleva a que las plantas deben garantizar durante todo su crecimiento la obtención en cantidades apropiadas de materia y energía, por tanto, requieren de una evolución constante y adaptación de diferentes partes de la planta, como son las raíces, el tallo y las hojas que emplean de forma directa la energía luminosa.Pero, el proceso de desarrollo a pesar de ser una operación organizada cuenta con gran variedad de formas y hábitos de crecimiento, producto de la gran  variedad de especies existentes y los cambios en las condiciones ambientales, lo que conlleva a que las plantas deben garantizar durante todo su crecimiento la obtención en cantidades apropiadas de materia y energía, por tanto, requieren de una evolución constante y adaptación de diferentes partes de la planta, como son las raíces, el tallo y las hojas que emplean de forma directa la energía luminosa.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/img18.svg' style="width: 350px").m-auto
          .col-12
            figure.fig-p1
              img(src='@/assets/curso/tema1/img19.svg')
            p En conclusión, el desarrollo de las plantas se caracteriza por el crecimiento a lo largo de toda su existencia y la construcción de su forma y arquitectura, debido a que, al finalizar la formación del embrión en la semilla, tras la germinación nace una plántula con tallo y raíz, la cual mediante un grupo de células inicia el crecimiento de la parte aérea de la planta.
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido
      h2 1.3 Floración y fructificación
    .row.bg-c5.mb-5
      .col-12.p-5
        .row.align-items-center
          .col-lg-7.mb-4.mb-lg-0
            p.txt-c2 La #[b floración] es la etapa en la que se inicia la fase reproductiva, en esta finaliza el crecimiento del tallo y sobre él nace la flor, este proceso está influenciado y depende de factores endógenos como las hormonas, la presencia y concentración de ciertos minerales, pero también de factores externos como la temperatura, la luz y demás condiciones ambientales.
            figure
              img(src='@/assets/curso/tema1/img20.svg' style="width: 550px").m-auto
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/img7.png' style="width: 450px").m-auto
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img8.png' style="width: 450px").m-auto
      .col-lg-8
        p Las plantas no florecen en la fase juvenil debido a que los órganos responsables de la floración no logran responder a los estímulos, por tanto, se requiere un proceso de transición de la fase juvenil a la adulta, el cual se produce poco a poco, donde las características juveniles van desapareciendo de forma gradual. Es decir, cuando la planta alcanza la madurez logra florecer. 
        p Lo que sucede es un cambio en el modelo básico de desarrollo, es decir, una alteración en la estructura, debido a que cuando la planta alcanza cierto tamaño y en reacción a los estímulos internos propios de la planta y ambientales, el desarrollo de las hojas se frena dando lugar a la formación de una flor, mediante el cambio de meristemo axilar a meristemo floral, el cual posee un crecimiento determinado y se acaba con el desarrollo de la flor.
    p.mb-5 La fructificación es el proceso más importante que se lleva a cabo en una plantación frutal, ya que su finalidad es producir frutos, en el siguiente video se puede observar el proceso:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/j2Q9nmM-o0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
