const fs = require('fs');

const code = `
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

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
        style={{ color: value ? '#1c3f4a' : '#9cb1b8', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
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

const packages = [
  {
    fase: 'Fase 2 (Teórica Anáhuac)',
    options: [
      { perfil: 'Cirujano(a)', price: 1500 },
      { perfil: 'Perfusionista', price: 1000 },
      { perfil: 'Enfermero(a)', price: 500 },
      { perfil: 'Médico Especialista', price: 1000 }
    ]
  },
  {
    fase: 'Fase 2 y 3 (Teórica y Simulación Anáhuac)',
    options: [
      { perfil: 'Coordinador(a) de Donación', price: 7000 }
    ]
  },
  {
    fase: 'Fase 4, 5 y 6 (Experimental)',
    options: [
      { perfil: 'Cirujano(a)', price: 9000 },
      { perfil: 'Perfusionista', price: 5000 },
      { perfil: 'Enfermero(a)', price: 4000 },
      { perfil: 'Médico Especialista', price: 4000 },
      { perfil: 'Coordinador(a) de Donación', price: 7000 },
      { perfil: 'Coordinador(a) (Inscrito previamente a Fase 2/3)', price: 3500 }
    ]
  }
];

export default function PagoStripe() {
  const [selectedPkg, setSelectedPkg] = useState(null);
  
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    tel: '',
    inst: '',
    pais: '',
    subEspecialidad: '',
    subEspecialidadTexto: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const setF = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const closeModal = () => {
    setSelectedPkg(null);
    setErrorMsg('');
  };

  const getSubProfileString = () => {
    if (selectedPkg && (selectedPkg.perfil === 'Cirujano(a)' || selectedPkg.perfil === 'Médico Especialista')) {
      return form.subEspecialidad === 'Otro (especificar)' ? form.subEspecialidadTexto : form.subEspecialidad;
    }
    return '';
  };

  const procesarPago = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!form.nombres || !form.apellidos || !form.email || !form.tel) {
      setErrorMsg('Por favor completa todos los datos obligatorios.');
      return;
    }

    if (selectedPkg.perfil === 'Cirujano(a)' || selectedPkg.perfil === 'Médico Especialista') {
      if (!form.subEspecialidad) {
        setErrorMsg('Por favor selecciona tu especialidad médica.');
        return;
      }
      if (form.subEspecialidad === 'Otro (especificar)' && !form.subEspecialidadTexto) {
        setErrorMsg('Por favor especifica tu especialidad.');
        return;
      }
    }

    setLoading(true);
    try {
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: selectedPkg.perfil,
          subProfile: getSubProfileString(),
          packageType: selectedPkg.fase,
          precioCalculado: selectedPkg.price,
          userDetails: {
            nombre: \`\${form.nombres} \${form.apellidos}\`,
            email: form.email,
            tel: form.tel,
            inst: form.inst,
            pais: form.pais,
          }
        })
      });

      const data = await response.json();
      if (response.ok && data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || 'Error al iniciar el pago.');
      }
    } catch (err) {
      console.error('Error:', err);
      setErrorMsg(err.message || 'Error de conexión. Intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#f8fbfc', minHeight: '100vh', padding: '60px 20px', fontFamily: "'Poppins', sans-serif" }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: 50, animation: 'cnFadeIn .4s ease-out' }}>
          <h1 style={{ fontSize: 38, color: '#1c3f4a', margin: '0 0 16px', fontWeight: 800 }}>Inscripción Oficial</h1>
          <p style={{ color: '#556', fontSize: 18, margin: 0 }}>Selecciona la fase y tu perfil para continuar con el pago seguro.</p>
        </div>

        {packages.map((pkg, i) => (
          <div key={i} style={{ marginBottom: 50, animation: \`cnFadeIn \${0.4 + i*0.1}s ease-out\` }}>
            <h2 style={{ fontSize: 22, color: '#0099CC', borderBottom: '2px solid #e1ebf0', paddingBottom: 10, marginBottom: 20 }}>{pkg.fase}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {pkg.options.map((opt, j) => (
                <div 
                  key={j} 
                  onClick={() => setSelectedPkg({ fase: pkg.fase, ...opt })}
                  style={{ 
                    background: '#fff', 
                    borderRadius: 16, 
                    padding: 24, 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)', 
                    cursor: 'pointer',
                    transition: 'all .2s ease-in-out',
                    border: '1px solid #e1ebf0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,153,204,0.15)';
                    e.currentTarget.style.borderColor = '#0099CC';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = '#e1ebf0';
                  }}
                >
                  <h3 style={{ margin: '0 0 14px', color: '#1c3f4a', fontSize: 18, fontWeight: 700 }}>{opt.perfil}</h3>
                  <div style={{ marginTop: 'auto', paddingTop: 14, borderTop: '1px dashed #e1ebf0' }}>
                    <span style={{ fontSize: 32, fontWeight: 800, color: '#FF6600', letterSpacing: -1 }}>\${opt.price.toLocaleString()}</span>
                    <span style={{ fontSize: 14, color: '#999', marginLeft: 4, fontWeight: 600 }}>MXN</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPkg && (
        <div style={{ 
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 9999, padding: 20, animation: 'cnFadeIn .2s ease-out'
        }}>
          <div style={{
            background: '#fff', borderRadius: 24, width: '100%', maxWidth: 500,
            maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
            position: 'relative'
          }}>
            
            <button 
              onClick={closeModal}
              style={{ position: 'absolute', top: 20, right: 20, background: '#f0f4f5', border: 'none', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', fontSize: 18, color: '#556', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '.2s' }}
              onMouseOver={(e) => e.currentTarget.style.background = '#e1ebf0'}
              onMouseOut={(e) => e.currentTarget.style.background = '#f0f4f5'}
            >
              ✕
            </button>

            <div style={{ padding: '32px 32px 20px', background: '#f8fbfc', borderBottom: '1px solid #e1ebf0', borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
              <span style={{ fontSize: 11, fontWeight: 800, color: '#0099CC', textTransform: 'uppercase', letterSpacing: 1 }}>{selectedPkg.fase}</span>
              <h2 style={{ margin: '8px 0 0', color: '#1c3f4a', fontSize: 22, fontWeight: 700 }}>{selectedPkg.perfil}</h2>
              <div style={{ marginTop: 12 }}>
                <span style={{ fontSize: 34, fontWeight: 800, color: '#FF6600', letterSpacing: -1 }}>\${selectedPkg.price.toLocaleString()}</span>
                <span style={{ fontSize: 16, color: '#999', marginLeft: 6, fontWeight: 600 }}>MXN</span>
              </div>
            </div>

            <form onSubmit={procesarPago} style={{ padding: 32 }}>
              {errorMsg && (
                <div style={{ background: '#ffeef0', color: '#e63946', padding: 16, borderRadius: 12, marginBottom: 24, fontSize: 14, fontWeight: 500, borderLeft: '4px solid #e63946' }}>
                  {errorMsg}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Nombres *</span>
                  <input required value={form.nombres} onChange={setF('nombres')} className="premium-input" placeholder="Ej. Juan" />
                </label>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Apellidos *</span>
                  <input required value={form.apellidos} onChange={setF('apellidos')} className="premium-input" placeholder="Ej. Pérez" />
                </label>
              </div>

              <label style={{ display: 'block', marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Correo Electrónico *</span>
                <input required type="email" value={form.email} onChange={setF('email')} className="premium-input" placeholder="correo@hospital.com" />
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Teléfono *</span>
                  <input required value={form.tel} onChange={setF('tel')} className="premium-input" placeholder="10 dígitos" />
                </label>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>País</span>
                  <input value={form.pais} onChange={setF('pais')} className="premium-input" placeholder="Ej. México" />
                </label>
              </div>

              <label style={{ display: 'block', marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Institución de procedencia</span>
                <input value={form.inst} onChange={setF('inst')} className="premium-input" placeholder="Hospital o Centro de Salud" />
              </label>

              {/* ESPECIALIDADES */}
              {selectedPkg.perfil === 'Cirujano(a)' && (
                <label style={{ display: 'block', marginBottom: 16, animation: 'cnFadeIn .3s ease-out' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Especialidad quirúrgica *</span>
                  <CustomSelect 
                    value={form.subEspecialidad} 
                    onChange={setF('subEspecialidad')} 
                    options={['Abdomen', 'Tórax', 'Cardiovasculares', 'Otro (especificar)']} 
                    placeholder="-- Selecciona --" 
                  />
                </label>
              )}

              {selectedPkg.perfil === 'Médico Especialista' && (
                <label style={{ display: 'block', marginBottom: 16, animation: 'cnFadeIn .3s ease-out' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Especialidad Médica *</span>
                  <CustomSelect 
                    value={form.subEspecialidad} 
                    onChange={setF('subEspecialidad')} 
                    options={['Anestesiólogo', 'Intensivista', 'Urgenciólogo', 'Internista', 'Nefrólogo', 'Otro (especificar)']} 
                    placeholder="-- Selecciona --" 
                  />
                </label>
              )}

              {(selectedPkg.perfil === 'Cirujano(a)' || selectedPkg.perfil === 'Médico Especialista') && form.subEspecialidad === 'Otro (especificar)' && (
                <label style={{ display: 'block', marginBottom: 16, animation: 'cnFadeIn .3s ease-out' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8 }}>Especifica tu especialidad *</span>
                  <input required value={form.subEspecialidadTexto} onChange={setF('subEspecialidadTexto')} className="premium-input" placeholder="Escribe tu especialidad" />
                </label>
              )}

              <button type="submit" disabled={loading} style={{ 
                marginTop: 24, width: '100%',
                background: loading ? '#d1d8dc' : 'linear-gradient(90deg, #FF6600, #ff8533)', 
                color: '#fff', border: 'none', padding: '16px 20px', borderRadius: 12, 
                fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, 
                cursor: loading ? 'not-allowed' : 'pointer', 
                boxShadow: loading ? 'none' : '0 6px 16px rgba(255,102,0,.25)', 
                transition: '.2s', display: 'flex', justifyContent: 'center', alignItems: 'center' 
              }}>
                {loading ? 'Procesando...' : 'Pagar Inscripción Segura 🔒'}
              </button>
              
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <span style={{ fontSize: 12, color: '#889', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontWeight: 600 }}>
                  Pagos seguros procesados por 
                  <span style={{ color: '#635BFF', fontWeight: 800, fontSize: 16, letterSpacing: -0.5 }}>stripe</span>
                </span>
              </div>
            </form>

          </div>
        </div>
      )}
    </div>
  );
}
\`;

fs.writeFileSync('src/PagoStripe.jsx', code);
console.log('PagoStripe reescrito correctamente');
