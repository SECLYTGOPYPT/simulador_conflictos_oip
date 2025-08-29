const flujo = {
  inicio: {
    pregunta: "¿Cuál es tu situación actual?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "soy_funcionario",
        texto: "Soy funcionario",
        siguiente: "jerarquia_actual"
      },
      {
        valor: "fui_funcionario",
        texto: "Fui funcionario",
        siguiente: "fui_funcionario"
      },
      {
        valor: "voy_a_ser_designado",
        texto: "Voy a ser designado en un nuevo cargo público",
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
        texto: "Equivalente o Superior a Director General del Poder Ejecutivo de la Ciudad, o máxima autoridad de Ente Descentralizado o Sociedad de la Ciudad",
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
        texto: "Soy titular o integrante de alguno de los órganos de Gobierno del Ente Regulador de Servicios Públicos (art. 28)",
        siguiente: "respuesta_titular_ente_regulador"
      },
      {
        valor: "antes_asumir",
        texto: "Desarrollé otra actividad antes de asumir en el cargo",
        siguiente: "respuesta_antes_asumir"
      },
      {
        valor: "socio_empresa",
        texto: "Soy o voy a ser socio de una empresa",
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
        siguiente: "respuesta_otra_publica"
      },
      {
        valor: "otra_actividad_privada",
        texto: "Privada",
        siguiente: "respuesta_otra_privada"
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
    pregunta: "En principio no hay incompatibilidad para GCABA pero, en relación a otros regímenes publicos, podría configurarse alguna incompatibilidad. Se recomienda consultar con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_otra_publica_docencia: {
    pregunta: "En principio, la actividad docente que desarrollas simultaneamente no configura un conflicto de intereses, de todos modos, se sugiere que consultes tu situación con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  respuesta_otra_privada: {
    pregunta: "Privada",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "otra_actividad_privada_empresa",
        texto: "Es en una empresa y/o institución privada",
        siguiente: "siguiente_privada_empresa"
      },
      {
        valor: "otra_actividad_privada_individual",
        texto: "En forma autónoma, individual, personal o independiente",
        siguiente: "siguiente_privada_individual"
      }
    ]
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
    pregunta: "En ella",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"privada_individual_negocio",
        texto: "Ejerzo negocio, empresa, actividad comercial o profesión liberal (de cualquier naturaleza) (art. 27 inc. a)",
        siguiente: "siguiente_privada_negocio"
      },
      {
        valor:"privada_individual_socio",
        texto: "Soy socio, asociado, directivo, presto servicios a instituciones no estatales dedicadas a la defensa o representación de intereses económicos sectoriales (art. 27 inc. c)",
        siguiente: "siguiente_privada_socio"
      },
      {
        valor:"privada_individual_servicios",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, ejerzo profesión liberal, mantengo relaciones contractuales con individuos/empresas/instituciones art. 26 inc. A - inc. C - art. 27 inc. b",
        siguiente: "siguiente_privada_servicios"
      },
      {
        valor:"privada_individual_bienes",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción art. 26 inc. b",
        siguiente: "final_privada_bienes"
      },
      {
        valor:"privada_individual_abogacia",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires art. 26 inc. d",
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
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudiicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_privada_bienes: {
    pregunta: "Estás ante una incompatibilidad. Consultá tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_privada_servicios: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor:"competencia_art26",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos. art. 26 inc. a",
        siguiente: "final_competencia_art26"
      },
      {
        valor:"organismo_art26",
        texto: "El organismo donde presto funciones lo fizcaliza directamente. art. 26 inc. c",
        siguiente: "final_organismo_art26"
      },
      {
        valor:"influencia_art27",
        texto: "Puedo influir en la decisión de la autoridad de mi jurisdicción o alterar el principio de igualdad ante la ley. art. 27 inc. b",
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
    pregunta: "Estarías realizando una actividad privada sobre la se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_organismo_art26: {
    pregunta: "Estarías realizando una actividad privada sobre la se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_influencia_art27: {
    pregunta: "Estarías realizando una actividad privada sobre la se configura una incompatiblidad. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_servicios_ninguna: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
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
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure un conflicto de interés. Te recomendamos consultar tu situación en la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_no: {
    pregunta: "En principio, la actividad es compatible con el ejercicio de la función pública. Igualmente, se sugiere que consultes con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_privada_negocio: {
    pregunta: "En esa actividad ¿Tenés vinculaciones con organismos o empresas de la ciudad?",
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
        texto: "Voy a construir una sociedad o a adquirir participación en una existente (art. 27 inc. d)",
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
        siguiente: "respuesta_otra_privada"
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
    pregunta: "En principio no hay incompatibilidad para GCABA pero, en relación a otros regímenes publicos, podría configurarse alguna incompatibilidad. Se recomienda consultar con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_funcion_publica_si: {
    pregunta: "En tu cargo público actual interveniste en la planificación, desarrollo o concreción de privatizaciones o concesiones de servicio público? art. 50",
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
    pregunta: "Su cargo nuevo es en un organismo que controla o regula la entidad privatizada o regulada? art. 50",
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
    pregunta: "No se visualiza una situación de conflicto de interses pueden ser propietarios/as ni tener interés alguno, directo o indirecto, en empresas sujetas a su ámbito de regulación y control.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_antes_asumir_privada: {
    pregunta: "En el ejercicio del cargo, tomaste intervención en asuntos vinculados a las sociedades de las que fuiste socio/a o de las que formaste parte del órgano de administración o de su controlante? (art.37 inc. a y b)",
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
        texto: "Aún soy socio",
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
    pregunta: "Si sos socio e interveniste desde el cargo público, tu actuación se realizó en conflicto de interés. Consultá a la OIP para evaluar la situación.",
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
        texto: "Está regulada o puede verse afectada en su actividad o cotización por decisiones que desde la función pública puedo tomar (art. 27 inc. d)",
        siguiente: "final_socio_empresa_regulada"
      },
      {
        valor: "socio_empresa_presta_servicios",
        texto: "Presta servicios, gestiona, dirije, administra, representa o patrocina a individuos/empresas/instituciones sobre los que, por mi cargo, poseo alguna competencia (sean o no decisorias) art. 26 inc. a",
        siguiente: "final_socio_empresa_presta_servicios"
      },
      {
        valor: "socio_empresa_bienes",
        texto: "Provee o va a proveer bienes o servicios al organismo en el que ejerzo funciones o a las entidades que se encuentran bajo su jurisdicción (art. 26 inc.b)",
        siguiente: "final_socio_empresa_bienes"
      },
      {
        valor: "socio_empresa_dirije",
        texto: "Dirije, administra, representa, patrocina, asesora, presta servicios, mantiene relaciones contractuales con individuos/empresas/institución que, por el organismo en el que ejerzo mi cargo, se encuentra directamente fiscalizado art. 26 inc. c",
        siguiente: "final_socio_empresa_dirije"
      },
      {
        valor: "socio_empresa_abogado",
        texto: "Ejerce la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires art. 26 inc. d",
        siguiente: "final_socio_empresa_abogado"
      },
      {
        valor: "socio_empresa_social",
        texto: "Su objeto social es concurrente con los intereses públicos que mi cargo debo tutelar (art. 27 inc. c)",
        siguiente: "final_socio_empresa_social"
      },
      {
        valor: "socio_empresa_vinculacion",
        texto: "Directa o inderectamente, tiene vinculaciones con organismos o empresas de la Ciudad Autónoma de Buenos Aires (art. 27 inc. a)",
        siguiente: "final_socio_empresa_vinculacion"
      },
      {
        valor: "socio_empresa_actividades",
        texto: "Desempeña actividades por las cuales, en razón de mi cargo, puedo influir en las decisiones de la autoridad competente de mi jurisdicción o alterar el principio de igualdad. art. 27. inc. b",
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
    pregunta: "Se encuentra en una situación de conflicto de Interes que debe ser abordada conforme a la normativa, ya sea enajenando su participación societaria o constituyendo un fideicomiso. Sugerimos ponerse en contacto con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_presta_servicios: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_bienes: {
    pregunta: "Usted se encuentra realizando una actividad incompatible con la función pública que cumple. Comuníquese con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_dirije: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_abogado: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudiicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_social: {
    pregunta: "Usted se encuentra realizando una actividad incompatible con la función pública que cumple. Comuníquese con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_vinculacion: {
    pregunta: "Usted se encuentra realizando una actividad incompatible con la función pública que cumple. Comuníquese con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_socio_empresa_actividades: {
    pregunta: "Usted se encuentra realizando una actividad incompatible con la función pública que cumple. Comuníquese con la OFIP",
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
        texto: "Sociedades anónimas que hacen oferta pública o cotización de sus acciones y que su actividad se encuentra sujeta al ámbito de mi competencia o su cotización puede verse influenciada por los actos que emita. art. 30 inc. a",
        siguiente: "final_bonos_anonimas"
      },
      {
        valor: "bonos_comerciales",
        texto: "Sociedades comerciales que no hacen oferta pública o cotización de sus acciones y que su actividad se encuentra sujeta al ámbito de mi competencia y por una cantidad suficiente para formar la voluntad social o controlarla por cualquier medio. art. 30 inc. b",
        siguiente: "final_bonos_comerciales"
      },
      {
        valor: "bonos_ninguna",
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
    pregunta: "En principio, no se visualiza una situación de conflicto de interses. Sin embargo, se le recuerda que debe excusarse y abstenerse de intervenir durante su gestión, y hasta que haya cesado la causa, en los supuestos relacionados con sociedades comerciales en las que tenga alguna participación societaria, mientras mantenga su titularidad. art. 37 inc. a",
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
        valor: "agente_publico_titular",
        texto: "Soy titular o integrante de alguno de los órganos de gobierno del Ente Regulador de Servicios Públicos (art. 28)",
        siguiente: "final_agente_publico_titular"
      },
      {
        valor: "agente_publico_desarrolle_actividad",
        texto: "Desarrollé otra actividad antes de asumir en el cargo",
        siguiente: "siguiente_agente_publico_desarrolle_actividad"
      },
      {
        valor: "agente_publico_soy_empresa",
        texto: "Soy o voy a ser socio de una empresa",
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
        texto: "Presta servicios, gestiona, dirije, administre, representa, patrocina a individuos/empresas/institución sobre los que, por mi cargo, poseo alguna competencia (sean o no decisorias) art. 26 inc. a",
        siguiente: "final_siguiente_agente_publico_soy_empresa_servicios"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_bienes",
        texto: "Provee o va a proveer bienes o servicios al organismo en el que ejerzo funciones o a las entidades que se encuentran bajo su jurisdicción (art. 26 inc.b)",
        siguiente: "final_siguiente_agente_publico_soy_empresa_bienes"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_dirije",
        texto: "Dirije, administra, representa, patrocina, asesora, presta servicios, mantiene relaciones contractuales con individuos/empresas/institución que, por el organismo en el que ejerzo mi cargo, se encuentra directamente fiscalizado art. 26 inc. c",
        siguiente: "final_siguiente_agente_publico_soy_empresa_dirije"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_abogado",
        texto: "Ejerce la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires art. 26 inc. d",
        siguiente: "final_siguiente_agente_publico_soy_empresa_abogado"
      },
      {
        valor: "siguiente_agente_publico_soy_empresa_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_siguiente_agente_publico_soy_empresa_ninguna"
      }
    ]
  },

  final_siguiente_agente_publico_soy_empresa_servicios: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_bienes: {
    pregunta: "Usted se encuentra realizando una actividad incompatible con la función pública que cumple. Comuníquese con la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_dirije: {
    pregunta: "Podrías estar realizando una actividad privada sobre la cual es factible que se configure una incompatiblidad. Te recomendamos consultar tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_soy_empresa_abogado: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudiicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible",
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
    pregunta: "No se visualiza una situación de conflicto de interses",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_desarrolle_actividad_privada: {
    pregunta: "En el ejercicio del cargo, tomaste intervención en asuntos vinculados a las sociedades de las que fuiste socio/a o de las que formaste parte del órgano de administración o de su controlante? (art.37 inc. a y b)",
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
        texto: "Aún soy socio",
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
    pregunta: "Si sos socio e interveniste desde el cargo público, tu actuación se realizó en conflicto de interés. Consultá a la OIP para evaluar la situación",
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
        siguiente: ""
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
        siguiente: "final_siguiente_agente_publico_previsto_desarrollar_publica_no"
      }
    ]
  },

  final_siguiente_agente_publico_previsto_desarrollar_publica_no: {
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice. Con la única excepción de la docencia *Ley 471",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_previsto_desarrollar_publica_si: {
    pregunta: "En tu cargo público actual interveniste en la planificación, desarrollo o concreción de privatizaciones o concesiones de servicio público? art. 50",
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
        siguiente: "final_siguientex2_agente_publico_previsto_desarrollar_publica_si_no"
      }
    ]
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
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_six3"
      },
      {
        valor: "siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2",
        texto: "No",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2"
      }
    ]
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_six3: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2: {
    pregunta: "Su cargo nuevo es en un organismo que controla o regula la entidad privatizada o regulada? art. 50",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_si",
        texto: "Si",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_six2"
      },
      {
        valor: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox3",
        texto: "No",
        siguiente: "final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox4"
      }
    ]
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox2_six2: {
    pregunta: "No hay limitación/incompatibilidad",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguientex3_agente_publico_previsto_desarrollar_publica_si_nox4: {
    pregunta: "CONSULTE A LA OFIP.La ley de Integridad Pública establece que durante 3 años desde que se finalizó la función pública, los/las funcionarios/as públicos/as que hayan intervenido con capacidad decisoria en la planificación, desarrollo y concreción de privatizaciones o concesiones de servicios públicos, no pueden actuar en los organismos que controlen o regulen su actividad durante tres (3) años a contar desde la última intervención que hubieren tenido en los respectivos procesos.",
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
        siguiente: "siguientex2_agente_publico_desarrollo_actividad_privada"
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
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice. *Ley 471",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_agente_publico_desarrollo_actividad_publica_docente: {
    pregunta: "En principio, la actividad docente que desarrollas simultaneamente no configura un conflicto de intereses, de todos modos, se sugiere que consultes tu situación con la OFIP.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_desarrollo_actividad_privada: {
    pregunta: "",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "agente_publico_desarrollo_actividad_privada_institucion",
        texto: "Es una empresa y/o institución privada",
        siguiente: "siguiente_agente_publico_desarrollo_actividad_privada_institucion"
      },
      {
        valor: "agente_publico_desarrollo_actividad_privada_independiente",
        texto: "En forma autónoma, individual, personal o independiente",
        siguiente: "siguiente_privada_individual"
      }
    ]
  },

  siguiente_agente_publico_desarrollo_actividad_privada_institucion: {
    pregunta: "En ella",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_servicios",
        texto: "Presto servicios, gestiono, dirijo, administro, represento, patrocino, mantengo relaciones contractuales con individuos/empresas/instituciones art. 26 inc. A - inc. C",
        siguiente: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes",
        texto: "Proveo bienes o servicios (en forma personal o por terceros) al organismo en el que ejerzo funciones o a entidades bajo mi jurisdicción art. 26 inc. b",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia",
        texto: "Ejerzo la abogacía judicial o extrajudicialmente en causas contra la Ciudad Autónoma de Buenos Aires art. 26 inc. d",
        siguiente: "final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia"
      },
      {
        valor: "siguiente_agente_publico_desarrollo_actividad_privada_institucion_ninguna",
        texto: "Ninguna de las anteriores",
        siguiente: "final_otra_publica"
      }
    ]
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_bienes: {
    pregunta: "Estás ante una incompatibilidad. Consultá tu situación en la OFIP",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  final_siguiente_agente_publico_desarrollo_actividad_privada_institucion_abogacia: {
    pregunta: "La actividad sólo es permitida en causa propia o por hijos menores no emancipados o con capacidad restingida. Toda actividad profesional judicial o extrajudiicial contra la Ciudad Autónoma de Buenos Aires, incluyendo actuar como perito, es incompatible",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios: {
    pregunta: "Desde el cargo",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_poseo",
        texto: "Poseo alguna competencia, decisoria o no, en relación a ellos. art. 26 inc. a",
        siguiente: "final_siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_poseo"
      },
      {
        valor: "siguientex2_agente_publico_desarrollo_actividad_privada_institucion_servicios_organismo",
        texto: "El organismo donde presto funciones lo fizcaliza directamente. art. 26 inc. c",
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
    pregunta: "Fue sujeto obligado a presentar DDJJ art. 9",
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
        texto:"Va a ser designado en un nuevo cargo público",
        siguiente:"designado_siguiente"
      }
    ]
  },

  designado_siguiente: {
    pregunta: "En tu anterior cargo público interveniste en la planificación, desarrollo o concreción de privatizaciones o concesiones de servicio público? art. 50",
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
    pregunta: "¿Tendrá un cargo directivo/gerencial en una sociedad con la que tuvo vinculación desde la función pública y/o estuvo sujeta a su control, fiscalización o regulación por parte del organismo en el que desempeñé la función pública? art. 51",
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
    pregunta: "¿Pasó un año desde que se desempeñó en la función pública? art. 51",
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
        siguiente:"final_siguientex2_fui_desarrollo_siguiente_si_no_si"
      }
    ]
  },

  final_siguientex2_fui_desarrollo_siguiente_si_no_si: {
    pregunta: "CONSULTA A LA OFIP. La ley de Integridad Pública prohíbe, hasta un (1) año después de su egreso del cargo ocupado en ejercicio de la función pública, tener cargos directivos o gerenciales en sociedades con las que se hubieran vinculado o que hubieran estado sujetas a su control, fiscalización o regulación.",
    tipo: "informativo",
    siguiente: "finalizar"
  },

  siguiente_fui_desarrollo_siguiente_no: {
    pregunta: "Esta nueva actividad implica art. 49",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_gestion",
        texto:"Realizar gestiones administrativas o representar a terceros ante el organismo donde trabajaste o ante entidades bajo tu jurisdicción. art. 49 inc. a",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_gestion"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_participar",
        texto:"Participar en juicios contra la Ciudad de Buenos Aires, ya sea como abogados, peritos o de cualquier otra forma art. 49 inc. b",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_participar"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_bienes",
        texto:"Vender bienes o servicios, obtener concesiones o adjudicaciones en el organismo donde trabajaste, ya sea directamente o a través de terceros art. 49 inc. c",
        siguiente:"siguientex2_fui_desarrollo_siguiente_no_bienes"
      },
      {
        valor: "siguiente_fui_desarrollo_siguiente_no_relaciones",
        texto:"Mantener relaciones contractuales con entidades directamente fiscalizadas por el organismo en que trabajaste art. 49 inc. d",
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
    pregunta: "¿Participas en juicios contra la Ciudad de Buenos Aires, ya sea como abogado, perito o de cualquier otra forma? (art. 49 inc. b)",
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
    pregunta: "Vender bienes o servicios, obtener concesiones o adjudicaciones en el organismo donde trabajaste, ya sea directamente o a través de terceros art. 49 inc. c",
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
    pregunta: "Mantener relaciones contractuales con entidades directamente fiscalizadas por el organismo en que trabajaste art.49 inc. d",
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
    pregunta: "¿Cuál es tu jerarquía actual?",
    tipo: "multiple_choice",
    opciones: [
      {
        valor: "f_alto_nivel",
        texto: "Equivalente o Superior a Director General del Poder Ejecutivo de la Ciudad, o máxima autoridad de Ente Descentralizado o Sociedad de la Ciudad",
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
        texto: "Seré titular o integrante de alguno de los órganos de Gobierno del Ente Regulador de Servicios Públicos (art. 28)",
        siguiente: "respuesta_titular_ente_regulador"
      },
      {
        valor: "fantes_asumir",
        texto: "Desarrollé otra actividad antes de asumir en el cargo",
        siguiente: "respuesta_antes_asumir"
      },
      {
        valor: "fsocio_empresa",
        texto: "Soy o voy a ser socio de una empresa",
        siguiente: "respuesta_socio_empresa"
      },
      {
        valor: "facciones_bonos",
        texto: "Soy titular de acciones, bonos o cualquier otro título valor emitido por sociedad/es",
        siguiente: "respuesta_acciones_bonos"
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
        siguiente: "futura_respuesta_otra_publica"
      },
      {
        valor: "fotra_actividad_privada",
        texto: "Privada",
        siguiente: "respuesta_otra_privada"
      }
    ]
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
        texto: "Voy a construir una sociedad o a adquirir participación en una existente (art. 27 inc. d)",
        siguiente: "siguiente_futura_construir"
      },
      {
        valor: "futura_futura_actividad_privada",
        texto: "Otra actividad privada",
        siguiente: "respuesta_otra_privada"
      }
    ]
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
        siguiente: "siguientex2_agente_publico_desarrollo_actividad_privada"
      },
      {
        valor: "futuro_agente_publico_titular",
        texto: "Seré titular o integrante de alguno de los órganos de gobierno del Ente Regulador de Servicios Públicos (art. 28)",
        siguiente: "final_agente_publico_titular"
      },
      {
        valor: "futuro_agente_publico_desarrolle_actividad",
        texto: "Anteriormente desarrollé otra actividad",
        siguiente: "siguiente_agente_publico_desarrolle_actividad"
      },
      {
        valor: "futuro_agente_publico_soy_empresa",
        texto: "Soy o voy a ser socio de una empresa",
        siguiente: "siguiente_agente_publico_soy_empresa"
      }
    ]
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
        siguiente: "siguientex2_agente_publico_desarrollo_actividad_privada"
      }
    ]
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
    pregunta: "Está vedado el ejercicio de cualquier empleo o función pública a nivel nacional, provincial, municipal o de la Ciudad, salvo que el Poder Ejecutivo, fundadamente, lo autorice. Con la única excepción de la docencia (Ley 471).",
    tipo: "informativo",
    siguiente: "finalizar"
  },
}

