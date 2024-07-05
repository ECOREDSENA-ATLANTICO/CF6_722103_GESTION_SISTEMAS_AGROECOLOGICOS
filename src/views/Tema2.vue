<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Arvenses
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema2/img1.png' alt='Imagen Decorativa' style="width: 350px").m-auto
      .col-lg-8
        p Los arvenses son plantas conocidas comúnmente como maleza, que no tiene interés para el hombre, es decir no son deseables y por tanto deben ser destruidas, ya que llegan a generar pérdidas y afectaciones directas en la producción agrícola de aproximadamente el 10%, debido a que interfieren en el crecimiento de los cultivos y entran a competir por nutrientes, espacio, suelo y recursos vitales (agua, sol), afecta la calidad de los productos debido a que pueden presentar impurezas provenientes de restos de arvenses e influyen  en el sabor, olor y color; también generan aumento en los costos de producción porque se debe invertir tiempo y recursos para su manejo, dificultan e interfieren en las labores agrícolas, son hospederas de plagas y enfermedades que pueden llegar afectar el cultivo y disminuyen el valor de la tierra.
        p Los arvenses, al igual que las demás plantas, se reproducen y su forma de propagación normalmente es a través de:
    .row.justify-content-center(data-aos="fade-down")
      .col-10.col-md-6.col-lg
        .row.m-2
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema2/img2.png' alt='Imagen Decorativa')
          .col-12.bg-c6.p-4
            p.text-center #[b El viento, ya que las semillas son diseminadas por el aire.]
      .col-10.col-md-6.col-lg
        .row.m-2
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema2/img3.png' alt='Imagen Decorativa')
          .col-12.bg-c6.p-4
            p.text-center #[b  El agua mediante canales de riego y drenaje o afluentes naturales.]
      .col-10.col-md-6.col-lg
        .row.m-2
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema2/img4.png' alt='Imagen Decorativa')
          .col-12.bg-c6.p-4
            p.text-center #[b El hombre que las transporta y las envía a otros lugares.]
      .col-10.col-md-6.col-lg
        .row.m-2
          .col-12.p-0
            figure
              img(src='@/assets/curso/tema2/img5.png' alt='Imagen Decorativa')
          .col-12.bg-c6.p-4
            p.text-center #[b Los animales, ya que estos las ingieren y mediante las heces las descargan en otros sitios.]
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 Rol ecológico
    p.mb-5 Las arvenses, en el sentido agronómico, representan plantas sin valor económico o que crecen fuera de lugar interfiriendo en la actividad de los cultivos, afectando su capacidad de producción y desarrollo normal por la competencia de agua, luz, nutrientes y espacio físico, o por la producción de sustancias nocivas para el cultivo; pese a todo esto cumplen un papel agroecológico muy importante, en el siguiente video se conocerá:
    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6_ljFWxQsbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p Por tanto, es necesario desarrollar estudios y emplear métodos de análisis ecológicos en los sistemas agrícolas, que permitan comprender y conocer mejor a las poblaciones de arvenses en temas relacionados con el modelo de distribución, crecimiento, desarrollo, fenología, alelopatía o influencia e interacción biótica y abiótica con los cultivos y en general con los agroecosistemas con la finalidad de tomar las mejores decisiones sobre su manejo y así lograr poner en práctica métodos adecuados, para su reducción o eliminación sin afectar al cultivo ni el medio ambiente.
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido
      h2 2.2 Clasificación
    p.mb-5 Los arvenses se pueden clasificar de diversas formas, en el siguiente gráfico se muestran:
    .tarjeta.tarjeta--verde.p-4.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Ciclo de vida
            ul.lista-ul
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Anuales.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Bianuales.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Perennes.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Simples (cuando logran sobrevivir durante varios años iniciando nuevamente su desarrollo a partir de otra estructura vegetativa).
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Con órganos subterráneos (subsistente de un periodo a otro gracias a que algunos órganos como raíces y tallos permanecen inactivas a la espera de condiciones ambientales favorables para su desarrollo).
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Parásitas (viven a expensa de otras).
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img6.png' alt='Imagen Decorativa' style="width: 550px").m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Hábitat de cultivo
            ul.lista-ul
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Praderas y pastos.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Forestales.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Acuáticas.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Ruderales.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Crecen al borde de las carreteras, caminos, cultivos o lotes.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img7.png' alt='Imagen Decorativa' style="width: 550px").m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Morfologías
            ul.lista-ul
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Fanerógamas (con flores).
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Criptógamas (sin flores).
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img8.png' alt='Imagen Decorativa' style="width: 550px").m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Tallo
            ul.lista-ul
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Herbáceas.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Semileñosas.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img9.png' alt='Imagen Decorativa' style="width: 550px").m-auto
        .row.justify-content-center
          .col-lg-4.mb-4.mb-lg-0
            h4 Hábitos
            ul.lista-ul
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Rastreras.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Enredaderas.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Trepadoras.
              li 
                i.fas.fa-leaf(style="color: #FFA686")
                | Erectas.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema2/img10.png' alt='Imagen Decorativa' style="width: 550px").m-auto
    p.mb-5 Holm et al. 1977., citado por Labrada, R., Caseley, J. C., y Parker, C. (1996), determinó cuáles son los 18 arvenses o malezas más importantes a nivel mundial, es decir que ocasionan más daños y generan gastos para su control, desde el punto de vista del hábitat o de las áreas afectadas, debido a que estas son difíciles de clasificar de acuerdo con criterios botánicos como la morfología, fenología y taxonomía.
    .row.justify-content-center(data-aos="fade-left")
      .col-lg-9
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Tabla 1]. Arvenses más importantes a nivel mundial
        .tabla-b.color-acento-contenido
          table
            caption Nota. Labrada, R., Caseley, J. C., y Parker, C. (1996), (1996) Manejo de Malezas para Países en Desarrollo. FAO.
            tr.bor-1
              th.text-center(style="background-color: #FFD3C3") Rango
              th.text-center(style="background-color:#DEEBAD; width:50%").bor-2 Especies
              th(colspan="2" style="background-color: #EFF5D6").text-center Formas de Crecimiento*
            tr.bor-1
              td.text-center 1
              td.bor-2 Cyperus rotundos L.
              td.text-center.bor-3 P
              td.text-center M
            tr.bor-1
              td.text-center 2
              td.bor-2 Cynodon dactylon (L.) Pers
              td.text-center.bor-3 P
              td.text-center M
            tr.bor-1
              td.text-center 3
              td.bor-2 Echinochloa crus-galli (L.) P. Beauv
              td.text-center.bor-3 A
              td.text-center M
            tr.bor-1
              td.text-center 4
              td.bor-2 Echinochloa colona (L.) Link
              td.text-center.bor-3 A
              td.text-center M
            tr.bor-1
              td.text-center 5
              td.bor-2 Eleusine indica (L.) Gaertn.
              td.text-center.bor-3 A
              td.text-center M
            tr.bor-1
              td.text-center 6
              td.bor-2 Sorghum halepense (L.) Pers
              td.text-center.bor-3 P
              td.text-center M
            tr.bor-1
              td.text-center 7
              td.bor-2 Imperata cilíndrica (L.) Raeuschel
              td.text-center.bor-3 P
              td.text-center M
            tr.bor-1
              td.text-center 8
              td.bor-2 Eichhornia crassipes (Mart.) Solms
              td.text-center.bor-3 P
              td.text-center M Ac.
            tr.bor-1
              td.text-center 9
              td.bor-2 Portulaca oleraceae L.
              td.text-center.bor-3 A
              td.text-center D
            tr.bor-1
              td.text-center 10
              td.bor-2 Chenopodium album L.
              td.text-center.bor-3 A
              td.text-center D
            tr.bor-1
              td.text-center 11
              td.bor-2 Digitaria sanguinalis (L.) Scop.
              td.text-center.bor-3 A
              td.text-center M
            tr.bor-1
              td.text-center 12
              td.bor-2 Convolvulus arvensis L.
              td.text-center.bor-3 P
              td.text-center D
            tr.bor-1
              td.text-center 13
              td.bor-2 Avena fatua L. Y especies afines
              td.text-center.bor-3 A
              td.text-center M
            tr.bor-1
              td.text-center 14
              td.bor-2 Amaranthus hybridus L.
              td.text-center.bor-3 A
              td.text-center D
            tr.bor-1
              td.text-center 15
              td.bor-2 Amaranthus spinosus L.
              td.text-center.bor-3 A
              td.text-center M
            tr.bor-1
              td.text-center 16
              td.bor-2 Cyperus esculentus L.
              td.text-center.bor-3 P
              td.text-center M
            tr.bor-1
              td.text-center 17
              td.bor-2 Paspalum conjugate Berg
              td.text-center.bor-3 P
              td.text-center M
            tr.bor-1
              td.text-center 18
              td.bor-2 Robottboellia cochinchinensis (Lour.) W.D. Clayton
              td.text-center.bor-3 A
              td.text-center M
            tr
              th.text-center(colspan="4").bor-4.txt-c1 *A= anual; Ac= acuática; D= dicotiledónea; M= monocotiledónea; P= perene

</template>

<script>
export default {
  name: 'Tema2',
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
