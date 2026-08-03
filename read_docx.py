
import zipfile
import xml.etree.ElementTree as ET
import glob
import os

path = glob.glob(r'C:\Users\Christian Gonzalez\Downloads\SINTESIS Y FOTO DOCENTES-20260803T162947Z-1-001\SINTESIS Y FOTO DOCENTES\DR. RODRIGO L*PEZ FALCONY\*.docx')[0]

def extract_text_from_docx(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
            tree = ET.XML(xml_content)
            WORD_NAMESPACE = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'
            PARA = WORD_NAMESPACE + 'p'
            TEXT = WORD_NAMESPACE + 't'
            paragraphs = []
            for paragraph in tree.iter(PARA):
                texts = [node.text for node in paragraph.iter(TEXT) if node.text]
                if texts:
                    paragraphs.append(''.join(texts))
            return '\n'.join(paragraphs)
    except Exception as e:
        return str(e)

print(extract_text_from_docx(path))

