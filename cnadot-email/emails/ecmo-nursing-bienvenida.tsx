import * as React from 'react';

const rawHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>¡Bienvenido! ECMO Nursing Care</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap">
<style>   * { font-family: 'Inter', Arial, sans-serif; }   a { text-decoration: none !important; color: inherit; }   .btn-table, .social-table, .calendar-row { margin: 0 auto !important; }   .cal-btn, .social-btn, .main-btn, .map-btn {     display: inline-block !important;     text-align: center !important;     box-sizing: border-box !important;   }   @media only screen and (max-width: 600px) {     .email-wrapper  { padding: 12px 8px !important; }     .email-card     { border-radius: 12px !important; }     .header-cell    { padding: 28px 20px 24px !important; }     .header-title   { font-size: 22px !important; }     .body-cell      { padding: 24px 16px 24px !important; }     .data-card-cell { padding: 16px 14px !important; }     .data-row td    {       display: block !important;       width: 100% !important;       padding: 8px 0 !important;       border-bottom: 1px solid #e2e8f0 !important;       box-sizing: border-box !important;     }     .data-row td:last-child { border-bottom: none !important; }     .footer-cell { padding: 22px 16px !important; }   } </style>
</head>
<body style="margin: 0; padding: 0;">
<table style="background:#f1f5f9;padding:32px 16px;" width="100%" cellspacing="0" cellpadding="0" class="email-wrapper">
  <tbody>
    <tr>
      <td colspan="1" rowspan="1">
        <table style="max-width:600px;border-radius:16px;overflow:hidden;margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" class="email-card">
          <tbody>
            <tr>
              <td colspan="1" rowspan="1" style="background:#0c2146 url('https://raw.githubusercontent.com/HCEDEV/imagenes/refs/heads/main/nursing.png') no-repeat right center / cover; padding: 50px 40px; text-align: left; height: 160px; vertical-align: middle;" class="header-cell">
                <!-- Se eliminó el tag vacío <p></p> que causaba el texto de "Empieza a escribir..." en los editores visuales -->
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#ffffff;padding:40px 40px 36px;text-align:center;" class="body-cell">
                <p style="margin: 0 0 6px; text-transform: uppercase; letter-spacing: 2px; text-align: center;"><strong><span style="color:rgb(227, 24, 55);"><span style="font-size: 13px"><span style="background-color: rgb(255, 255, 255)">¡Bienvenido!</span></span></span></strong></p>
                <h1 style="margin: 0 0 24px; text-align: center; line-height: 1.2; mso-line-height-alt: 120%;"><strong><span style="color:rgb(12, 33, 70);"><span style="font-size: 28px"><span style="font-family: Outfit, Inter, Arial, sans-serif"><span style="background-color: rgb(255, 255, 255)">ECMO Nursing Care</span></span></span></span></strong></h1>
                <p style="margin: 0 0 16px; line-height: 1.7; mso-line-height-alt: 170%; text-align: center;"><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">Hola </span></span></span><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong><span style="background-color: rgb(255, 255, 255)">,</span></p>
                <p style="margin: 0 0 14px; line-height: 1.75; mso-line-height-alt: 175%; text-align: center;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">¡Ya eres parte del </span></span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">ECMO Nursing Care Course</span></span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">! Nos entusiasma mucho que formes parte de esta experiencia formativa de alta especialidad, donde consolidarás tus competencias y conocimientos clínicos en el cuidado del paciente en soporte ECMO.</span></span></span></p>
                <p style="margin: 0 0 28px; line-height: 1.75; mso-line-height-alt: 175%; text-align: center;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">Es un entrenamiento diseñado por y para profesionales de enfermería, con una plataforma flexible que respeta tus turnos de trabajo, videoclases con referentes internacionales en ECMO y un plan de estudio estructurado.</span></span></span></p>
                <table style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="padding:22px 24px;text-align:center;" class="data-card-cell">
                        <p style="margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.1em; text-align: center;"><strong><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Tus datos registrados</span></span></span></strong></p>
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 4px;border-bottom:1px solid #e2e8f0;vertical-align:top;text-align:center;">
                                <p style="margin: 0px; text-align: center;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Nombre</span></span></span></p>
                                <p style="margin: 2px 0 0; text-align: center;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 4px;border-bottom:1px solid #e2e8f0;vertical-align:top;text-align:center;">
                                <p style="margin: 0px; text-align: center;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Correo</span></span></span></p>
                                <p style="margin: 2px 0 0; text-align: center;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.EMAIL }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 4px;border-bottom:1px solid #e2e8f0;vertical-align:top;text-align:center;">
                                <p style="margin: 0px; text-align: center;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Teléfono</span></span></span></p>
                                <p style="margin: 2px 0 0; text-align: center;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PHONE }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 4px;border-bottom:1px solid #e2e8f0;vertical-align:top;text-align:center;">
                                <p style="margin: 0px; text-align: center;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Profesión</span></span></span></p>
                                <p style="margin: 2px 0 0; text-align: center;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PROFESION }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 4px 0;vertical-align:top;text-align:center;">
                                <p style="margin: 0px; text-align: center;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Especialidad</span></span></span></p>
                                <p style="margin: 2px 0 0; text-align: center;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.ESPECIALIDAD }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 4px 0;vertical-align:top;text-align:center;">
                                <p style="margin: 0px; text-align: center;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Hospital / Institución</span></span></span></p>
                                <p style="margin: 2px 0 0; text-align: center;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.INSTITUCION }}</span></span></span></strong></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 16px; text-align: center;"><strong><span style="color:rgb(15, 23, 42);"><span style="font-size: 16px">Siguientes pasos</span></span></strong></p>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="vertical-align:top;text-align:center;">
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%; text-align: center;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">📅 Inicio de Clases: </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">3 de Agosto, 2026</span></span></strong></p>
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%; text-align: center;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">🔑 </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Acceso al Campus Virtual:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> Antes del inicio, recibirás un correo de acceso con el enlace para definir tu contraseña en nuestra plataforma virtual e iniciar tu inducción.</span></span></p>
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%; text-align: center;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">💻 </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Modalidad:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> 100% online y flexible, con acceso a videoclases pregrabadas, lecturas dirigidas, cuestionarios de aprendizaje y sesiones en vivo para responder dudas y casos clínicos.</span></span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 28px; line-height: 1.75; mso-line-height-alt: 175%; text-align: center;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">Estás a punto de comenzar una experiencia </span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">dinámica, práctica e innovadora</span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"> en ECMO. ¡Nos vemos en el aula virtual!</span></span></p>
                <table style="margin:0 0 14px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1">
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#eab308;border-radius:100px;text-align:center;">
                                <p><a href="https://healthcareexp.com/simulador-ecmo-sim" tabindex="-1" style="display: inline-block; padding: 14px 44px; font-size: 15px; font-weight: 700; color: #0f172a; border-radius: 100px;"><strong><span style="color:rgb(15, 23, 42);"><span style="font-size: 15px"><span style="background-color: rgb(234, 179, 8)">Conoce más de nuestro simulador ECMO SIM</span></span></span></strong></a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style="margin:0 0 14px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1">
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#0ea5e9;border-radius:100px;text-align:center;">
                                <p><a href="https://healthcareexp.com" tabindex="-1" style="display: inline-block; padding: 14px 44px; font-size: 15px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 15px"><span style="background-color: rgb(14, 165, 233)">Conoce más sobre HCE</span></span></span></strong></a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1">
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#25d366;border-radius:100px;text-align:center;">
                                <p><a href="https://wa.me/525659271906" tabindex="-1" style="display: inline-block; padding: 13px 36px; font-size: 14px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 14px"><span style="background-color: rgb(37, 211, 102)">✉ Contáctanos por WhatsApp</span></span></span></strong></a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#0f172a;padding:28px 40px;text-align:center;" class="footer-cell">
                <p style="margin: 0 0 20px;"><a href="https://healthcareexp.com/facturacion/" tabindex="-1" style="color: #38bdf8; font-size: 13px;"><strong><span style="color:rgb(56, 189, 248);"><span style="font-size: 13px"><span style="background-color: rgb(15, 23, 42)">Facturar inversión</span></span></span></strong></a></p>
                <p style="margin: 0 0 6px;"><span style="color:rgba(255, 255, 255, 0.5);"><span style="font-size: 13px"><span style="background-color: rgb(15, 23, 42)">Healthcare Training Experience · </span></span></span><a href="mailto:academia@healthcareexp.com" tabindex="-1" style="color: rgba(255,255,255,0.5); font-size: 13px;"><span style="color:rgba(255, 255, 255, 0.5);"><span style="font-size: 13px"><span style="background-color: rgb(15, 23, 42)">academia@healthcareexp.com</span></span></span></a></p>
                <p style="margin: 0px;"><a href="https://healthcareexp.com" tabindex="-1" style="color: rgba(255,255,255,0.3); font-size: 12px;"><span style="color:rgba(255, 255, 255, 0.3);"><span style="font-size: 12px"><span style="background-color: rgb(15, 23, 42)">www.healthcareexp.com</span></span></span></a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
</body>
</html>
`;

export default function EcmoNursingBienvenidaEmail() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
