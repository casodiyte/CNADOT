import * as React from 'react';

const rawHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>¡Tu cuenta del Portal HCE ha sido creada!</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap">
<style>   * { font-family: 'Inter', Arial, sans-serif; }   a { text-decoration: none !important; color: inherit; }   .btn-table, .social-table, .calendar-row { margin: 0 auto !important; }   .cal-btn, .social-btn, .main-btn, .map-btn {     display: inline-block !important;     text-align: center !important;     box-sizing: border-box !important;   }   @media only screen and (max-width: 600px) {     .email-wrapper  { padding: 12px 8px !important; }     .email-card     { border-radius: 12px !important; }     .header-cell    { padding: 28px 20px 24px !important; }     .header-title   { font-size: 22px !important; }     .body-cell      { padding: 24px 16px 24px !important; }     .data-card-cell { padding: 16px 14px !important; }     .data-row td    {       display: block !important;       width: 100% !important;       padding: 8px 0 !important;       border-bottom: 1px solid #e2e8f0 !important;       box-sizing: border-box !important;     }     .data-row td:last-child { border-bottom: none !important; }     .calendar-stack,     .calendar-stack tbody,     .calendar-stack tr,     .calendar-stack td { display: block !important; width: 100% !important; box-sizing: border-box !important; }     .cal-td, .social-td {       display: block !important;       width: 100% !important;       padding: 0 0 10px 0 !important;       box-sizing: border-box !important;       text-align: center !important;     }     .cal-td:last-child, .social-td:last-child { padding-bottom: 0 !important; }     .cal-btn, .social-btn, .main-btn, .map-btn {       display: block !important;       width: 100% !important;       max-width: 100% !important;       text-align: center !important;       box-sizing: border-box !important;     }     .footer-cell { padding: 22px 16px !important; }   } </style>
</head>
<body style="margin: 0; padding: 0;">
<table style="background:#f1f5f9;padding:32px 16px;" width="100%" cellspacing="0" cellpadding="0" class="email-wrapper">
  <tbody>
    <tr>
      <td colspan="1" rowspan="1">
        <table style="max-width:600px;border-radius:16px;overflow:hidden;margin:0 auto;box-shadow:0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03);" width="100%" cellspacing="0" cellpadding="0" class="email-card">
          <tbody>
            <tr>
              <td colspan="1" rowspan="1" style="background:#0f172a;padding:44px 40px 36px;text-align:center;" class="header-cell">
                <p style="margin: 0 0 16px; text-align: center;"><span style="background-color: rgb(15, 23, 42)"><img src="https://healthcareexp.com/assets/componentes/firma-hce.png" alt="Healthcare Training Experience" style="height: 65px; width: auto; display: inline-block; border: 0;"></span></p>
                <h1 class="header-title" style="margin: 0px; line-height: 1.25; mso-line-height-alt: 125%;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 26px"><span style="background-color: rgb(15, 23, 42)">¡Tu cuenta del Portal HCE<br>ha sido creada!</span></span></span></strong></h1>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#ffffff;padding:40px 40px 36px;text-align:left;" class="body-cell">
                <p style="margin: 0 0 16px; line-height: 1.7; mso-line-height-alt: 170%;"><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">Hola </span></span></span><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong><span style="background-color: rgb(255, 255, 255)">,</span></p>
                <p style="margin: 0 0 24px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">¡Enhorabuena! Te has registrado con éxito en el </span></span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">Portal Académico de HCE</span></span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">. Tu perfil ha sido configurado en el sistema con los datos que proporcionaste durante tu registro.</span></span></span></p>
                <table style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="padding:22px 24px;" class="data-card-cell">
                        <p style="margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.1em;"><strong><span style="color:rgb(24, 58, 103);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Información del Perfil Registrado</span></span></span></strong></p>
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Nombre Completo</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Correo Electrónico</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.EMAIL }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Teléfono de Contacto</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PHONE }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Ubicación (País, Estado)</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PAIS }}, {{ contact.ESTADO }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Grado / Profesión</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PROFESION }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Especialidad</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.ESPECIALIDAD }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Institución / Hospital</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.INSTITUCION }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Cargo / Puesto</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.CARGO }}</span></span></span></strong></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 16px;"><strong><span style="color:rgb(15, 23, 42);"><span style="font-size: 16px">📌 ¿Cómo ingresar al portal?</span></span></strong></p>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="vertical-align:top;">
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">🔑 </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Contraseña de acceso:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> Utiliza la contraseña que ingresaste durante el registro. Si la has olvidado, puedes restablecerla en cualquier momento seleccionando la opción </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">"¿Olvidaste tu contraseña?"</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> en la pantalla de inicio de sesión.</span></span></p>
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">💻 </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Requisitos del sistema:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> Te sugerimos ingresar desde navegadores modernos en computadoras de escritorio (Chrome, Safari, Firefox o Edge) para una mejor experiencia visual de las herramientas clínicas y simuladores.</span></span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 28px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">Nos alegra tenerte con nosotros en esta experiencia educativa. Haz clic en el botón de abajo para dirigirte a la pantalla de acceso del portal.</span></span></p>
                <table style="margin:0 0 14px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1">
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#0f172a;border-radius:100px;text-align:center;">
                                <p><a href="https://healthcareexp.com/login" tabindex="-1" style="display: inline-block; padding: 14px 44px; font-size: 15px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 15px"><span style="background-color: rgb(15, 23, 42)">Ingresar al Portal Académico de HCE</span></span></span></strong></a></p>
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
                                <p><a href="https://wa.me/5215659271906" tabindex="-1" style="display: inline-block; padding: 13px 36px; font-size: 14px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 14px"><span style="background-color: rgb(37, 211, 102)">✉ Soporte Técnico por WhatsApp</span></span></span></strong></a></p>
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

export default function EcmoCuentaCreadaEmail() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
