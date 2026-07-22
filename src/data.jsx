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

const R = (bg, cells) => ({ bg, cells });

export const fases = [
  {key:'f1',n:'1',titulo:'Teórica Virtual Híbrida',cuando:'17–21 Septiembre',meta:'Asincrónica + Sincrónica',color:blue,color2:blue,tint:'#E6F7FF',
   objetivo:'Homogeneizar las bases teórico-conceptuales del equipo multidisciplinario mediante la revisión selectiva de literatura científica y la introducción formal a los modelos de comunicación en crisis.',
   blocks:[{title:'Contenidos y clases virtuales',cols:['Fecha','Contenido / Tema','Ponentes','Duración'],rows:[
     R('#fff',['—','Manual Clínico de Comunicación en Situaciones de Crisis y Malas Noticias (lectura asincrónica)','—','Flexible']),
     R('#fafcfd',['21 Sep · 9:00–12:00','Comunicación Intrahospitalaria, Herramientas de Comunicación y Entrevista Familiar','Dr. López Falcony · Dr. J. Rodríguez · Dr. Martínez Bernal · Dra. K. Reyes','3 h']),
     R('#fff',['24 Sep','Perspectiva Internacional de la Donación y Marco Normativo (OPS)','Dr. Mauricio Beltrán (Washington)','1 h']),
     R('#fafcfd',['17 Sep →','Acceso a material previo · Examen diagnóstico inicial','—','1 semana']) ]}],
   temas:['Comunicación en crisis','Marco normativo OPS','Entrevista familiar','Examen diagnóstico']},
  {key:'f2',n:'2',titulo:'Teórica Presencial',cuando:'28 Septiembre',meta:'Auditorio de Rectoría · Universidad Anáhuac',color:green,color2:green,tint:'#EEF9D9',
   objetivo:'Integrar los paradigmas asistenciales, legales y bioéticos de vanguardia en donación y trasplantes mediante ponencias magistrales interactivas con expertos de la red nacional e internacional.',
   temas:['Marco normativo','Gobernanza y calidad','Muerte encefálica','DAC y DANC','Soporte ECMO','Donación pediátrica','Bioética'] },
  {key:'f3',n:'3',titulo:'Práctica · Simulación Clínica',cuando:'29–30 Septiembre',meta:'Centro de Simulación Anáhuac',color:orange,color2:orange,tint:'#FFE6CC',
   objetivo:'Transferir el conocimiento teórico a la resolución de problemas clínicos complejos en tiempo real, mediante la inmersión en escenarios simulados de alta fidelidad y técnicas estructuradas de debriefing.',
   temas:['Muerte encefálica','Entrevista familiar','ECMO','Logística DAC','Debriefing estructurado'] },
  {key:'f4',n:'4',titulo:'Teórica Quirúrgica Experimental',cuando:'1 Octubre',meta:'Universidad del Valle de México (UVM)',color:blue,color2:green,tint:'#EAF6EC',
   objetivo:'Integrar y sistematizar los fundamentos anatómicos, criterios de selección, innovaciones tecnológicas y variantes de técnica quirúrgica compleja (Split, DAC, robótica y perfusión dinámica) para unificar criterios y estandarizar la toma de decisiones críticas.',
   temas:['Procuración multiorgánica','Técnica Split','Cirugía hepática extrema','Modelado 3D','Robótica','Cirugía multivisceral','Perfusión dinámica','Órganos marginales','DAC quirúrgica'] },
  {key:'f5',n:'5',titulo:'Práctica Experimental Quirúrgica',cuando:'1–2 Octubre',meta:'Laboratorio Quirúrgico Experimental · UVM',color:green,color2:orange,tint:'#FBF1E6',
   objetivo:'Perfeccionar destrezas psicomotrices, técnicas quirúrgicas de canulación y modelos de preservación dinámica mediante práctica in vivo y cirugía ex situ de alta especialidad.',
   temas:['Destrezas psicomotrices','Canulación avanzada','Preservación dinámica','Cirugía in vivo','Cirugía ex situ','DAC en quirófano'] }
];

