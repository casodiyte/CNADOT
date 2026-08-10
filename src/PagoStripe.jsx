import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';

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
      { id: 'f2-cirujano', perfil: 'Cirujano(a)', price: 1500 },
      { id: 'f2-perfusionista', perfil: 'Perfusionista', price: 1000 },
      { id: 'f2-enfermero', perfil: 'Enfermero(a)', price: 500 },
      { id: 'f2-medico', perfil: 'Médico Especialista', price: 1000 }
    ]
  },
  {
    fase: 'Fase 2 y 3 (Teórica y Simulación Anáhuac)',
    options: [
      { id: 'f23-coordinador', perfil: 'Coordinador(a) de Donación', price: 4000 }
    ]
  },
  {
    fase: 'Fase 4, 5 y 6 (Experimental)',
    options: [
      { id: 'f456-cirujano', perfil: 'Cirujano(a)', price: 6000 },
      { id: 'f456-perfusionista', perfil: 'Perfusionista', price: 4000 },
      { id: 'f456-enfermero', perfil: 'Enfermero(a)', price: 3000 },
      { id: 'f456-medico', perfil: 'Médico Especialista', price: 4000 },
      { id: 'f456-coordinador', perfil: 'Coordinador(a) de Donación', price: 4000 },
      { id: 'f456-coordinador-desc', perfil: 'Coordinador(a) (Inscrito previamente a Fase 2/3)', price: 2000 }
    ]
  }
];

