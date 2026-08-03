import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_placeholder');

export default function PagoStripe() {
  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    email: '',
    tel: '',
    inst: '',
    pais: '',
    fase: '',
    perfil: '',
    subEspecialidad: '',
    subEspecialidadTexto: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const fases = [
    'Fase 2 (Teórica Anáhuac)',
    'Fase 2 y 3 (Teórica y Simulación Anáhuac)',
    'Fase 4, 5 y 6 (Experimental)'
  ];

  const getPerfilesForFase = (fase) => {
    switch (fase) {
      case 'Fase 2 (Teórica Anáhuac)':
        return ['Cirujano(a)', 'Perfusionista', 'Enfermero(a)', 'Médico Especialista', 'Prueba (10 MXN)'];
      case 'Fase 2 y 3 (Teórica y Simulación Anáhuac)':
        return ['Coordinador(a) de Donación', 'Prueba (10 MXN)'];
      case 'Fase 4, 5 y 6 (Experimental)':
        return [
          'Cirujano(a)', 
          'Perfusionista', 
          'Enfermero(a)', 
          'Médico Especialista', 
          'Coordinador(a) de Donación', 
          'Coordinador(a) (Inscrito previamente a Fase 2/3)', 
          'Prueba (10 MXN)'
        ];
      default:
        return [];
    }
  };

  const setF = (key) => (e) => {
    const val = e.target.value;
    if (key === 'fase') {
      setForm({ ...form, fase: val, perfil: '', subEspecialidad: '', subEspecialidadTexto: '' });
    } else if (key === 'perfil') {
      setForm({ ...form, perfil: val, subEspecialidad: '', subEspecialidadTexto: '' });
    } else {
      setForm({ ...form, [key]: val });
    }
  };

  const getPrecio = () => {
    if (form.perfil === 'Prueba (10 MXN)') return 10;
    
    if (form.fase === 'Fase 2 (Teórica Anáhuac)') {
      if (form.perfil === 'Cirujano(a)') return 1500;
      if (form.perfil === 'Perfusionista') return 1000;
      if (form.perfil === 'Enfermero(a)') return 500;
      if (form.perfil === 'Médico Especialista') return 1000;
    } else if (form.fase === 'Fase 2 y 3 (Teórica y Simulación Anáhuac)') {
      if (form.perfil === 'Coordinador(a) de Donación') return 7000;
    } else if (form.fase === 'Fase 4, 5 y 6 (Experimental)') {
      if (form.perfil === 'Cirujano(a)') return 9000;
      if (form.perfil === 'Perfusionista') return 5000;
      if (form.perfil === 'Enfermero(a)') return 4000;
      if (form.perfil === 'Médico Especialista') return 4000;
      if (form.perfil === 'Coordinador(a) de Donación') return 7000;
      if (form.perfil === 'Coordinador(a) (Inscrito previamente a Fase 2/3)') return 3500;
    }
    return 0;
  };

  const getSubProfileString = () => {
    if (form.perfil === 'Cirujano(a)' || form.perfil === 'Médico Especialista') {
      return form.subEspecialidad === 'Otro (especificar)' ? form.subEspecialidadTexto : form.subEspecialidad;
    }
    return '';
  };

  const procesarPago = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    
    if (!form.nombres || !form.apellidos || !form.email || !form.fase || !form.perfil || !form.tel) {
      setErrorMsg('Por favor completa todos los datos obligatorios.');
      return;
    }

    if (form.perfil === 'Cirujano(a)' || form.perfil === 'Médico Especialista') {
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
      // Combinamos Nombres y Apellidos para Stripe
      const nombreCompleto = `${form.nombres.trim()} ${form.apellidos.trim()}`;
      
      const payloadForm = { ...form, nombre: nombreCompleto };

      const response = await fetch('/.netlify/functions/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          profile: form.perfil,
          subProfile: getSubProfileString(),
          packageType: form.fase,
          userDetails: payloadForm,
          precioCalculado: getPrecio() // Enviamos el precio calculado para evitar inconsistencias
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Error al procesar la solicitud');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No se recibió la URL de pago');
      }
    } catch (error) {
      setErrorMsg(error.message || 'Ocurrió un error al iniciar el pago.');
      setLoading(false);
    }
  };

  const precio = getPrecio();
  const perfilesDisponibles = getPerfilesForFase(form.fase);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg, #f4fbfe 0%, #ffffff 50%, #eaf7ef 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 20px', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* Logos Header */}
      <div style={{ display: 'flex', gap: 20, marginBottom: 30, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <img src="assets/cnadot.png" alt="CNADOT" style={{ height: 60, objectFit: 'contain' }} />
        <div style={{ width: 1, height: 40, background: '#d6e3e8' }}></div>
        <img src="assets/Logos_02_Salud-CENATRA.svg" alt="Salud" style={{ height: 45, objectFit: 'contain' }} />
      </div>

      <div style={{ width: '100%', maxWidth: 640, background: '#fff', border: '1px solid #e8f1f0', borderRadius: 24, padding: '40px 32px', boxShadow: '0 10px 40px rgba(0,0,0,.06)', position: 'relative', overflow: 'hidden' }}>
        
        {/* Decoración superior */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 6, background: 'linear-gradient(90deg, #12d2b3, #8af298)' }}></div>

        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontWeight: 800, color: '#1c3f4a', margin: '0 0 8px', fontSize: 28 }}>Inscripción Oficial</h2>
          <p style={{ color: '#667', fontSize: 15, margin: 0 }}>
            Selecciona la fase en la que deseas participar y completa tus datos.
          </p>
        </div>

        {errorMsg && (
          <div style={{ background: '#FFF0F0', color: '#D32F2F', padding: '14px 16px', borderRadius: 12, marginBottom: 24, fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            {errorMsg}
          </div>
        )}

        <form onSubmit={procesarPago}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <label style={{ display: 'block' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Nombre(s) *</span>
                <input required placeholder="Ej. Juan" value={form.nombres} onChange={setF('nombres')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
              </label>
              
              <label style={{ display: 'block' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Apellidos *</span>
                <input required placeholder="Ej. Pérez" value={form.apellidos} onChange={setF('apellidos')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
              </label>
            </div>

            <label style={{ display: 'block' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Correo electrónico *</span>
              <input required type="email" placeholder="correo@hospital.com" value={form.email} onChange={setF('email')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
            </label>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <label style={{ display: 'block' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Teléfono *</span>
                <input required placeholder="10 dígitos" value={form.tel} onChange={setF('tel')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
              </label>
              <label style={{ display: 'block' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>País</span>
                <input placeholder="Ej. México" value={form.pais} onChange={setF('pais')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
              </label>
            </div>
            
            <label style={{ display: 'block' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Institución de procedencia</span>
              <input placeholder="Hospital o Centro de Salud" value={form.inst} onChange={setF('inst')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
            </label>

            <div style={{ height: 1, background: '#edf2f4', margin: '10px 0' }}></div>

            <label style={{ display: 'block' }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Fase a cursar *</span>
              <select required value={form.fase} onChange={setF('fase')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', cursor: 'pointer', background: '#fafcfd', appearance: 'none' }}>
                <option value="">-- Selecciona la fase --</option>
                {fases.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </label>

            {form.fase && (
              <label style={{ display: 'block', animation: 'cnFadeIn .3s ease-out' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Perfil Profesional *</span>
                <select required value={form.perfil} onChange={setF('perfil')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', cursor: 'pointer', background: '#fafcfd', appearance: 'none' }}>
                  <option value="">-- Selecciona tu perfil --</option>
                  {perfilesDisponibles.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </label>
            )}

            {form.perfil === 'Cirujano(a)' && (
              <label style={{ display: 'block', animation: 'cnFadeIn .3s ease-out' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Especialidad quirúrgica *</span>
                <select required value={form.subEspecialidad} onChange={setF('subEspecialidad')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', cursor: 'pointer', background: '#fafcfd', appearance: 'none' }}>
                  <option value="">-- Selecciona --</option>
                  <option value="Abdomen">Abdomen</option>
                  <option value="Tórax">Tórax</option>
                  <option value="Cardiovasculares">Cardiovasculares</option>
                  <option value="Otro (especificar)">Otro (especificar)</option>
                </select>
              </label>
            )}

            {form.perfil === 'Médico Especialista' && (
              <label style={{ display: 'block', animation: 'cnFadeIn .3s ease-out' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Especialidad Médica *</span>
                <select required value={form.subEspecialidad} onChange={setF('subEspecialidad')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', cursor: 'pointer', background: '#fafcfd', appearance: 'none' }}>
                  <option value="">-- Selecciona --</option>
                  <option value="Anestesiólogo">Anestesiólogo</option>
                  <option value="Intensivista">Intensivista</option>
                  <option value="Urgenciólogo">Urgenciólogo</option>
                  <option value="Internista">Internista</option>
                  <option value="Nefrólogo">Nefrólogo</option>
                  <option value="Otro (especificar)">Otro (especificar)</option>
                </select>
              </label>
            )}

            {(form.perfil === 'Cirujano(a)' || form.perfil === 'Médico Especialista') && form.subEspecialidad === 'Otro (especificar)' && (
              <label style={{ display: 'block', animation: 'cnFadeIn .3s ease-out' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#4a5b60', display: 'block', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Especifica tu especialidad *</span>
                <input required placeholder="Escribe aquí tu especialidad" value={form.subEspecialidadTexto} onChange={setF('subEspecialidadTexto')} style={{ width: '100%', fontSize: 15, padding: '14px 16px', border: '1px solid #c9d8dd', borderRadius: 12, outline: 'none', transition: '.2s', background: '#fafcfd' }} onFocus={(e) => e.target.style.borderColor='#12d2b3'} onBlur={(e) => e.target.style.borderColor='#c9d8dd'} />
              </label>
            )}

            {precio > 0 && (
              <div style={{ marginTop: 10, padding: 24, background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f5 100%)', borderRadius: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e9ecef', animation: 'cnFadeIn .4s ease-out' }}>
                <div>
                  <span style={{ fontSize: 14, color: '#666', display: 'block', marginBottom: 2 }}>Total a pagar</span>
                  <span style={{ fontSize: 12, color: '#999', display: 'block' }}>Impuestos incluidos</span>
                </div>
                <span style={{ fontSize: 34, fontWeight: 800, color: '#FF6600', letterSpacing: -1 }}>${precio.toLocaleString()} <span style={{fontSize: 16, color: '#999', fontWeight: 600}}>MXN</span></span>
              </div>
            )}

            <button type="submit" disabled={loading || precio === 0} style={{ marginTop: 10, background: (loading || precio===0) ? '#d1d8dc' : 'linear-gradient(90deg, #FF6600, #ff8533)', color: '#fff', border: 'none', padding: '16px 20px', borderRadius: 12, fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, cursor: (loading||precio===0) ? 'not-allowed' : 'pointer', boxShadow: (loading||precio===0) ? 'none' : '0 6px 16px rgba(255,102,0,.25)', transition: '.2s', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>
              {loading ? (
                <>
                  <svg className="spinner" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 1s linear infinite' }}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                  Procesando seguro...
                </>
              ) : (
                <>Pagar Inscripción Segura <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></>
              )}
            </button>
          </div>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: '#889', fontWeight: 500 }}>Pagos seguros procesados por</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" style={{ height: 22, opacity: 0.6 }} />
        </div>
      </div>
      
      {/* Footer minimalista */}
      <div style={{ marginTop: 40, textAlign: 'center', color: '#889', fontSize: 12 }}>
        <p>© 2026 CNADOT. Todos los derechos reservados.</p>
      </div>

      <style>{`
        @keyframes spin { 100% { transform: rotate(360deg); } }
        @keyframes cnFadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
