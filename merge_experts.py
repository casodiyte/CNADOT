import json
import re

with open('experts_dump.json', 'r', encoding='utf-8') as f:
    dump = json.load(f)

# Normalize names for matching
def normalize(name):
    # remove titles
    name = re.sub(r'^(Dr\.|Dra\.|Lic\.|Enf\.|M\.|en|C\.|EEQ|Mca\.|Cja|Educ\.)\s+', '', name, flags=re.IGNORECASE)
    name = re.sub(r'^(Dr\.|Dra\.|Lic\.|Enf\.|M\.|en|C\.|EEQ|Mca\.|Cja|Educ\.)\s+', '', name, flags=re.IGNORECASE)
    name = re.sub(r'^(Dr\.|Dra\.|Lic\.|Enf\.|M\.|en|C\.|EEQ|Mca\.|Cja|Educ\.)\s+', '', name, flags=re.IGNORECASE)
    name = name.lower()
    name = re.sub(r'[^a-zñáéíóú]', '', name)
    return name

dump_map = {normalize(d['folder']): d for d in dump}

# Current experts in data.jsx
expertos_raw = [
  {"nombre":'Dra. Rosa Erro Aboytia',"pais":'MX',"color":"blue","org":'CENATRA',"expertise":'Directora General del Centro Nacional de Trasplantes.'},
  {"nombre":'Dr. Rodrigo López Falcony',"pais":'MX',"color":"blue","org":'CETRA GTO',"expertise":'Director del Centro Estatal de Trasplantes del Estado de Guanajuato.'},
  {"nombre":'Dr. Walter Adolfo Querevalu Murillo',"pais":'MX',"color":"blue","org":'IMSS',"expertise":'Coordinador de donación del CMN Siglo XXl hospital de especialidades.'},
  {"nombre":'Dra. Belén Estébanez Montiel',"pais":'ES',"color":"orange","org":'España',"expertise":'Coordinadora Médica de Trasplantes del Hospital Universitario La Paz, Madrid.'},
  {"nombre":'Dr. Juan Salvador Rodríguez Jamaica',"pais":'MX',"color":"blue","org":'CETRA GTO',"expertise":'Director Médico en Centro Estatal de Trasplantes de Guanajuato.'},
  {"nombre":'Dr. En Educ. Victor Manuel Figueroa Corchado',"pais":'MX',"color":"blue","org":'Relámpagos',"expertise":'Jefe de la unidad de rescate aéreo relámpagos, Estado de México.'},
  {"nombre":'Dr. Constantino Fondevila Campo',"pais":'ES',"color":"green","org":'España',"expertise":'Presidente de la sociedad española de trasplantes.'},
  {"nombre":'Dr. Alonso Mateos Rodríguez',"pais":'ES',"color":"orange","org":'ONT · España',"expertise":'Coordinador adjunto oficina regional de coordinación de trasplantes comunidad de Madrid.'},
  {"nombre":'Dr. Juan Ignacio Torres González',"pais":'ES',"color":"blue","org":'Hospital Clínico San Carlos',"expertise":'Enfermero coordinador de trasplantes Hospital Clínico San Carlos.'},
  {"nombre":'Lic. Enf. Gilberto Díaz Pérez',"pais":'MX',"color":"blue","org":'Perfusión',"expertise":'Enfermero Perfusionista y ECMO especialista en el Grupo ECMO-ECLS MÉXICO.'},
  {"nombre":'Dr. Patricio Santillán Doherty',"pais":'MX',"color":"blue","org":'Bioética',"expertise":'Titular de la Comisión Nacional de Bioética.'},
  {"nombre":'Dra. Kenia Yazmin Reyes Gutierrez',"pais":'MX',"color":"blue","org":'CETRA GTO',"expertise":'Médico Coordinador de Donación de órganos y tejidos con fines de trasplante.'},
  {"nombre":'Dr. José Moya Medina',"pais":'MX',"color":"blue","org":'OPS',"expertise":'Representante de la OPS/OMS México.'},
  {"nombre":'Dra. Nubia Denisse Avilez Pacheco',"pais":'MX',"color":"blue","org":'IMSS',"expertise":'Jefa de Área Médica de donación IMSS.'},
  {"nombre":'Dra. Erika Rivera Duron',"pais":'MX',"color":"blue","org":'IMSS',"expertise":'Jefe de Área de trasplantes IMSS.'},
  {"nombre":'Dra. Magdalena García Baysa',"pais":'MX',"color":"blue","org":'CCINSHAE',"expertise":'Directora de coordinación interinstitucional CCINSHAE.'},
  {"nombre":'Mauricio Beltrán Durán',"pais":'US',"color":"green","org":'OPS · Washington',"expertise":'Regional Advisor Blood and Transplant Services Innovation, PAHO/WHO.'},
  {"nombre":'Dr. Héctor Vilca Meléndez',"pais":'GB',"color":"green","org":'Inglaterra',"expertise":'Consultant Transplant Surgeon at the Birmingham Children\'s Hospital.'},
  {"nombre":'Dr. Aczel Isidoro Sánchez Cedillo',"pais":'MX',"color":"green","org":'STALYC',"expertise":'Presidente Sociedad de trasplante de América Latina y el Caribe STALYC.'},
  {"nombre":'Enf. Laura Fernandez Lebrusán',"pais":'ES',"color":"orange","org":'España',"expertise":'Enfermera en Cuidados críticos en Hospital Universitario Puerta de Hierro Majadahonda.'},
  {"nombre":'Mca. Cja Alma Itzel Martínez Vera',"pais":'MX',"color":"blue","org":'Novoinjertos',"expertise":'Coordinadora Médica en el Banco de Tejidos musculoesquelético y Piel Novoinjertos.'},
  {"nombre":'Dra. Reyna Moreno Ruiz',"pais":'MX',"color":"blue","org":'INCICh',"expertise":'Coordinadora Hospitalaria de Donación y Trasplante, Instituto Nacional de Cardiología Ignacio Chávez.'},
  {"nombre":'Edgar Hernández Rendón',"pais":'MX',"color":"blue","org":'IMSS',"expertise":'Médico Adscrito a Cirugía Cardiotorácica Hospital de Cardiología CMN Siglo XXI.'},
  {"nombre":'Lic. Enf. Sulem Piña Ocampo',"pais":'MX',"color":"blue","org":'HGM',"expertise":'Adscrita a Torre Quirúrgica Hospital General de México Dr. Eduardo Liceaga.'},
  {"nombre":'Dr. Francisco Hernández Oliveros',"pais":'ES',"color":"orange","org":'España',"expertise":'Jefe de sección de trasplante pediátrico. Hospital Universitario la Paz.'},
  {"nombre":'Dr. Francisco Sachiñas',"pais":'MX',"color":"blue","org":'México',"expertise":'Imagenología Avanzada y Fisiopatología Hemodinámica.'}
]