export default function PagoStripe() {
  const { faseUrl } = useParams();
  
  const displayPackages = packages.filter(pkg => {
    if (!faseUrl) return true;
    if (faseUrl === 'fase-2' && pkg.fase.includes('Fase 2 (')) return true;
    if (faseUrl === 'fase-2-3' && pkg.fase.includes('Fase 2 y 3')) return true;
    if (faseUrl === 'fase-4-5-6' && pkg.fase.includes('Fase 4, 5 y 6')) return true;
    return false;
  });

  const [selectedPkgs, setSelectedPkgs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  // Handle URL plan param for instant open
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const planId = params.get('plan');
    if (planId && selectedPkgs.length === 0) {
      for (const pkg of packages) {
        const found = pkg.options.find(opt => opt.id === planId);
        if (found) {
          setSelectedPkgs([{ fase: pkg.fase, ...found }]);
          setIsModalOpen(true);
          break;
        }
      }
    }
  }, []);

  const toggleSelection = (pkgFase, opt) => {
    setSelectedPkgs(prev => {
      const exists = prev.find(p => p.id === opt.id);
      if (exists) {
        return prev.filter(p => p.id !== opt.id);
      } else {
        return [...prev, { fase: pkgFase, ...opt }];
      }
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setErrorMsg('');
    const url = new URL(window.location);
    url.searchParams.delete('plan');
    window.history.pushState({}, '', url);
  };

  const setF = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const requiresEspecialidadQuirurgica = selectedPkgs.some(p => p.perfil === 'Cirujano(a)');
  const requiresEspecialidadMedica = selectedPkgs.some(p => p.perfil === 'Médico Especialista');
  const needsEspecialidad = requiresEspecialidadQuirurgica || requiresEspecialidadMedica;

  const getSubProfileString = () => {
    if (needsEspecialidad) {
      return form.subEspecialidad === 'Otro (especificar)' ? form.subEspecialidadTexto : form.subEspecialidad;
    }
    return '';
  };

  const getTotalPrice = () => {
    let total = 0;
    let hasF23Coord = false;
    let hasF456Coord = false;

    selectedPkgs.forEach(pkg => {
      total += pkg.price;
      if (pkg.id === 'f23-coordinador') hasF23Coord = true;
      if (pkg.id === 'f456-coordinador') hasF456Coord = true;
    });

    if (hasF23Coord && hasF456Coord) {
      total -= 2000;
    }

    return total;
  };

  const procesarPago = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!form.nombres || !form.apellidos || !form.email || !form.tel) {
      setErrorMsg('Por favor completa todos los datos obligatorios.');
      return;
    }

    if (needsEspecialidad) {
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
      const uniqueProfiles = [...new Set(selectedPkgs.map(p => p.perfil))].join(' y ');
      
      // 1. Enviar datos a Formspree (Mailchimp)
      const formData = new FormData();
      formData.append("nombres", form.nombres);
      formData.append("apellidos", form.apellidos);
      formData.append("email", form.email);
      formData.append("tel", form.tel);
      formData.append("institucion", form.inst);
      formData.append("pais", form.pais);
      formData.append("perfil", uniqueProfiles);
      formData.append("especialidad", getSubProfileString());
      formData.append("paquete", selectedPkgs.length > 1 ? 'Múltiples Fases' : selectedPkgs[0].fase);
      formData.append("TAGS", "CNADOTpago");
      
      try {
        await fetch("https://formspree.io/f/mgawkwgw", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
      } catch (e) {
        console.error("Formspree error:", e);
      }

      // Registro directo en Mailchimp (Backend) para Carritos Abandonados
      try {
        await fetch('/.netlify/functions/subscribe-mailchimp', {
          method: 'POST',
          body: JSON.stringify({
            email: form.email,
            nombre: form.nombres,
            apellidos: form.apellidos,
            tags: ["CNADOTpago"]
          })
        });
      } catch (e) {
        console.error("Error backend mailchimp:", e);
      }

      // 2. Crear Checkout de Stripe
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: uniqueProfiles,
          subProfile: getSubProfileString(),
          packageType: selectedPkgs.length > 1 ? 'Múltiples Fases' : selectedPkgs[0].fase,
          precioCalculado: getTotalPrice(),
          userDetails: {
            nombre: `${form.nombres} ${form.apellidos}`,
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
    <div style={{ background: '#f8fbfc', minHeight: '100vh', padding: '60px 20px 140px', fontFamily: "'Poppins', sans-serif" }}>
      <style>
        {`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}
      </style>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        {/* LOGOS HEADER */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40, marginBottom: 40, flexWrap: 'wrap' }}>
          <img src="/assets/cnadot.png" alt="CNADOT" style={{ height: 70, objectFit: 'contain' }} />
          <img src="/assets/Logos_02_Salud-CENATRA.svg" alt="Salud CENATRA" style={{ height: 60, objectFit: 'contain' }} />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 50, animation: 'cnFadeIn .4s ease-out' }}>
          <h1 style={{ fontSize: 38, color: '#1c3f4a', margin: '0 0 16px', fontWeight: 800 }}>Inscripción Oficial</h1>
          <p style={{ color: '#556', fontSize: 18, margin: 0 }}>Selecciona las fases a las que deseas inscribirte para continuar.</p>
        </div>

        {displayPackages.map((pkg, i) => (
          <div key={i} style={{ marginBottom: 50, animation: `cnFadeIn ${0.4 + i*0.1}s ease-out` }}>
            <h2 style={{ fontSize: 22, color: '#0099CC', borderBottom: '2px solid #e1ebf0', paddingBottom: 10, marginBottom: 20 }}>{pkg.fase}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {pkg.options.map((opt, j) => {
                const isSelected = selectedPkgs.some(p => p.id === opt.id);
                return (
                  <div 
                    key={j} 
                    onClick={() => toggleSelection(pkg.fase, opt)}
                    style={{ 
                      background: isSelected ? '#f4fbfe' : '#fff', 
                      borderRadius: 16, 
                      padding: 24, 
                      boxShadow: isSelected ? '0 8px 25px rgba(0,153,204,0.2)' : '0 4px 20px rgba(0,0,0,0.05)', 
                      cursor: 'pointer',
                      transition: 'all .2s ease-in-out',
                      border: isSelected ? '2px solid #0099CC' : '2px solid transparent',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: 120,
                      position: 'relative'
                    }}
                    onMouseOver={(e) => {
                      if(!isSelected) {
                        e.currentTarget.style.transform = 'translateY(-5px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,153,204,0.15)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if(!isSelected) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
                      }
                    }}
                  >
                    {isSelected && (
                      <div style={{ position: 'absolute', top: 12, right: 12, background: '#0099CC', color: '#fff', borderRadius: '50%', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>
                        ✓
                      </div>
                    )}
                    <h3 style={{ margin: 0, color: isSelected ? '#007a99' : '#1c3f4a', fontSize: 18, fontWeight: 700, textAlign: 'center' }}>{opt.perfil}</h3>
                    <div style={{ marginTop: 12 }}>
                      <span style={{ 
                        fontSize: 14, 
                        color: isSelected ? '#fff' : '#0099CC', 
                        fontWeight: 600, 
                        background: isSelected ? '#0099CC' : '#f4fbfe', 
                        padding: '6px 16px', 
                        borderRadius: 20,
                        transition: '.2s'
                      }}>
                        {isSelected ? 'Seleccionado' : 'Seleccionar'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING ACTION BAR */}
      {selectedPkgs.length > 0 && !isModalOpen && (
        <div style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, 
          background: '#fff', padding: '20px', boxShadow: '0 -10px 40px rgba(0,0,0,0.15)',
          zIndex: 99, display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          animation: 'slideUp .3s ease-out', borderTop: '1px solid #e1ebf0'
        }}>
          <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <span style={{ fontSize: 14, color: '#4a5b60', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                {selectedPkgs.length} {selectedPkgs.length === 1 ? 'Fase Seleccionada' : 'Fases Seleccionadas'}
              </span>
              <div style={{ fontSize: 32, fontWeight: 800, color: '#FF6600', lineHeight: 1.1 }}>
                ${getTotalPrice().toLocaleString()} <span style={{fontSize:16, color:'#999'}}>MXN</span>
              </div>
            </div>
            <button onClick={() => setIsModalOpen(true)} style={{
              background: 'linear-gradient(90deg, #FF6600, #ff8533)', 
              color: '#fff', border: 'none', padding: '16px 32px', borderRadius: 12, 
              fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, 
              cursor: 'pointer', boxShadow: '0 6px 20px rgba(255,102,0,.3)', 
              transition: '.2s'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              Proceder al Pago
            </button>
          </div>
        </div>
      )}

      {/* MODAL */}
      {isModalOpen && (
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
              <span style={{ fontSize: 11, fontWeight: 800, color: '#0099CC', textTransform: 'uppercase', letterSpacing: 1 }}>RESUMEN DE INSCRIPCIÓN</span>
              {selectedPkgs.map((p, idx) => (
                <div key={idx} style={{ marginTop: 12, paddingBottom: 12, borderBottom: idx !== selectedPkgs.length -1 ? '1px dashed #d1d8dc' : 'none' }}>
                  <div style={{ fontSize: 13, color: '#556' }}>{p.fase}</div>
                  <div style={{ fontWeight: 700, color: '#1c3f4a', fontSize: 16 }}>{p.perfil} <span style={{ float: 'right', color: '#0099CC' }}>${p.price.toLocaleString()}</span></div>
                </div>
              ))}
              
              <div style={{ marginTop: 16, paddingTop: 16, borderTop: '2px solid #e1ebf0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#1c3f4a' }}>Total a pagar:</span>
                <div>
                  {selectedPkgs.some(p=>p.id==='f23-coordinador') && selectedPkgs.some(p=>p.id==='f456-coordinador') && (
                    <div style={{ fontSize: 12, color: '#e63946', fontWeight: 600, textAlign: 'right', marginBottom: 4 }}>- $2,000 Descuento Aplicado</div>
                  )}
                  <span style={{ fontSize: 34, fontWeight: 800, color: '#FF6600', letterSpacing: -1 }}>${getTotalPrice().toLocaleString()}</span>
                  <span style={{ fontSize: 16, color: '#999', marginLeft: 6, fontWeight: 600 }}>MXN</span>
                </div>
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
              {requiresEspecialidadQuirurgica && (
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

              {requiresEspecialidadMedica && (
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

              {needsEspecialidad && form.subEspecialidad === 'Otro (especificar)' && (
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
