import os
import glob
import json
import shutil
from pypdf import PdfReader

base_dir = r"C:\Users\Christian Gonzalez\Downloads\SINTESIS Y FOTO DOCENTES-20260803T162947Z-1-001\SINTESIS Y FOTO DOCENTES"
dest_img_dir = r"c:\Users\Christian Gonzalez\Desktop\Aplicación web CNADOT completa (1)\public\assets\expertos"

if not os.path.exists(dest_img_dir):
    os.makedirs(dest_img_dir)

experts_data = []

for folder_name in os.listdir(base_dir):
    folder_path = os.path.join(base_dir, folder_name)
    if not os.path.isdir(folder_path):
        continue
    
    cv_text = ""
    photo_path = ""
    photo_dest = ""
    
    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        ext = file_name.lower().split('.')[-1]
        
        if ext == 'pdf':
            try:
                reader = PdfReader(file_path)
                for page in reader.pages:
                    cv_text += page.extract_text() + "\n"
            except Exception as e:
                cv_text += f"[Error reading PDF: {e}]"
        elif ext in ['jpg', 'jpeg', 'png', 'jfif']:
            photo_path = file_path
            new_file_name = folder_name.replace(" ", "_").lower() + "." + ext
            photo_dest = os.path.join(dest_img_dir, new_file_name)
            shutil.copy2(photo_path, photo_dest)
            photo_dest = f"assets/expertos/{new_file_name}"
            
    # Clean up text
    cv_text = " ".join(cv_text.split()).strip()
    
    experts_data.append({
        "folder": folder_name,
        "photo": photo_dest,
        "text": cv_text[:500] + "..." if len(cv_text) > 500 else cv_text
    })

with open('experts_dump.json', 'w', encoding='utf-8') as f:
    json.dump(experts_data, f, ensure_ascii=False, indent=2)

print("Done. Dumped to experts_dump.json")