const rows2=[
  R('#fff',['8:30','—','Llegada de alumnos','—','','—']),
  R('#fafcfd',['8:50','—','Bienvenida Universidad Anáhuac','—','','—']),
  R('#fff',['9:00','1','El Modelo Mexicano de Donación y Trasplantes (CENATRA)','Dra. Rosa Erro','🇲🇽','15 min']),
  R('#fafcfd',['9:15','2','El Modelo Español de Donación (ONT)','Dr. Alonso Mateos Rodríguez','🇪🇸','15 min']),
  R('#fff',['9:30','3','Estrategia Panamericana y Cooperación Regional (OPS)','Dr. José Moya Medina','🇲🇽','15 min']),
  R('#fafcfd',['9:45','4','Gobernanza y Gestión de Calidad Hospitalaria (CETRA GTO)','Dr. Rodrigo López Falcony','🇲🇽','15 min']),
  R('#fff',['10:00','5','Gestión de Riesgos y Seguridad del Paciente','Dr. Juan S. Rodríguez Jamaica','🇲🇽','15 min']),
  R('#fafcfd',['10:15','6','Detección, Evaluación y Validación del Donante Potencial','Dra. Nubia Avilez','🇲🇽','15 min']),
  R('#f3f8ec',['10:30','—','Coffee Break','—','','15 min']),
  R('#fff',['10:45','7','Soporte Fisiológico y Mantenimiento Hemodinámico del Donante','Dr. Walter Querebalu','🇲🇽','15 min']),
  R('#fafcfd',['11:00','8','Clasificación y Criterios de Selección en las Modalidades','Dr. Juan I. Torres González','🇪🇸','15 min']),
  R('#fff',['11:15','9','Certificación de Muerte Encefálica: Glasgow 7 al Test de Apnea','Dra. Ericka Rivera','🇲🇽','15 min']),
  R('#fafcfd',['11:30','10','Donación en Asistolia Controlada (DAC)','Dr. Juan I. Torres González','🇪🇸','15 min']),
  R('#fff',['11:45','11','Donación en Asistolia No Controlada (DANC)','Dr. Alonso Mateos Rodríguez','🇪🇸','15 min']),
  R('#fafcfd',['12:00','12','Donación Pediátrica y Neonatal','Dr. Belén Estébanez Montiel','🇪🇸','15 min']),
  R('#fff',['12:15','13','ECMO y Perfusión Regional Normotérmica','Perf. Gilberto Pérez','🇲🇽','15 min']),
  R('#fafcfd',['12:30','14','Preservación Avanzada y Cadena de Custodia','Dra. Magdalena García Baysa','🇲🇽','15 min']),
  R('#fff',['12:45','15','Logística y Transporte Biológico Seguro','Dr. Victor Figueroa (RED KAIROS)','🇲🇽','15 min']),
  R('#fafcfd',['13:00','16','Dilemas Bioéticos: El Impacto de la DAC','Dr. Patricio Santillán','🇲🇽','15 min']),
  R('#f3f8ec',['13:15','—','Comida','—','','1 h']),
  R('#fff',['14:15','17','Perlas de la Comunicación de Malas Noticias y Entrevista Familiar','Dr. J. Rodríguez · Dra. K. Reyes','🇲🇽','95 min']),
  R('#fafcfd',['15:50','—','Q&A y cierre primer día','—','','10 min'])
];
const rows5=[
  R('#fff',['8:30','—','Llegada','—']),
  R('#fafcfd',['8:50','—','Bienvenida UVM','—']),
  R('#fff',['9:00','1','De la Donación Convencional a la Vanguardia: Procuración Multiorgánica en México','15 min']),
  R('#fafcfd',['9:15','2','Protocolo y Selección del Donante Ideal para Técnica Split','15 min']),
  R('#fff',['9:30','3','Bipartición Hepática In Situ y Ex Situ (Tips & Tricks)','15 min']),
  R('#fafcfd',['9:45','4','Cirugía Hepática Extrema: Monosegmento y Segmento III','15 min']),
  R('#fff',['10:00','5','Imagenología Avanzada y Modelado 3D del Injerto Hepático','15 min']),
  R('#fafcfd',['10:15','6','Complicaciones Vasculares y Biliares Tempranas en Split','15 min']),
  R('#fff',['10:30','7','Síndrome Small-for-Size y Large-for-Size','15 min']),
  R('#f0f7fa',['10:45','—','Coffee Break','15 min']),
  R('#fff',['11:00','8','Hepatectomía y Procuración Asistida por Robótica','15 min']),
  R('#fafcfd',['11:15','9','Cirugía Multivisceral: Intestino y Bloque Abdominal','15 min']),
  R('#fff',['11:30','10','Perfusión Dinámica Ex Situ: Hipotérmica y Normotérmica','15 min']),
  R('#fafcfd',['11:45','11','Rescate de Órganos Marginales con ECMO y Preservación Regional','15 min']),
  R('#fff',['12:00','12','Preservación en Procuración Cardio-Pulmonar Compleja','15 min']),
  R('#fafcfd',['12:15','13','Implementación y Futuro de la DAC en México','15 min']),
  R('#fff',['12:30','14','Score de Viabilidad Quirúrgica en Donantes de Asistolia','15 min']),
  R('#fafcfd',['12:45','15','Análisis de Video Clínico: Pasos Críticos en la DAC','15 min']),
  R('#fff',['13:00','—','Q&A y cierre','15 min']),
  R('#f0f7fa',['13:15','—','Comida','1 h'])
];
const rows3a=[
  R('#fff',['9:00','Llegada','—']),
  R('#fafcfd',['9:00–9:15','Bienvenida, reglas y compromisos','—']),
  R('#fff',['9:15–10:15','Round 1','A: Esc. 1 · B: Esc. 2 · C: Esc. 3 · D: Esc. 4']),
  R('#fef4ec',['10:15–10:30','Coffee Break','—']),
  R('#fff',['10:30–11:30','Round 2','Rotación de grupos']),
  R('#fafcfd',['11:30–12:30','Round 3','Rotación de grupos']),
  R('#fef4ec',['12:30–13:45','Comida','—']),
  R('#fff',['13:45–14:45','Round 4','Rotación de grupos']),
  R('#fafcfd',['14:45–15:00','Q&A y cierre del día','—'])
];
const rows3b=[
  R('#fff',['9:00','Llegada','—']),
  R('#fafcfd',['9:00–10:00','Round 5','Escenario 5 · todos los grupos']),
  R('#fef4ec',['10:00–10:15','Coffee Break','—']),
  R('#fff',['10:15–11:15','Round 6','Rotación de grupos']),
  R('#fafcfd',['11:15–12:15','Round 7','Rotación de grupos']),
  R('#fef4ec',['12:15–13:30','Comida','—']),
  R('#fff',['13:30–14:30','Round 8','Rotación de grupos']),
  R('#fafcfd',['14:30–14:45','Q&A del curso','—']),
  R('#eef9d9',['14:45–15:00','Clausura y entrega de constancias','—'])
];
const rows6a=[
  R('#fff',['14:15–14:30','Vestidores / preparación','—','Laboratorio Quirúrgico Experimental']),
  R('#fafcfd',['14:30–17:30','Estación Quirúrgica A','Donación en Asistolia Controlada (DAC)','Entrenamiento DAC · modelos quirúrgicos in vivo']),
  R('#fff',['17:30–18:00','Debriefing y cierre','—','Reflexión y retroalimentación'])
];
const rows6b=[
  R('#fff',['8:30–9:00','Vestidores / preparación','—','Laboratorio Quirúrgico Experimental']),
  R('#fafcfd',['9:00–12:00','Estación Quirúrgica A','DAC','Entrenamiento DAC · modelos in vivo']),
  R('#fff',['12:00–12:30','Debriefing','—','Reflexión']),
  R('#fbf1e6',['12:30–13:30','Comida','—','—']),
  R('#fafcfd',['13:45–16:45','Estación Quirúrgica A','DAC','Entrenamiento DAC · modelos in vivo']),
  R('#fff',['16:45–17:15','Debriefing y clausura','—','Cierre de prácticas quirúrgicas'])
];

