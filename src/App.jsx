import React, { useState, useRef, useEffect } from 'react';
import './index.css';
import {
  blue, green, orange,
  icBook, icMsg, icBolt, icPin, icMoney, icPhone,
  programa, perfiles, expertos, paises, logos,
  objetivos, stats, navItems, escenarios
} from './data';

const LogosGrid = () => (
  <div className="cn-reveal" style={{ margin: '40px 0 70px', textAlign: 'center', width: '100%' }}>
    <div className="logos-top-row">
      {/* ORGANIZA */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <h4 style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c5b76', margin: 0, fontSize: 16, letterSpacing: 1, textTransform: 'uppercase', paddingLeft: 40 }}>ORGANIZA:</h4>
        <img src="assets/Logos_02_Salud-CENATRA.svg" alt="Salud CENATRA" style={{ height: 60, objectFit: 'contain' }} />
      </div>
      
      {/* MASCOTA */}
      <div className="mascota-logo" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src="assets/alianza.png" alt="Mascota" style={{ height: 95, objectFit: 'contain' }} />
      </div>

      {/* AVAL */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <h4 style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c5b76', margin: 0, fontSize: 16, letterSpacing: 1, textTransform: 'uppercase' }}>AVAL:</h4>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <img src="assets/Logos_03_UNAM.svg" alt="UNAM" style={{ height: 85, objectFit: 'contain' }} />
          <img src="assets/Logos_04_Facultad de Medicina.svg" alt="Facultad de Medicina" style={{ height: 85, objectFit: 'contain' }} />
        </div>
      </div>
    </div>

    {/* ALIADOS */}
    <div>
      <h4 style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c5b76', marginBottom: 24, fontSize: 16, letterSpacing: 1, textTransform: 'uppercase' }}>ALIADOS:</h4>
      <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center', marginBottom: 30 }}>
        <img src="assets/Logos_01_HCE.svg" alt="HCE" style={{ height: 50, objectFit: 'contain' }} />
        <img src="assets/Logos_05_Anahuac.svg" alt="Anahuac" style={{ height: 55, objectFit: 'contain' }} />
        <img src="assets/Logos_06_UVM.svg" alt="UVM" style={{ height: 45, objectFit: 'contain' }} />
        <img src="assets/Logos_07_UFV.svg" alt="UFV" style={{ height: 50, objectFit: 'contain' }} />
        <img src="assets/TransPlantChild.png" alt="TransPlantChild" style={{ height: 85, objectFit: 'contain' }} />
      </div>
      <div style={{ display: 'flex', gap: 40, justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
        <img src="assets/stalyc.png" alt="STALYC" style={{ height: 65, objectFit: 'contain' }} />
        <img src="assets/Logos_08_SET.svg" alt="SET" style={{ height: 50, objectFit: 'contain' }} />
        <img src="assets/LOGO ORCT.jfif" alt="ORCT" style={{ height: 55, objectFit: 'contain' }} />
        <img src="assets/SMEE-Imagotipo (1).png" alt="SMEE" style={{ height: 60, objectFit: 'contain' }} />
        <img src="assets/logo-SERMAS_SMS.png" alt="SERMAS" style={{ height: 55, objectFit: 'contain' }} />
        <img src="assets/ont.png" alt="ONT" style={{ height: 60, objectFit: 'contain' }} />
      </div>
    </div>
  </div>
);


function App() {
  const [section, setSection] = useState('home');
  const [query, setQuery] = useState('');
  const [form, setForm] = useState({nombre:'',email:'',tel:'',inst:'',profesion:'',rol:'',cedula:'',cv:null,carta:null});
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [openPrograma, setOpenPrograma] = useState({});

  const trackRef = useRef(null);
  const confettiRef = useRef(null);

  const ctaLabel = 'Pre-regístrate';
  const accentColor = '#FF6600';
  const bgOn = true;

  const go = (s) => {
    setSection(s);
    setQuery('');
    try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) {}
  };

  useEffect(() => {
    if (submitted) fireConfetti();
  }, [submitted]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cn-anim-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const els = document.querySelectorAll('h1, h2, h3, h4, p');
    els.forEach(el => {
      el.classList.add('cn-anim');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [section]);

  const fireConfetti = () => {
    const el = confettiRef.current;
    if (!el) return;
    const cols = ['#0099CC', '#66CC00', '#FF6600', '#ffd166'];
    for (let i = 0; i < 28; i++) {
      const s = document.createElement('span');
      const sz = 6 + Math.random() * 7;
      s.style.cssText = `position:absolute;top:0;left:${Math.random() * 100}%;width:${sz}px;height:${sz}px;background:${cols[i % 4]};border-radius:${Math.random() > 0.5 ? '50%' : '2px'};animation:cnConfetti ${1.1 + Math.random() * 1.1}s ease-in ${Math.random() * 0.3}s forwards;`;
      el.appendChild(s);
    }
    setTimeout(() => { el.innerHTML = ''; }, 2600);
  };

  const setF = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const er = {};
    if (!form.nombre.trim()) er.nombre = 1;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 1;
    if (!/^\d{10}$/.test(form.tel.replace(/\D/g, ''))) er.tel = 1;
    if (!form.inst.trim()) er.inst = 1;
    if (!form.profesion) er.profesion = 1;
    if (!form.rol) er.rol = 1;
    if (!form.cedula.trim()) er.cedula = 1;
    if (!form.cv) er.cv = 1;
    if (!form.carta) er.carta = 1;
    return er;
  };

  const submit = (e) => {
    e.preventDefault();
    const er = validate();
    if (Object.keys(er).length) {
      setErrors(er);
      setShowErr(true);
    } else {
      setSubmitted(true);
      setShowErr(false);
      setErrors({});
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({nombre:'',email:'',tel:'',inst:'',profesion:'',rol:'',cedula:'',cv:null,carta:null});
    setErrors({});
    setShowErr(false);
  };

  const buildSearch = () => {
    const idx = [];
    programa.forEach(p => idx.push({kind:'Programa',title:`Fase ${p.n}: ${p.titulo}`,sub:`${p.cuando} · ${p.meta}`,section:'programa',hay:(p.titulo+p.objetivo+(p.temas||[]).map(t=>t.t+' '+t.d).join(' ')).toLowerCase()}));
    expertos.forEach(x => idx.push({kind:'Experto',title:x.nombre,sub:`${x.org} · ${x.expertise}`,section:'expertos',hay:(x.nombre+x.org+x.expertise).toLowerCase()}));
    perfiles.forEach(p => idx.push({kind:'Perfil',title:p.titulo,sub:p.items.join(', '),section:'perfiles',hay:(p.titulo+p.items.join(' ')).toLowerCase()}));
    return idx;
  };

  const q = query.trim().toLowerCase();
  const searching = q.length >= 2;
  let searchResults = [];
  if (searching) {
    searchResults = buildSearch()
      .filter(r => r.hay.includes(q))
      .slice(0, 12)
      .map(r => ({ kind: r.kind, title: r.title, sub: r.sub, go: () => go(r.section) }));
  }

  const resultsLabel = searchResults.length ? `${searchResults.length} coincidencia(s) para "${query}"` : `Sin coincidencias para "${query}"`;
  const expOpts = [['Sí', 'Sí'], ['No', 'No'], ['En formación', 'En formación']];

  const red = '#D32F2F';

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'linear-gradient(160deg,#ffffff 0%,#f2fbfa 45%,#eaf7ef 100%)', overflowX: 'hidden' }}>
      {bgOn && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
          <div className="cn-blob" style={{ width: '46vw', height: '46vw', left: '-8vw', top: '-6vw', background: 'radial-gradient(circle at 30% 30%,#0099CC,transparent 70%)', animation: 'cnBlobA 26s ease-in-out infinite' }}></div>
          <div className="cn-blob" style={{ width: '40vw', height: '40vw', right: '-6vw', top: '8vh', background: 'radial-gradient(circle at 40% 40%,#66CC00,transparent 70%)', animation: 'cnBlobB 32s ease-in-out infinite' }}></div>
          <div className="cn-blob" style={{ width: '38vw', height: '38vw', left: '20vw', bottom: '-12vw', background: 'radial-gradient(circle at 50% 50%,#12b3b0,transparent 70%)', animation: 'cnBlobC 30s ease-in-out infinite' }}></div>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.5) 45%,rgba(255,255,255,.72) 100%)' }}></div>
        </div>
      )}

      {/* NAV */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,.86)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #e4eef1' }}>
        <div className="header-inner" style={{ maxWidth: 1240, margin: '0 auto', padding: '12px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }} onClick={() => go('home')}>
            <img src="assets/cnadot.png" alt="CNADOT" style={{ height: 70, width: 'auto' }} />
            <div style={{ height: 40, width: 1, background: '#dcdcdc' }}></div>
            <img src="assets/Logos_02_Salud-CENATRA.svg" alt="Salud CENATRA" style={{ height: 45, width: 'auto' }} />
          </div>
          <nav className="cn-scroll" style={{ display: 'flex', gap: 2, marginLeft: 'auto', overflowX: 'auto', maxWidth: '62vw' }}>
            {navItems.map(([k, label]) => (
              <button key={k} onClick={() => go(k)} className="nav-btn">
                {label}
                {section === k && <span style={{ position: 'absolute', left: 12, right: 12, bottom: 2, height: 3, borderRadius: 3, background: 'linear-gradient(90deg, #12d2b3, #8af298)' }}></span>}
              </button>
            ))}
          </nav>
          <button onClick={() => go('inscripcion')} style={{ flex: '0 0 auto', background: accentColor, color: '#fff', border: 'none', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, padding: '10px 20px', borderRadius: 999, cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,102,0,.28)', transition: '.2s' }}>
            {ctaLabel}
          </button>
        </div>
      </header>



      <main style={{ position: 'relative', zIndex: 10, maxWidth: 1240, margin: '0 auto', padding: '0 24px 80px' }}>
        


        {/* HOME */}
        {section === 'home' && (
          <section style={{ padding: '8px 0 0' }}>
            <div className="cn-reveal grid-hero">
              <div>
                <span style={{ display: 'inline-block', fontFamily: "'Poppins'", fontWeight: 600, fontSize: 12.5, letterSpacing: '.1em', textTransform: 'uppercase', color: '#66CC00', background: '#eef9d9', padding: '6px 14px', borderRadius: 999 }}>Curso Nacional Avanzado</span>
                <h1 className="text-hero" style={{ fontFamily: "'Poppins'", fontWeight: 800, lineHeight: 1.12, color: '#1c3f4a', margin: '18px 0 10px', textWrap: 'balance' }}>Donación de Órganos y Tejidos<br /><span style={{ background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Hacia un Modelo Mexicano</span></h1>
                <p style={{ fontSize: 17, lineHeight: 1.6, color: '#555', maxWidth: 560 }}>Programa escalado de complejidad creciente: entornos virtuales, simulación de alta fidelidad y modelos experimentales in vivo para el equipo multidisciplinario de donación y trasplantes.</p>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 26 }}>
                  <button onClick={() => go('inscripcion')} style={{ background: accentColor, color: '#fff', border: 'none', fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, padding: '14px 30px', borderRadius: 999, cursor: 'pointer', boxShadow: '0 6px 18px rgba(255,102,0,.3)', transition: '.2s' }}>{ctaLabel}</button>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src="assets/cnadot.png" alt="CNADOT" style={{ width: '100%', maxWidth: 420, filter: 'drop-shadow(0 20px 40px rgba(0,120,150,.15))' }} />
              </div>
            </div>

            {/* STATS */}
            <div className="cn-reveal grid-4" style={{ margin: '34px 0' }}>
              {stats.map((s, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,.85)', border: '1px solid #e8f1f0', borderRadius: 16, padding: '26px 20px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,.03)' }}>
                  <div className="text-stats" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 14, color: '#666', marginTop: 8 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* PROGRAMA CARDS */}
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 700, color: '#1c3f4a', margin: '44px 0 6px' }}>5 Fases Integradas</h2>
            <p style={{ color: '#666', margin: '0 0 26px' }}>Un programa escalado de complejidad creciente.</p>
            <div className="grid-3">
              {programa.map((f, i) => (
                <div key={i} className="cn-reveal fase-card" style={{ borderImage: `linear-gradient(90deg,${f.color},${f.color2}) 1` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
                    <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins'", fontWeight: 800, fontSize: 24, color: '#fff', background: `linear-gradient(135deg,${f.color},${f.color2})` }}>{f.n}</div>
                    <div style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 12, color: '#888' }}>FASE {f.n}</div>
                  </div>
                  <h3 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 19, color: '#1c3f4a', margin: '0 0 8px', lineHeight: 1.25 }}>{f.titulo}</h3>
                  <p style={{ color: '#666', fontSize: 14, margin: '0 0 4px' }}><strong style={{ color: f.color }}>{f.cuando}</strong></p>
                  <p style={{ color: '#888', fontSize: 13, margin: '0 0 6px' }}>{f.meta}</p>
                  {f.alerta && <p style={{ color: '#D32F2F', fontSize: 12.5, fontWeight: 600, margin: '0 0 12px' }}>{f.alerta}</p>}
                  <div style={{ flex: 1 }}></div>
                  <button onClick={() => go('programa')} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', fontFamily: "'Poppins'", fontWeight: 600, fontSize: 14, color: f.color, cursor: 'pointer', padding: 0 }}>Ver programa completo →</button>
                </div>
              ))}
            </div>

            {/* OBJETIVO GENERAL */}
            <div className="cn-reveal" style={{ textAlign: 'center', maxWidth: 900, margin: '40px auto 10px', background: '#f8fafb', padding: '30px 40px', borderRadius: 16, border: '1px solid #e8f1f0' }}>
              <h3 style={{ fontFamily: "'Poppins'", fontWeight: 800, fontSize: 16, color: '#1c3f4a', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '1px' }}>Objetivo General</h3>
              <p style={{ color: '#445', fontSize: 15.5, lineHeight: 1.6, margin: 0 }}>
                Desarrollar y consolidar competencias teórico-prácticas, clínicas, quirúrgicas en el equipo de salud multidisciplinario de donación y trasplantes, mediante entornos virtuales, simulación de alta fidelidad y modelos experimentales in vivo, orientados a optimizar la detección, el mantenimiento del donante y la viabilidad de los injertos bajo el marco normativo nacional e internacional.
              </p>
            </div>

            {/* 4 OBJETIVOS PARTICULARES */}
            <div className="grid-4" style={{ margin: '30px 0 52px' }}>
              {objetivos.map((o, i) => (
                <div key={i} className="cn-reveal" style={{ background: o.tint, borderRadius: 16, padding: 26, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: 46, height: 46, borderRadius: 12, background: o.color === blue ? '#0099CC' : o.color === green ? '#66CC00' : '#FF6600', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, color: '#fff' }}>
                    {o.icon}
                  </div>
                  <h3 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 6px' }}>{o.titulo}</h3>
                  <p style={{ color: '#556', fontSize: 13.5, margin: 0, lineHeight: 1.55 }}>{o.texto}</p>
                </div>
              ))}
            </div>

            {/* LOGOS GRID (HOME) */}
            <LogosGrid />

            {/* CTA */}
            <div className="cn-reveal pad-cta" style={{ borderRadius: 24, textAlign: 'center', background: 'linear-gradient(120deg, #1c5b76, #12d2b3)', color: '#fff', boxShadow: '0 16px 40px rgba(18,210,179,.25)' }}>
              <h2 className="text-hero" style={{ fontFamily: "'Poppins'", fontWeight: 800, margin: '0 0 12px', textWrap: 'balance' }}>Únete a la Red de Especialistas en Donación y Trasplantes</h2>
              <p style={{ fontSize: 17, opacity: 0.92, margin: '0 0 28px' }}>Plazas limitadas para profesionales de la cadena crítica de donación.</p>
              <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => go('inscripcion')} style={{ background: accentColor, color: '#fff', border: 'none', fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, padding: '14px 34px', borderRadius: 999, cursor: 'pointer', boxShadow: '0 6px 18px rgba(0,0,0,.2)', transition: '.2s' }}>{ctaLabel}</button>
              </div>
            </div>
          </section>
        )}

        {/* OBJETIVOS */}
        {section === 'objetivos' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 30px' }}>Objetivos del Curso</h2>
            <div style={{ background: '#fff', border: '1px solid #e8f1f0', borderLeft: '5px solid #0099CC', borderRadius: 16, padding: '30px 34px', boxShadow: '0 2px 12px rgba(0,0,0,.04)', marginBottom: 34 }}>
              <h3 style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 22, color: '#0099CC', margin: '0 0 14px' }}>Objetivo General</h3>
              <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#444', margin: 0, maxWidth: 900 }}>Desarrollar y consolidar competencias teórico-prácticas, clínicas y quirúrgicas en el equipo de salud multidisciplinario de donación y trasplantes, mediante entornos virtuales, simulación de alta fidelidad y modelos experimentales in vivo, orientados a optimizar la detección, el mantenimiento del donante y la viabilidad de los injertos bajo el marco normativo nacional e internacional.</p>
            </div>
            <div className="grid-2">
              {objetivos.map((o, i) => (
                <div key={i} style={{ background: '#fff', border: '1px solid #eef3f4', borderTop: '3px solid transparent', borderRadius: 14, padding: 26, transition: '.25s' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: o.tint, color: o.color }}>{o.icon}</div>
                    <h3 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 18, color: '#1c3f4a', margin: 0 }}>{o.titulo}</h3>
                  </div>
                  <p style={{ color: '#556', fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{o.texto}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* DIRIGIDO A */}
        {section === 'perfiles' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 12px', textTransform: 'uppercase' }}>Dirigido a:</h2>
            <p style={{ color: '#1c3f4a', fontSize: 16, lineHeight: 1.6, marginBottom: 32, maxWidth: 800 }}>
              El programa está diseñado bajo un modelo de Educación Médica Continua Multidisciplinaria. Está dirigido estrictamente a profesionales en activo que forman parte del eslabón crítico en la cadena de donación y trasplantes:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {perfiles.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', background: '#fff', border: `2px solid ${p.color || '#0099CC'}`, borderRadius: 999, padding: '10px 24px', transition: '.2s', boxShadow: '0 4px 12px rgba(0,0,0,.04)' }}>
                  <div style={{ flex: '0 0 auto', width: 64, height: 64, borderRadius: '50%', background: p.color || '#0099CC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginRight: 24, boxShadow: 'inset 0 -3px 0 rgba(0,0,0,.15)' }}>
                    {p.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 16, color: '#1c3f4a', margin: '0 0 4px', textTransform: 'uppercase' }}>{p.titulo}:</h3>
                    <p style={{ margin: 0, color: '#445', fontSize: 14.5, lineHeight: 1.4 }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROGRAMA UNIFICADO */}
        {section === 'programa' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 4px' }}>Programa Completo</h2>
            <p style={{ color: '#666', margin: '0 0 28px', fontSize: 16 }}>Un programa escalado de complejidad creciente. Haz clic en cada fase para ver el detalle de los temas.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {programa.map((f, i) => {
                const isOpen = openPrograma[f.n];
                return (
                  <div key={i} style={{ background: '#fff', border: '1px solid #e8f1f0', borderLeft: `5px solid ${f.color}`, borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,.04)' }}>
                    <button onClick={() => setOpenPrograma(s => ({ ...s, [f.n]: !isOpen }))} style={{ width: '100%', textAlign: 'left', border: 'none', background: f.tint, padding: '20px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 18 }}>
                      <div style={{ width: 54, height: 54, flex: '0 0 auto', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Poppins'", fontWeight: 800, fontSize: 24, color: '#fff', background: `linear-gradient(135deg,${f.color},${f.color2})` }}>{f.n}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 20, color: '#1c3f4a' }}>Fase {f.n}: {f.titulo}</div>
                        <div style={{ color: '#556', fontSize: 14, marginTop: 2 }}>{f.cuando} · {f.meta}</div>
                        {f.alerta && <div style={{ color: '#D32F2F', fontSize: 13, fontWeight: 600, marginTop: 4 }}>{f.alerta}</div>}
                      </div>
                      <span style={{ fontSize: 24, color: f.color, transition: '.2s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>⌄</span>
                    </button>
                    {isOpen && (
                      <div className="cn-reveal" style={{ padding: '26px 28px 30px' }}>
                        <div style={{ background: f.tint, borderRadius: 12, padding: '18px 20px', marginBottom: 22 }}>
                          <div style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 13, letterSpacing: '.05em', textTransform: 'uppercase', color: f.color, marginBottom: 6 }}>Objetivo de la fase</div>
                          <p style={{ margin: 0, color: '#444', fontSize: 15, lineHeight: 1.6 }}>{f.objetivo}</p>
                        </div>
                        {f.temas && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                            {f.temas.map((t, j) => (
                              <div key={j} style={{ display: 'flex', gap: 12 }}>
                                <span style={{ color: f.color, fontWeight: 'bold' }}>›</span>
                                <div>
                                  <div style={{ color: '#1c3f4a', fontWeight: 600, fontSize: 15 }}>{t.t}</div>
                                  <div style={{ color: '#556', fontSize: 14.5, marginTop: 2, whiteSpace: 'pre-line' }}>{t.d}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ESCENARIOS */}
        {section === 'escenarios' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 8px' }}>Escenarios de Simulación Clínica</h2>
            <p style={{ color: '#666', margin: '0 0 34px', fontSize: 16 }}>Aprendizaje experiencial en alta fidelidad · rotación en grupos A, B, C, D con debriefing estructurado.</p>
            
            <div className="grid-2" style={{ gap: 24 }}>
              {escenarios.map((e, i) => (
                <div key={i} style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid #e8f1f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 16px rgba(0,0,0,.03)' }}>
                  <div style={{ position: 'relative', height: 160 }}>
                    <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${e.image})`, backgroundSize: e.bgSize || 'cover', backgroundPosition: e.bgPos || 'center', backgroundRepeat: 'no-repeat', transform: e.flip ? 'scaleX(-1)' : 'none' }}></div>
                    <div style={{ position: 'absolute', inset: 0, background: e.overlay || 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,0) 100%)' }}></div>
                    <div style={{ position: 'relative', zIndex: 1, padding: 24, display: 'flex', alignItems: 'center', gap: 16, height: '100%' }}>
                      <div style={{ width: 54, height: 54, borderRadius: 14, background: e.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {e.icon}
                      </div>
                      <div>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 800, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase', color: e.color, textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.8)' }}>ESCENARIO {e.num}</span>
                        <h3 style={{ fontFamily: "'Poppins'", fontWeight: 800, fontSize: 20, color: '#1c3f4a', margin: '2px 0 0', lineHeight: 1.2, textShadow: '0 0 10px rgba(255,255,255,0.9), 0 0 20px rgba(255,255,255,0.8)' }}>{e.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 11.5, color: '#777', letterSpacing: '.04em', textTransform: 'uppercase', margin: '0 0 16px' }}>Objetivos de aprendizaje</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px', marginBottom: 20 }}>
                      {e.objetivos.map((obj, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={e.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}><path d="m9 18 6-6-6-6"/></svg>
                          <span style={{ fontSize: 13.5, color: '#556', lineHeight: 1.4 }}>{obj}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {e.pills.map((pill, j) => (
                        <span key={j} style={{ background: e.tint, color: '#334', padding: '6px 14px', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>{pill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EXPERTOS */}
        {section === 'expertos' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 4px' }}>Equipo Docente Internacional</h2>
            <p style={{ color: '#666', margin: '0 0 22px', fontSize: 16 }}>Expertos de México, España y Estados Unidos.</p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 30 }}>
              {paises.map((p, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fff', border: '1px solid #e8f1f0', borderRadius: 999, padding: '8px 18px' }}>
                  <img src={p.flagImg} style={{ width: 26, height: 18, objectFit: 'cover', borderRadius: 3, boxShadow: '0 0 0 1px rgba(0,0,0,.06)' }} alt="flag" />
                  <span style={{ fontFamily: "'Poppins'", fontWeight: 800, fontSize: 20, color: p.color }}>{p.count}</span>
                  <span style={{ color: '#556', fontSize: 14 }}>{p.label}</span>
                </div>
              ))}
            </div>
            <div className="grid-3">
              {expertos.map((x, i) => (
                <div key={i} className="experto-card" style={{ borderLeft: `4px solid ${x.color}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <h3 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: 0, lineHeight: 1.25 }}>{x.nombre}</h3>
                    <img src={x.flagImg} style={{ flex: '0 0 auto', width: 24, height: 16, objectFit: 'cover', borderRadius: 2, boxShadow: '0 0 0 1px rgba(0,0,0,.08)' }} alt="flag" />
                  </div>
                  <div style={{ color: x.color, fontSize: 12.5, fontWeight: 600, margin: '6px 0 8px' }}>{x.org}</div>
                  <p style={{ color: '#666', fontSize: 13, margin: 0, lineHeight: 1.5 }}>{x.expertise}</p>
                </div>
              ))}
            </div>

            {/* LOGOS GRID */}
            <div style={{ marginTop: 60 }}>
              <LogosGrid />
            </div>
          </section>
        )}

        {/* CRONOGRAMA */}
        {section === 'cronograma' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 4px' }}>Timeline del Programa</h2>
            <p style={{ color: '#666', margin: '0 0 34px', fontSize: 16 }}>Formación intensiva entre septiembre y octubre.</p>
            <div style={{ position: 'relative', paddingLeft: 44 }}>
              <div style={{ position: 'absolute', left: 15, top: 8, bottom: 8, width: 3, background: 'linear-gradient(180deg, #1c5b76, #12d2b3, #8af298)' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                {timeline.map((t, i) => (
                  <div key={i} className="cn-reveal" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: -37, top: 22, width: 20, height: 20, borderRadius: '50%', background: '#fff', border: `4px solid ${t.color}` }}></div>
                    <div style={{ background: '#fff', border: '1px solid #e8f1f0', borderLeft: `5px solid ${t.color}`, borderRadius: 14, padding: '22px 26px', boxShadow: '0 2px 10px rgba(0,0,0,.04)' }}>
                      <div style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 13, letterSpacing: '.05em', textTransform: 'uppercase', color: t.color }}>{t.week}</div>
                      <h3 style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 19, color: '#1c3f4a', margin: '6px 0 10px' }}>{t.titulo}</h3>
                      <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }}>
                        {t.items.map((it, j) => <li key={j} style={{ color: '#556', fontSize: 14 }}>{it}</li>)}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* INSCRIPCION */}
        {section === 'inscripcion' && (
          <section className="cn-reveal pad-section">
            <div style={{ height: 5, width: 120, borderRadius: 5, background: 'linear-gradient(90deg, #1c5b76, #12d2b3, #8af298)', marginBottom: 16 }}></div>
            <h2 className="text-section" style={{ fontFamily: "'Poppins'", fontWeight: 800, color: '#1c3f4a', margin: '0 0 4px' }}>Pre-regístrate al Programa</h2>
            <p style={{ color: '#666', margin: '0 0 28px', fontSize: 16 }}>Por favor, completa el siguiente formulario con tus datos. Asegúrate de adjuntar tu CV y carta de motivos para que el comité evalúe tu perfil.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div style={{ background: '#fff', border: '1px solid #e8f1f0', borderRadius: 18, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,.04)', maxWidth: 800, margin: '0 auto', width: '100%' }}>
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 10px', position: 'relative' }}>
                    <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#66CC00', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', animation: 'cnPop .5s ease both' }}>
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <h3 style={{ fontFamily: "'Poppins'", fontWeight: 700, fontSize: 24, color: '#1c3f4a', margin: '0 0 8px' }}>¡Gracias por tu pre-registro!</h3>
                    <p style={{ color: '#666', fontSize: 16, margin: 0 }}>Nos pondremos en contacto contigo en un plazo de 24 horas.</p>
                    <div ref={confettiRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}></div>
                    <button onClick={resetForm} style={{ marginTop: 24, background: 'none', border: '2px solid #cfe9f2', color: '#0099CC', fontFamily: "'Poppins'", fontWeight: 600, padding: '10px 24px', borderRadius: 999, cursor: 'pointer' }}>Enviar otro pre-registro</button>
                  </div>
                ) : (
                  <form onSubmit={submit}>
                    <div className="grid-form">
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Nombre completo *</span>
                        <input value={form.nombre} onChange={setF('nombre')} style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.nombre ? red : '#d6e3e8'}`, borderRadius: 10 }} />
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Correo electrónico *</span>
                        <input value={form.email} onChange={setF('email')} style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.email ? red : '#d6e3e8'}`, borderRadius: 10 }} />
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Teléfono *</span>
                        <input value={form.tel} onChange={setF('tel')} placeholder="10 dígitos" style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.tel ? red : '#d6e3e8'}`, borderRadius: 10 }} />
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Institución / Hospital *</span>
                        <input value={form.inst} onChange={setF('inst')} style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.inst ? red : '#d6e3e8'}`, borderRadius: 10 }} />
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Profesión *</span>
                        <select value={form.profesion} onChange={setF('profesion')} style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.profesion ? red : '#d6e3e8'}`, borderRadius: 10, background: '#fff' }}>
                          <option value="">Selecciona…</option>
                          <option value="Médico">Médico</option>
                          <option value="Enfermero">Enfermero/a</option>
                        </select>
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Especialidad / Rol *</span>
                        <select value={form.rol} onChange={setF('rol')} style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.rol ? red : '#d6e3e8'}`, borderRadius: 10, background: '#fff' }}>
                          <option value="">Selecciona…</option>
                          <option value="Coordinador">Coordinador(a) de Donación</option>
                          <option value="Intensivista">Intensivista</option>
                          <option value="Anestesiólogo">Anestesiólogo(a)</option>
                          <option value="Cirujano">Cirujano(a)</option>
                          <option value="Perfusionista">Perfusionista</option>
                          <option value="Enfermera">Enfermero(a) Quirúrgico(a)</option>
                        </select>
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Cédula profesional *</span>
                        <input value={form.cedula} onChange={setF('cedula')} style={{ width: '100%', fontFamily: "'Inter'", fontSize: 14, padding: '11px 14px', border: `1px solid ${errors.cedula ? red : '#d6e3e8'}`, borderRadius: 10 }} />
                      </label>
                      <label style={{ display: 'block' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Curriculum Vitae (CV) *</span>
                        <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block', width: '100%' }}>
                          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setForm(s => ({...s, cv: e.target.files[0]}))} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} />
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', border: `1px solid ${errors.cv ? red : '#d6e3e8'}`, borderRadius: 10, background: '#f8fbfc', color: form.cv ? '#1c3f4a' : '#889' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={form.cv ? "#0099CC" : "#889"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            <span style={{ fontSize: 14, fontFamily: "'Inter'", fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {form.cv ? form.cv.name : 'Subir archivo...'}
                            </span>
                          </div>
                        </div>
                      </label>
                      <label style={{ display: 'block', gridColumn: '1 / -1' }}>
                        <span style={{ fontFamily: "'Poppins'", fontWeight: 500, fontSize: 13, color: '#556', display: 'block', marginBottom: 6 }}>Carta de motivos *</span>
                        <div style={{ position: 'relative', overflow: 'hidden', display: 'inline-block', width: '100%' }}>
                          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setForm(s => ({...s, carta: e.target.files[0]}))} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0, cursor: 'pointer', zIndex: 2 }} />
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '9px 14px', border: `1px solid ${errors.carta ? red : '#d6e3e8'}`, borderRadius: 10, background: '#f8fbfc', color: form.carta ? '#1c3f4a' : '#889' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={form.carta ? "#0099CC" : "#889"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                            <span style={{ fontSize: 14, fontFamily: "'Inter'", fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {form.carta ? form.carta.name : 'Subir archivo...'}
                            </span>
                          </div>
                        </div>
                      </label>
                    </div>
                    {showErr && <p style={{ color: '#D32F2F', fontSize: 13.5, margin: '16px 0 0' }}>Revisa los campos marcados en rojo antes de enviar.</p>}
                    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 22 }}>
                      <button type="submit" style={{ background: '#FF6600', color: '#fff', border: 'none', fontFamily: "'Poppins'", fontWeight: 600, fontSize: 15, padding: '13px 30px', borderRadius: 999, cursor: 'pointer', boxShadow: '0 4px 14px rgba(255,102,0,.28)', transition: '.2s' }}>Enviar Pre-registro</button>
                    </div>
                  </form>
                )}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                <div style={{ background: '#E6F7FF', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#0099CC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>{icPin}</div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 8px' }}>Sede Anáhuac</h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#556', fontSize: 13.5, lineHeight: 1.7, marginBottom: 12 }}>
                    <li><strong style={{color:'#0099CC'}}>28 de Septiembre</strong> · Auditorio de Rectoría</li>
                    <li><strong style={{color:'#0099CC'}}>29 y 30 de Septiembre</strong> · Centro de Simulación</li>
                  </ul>
                  <iframe src="https://maps.google.com/maps?q=Universidad+Anahuac+Mexico+Norte&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="130" style={{ border: 0, borderRadius: 8 }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div style={{ background: '#EEF9D9', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#66CC00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>{icPin}</div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 8px' }}>Sede UVM</h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#556', fontSize: 13.5, lineHeight: 1.7, marginBottom: 12 }}>
                    <li><strong style={{color:'#66CC00'}}>30 de Septiembre</strong> · Centro de Simulación UVM</li>
                    <li><strong style={{color:'#66CC00'}}>1 y 2 de Octubre</strong> · UVM Hospital Veterinario</li>
                  </ul>
                  <iframe src="https://maps.google.com/maps?q=Calz.+de+Tlalpan+3058,+Coapa,+Sta.+Ursula+Coapa,+Coyoacan,+CDMX&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="130" style={{ border: 0, borderRadius: 8 }} allowFullScreen="" loading="lazy"></iframe>
                </div>

                <div style={{ background: '#FFF0F0', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#FF4D4D', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  </div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 8px' }}>Cuota de recuperación</h4>
                  <p style={{ margin: 0, padding: 0, color: '#556', fontSize: 13.5, lineHeight: 1.7 }}>Una vez aprobado por el comité podrá completar su inscripción.</p>
                </div>

                <div style={{ background: '#F0E6FF', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#9966CC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: 0 }}>Cupo Limitado</h4>
                </div>

                <div style={{ background: '#E6F7FF', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#0099CC', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                  </div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 8px' }}>Requisitos</h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#556', fontSize: 13.5, lineHeight: 1.7, marginBottom: 0 }}>
                    <li>• Curriculum Vitae (CV) actualizado</li>
                    <li>• Carta de motivos (Máx. 1 cuartilla)</li>
                  </ul>
                </div>

                <div style={{ background: '#EEF9D9', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#66CC00', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                  </div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 8px' }}>Avales Curriculares</h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#556', fontSize: 13.5, lineHeight: 1.7, marginBottom: 0 }}>
                    <li>• UNAM</li>
                    <li>• Consejo Mexicano de Cirugía (8 puntos)</li>
                  </ul>
                </div>
                <div style={{ background: '#FFE6CC', borderRadius: 16, padding: 22 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 11, background: '#FF6600', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <h4 style={{ fontFamily: "'Poppins'", fontWeight: 600, fontSize: 16, color: '#1c3f4a', margin: '0 0 8px' }}>Soporte</h4>
                  <ul style={{ margin: 0, padding: 0, listStyle: 'none', color: '#556', fontSize: 13.5, lineHeight: 1.75 }}>
                    <li>Correo: <a href="mailto:dgcenatra@salud.gob.mx" style={{color: '#FF6600', fontWeight: 600, textDecoration: 'none'}}>dgcenatra@salud.gob.mx</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* FOOTER */}
        <footer style={{ marginTop: 60, padding: '34px 0 10px', borderTop: '1px solid #e4eef1', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src="assets/cnadot.png" alt="CNADOT" style={{ height: 70, width: 'auto' }} />
              <div style={{ height: 40, width: 1, background: '#dcdcdc' }}></div>
              <img src="assets/Logos_02_Salud-CENATRA.svg" alt="Salud CENATRA" style={{ height: 45, width: 'auto' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: 8, opacity: 0.7, marginLeft: 16 }}>
              <img src="assets/Logos_01_HCE.svg" alt="HCE" style={{ height: 18, width: 'auto' }} />
            </div>
          </div>
          <div style={{ color: '#888', fontSize: 13, textAlign: 'right' }}>
            Curso Nacional Avanzado de Donación de Órganos y Tejidos<br /><a href="mailto:dgcenatra@salud.gob.mx" style={{color: '#888', textDecoration: 'none'}}>dgcenatra@salud.gob.mx</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
