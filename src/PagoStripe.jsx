import React, { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useParams, useNavigate } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

// Custom Select Component (Reusable)
const CustomSelect = ({ value, onChange, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: value ? '#1c3f4a' : '#9cb1b8', display: 'flex', alignItems: 'center', cursor: 'pointer', background: 'rgba(255,255,255,0.8)', border: '1px solid #e1ebf0', borderRadius: 12, padding: '14px 16px' }}
      >
        {value || placeholder}
        <span style={{ marginLeft: 'auto', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '.2s' }}>⌄</span>
      </div>
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 6, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.1)', border: '1px solid #e1ebf0', zIndex: 50, maxHeight: 250, overflowY: 'auto', animation: 'cnFadeIn .2s ease-out' }}>
          {options.map((opt, i) => (
            <div key={i} onClick={() => { onChange({ target: { value: opt } }); setIsOpen(false); }} style={{ padding: '14px 16px', cursor: 'pointer', transition: '.2s', background: value === opt ? '#f4fbfe' : 'transparent', color: value === opt ? '#00b2b8' : '#1c3f4a', fontWeight: value === opt ? 600 : 400, borderBottom: i !== options.length - 1 ? '1px solid #f0f4f5' : 'none' }} onMouseOver={(e) => e.target.style.background = '#f4fbfe'} onMouseOut={(e) => e.target.style.background = value === opt ? '#f4fbfe' : 'transparent'}>
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const profiles = [
  { id: 'cirujano', label: 'Cirujano(a)' },
  { id: 'medico', label: 'Médico Especialista' },
  { id: 'perfusionista', label: 'Perfusionista' },
  { id: 'enfermero', label: 'Enfermero(a)' },
  { id: 'coordinador', label: 'Coordinador(a) de Donación' }
];

const getAvailablePhases = (profileId) => {
  const phases = [];
  phases.push({
    id: 'fase-2',
    name: 'Fase 2 (Teórica Anáhuac)',
    desc: 'Obligatoria para coordinadores, opcional para el resto. Modalidad presencial.',
    price: 500,
    color: '#66CC00',
    colorLight: '#EEF9D9',
  });

  if (profileId === 'coordinador') {
    phases.push({
      id: 'fase-2-3',
      name: 'Fase 2 y 3 (Teórica y Simulación Anáhuac)',
      desc: 'Exclusivo para Coordinadores. Cupo limitado a 24 personas.',
      price: 7000,
      color: '#FF6600',
      colorLight: '#FFE6CC',
    });
  }

  const f456Prices = { 'cirujano': 9000, 'perfusionista': 5000, 'enfermero': 4000, 'medico': 4000, 'coordinador': 7000 };
  phases.push({
    id: 'fase-4-5-6',
    name: 'Fases 4, 5 y 6 (Experimental)',
    desc: 'Simulación DAC y Práctica Quirúrgica Experimental UVM.',
    price: f456Prices[profileId],
    color: '#0099CC',
    colorLight: '#E6F7FF',
  });

  return phases;
};

export default function PagoStripe() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedProfileId, setSelectedProfileId] = useState(null);
  const [selectedPhases, setSelectedPhases] = useState([]);
  const [form, setForm] = useState({ nombres: '', apellidos: '', email: '', tel: '', inst: '', pais: '', subEspecialidad: '', subEspecialidadTexto: '' });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const profile = profiles.find(p => p.id === selectedProfileId);
  const availablePhases = selectedProfileId ? getAvailablePhases(selectedProfileId) : [];

  const handleProfileSelect = (id) => {
    setSelectedProfileId(id);
    setSelectedPhases([]);
    setErrorMsg('');
    setStep(2); // Move to Phase selection
  };

  const togglePhase = (phaseId) => {
    setSelectedPhases(prev => {
      if (phaseId === 'fase-2' && prev.includes('fase-2-3')) return prev.filter(p => p !== 'fase-2-3').concat('fase-2');
      if (phaseId === 'fase-2-3' && prev.includes('fase-2')) return prev.filter(p => p !== 'fase-2').concat('fase-2-3');
      if (prev.includes(phaseId)) return prev.filter(p => p !== phaseId);
      return [...prev, phaseId];
    });
  };

  const handleContinueToForm = () => {
    if (selectedPhases.length === 0) {
      setErrorMsg('Debes seleccionar al menos una fase para continuar.');
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  const calculateTotal = () => {
    let total = 0;
    let hasF23 = selectedPhases.includes('fase-2-3');
    selectedPhases.forEach(pid => {
      const phase = availablePhases.find(p => p.id === pid);
      if (phase) {
        if (pid === 'fase-4-5-6' && selectedProfileId === 'coordinador' && hasF23) total += 3500;
        else total += phase.price;
      }
    });
    return total;
  };

  const setF = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const procesarPago = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (selectedProfileId === 'cirujano' || selectedProfileId === 'medico') {
      if (!form.subEspecialidad) { setErrorMsg('Por favor selecciona tu especialidad médica.'); return; }
      if (form.subEspecialidad === 'Otro (especificar)' && !form.subEspecialidadTexto) { setErrorMsg('Por favor especifica tu especialidad.'); return; }
    }

    setLoading(true);
    const subProfileString = form.subEspecialidad === 'Otro (especificar)' ? form.subEspecialidadTexto : form.subEspecialidad;
    const packageTypeStr = selectedPhases.map(pid => availablePhases.find(p => p.id === pid).name).join(' + ');

    // 1. Enviar a Formspree (Intento de Pago)
    try {
      const formData = new FormData();
      formData.append("Nombres", form.nombres);
      formData.append("Apellidos", form.apellidos);
      formData.append("Email", form.email);
      formData.append("Telefono", form.tel);
      formData.append("Paquete", packageTypeStr);
      await fetch("https://formspree.io/f/mgawkwgw", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
    } catch (e) { console.error("Formspree error:", e); }

    // 2. Registro directo en Mailchimp (Backend) para Carritos Abandonados
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
    } catch (e) { console.error("Error backend mailchimp:", e); }

    try {
      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: profile.label,
          subProfile: subProfileString,
          packageType: packageTypeStr,
          precioCalculado: calculateTotal(),
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
      if (response.ok && data.url) window.location.href = data.url;
      else throw new Error(data.error || 'Error al iniciar el pago.');
    } catch (err) {
      setErrorMsg(err.message || 'Error de conexión. Intenta nuevamente.');
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#f8fbfc', minHeight: '100vh', padding: '20px 20px 60px', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* HEADER NAVBAR STYLE */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 30, marginBottom: 50, flexWrap: 'wrap', background: '#fff', padding: '16px 32px', borderRadius: 24, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', maxWidth: 840, margin: '0 auto 40px' }}>
        <img src="/assets/cnadot.png" alt="CNADOT" onClick={() => navigate('/')} style={{ cursor: 'pointer', height: 50, width: 'auto' }} />
        <div style={{ width: 1, height: 30, background: '#e1ebf0' }}></div>
        <img src="/assets/Logos_02_Salud-CENATRA.svg" alt="Salud CENATRA" style={{ height: 35, width: 'auto' }} />
      </div>

      <div style={{ maxWidth: 840, margin: '0 auto', background: '#fff', borderRadius: 32, padding: '40px 32px', boxShadow: '0 12px 40px rgba(0,0,0,0.04)', position: 'relative' }}>
        
        {/* STEP PROGRESS (Visual) */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 40 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: step >= 1 ? '#1c3f4a' : '#e1ebf0', color: step >= 1 ? '#fff' : '#9cb1b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>1</div>
          <div style={{ width: 40, height: 2, background: step >= 2 ? '#1c3f4a' : '#e1ebf0' }}></div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: step >= 2 ? '#1c3f4a' : '#e1ebf0', color: step >= 2 ? '#fff' : '#9cb1b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>2</div>
          <div style={{ width: 40, height: 2, background: step >= 3 ? '#1c3f4a' : '#e1ebf0' }}></div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: step >= 3 ? '#1c3f4a' : '#e1ebf0', color: step >= 3 ? '#fff' : '#9cb1b8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 14 }}>3</div>
        </div>

        {/* STEP 1: PROFILE */}
        {step === 1 && (
          <div style={{ animation: 'cnFadeIn .4s ease-out' }}>
            <h1 style={{ fontSize: 32, color: '#102a33', margin: '0 0 12px', fontWeight: 800, textAlign: 'center', letterSpacing: '-0.5px' }}>Arma tu Plan de Inscripción</h1>
            <p style={{ color: '#556', fontSize: 16, margin: '0 auto 40px', maxWidth: 600, lineHeight: 1.6, textAlign: 'center' }}>Selecciona tu perfil profesional para ver las opciones disponibles para ti.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
              {profiles.map(p => (
                <button
                  key={p.id}
                  onClick={() => handleProfileSelect(p.id)}
                  style={{
                    background: '#fcfcfc', color: '#1c3f4a', border: '1px solid #e1ebf0',
                    borderRadius: 20, padding: '24px 20px', cursor: 'pointer',
                    fontSize: 16, fontWeight: 700, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
                    transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.borderColor = '#c0d1d6'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.borderColor = '#e1ebf0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)'; }}
                >
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e1ebf0', transition: '.3s', marginBottom: 4 }}></div>
                  <span style={{ textAlign: 'center' }}>{p.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: PHASES */}
        {step === 2 && (
          <div style={{ animation: 'cnFadeIn .4s ease-out' }}>
            <h2 style={{ fontSize: 24, color: '#102a33', fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>Selecciona tus Fases</h2>
            <p style={{ color: '#556', fontSize: 15, textAlign: 'center', marginBottom: 30 }}>Perfil: <strong>{profile?.label}</strong>. Puedes elegir una o varias opciones.</p>

            {errorMsg && (
                <div style={{ background: '#ffeef0', color: '#e63946', padding: 16, borderRadius: 12, marginBottom: 24, fontSize: 14, fontWeight: 500, borderLeft: '4px solid #e63946', textAlign: 'center' }}>
                  {errorMsg}
                </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 30 }}>
              {/* DEFAULT FASE 1 (Cortesía) */}
              <div 
                style={{
                  background: '#f4fbf7', border: '2px solid #28a745', borderRadius: 20, padding: '24px 28px', cursor: 'default',
                  display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 12px 32px rgba(40,167,69,0.1)'
                }}
              >
                <div style={{ flex: '1 1 250px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
                    <div style={{ width: 24, height: 24, flexShrink: 0, borderRadius: '50%', border: '2px solid #28a745', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#28a745' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 style={{ margin: 0, fontSize: 18, color: '#102a33', fontWeight: 800 }}>Fase 1 (Virtual)</h3>
                  </div>
                  <p style={{ margin: '0 0 0 38px', color: '#556', fontSize: 14, lineHeight: 1.5 }}>Incluida por defecto para todos los perfiles.</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 'auto' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                     <span style={{ fontSize: 26, fontWeight: 800, color: '#28a745', letterSpacing: -1 }}>Cortesía</span>
                  </div>
                </div>
              </div>

              {/* DYNAMIC PHASES */}
              {availablePhases.map(phase => {
                const isSelected = selectedPhases.includes(phase.id);
                let displayPrice = phase.price;
                let showDiscount = false;
                if (phase.id === 'fase-4-5-6' && selectedProfileId === 'coordinador' && selectedPhases.includes('fase-2-3')) {
                  displayPrice = 3500;
                  showDiscount = true;
                }

                return (
                  <div 
                    key={phase.id} onClick={() => togglePhase(phase.id)}
                    style={{
                      background: isSelected ? phase.colorLight : '#fcfcfc',
                      border: `2px solid ${isSelected ? phase.color : '#e1ebf0'}`,
                      borderRadius: 20, padding: '24px 28px', cursor: 'pointer',
                      display: 'flex', flexWrap: 'wrap', gap: 20, justifyContent: 'space-between', alignItems: 'center',
                      transition: 'all .3s cubic-bezier(0.4, 0, 0.2, 1)', 
                      boxShadow: isSelected ? `0 12px 32px ${phase.color}25` : '0 4px 16px rgba(0,0,0,0.02)'
                    }}
                    onMouseOver={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = phase.color; e.currentTarget.style.transform = 'translateY(-2px)'; } }}
                    onMouseOut={(e) => { if (!isSelected) { e.currentTarget.style.borderColor = '#e1ebf0'; e.currentTarget.style.transform = 'translateY(0)'; } }}
                  >
                    <div style={{ flex: '1 1 250px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 6 }}>
                        <div style={{ width: 24, height: 24, flexShrink: 0, borderRadius: '50%', border: `2px solid ${isSelected ? phase.color : '#cbd5d8'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isSelected ? phase.color : 'transparent', transition: '.2s' }}>
                          {isSelected && <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <h3 style={{ margin: 0, fontSize: 18, color: '#102a33', fontWeight: 800 }}>{phase.name}</h3>
                      </div>
                      <p style={{ margin: '0 0 0 38px', color: '#556', fontSize: 14, lineHeight: 1.5 }}>{phase.desc}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 'auto' }}>
                      {showDiscount && <div style={{ fontSize: 11, color: '#fff', background: '#FF6600', padding: '4px 10px', borderRadius: 12, fontWeight: 800, textTransform: 'uppercase', marginBottom: 4, display: 'inline-block' }}>50% Desc. Aplicado</div>}
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                         <span style={{ fontSize: 26, fontWeight: 800, color: phase.color, letterSpacing: -1 }}>${displayPrice.toLocaleString()}</span>
                         <span style={{ fontSize: 13, fontWeight: 700, color: '#9cb1b8' }}>MXN</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'space-between' }}>
              <button onClick={() => setStep(1)} style={{ padding: '16px 24px', borderRadius: 16, background: '#f0f4f5', color: '#556', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: '.2s' }} onMouseOver={e=>e.currentTarget.style.background='#e1ebf0'} onMouseOut={e=>e.currentTarget.style.background='#f0f4f5'}>
                ← Atrás
              </button>
              <button onClick={handleContinueToForm} style={{ padding: '16px 32px', borderRadius: 16, background: 'linear-gradient(135deg, #1c3f4a 0%, #2b5c6c 100%)', color: '#fff', border: 'none', fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: '.2s', boxShadow: '0 8px 24px rgba(28,63,74,0.3)' }} onMouseOver={e=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={e=>e.currentTarget.style.transform='translateY(0)'}>
                Continuar al Pago →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: FORM */}
        {step === 3 && (
          <div style={{ animation: 'cnFadeIn .4s ease-out' }}>
            <h2 style={{ fontSize: 24, color: '#102a33', fontWeight: 800, marginBottom: 8, textAlign: 'center' }}>Datos del Estudiante y Pago</h2>
            <p style={{ color: '#556', fontSize: 15, textAlign: 'center', marginBottom: 30 }}>Por favor completa tu información para procesar la inscripción de manera segura.</p>

            <div style={{ background: '#f8fbfc', padding: 24, borderRadius: 20, marginBottom: 30, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e1ebf0', flexWrap: 'wrap', gap: 16 }}>
              <div>
                <div style={{ fontSize: 13, color: '#556', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>Total a Pagar</div>
                <div style={{ fontSize: 14, color: '#1c3f4a', fontWeight: 600 }}>{selectedPhases.length} fase(s) seleccionada(s)</div>
              </div>
              <div style={{ fontSize: 36, fontWeight: 800, color: '#1c3f4a', letterSpacing: -1 }}>
                ${calculateTotal().toLocaleString()} <span style={{fontSize: 16, color: '#9cb1b8'}}>MXN</span>
              </div>
            </div>

            <form onSubmit={procesarPago}>
              {errorMsg && (
                <div style={{ background: '#ffeef0', color: '#e63946', padding: 16, borderRadius: 12, marginBottom: 24, fontSize: 14, fontWeight: 500, borderLeft: '4px solid #e63946' }}>
                  {errorMsg}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 16 }}>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Nombres *</span>
                  <input required value={form.nombres} onChange={setF('nombres')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="Ej. Juan" />
                </label>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Apellidos *</span>
                  <input required value={form.apellidos} onChange={setF('apellidos')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="Ej. Pérez" />
                </label>
              </div>

              <label style={{ display: 'block', marginBottom: 16 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Correo Electrónico *</span>
                <input required type="email" value={form.email} onChange={setF('email')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="correo@hospital.com" />
              </label>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 16 }}>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Teléfono *</span>
                  <input required value={form.tel} onChange={setF('tel')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="10 dígitos" />
                </label>
                <label>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>País</span>
                  <input value={form.pais} onChange={setF('pais')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="Ej. México" />
                </label>
              </div>

              <label style={{ display: 'block', marginBottom: 20 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Institución de procedencia</span>
                <input value={form.inst} onChange={setF('inst')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="Hospital o Centro de Salud" />
              </label>

              {/* ESPECIALIDADES */}
              {selectedProfileId === 'cirujano' && (
                <label style={{ display: 'block', marginBottom: 16, animation: 'cnFadeIn .3s ease-out' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Especialidad quirúrgica *</span>
                  <CustomSelect value={form.subEspecialidad} onChange={setF('subEspecialidad')} options={['Abdomen', 'Tórax', 'Cardiovasculares', 'Otro (especificar)']} placeholder="-- Selecciona --" />
                </label>
              )}

              {selectedProfileId === 'medico' && (
                <label style={{ display: 'block', marginBottom: 16, animation: 'cnFadeIn .3s ease-out' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Especialidad Médica *</span>
                  <CustomSelect value={form.subEspecialidad} onChange={setF('subEspecialidad')} options={['Anestesiólogo', 'Intensivista', 'Urgenciólogo', 'Internista', 'Nefrólogo', 'Otro (especificar)']} placeholder="-- Selecciona --" />
                </label>
              )}

              {(selectedProfileId === 'cirujano' || selectedProfileId === 'medico') && form.subEspecialidad === 'Otro (especificar)' && (
                <label style={{ display: 'block', marginBottom: 16, animation: 'cnFadeIn .3s ease-out' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 6 }}>Especifica tu especialidad *</span>
                  <input required value={form.subEspecialidadTexto} onChange={setF('subEspecialidadTexto')} style={{ width: '100%', padding: '16px', borderRadius: 16, border: '1px solid #e1ebf0', background: '#fcfcfc', fontSize: 15, outline: 'none', transition: '.2s', boxSizing: 'border-box' }} onFocus={(e)=>{e.target.style.borderColor='#1c3f4a'; e.target.style.background='#fff'}} onBlur={(e)=>{e.target.style.borderColor='#e1ebf0'; e.target.style.background='#fcfcfc'}} placeholder="Escribe tu especialidad" />
                </label>
              )}

              <div style={{ display: 'flex', gap: 16, justifyContent: 'space-between', marginTop: 32 }}>
                <button type="button" onClick={() => setStep(2)} disabled={loading} style={{ padding: '16px 24px', borderRadius: 16, background: '#f0f4f5', color: '#556', border: 'none', fontWeight: 700, fontSize: 15, cursor: loading ? 'not-allowed' : 'pointer', transition: '.2s' }} onMouseOver={e=>e.currentTarget.style.background='#e1ebf0'} onMouseOut={e=>e.currentTarget.style.background='#f0f4f5'}>
                  ← Atrás
                </button>
                <button type="submit" disabled={loading} style={{ flex: 1, padding: '16px 32px', borderRadius: 16, background: loading ? '#d1d8dc' : 'linear-gradient(135deg, #1c3f4a 0%, #2b5c6c 100%)', color: '#fff', border: 'none', fontWeight: 700, fontSize: 16, cursor: loading ? 'not-allowed' : 'pointer', transition: '.2s', boxShadow: loading ? 'none' : '0 8px 24px rgba(28,63,74,0.3)', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onMouseOver={e=>{if(!loading)e.currentTarget.style.transform='translateY(-2px)'}} onMouseOut={e=>{if(!loading)e.currentTarget.style.transform='translateY(0)'}}>
                  {loading ? 'Procesando...' : `Pagar Inscripción Segura 🔒`}
                </button>
              </div>
              
              <div style={{ textAlign: 'center', marginTop: 24 }}>
                <span style={{ fontSize: 12, color: '#889', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontWeight: 600 }}>
                  Pagos procesados de forma segura por <span style={{ color: '#635BFF', fontWeight: 800, fontSize: 18, letterSpacing: -0.5 }}>stripe</span>
                </span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