const cols2=['Hora','No.','Tema','Ponente','País','Duración'];
const cols5=['Hora','No.','Tema','Duración'];
const cols3=['Hora','Actividad','Escenarios (rotación)'];
const cols6=['Hora','Actividad','Estación','Objetivo'];

fases[1].blocks=[{title:'Programa · 28 Septiembre',cols:cols2,rows:rows2}];
fases[2].blocks=[{title:'Día 1 · 29 Septiembre',cols:cols3,rows:rows3a},{title:'Día 2 · 30 Septiembre',cols:cols3,rows:rows3b}];
fases[3].blocks=[{title:'Programa · 1 Octubre (UVM)',cols:cols5,rows:rows5}];
fases[4].blocks=[{title:'Día 1 · 1 Octubre',cols:cols6,rows:rows6a},{title:'Día 2 · 2 Octubre',cols:cols6,rows:rows6b}];

export const programaDias=[
  {title:'Fase 2 · Teórica Presencial',sub:'28 Sep · Anáhuac',color:green,cols:cols2,rows:rows2},
  {title:'Fase 3 · Simulación — Día 1',sub:'29 Sep',color:orange,cols:cols3,rows:rows3a},
  {title:'Fase 3 · Simulación — Día 2',sub:'30 Sep',color:orange,cols:cols3,rows:rows3b},
  {title:'Fase 4 · Teórica Quirúrgica',sub:'1 Oct · UVM',color:blue,cols:cols5,rows:rows5},
  {title:'Fase 5 · Práctica Quirúrgica — Día 1',sub:'1 Oct · UVM',color:green,cols:cols6,rows:rows6a},
  {title:'Fase 5 · Práctica Quirúrgica — Día 2',sub:'2 Oct · UVM',color:green,cols:cols6,rows:rows6b}
];

