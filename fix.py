import re
file_path = 'src/data.jsx'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    fixed = match.group(1).replace('\n', '\\n')
    return "d: '" + fixed + "'"

content = re.sub(r"d:\s*'([^']*)'", replacer, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)
print("done")
