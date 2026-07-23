import React from 'react';

export const blue = '#0099CC';
export const green = '#66CC00';
export const orange = '#FF6600';

const ic = (paths, color) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color || '#fff'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    {paths.map((d, i) => <path key={i} d={d} />)}
  </svg>
);
const icc = (children, color) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color || '#fff'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
  'assets/consejo.png',
  'assets/alianza.png',
  'assets/hce.png',
  'assets/stalyc.png',
  'assets/orct.jfif'
];

export const objetivos = [
  {titulo:'Marco Teórico y Normativo',tint:'#E6F7FF',color:blue,icon:ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M9 14h6', 'M12 11v6']),texto:'Actualizar el marco teórico y normativo vigente en México e internacionalmente respecto a las diversas modalidades de donación de órganos y tejidos.'},
  {titulo:'Comunicación y Crisis',tint:'#EEF9D9',color:green,icon:ic(['M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16', 'm7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9', 'm2 15 6 6', 'M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 3.3c-1.2.5-2 1.2-2.5 1.7-.5-.5-1.3-1.2-2.5-1.7A2.73 2.73 0 0 0 8.3 5.8c0 1.1.8 2 1.5 2.7L13.5 12z']),texto:'Perfeccionar habilidades críticas de comunicación asertiva para el manejo de malas noticias y la entrevista de solicitud de donación familiar en escenarios de crisis.'},
  {titulo:'Toma de Decisiones Clínicas',tint:'#FFE6CC',color:orange,icon:ic(['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z', 'M3.22 8.77 5.5 11l2.5-4.5 3 7 2.5-4.5 2 2']),texto:'Sistematizar la toma de decisiones clínicas y logísticas en escenarios complejos mediante simulación clínica, incorporando soporte orgánico avanzado (ECMO) y el mantenimiento crítico del donante.'},
  {titulo:'Destrezas Quirúrgicas Avanzadas',tint:'#EAF6EC',color:blue,icon:ic(['m18 2 4 4', 'm17 7-1-1', 'm19 9-1-1', 'm18 8-8 8-3-3 8-8', 'm10 16-6 6', 'm4.5 13.5 6 6', 'm2 22 3-3']),texto:'Desarrollar destrezas quirúrgicas avanzadas in vivo y ex situ para la procuración, canulación y preservación de órganos y tejidos en modelos experimentales, integrando el entrenamiento especializado en bipartición hepática (técnica split) y perfusión de órganos ex situ.'}
];

export const perfiles=[
  {titulo:'Coordinadores de Donación', color:blue, tint:'#E6F7FF', icon:ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01']), desc:'Responsables de la detección, logística hospitalaria, vínculo legal-administrativo y la aproximación familiar.'},
  {titulo:'Intensivistas (Medicina Crítica)', color:green, tint:'#EEF9D9', icon:icc([<path key={1} d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />,<path key={2} d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />,<circle key={3} cx="20" cy="10" r="2" />]), desc:'Encargados del mantenimiento hemodinámico óptimo del donante en la UCI y la certificación clínica de la Muerte Encefálica.'},
  {titulo:'Anestesiólogos', color:orange, tint:'#FFE6CC', icon:ic(['m18 2 4 4', 'm17 7-1-1', 'm19 9-1-1', 'm18 8-8 8-3-3 8-8', 'm10 16-6 6', 'm4.5 13.5 6 6', 'm2 22 3-3']), desc:'Responsables de mantener la homeostasis y estabilidad del donante en el quirófano durante los tiempos críticos y la extracción.'},
  {titulo:'Cirujanos de Tórax, Cardiovasculares y Abdomen', color:blue, tint:'#E6F7FF', icon:icc([<circle key={1} cx="6" cy="6" r="3" />,<circle key={2} cx="6" cy="18" r="3" />,<path key={3} d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />]), desc:'Líderes de la técnica quirúrgica de procuración, canulación y evaluación in situ de la viabilidad de los injertos.'},
  {titulo:'Perfusionistas', color:green, tint:'#EEF9D9', icon:ic(['M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z']), desc:'Especialistas a cargo del cebado, monitorización y manejo del soporte circulatorio extracorpóreo (CEC/ECMO) para preservación orgánica.'},
  {titulo:'Enfermeras Quirúrgicas', color:orange, tint:'#FFE6CC', icon:ic(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z', 'M8 12h8', 'M12 8v8']), desc:'Profesionales clave en la instrumentación especializada, la gestión de soluciones de preservación celular y la preparación de la mesa de banco (back-table).'}
];

export const programa = [
  {
    n: '1', titulo: 'Fase Teórica Virtual Híbrida', cuando: 'Hasta el 28 de Septiembre 2026', meta: 'Asincrónica + Sincrónica', color: blue, color2: blue, tint: '#E6F7FF',
    objetivo: 'Homogeneizar las bases teórico-conceptuales del equipo multidisciplinario a través de la revisión selectiva de literatura científica y la introducción formal a los modelos de comunicación en crisis.',
    temas: [
      { t: 'Material Previo', d: 'Revisión del Manual Clínico de Comunicación en Situaciones de Crisis y Malas Noticias.' },
      { t: 'Comunicación Intrahospitalaria', d: 'Herramientas de Comunicación y Entrevista Familiar. Ponentes: Dr. Rodrigo López Falcony, Dr. Juan Rodríguez, Dr. Martínez Bernal y Dra. Kenia Reyes.' },
      { t: 'Perspectiva Internacional de la Donación y Marco Normativo', d: 'Perspectiva por parte de la OPS. Ponente: Dr. Mauricio Beltrán (Washington).' }
    ]
  },
  {
    n: '2', titulo: 'Fase Teórica Presencial', cuando: '28 de Septiembre 2026', meta: 'Auditorio de Rectoría · Universidad Anáhuac', color: green, color2: green, tint: '#EEF9D9',
    objetivo: 'Integrar los paradigmas asistenciales, legales y bioéticos de vanguardia en donación y trasplantes mediante ponencias magistrales interactivas con expertos de la red nacional e internacional.',
    temas: [
      { t: 'El Modelo Mexicano de Donación y Trasplantes', d: 'Realidad Actual y Retos Normativos. Contextualizar el marco legal y regulatorio vigente en México frente al panorama global.' },
      { t: 'El Modelo Español de Donación', d: 'Lecciones Aprendidas y Estrategias de Éxito. Analizar el sistema organizativo y de gestión de la ONT.' },
      { t: 'Estrategia Panamericana', d: 'Perspectiva, Marco Normativo y Cooperación Regional de la Donación (OPS).' },
      { t: 'Gobernanza y Gestión de Calidad', d: 'Análisis de indicadores clave (KPIs) en los Procesos de Donación Hospitalaria.' },
      { t: 'Gestión de Riesgos y Seguridad del Paciente', d: 'Identificar y mitigar proactivamente los riesgos clínicos y administrativos en el Proceso de Donación.' },
      { t: 'Criterios Avanzados de Detección', d: 'Evaluación y Validación estricta del Donante Potencial basándose en criterios de seguridad biológica.' },
      { t: 'Soporte Fisiológico y Mantenimiento Hemodinámico', d: 'Estrategias críticas y metas terapéuticas avanzadas (metabólicas, ventilatorias y hemodinámicas).' },
      { t: 'Clasificación y Criterios de Selección', d: 'Categorización en las modalidades de donación para ampliar el pool de donantes de manera segura.' },
      { t: 'Certificación de la Muerte Encefálica', d: 'Del Tamizaje con Glasgow 7 al Test de Apnea. Estandarización clínica y uso de pruebas confirmatorias.' },
      { t: 'Donación en Asistolia Controlada (DAC)', d: 'Límites del Tratamiento y Tiempos Críticos.' },
      { t: 'Donación en Asistolia No Controlada (DANC)', d: 'Coordinación Prehospitalaria y Hospitalaria. Optimización de tiempos de respuesta.' },
      { t: 'Donación Pediátrica y Neonatal', d: 'Consideraciones Fisiológicas, Legales y Abordaje Familiar.' },
      { t: 'Soporte ECMO y PRN', d: 'Oxigenación por Membrana Extracorpórea (ECMO) y Perfusión Regional Normotérmica (PRN).' },
      { t: 'Preservación Avanzada', d: 'Triple Embalaje y Cadena de Custodia de Órganos y Tejidos.' },
      { t: 'Logística y Transporte Biológico Seguro', d: 'Gestión de Rutas Críticas (aérea y terrestre).' },
      { t: 'Dilemas Bioéticos en el Futuro', d: 'El Impacto de la DAC y los desafíos éticos, legales y deontológicos.' },
      { t: 'Perlas de la Comunicación', d: 'Comunicación de Malas Noticias y Entrevista Familiar. Herramientas de contención emocional.' }
    ]
  },
  {
    n: '3', titulo: 'Práctica Presencial: Simulación Clínica', cuando: '29 y 30 de Septiembre 2026', meta: 'Centro de Simulación Anáhuac', color: orange, color2: orange, tint: '#FFE6CC',
    objetivo: 'Transferir el conocimiento teórico a la resolución de problemas clínicos complejos en tiempo real, mediante la inmersión en escenarios simulados de alta fidelidad y técnicas estructuradas de debriefing.',
    temas: [
      { t: 'Escenario 1: Diagnóstico Muerte Encefálica', d: 'Práctica con grupos rotativos para aplicar los criterios clínicos.' },
      { t: 'Escenario 2: Comunicación de Malas Noticias', d: 'Simulación de contención y abordaje familiar.' },
      { t: 'Escenario 3: Manejo ECMO', d: 'Simulación clínica y mantenimiento.' },
      { t: 'Escenario 4: Logística DAC', d: 'Simulación de los tiempos críticos y procesos en asistolia controlada.' },
      { t: 'Escenario 5: Entrevista para Donación', d: 'Ejecución práctica de estrategias de comunicación.' },
      { t: 'Escenario 6: Manejo, Preservación y Envío de Órganos', d: 'Proceso logístico práctico.' },
      { t: 'Escenario 7: Mantenimiento del Donante', d: 'Mantenimiento del Donante con Muerte Encefálica.' },
      { t: 'Escenario 8: Logística DANC', d: 'Logística de Donación en Asistolia No Controlada.' }
    ]
  },
  {
    n: '4', titulo: 'Fase Teórica Quirúrgica Experimental', cuando: '1 de Octubre 2026', meta: 'UVM', color: blue, color2: green, tint: '#EAF6EC',
    objetivo: 'Integrar y sistematizar los fundamentos anatómicos, criterios de selección avanzados, innovaciones tecnológicas y variantes de técnica quirúrgica compleja, con el fin de unificar criterios clínicos y estandarizar la toma de decisiones críticas.',
    temas: [
      { t: 'De la Donación Convencional a la Vanguardia', d: 'Evolución y Perspectivas de la Procuración Multiorgánica en México.' },
      { t: 'Criterios de Excelencia: Protocolo Split', d: 'Protocolo y Selección del Donante Ideal para la Técnica Split.' },
      { t: 'Bipartición Hepática', d: 'Bipartición Hepática In Situ y Ex Situ: Estrategias Quirúrgicas (Tips & Tricks) para Optimizar la Lista de Espera.' },
      { t: 'Cirugía Hepática Extrema', d: 'Indicaciones y Técnica Quirúrgica en Trasplante de Monosegmento y Segmento III.' },
      { t: 'Imagenología Avanzada y Modelado 3D', d: 'Planificación Quirúrgica del Injerto Hepático.' },
      { t: 'Prevención y Resolución de Complicaciones', d: 'Complicaciones Quirúrgicas Vasculares y Biliares Tempranas en Split.' },
      { t: 'Fisiopatología Hemodinámica Hepática', d: 'Manejo del Síndrome Small-for-Size y Large-for-Size.' },
      { t: 'Innovación Quirúrgica Robótica', d: 'Estado Actual de la Hepatectomía y Procuración Asistida por Robótica.' },
      { t: 'Cirugía Multivisceral', d: 'Abordajes Técnicos Avanzados en el Trasplante de Intestino y Bloque Abdominal.' },
      { t: 'Perfusión Dinámica Ex Situ', d: 'Beneficios Clínicos del Uso de Máquinas de Perfusión Hipotérmica y Normotérmica.' },
      { t: 'Rescate de Órganos Marginales', d: 'A través del soporte ECMO y Preservación Regional Normotérmica.' },
      { t: 'Preservación Catiónica y Quirúrgica', d: 'En la Procuración Cardio-Pulmonar Compleja.' },
      { t: 'El Cambio de Paradigma Quirúrgico', d: 'Implementación y Futuro de la DAC en México.' },
      { t: 'Validación y Score de Viabilidad', d: 'Validación Quirúrgica en Donantes de Asistolia Controlada.' },
      { t: 'Análisis de Video Clínico', d: 'Pasos Críticos en la Donación en Asistolia Controlada.' }
    ]
  },
  {
    n: '5', titulo: 'Práctica Presencial Quirúrgica', cuando: '1 y 2 de Octubre 2026', meta: 'Laboratorio Experimental UVM', color: green, color2: orange, tint: '#FBF1E6',
    objetivo: 'Perfeccionar destrezas psicomotrices, técnicas quirúrgicas de canulación y modelos de preservación dinámica mediante práctica in vivo y cirugía ex situ de alta especialidad.',
    temas: [
      { t: 'Estación Quirúrgica A: Donación en Asistolia Controlada', d: 'Modelos Quirúrgicos In Vivo. Objetivo: entrenar DAC para incrementar la tasa de donación.' },
      { t: 'Estación Quirúrgica B: Perfusión de Órganos Ex Situ', d: 'Sala Quirúrgica. Recuperar más órganos marginales.' },
      { t: 'Estación Quirúrgica C: Bipartición Hepática', d: 'Adquirir habilidades técnicas para la bipartición y el trasplante de ambos segmentos.' }
    ]
  }
];

const expertosRaw=[
  {nombre:'Dra. Rosa Erro',pais:'MX',color:blue,org:'CENATRA',expertise:'Marco normativo, regulación y gobernanza del modelo mexicano.'},
  {nombre:'Dr. Alonso Mateos Rodríguez',pais:'ES',color:orange,org:'ONT · España',expertise:'Modelo español, donación en asistolia (DANC) y coordinación hospitalaria.'},
  {nombre:'Dr. José Moya Medina',pais:'MX',color:blue,org:'OPS',expertise:'Estrategia panamericana y cooperación regional.'},
  {nombre:'Dr. Rodrigo López Falcony',pais:'MX',color:blue,org:'CETRA GTO',expertise:'Gobernanza y gestión de calidad hospitalaria.'},
  {nombre:'Dr. Juan S. Rodríguez Jamaica',pais:'MX',color:blue,org:'CETRA GTO',expertise:'Gestión de riesgos y seguridad del paciente.'},
  {nombre:'Dra. Nubia Avilez',pais:'MX',color:blue,org:'Detección de donantes',expertise:'Evaluación y validación del donante potencial.'},
  {nombre:'Dr. Walter Querebalu',pais:'MX',color:blue,org:'Medicina crítica',expertise:'Soporte fisiológico y mantenimiento hemodinámico.'},
  {nombre:'Dr. Juan I. Torres González',pais:'ES',color:orange,org:'España',expertise:'Criterios de selección y donación en asistolia controlada (DAC).'},
  {nombre:'Dra. Ericka Rivera',pais:'MX',color:blue,org:'Neurología crítica',expertise:'Certificación de muerte encefálica y test de apnea.'},
  {nombre:'Dr. Belén Estébanez Montiel',pais:'ES',color:orange,org:'España',expertise:'Donación pediátrica y neonatal.'},
  {nombre:'Perf. Gilberto Pérez',pais:'MX',color:blue,org:'Perfusión',expertise:'ECMO y perfusión regional normotérmica.'},
  {nombre:'Dra. Magdalena García Baysa',pais:'MX',color:blue,org:'Procuración',expertise:'Preservación avanzada y cadena de custodia.'},
  {nombre:'Dr. Victor Figueroa',pais:'MX',color:blue,org:'RED KAIROS',expertise:'Logística y transporte biológico seguro.'},
  {nombre:'Dr. Patricio Santillán',pais:'MX',color:blue,org:'Bioética',expertise:'Dilemas bioéticos y el impacto de la DAC.'},
  {nombre:'Dr. Mauricio Beltrán',pais:'US',color:green,org:'OPS · Washington',expertise:'Perspectiva internacional y estándares regionales.'},
  {nombre:'Dr. Juan Rodríguez',pais:'MX',color:blue,org:'Comunicación',expertise:'Comunicación de malas noticias y entrevista familiar.'},
  {nombre:'Dra. Kenia Reyes',pais:'MX',color:blue,org:'Comunicación',expertise:'Entrevista de solicitud de donación en crisis.'},
  {nombre:'Dr. Héctor Vilca Meléndez',pais:'GB',color:green,org:'Inglaterra',expertise:'Cirugía Hepática Extrema.'},
  {nombre:'Dr. Constantino Fondevila Campo',pais:'GB',color:green,org:'Inglaterra',expertise:'Prevención de Complicaciones y Robótica.'},
  {nombre:'Dr. Gustaf Herlenius',pais:'CH',color:orange,org:'Suiza',expertise:'Cirugía Multivisceral.'}
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
];

export const stats = [
  {value:'5',label:'Fases',color:blue},
  {value:'20',label:'Expertos',color:green},
  {value:'5',label:'Países',color:orange},
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
    image: 'assets/escenario_3.jpg',
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
    image: 'assets/escenario_5.jpg',
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
  }
];
