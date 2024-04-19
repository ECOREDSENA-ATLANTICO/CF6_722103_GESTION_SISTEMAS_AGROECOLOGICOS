export default {
  global: {
    componenteFormativo:
      'Planificación del manejo cultural en el agroecosistema',
    descripcionCurso:
      'En este componente formativo se abordan temáticas relacionadas las diferentes prácticas de manejo cultural que se llevan a cabo en los cultivos, para lo cual es necesario conocer la fisiología de las plantas, su arquitectura, el desarrollo vegetativo y reproductivo; además de técnicas, métodos, herramientas, equipos y utensilios requeridos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fisiología vegetal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Arquitectura de la planta',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Desarrollo vegetativo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Floración y fructificación',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Arvenses',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Rol ecológico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Manejo cultural',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Técnicas y métodos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Equipos y herramientas',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fisiología vegetal',
      referencia:
        'Azcón, J., y Talón, M. (2008). <em>Fundamentos de fisiología vegetal (No. 581.1)</em>. McGraw-Hill Interamericana.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50269/',
    },
    {
      tema: 'Arvenses',
      referencia:
        'Labrada, R., Caseley, J. C., & Parker, C. (1996). <em>Manejo de malezas para países en desarrollo (Vol. 120)</em>. Food & Agriculture Org.',
      tipo: 'Capítulo 1. Libro',
      link: 'https://www.fao.org/3/T1147S/t1147s00.htm#Contents',
    },
    {
      tema: 'Manejo Cultural',
      referencia:
        'Rivera Rodriguez, M., (2105). <em>Labores Culturales. Guía para mantener un huerto orgánico y saludable</em>. Fundación alternativa.',
      tipo: 'Capítulo 1. Libro',
      link:
        'https://alternativascc.org/wp-content/uploads/2018/05/labores-culturales_web-1.pdf',
    },
    {
      tema: 'Manejo Cultural',
      referencia:
        'González Durán, E. D. (2015). <em>Operaciones culturales, recolección, almacenamiento y envasado de productos (UF0162)</em>. Antequera, Málaga, Spain: IC Editorial.',
      tipo: 'Capítulo 1.  Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/43819',
    },
    {
      tema: 'Manejo Cultural',
      referencia:
        'Ángel, J. [TvAgro] (2016, 5 de agosto). <em>Labores culturales en el Cultivo de la Mora</em>. YouTube. [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=lkZy-BBVlDg',
    },
  ],
  glosario: [
    {
      termino: 'Aporque',
      significado:
        'Amontonar o arrimar tierra alrededor del tallo o base de la planta.',
    },
    {
      termino: 'Arvense',
      significado:
        'Plantas conocidas comúnmente como maleza, que no tiene interés para el hombre y por tanto deben ser destruidas.',
    },
    {
      termino: 'Competidor biótico',
      significado:
        'Organismo capaz de competir con los cultivos por los recursos del medio (luz, agua, sustrato, nutrientes y otros).',
    },
    {
      termino: 'Enfermedad',
      significado:
        'Alteración del recurso vegetal causada por agentes de daño que pueden ser microorganismos tales como hongos, bacterias y virus.',
    },
    {
      termino: 'Fisiología Vegetal',
      significado:
        'Ciencia que se encarga de comprender el desarrollo y comportamiento de las plantas mediante el estudio del funcionamiento, procesos y funciones vitales que se llevan a cabo a lo largo de su ciclo de vida.',
    },
    {
      termino: 'Manejo Cultural',
      significado:
        'Serie de actividades que se llevan a cabo durante la producción (desde la siembra hasta la cosecha) de los cultivos con el fin de proporcionar las condiciones y requerimientos necesarios para un adecuado crecimiento de las plantas.',
    },
    {
      termino: 'Manejo integrado de plagas y enfermedades',
      significado:
        'Conjunto de métodos biológicos, silviculturales, químicos y mecánicos que buscan reducir o suprimir el daño producido por el ataque de plagas y enfermedades. El manejo integrado de plagas busca integrar los distintos métodos de control, prediciendo cuando son necesarios, donde se necesitan y cuáles de ellos deben utilizarse.',
    },
    {
      termino: 'Perenne',
      significado: 'Es una planta que vive durante más de dos años.',
    },
    {
      termino: 'Plaga',
      significado:
        'Alteración de un recurso vegetal producida por vertebrados, nematodos e insectos, que producen daños y pérdidas apreciables de producción y calidad.',
    },
    {
      termino: 'Poda',
      significado:
        'Corte de ramas en una porción del árbol para obtener madera libre de nudos y mejorar la calidad del cultivo.',
    },
    {
      termino: 'Raleo',
      significado:
        'La actividad también conocida como aclareos o entresaca, consiste en la eliminación de plantas con el objetivo de beneficiar y asegurar el adecuado desarrollo y crecimiento de las más sanas.',
    },
    {
      termino: 'Riego',
      significado:
        'Aportar agua a las plantas por medio del suelo para asegurar la humedad que requieren y así lograr un adecuado crecimiento y desarrollo.',
    },
    {
      termino: 'Tutorado',
      significado:
        'Es utilizar algún material que permita que la planta se mantenga en forma vertical para que su crecimiento sea hacia arriba de forma erguida y no toque el suelo, permitiendo que se desarrolle más sano y consecuentemente, de mayor calidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Azcón, J., y Talón, M. (2008). <em>Fundamentos de fisiología vegetal (No. 581.1)</em>. McGraw-Hill Interamericana. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/50269/',
    },
    {
      referencia:
        'Blanco-Valdes, Yaisys. (2016). El rol de las arvenses como componente en la biodiversidad de los agroecosistemas. <em>Cultivos Tropicales</em>, 37(4), 34-56. ',
      link: 'https://dx.doi.org/10.13140/RG.2.2.10964.19844',
    },
    {
      referencia:
        'Carmona Gómez, A. y González Durán, E. (2016). <em>Labores culturales y recolección de los cultivos ecológicos: UF0209</em>. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/59217',
    },
    {
      referencia:
        'Chuncho, G., Chuncho, C., & Aguirre, Z. H. (2019). <em>Anatomía y morfología vegetal</em>. University of Nebraska de Loja: Loja, Ecuador.',
      link: '',
    },
    {
      referencia:
        'Cisneros A. R. (2003). <em>Apuntes de riego y drenaje</em>. Universidad autónoma de San Luis Potosi.',
      link: '',
    },
    {
      referencia:
        'Labrada, R., Caseley, J. C., & Parker, C. (1996). <em>Manejo de malezas para países en desarrollo (Vol. 120)</em>. Food & Agriculture Org.',
      link: '',
    },
    {
      referencia: 'MINEP. (2005). <em>Manejo agronómico de los cultivos</em>. ',
      link: 'https://docplayer.es/24915900-Modulo-de-aprendizaje.html',
    },
    {
      referencia:
        'Mortimer, A. (1996) <em>Manejo de Malezas para Países en Desarrollo</em>. FAO. ',
      link:
        'https://www.fao.org/3/T1147S/t1147s06.htm#cap%C3%ADtulo%202.%20la%20clasificaci%C3%B3n%20y%20ecolog%C3%ADa%20de%20las%20malezas',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Tatiana Villamil',
        cargo: 'Responsable del equipo',
        centro: 'Dirección General',
      },
      {
        nombre: 'Miguel De Jesús Paredes Maestre',
        cargo: 'Responsable de Línea de Producción',
        centro:
          'Regional Atlántico - Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
      },
      {
        nombre: 'Yisela Andrea Vidales Vásquez',
        cargo: 'Experta temática',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología - ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Edison Eduardo Mantilla Cuadros',
        cargo: 'Diseño web',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Ludwyng Corzo García',
        cargo: 'Producción audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Regional Tolima - Centro de Comercio y Servicios',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de contenido',
        centro:
          'Regional Santander - Centro Industrial del Diseño y la Manufactura',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Guillermo Araújo Angarita',
        cargo: 'Desarrollo Fullstack ',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web ',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Evaluador para contenidos inclusivos y accesibles',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
      {
        nombre: 'Jairo Luis Valencia Ebratt',
        cargo: 'Validación de recursos digitales ',
        centro:
          'Regional Atlántico -Centro Para El Desarrollo Agroecológico Y Agroindustrial Sabanalarga',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
