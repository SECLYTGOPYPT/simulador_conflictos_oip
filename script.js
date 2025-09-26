let pasoActual = "inicio";
let historial = [];
const flujo = {
  inicio: {
    pregunta: "¿Cuál es tu situación actual?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "soy_funcionario",
        texto: "Soy funcionario/a",
        siguiente: "jerarquia_actual"
      },
      {
        valor: "fui_funcionario",
        texto: "Fui funcionario/a",
        siguiente: "fui_funcionario"
      },
      {
        valor: "voy_a_ser_designado",
        texto: "Voy a ser designado/a en un nuevo cargo público",
        siguiente: "jerarquia_futura"
      }
    ]
  },

  // === RAMA 1: SOY FUNCIONARIO ===
  jerarquia_actual: {
    pregunta: "¿Cuál es tu jerarquía actual?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "alto_nivel",
        texto: "Funcionario/a Público/a con rango equivalente o superior a Director/a General del Poder Ejecutivo de la Ciudad, o máxima autoridad de ente descentralizado o empresa de la Ciudad",
        siguiente: "actividad_alto_cargo"
      },
      {
        valor: "basico",
        texto: "Agente público",
        siguiente: "actividad_agente_publico"
      }
    ]
  },

  actividad_alto_cargo: {
    pregunta: "¿Además de tu cargo público...?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "otra_actividad",
        texto: "Desarrollo otra actividad",
        siguiente: "respuesta_otra_actividad"
      },
      {
        valor: "futura_actividad",
        texto: "Tengo previsto desarrollar otra actividad",
        siguiente: "respuesta_futura_actividad"
      },
      {
        valor: "titular_ente_regulador",
        texto: "Soy titular o integrante de alguno de los órganos de Gobierno del Ente Regulador de Servicios Públicos",
        siguiente: "respuesta_titular_ente_regulador"
      },
      {
        valor: "antes_asumir",
        texto: "Desarrollé otra actividad antes de asumir en el cargo",
        siguiente: "respuesta_antes_asumir"
      },
      {
        valor: "socio_empresa",
        texto: "Soy o voy a ser socio/a de una empresa",
        siguiente: "respuesta_socio_empresa"
      },
      {
        valor: "acciones_bonos",
        texto: "Soy titular de acciones, bonos o cualquier otro título valor emitido por sociedad/es",
        siguiente: "respuesta_acciones_bonos"
      }
    ]
  },

  respuesta_otra_actividad: {
    pregunta: "De caracter",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "otra_actividad_publica",
        texto: "Pública",
        siguiente: "fotra_actividad_publica_respuesta_rama"
      },
      {
        valor: "otra_actividad_privada",
        texto: "Privada",
        siguiente: "siguiente_privada_empresa"
      }
    ]
  },

  respuesta_otra_publica: {
    pregunta: "Pública",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "otra_actividad_publica_municipal",
        texto: "Es un empleo o fúncion pública a nivel nacional, provincial, municipal o de la Ciudad",
        siguiente: "final_otra_publica"
      },
      {
        valor: "otra_actividad_publica_docencia",
        texto: "Ejerzo la docencia",
        siguiente: "final_otra_publica_docencia"
      }
    ]
  },

  final_otra_publica: {
    pregunta: "En principio no hay incompatibilidad para GCABA. Sin embargo, tené en cuenta que tu otro cargo podría tener un régimen que sí lo establezca.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_otra_publica_docencia: {
    pregunta: "En principio, la actividad docente que desarrollas simultáneamente no configura una incompatibilidad, de todos modos, se sugiere que consultes tu situación con la OFIP. ",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_privada_individual: {
    pregunta: "Ejerzo la docencia",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"privada_individual",
        texto: "Ejerzo la docencia",
        siguiente: "final_privada_individual"
      }
    ]
  },

  final_privada_individual: {
    pregunta: "En principio, la actividad docente que desarrollas simultaneamente no configura un conflicto de intereses, de todos modos, se sugiere que consultes tu situación con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_privada_empresa: {
    pregunta: "En la cual",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"privada_individual_socio",
        texto: "Soy socio/a, asociado/a, directivo/a, presto servicios a instituciones no estatales dedicadas a la defensa o representación de intereses económicos sectoriales",
        siguiente: "siguiente_privada_socio"
      },
      {
        valor:"privada_individual_servicios",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, ejerzo profesión liberal, mantengo relaciones contractuales con individuos/empresas/instituciones",
        siguiente: "siguiente_privada_servicios"
      },
      {
        valor:"privada_individual_bienes",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción",
        siguiente: "final_privada_bienes"
      },
      {
        valor:"privada_individual_abogacia",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires",
        siguiente: "final_privada_abogacia"
      },
      {
        valor:"privada_individual_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_privada_ninguna"
      }
    ]
  },

  final_privada_ninguna: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_privada_abogacia: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_privada_bienes: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_privada_servicios: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"competencia_art26",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos",
        siguiente: "final_competencia_art26"
      },
      {
        valor:"organismo_art26",
        texto: "El organismo donde presto funciones lo fizcaliza directamente",
        siguiente: "final_organismo_art26"
      },
      {
        valor:"influencia_art27",
        texto: "Puedo influir en la decisión de la autoridad de mi jurisdicción o alterar el principio de igualdad ante la ley",
        siguiente: "final_influencia_art27"
      },
      {
        valor:"servicios_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_servicios_ninguna"
      }
    ]
  },

  final_competencia_art26: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_organismo_art26: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_influencia_art27: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_servicios_ninguna: {
    pregunta: "En esa actividad ¿Tendrás vinculaciones con organismos o empresas de la ciudad?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"socio_si",
        texto: "Si",
        siguiente: "final_servicios_ninguna_si"

      },
      {
        valor:"socio_no",
        texto: "No",
        siguiente: "final_socio_no"

      }
    ]
  },

  final_servicios_ninguna_si: {
    pregunta: "¿Es una actividad docente?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"socio_docente_si",
        texto: "Si",
        siguiente: "final_negocio_docente_si"

      },
      {
        valor:"socio_docente_no",
        texto: "No",
        siguiente: "final_socio_si"

      }
    ]
  },

  siguiente_privada_socio: {
    pregunta: "¿Su objetivo social es concurrente con los intereses públicos que por tu cargo debes tutelar?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"socio_si",
        texto: "Si",
        siguiente: "final_socio_si"
      },
      {
        valor:"socio_no",
        texto: "No",
        siguiente: "final_socio_no"
      }
    ]
  },

  final_socio_si: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatibilidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_no: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_privada_negocio: {
    pregunta: "En esa actividad ¿Tendrás vinculaciones con organismos o empresas de la ciudad?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"negocio_si",
        texto: "Si",
        siguiente: "siguiente_negocio_si"
      },
      {
        valor:"negocio_no",
        texto: "No",
        siguiente: "final_negocio_no"
      }
    ]
  },

  final_negocio_no: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_negocio_si: {
    pregunta: "¿Es una actividad docente?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"negocio_docente_si",
        texto: "Si",
        siguiente: "final_negocio_docente_si"
      },
      {
        valor:"negocio_docente_no",
        texto: "No",
        siguiente: "final_negocio_docente_no"
      }
    ]
  },

  final_negocio_docente_si: {
    pregunta: "En principio, la actividad docente es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_negocio_docente_no: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure un conflicto de interés. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  respuesta_futura_actividad: {
    pregunta: "Además del cargo público, tengo previsto desarrollar otra actividad",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "futura_construir",
        texto: "Voy a constituir una sociedad o a adquirir participación en una existente",
        siguiente: "siguiente_futura_construir"
      },
      {
        valor: "futura_funcion_publica",
        texto: "Función pública",
        siguiente: "siguiente_futura_funcion_publica"
      },
      {
        valor: "futura_actividad_privada",
        texto: "Actividad privada",
        siguiente: "siguiente_privada_empresa"
      }
    ]
  },

  futura_actividad_privada_final: {
    pregunta: "Replica toda apertura de 'Junto al cargo público, desarrollo otra actividad' de carácter 'privada'. ",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_futura_construir: {
    pregunta: "Desde el cargo público",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "construir_social",
        texto: "El objeto social de la misma se encuentra bajo el ámbito de mi competencia ",
        siguiente: "construir_social_final"
      },
      {
        valor: "construir_cotizacion",
        texto: "La cotización de la sociedad puede verse influenciada sustancialmente por los actos que emita en razón de mi cargo ",
        siguiente: "construir_cotizacion_final"
      },
      {
        valor: "construir_competencia",
        texto: "No tengo competencia ni la cotización podría verse influenciada por mis decisiones en relación con la sociedad",
        siguiente: "construir_competencia_final"
      }
    ]
  },

  construir_social_final: {
    pregunta: "La actividad es incompatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP. ",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  construir_cotizacion_final: {
    pregunta: "La actividad es incompatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP. ",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  construir_competencia_final: {
    pregunta: "La tenencia accionaria en sí misma no trae aparejada una situación de incompatibilidad. En principio, no existe impedimento. ",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_futura_funcion_publica: {
    pregunta: "¿Vas a renunciar a tu otra actividad?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "funcion_publica_si",
        texto: "Si",
        siguiente: "siguiente_funcion_publica_si"
      },
      {
        valor: "funcion_publica_no",
        texto: "No",
        siguiente: "final_funcion_publica_no"
      }
    ]
  },

  final_funcion_publica_no: {
    pregunta: "En principio no hay incompatibilidad para GCABA. Sin embargo, tené en cuenta que tu otro cargo podría tener un régimen que sí lo establezca.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_funcion_publica_si: {
    pregunta: "En tu cargo público actual interveniste en la planificación, desarrollo o concreción de privatizaciones o concesiones de servicio público?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_siguiente_funcion_publica_si",
        texto: "Si",
        siguiente: "siguiente_siguiente_siguiente_funcion_publica_si"
      },
      {
        valor: "siguiente_funcion_publica_no",
        texto: "No",
        siguiente: "final_siguiente_funcion_publica_no"
      }
    ]
  },

  final_siguiente_funcion_publica_no: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_siguiente_siguiente_funcion_publica_si: {
    pregunta: "Han transcurrido más de 3 años desde tu última intervención en los procesos de privatización o concesión?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_siguiente_funcion_publica_si",
        texto: "Si",
        siguiente: "final_siguientex2_siguiente_funcion_publica_si"
      },
      {
        valor: "siguientex2_funcion_publica_no",
        texto: "No",
        siguiente: "siguiente_siguiente_funcion_publica_no"
      }
    ]
  },

  final_siguientex2_siguiente_funcion_publica_si: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_siguiente_funcion_publica_no: {
    pregunta: "Su cargo nuevo es en un organismo que controla o regula la entidad privatizada o regulada?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_siguiente_funcion_publica_si",
        texto: "Si",
        siguiente: "final_siguientex3_funcion_publica_no"
      },
      {
        valor: "siguientex3_funcion_publica_no",
        texto: "No",
        siguiente: "final_siguientex3_siguiente_funcion_publica_si"
      }
    ]
  },

  final_siguientex3_siguiente_funcion_publica_si: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_funcion_publica_no: {
    pregunta: "CONSULTE A LA OFIP.La ley de Integridad Pública establece que durante 3 años desde que se finalizó la función pública, los/las funcionarios/as públicos/as que hayan intervenido con capacidad decisoria en la planificación, desarrollo y concreción de privatizaciones o concesiones de servicios públicos, no pueden actuar en los organismos que controlen o regulen su actividad durante tres (3) años a contar desde la última intervención que hubieren tenido en los respectivos procesos.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  respuesta_titular_ente_regulador: {
    pregunta: "No pueden ser propietarios/as ni tener interés alguno, directo o indirecto, en empresas sujetas a su ámbito de regulación y control.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  respuesta_antes_asumir: {
    pregunta: "Desarrollé otra actividad ...",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "antes_asumir_publica",
        texto: "Pública",
        siguiente: "final_antes_asumir_publica"
      },
      {
        valor: "antes_asumir_privada",
        texto: "Privada",
        siguiente: "siguiente_antes_asumir_privada"
      }
    ]
  },

  final_antes_asumir_publica: {
    pregunta: "No se visualiza una situación de conflicto de interses o incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_antes_asumir_privada: {
    pregunta: "En el ejercicio del cargo, tomaste intervención en asuntos vinculados a las sociedades de las que fuiste socio/a o de las que formaste parte del órgano de administración o de su controlante?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_antes_asumir_privada_no",
        texto: "No",
        siguiente: "final_siguiente_antes_asumir_privada_no"
      },
      {
        valor: "siguiente_antes_asumir_privada_si",
        texto: "Si",
        siguiente: "siguientex2_antes_asumir_privada_si"
      }
    ]
  },

  final_siguiente_antes_asumir_privada_no: {
    pregunta: "No se visualiza una situación de conflicto de interses.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_antes_asumir_privada_si: {
    pregunta: "Pasaron más de 2 años de tu desvinculación de la sociedad (como socio o como miembro del órgano directivo)?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "asumir_privada_socio",
        texto: "Aún soy socio/a",
        siguiente: "final_asumir_privada_socio"
      },
      {
        valor: "asumir_privada_si_pasaron",
        texto: "Si, pasaron más de 2 años",
        siguiente: "final_asumir_privada_si_pasaron"
      },
      {
        valor: "asumir_privada_no_pasaron",
        texto: "No pasaron más de 2 años",
        siguiente: "final_asumir_privada_no_pasaron"
      }
    ]
  },

  final_asumir_privada_socio: {
    pregunta: "Si sos socio/a e interveniste desde el cargo público, tu actuación se realizó en conflicto de interés. Consultá a la OFIP para evaluar la situación.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_asumir_privada_si_pasaron: {
    pregunta: "En principio, no se visualiza una situación de conflicto de interses.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_asumir_privada_no_pasaron: {
    pregunta: "En caso de que, por tu cargo, debas tomar una decisión que involucre a esta sociedad, tenés el deber de abstenerte.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  respuesta_socio_empresa: {
    pregunta: "La empresa",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "socio_empresa_regulada",
        texto: "Está regulada o puede verse afectada en su actividad o cotización por decisiones que desde la función pública puedo tomar.",
        siguiente: "final_socio_empresa_regulada"
      },
      {
        valor: "socio_empresa_presta_servicios",
        texto: "Presta servicios, gestiona, dirije, administra, representa o patrocina a individuos/empresas/instituciones sobre los que, por mi cargo, poseo alguna competencia (sean o no decisorias).",
        siguiente: "final_socio_empresa_presta_servicios"
      },
      {
        valor: "socio_empresa_bienes",
        texto: "Provee o va a proveer bienes o servicios al organismo en el que ejerzo funciones o a las entidades que se encuentran bajo su jurisdicción.",
        siguiente: "final_socio_empresa_bienes"
      },
      {
        valor: "socio_empresa_dirije",
        texto: "Dirije, administra, representa, patrocina, asesora, presta servicios, mantiene relaciones contractuales con individuos/empresas/institución que, por el organismo en el que ejerzo mi cargo, se encuentra directamente fiscalizado.",
        siguiente: "final_socio_empresa_dirije"
      },
      {
        valor: "socio_empresa_abogado",
        texto: "Ejerce la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires.",
        siguiente: "final_socio_empresa_abogado"
      },
      {
        valor: "socio_empresa_social",
        texto: "Su objeto social es concurrente con los intereses públicos que mi cargo debo tutelar.",
        siguiente: "final_socio_empresa_social"
      },
      {
        valor: "socio_empresa_vinculacion",
        texto: "Directa o inderectamente, tiene vinculaciones con organismos o empresas de la Ciudad Autónoma de Buenos Aires.",
        siguiente: "final_socio_empresa_vinculacion"
      },
      {
        valor: "socio_empresa_actividades",
        texto: "Desempeña actividades por las cuales, en razón de mi cargo, puedo influir en las decisiones de la autoridad competente de mi jurisdicción o alterar el principio de igualdad.",
        siguiente: "final_socio_empresa_actividades"
      },
      {
        valor: "socio_empresa_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_socio_empresa_ninguna"
      }
    ]
  },

  final_socio_empresa_regulada: {
    pregunta: "Se encuentra en una situación de incompatibilidad que debe ser abordada conforme a la normativa. Sugerimos ponerse en contacto con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_presta_servicios: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_bienes: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_dirije: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_abogado: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_social: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_vinculacion: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_actividades: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_ninguna: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  respuesta_acciones_bonos: {
    pregunta: "Las acciones, bonos o cualquier otro título valor que posees fueron emitidos por",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "bonos_anonimas",
        texto: "Sociedades anónimas que hacen oferta pública o cotización de sus acciones y que su actividad se encuentra sujeta al ámbito de mi competencia o su cotización puede verse influenciada por los actos que emita.",
        siguiente: "final_bonos_anonimas"
      },
      {
        valor: "bonos_comerciales",
        texto: "Sociedades comerciales que no hacen oferta pública o cotización de sus acciones y que su actividad se encuentra sujeta al ámbito de mi competencia y por una cantidad suficiente para formar la voluntad social o controlarla por cualquier medio.",
        siguiente: "final_bonos_comerciales"
      },
      {
        valor: "bonos_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_bonos_ninguna"
      }
    ]
  },

  respuesta_acciones_bonosx2: {
    pregunta: "Las acciones, bonos o cualquier otro título valor que posees fueron emitidos por",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "bonos_anonimasx2",
        texto: "Sociedad/es anónima/s que hace/n oferta pública o cotización de sus acciones y que, a la vez, su actividad se encuentra sujeta al ámbito la competencia de mi futuro cargo o su cotización podrá verse influenciada por los actos que emitiré.",
        siguiente: "final_bonos_anonimas"
      },
      {
        valor: "bonos_comercialesx2",
        texto: "Sociedad/es comerciales que no haga/n oferta pública o cotización de sus acciones y que, a la vez, su actividad se encuentra sujeta al ámbito de la competencia de mi futuro cargo y en una cantidad suficiente para formar la voluntad social o para controlarla por cualquier otro medio.",
        siguiente: "final_bonos_comerciales"
      },
      {
        valor: "bonos_ningunax2",
        texto: "Ninguna de las anteriores",
        siguiente: "final_bonos_ninguna"
      }
    ]
  },

  final_bonos_anonimas: {
    pregunta: "Usted se encuentra en una situación de conflicto de interés actual. Comuníquese con la OFIP para proceder acorde a la normativa vigente.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_bonos_comerciales: {
    pregunta: "Usted se encuentra en una situación de conflicto de interés actual. Comuníquese con la OFIP para proceder acorde a la normativa vigente.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_bonos_ninguna: {
    pregunta: "En principio, no se visualiza una situación de conflicto de interses. Sin embargo, se le recuerda que debe excusarse y abstenerse de intervenir durante su gestión, y hasta que haya cesado la causa, en los supuestos relacionados con sociedades comerciales en las que tenga alguna participación societaria, mientras mantenga su titularidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  actividad_agente_publico: {
    pregunta: "Además de tu cargo público...",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "agente_publico_desarrollo_actividad",
        texto: "Desarrollo otra actividad",
        siguiente: "siguiente_agente_publico_desarrollo_actividad"
      },
      {
        valor: "agente_publico_previsto_desarrollar",
        texto: "Tengo previsto desarrollar otra actividad",
        siguiente: "siguiente_agente_publico_previsto_desarrollar"
      },
      {
        valor: "agente_publico_desarrolle_actividad",
        texto: "Desarrollé otra actividad antes de asumir en el cargo",
        siguiente: "siguiente_agente_publico_desarrolle_actividad"
      },
      {
        valor: "agente_publico_soy_empresa",
        texto: "Soy o voy a ser socio/a de una empresa",
        siguiente: "siguiente_agente_publico_soy_empresa"
      }
    ]
  },

  siguiente_agente_publico_soy_empresa: {
    pregunta: "La empresa",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_soy_empresa_servicios",
        texto: "Presta servicios, gestiona, dirije, administre, representa, patrocina a individuos/empresas/institución sobre los que, por mi cargo, poseo alguna competencia (sean o no decisorias)",
        siguiente: "final_siguiente_agente_publico_soy_empresa_servicios"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_bienes",
        texto: "Provee o va a proveer bienes o servicios al organismo en el que ejerzo funciones o a las entidades que se encuentran bajo su jurisdicción",
        siguiente: "final_siguiente_agente_publico_soy_empresa_bienes"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_dirije",
        texto: "Dirije, administra, representa, patrocina, asesora, presta servicios, mantiene relaciones contractuales con individuos/empresas/institución que, por el organismo en el que ejerzo mi cargo, se encuentra directamente fiscalizado",
        siguiente: "final_siguiente_agente_publico_soy_empresa_dirije"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_abogado",
        texto: "Ejerce la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires",
        siguiente: "final_siguiente_agente_publico_soy_empresa_abogado_nuevo"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_siguiente_agente_publico_soy_empresa_ninguna"
      }
    ]
  },

  final_siguiente_agente_publico_soy_empresa_abogado_nuevo: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_servicios: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_bienes: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_dirije: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_abogado: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_ninguna: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_agente_publico_desarrolle_actividad: {
    pregunta: "Actividad...",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_desarrolle_actividad_publica",
        texto: "Pública",
        siguiente: "final_siguiente_agente_publico_desarrolle_actividad_publica"
      },
      {
        valor: "siguiente_agente_publico_desarrolle_actividad_privada",
        texto: "Privada",
        siguiente: "siguientex2_agente_publico_desarrolle_actividad_privada"
      }
    ]
  },

  final_siguiente_agente_publico_desarrolle_actividad_publica: {
    pregunta: "No se visualiza una situación de conflicto de interses o incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_desarrolle_actividad_privada: {
    pregunta: "¿En el ejercicio del cargo tendrás intervención en asuntos vinculados a las sociedades de las que fuiste socio/a o de las que formaste parte del órgano de administración o de su controlante?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_agente_publico_desarrolle_actividad_privada_no",
        texto: "No",
        siguiente: "final_siguientex2_agente_publico_desarrolle_actividad_privada_no"
      },
      {
        valor: "siguientex2_agente_publico_desarrolle_actividad_privada_si",
        texto: "Si",
        siguiente: "siguientex3_agente_publico_desarrolle_actividad_privada_si"
      }
    ]
  },

  final_siguientex2_agente_publico_desarrolle_actividad_privada_no: {
    pregunta: "No se visualiza una situación de conflicto de interses",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex3_agente_publico_desarrolle_actividad_privada_si: {
    pregunta: "Pasaron más de 2 años de tu desvinculación de la sociedad (como socio o como miembro del órgano directivo)?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_agente_publico_desarrolle_actividad_privada_si_socio",
        texto: "Aún soy socio/a",
        siguiente: "final_siguientex3_agente_publico_desarrolle_actividad_privada_si_socio"
      },
      {
        valor: "siguientex3_agente_publico_desarrolle_actividad_privada_si_pasaron",
        texto: "Si, pasaron más de 2 años",
        siguiente: "final_siguientex3_agente_publico_desarrolle_actividad_privada_si_pasaron"
      },
      {
        valor: "siguientex3_agente_publico_desarrolle_actividad_privada_si_nopasaron",
        texto: "No pasaron más de 2 años",
        siguiente: "final_siguientex3_agente_publico_desarrolle_actividad_privada_si_nopasaron"
      }
    ]
  },

  final_siguientex3_agente_publico_desarrolle_actividad_privada_si_socio: {
    pregunta: "Si sos socio/a e interveniste desde el cargo público, tu actuación se realizó en conflicto de interés. Consultá a la OFIP para evaluar la situación.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_desarrolle_actividad_privada_si_pasaron: {
    pregunta: "En principio, no se visualiza una situación de conflicto de interses",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_desarrolle_actividad_privada_si_nopasaron: {
    pregunta: "El Régimen de Integridad Pública establece el deber de abstenerse de intervenir en cuestiones vinculadas a las sociedades con las que se estuvo vinculado en los últimos dos años contados desde la efectiva desvinculación.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_agente_publico_titular: {
    pregunta: "No pueden ser propietarios/as ni tener interés alguno, directo o indirecto, en empresas sujetas a su ámbito de regulación y control",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_agente_publico_previsto_desarrollar: {
    pregunta: "Además del cargo público, tengo previsto desarrollar otra actividad",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "agente_publico_previsto_desarrollar_publica",
        texto: "Función pública",
        siguiente: "siguiente_agente_publico_previsto_desarrollar_publica"
      },
      {
        valor: "agente_publico_previsto_desarrollar_privada",
        texto: "Actividad privada",
        siguiente: "siguiente_agente_publico_desarrollo_actividad_privada_institucion"
      }
    ]
  },

  siguiente_agente_publico_previsto_desarrollar_publica: {
    pregunta: "Vas a renunciar a tu otra actividad",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_previsto_desarrollar_publica_si",
        texto: "Si",
        siguiente: "siguientex2_agente_publico_previsto_desarrollar_publica_si"
      },
      {
        valor: "siguiente_agente_publico_previsto_desarrollar_publica_no",
        texto: "No",
        siguiente: "final_siguiente_agente_publico_previsto_desarrollar_publica_no_nuevo"
      }
    ]
  },

  final_siguiente_agente_publico_previsto_desarrollar_publica_no_nuevo: {
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice. Con la única excepción de la docencia.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_previsto_desarrollar_publica_no: {
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice. Con la única excepción de la docencia.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_previsto_desarrollar_publica_si: {
    pregunta: "En tu cargo público actual interveniste en la planificación, desarrollo o concreción de privatizaciones o concesiones de servicio público?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_agente_publico_previsto_desarrollar_publica_six2",
        texto: "Si",
        siguiente: "siguientex3_agente_publico_previsto_desarrollar_publica_six2"
      },
      {
        valor: "siguientex2_agente_publico_previsto_desarrollar_publica_si_no",
        texto: "No",
        siguiente: "final_siguientex2_agente_publico_previsto_desarrollar_publica_si_no_nuevo"
      }
    ]
  },

  final_siguientex2_agente_publico_previsto_desarrollar_publica_si_no_nuevo: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },
  
  final_siguientex2_agente_publico_previsto_desarrollar_publica_si_no: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },  

  siguientex3_agente_publico_previsto_desarrollar_publica_six2: {
    pregunta: "Han transcurrido más de 3 años desde tu última intervención en los procesos de privatización o concesión?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_agente_publico_previsto_desarrollar_publica_six3",
        texto: "Si",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_six3_nuevo"
      },
      {
        valor: "siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2",
        texto: "No",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2"
      }
    ]
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_six3_nuevo: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_six3: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2: {
    pregunta: "Su cargo nuevo es en un organismo que controla o regula la entidad privatizada o regulada?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_si",
        texto: "Si",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox4"
      },
      {
        valor: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox3",
        texto: "No",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_six2_nuevo"
      }
    ]
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_six2_nuevo: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_six2: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox4: {
    pregunta: "CONSULTE A LA OFIP. La ley de Integridad Pública establece que durante 3 años desde que se finalizó la función pública, los/las funcionarios/as públicos/as que hayan intervenido con capacidad decisoria en la planificación, desarrollo y concreción de privatizaciones o concesiones de servicios públicos, no pueden actuar en los organismos que controlen o regulen su actividad durante tres (3) años a contar desde la última intervención que hubieren tenido en los respectivos procesos.",
    tipo: "informativo",
    siguiente: "finalizar"
  },
  
  siguiente_agente_publico_desarrollo_actividad: {
    pregunta: "De caracter",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_publica",
        texto: "Pública",
        siguiente: "siguientex2_agente_publico_desarrollo_actividad_publica"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada",
        texto: "Privada",
        siguiente: "siguiente_agente_publico_desarrollo_actividad_privada_institucion"
      }
    ]
  },

  siguientex2_agente_publico_desarrollo_actividad_publica: {
    pregunta: "",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_publica_municipal",
        texto: "Es un empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad",
        siguiente: "final_agente_publico_desarrollo_actividad_publica_municipal"
      },
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_publica_docente",
        texto: "Ejerzo la docencia",
        siguiente: "final_agente_publico_desarrollo_actividad_publica_docente"
      }
    ]
  },

  final_agente_publico_desarrollo_actividad_publica_municipal: {
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_agente_publico_desarrollo_actividad_publica_docente: {
    pregunta: "En principio, la actividad docente que desarrollas simultaneamente no configura una incompatibilidad, siempre que no exista superposición horaria, de todos modos, se sugiere que consultes tu situación con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_agente_publico_desarrollo_actividad_privada_institucion: {
    pregunta: "En la cual",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, mantengo relaciones contractuales con individuos/empresas/instituciones.",
        siguiente: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevo"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción.",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nuevo"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires.",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nuevo"
      }
    ]
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nuevo: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nuevo: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevo: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevo_presto",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos.",
        siguiente: "final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevo_presto"
      },
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_organismo_nuevo",
        texto: "El organismo donde presto funciones lo fizcaliza directamente.",
        siguiente: "final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_organismo_nuevo"
      },
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_ninguna_nuevo",
        texto: "Ninguna de las anteriores",
        siguiente: "final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_ninguna_nuevo"
      }
    ]
  },

  final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevo_presto: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_organismo_nuevo: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_ninguna_nuevo: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatibilidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_poseo",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos.",
        siguiente: "final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_poseo"
      },
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_organismo",
        texto: "El organismo donde presto funciones lo fizcaliza directamente.",
        siguiente: "final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_poseo"
      },
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_otra_publica"
      }
    ]
  },

  final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_poseo: {
    pregunta: "Estarías realizando una actividad privada sobre la se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  // === RAMA 2: FUI FUNCIONARIO ===

  fui_funcionario: {
    pregunta: "Fue sujeto obligado a presentar declaración jurada",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "fui_si",
        texto:"Si",
        siguiente:"fui_siguiente_si"
      },
      {
        valor: "fui_no",
        texto:"No",
        siguiente:"fui_final_no"
      }
    ]
  },

  fui_final_no: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  fui_siguiente_si: {
    pregunta: "Si",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "si_desarrollo",
        texto:"Voy a desarrollar una actividad de carácter privada",
        siguiente:"fui_desarrollo_siguiente"
      },
      {
        valor: "si_designado",
        texto:"Va a ser designado/a en un nuevo cargo público",
        siguiente:"designado_siguiente"
      }
    ]
  },

  designado_siguiente: {
    pregunta: "En tu anterior cargo público interveniste en la planificación, desarrollo o concreción de privatizaciones o concesiones de servicio público?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "designado_siguiente_no",
        texto:"No",
        siguiente:"designado_final_no"
      },
      {
        valor: "designado_siguiente_si",
        texto:"Si",
        siguiente:"designado_siguientex2_si"
      }
    ]
  },

  designado_final_no: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  designado_siguientex2_si: {
    pregunta: "Han transcurrido más de 3 años desde tu última intervención en los procesos de privatización o concesión?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "designado_siguientex2_si_no",
        texto:"No",
        siguiente:"designado_siguiente_siguiente_no"
      },
      {
        valor: "designado_siguientex2_si_si",
        texto:"Si",
        siguiente:"designado_siguiente_final_si"
      }
    ]
  },

  designado_siguiente_final_si: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  designado_siguiente_siguiente_no: {
    pregunta: "¿Su cargo nuevo es en un organismo que controle o regule el entidad privatizada o regulada?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "designado_siguiente_siguiente_no_no",
        texto:"No",
        siguiente:"final_designado_siguiente_siguiente_no_no"
      },
      {
        valor: "designado_siguiente_siguiente_no_si",
        texto:"Si",
        siguiente:"final_designado_siguiente_siguiente_no_si"
      }
    ]
  },

  final_designado_siguiente_siguiente_no_no: {
    pregunta: "No hay limitación/incompatibilidad.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_designado_siguiente_siguiente_no_si: {
    pregunta: "CONSULTE A LA OFIP. La ley de Integridad Pública establece que durante 3 años desde que se finalizó la función pública, los/las funcionarios/as públicos/as que hayan intervenido con capacidad decisoria en la planificación, desarrollo y concreción de privatizaciones o concesiones de servicios públicos, no pueden actuar en los organismos que controlen o regulen su actividad durante tres (3) años a contar desde la última intervención que hubieren tenido en los respectivos procesos.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  fui_desarrollo_siguiente: {
    pregunta: "¿Tendrá un cargo directivo/gerencial en una sociedad con la que tuvo vinculación desde la función pública y/o estuvo sujeta a su control, fiscalización o regulación por parte del organismo en el que desempeñó la función pública?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "fui_desarrollo_siguiente_no",
        texto:"No",
        siguiente:"siguiente_fui_desarrollo_siguiente_no"
      },
      {
        valor: "fui_desarrollo_siguiente_si",
        texto:"Si",
        siguiente:"siguiente_fui_desarrollo_siguiente_si"
      }
    ]
  },

  siguiente_fui_desarrollo_siguiente_si: {
    pregunta: "¿Pasó un año desde que se desempeñó en la función pública?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_fui_desarrollo_siguiente_si_no",
        texto:"No",
        siguiente:"siguientex2_fui_desarrollo_siguiente_si_no"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_si_si",
        texto:"Si",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      }
    ]
  },

  final_siguiente_fui_desarrollo_siguiente_si_si: {
    pregunta: "No hay limitación/Incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_fui_desarrollo_siguiente_si_no: {
    pregunta: "¿Ud. tuvo un cargo con jerarquía igual o superior a la de Director/a General, fue máxima autoridad de un ente descentralizado y/o de una sociedad en la que la Ciudad de Buenos Aires tiene participación en un grado suficiente para determinar la voluntad social o para controlarla por cualquier otro medio?	",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_fui_desarrollo_siguiente_si_nox2",
        texto:"No",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      },
      {
        valor: "siguientex2_fui_desarrollo_siguiente_si_no_si",
        texto:"Si",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_si_no_si_nuevo"
      }
    ]
  },

  final_siguientex2_fui_desarrollo_siguiente_si_no_si_nuevo: {
    pregunta: "CONSULTA A LA OFIP. La ley de Integridad Pública prohíbe, hasta un (1) año después de su egreso del cargo ocupado en ejercicio de la función pública, tener cargos directivos o gerenciales en sociedades con las que se hubieran vinculado o que hubieran estado sujetas a su control, fiscalización o regulación.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex2_fui_desarrollo_siguiente_si_no_si: {
    pregunta: "CONSULTA A LA OFIP. La ley de Integridad Pública prohíbe, hasta un (1) año después de su egreso del cargo ocupado en ejercicio de la función pública, tener cargos directivos o gerenciales en sociedades con las que se hubieran vinculado o que hubieran estado sujetas a su control, fiscalización o regulación.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_fui_desarrollo_siguiente_no: {
    pregunta: "Esta nueva actividad implica",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_gestion",
        texto:"Realizar gestiones administrativas o representar a terceros ante el organismo donde trabajaste o ante entidades bajo tu jurisdicción.",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_gestion"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_participar",
        texto:"Participar en juicios contra la Ciudad de Buenos Aires, ya sea como abogados, peritos o de cualquier otra forma",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_participar"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_bienes",
        texto:"Vender bienes o servicios, obtener concesiones o adjudicaciones en el organismo donde trabajaste, ya sea directamente o a través de terceros",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_bienes"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_relaciones",
        texto:"Mantener relaciones contractuales con entidades directamente fiscalizadas por el organismo en que trabajaste",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_relaciones"
      }
    ]
  },

  siguientex2_fui_desarrollo_siguiente_no_gestion: {
    pregunta: "",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_gestion_no",
        texto:"No",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      },
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_gestion_si",
        texto:"Si",
        siguiente:"siguientex3_fui_desarrollo_siguiente_no_participar_si_nox2"
      }
    ]
  },

  siguientex3_fui_desarrollo_siguiente_no_gestion_si: {
    pregunta: "",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_gestion_si_no",
        texto:"No",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_si_no_si"
      },
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_gestion_six2",
        texto:"Si",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      }
    ]
  },

  siguientex2_fui_desarrollo_siguiente_no_participar: {
    pregunta: "¿Participas en juicios contra la Ciudad de Buenos Aires, ya sea como abogado, perito o de cualquier otra forma?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_participar",
        texto:"No",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      },
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_participar",
        texto:"Si",
        siguiente:"siguientex3_fui_desarrollo_siguiente_no_participar_si"
      }
    ]
  },

  siguientex3_fui_desarrollo_siguiente_no_participar_si: {
    pregunta: "¿La actividad se realizará en causa propia o en defensa de los derechos de los/las hijos/as menores no emancipados o con capacidad restringida o incapacidad o en carácter de  curador?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_participar_si_no",
        texto:"No",
        siguiente:"siguientex3_fui_desarrollo_siguiente_no_participar_si_nox2"
      },
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_participar_six2",
        texto:"Si",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      }
    ]
  },

  siguientex3_fui_desarrollo_siguiente_no_participar_si_nox2: {
    pregunta: "¿Pasó mas de 1 año desde que dejaste la función pública?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_participar_si_nox3",
        texto:"No",
        siguiente:"final_siguientex3_fui_desarrollo_siguiente_no_participar_si_nox3"
      },
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_participar_si_nox2_si",
        texto:"Si",
        siguiente:"final_siguiente_fui_desarrollo_siguiente_si_si"
      }
    ]
  },

  final_siguientex3_fui_desarrollo_siguiente_no_participar_si_nox3: {
    pregunta: "CONSULTE A LA OFIP. La ley de Integridad Pública establece que durante un año desde que se finalizó la función pública, no es posible representar, patrocinar a litigantes, ser perito o intervenir en gestiones judiciales contra la Ciudad, salvo en causa propia o en defensa de los derechos de los/las hijos/as menores no emancipados o con capacidad restringida o incapacidad o si fuera curador",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_fui_desarrollo_siguiente_no_bienes: {
    pregunta: "Vender bienes o servicios, obtener concesiones o adjudicaciones en el organismo donde trabajaste, ya sea directamente o a través de terceros",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_bienes_no",
        texto:"No",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_no_bienes_no"
      },
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_bienes_si",
        texto:"Si",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_bienes_six2"
      }
    ]
  },

  final_siguientex2_fui_desarrollo_siguiente_no_bienes_no: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_fui_desarrollo_siguiente_no_bienes_six2: {
    pregunta: "Es una prestación personal de servicios profesionales o laborales?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_bienes_six2_no",
        texto:"No",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox2"
      },
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_bienes_six3",
        texto:"Si",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_no_bienes_no"
      }
    ]
  },

  siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox2: {
    pregunta: "¿Pasó más de 1 año desde que dejaste la función pública?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox3",
        texto:"No",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox3"
      },
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox2_si",
        texto:"Si",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_no_bienes_no"
      }
    ]
  },

  final_siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox3: {
    pregunta: "CONSULTE A LA OFIP. La ley de Integridad Pública establece que durante un año desde que se finalizó la función pública, no es posible representar, patrocinar a litigantes, ser perito o intervenir en gestiones judiciales contra la Ciudad, salvo en causa propia o en defensa de los derechos de los/las hijos/as menores no emancipados o con capacidad restringida o incapacidad o si fuera curador",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_fui_desarrollo_siguiente_no_relaciones: {
    pregunta: "Mantener relaciones contractuales con entidades directamente fiscalizadas por el organismo en que trabajaste",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_relaciones_no",
        texto:"No",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_no_bienes_no"
      },
      {
        valor: "siguientex2_fui_desarrollo_siguiente_no_relaciones_si",
        texto:"Si",
        siguiente:"siguientex3_fui_desarrollo_siguiente_no_relaciones_si"
      }
    ]
  },

  siguientex3_fui_desarrollo_siguiente_no_relaciones_si: {
    pregunta: "¿Pasó más de 1 año desde que dejaste la función pública?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_relaciones_si_no",
        texto:"No",
        siguiente:"final_siguientex3_fui_desarrollo_siguiente_no_relaciones_si_no"
      },
      {
        valor: "siguientex3_fui_desarrollo_siguiente_no_relaciones_six2",
        texto:"Si",
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_no_bienes_no"
      }
    ]
  },

  final_siguientex3_fui_desarrollo_siguiente_no_relaciones_si_no: {
    pregunta: "CONSULTA A LA OFIP. La ley de Integridad Pública establece que durante un año desde que se finalizó la función pública, no es posible mantener relaciones contractuales con entidades directamente fiscalizadas por el organismo en que haya prestado funciones",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  // === RAMA 3: SERÉ FUNCIONARIO ===

  jerarquia_futura: {
    pregunta: "¿Cuál será jerarquía actual?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "f_alto_nivel",
        texto: "Funcionario/a Público/a con rango equivalente o superior a Director/a General del Poder Ejecutivo de la Ciudad, o máxima autoridad de ente descentralizado o empresa de la Ciudad",
        siguiente: "futuro_actividad_alto_cargo"
      },
      {
        valor: "fbasico",
        texto: "Agente público",
        siguiente: "futuro_actividad_agente_publico"
      }
    ]
  },

  futuro_actividad_alto_cargo: {
    pregunta: "¿Además...?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "fotra_actividad",
        texto: "Actualmente desarrollo otra actividad",
        siguiente: "futura_respuesta_otra_actividad"
      },
      {
        valor: "ffutura_actividad",
        texto: "Tengo previsto desarrollar otra actividad",
        siguiente: "futura_respuesta_futura_actividad"
      },
      {
        valor: "ftitular_ente_regulador",
        texto: "Seré titular o integrante de alguno de los órganos de Gobierno del Ente Regulador de Servicios Públicos",
        siguiente: "respuesta_titular_ente_regulador"
      },
      {
        valor: "fantes_asumir",
        texto: "Desarrollé otra actividad antes de asumir en el cargo",
        siguiente: "respuesta_antes_asumir"
      },
      {
        valor: "fsocio_empresa",
        texto: "Soy o tengo previsto ser socio/a de una empresa",
        siguiente: "respuesta_socio_empresa"
      },
      {
        valor: "facciones_bonos",
        texto: "Soy titular de acciones, bonos o cualquier otro título valor emitido por sociedad/es",
        siguiente: "respuesta_acciones_bonosx2"
      }
    ]
  },

  futura_respuesta_otra_actividad: {
    pregunta: "De caracter",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "fotra_actividad_publica",
        texto: "Pública",
        siguiente: "fotra_actividad_publica_respuesta_rama"
      },
      {
        valor: "fotra_actividad_privada",
        texto: "Privada",
        siguiente: "siguiente_privada_empresa"
      }
    ]
  },

  fotra_actividad_publica_respuesta_rama: {
    pregunta: "",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "fotra_actividad_publica_respuesta_rama_1",
        texto: "Es un empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad",
        siguiente: "final_fotra_actividad_publica_respuesta_rama_1"
      },
      {
        valor: "fotra_actividad_publica_respuesta_rama_2",
        texto: "Ejerzo la docencia",
        siguiente: "final_fotra_actividad_publica_respuesta_rama_2"
      }
    ]
  },

  final_fotra_actividad_publica_respuesta_rama_1: {
    pregunta: "En principio no hay incompatibilidad para GCABA. Sin embargo, tené en cuenta que tu otro cargo podría tener un régimen que sí lo establezca.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_fotra_actividad_publica_respuesta_rama_2: {
    pregunta: "En principio, la actividad docente que desarrollas simultáneamente no configura una incompatibilidad, de todos modos, se sugiere que consultes tu situación con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  futura_respuesta_otra_publica: {
    pregunta: "¿Vas a renunciar?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "ffutura_respuesta_otra_publica_si",
        texto: "Si",
        siguiente: "final_futura_respuesta_otra_publica_si"
      },
      {
        valor: "ffutura_respuesta_otra_publica_no",
        texto: "No",
        siguiente: "final_futura_respuesta_otra_publica_no"
      }
    ]
  },

  final_futura_respuesta_otra_publica_si: {
    pregunta: "En principio no habría incompatibilidad, pero tené en cuenta que no podrás desde tu cargo nuevo controlar o fiscalizar tu gestión anterior. Ante la duda consultá a la  OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_futura_respuesta_otra_publica_no: {
    pregunta: "En principio no hay incompatibilidad para GCABA pero, en relación a otros regímenes publicos, podría configurarse alguna incompatibilidad. Se recomienda consultar con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  futura_respuesta_futura_actividad:{
    pregunta: "Además del cargo público, tengo previsto desarrollar otra actividad",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "futura_futura_construir",
        texto: "Voy a constituir una sociedad o a adquirir participación en una existente",
        siguiente: "siguiente_futura_construir"
      },
      {
        valor: "futura_futura_actividad_privada",
        texto: "Otra actividad privada",
        siguiente: "siguiente_futura_futura_actividad_privada"
      }
    ]
  },

  siguiente_futura_futura_actividad_privada: {
    pregunta: "En la cual",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"privada_individual_socio",
        texto: "Soy socio/a, asociado/a, directivo/a, presto servicios a instituciones no estatales dedicadas a la defensa o representación de intereses económicos sectoriales",
        siguiente: "siguiente_privada_socio"
      },
      {
        valor:"privada_individual_servicios_nuevo",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, ejerzo profesión liberal, mantengo relaciones contractuales con individuos/empresas/instituciones",
        siguiente: "siguiente_privada_individual_servicios_nuevo"
      },
      {
        valor:"privada_individual_bienes_nuevo",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción",
        siguiente: "final_privada_individual_bienes_nuevo"
      },
      {
        valor:"privada_individual_abogacia",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires",
        siguiente: "final_privada_abogacia"
      },
      {
        valor:"privada_individual_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_privada_ninguna"
      }
    ]
  },

  siguiente_privada_individual_servicios_nuevo: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"poseo_siguiente_privada_individual_servicios_nuevo",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos",
        siguiente: "final_siguiente_privada_individual_servicios_nuevo"
      },
      {
        valor:"organismo_siguiente_privada_individual_servicios_nuevo",
        texto: "El organismo donde presto funciones lo fizcaliza directamente",
        siguiente: "final_siguiente_privada_individual_servicios_nuevo"
      },
      {
        valor:"influir_siguiente_privada_individual_servicios_nuevo",
        texto: "Puedo influir en la decisión de la autoridad de mi jurisdicción o alterar el principio de igualdad ante la ley",
        siguiente: "final_siguiente_privada_individual_servicios_nuevo"
      },
      {
        valor:"ninguna_siguiente_privada_individual_servicios_nuevo",
        texto: "Ninguna de las anteriores",
        siguiente: "siguiente_ninguna_siguiente_privada_individual_servicios_nuevo"
      }
    ]
  },

  siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: {
    pregunta: "En esa actividad ¿Tenés vinculaciones con organismos o empresas de la Ciudad?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo",
        texto: "Si",
        siguiente: "siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo"
      },
      {
        valor:"no_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo",
        texto: "No",
        siguiente: "final_no_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo"
      }
    ]
  },

  siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: {
    pregunta: "¿Es una actividad docente?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"si_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo",
        texto: "Si",
        siguiente: "final_si_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo"
      },
      {
        valor:"no_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo",
        texto: "No",
        siguiente: "final_no_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo"
      }
    ]
  },

  final_si_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: {
    pregunta: "En principio, la actividad docente es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_no_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatibilidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_no_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_privada_individual_servicios_nuevo: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatibilidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_privada_individual_bienes_nuevo: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatibilidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  futuro_actividad_agente_publico: {
    pregunta: "Además...",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "futuro_agente_publico_desarrollo_actividad",
        texto: "Desarrollo otra actividad",
        siguiente: "futuro_siguiente_agente_publico_desarrollo_actividad"
      },
      {
        valor: "futuro_agente_publico_previsto_desarrollar",
        texto: "Tengo previsto desarrollar otra actividad",
        siguiente: "siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "futuro_agente_publico_desarrolle_actividad",
        texto: "Anteriormente desarrollé otra actividad",
        siguiente: "siguiente_agente_publico_desarrolle_actividad"
      },
      {
        valor: "futuro_agente_publico_soy_empresa",
        texto: "Soy o voy a ser socio/a de una empresa",
        siguiente: "siguiente_agente_publico_soy_empresa"
      }
    ]
  },

  siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "En la cual",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, mantengo relaciones contractuales con individuos/empresas/instituciones.",
        siguiente: "nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "proveo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción.",
        siguiente: "nuevo_final_proveo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "ejerzo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires.",
        siguiente: "nuevo_final_ejerzo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "ninguna_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Ninguna de las anteriores.",
        siguiente: "nuevo_final_ninguna_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      }
    ]
  },

  nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "nuevo_poseo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos.",
        siguiente: "final_nuevo_poseo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "nuevo_organismo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "El organismo donde presto funciones lo fizcaliza directamente.",
        siguiente: "final_nuevo_organismo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "nuevo_ninguno_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Ninguna de las anteriores.",
        siguiente: "final_nuevo_ninguno_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      }
    ]
  },

  final_nuevo_poseo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_nuevo_organismo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_nuevo_ninguno_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nuevo_final_proveo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nuevo_final_ejerzo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nuevo_final_ninguna_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "poseo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos.",
        siguiente: "final_poseo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "proveo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "El organismo donde presto funciones lo fizcaliza directamente.",
        siguiente: "final_proveo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
      {
        valor: "ejerzo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar",
        texto: "Ninguna de las anteriores.",
        siguiente: "final_ejerzo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar"
      },
    ]
  },

  final_poseo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_proveo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_ejerzo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_proveo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_ejerzo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible .",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_ninguna_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  futuro_siguiente_agente_publico_desarrollo_actividad: {
    pregunta: "De caracter",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "futuro_siguiente_agente_publico_desarrollo_actividad_publica",
        texto: "Pública",
        siguiente: "futuro_siguientex2_agente_publico_desarrollo_actividad_publica"
      },
      {
        valor: "futuro_siguiente_agente_publico_desarrollo_actividad_privada",
        texto: "Privada",
        siguiente: "futuro_siguiente_agente_publico_desarrollo_actividad_privada_nueva"
      }
    ]
  },

  futuro_siguiente_agente_publico_desarrollo_actividad_privada_nueva: {
    pregunta: "En la cual",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, mantengo relaciones contractuales con individuos/empresas/instituciones.",
        siguiente: "nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nueva",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción.",
        siguiente: "nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nueva"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nueva",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires.",
        siguiente: "nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nueva"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nueva",
        texto: "Ninguna de las anteriores",
        siguiente: "nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nueva"
      }
    ]
  },

  nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "poseo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos.",
        siguiente: "final_poseo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva"
      },
      {
        valor: "organismo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva",
        texto: "El organismo donde presto funciones lo fizcaliza directamente.",
        siguiente: "final_organismo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva"
      },
      {
        valor: "ninguna_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva",
        texto: "Ninguna de las anteriores.",
        siguiente: "final_ninguna_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva"
      }
    ]
  },

  final_poseo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_organismo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_ninguna_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nueva: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nueva: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nueva: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevax2: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevax2",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos.",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevax2"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nuevax2",
        texto: "El organismo donde presto funciones lo fizcaliza directamente.",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nuevax2"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nuevax2",
        texto: "Ninguna de las anteriores",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nuevax2"
      },
    ]
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevax2: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nuevax2: {
    pregunta: "Estarías realizando una actividad privada sobre la cual se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nuevax2: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nueva: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  futuro_siguientex2_agente_publico_desarrollo_actividad_publica: {
    pregunta: "¿Vas a renunciar?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "futuro_siguientex2_agente_publico_desarrollo_actividad_publica_si",
        texto: "Si",
        siguiente: "final_futuro_siguientex2_agente_publico_desarrollo_actividad_publica_si"
      },
      {
        valor: "futuro_siguientex2_agente_publico_desarrollo_actividad_publica_no",
        texto: "No",
        siguiente: "final_futuro_siguientex2_agente_publico_desarrollo_actividad_publica_no"
      }
    ]
  },

  final_futuro_siguientex2_agente_publico_desarrollo_actividad_publica_si: {
    pregunta: "En principio no habría incompatibilidad, pero tené en cuenta que no podrás desde tu cargo nuevo controlar o fiscalizar tu gestión anterior. Ante la duda consultá a la  OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_futuro_siguientex2_agente_publico_desarrollo_actividad_publica_no: {
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice. Con la única excepción de la docencia.",
    tipo: "informativo",
    siguiente: "finalizar"
  },
}

