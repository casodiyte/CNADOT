import React from 'react';

export const blue = '#0099CC';
export const green = '#66CC00';
export const orange = '#FF6600';

const ic = (paths) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    {paths.map((d, i) => <path key={i} d={d} />)}
  </svg>
);
const icc = (children) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

export const icBook = ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M9 14h6', 'M12 11v6']);
export const icMsg = ic(['M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16', 'm7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9', 'm2 15 6 6', 'M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 3.3c-1.2.5-2 1.2-2.5 1.7-.5-.5-1.3-1.2-2.5-1.7A2.73 2.73 0 0 0 8.3 5.8c0 1.1.8 2 1.5 2.7L13.5 12z']);
export const icBolt = ic(['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z', 'M3.22 8.77 5.5 11l2.5-4.5 3 7 2.5-4.5 2 2']);
export const icPin = icc([
  <path key={1} d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />,
  <circle key={2} cx="12" cy="10" r="3" />
]);
export const icMoney = icc([
  <circle key={1} cx="12" cy="12" r="9" />,
  <path key={2} d="M14.5 9a2.5 2 0 0 0-2.5-1.5c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.9 2.5 2-1 2-2.5 2A2.5 2 0 0 1 9.5 15" />,
  <path key={3} d="M12 6v1.5M12 16.5V18" />
]);
export const icPhone = ic(['M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z']);

export const navItems = [
  ['home','Inicio'],['objetivos','Objetivos'],['perfiles','Dirigido a'],['programa','Programa'],['escenarios','Escenarios'],['expertos','Expertos']
];

export const logos = [
  'assets/TransPlantChild.png',
  'assets/LOGO ORCT.jfif',
  'assets/Logos_01_HCE.svg',
  'assets/Logos_02_Salud-CENATRA.svg',
  'assets/Logos_03_UNAM.svg',
  'assets/Logos_04_Facultad de Medicina.svg',
  'assets/Logos_06_UVM.svg',
  'assets/Logos_07_UFV.svg',
  'assets/Logos_08_SET.svg',
  'assets/logo-SERMAS_SMS.png',
  'assets/ont.png',
  'assets/SMEE-Imagotipo (1).png',
  'assets/STALYC.png'
];

