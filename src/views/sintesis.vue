<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Las plantas siempre están a nuestro alrededor y son fundamentales en nuestra vida, por tanto, no deben ser apreciadas como simples elementos decorativos, sino que deben ser valoradas por su importancia y contribución al desarrollo de la vida y existencia. Estas cumplen un ciclo de vida y al igual que los demás seres vivos realizan consecutivamente una serie de procesos y estados, los cuales desde el punto de vista fisiológico se pueden identificar y son comúnmente conocidos como fase juvenil, maduro o adulto y senescente, es decir atraviesan un proceso de crecimiento y desarrollo vegetativo, donde forman su estructura (raíz, tallo, hojas, flores, semillas y fruto), las cuales son necesarias y cumplen una función específica.
    p Es importante conocer y analizar la fisiología y morfología de las plantas, para así determinar cómo realizar el manejo cultural, esta serie de labores y actividades que se llevan a cabo desde la siembra hasta la cosecha de los cultivos, con el fin de proporcionar las condiciones y requerimientos necesarios para un adecuado crecimiento de las plantas, ya que están enfocadas en el cuidado y mantenimiento de la producción. Entre las principales labores de manejo cultural están las enfocadas a dar soporte y formación de las plantas como son tutorado, poda, raleo, aporque; las dirigidas a evitar la competencia por nutrientes, agua, luz, espacio, como son el manejo de arvenses; las encaminadas a satisfacer necesidades hídricas como las actividades de riego y drenaje; las de aplicación y regulación de nutrientes; y las labores de control para evitar enfermedades, disminución o pérdida de los cultivos, como son embolsado de frutos, manejo ecológico de plagas y enfermedades. 
    p.mb-5 Así pues, un resumen de lo visto en el presente componente podrá ser visualizado en el siguiente mapa conceptual:
    .row.justify-content-center
      .col-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La gráfica muestra la sintesis del componente formativo Planificación del manejo cultural en el agroecosistema, teniendo en cuenta la fisiología de las plantas y las técnicas y métodos.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
