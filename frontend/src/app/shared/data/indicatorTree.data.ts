export const indicatorTree = [
  {
    value: "IN.1",
    label: "Institutions",
    description:"Este pilar captura el marco institucional de una economía, como el entorno político, regulatorio y empresarial.",
    children: [
      {
        value: "IN.1.1",
        label: "Institutional environment",
        description:"Sub-pilar sobre el entorno político de una economía.",
        children: [
          { value: "IN.1.1.1", label: "Operational stability for businesses*",description: "Índice que mide la probabilidad y severidad de riesgos políticos, legales, operativos o de seguridad que afectan las operaciones comerciales. Los puntajes son anualizados, estandarizados y agregados por trimestre." },
          { value: "IN.1.1.2", label: "Government effectiveness*",description: "Índice que refleja percepciones sobre la calidad de los servicios públicos, la independencia de la administración pública frente a presiones políticas y la credibilidad del gobierno en la implementación de políticas. Puntajes estandarizados." }
        ]
      },
      {
        value: "IN.1.2",
        label: "Regulatory environment",
        description: "Sub-pilar sobre el entorno regulatorio de una economía.",
        children: [
          { value: "IN.1.2.1", label: "Regulatory quality*",description: "Índice que refleja percepciones sobre la capacidad del gobierno para formular e implementar políticas y regulaciones que fomenten el desarrollo del sector privado. Puntajes estandarizados." },
          { value: "IN.1.2.2", label: "Rule of law*",description: "Índice que refleja la confianza de los agentes en las normas de la sociedad, la calidad del cumplimiento de contratos, derechos de propiedad, policía y tribunales, y la probabilidad de crimen y violencia. Puntajes estandarizados." }
        ]
      },
      {
        value: "IN.1.3",
        label: "Business environment",
        description: "Sub-pilar sobre el entorno empresarial de una economía.",
        children: [
          { value: "IN.1.3.1", label: "Policy stability for doing business†",description: "Promedio de respuestas a la pregunta de la encuesta: En su país, ¿en qué medida el gobierno garantiza un entorno político estable para hacer negocios? [1 = nada, 7 = mucho]." },
          { value: "IN.1.3.2", label: "Entrepreneurship policies and culture†",description: "Promedio de percepciones de expertos sobre políticas y cultura emprendedora (promedio de cinco años) según la encuesta GEM National Expert Survey." }
        ]
      }
    ]
  },
  {
    value: "IN.2",
    label: "Human capital and research",
    description: "Este pilar mide el capital humano de los países.",
    children: [
      {
        value: "IN.2.1",
        label: "Education",
        description: "Sub-pilar sobre la educación en una economía.",
        children: [
          { value: "IN.2.1.1", label: "Expenditure on education, % GDP",description: "Gasto total del gobierno (local, regional y central) en educación expresado como porcentaje del PIB. Incluye transferencias internacionales." },
          { value: "IN.2.1.2", label: "Government funding/pupil, secondary, % GDP/cap",description: "Gasto total promedio del gobierno por estudiante en nivel secundario expresado como porcentaje del PIB per cápita." },
          { value: "IN.2.1.3", label: "School life expectancy, years",description: "Total de años que un niño puede esperar pasar desde primaria hasta educación terciaria; valores altos indican mayor retención escolar, no necesariamente coinciden con los grados completados." },
          { value: "IN.2.1.4", label: "PISA scales in reading, maths and science",description:"Mide habilidades de estudiantes de 15 años en lectura, matemáticas y ciencias; promedio de puntajes PISA (media ~500, desviación ~100). China y Azerbaiyán tienen datos específicos." },
          { value: "IN.2.1.5", label: "Pupil–teacher ratio, secondary",description: "Alumnos por docente en secundaria; ratios altos indican menor acceso relativo de alumnos a profesores."}
        ]
      },
      {
        value: "IN.2.2",
        label: "Tertiary education",
        description: "Sub-pilar sobre la educación terciaria en una economía.",
        children: [
          { value: "IN.2.2.1", label: "Tertiary enrolment, % gross",description:"Porcentaje de matrícula terciaria respecto a la población correspondiente; puede superar 100% por repetición o estudiantes fuera de edad. " },
          { value: "IN.2.2.2", label: "Graduates in science and engineering, %",description: "Porcentaje de graduados terciarios en ciencias, ingeniería y tecnología."},
          { value: "IN.2.2.3", label: "Tertiary inbound mobility, %",description: "Porcentaje de estudiantes extranjeros sobre la matrícula terciaria total del país. "}
        ]
      },
      {
        value: "IN.2.3",
        label: "Research and development (R&D)",
        description: "Sub-pilar sobre investigación y desarrollo en una economía.",
        children: [
          { value: "IN.2.3.1", label: "Researchers, FTE/mn pop.",description: "Profesionales en I+D que crean conocimiento y desarrollan métodos, técnicas o software. Número de investigadores (equivalente a tiempo completo) por millón de habitantes." },
          { value: "IN.2.3.2", label: "Gross expenditure on R&D, % GDP",description: "Gasto total en I+D (público y privado) como porcentaje del PIB." },
          { value: "IN.2.3.3", label: "Global corporate R&D investors, top 3, mn USD",description: "Gasto promedio en I+D de las tres principales empresas globales; si hay menos, se ajusta el promedio." },
          { value: "IN.2.3.4", label: "QS university ranking, top 3*",description:"Puntaje promedio de las tres mejores universidades por país según QS 2024; se ajusta si hay menos de tres."}
        ]
      }
    ]
  },
  {
    value: "IN.3",
    label: "Infrastructure",
    description: "Pilar sobre TIC, infraestructura general y sostenibilidad ecológica.",
    children: [
      {
        value: "IN.3.1",
        label: "Information and communication technologies (ICTs)",
        description: "Subpilar sobre tecnologías de información y comunicación.",
        children: [
          { 
            value: "IN.3.1.1", 
            label: "ICT access*", 
            description: "Índice compuesto de acceso a TIC: celulares, internet en hogares y cobertura de redes móviles." 
          },
          { 
            value: "IN.3.1.2", 
            label: "ICT use*", 
            description: "Índice compuesto del uso de TIC: tráfico y acceso a internet fijo y móvil, suscripciones activas." 
          },
          { 
            value: "IN.3.1.3", 
            label: "Government's online service*", 
            description: "Índice de servicios en línea del gobierno: provisión de servicios, tecnología, instituciones, contenido y e-participación." 
          },
          { 
            value: "IN.3.1.4", 
            label: "E-participation*", 
            description: "Índice de participación ciudadana en políticas públicas mediante programas de gobierno digital." 
          }
        ]
      },
      {
        value: "IN.3.2",
        label: "General infrastructure",
        description: "Subpilar sobre infraestructura general de un país.",
        children: [
          { 
            value: "IN.3.2.1", 
            label: "Electricity output, GWh/mn pop.", 
            description: "Producción de electricidad por millón de habitantes considerando todas las fuentes de generación." 
          },
          { 
            value: "IN.3.2.2", 
            label: "Logistics performance*", 
            description: "Índice de desempeño logístico: aduanas, infraestructura, envíos, calidad, rastreo y puntualidad." 
          },
          { 
            value: "IN.3.2.3", 
            label: "Gross capital formation, % GDP", 
            description: "Formación bruta de capital como porcentaje del PIB, incluye inversiones y variación de inventarios." 
          }
        ]
      },
      {
        value: "IN.3.3",
        label: "Ecological sustainability",
        description: "Subpilar sobre sostenibilidad ecológica.",
        children: [
          { 
            value: "IN.3.3.1", 
            label: "GDP/unit of energy use", 
            description: "Producto interno por unidad de energía; mide productividad energética." 
          },
          { 
            value: "IN.3.3.2", 
            label: "Low-carbon energy use, %", 
            description: "Porcentaje de energía primaria de baja emisión de carbono respecto al consumo total." 
          },
          { 
            value: "IN.3.3.3", 
            label: "ISO 14001 environment/bn PPP$ GDP", 
            description: "Cantidad de certificaciones ISO 14001 por cada mil millones de PIB PPP." 
          }
        ]
      }
    ]
  },
  {
    value: "IN.4",
    label: "Market sophistication",
    description: "Pilar sobre las condiciones de mercado, el acceso al crédito, la inversión y la escala del mercado.",
    children: [
      {
        value: "IN.4.1",
        label: "Credit",
        description: "Subpilar sobre crédito y disponibilidad de financiamiento.",
        children: [
          { 
            value: "IN.4.1.1", 
            label: "Finance for startups and scaleups†",
            description: "Percepción de expertos sobre la disponibilidad de financiamiento para crear y escalar empresas." 
          },
          { 
            value: "IN.4.1.2", 
            label: "Domestic credit to private sector, % GDP",
            description: "Crédito otorgado al sector privado por instituciones financieras como porcentaje del PIB." 
          },
          { 
            value: "IN.4.1.3", 
            label: "Loans from microfinance institutions, % GDP",
            description: "Préstamos vigentes de instituciones de microfinanzas como proporción del PIB." 
          }
        ]
      },
      {
        value: "IN.4.2",
        label: "Investment",
        description: "Subpilar sobre inversión de mercado y actividad de capital de riesgo.",
        children: [
          { 
            value: "IN.4.2.1", 
            label: "Market capitalization, % GDP",
            description: "Valor total de las empresas listadas en bolsa como porcentaje del PIB." 
          },
          { 
            value: "IN.4.2.2", 
            label: "Venture capital (VC) investors, deals/bn PPP$ GDP",
            description: "Cantidad de transacciones realizadas por inversionistas de capital de riesgo por cada mil millones de PIB (PPP)." 
          },
          { 
            value: "IN.4.2.3", 
            label: "VC recipients, deals/bn PPP$ GDP",
            description: "Número de transacciones de capital de riesgo recibidas por empresas, por cada mil millones de PIB (PPP)." 
          },
          { 
            value: "IN.4.2.4", 
            label: "VC received, value, % GDP",
            description: "Valor monetario del capital de riesgo recibido por empresas como porcentaje del PIB." 
          }
        ]
      },
      {
        value: "IN.4.3",
        label: "Trade, diversification and market scale",
        description: "Subpilar sobre comercio, diversificación industrial y tamaño del mercado.",
        children: [
          { 
            value: "IN.4.3.1", 
            label: "Applied tariff rate, weighted avg., %",
            description: "Promedio ponderado de aranceles aplicados considerando acuerdos preferenciales y valores de importación." 
          },
          { 
            value: "IN.4.3.2", 
            label: "Domestic industry diversification",
            description: "Diversificación de la industria nacional medida mediante el índice Herfindahl-Hirschman (HHI)." 
          },
          { 
            value: "IN.4.3.3", 
            label: "Domestic market scale, bn PPP$",
            description: "Tamaño del mercado doméstico medido por el PIB en dólares internacionales (PPP)." 
          }
        ]
      }
    ]
  },
  {
      value: "IN.5",
      label: "Business sophistication",
      description: "Nivel de sofisticación empresarial y qué tan propicias son las empresas para la innovación.",
      children: [
          {
              value: "IN.5.1",
              label: "Knowledge workers",
              description: "Trabajadores con alta formación y actividades intensivas en conocimiento.",
              children: [
                  {
                      value: "IN.5.1.1",
                      label: "Knowledge-intensive employment, %",
                      description: "Porcentaje de empleo en ocupaciones intensivas en conocimiento (gerentes, profesionales y técnicos)."
                  },
                  {
                      value: "IN.5.1.2",
                      label: "Firms offering formal training, %",
                      description: "Porcentaje de empresas que ofrecen capacitación formal a sus empleados permanentes."
                  },
                  {
                      value: "IN.5.1.3",
                      label: "GERD performed by business, % GDP",
                      description: "Gasto en I+D realizado por empresas como porcentaje del PIB."
                  },
                  {
                      value: "IN.5.1.4",
                      label: "GERD financed by business, %",
                      description: "Porcentaje del gasto total en I+D financiado por empresas."
                  },
                  {
                      value: "IN.5.1.5",
                      label: "Females employed w/advanced degrees, %",
                      description: "Porcentaje de mujeres empleadas con títulos de educación avanzada."
                  }
              ]
          },
          {
              value: "IN.5.2",
              label: "Innovation linkages",
              description: "Conexiones de innovación entre empresas, universidades y otros actores.",
              children: [
                  {
                      value: "IN.5.2.1",
                      label: "Public research–industry co-publications, %",
                      description: "Publicaciones de investigación realizadas conjuntamente entre sector público y empresas."
                  },
                  {
                      value: "IN.5.2.2",
                      label: "University–industry R&D collaboration†",
                      description: "Grado de colaboración entre universidades y empresas en actividades de I+D."
                  },
                  {
                      value: "IN.5.2.3",
                      label: "State of cluster development†",
                      description: "Nivel de desarrollo de clústeres industriales en el país."
                  },
                  {
                      value: "IN.5.2.4",
                      label: "Joint venture/strategic alliance deals/bn PPP$ GDP",
                      description: "Acuerdos de alianzas estratégicas o ‘joint ventures’ por billón de PIB en PPP."
                  },
                  {
                      value: "IN.5.2.5",
                      label: "Patent families/bn PPP$ GDP",
                      description: "Familias de patentes con aplicaciones en al menos dos oficinas, por billón de PIB en PPP."
                  }
              ]
          },
          {
              value: "IN.5.3",
              label: "Knowledge absorption",
              description: "Capacidad de la economía para absorber conocimiento externo.",
              children: [
                  {
                      value: "IN.5.3.1",
                      label: "Intellectual property payments, % total trade",
                      description: "Pagos por uso de propiedad intelectual como porcentaje del comercio total."
                  },
                  {
                      value: "IN.5.3.2",
                      label: "High-tech imports, % total trade",
                      description: "Importaciones de alta tecnología como porcentaje del comercio total."
                  },
                  {
                      value: "IN.5.3.3",
                      label: "ICT services imports, % total trade",
                      description: "Importaciones de servicios TIC como porcentaje del comercio total."
                  },
                  {
                      value: "IN.5.3.4",
                      label: "FDI net inflows, % GDP",
                      description: "Flujos netos de inversión extranjera directa como porcentaje del PIB."
                  },
                  {
                      value: "IN.5.3.5",
                      label: "Research talent, % in businesses",
                      description: "Porcentaje de investigadores empleados en el sector empresarial."
                  }
              ]
          }
      ]
  },
  {
    value: "OUT.6",
    label: "Knowledge and technology outputs",
    description: "Pilar que mide los resultados derivados de la innovación y la creación de conocimiento.",
    children: [
      {
        value: "OUT.6.1",
        label: "Knowledge creation",
        description: "Subpilar sobre la creación de conocimiento.",
        children: [
          {
            value: "OUT.6.1.1",
            label: "Patents by origin/bn PPP$ GDP",
            description:
              "Solicitudes de patentes de residentes, medidas por billón de PIB en PPP. Incluye solicitudes realizadas en oficinas nacionales o regionales por residentes del país."
          },
          {
            value: "OUT.6.1.2",
            label: "PCT patents by origin/bn PPP$ GDP",
            description:
              "Solicitudes internacionales de patentes vía PCT presentadas por residentes, por billón de PIB en PPP. Solo disponible para Estados contratantes del PCT."
          },
          {
            value: "OUT.6.1.3",
            label: "Utility models by origin/bn PPP$ GDP",
            description:
              "Solicitudes de modelos de utilidad presentadas por residentes, por billón de PIB en PPP. Tienen requisitos menos estrictos y protección más corta que las patentes."
          },
          {
            value: "OUT.6.1.4",
            label: "Scientific and technical articles/bn PPP$ GDP",
            description:
              "Artículos publicados en áreas científicas y técnicas, asignados por afiliación institucional, por billón de PIB en PPP."
          },
          {
            value: "OUT.6.1.5",
            label: "Citable documents H-index",
            description:
              "Índice H basado en la cantidad de artículos y sus citas, reflejando productividad científica e impacto."
          }
        ]
      },
      {
        value: "OUT.6.2",
        label: "Knowledge impact",
        description: "Subpilar sobre el impacto económico derivado del conocimiento.",
        children: [
          {
            value: "OUT.6.2.1",
            label: "Labor productivity growth, %",
            description:
              "Crecimiento del PIB real por persona empleada (promedio 2017–2021), indicador de productividad laboral."
          },
          {
            value: "OUT.6.2.2",
            label: "Unicorn valuation, % GDP",
            description:
              "Valor total de las empresas unicornio del país como porcentaje del PIB."
          },
          {
            value: "OUT.6.2.3",
            label: "Software spending, % GDP",
            description:
              "Gasto en software empaquetado adquirido o arrendado, como porcentaje del PIB. No incluye desarrollo interno."
          },
          {
            value: "OUT.6.2.4",
            label: "High-tech manufacturing, %",
            description:
              "Producción de manufactura de alta y media-alta tecnología como porcentaje del total manufacturero."
          }
        ]
      },
      {
        value: "OUT.6.3",
        label: "Knowledge diffusion",
        description: "Subpilar sobre la difusión del conocimiento a través de comercio y producción.",
        children: [
          {
            value: "OUT.6.3.1",
            label: "Intellectual property receipts, % total trade",
            description:
              "Ingresos por uso de propiedad intelectual frente al total del comercio. Incluye patentes, derechos de autor, software y licencias."
          },
          {
            value: "OUT.6.3.2",
            label: "Production and export complexity",
            description:
              "Índice de complejidad económica basado en diversidad y sofisticación de exportaciones."
          },
          {
            value: "OUT.6.3.3",
            label: "High-tech exports, % total trade",
            description:
              "Exportaciones de alta tecnología como porcentaje del comercio total."
          },
          {
            value: "OUT.6.3.4",
            label: "ICT services exports, % total trade",
            description:
              "Exportaciones de servicios TIC —telecomunicaciones, informática y servicios de información— como porcentaje del comercio total."
          },
          {
            value: "OUT.6.3.5",
            label: "ISO 9001 quality/bn PPP$ GDP",
            description:
              "Certificaciones ISO 9001 emitidas por billón de PIB en PPP, reflejando sistemas de gestión de calidad."
          }
        ]
      }
    ]
  },
  {
    value: "OUT.7",
    label: "Creative outputs",
    description: "Pilar que mide el papel de la creatividad en los resultados de innovación.",
    children: [
      {
        value: "OUT.7.1",
        label: "Intangible assets",
        description: "Subpilar sobre activos intangibles.",
        children: [
          {
            value: "OUT.7.1.1",
            label: "Intangible asset intensity, top 15, %",
            description:
              "Promedio de intensidad de activos intangibles entre las 15 empresas con mayor valor intangible en cada economía. Se calcula como el valor intangible dividido por el valor total de la empresa."
          },
          {
            value: "OUT.7.1.2",
            label: "Trademarks by origin/bn PPP$ GDP",
            description:
              "Solicitudes de marcas presentadas por residentes, medidas por número de clases y escaladas por PIB en PPP (miles de millones). Incluye solicitudes en oficinas nacionales, regionales o vía el Sistema de Madrid."
          },
          {
            value: "OUT.7.1.3",
            label: "Global brand value, top 5,000, % GDP",
            description:
              "Suma del valor de las marcas de un país incluidas en el top 5.000 global, expresada como porcentaje del PIB. Basado en la metodología de 'royalty relief' de Brand Finance."
          },
          {
            value: "OUT.7.1.4",
            label: "Industrial designs by origin/bn PPP$ GDP",
            description:
              "Solicitudes de diseños industriales presentadas por residentes. Se mide por conteo de diseños y se escala por PIB en PPP (miles de millones)."
          }
        ]
      },
      {
        value: "OUT.7.2",
        label: "Creative goods and services",
        description: "Subpilar sobre bienes y servicios creativos.",
        children: [
          {
            value: "OUT.7.2.1",
            label: "Cultural and creative services exports, % total trade",
            description:
              "Exportaciones de servicios culturales y creativos como porcentaje del comercio total. Basado en la clasificación EBOPS 2010."
          },
          {
            value: "OUT.7.2.2",
            label: "National feature films/mn pop. 15–69",
            description:
              "Número de largometrajes nacionales producidos por millón de habitantes entre 15 y 69 años. Incluye ficción, documentales y animación destinados a cine."
          },
          {
            value: "OUT.7.2.3",
            label: "Entertainment and media market/th pop. 15–69",
            description:
              "Tamaño del mercado de entretenimiento y medios por mil habitantes (15–69 años). Basado en proyecciones y datos globales de consumo y publicidad."
          },
          {
            value: "OUT.7.2.4",
            label: "Creative goods exports, % total trade",
            description:
              "Exportaciones de bienes creativos como porcentaje del comercio total. Basado en la Clasificación de Comercio Cultural de UNESCO y datos de la OMC y UNCTAD."
          }
        ]
      },
      {
        value: "OUT.7.3",
        label: "Online creativity",
        description: "Subpilar sobre creatividad digital y actividad en línea.",
        children: [
          {
            value: "OUT.7.3.1",
            label: "Top-level domains (TLDs)/th pop. 15–69",
            description:
              "Registro de dominios de nivel superior (genéricos y con código de país) por cada mil habitantes de 15 a 69 años. Solo se reportan valores normalizados."
          },
          {
            value: "OUT.7.3.2",
            label: "GitHub commits/mn pop. 15–69",
            description:
              "Número de commits en GitHub realizados y recibidos por proyectos públicos, por millón de habitantes entre 15 y 69 años. Se excluyen actividades automatizadas."
          },
          {
            value: "OUT.7.3.3",
            label: "Mobile app creation/bn PPP$ GDP",
            description:
              "Descargas globales de aplicaciones móviles atribuidas al país de la empresa desarrolladora, escaladas por PIB en PPP (miles de millones)."
          }
        ]
      }
    ]
  }
];