// ===================
// VARIABLES DE ESTADO
// ===================
let pasoActual = null;
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

  // Manejo del nodo final
  if (nodo.tipo === "final") {
    clearInterval(temporizador);
    mostrarResultado(nodo.pregunta);
    return;
  }

  // Si es un nodo informativo cuyo siguiente es 'finalizar', mostrar botón para reiniciar
  if (nodo.tipo === "informativo" && nodo.siguiente === "finalizar") {
    preguntaContainer.innerHTML = `
      <p><strong>${nodo.pregunta}</strong></p>
      <div style="display: flex; justify-content: center; margin-top: 20px;">
        <button onclick="reiniciarEncuesta()" class="btn btn-inicio">🔄 Volver a comenzar</button>
      </div>
    `;
    return;
  }

  // Para otros nodos con opciones
  const opcionesHTML = nodo.opciones
    ? nodo.opciones.map(op => 
        `<button onclick="irA('${op.siguiente}', '${op.valor}', '${nodo.pregunta}', '${op.texto}')">${op.texto}</button>`
      ).join('')
    : "";

  preguntaContainer.innerHTML = `
    <p><strong>${nodo.pregunta}</strong></p>
    ${nodo.opciones ? `<div class="opciones">${opcionesHTML}</div>` : ""}
  `;
}

// Ir a siguiente paso
function irA(proximo, valor = null, preguntaTexto = "", respuestaTexto = "") {
  if (preguntaTexto && respuestaTexto) {
    respuestas[preguntaTexto] = respuestaTexto;
  }
  if (proximo) {
    pasoActual = proximo;
    mostrarPregunta(proximo);
  }
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