for exp in expertos_raw:
    norm_name = normalize(exp["nombre"])
    if norm_name in dump_map:
        d = dump_map[norm_name]
        exp['foto'] = d['photo']
        exp['sintesis'] = d['text']
    else:
        # Fallbacks or partial matches
        for k in dump_map:
            if norm_name in k or k in norm_name:
                exp['foto'] = dump_map[k]['photo']
                exp['sintesis'] = dump_map[k]['text']
                break
        if 'foto' not in exp:
            exp['foto'] = ""
            exp['sintesis'] = ""

# SORTING LOGIC
# 1. Dra. Rosa Erro Aboytia
# 2. Foreigners (pais != MX)
# 3. Nationals (pais == MX)

def sort_key(exp):
    if "Rosa Erro" in exp["nombre"]:
        return (0, "")
    if exp["pais"] != "MX":
        return (1, exp["nombre"])
    return (2, exp["nombre"])

expertos_raw.sort(key=sort_key)

# Generate JS code
js_out = "const expertosRaw = [\n"
for exp in expertos_raw:
    sintesis = exp['sintesis'].replace("'", "\\'").replace("\n", " ").strip()
    foto = exp['foto']
    if not foto:
        foto = "assets/placeholder_user.png" # default fallback
    js_out += f"  {{nombre:'{exp['nombre']}',pais:'{exp['pais']}',color:{exp['color']},org:'{exp['org']}',expertise:'{exp['expertise']}', foto:'{foto}', sintesis:'{sintesis}'}},\n"
js_out += "];"

with open("expertos_out.js", "w", encoding='utf-8') as f:
    f.write(js_out)
print("done")