export const objetivos = [
  {titulo:'Marco Teórico y Normativo',tint:'#E6F7FF',color:blue,icon:ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M9 14h6', 'M12 11v6']),texto:'Actualizar el marco teórico y normativo vigente en México e internacionalmente respecto a las diversas modalidades de donación de órganos y tejidos.'},
  {titulo:'Comunicación y Crisis',tint:'#EEF9D9',color:green,icon:ic(['M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16', 'm7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9', 'm2 15 6 6', 'M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 3.3c-1.2.5-2 1.2-2.5 1.7-.5-.5-1.3-1.2-2.5-1.7A2.73 2.73 0 0 0 8.3 5.8c0 1.1.8 2 1.5 2.7L13.5 12z']),texto:'Perfeccionar habilidades críticas de comunicación asertiva para el manejo de malas noticias y la entrevista de solicitud de donación familiar en escenarios de crisis.'},
  {titulo:'Toma de Decisiones Clínicas',tint:'#FFE6CC',color:orange,icon:ic(['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z', 'M3.22 8.77 5.5 11l2.5-4.5 3 7 2.5-4.5 2 2']),texto:'Sistematizar la toma de decisiones clínicas y logísticas en escenarios complejos mediante simulación clínica, incorporando soporte orgánico avanzado (ECMO) y el mantenimiento crítico del donante.'},
  {titulo:'Destrezas Quirúrgicas Avanzadas',tint:'#EAF6EC',color:blue,icon:ic(['m18 2 4 4', 'm17 7-1-1', 'm19 9-1-1', 'm18 8-8 8-3-3 8-8', 'm10 16-6 6', 'm4.5 13.5 6 6', 'm2 22 3-3']),texto:'Desarrollar destrezas quirúrgicas avanzadas in vivo y ex situ para la procuración, canulación y preservación de órganos y tejidos en modelos experimentales, integrando el entrenamiento especializado en bipartición hepática (técnica split) y perfusión de órganos ex situ.'}
];

export const perfiles=[
  {titulo:'Coordinador(a) de Donación', color:blue, tint:'#E6F7FF', icon:ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01']), desc:'Responsables de la detección, logística hospitalaria, vínculo legal-administrativo y la aproximación familiar.'},
  {titulo:'Intensivista (Medicina Crítica)', color:green, tint:'#EEF9D9', icon:icc([<path key={1} d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />,<path key={2} d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />,<circle key={3} cx="20" cy="10" r="2" />]), desc:'Encargados del mantenimiento hemodinámico óptimo del donante en la UCI y la certificación clínica de la Muerte Encefálica.'},
  {titulo:'Anestesiólogo(a)', color:orange, tint:'#FFE6CC', icon:ic(['m18 2 4 4', 'm17 7-1-1', 'm19 9-1-1', 'm18 8-8 8-3-3 8-8', 'm10 16-6 6', 'm4.5 13.5 6 6', 'm2 22 3-3']), desc:'Responsables de mantener la homeostasis y estabilidad del donante en el quirófano durante los tiempos críticos y la extracción.'},
  {titulo:'Cirujano(a) de Tórax, Cardiovascular y Abdomen', color:blue, tint:'#E6F7FF', icon:icc([<circle key={1} cx="6" cy="6" r="3" />,<circle key={2} cx="6" cy="18" r="3" />,<path key={3} d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />]), desc:'Líderes de la técnica quirúrgica de procuración, canulación y evaluación in situ de la viabilidad de los injertos.'},
  {titulo:'Perfusionista', color:green, tint:'#EEF9D9', icon:ic(['M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z']), desc:'Especialistas a cargo del cebado, monitorización y manejo del soporte circulatorio extracorpóreo (CEC/ECMO) para preservación orgánica.'},
  {titulo:'Enfermero(a) Quirúrgico(a)', color:orange, tint:'#FFE6CC', icon:ic(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z', 'M8 12h8', 'M12 8v8']), desc:'Profesionales clave en la instrumentación especializada, la gestión de soluciones de preservación celular y la preparación de la mesa de banco.'}
];

export const programa = [
  {
    n: '1', titulo: 'Fase Teórica Virtual Híbrida', cuando: 'Desde el 17 al 28 de Septiembre 2026', meta: 'Contenido asincrónico + sesiones sincrónicas en vivo', color: blue, color2: blue, tint: '#E6F7FF',
    objetivo: 'Homogeneizar las bases teórico-conceptuales del equipo multidisciplinario a través de la revisión selectiva de literatura científica y la introducción formal a los modelos de comunicación en crisis.',
    temas: [
      { t: 'Duración: 1 semana', d: 'Acceso desde el 17 de Septiembre. Revisión de Material Previo. Examen Diagnóstico Inicial.' },
      { t: 'Material Previo', d: 'Revisión del Manual Clínico de Comunicación en Situaciones de Crisis y Malas Noticias.' },
      { t: 'Clase Virtual', d: 'Comunicación Intrahospitalaria, Herramientas de Comunicación y Entrevista Familiar.' },
      { t: 'Clase Virtual', d: 'Perspectiva Internacional de la Donación y Marco Normativo (OPS).' }
    ]
  },
  {
    n: '2', titulo: 'Fase Teórica Presencial', cuando: '28 de Septiembre 2026 | Horario: 8:30 AM – 4:00 PM', meta: 'Auditorio UVM', color: green, color2: green, tint: '#EEF9D9',
    objetivo: 'Integrar los paradigmas asistenciales, legales y bioéticos de vanguardia en donación y trasplantes mediante ponencias magistrales interactivas con expertos de la red nacional e internacional.',
    temas: [
      { t: 'El Modelo Mexicano de Donación y Trasplantes: Realidad Actual y Retos Normativos (CENATRA)', d: 'Objetivo: Contextualizar el marco legal y regulatorio vigente en México frente al panorama global para identificar áreas de oportunidad en la práctica institucional.' },
      { t: 'El Modelo Español de Donación: Lecciones Aprendidas y Estrategias de Éxito (ONT)', d: 'Objetivo: Analizar el sistema organizativo y de gestión de la Organización Nacional de Trasplantes de España para adaptar sus casos de éxito al entorno nacional.' },
      { t: 'Estrategia Panamericana: Perspectiva, Marco Normativo y Cooperación Regional de la Donación (OPS)', d: 'Objetivo: Comparar los indicadores de donación en Latinoamérica con el fin de alinear las estrategias locales a las metas de la Organización Panamericana de la Salud.' },
      { t: 'Gobernanza y Gestión de Calidad en los Procesos de Donación Hospitalaria (CETRA GTO)', d: 'Objetivo: Analizar indicadores clave de rendimiento (KPIs) y control de procesos para auditar la eficiencia de los programas de donación hospitalaria.' },
      { t: 'Gestión de Riesgos y Seguridad del Paciente en el Proceso de Donación (CETRA GTO)', d: 'Objetivo: Identificar y mitigar proactivamente los riesgos clínicos y administrativos que comprometen la viabilidad de los procesos de procuración.' },
      { t: 'Criterios Avanzados de Detección, Evaluación y Validación del Donante Potencial', d: 'Objetivo: Sistematizar las estrategias clínicas para la identificación oportuna y la validación estricta del donante potencial basándose en criterios de seguridad biológica.' },
      { t: 'Estrategias Críticas de Soporte Fisiológico y Mantenimiento Hemodinámico del Donante', d: 'Objetivo: Revisar las metas terapéuticas avanzadas (metabólicas, ventilatorias y hemodinámicas) para contrarrestar la tormenta autonómica y optimizar la perfusión orgánica.' },
      { t: 'Clasificación y Criterios de Selección en las Modalidades de Donación', d: 'Objetivo: Categorizar las vías de obtención de órganos y tejidos, aplicando criterios de inclusión/exclusión para ampliar el pool de donantes de manera segura.' },
      { t: 'Certificación de la Muerte Encefálica: Del Tamizaje con Glasgow 7 al Test de Apnea', d: 'Objetivo: Estandarizar la exploración clínica neurológica, el uso de pruebas confirmatorias de gabinete y la ejecución del test de apnea bajo la consigna del protocolo Glasgow 7.' },
      { t: 'Donación en Asistolia Controlada (DAC): Límites del Tratamiento y Tiempos Críticos', d: 'Objetivo: Analizar la secuencia temporal, los requisitos bioéticos para la adecuación del esfuerzo terapéutico y los periodos de touch-off en el donante en asistolia.' },
      { t: 'Donación en Asistolia No Controlada (DANC): Coordinación Prehospitalaria y Hospitalaria', d: 'Objetivo: Esquematizar la cadena logístico-asistencial del donante en paro cardiaco refractario, optimizando los tiempos de respuesta desde el medio prehospitalario.' },
      { t: 'Donación Pediátrica y Neonatal: Consideraciones Fisiológicas, Legales y Abordaje Familiar', d: 'Objetivo: Determinar las particularidades fisiopatológicas del donante pediátrico y las directrices éticas específicas para el manejo del duelo familiar con padres o tutores.' },
      { t: 'Oxigenación por Membrana Extracorpórea (ECMO) y Perfusión Regional Normotérmica', d: 'Objetivo: Evaluar la integración de sistemas ECMO/PRN como estrategia avanzada de perfusión y rescate de órganos en protocolos de Donación en Asistolia.' },
      { t: 'Preservación Avanzada, Triple Embalaje y Cadena de Custodia de Órganos y Tejidos', d: 'Objetivo: Aplicar técnicas de preservación hipotérmica estática, resguardo documental legal y empaque especializado para asegurar la viabilidad celular en el traslado.' },
      { t: 'Logística y Transporte Biológico Seguro: Gestión de Rutas Críticas', d: 'Objetivo: Revisar los protocolos del traslado de órganos y tejidos seguro y oportuno. Revisión de la secuencia de procesos desde salida hasta destino final y vías utilizadas para el Traslado.' },
      { t: 'Dilemas Bioéticos en el Futuro de la Donación de Órganos y Tejidos en México: El Impacto de la DAC', d: 'Objetivo: Debatir los desafíos éticos, legales y deontológicos que plantea la implementación masiva de la Donación en Asistolia Controlada en el entorno nacional.' },
      { t: 'Perlas de la Comunicación de Malas Noticias y Entrevista Familiar', d: 'Objetivo: Ejecutar herramientas de contención emocional, comunicación no verbal y destrezas dialécticas para conducir de forma efectiva la entrevista familiar de donación.' }
    ]
  },
  {
    n: '3', titulo: 'Práctica Presencial: Simulación Clínica', cuando: '29 y 30 de Septiembre 2026 | Horario: 9:00 AM – 3:00 PM', meta: 'Centro de Simulación UVM', color: orange, color2: '#ff9900', tint: '#FFF0F0', alerta: 'Cupo limitado exclusivo para Coordinadores de Donación',
    objetivo: 'Aplicación en tiempo real de habilidades no técnicas en escenarios de crisis (Muerte encefálica y comunicación de malas noticias), mediante la inmersión en escenarios simulados de alta fidelidad y técnicas estructuradas de debriefing.',
    temas: [
      { t: '29 de Septiembre', d: 'Escenario 1: Diagnóstico Muerte Encefálica\nEscenario 2: Comunicación de Malas Noticias\nEscenario 3: Manejo ECMO\nEscenario 4: Logística DAC' },
      { t: '30 de Septiembre', d: 'Escenario 5: Entrevista para Donación\nTaller 6: Manejo, Preservación y Envío de Órganos\nEscenario 7: Mantenimiento del Donante con Muerte Encefálica\nEscenario 8: Logística DANC' }
    ]
  },
  {
    n: '4', titulo: 'Simulación Clínica DAC (Donación en Asistolia Controlada)', cuando: '30 de Septiembre 2026 | Horario: 4:00 PM – 6:45 PM', meta: 'Centro de Simulación UVM', color: blue, color2: blue, tint: '#E6F7FF',
    objetivo: 'Simulación Práctica de Donación en Asistolia Controlada (DAC).',
    temas: [
      { t: 'Simulación Clínica DAC', d: 'Simulación Práctica de Donación en Asistolia Controlada (DAC).' }
    ]
  },
  {
    n: '5', titulo: 'Teórica Quirúrgica Experimental', cuando: '1 de Octubre 2026 | Horario: 8:30 AM – 1:25 PM', meta: 'UVM Hospital Veterinario', color: orange, color2: orange, tint: '#FFE6CC',
    objetivo: 'Integrar y sistematizar los fundamentos anatómicos, criterios de selección avanzados, innovaciones tecnológicas y variantes de técnica quirúrgica compleja (Split, DAC, Robótica y Perfusión Dinámica), con el fin de unificar criterios clínicos y estandarizar la toma de decisiones críticas que los cirujanos y equipo multidisciplinario ejecutarán de forma práctica e inmediata en los modelos biológicos in vivo y ex situ.',
    temas: [
      { t: 'De la Donación Convencional a la Vanguardia: Evolución y Perspectivas de la Procuración Multiorgánica en México', d: 'Objetivo: Introducción a la fase teórica quirúrgica experimental.' },
      { t: 'Criterios de Excelencia: Protocolo y Selección del Donante Ideal para la Técnica Split', d: 'Objetivo: Sistematizar los criterios morfológicos, antropométricos y clínico-metabólicos de selección del donante para la técnica de bipartición hepática.' },
      { t: 'Bipartición Hepática In Situ y Ex Situ: Estrategias Quirúrgicas (Tips & Tricks) para Optimizar la Lista de Espera', d: 'Objetivo: Evaluar las variantes técnicas, maniobras críticas y recomendaciones prácticas en los abordajes de bipartición hepática.' },
      { t: 'Cirugía Hepática Extrema: Indicaciones y Técnica Quirúrgica en Trasplante de Monosegmento y Segmento III', d: 'Objetivo: Determinar las indicaciones clínicas precisas y dominar los pasos técnicos quirúrgicos de la segmentectomía lateral izquierda.' },
      { t: 'Imagenología Avanzada y Modelado 3D para la Planificación Quirúrgica del Injerto Hepático', d: 'Objetivo: Aplicar herramientas de imagen tridimensional y volumetría hepática para anticipar variantes anatómicas vasculares/biliares.' },
      { t: 'Prevención y Resolución Colectiva de Complicaciones Quirúrgicas Vasculares y Biliares Tempranas en Split', d: 'Objetivo: Identificar y resolver de manera oportuna las complicaciones técnicas vasculares y de la vía biliar derivadas de la partición hepática.' },
      { t: 'Fisiopatología Hemodinámica Hepática: Manejo del Síndrome Small-for-Size y Large-for-Size', d: 'Objetivo: Analizar los cambios hemodinámicos y de presión portal asociados al desajuste volumétrico del injerto.' },
      { t: 'Innovación Quirúrgica: Estado Actual de la Hepatectomía y Procuración Asistida por Robótica', d: 'Objetivo: Evaluar la aplicabilidad, las ventajas ergonómicas y los límites técnicos de la cirugía asistida por plataforma robótica.' },
      { t: 'Cirugía Multivisceral: Abordajes Técnicos Avanzados en el Trasplante de Intestino y Bloque Abdominal', d: 'Objetivo: Describir los tiempos quirúrgicos, los retos de reconstrucción vascular y las complejidades inmunológicas del trasplante multivisceral.' },
      { t: 'Perfusión Dinámica Ex Situ: Beneficios Clínicos del Uso de Máquinas de Perfusión Hipotérmica y Normotérmica', d: 'Objetivo: Contrastar las modalidades de perfusión mecánica ex situ para optimizar la preservación celular, reducir el daño por isquemia-reperfusión.' },
      { t: 'Rescate de Órganos Marginales a través del soporte ECMO y Preservación Regional Normotérmica', d: 'Objetivo: Implementar protocolos de asistencia circulatoria extracorpórea (ECMO) orientados al rescate, soporte metabólico y acondicionamiento normotérmico de órganos marginales.' },
      { t: 'Preservación Catiónica y Quirúrgica en la Procuración Cardio-Pulmonar Compleja', d: 'Objetivo: Analizar las técnicas de infusión de soluciones de preservación celular y protección tisular específica durante la extracción multiorgánica torácica compleja.' },
      { t: 'El Cambio de Paradigma Quirúrgico: Implementación y Futuro de la DAC en México', d: 'Objetivo: Valorar el impacto clínico, operativo, legal y bioético de la Donación en Asistolia Controlada (DAC) como alternativa fundamental.' },
      { t: 'Validación y Score de Viabilidad Quirúrgica en Donantes de Asistolia Controlada', d: 'Objetivo: Aplicar escalas de puntuación pronóstica y criterios objetivos de validación histológica/funcional para certificar la aceptación segura de injertos.' },
      { t: 'Instrumentación Quirúrgica Avanzada en Donación en Asistolia: Gestión de Tiempos Críticos y Preservación Orgánica', d: 'Objetivo: Sistematizar los protocolos de instrumentación quirúrgica, preparación de la mesa de banco y manejo rápido de soluciones de preservación celular.' },
      { t: 'Análisis de Video Clínico: Pasos Críticos en la Donación en Asistolia Controlada', d: 'Objetivo: Analizar mediante la revisión de registros videográficos reales los puntos críticos, los tiempos de isquemia caliente funcional y las desviaciones técnicas más frecuentes en la DAC.' }
    ]
  },
  {
    n: '6', titulo: 'Práctica Presencial Experimental Quirúrgica', cuando: '1 y 2 de Octubre 2026 | Horario 1 Oct: 2:20 PM – 6:00 PM / Horario 2 Oct: 8:45 AM – 4:30 PM', meta: 'UVM Hospital Veterinario', color: green, color2: orange, tint: '#EEF9D9',
    objetivo: 'Perfeccionar destrezas psicomotrices, técnicas quirúrgicas de canulación y modelos de preservación dinámica mediante práctica in vivo y cirugía ex situ de alta especialidad.',
    temas: [
      { t: 'Estación A: Donación en Asistolia Controlada (DAC)', d: 'Objetivo: Entrenar DAC con el fin de aprender una estrategia adicional para incrementar la tasa de donación con visión a futuro cercano en México.' },
      { t: 'Estación B: Perfusión de Órganos Ex Situ', d: 'Objetivo: Optimizar los resultados de supervivencia en trasplantes e incrementar la tasa de rescate de órganos con criterios expandidos (marginales) mediante la implementación de tecnología de perfusión ex situ.' },
      { t: 'Estación C: Bipartición Hepática (Split)', d: 'Objetivo: Desarrollar competencias y destrezas quirúrgicas avanzadas para la realización del trasplante hepático split (bipartición) y el implante exitoso de ambos segmentos.' }
    ]
  }
];;

const expertosRaw = [
  {nombre:'Dra. Rosa Erro Aboytia',pais:'MX',color:blue,org:'CENATRA',expertise:'Directora General del Centro Nacional de Trasplantes.', foto:'assets/expertos/dra_rosa_erro_aboytia.jpeg', sintesis:'Egresada de la Facultad de Medicina de la Universidad Autónoma de Nayarit. Realizó su residencia en Pediatría en el Nuevo Hospital Civil de Guadalajara "Juan I. Menchaca" Universidad de Guadalajara, Jalisco. Sub-especialidad en Cirugía Pediátrica en el Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde" de la misma Universidad. Posteriormente realizó Alta Especialidad en Trasplante Renal Pediátrico por un periodo de dos años, en el Hospital Infantil de México Federico Gómez, CDMX y la UNAM. Realizó un adiestramiento de un año en Trasplante Hepático, Intestinal y Multivisceral, en el Hospital Infantil Universitario La Paz, en Madrid, España. Pertenece a 5 Sociedades Médicas Nacionales. Está certificada por el Consejo Mexicano de Pediatría, Consejo Mexicano de Cirugía Pediátrica, y en Trasplantes por el Consejo Mexicano de Cirugía General. ha participado como profesor asociado en cursos de bipartición hepática y donación en asistolia controlada y actualmente es Directora General del Centro Nacional de Trasplantes CENATRA.'},
  {nombre:'Dr. Alonso Mateos Rodríguez',pais:'ES',color:orange,org:'ONT · España',expertise:'Coordinador adjunto oficina regional de coordinación de trasplantes comunidad de Madrid.', foto:'assets/expertos/dr._alonso_mateos_rodriguez.jpg', sintesis:'ALONSO MATEOS RODRIGUEZ Doctor en Medicina MD, PhD Especialista en Medicina Familiar y Comunitaria Especialista de Medicina de Urgencias y Emergencias Profesor Facultad de Medicina Universidad Francisco de Vitoria Coordinador Adjunto Oficina Regional de Coordinación de Trasplantes'},
  {nombre:'Dr. Constantino Fondevila Campo',pais:'ES',color:green,org:'España',expertise:'Presidente de la sociedad española de trasplantes.', foto:'assets/expertos/constantino_fondevila_campo.jfif', sintesis:'Constantino Fondevila Profesor Titular de cirugía en la Universidad de Barcelona y Jefe del Servicio de Cirugía General y del Aparato Digestivo del Hospital Universitario La Paz, Líder del Grupo de Investigación Traslacional e Innovación en Cirugía General y Digestiva y Líder del Grupo de Investigación en Trasplante Hepático de CIBERehd. Con más de 20 años de experiencia en el ámbito del trasplante hepático, ha desarrollado protocolos clínicos para ampliar la disponibilidad de órganos, mediante ...'},
  {nombre:'Dr. Francisco Hernández Oliveros',pais:'ES',color:orange,org:'España',expertise:'Jefe de sección de trasplante pediátrico. Hospital Universitario la Paz.', foto:'assets/placeholder_user.png', sintesis:''},
  {nombre:'Dr. Héctor Vilca Meléndez',pais:'GB',color:green,org:'Inglaterra',expertise:'Consultant Transplant Surgeon at the Birmingham Children\'s Hospital.', foto:'assets/expertos/dr._hector_vilca-melendez.jpg', sintesis:'DR. HÉCTOR VILCA-MELÉNDEZ es cirujano especialista en trasplantes en el Birmingham Children\'s Hospital (Reino Unido), donde realiza trasplantes de hígado, así como trasplantes intestinales y multiviscerales, en pacientes pediátricos. Se graduó como cirujano e n Lima (Perú) e inició su trayectoria en el ámbito de los trasplantes en la Facultad de Medicina de la Universidad de São Paulo. Continuó su formación en esta especialidad en el King\'s, donde obtuvo el doctorado en Trasplante Hepático por l...'},
  {nombre:'Dr. Juan Ignacio Torres González',pais:'ES',color:blue,org:'Hospital Clínico San Carlos',expertise:'Enfermero coordinador de trasplantes Hospital Clínico San Carlos.', foto:'assets/expertos/juan_ignacio_torres_gonzalez.jpg', sintesis:'JUAN IGNACIO TORRES GONZÁLEZ Enfermero (RN, MsC, PhD). Coordinador de Trasplantes. HU Clínico San Carlos. Doctor por la UCM. Máster de Investigación en Cuidados. Profesor de Cursos de Comunicación y Donación y Trasplantes. Revisor revista Enfermería Intensiva y miembro del CC de la SEECiR'},
  {nombre:'Dra. Belén Estébanez Montiel',pais:'ES',color:orange,org:'España',expertise:'Coordinadora Médica de Trasplantes del Hospital Universitario La Paz, Madrid.', foto:'assets/expertos/dra._belen_estebanez_montiel.jpeg', sintesis:'DRA. BELÉN ESTÉBANEZ MONTIEL La Dra. Belén Estébanez Montiel es especialista en Medicina Intensiva, Máster en Cuidados Paliativos y Coordinadora Médica de Donación y Trasplantes del Hospital Universitario La Paz (Madrid). Cuenta con una amplia experiencia en donación de órganos y teji dos, trasplante pediátrico y de adultos, así como en la implantación y desarrollo de programas de donación en asistolia, incluyendo la donación cardiaca. Participa activamente en proyectos de investigación, elabora...'},
  {nombre:'Enf. Laura Fernandez Lebrusán',pais:'ES',color:orange,org:'España',expertise:'Enfermera en Cuidados críticos en Hospital Universitario Puerta de Hierro Majadahonda.', foto:'assets/expertos/laura_fernandez_lebrusan.jpg', sintesis:'LAURA FERNÁNDEZ LEBRUSÁN Enfermera de Cuidados Críticos en Hospital Universitario Puerta de Hierro Majadahonda Profesora Facultad CC. Salud. Departamento Enfermería. Universidad Francisco de Vitoria Máster en Urgencias y Cuidados Críticos intrahospitalarios por la CEU San Pablo Especialista HEMS (Helicopter Emergency Medical Services), HICAMS, FWAA Máster en Dirección y Gestión sanitaria'},
  {nombre:'Mauricio Beltrán Durán',pais:'US',color:green,org:'OPS · Washington',expertise:'Regional Advisor Blood and Transplant Services Innovation, PAHO/WHO.', foto:'assets/placeholder_user.png', sintesis:''},
  {nombre:'Dr. Aczel Isidoro Sánchez Cedillo',pais:'MX',color:green,org:'STALYC',expertise:'Presidente Sociedad de trasplante de América Latina y el Caribe STALYC.', foto:'assets/expertos/m._en_c._aczel_sanchez_cedillo.jpg', sintesis:'M. EN C. ACZEL SANCHEZ CEDILLO El Dr. Isidoro Aczel Sanchez Cedillo, médico del Centro Médico ABC. Se formó como Médico Cirujano en la Universidad Nacional Autónoma de México. Realizó la especialidad en Cirugía General en la Universidad Nacional Autónoma de México y la especialidad en Cirugía de Trasplantes en la Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán. Fue Coordinador Nacional de Trasplantes del ISSSTE Expresidente de la Sociedad Mexicana de Trasplantes Exjefe de la ...'},
  {nombre:'Dr. En Educ. Victor Manuel Figueroa Corchado',pais:'MX',color:blue,org:'Relámpagos',expertise:'Jefe de la unidad de rescate aéreo relámpagos, Estado de México.', foto:'assets/expertos/lic._victor_figueroa_corchado.jpg', sintesis:'LIC. VICTOR FIGUEROA CORCHADO Licenciado en Atención Médica Prehospitalaria Universidad CLEA Técnico Profesional en Urgencias Medicas. Cruz Roja Mexicana. SEP Diplomado en medicina de aviación SCT/UNAM Diplomado en Aeromedicina y Trasporte de cuidados críticos(Orlando Medical Institute) Diplomado en Toxicología clínica CIAT. Hospital Juárez de México Instructor AHA NAEMT y ECSI Operador de Grua de Rescate Aéreo Priority 1Air Rescue y SR3 Rescatista Aéreo Especializado Aéreo Priority 1Air Rescue ...'},
  {nombre:'Dr. Francisco Sachiñas',pais:'MX',color:blue,org:'México',expertise:'Imagenología Avanzada y Fisiopatología Hemodinámica.', foto:'assets/placeholder_user.png', sintesis:''},
  {nombre:'Dr. José Moya Medina',pais:'MX',color:blue,org:'OPS',expertise:'Representante de la OPS/OMS México.', foto:'assets/expertos/dr._jose_moya_medina.jpg', sintesis:'DR. JOSÉ MOYA MEDINA Es un médico cirujano, epidemiólogo y experto en salud pública que actualmente se desempeña como el representante en México de la Organización Panamericana de la Salud / Organización Mundial de la Salud (OPS/OMS). Formación y Trayectoria Académica  Medicina: Médico cirujano por la Universidad Nacional Federico Villarreal (Perú).  Especialización: Magíster en Salud Pública y especialista en Epidemiología de Campo por la Universidad Peruana Cayetano Heredia.  Posgrado: Doct...'},
  {nombre:'Dr. Juan Salvador Rodríguez Jamaica',pais:'MX',color:blue,org:'CETRA GTO',expertise:'Director Médico en Centro Estatal de Trasplantes de Guanajuato.', foto:'assets/expertos/dr._juan_salvador_rodriguez_jamaica.jpeg', sintesis:'DR. JUAN SALVADOR RODRÍGUEZ JAMAICA Médico Cirujano Facultad Medicina León Guanajuato Maestría Dirección Estratégica Organizaciones Salud Coordinador de Donación por Cenatra y UNAM Fellow Organ Donation & Transplantation por Gift of Life Institute Philadelphia Coautor libro Manual dd Referencia, Detección, Mantenimiento Donador de Órganos, CETRA GTO Profesor Curso Comunicación por ONT España Profesor Diplomado Coordinación Donación CENATRA Director Médico Centro Estatal de Trasplantes de Guanaju...'},
  {nombre:'Dr. Patricio Santillán Doherty',pais:'MX',color:blue,org:'Bioética',expertise:'Titular de la Comisión Nacional de Bioética.', foto:'assets/expertos/dr._patricio_javier_santillan_doherty.jpg', sintesis:'DR. PATRICIO JAVIER SANTILLÁN DOHERTY COMISIONADO NACIONAL DE BIOÉTICA CONBIOETICA Médico, especialista en Cirugía Torácica. Trabajó e n el Instituto Nacional de Ciencias Médicas y Nutrición Salvador Zubirán donde fungió como especialista, jefe del departamento de Cirugía Experimental y presidente del Comité de Ética en Investigación. En el Instituto Nacional de Enfermedades Respiratorias fue jefe del Departamento de Cirugía Experimental, Subdirector de Cirugía y Director Médico (2013-2022). Es ...'},
  {nombre:'Dr. Rodrigo López Falcony',pais:'MX',color:blue,org:'CETRA GTO',expertise:'Director del Centro Estatal de Trasplantes del Estado de Guanajuato.', foto:'assets/expertos/dr._rodrigo_lopez_falcony.jpeg', sintesis:'Cirujano Urólogo y de trasplante renal. Egresado como médico cirujano de la Universidad de Guanajuato. Urología y Trasplante renal en Centro Médico Nacional de Occidente del IMSS avalado por la Universidad de Guadalajara. Urólogo Re-certificado 2020 - 2025. Urólogo Re-certificado en trasplante renal por el CONACEM No. 16. Urólogo y cirujano de trasplante renal en IMSS UMAE T1. Urólogo de trasplante renal Secretaria de Salud del Estado de Guanajuato. Director General del Centro Estatal de Trasplantes de la Secretaria de Salud del Estado de Guanajuato 2011 a la fecha. Encargado del Programa de Trasplante del Hospital Angeles León, Grupo Angeles Servicios de Salud 2011 a la fecha. Presidente de la Sociedad Mexicana de Trasplantes 2020-2021. Vicepresidente de la Sociedad Mexicana de Trasplantes 2019 - 2020. Coordinador de capítulo de donación y procuración de órganos de la Sociedad Mexicana de Trasplante 2014 - 2019. Miembro de la Mesa Directiva de la Sociedad Mexicana de Urología como coordinador del capítulo de trasplante renal 2022-2024. Council para America Latina de la ISODP de The Transplantation Society. Miembro de la American Society of Transplantation y de The Transplantation Society.'},
  {nombre:'Dr. Salvador Martínez Bernal',pais:'MX',color:blue,org:'Médico',expertise:'Especialista.', foto:'assets/expertos/dr_salvador_martinez_bernal.jpg', sintesis:'DR SALVADOR MARTINEZ BERNAL Médico Cirujano Militar Egresado de la Escuela Médico Militar de la Universidad del ejército y fuerza aérea (1999-2005) Posgrado en donación de órganos en el Hospital Clinic Barcelona en España por la DTI-TPM Institute Curso TPM avanzado por la TPM-DTI Institute de España Diplomado Universitario para la formación de coordinadores de donación por el CENATRA/UNAM Instructor Nacional del curso "Comunicación en Situaciones Críticas" avalado por la Organización Nacional de...'},
  {nombre:'Dr. Walter Adolfo Querevalu Murillo',pais:'MX',color:blue,org:'IMSS',expertise:'Coordinador de donación del CMN Siglo XXl hospital de especialidades.', foto:'assets/expertos/dr._walter_adolfo_querevalu_murillo.jpg', sintesis:'Dr. Walter Adolfo Querevalú Murillo Licenciatura en Medicina, Especialista en Medicina interna, Maestro en Administración de Servicios de Salud, Diplomado de Formación de Coordinadores Hospitalarios de Donación, TPM España, Catedrático de la UNAM. Actualmente Coordinador Hospitalario de Donación en el Hospital Especialidades Centro Médico Nacional siglo XXI.'},
  {nombre:'Dra. Erika Rivera Duron',pais:'MX',color:blue,org:'IMSS',expertise:'Jefe de Área de trasplantes IMSS.', foto:'assets/expertos/dra._erika_rivera_duron.jpg', sintesis:'DRA. ERIKA RIVERA DURÓN Cargo actual: Jefa De Área de Órganos Intraabdominales de la Coordinación De Donación y Trasplantes de Órganos, Tejidos y Células Del IMSS Licenciatura en Medicina, Subespecialista en terapia Intensiva, Alta especialidad en Terapia Intensiva Neurologica. Médica adscrita al Instituto Nacional de Neurología y Neurocirugía “Dr. Manuel Velazco Suárez”, Diplomado de Formación de Coordinadores Hospitalarios de Donación, TPM España, Actualmente Jefa del Área de Donación Institut...'},
  {nombre:'Dra. Kenia Yazmin Reyes Gutierrez',pais:'MX',color:blue,org:'CETRA GTO',expertise:'Médico Coordinador de Donación de órganos y tejidos con fines de trasplante.', foto:'assets/expertos/dra__kenia_yazmin_reyes_gutierrez.jpeg', sintesis:'DRA: KENIA YAZMIN REYES GUTIERREZ Instructora en México del Curso de Comunicación en Situaciones Críticas ( avalado por la ONT España, presencial. Formación: Licenciatura como Médico Cirujano ( Universidad Michoacana de San Nicolás Hidalgo) Maestria en administración de instituciones hospitalarias ( Universidad la Salle León Guanajuato) Máster Internacional en Donación y Trasplante de órganos, tejidos y células ( ONT España, presencial ) Mini Fellowship in organ donation (Gife of life institute\'...'},
  {nombre:'Dra. Magdalena García Baysa',pais:'MX',color:blue,org:'CCINSHAE',expertise:'Directora de coordinación interinstitucional CCINSHAE.', foto:'assets/expertos/dra._magdalena_garcia_baysa.jpg', sintesis:'DRA. MAGDALENA GARCÍA BAYSA Cargo actual Directora de coordinación interinstitucional en CCINSHAE Fue Coordinadora Hospitalaria de Donación de Órganos y Tejidos con Fines de Trasplantes Departamento de Trasplantes, Dirección de Cirugía, INCMNSZ 2006 – 2012 Médica Cirujana por la Facultad de Medicina, Universidad Nacional Autónoma de México, UNAM 2012 - 2013 Diplomado Formación de Coordinadores Hospitalarios de Donación de Órganos y Tejidos con fines de Trasplantes, UNAM - CENATRA Centro Nacional...'},
  {nombre:'Dra. Nubia Denisse Avilez Pacheco',pais:'MX',color:blue,org:'IMSS',expertise:'Jefa de Área Médica de donación IMSS.', foto:'assets/expertos/dra._nubia_denisse_avilez_pacheco.jpeg', sintesis:'Dra. Nubia Denisse Avilez Pacheco *Licenciatura en Medicina *Especialista en Urgencias *Maestría en Gestión de Hospitales. *Doctorado en Alta Dirección de Hospitales *Diplomado de Formación de Coordinadores Hospitalarios de Donación, TPM España. *Forma parte de la mesa directiva de la Sociedad Mexicana de Trasplantes *Jefa de Área de Donacion en la Coordinación Nacional de Donación y Trasplantes del IMSS. *Actualmente Encargada División de Donacion y Trasplantes en la Coordinación Nacional de Do...'},
  {nombre:'Dra. Reyna Moreno Ruiz',pais:'MX',color:blue,org:'INCICh',expertise:'Coordinadora Hospitalaria de Donación y Trasplante, Instituto Nacional de Cardiología Ignacio Chávez.', foto:'assets/placeholder_user.png', sintesis:'RESEÑA REYNA MORENO RUÍZ ESCOLARIDAD 2015-21017 Maestría en Administración en Sistemas de Salud Facultad de Contaduría y Administración. División de Estudios de Posgrado Universidad Nacional Autónoma de México. Promedio 9.92 2007-2008 Especialidad en Salud en el Trabajo Facultad de Estudios Superiores Zaragoza Universidad Nacional Autónoma de México 1999-2005 Licenciatura en Médico Cirujano Facultad de Medicina, campus Ciudad Universitaria Universidad Nacional Autónoma de México CAPACITACIONES 2...'},
  {nombre:'Edgar Hernández Rendón',pais:'MX',color:blue,org:'IMSS',expertise:'Médico Adscrito a Cirugía Cardiotorácica Hospital de Cardiología CMN Siglo XXI.', foto:'assets/expertos/edgar_hernandez_rendon.jpeg', sintesis:'CURRICULUM VITAE 1.- DATOS PERSONALES Nombre: EDGAR HERNANDEZ RENDON Domicilio: Avenida Patriotismo 504. Esq calle 25, colonia San Pedro de los Pinos. Alcaldía Benito Juarez. CP 03800. Fecha de Nacimiento: 17 DE ENERO DE 1988. Edad: 36 años Estado Civil: Casado RFC: HERE880117S28 CURP: HERE880117HGRRND01 Cedula profesional: Medicina General 7577365 Cedula profesional Especialidad: Cirugía Cardiotorácica 11081308. Teléfono: 5531688663 Correo electrónico: edgaratlas793@hotmail.com, dr.hernandez.ca...'},
  {nombre:'Lic. Enf. Gilberto Díaz Pérez',pais:'MX',color:blue,org:'Perfusión',expertise:'Enfermero Perfusionista y ECMO especialista en el Grupo ECMO-ECLS MÉXICO.', foto:'assets/expertos/lic._enf._gilberto_diaz_perez.jpeg', sintesis:'Sintesis Curriculum Vitae. Del Teniente de Fragata Lic. Enf. Gilberto Díaz Pérez Enfermero Naval por parte de la Escuela de Enfermería de la Armada de México. Lic. En Enfermería Por parte de la Universidad Veracruzana. Especialista en Terapia Intensiva y Cuidados Coronarios, Por la Escuela Militar de Graduados de Sanidad, de la Secretaría de la Defensa Nacional. Especialista en Tecnología Extracorpórea, por parte del Instituto Nacional de Cardiología “Dr. Ignacio Chávez”. Certiﬁcación de Soporte...'},
  {nombre:'Lic. Enf. Sulem Piña Ocampo',pais:'MX',color:blue,org:'HGM',expertise:'Adscrita a Torre Quirúrgica Hospital General de México Dr. Eduardo Liceaga.', foto:'assets/expertos/eeq_sulem_pina_ocampo.jpeg', sintesis:'LICENCIADA EN ENFERMERIA. ENFERMERA QUIRURGICA ADSCRITA A TORRE QUIRURGICA, HOSPITAL GENERAL DE MEXICO DR. EDUARDO LICEAGA, SERVICIO DE QUIROFANO. LE egresado de ENEO/UNAM (FENO). EEQ egresada de ENEO/UNAM (Postécnico). EEQ (Posgrado) ITESCS Instituto Tecnológico De Estudios Superiores y Ciencias de la Salud. DIPLOMADA EN "Atención de Enfermería en los Procesos de Donación y Trasplantes" por la UNAM y SMT. Rotación Formativa en Cirugía de Trasplante Hepático y Renal y Cirugía Biliopancreática de Hospital Clínic de Barcelona España. Profesor Titular de la Capacitación en Trasplante Hepático, Renal y Cardiaco del Hospital General de México. Profesor adjunto del 1er Diplomado de Enfermería en Trasplante de la Sociedad Mexicana de Trasplante. Miembro activo del Capítulo de enfermería de la sociedad Mexicana de Trasplantes.'},
  {nombre:'Mca. Cja Alma Itzel Martínez Vera',pais:'MX',color:blue,org:'Novoinjertos',expertise:'Coordinadora Médica en el Banco de Tejidos musculoesquelético y Piel Novoinjertos.', foto:'assets/expertos/alma_itzel_martinez_vera.jpeg', sintesis:'FORMACIÓN Médica cirujana egresada de la Universidad Nacional Autónoma de México | Ciudad de México. • Internado médico en el Hospital General de México “Dr. Eduardo Liceaga”. • Servicio Social en el Instituto Nacional de Cardiología Ignacio Chávez. • Diplomado en coordinación de Donación de órganos y tejidos con fines de trasplante por el CENATRA. • Técnico procurador de tejido corneal por la UNAM y el Instituto de Oftalmología FAP Conde de Valenciana. • Certificación en aplicación clínica de t...'},
];

const cMX = expertosRaw.filter(x=>x.pais==='MX').length;
const cES = expertosRaw.filter(x=>x.pais==='ES').length;
const cUS = expertosRaw.filter(x=>x.pais==='US').length;
const cGB = expertosRaw.filter(x=>x.pais==='GB').length;
const cCH = expertosRaw.filter(x=>x.pais==='CH').length;
const flagImg = {MX:'https://flagcdn.com/w40/mx.png',ES:'https://flagcdn.com/w40/es.png',US:'https://flagcdn.com/w40/us.png',GB:'https://flagcdn.com/w40/gb.png',CH:'https://flagcdn.com/w40/ch.png'};

export const expertos = expertosRaw.map(x=>({...x,flagImg:flagImg[x.pais]||''}));
export const paises = [
  {count:cMX,label:'México',color:green,flagImg:flagImg.MX},
  {count:cES,label:'España',color:orange,flagImg:flagImg.ES},
  {count:cGB,label:'Inglaterra',color:blue,flagImg:flagImg.GB},
  {count:cCH,label:'Suiza',color:orange,flagImg:flagImg.CH},
  {count:cUS,label:'Estados Unidos',color:blue,flagImg:flagImg.US}
].filter(x=>x.count>0);

export const stats = [
  {value:'6',label:'Fases',color:blue},
  {value:'20',label:'Expertos nacionales e internacionales',color:green},
  {value:'5',label:'Países invitados',color:orange},
  {value:'100+',label:'Horas',color:blue}
];

export const escenarios = [
  {
    num: 1,
    title: 'Diagnóstico de Muerte Encefálica',
    image: 'assets/escenario_1.jpg',
    color: blue,
    tint: '#E6F7FF',
    icon: ic(['M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2']),
    objetivos: [
      'Exploración neurológica sistemática',
      'Pruebas confirmatorias',
      'Documentación adecuada',
      'Criterios clínicos de ME',
      'Test de apnea',
      'Comunicación con familia'
    ],
    pills: ['Protocolo Glasgow 7', 'Interpretación de gabinete', 'Comunicación']
  },
  {
    num: 2,
    title: 'Comunicación de Malas Noticias',
    image: 'assets/escenario_2.jpg',
    color: green,
    tint: '#EEF9D9',
    icon: ic(['M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z']),
    objetivos: [
      'Comunicación compasiva',
      'Contención emocional',
      'Manejo de conflictos',
      'Manejo del duelo familiar',
      'Entrevista de solicitud',
      'Estrategias dialécticas'
    ],
    pills: ['Empatía', 'Escucha activa', 'Manejo de resistencias']
  },
  {
    num: 3,
    title: 'Manejo de ECMO',
    image: 'assets/1616_ecmo.png',
    flip: true,
    bgSize: 'auto 100%',
    bgPos: 'left center',
    overlay: 'linear-gradient(90deg, #fff 0%, #fff 65%, rgba(255,255,255,0) 95%)',
    color: orange,
    tint: '#FFE6CC',
    icon: ic(['M2 5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H2a2 2 0 01-2-2V5z', 'M2 19h20', 'M12 21v-2', 'M8 21h8', 'M6 10l3-3 2 6 3-8 2 5']),
    objetivos: [
      'Preparación del sistema ECMO',
      'Monitorización de parámetros',
      'Optimización de flujos',
      'Canulación arterial-venosa',
      'Troubleshooting de alarmas',
      'Seguridad del sistema'
    ],
    pills: ['Destrezas técnicas', 'Decisiones en emergencia', 'Trabajo en equipo']
  },
  {
    num: 4,
    title: 'Logística de DAC',
    image: 'assets/escenario_4.jpg',
    color: blue,
    tint: '#E6F7FF',
    icon: ic(['M3 18h18M4 18v-5a2 2 0 012-2h12a2 2 0 012 2v5M8 11V7a2 2 0 012-2h4a2 2 0 012 2v4M8 7h8']),
    objetivos: [
      'Coordinación prehospitalaria',
      'Técnica de canulación',
      'Documentación legal',
      'Timing crítico',
      'Preservación regional',
      'Manejo de incertidumbre'
    ],
    pills: ['Liderazgo bajo presión', 'Coordinación', 'Decisiones rápidas']
  },
  {
    num: 5,
    title: 'Entrevista para Donación',
    image: 'assets/escenario_entrevista_new.jpg',
    color: green,
    tint: '#EEF9D9',
    icon: ic(['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2', 'M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M23 21v-2a4 4 0 0 0-3-3.87', 'M16 3.13a4 4 0 0 1 0 7.75']),
    objetivos: [
      'Aproximación familiar integral',
      'Presentación de alternativas',
      'Documentación de autorización',
      'Evaluación de capacidad de decidir',
      'Consenso familiar',
      'Apoyo psicosocial'
    ],
    pills: ['Comunicación estratégica', 'Negociación asertiva', 'Manejo de emociones']
  },
  {
    num: 6,
    title: 'Manejo, Preservación y Envío de Órganos',
    image: 'assets/escenario_6.jpg',
    color: orange,
    tint: '#FFE6CC',
    icon: ic(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z', 'M8 12h8', 'M12 8v8']),
    objetivos: [
      'Embalaje de hígado, riñones y páncreas',
      'Embalaje de corazón y pulmón',
      'Preservación de tejidos',
      'Manejo estéril y bioseguridad',
      'Trazabilidad de muestras',
      'Gestión de envío'
    ],
    pills: ['Cadena de Custodia', 'Preservación', 'Precisión técnica']
  },
  {
    num: 7,
    title: 'Mantenimiento del Donante con Muerte Encefálica',
    image: 'assets/escenario_7.jpg',
    color: blue,
    tint: '#E6F7FF',
    icon: ic(['M22 12h-4l-3 9L9 3l-3 9H2']),
    objetivos: [
      'Soporte ventilatorio y gasometría',
      'Soporte hemodinámico avanzado',
      'Manejo de diabetes insípida',
      'Control térmico y metabólico',
      'Reposición electrolítica',
      'Monitorización invasiva'
    ],
    pills: ['Fisiología', 'Terapia intensiva', 'Metas terapéuticas']
  },
  {
    num: 8,
    title: 'Logística de Donación en Asistolia No Controlada',
    image: 'assets/escenario_8.jpg',
    color: green,
    tint: '#EEF9D9',
    icon: ic(['M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.3 1.5 1.5 2.5', 'M9 18h6', 'M10 22h4']),
    objetivos: [
      'Cadena de supervivencia',
      'Coordinación con urgencias y rescate',
      'Control del tiempo de isquemia caliente',
      'Evaluación de viabilidad en DANC',
      'Soporte vital y canulación urgente',
      'Perfiles éticos y legales'
    ],
    pills: ['Urgencias', 'Logística rápida', 'Marco legal']
  }
];

export const timeline = [
  { week: '17 - 28 Sept', titulo: 'Fase 1: Teórica Virtual Híbrida', color: blue, items: ['Modalidad: En línea', 'Acceso desde el 17 de sept. (duración 1 semana)', '21 Sept (9:00 AM – 12:00 PM): Clase virtual sincrónica', '24 o 25 Sept: Clase virtual'] },
  { week: '28 Sept', titulo: 'Fase 2: Teórica Presencial', color: green, items: ['Sede: Auditorio UVM', 'Horario: 8:30 AM – 4:00 PM'] },
  { week: '29 Sept', titulo: 'Fase 3: Práctica Presencial (Día 1)', color: orange, items: ['Sede: Centro de Simulación UVM', 'Horario: 9:00 AM – 3:00 PM'] },
  { week: '30 Sept', titulo: 'Dos Bloques: UVM', color: blue, items: ['MAÑANA (9:00 AM – 3:00 PM): Fase 3 en Centro de Simulación UVM', 'TARDE (4:00 PM – 6:45 PM): Fase 4 en UVM, Hospital Veterinario'] },
  { week: '1 Oct', titulo: 'Dos Bloques en UVM: Teoría → Práctica', color: orange, items: ['MAÑANA (8:30 AM – 1:25 PM): Fase 5 en UVM', 'TARDE (2:20 PM – 6:00 PM): Fase 6 en UVM'] },
  { week: '2 Oct', titulo: 'Fase 6: Práctica Experimental (Día 2)', color: green, items: ['Sede: UVM, Hospital Veterinario', 'Horario: 8:45 AM – 4:30 PM'] }
];