export const perfiles=[
  {titulo:'Coordinadores de Donación',color:blue,tint:'#E6F7FF',icon:ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M12 11h4', 'M12 16h4', 'M8 11h.01', 'M8 16h.01'],blue),items:['Detección de donantes potenciales','Logística hospitalaria','Vínculo legal-administrativo','Aproximación familiar']},
  {titulo:'Intensivistas (Medicina Crítica)',color:green,tint:'#EEF9D9',icon:icc([<path key={1} d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />,<path key={2} d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />,<circle key={3} cx="20" cy="10" r="2" />],green),items:['Mantenimiento hemodinámico del donante','Cuidado en UCI','Certificación clínica de ME','Estabilización de órganos']},
  {titulo:'Anestesiólogos',color:orange,tint:'#FFE6CC',icon:ic(['m18 2 4 4', 'm17 7-1-1', 'm19 9-1-1', 'm18 8-8 8-3-3 8-8', 'm10 16-6 6', 'm4.5 13.5 6 6', 'm2 22 3-3'],orange),items:['Mantenimiento de homeostasis','Estabilidad en quirófano','Tiempos críticos de extracción','Monitoreo continuo']},
  {titulo:'Cirujanos de Tórax, CV y Abdomen',color:blue,tint:'#E6F7FF',icon:icc([<circle key={1} cx="6" cy="6" r="3" />,<circle key={2} cx="6" cy="18" r="3" />,<path key={3} d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />],blue),items:['Liderazgo técnico quirúrgico','Procuración de órganos','Canulación de vasos','Evaluación in situ de viabilidad','Técnicas complejas (Split, robótica)']},
  {titulo:'Perfusionistas',color:green,tint:'#EEF9D9',icon:ic(['M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z'],green),items:['Manejo de sistemas ECMO','Monitorización de CEC','Preservación orgánica','Perfusión dinámica','Máquinas de perfusión']},
  {titulo:'Enfermeras Quirúrgicas',color:orange,tint:'#FFE6CC',icon:ic(['M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2 2.5 0 4.5 1 7 2a1 1 0 0 1 1 1z', 'M8 12h8', 'M12 8v8'],orange),items:['Instrumentación especializada','Gestión de soluciones de preservación','Preparación de mesa de banco','Cuidado aséptico']}
];

export const escenarios=[
  {n:'1',titulo:'Diagnóstico de Muerte Encefálica',color:blue,tint:'#E6F7FF',bgImg:'assets/escenario_1.jpg',icon:ic(['M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44A2.5 2.5 0 0 1 4 17.5 2.5 2.5 0 0 1 3.5 13 2.5 2.5 0 0 1 5 8.5 2.5 2.5 0 0 1 7 4.5 2.5 2.5 0 0 1 9.5 2z']),objetivos:['Exploración neurológica sistemática','Criterios clínicos de ME','Pruebas confirmatorias','Test de apnea','Documentación adecuada','Comunicación con familia'],comp:['Protocolo Glasgow 7','Interpretación de gabinete','Comunicación']},
  {n:'2',titulo:'Comunicación de Malas Noticias',color:green,tint:'#EEF9D9',bgImg:'assets/escenario_2.jpg',icon:ic(['M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z']),objetivos:['Comunicación compasiva','Manejo del duelo familiar','Contención emocional','Entrevista de solicitud','Manejo de conflictos','Estrategias dialécticas'],comp:['Empatía','Escucha activa','Manejo de resistencias']},
  {n:'3',titulo:'Manejo de ECMO',color:orange,tint:'#FFE6CC',bgImg:'assets/escenario_3.jpg',icon:icc([
    <rect key={1} x={2.5} y={4} width={12} height={8} rx={1.5} />,
    <path key={2} d="M5 8h1.4l1-2 1.6 4 1-2H12" />,
    <path key={3} d="M18 5h1a2.5 2.5 0 0 1 2.5 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-8" />,
    <circle key={4} cx={6} cy={16} r={1.6} />,
    <circle key={5} cx={11} cy={16} r={1.6} />,
    <path key={6} d="M6 17.6V19M11 17.6V19M3.5 19h10" />
  ]),objetivos:['Preparación del sistema ECMO','Canulación arterial-venosa','Monitorización de parámetros','Troubleshooting de alarmas','Optimización de flujos','Seguridad del sistema'],comp:['Destrezas técnicas','Decisiones en emergencia','Trabajo en equipo']},
  {n:'4',titulo:'Logística de DAC',color:blue,tint:'#E6F7FF',bgImg:'assets/escenario_4.jpg',icon:icc([
    <path key={1} d="M4 3l3.6 3.6" />,
    <path key={2} d="M3.2 7.6A3.2 3.2 0 0 1 7.6 3.2" />,
    <rect key={3} x={2} y={12} width={20} height={3} rx={1} />,
    <path key={4} d="M9 15v2h6v-2" />,
    <path key={5} d="M12 17v3" />,
    <path key={6} d="M8.5 20h7" />
  ]),objetivos:['Coordinación prehospitalaria','Timing crítico','Técnica de canulación','Preservación regional','Documentación legal','Manejo de incertidumbre'],comp:['Liderazgo bajo presión','Coordinación','Decisiones rápidas']},
  {n:'5',titulo:'Entrevista para Donación',color:green,tint:'#EEF9D9',bgImg:'assets/escenario_5.jpg',icon:ic(['M8 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z','M2 21a6 6 0 0 1 12 0','M16 3.13a4 4 0 0 1 0 7.75','M22 21a6 6 0 0 0-5-5.91']),objetivos:['Aproximación familiar integral','Evaluación de capacidad de decidir','Presentación de alternativas','Consenso familiar','Documentación de autorización','Apoyo psicosocial'],comp:['Comunicación estratégica','Negociación asertiva','Manejo de emociones']}
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
  {nombre:'Dra. Kenia Reyes',pais:'MX',color:blue,org:'Comunicación',expertise:'Entrevista de solicitud de donación en crisis.'}
];

const cMX = expertosRaw.filter(x=>x.pais==='MX').length;
const cES = expertosRaw.filter(x=>x.pais==='ES').length;
const cUS = expertosRaw.filter(x=>x.pais==='US').length;
const flagImg = {MX:'https://flagcdn.com/w40/mx.png',ES:'https://flagcdn.com/w40/es.png',US:'https://flagcdn.com/w40/us.png'};

export const expertos = expertosRaw.map(x=>({...x,flagImg:flagImg[x.pais]||''}));
export const paises = [
  {count:cMX,label:'México',color:green,flagImg:flagImg.MX},
  {count:cES,label:'España',color:orange,flagImg:flagImg.ES},
  {count:cUS,label:'Estados Unidos',color:blue,flagImg:flagImg.US}
];

export const logos = ['assets/anahuac.png','assets/uvm.png','assets/ont.png','assets/ufv.jpg','assets/sanidad.jpg','assets/set.png','assets/stalyc.png','assets/orct.jfif','assets/logo_extra1.png','assets/logo_extra2.png','assets/logo_extra3.png'];

export const timeline = [
  {week:'Semana 1 · 17–21 Sep',titulo:'Fase 1 · Teórica Virtual Híbrida',color:blue,items:['Material asincrónico','Clases virtuales (21 y 24 Sep)','Examen diagnóstico']},
  {week:'Semana 2 · 28 Sep',titulo:'Fase 2 · Teórica Presencial',color:green,items:['Auditorio Rectoría · Anáhuac','17 sesiones · 16+ expertos','Networking presencial']},
  {week:'Semana 2 · 29–30 Sep',titulo:'Fase 3 · Simulación de Alta Fidelidad',color:orange,items:['Centro de Simulación Anáhuac','5 escenarios rotativos','Grupos A · B · C · D','Debriefing estructurado']},
  {week:'Semana 3 · 1 Oct (mañana)',titulo:'Fase 4 · Teórica Quirúrgica Experimental',color:blue,items:['UVM','15 sesiones (Split, robótica, DAC)','Cirugía avanzada']},
  {week:'Semana 3 · 1–2 Oct',titulo:'Fase 5 · Práctica Experimental Quirúrgica',color:orange,items:['Lab Quirúrgico UVM · in vivo','Entrenamiento DAC','Preservación dinámica']}
];

export const objetivos = [
  {titulo:'Marco Teórico y Normativo',tint:'#E6F7FF',icon:ic(['M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2', 'M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z', 'M9 14h6', 'M12 11v6'], blue),texto:'Actualizar el marco teórico y normativo vigente en México e internacionalmente respecto a las diversas modalidades de donación de órganos y tejidos.'},
  {titulo:'Comunicación y Crisis',tint:'#EEF9D9',icon:ic(['M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16', 'm7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9', 'm2 15 6 6', 'M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 3.3c-1.2.5-2 1.2-2.5 1.7-.5-.5-1.3-1.2-2.5-1.7A2.73 2.73 0 0 0 8.3 5.8c0 1.1.8 2 1.5 2.7L13.5 12z'], green),texto:'Perfeccionar habilidades críticas de comunicación asertiva para el manejo de malas noticias y la entrevista de solicitud de donación familiar en escenarios de crisis.'},
  {titulo:'Toma de Decisiones Clínicas',tint:'#FFE6CC',icon:ic(['M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z', 'M3.22 8.77 5.5 11l2.5-4.5 3 7 2.5-4.5 2 2'], orange),texto:'Sistematizar la toma de decisiones clínicas y logísticas en escenarios complejos mediante simulación, incorporando soporte orgánico avanzado (ECMO) y el mantenimiento crítico del donante.'},
  {titulo:'Destrezas Quirúrgicas Avanzadas',tint:'#EAF6EC',icon:ic(['m18 2 4 4', 'm17 7-1-1', 'm19 9-1-1', 'm18 8-8 8-3-3 8-8', 'm10 16-6 6', 'm4.5 13.5 6 6', 'm2 22 3-3'], blue),texto:'Desarrollar destrezas quirúrgicas avanzadas in vivo y ex situ para la procuración, canulación y preservación, integrando el entrenamiento en bipartición hepática (Split) y perfusión de órganos ex situ.'}
];

export const stats = [
  {value:'6',label:'Fases',color:blue},
  {value:'16+',label:'Expertos',color:green},
  {value:'3',label:'Países',color:orange},
  {value:'100+',label:'Horas',color:blue}
];

export const navItems = [
  ['home','Home'],['objetivos','Objetivos'],['fases','Fases'],['programa','Programa'],
  ['perfiles','Perfiles'],['escenarios','Escenarios'],['expertos','Expertos'],['cronograma','Cronograma']
];
