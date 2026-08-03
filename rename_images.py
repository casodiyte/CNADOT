
import os
import unicodedata

folder = r'c:\Users\Christian Gonzalez\Desktop\Aplicación web CNADOT completa (1)\public\assets\expertos'

for file_name in os.listdir(folder):
    # Remove accents from file name
    nfkd_form = unicodedata.normalize('NFKD', file_name)
    ascii_name = u''.join([c for c in nfkd_form if not unicodedata.combining(c)])
    
    # Due to weird powershell characters (), it might not work. So let's replace typical bad characters:
    bad_name = file_name
    
    if ascii_name != bad_name:
        old_path = os.path.join(folder, file_name)
        new_path = os.path.join(folder, ascii_name)
        if not os.path.exists(new_path):
            os.rename(old_path, new_path)
            print(f'Renamed {file_name} to {ascii_name}')


