const fs = require('fs');

let data = fs.readFileSync('src/data.jsx', 'utf8');

const rosa = `Egresada de la Facultad de Medicina de la Universidad Autónoma de Nayarit. Realizó su residencia en Pediatría en el Nuevo Hospital Civil de Guadalajara "Juan I. Menchaca" Universidad de Guadalajara, Jalisco. Sub-especialidad en Cirugía Pediátrica en el Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde" de la misma Universidad. Posteriormente realizó Alta Especialidad en Trasplante Renal Pediátrico por un periodo de dos años, en el Hospital Infantil de México Federico Gómez, CDMX y la UNAM. Realizó un adiestramiento de un año en Trasplante Hepático, Intestinal y Multivisceral, en el Hospital Infantil Universitario La Paz, en Madrid, España. Pertenece a 5 Sociedades Médicas Nacionales. Está certificada por el Consejo Mexicano de Pediatría, Consejo Mexicano de Cirugía Pediátrica, y en Trasplantes por el Consejo Mexicano de Cirugía General. ha participado como profesor asociado en cursos de bipartición hepática y donación en asistolia controlada y actualmente es Directora General del Centro Nacional de Trasplantes CENATRA.`;

const rodrigo = `Cirujano Urólogo y de trasplante renal. Egresado como médico cirujano de la Universidad de Guanajuato. Urología y Trasplante renal en Centro Médico Nacional de Occidente del IMSS avalado por la Universidad de Guadalajara. Urólogo Re-certificado 2020 - 2025. Urólogo Re-certificado en trasplante renal por el CONACEM No. 16. Urólogo y cirujano de trasplante renal en IMSS UMAE T1. Urólogo de trasplante renal Secretaria de Salud del Estado de Guanajuato. Director General del Centro Estatal de Trasplantes de la Secretaria de Salud del Estado de Guanajuato 2011 a la fecha. Encargado del Programa de Trasplante del Hospital Angeles León, Grupo Angeles Servicios de Salud 2011 a la fecha. Presidente de la Sociedad Mexicana de Trasplantes 2020-2021. Vicepresidente de la Sociedad Mexicana de Trasplantes 2019 - 2020. Coordinador de capítulo de donación y procuración de órganos de la Sociedad Mexicana de Trasplante 2014 - 2019. Miembro de la Mesa Directiva de la Sociedad Mexicana de Urología como coordinador del capítulo de trasplante renal 2022-2024. Council para America Latina de la ISODP de The Transplantation Society. Miembro de la American Society of Transplantation y de The Transplantation Society.`;

const sulem = `LICENCIADA EN ENFERMERIA. ENFERMERA QUIRURGICA ADSCRITA A TORRE QUIRURGICA, HOSPITAL GENERAL DE MEXICO DR. EDUARDO LICEAGA, SERVICIO DE QUIROFANO. LE egresado de ENEO/UNAM (FENO). EEQ egresada de ENEO/UNAM (Postécnico). EEQ (Posgrado) ITESCS Instituto Tecnológico De Estudios Superiores y Ciencias de la Salud. DIPLOMADA EN "Atención de Enfermería en los Procesos de Donación y Trasplantes" por la UNAM y SMT. Rotación Formativa en Cirugía de Trasplante Hepático y Renal y Cirugía Biliopancreática de Hospital Clínic de Barcelona España. Profesor Titular de la Capacitación en Trasplante Hepático, Renal y Cardiaco del Hospital General de México. Profesor adjunto del 1er Diplomado de Enfermería en Trasplante de la Sociedad Mexicana de Trasplante. Miembro activo del Capítulo de enfermería de la sociedad Mexicana de Trasplantes.`;

// Escape quotes just in case
const escapeStr = str => str.replace(/'/g, "\\'");

data = data.replace(
    /{nombre:'Dra\. Rosa Erro Aboytia',([^}]+)sintesis:''}/g, 
    `{nombre:'Dra. Rosa Erro Aboytia',$1sintesis:'${escapeStr(rosa)}'}`
);

data = data.replace(
    /{nombre:'Dr\. Rodrigo López Falcony',([^}]+)sintesis:''}/g, 
    `{nombre:'Dr. Rodrigo López Falcony',$1sintesis:'${escapeStr(rodrigo)}'}`
);

data = data.replace(
    /{nombre:'Lic\. Enf\. Sulem Piña Ocampo',([^}]+)sintesis:''}/g, 
    `{nombre:'Lic. Enf. Sulem Piña Ocampo',$1sintesis:'${escapeStr(sulem)}'}`
);

fs.writeFileSync('src/data.jsx', data);
console.log('CVs updated successfully in src/data.jsx');
