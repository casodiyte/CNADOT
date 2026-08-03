const fs = require('fs');

let code = fs.readFileSync('src/PagoStripe.jsx', 'utf8');

// 1. Add CustomSelect component
const customSelectCode = `
const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <div 
        className="premium-input premium-select"
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: value ? '#1c3f4a' : '#9cb1b8', display: 'flex', alignItems: 'center' }}
      >
        {value || placeholder}
      </div>
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: 6,
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          border: '1px solid #e1ebf0',
          zIndex: 50,
          overflow: 'hidden',
          animation: 'cnFadeIn .2s ease-out',
          maxHeight: 250,
          overflowY: 'auto'
        }}>
          {options.map((opt, i) => (
            <div 
              key={i} 
              onClick={() => { onChange({ target: { value: opt } }); setIsOpen(false); }}
              style={{ padding: '14px 16px', cursor: 'pointer', transition: '.2s', background: value === opt ? '#f4fbfe' : '#fff', color: value === opt ? '#00b2b8' : '#1c3f4a', fontWeight: value === opt ? 600 : 400, borderBottom: i !== options.length - 1 ? '1px solid #f0f4f5' : 'none' }}
              onMouseOver={(e) => e.target.style.background = '#f4fbfe'}
              onMouseOut={(e) => e.target.style.background = value === opt ? '#f4fbfe' : '#fff'}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
`;

if (!code.includes('CustomSelect')) {
  code = code.replace('export default function PagoStripe() {', customSelectCode + '\nexport default function PagoStripe() {');
}

// Replace fase select
code = code.replace(/<select required value=\{form\.fase\} onChange=\{setF\('fase'\)\} className=\"premium-input premium-select\">\s*<option[^>]*>.*?<\/option>\s*\{fases\.map\(f => <option key=\{f\} value=\{f\}>\{f\}<\/option>\)\}\s*<\/select>/s, 
  "<CustomSelect value={form.fase} onChange={setF('fase')} options={fases} placeholder='-- Selecciona la fase --' />");

// Replace perfil select
code = code.replace(/<select required value=\{form\.perfil\} onChange=\{setF\('perfil'\)\} className=\"premium-input premium-select\">\s*<option[^>]*>.*?<\/option>\s*\{perfilesDisponibles\.map\(p => <option key=\{p\} value=\{p\}>\{p\}<\/option>\)\}\s*<\/select>/s, 
  "<CustomSelect value={form.perfil} onChange={setF('perfil')} options={perfilesDisponibles} placeholder='-- Selecciona tu perfil --' />");

// Replace especialidad quirurgica select
code = code.replace(/<select required value=\{form\.subEspecialidad\} onChange=\{setF\('subEspecialidad'\)\} className=\"premium-input premium-select\">\s*<option[^>]*>.*?<\/option>\s*<option value=\"Abdomen\">Abdomen<\/option>\s*<option value=\"Tórax\">Tórax<\/option>\s*<option value=\"Cardiovasculares\">Cardiovasculares<\/option>\s*<option value=\"Otro \(especificar\)\">Otro \(especificar\)<\/option>\s*<\/select>/s, 
  "<CustomSelect value={form.subEspecialidad} onChange={setF('subEspecialidad')} options={['Abdomen', 'Tórax', 'Cardiovasculares', 'Otro (especificar)']} placeholder='-- Selecciona --' />");

// Replace especialidad medica select
code = code.replace(/<select required value=\{form\.subEspecialidad\} onChange=\{setF\('subEspecialidad'\)\} className=\"premium-input premium-select\">\s*<option[^>]*>.*?<\/option>\s*<option value=\"Anestesiólogo\">Anestesiólogo<\/option>\s*<option value=\"Intensivista\">Intensivista<\/option>\s*<option value=\"Urgenciólogo\">Urgenciólogo<\/option>\s*<option value=\"Internista\">Internista<\/option>\s*<option value=\"Nefrólogo\">Nefrólogo<\/option>\s*<option value=\"Otro \(especificar\)\">Otro \(especificar\)<\/option>\s*<\/select>/s, 
  "<CustomSelect value={form.subEspecialidad} onChange={setF('subEspecialidad')} options={['Anestesiólogo', 'Intensivista', 'Urgenciólogo', 'Internista', 'Nefrólogo', 'Otro (especificar)']} placeholder='-- Selecciona --' />");

fs.writeFileSync('src/PagoStripe.jsx', code);
console.log('CustomSelect injected successfully');