// ===================
// VARIABLES DE ESTADO
// ===================
// let pasoActual = null; // Eliminado para evitar redeclaración
let temporizador = null;
let segundos = 0;
let nombreUsuario = "";
let respuestas = {};
let tokenUsuario = "";

// ===================
// ELEMENTOS DEL DOM
// ===================
const preguntaContainer = document.getElementById("pregunta-container");
const resultadoDiv = document.getElementById("resultado");
const btnInicio = document.getElementById("btn-inicio");
const contadorDiv = document.createElement("div");

// Agregar contador al DOM
contadorDiv.id = "contador";
contadorDiv.style.fontSize = "0.9em";
contadorDiv.style.color = "#666";
contadorDiv.style.marginTop = "10px";
contadorDiv.style.textAlign = "right";
contadorDiv.classList.add("oculto");
document.querySelector(".container").appendChild(contadorDiv);

// ===================
// FUNCIONES
// ===================

// Generar token único (8 caracteres)
function generarToken() {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
}

// Formatear tiempo: segundos → mm:ss
function formatearTiempo(seg) {
  const mins = Math.floor(seg / 60);
  const secs = seg % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Iniciar simulador
btnInicio.addEventListener("click", () => {
  if (btnInicio.textContent.includes("Iniciar") || btnInicio.textContent.includes("Volver")) {
    pasoActual = "inicio"; // ← Cambiado: ahora empieza directamente en "inicio"
    segundos = 0;
    respuestas = {};
    tokenUsuario = generarToken();
    contadorDiv.classList.remove("oculto");
    contadorDiv.textContent = `Tiempo: 00:00`;
    if (temporizador) clearInterval(temporizador);
    temporizador = setInterval(() => {
      segundos++;
      contadorDiv.textContent = `Tiempo: ${formatearTiempo(segundos)}`;
    }, 1000);
    btnInicio.classList.add("oculto");
    resultadoDiv.classList.add("oculto");
    preguntaContainer.innerHTML = "";
    mostrarPregunta(pasoActual);
  }
});

// Mostrar una pregunta
function mostrarPregunta(id) {
  const nodo = flujo[id];
  if (!nodo) return;

  // === MAPEO EXPLÍCITO DE COLORES POR ID DE NODO FINAL ===
  // Basado 100% en tu clasificación textual y en el contenido del flujo
  const coloresPorId = {
    // === ROJO ===
    final_privada_abogacia: "rojo",
    final_privada_bienes: "rojo",
    construir_social_final: "rojo",
    construir_cotizacion_final: "rojo",
    respuesta_titular_ente_regulador: "rojo",
    final_socio_empresa_regulada: "rojo",
    final_socio_empresa_abogado: "rojo",
    final_bonos_anonimas: "rojo",
    final_bonos_comerciales: "rojo",
    final_asumir_privada_no_pasaron: "rojo",
    final_siguientex3_agente_publico_desarrolle_actividad_privada_si_nopasaron: "rojo",
    final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia: "rojo",
    final_ejerzo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "rojo",
    final_siguiente_fui_desarrollo_siguiente_no_bienes_six2_nox3: "rojo",
    final_competencia_art26: "rojo",
    final_organismo_art26: "rojo",
    final_influencia_art27: "rojo",
    final_nuevo_poseo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "rojo",
    final_nuevo_organismo_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "rojo",
    nuevo_final_proveo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "rojo",
    nuevo_final_ejerzo_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "rojo",
    final_organismo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: "rojo",
    final_poseo_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: "rojo",
    nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nueva: "rojo",
    nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nueva: "rojo",
    final_siguiente_agente_publico_soy_empresa_abogado_nuevo: "rojo",
    final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_nuevo_presto: "rojo",
    final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_organismo_nuevo: "rojo",
    final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes_nuevo: "rojo",
    final_siguiente_agente_publico_previsto_desarrollar_publica_no_nuevo: "rojo",

    // === AMARILLO ===
    final_siguientex3_fui_desarrollo_siguiente_no_participar_si_nox3: "amarillo",
    final_designado_siguiente_siguiente_no_si: "amarillo",
    final_nuevo_ninguno_nuevo_siguiente_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "amarillo",
    nuevo_final_ninguna_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "amarillo",
    final_ninguna_nuevo_siguiente_siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios_nueva: "amarillo",
    final_siguiente_privada_individual_servicios_nuevo: "amarillo",
    final_privada_individual_bienes_nuevo: "amarillo",
    final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox4: "amarillo",
    final_siguientex3_funcion_publica_no: "amarillo",
    final_siguientex2_fui_desarrollo_siguiente_no_bienes_six2_nox3: "amarillo",
    final_siguientex3_fui_desarrollo_siguiente_no_relaciones_si_no: "amarillo",
    final_siguientex2_fui_desarrollo_siguiente_si_no_si_nuevo: "amarillo",
    final_siguientex2_fui_desarrollo_siguiente_si_no_si: "amarillo",
    final_socio_empresa_presta_servicios: "amarillo",
    final_siguiente_fui_desarrollo_siguiente_si_si: "amarillo",
    final_socio_empresa_bienes: "amarillo",
    siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nuevo: "amarillo",
    final_socio_empresa_dirije: "amarillo",
    final_socio_empresa_social: "amarillo",
    final_socio_empresa_vinculacion: "amarillo",
    final_socio_empresa_actividades: "amarillo",
    final_siguiente_agente_publico_soy_empresa_servicios: "amarillo",
    final_siguiente_agente_publico_soy_empresa_bienes: "amarillo",
    final_siguiente_agente_publico_soy_empresa_dirije: "amarillo",
    final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes: "amarillo",
    final_negocio_docente_no: "amarillo",
    final_asumir_privada_socio: "amarillo",
    nuevo_final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nueva: "amarillo",
    final_no_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: "amarillo",
    final_siguiente_agente_publico_previsto_desarrollar_publica_no: "amarillo",
    final_agente_publico_desarrollo_actividad_publica_municipal: "amarillo",
    final_futura_respuesta_otra_publica_no: "amarillo",
    final_futuro_siguientex2_agente_publico_desarrollo_actividad_publica_no: "amarillo",
    final_agente_publico_desarrollo_actividad_publica_docente: "amarillo",
    final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_ninguna_nuevo: "amarillo",

    // === VERDE ===
    final_otra_publica: "verde",
    final_si_siguiente_si_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: "verde",
    final_no_siguiente_ninguna_siguiente_privada_individual_servicios_nuevo: "verde",
    final_otra_publica_docencia: "verde",
    final_privada_individual: "verde",
    final_privada_ninguna: "verde",
    final_socio_no: "verde",
    final_negocio_no: "verde",
    final_negocio_docente_si: "verde",
    final_socio_empresa_ninguna: "verde",
    final_siguiente_agente_publico_soy_empresa_ninguna: "verde",
    final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia_nuevax2: "verde",
    final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna_nueva: "verde",
    final_ejerzo_nueva_presto_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "verde",
    final_ninguna_siguiente_nueva_futuro_agente_publico_previsto_desarrollar: "verde",
    final_futura_respuesta_otra_publica_si: "verde",
    final_futuro_siguientex2_agente_publico_desarrollo_actividad_publica_si: "verde",
    final_siguiente_funcion_publica_no: "verde",
    final_siguientex2_siguiente_funcion_publica_si: "verde",
    final_siguientex3_siguiente_funcion_publica_si: "verde",
    final_antes_asumir_publica: "verde",
    final_siguiente_antes_asumir_privada_no: "verde",
    final_asumir_privada_si_pasaron: "verde",
    final_bonos_ninguna: "verde",
    final_siguiente_agente_publico_desarrolle_actividad_publica: "verde",
    final_siguientex2_agente_publico_desarrolle_actividad_privada_no: "verde",
    final_siguientex3_agente_publico_desarrolle_actividad_privada_si_pasaron: "verde",
    fui_final_no: "verde",
    designado_final_no: "verde",
    designado_siguiente_final_si: "verde",
    final_designado_siguiente_siguiente_no_no: "verde",
    final_siguiente_fui_desarrollo_siguiente_si_si: "verde",
    final_siguientex2_fui_desarrollo_siguiente_no_bienes_no: "verde",
    final_fotra_actividad_publica_respuesta_rama_1: "verde",
    final_fotra_actividad_publica_respuesta_rama_2: "verde",
    final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_six2_nuevo: "verde",
    final_siguientex3_agente_publico_previsto_desarrollar_publica_six3_nuevo: "verde",
    final_siguientex2_agente_publico_previsto_desarrollar_publica_si_no_nuevo: "verde",
    construir_competencia_final: "verde"
  };

  // Manejo del nodo final
  if (nodo.tipo === "final") {
    clearInterval(temporizador);
    mostrarResultado(nodo.pregunta);
    return;
  }

  // Generar breadcrumb
  const breadcrumbHTML = generarBreadcrumb();

  // Si es un nodo informativo cuyo siguiente es 'finalizar'
  if (nodo.tipo === "informativo" && nodo.siguiente === "finalizar") {
    let claseAlerta = "alerta-amarillo"; // fallback

    const color = coloresPorId[id];
    if (color === "verde") {
      claseAlerta = "alerta-verde";
    } else if (color === "rojo") {
      claseAlerta = "alerta-rojo";
    } else if (color === "amarillo") {
      claseAlerta = "alerta-amarillo";
    }

    const mensajeConContacto = `${nodo.pregunta}<br><br>Para consultas, contactá a la OFIP: <a href="mailto:ofip@buenosaires.gob.ar">ofip@buenosaires.gob.ar</a>`;
    preguntaContainer.innerHTML = `
      ${breadcrumbHTML}
      <div class="${claseAlerta}">
        <strong>${mensajeConContacto}</strong>
      </div>
      <div style="display: flex; justify-content: center; margin-top: 20px;">
        <button onclick="reiniciarEncuesta()" class="btn btn-inicio">🔄 Volver a comenzar</button>
      </div>
    `;
    return;
  }

  // Determinar si se debe mostrar el botón Atrás
  let mostrarAtras = id !== "inicio";
  const opcionesHTML = nodo.opciones
    ? nodo.opciones.map(op => 
        `<button onclick="irA('${op.siguiente}', '${op.valor}', '${nodo.pregunta}', '${op.texto}')">${op.texto}</button>`
      ).join('')
    : "";

  preguntaContainer.innerHTML = `
    ${breadcrumbHTML}
    <p><strong>${nodo.pregunta}</strong></p>
    ${nodo.opciones ? `<div class="opciones">${opcionesHTML}</div>` : ""}
    ${mostrarAtras ? `<div style="margin-top:24px;text-align:center;"><button onclick="volverAtras()" class="btn btn-atras">⬅️ Atrás</button></div>` : ""}
  `;
}

// Ir a siguiente paso
function irA(proximo, valor = null, preguntaTexto = "", respuestaTexto = "") {
  if (preguntaTexto && respuestaTexto) {
    // Guardamos usando el ID del nodo actual como clave
    respuestas[pasoActual] = {
      pregunta: preguntaTexto,
      respuesta: respuestaTexto
    };
  }
  if (proximo) {
    historial.push(pasoActual); // Guarda el paso actual ANTES de cambiarlo
    pasoActual = proximo;
    mostrarPregunta(proximo);
  }
}

// Volver al paso anterior
function volverAtras() {
  if (historial.length > 0) {
    // 1. Obtener el ID del paso al que se va a retroceder (el último en el historial)
    const pasoAnterior = historial[historial.length - 1];

    // 2. Eliminar la respuesta asociada a ese paso anterior del objeto `respuestas`
    //    Esto borra la respuesta que se dio *para ir desde pasoAnterior a pasoActual*
    delete respuestas[pasoAnterior];

    // 3. Actualizar pasoActual al valor obtenido
    pasoActual = historial.pop(); // pop() también lo remueve del historial

    // 4. Mostrar la pregunta del paso al que se retrocedió
    mostrarPregunta(pasoActual);
  }
}

// Generar breadcrumb
function generarBreadcrumb() {
  let breadcrumb = "<div class='breadcrumb' style='font-size:0.9em; color:#555; margin-bottom:16px; padding:8px; background:#f9f9f9; border-radius:4px;'>";
  breadcrumb += "<strong>Tu recorrido:</strong> ";

  // Filtramos historial para excluir nodos informativos finales y nodos sin respuesta
  const pasos = historial.filter(id => {
    const nodo = flujo[id];
    const tieneRespuesta = respuestas[id] !== undefined && respuestas[id] !== null;
    return nodo && !(nodo.tipo === "informativo" && nodo.siguiente === "finalizar") && tieneRespuesta;
  });

  const nodoActual = flujo[pasoActual];
  const pasoActualTieneRespuesta = respuestas[pasoActual] !== undefined && respuestas[pasoActual] !== null;

  if (nodoActual && !(nodoActual.tipo === "informativo" && nodoActual.siguiente === "finalizar") && pasoActualTieneRespuesta) {
    pasos.push(pasoActual);
  }

  if (pasos.length === 0) {
    breadcrumb += "—";
  } else {
    const items = pasos.map(id => respuestas[id].respuesta);
    breadcrumb += items.join(" → ");
  }

  breadcrumb += "</div>";
  return breadcrumb;
}

// Mostrar resultado final
function mostrarResultado(mensaje) {
  let respuestasHTML = "<h3>Respuestas:</h3><ul>";
  for (let preg in respuestas) {
    respuestasHTML += `<li><strong>${preg}</strong>: ${respuestas[preg]}</li>`;
  }
  respuestasHTML += "</ul>";
  const tiempoTotal = formatearTiempo(segundos);
  preguntaContainer.innerHTML = "";
  resultadoDiv.innerHTML = `
    <h3>Resultado</h3>
    <p><strong>Conclusión:</strong> ${mensaje}</p>
    ${respuestasHTML}
    <p><strong>Tiempo total: ${tiempoTotal}</strong></p>
    <button onclick="reiniciarEncuesta()" class="btn-csv">🔄 Volver a comenzar</button>
  `;
  resultadoDiv.classList.remove("oculto");
  btnInicio.textContent = "Volver a empezar";
  btnInicio.classList.remove("oculto");
}

// Reiniciar Encuesta
function reiniciarEncuesta() {
  pasoActual = "inicio";
  segundos = 0;
  respuestas = {};
  historial = [];
  tokenUsuario = generarToken();
  contadorDiv.classList.remove("oculto");
  contadorDiv.textContent = `Tiempo: 00:00`;
  if (temporizador) clearInterval(temporizador);
  temporizador = setInterval(() => {
    segundos++;
    contadorDiv.textContent = `Tiempo: ${formatearTiempo(segundos)}`;
  }, 1000);
  btnInicio.classList.add("oculto");
  resultadoDiv.classList.add("oculto");
  preguntaContainer.innerHTML = "";
  mostrarPregunta(pasoActual);
}