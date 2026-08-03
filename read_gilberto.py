
from pypdf import PdfReader
import glob

path = glob.glob(r'C:\Users\Christian Gonzalez\Downloads\SINTESIS Y FOTO DOCENTES-20260803T162947Z-1-001\SINTESIS Y FOTO DOCENTES\LIC. ENF. GILBERTO D*AZ P*REZ\*.pdf')[0]

reader = PdfReader(path)
text = ''
for page in reader.pages:
    text += page.extract_text() + '\n'

text = ' '.join(text.split()).strip()
print('GILBERTO:', text)

