const xlsx = require('xlsx');
const wb = xlsx.readFile('C:/Users/Christian Gonzalez/Downloads/CURSO NACIONAL AVANZADO DE LOS PROCESOS DE DONACIÓN DE ÓRGANOS Y TEJIDOS CON FINES DE TRASPLANTE HACIA UN MODELO MEXICANO..xlsx');
wb.SheetNames.forEach(n => {
  console.log('--- SHEET:', n);
  console.log(xlsx.utils.sheet_to_json(wb.Sheets[n]));
});
