import * as React from 'react';

const rawHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>¡Tu suscripción se ha procesado con éxito! - ECMO Sim</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap">
<style>   * { font-family: 'Inter', Arial, sans-serif; }   a { text-decoration: none !important; color: inherit; }   .btn-table, .social-table, .calendar-row { margin: 0 auto !important; }   .cal-btn, .social-btn, .main-btn, .map-btn {     display: inline-block !important;     text-align: center !important;     box-sizing: border-box !important;   }   @media only screen and (max-width: 600px) {     .email-wrapper  { padding: 12px 8px !important; }     .email-card     { border-radius: 12px !important; }     .header-cell    { padding: 28px 20px 24px !important; }     .header-title   { font-size: 22px !important; }     .body-cell      { padding: 24px 16px 24px !important; }     .data-card-cell { padding: 16px 14px !important; }     .data-row td    {       display: block !important;       width: 100% !important;       padding: 8px 0 !important;       border-bottom: 1px solid #e2e8f0 !important;       box-sizing: border-box !important;     }     .data-row td:last-child { border-bottom: none !important; }     .calendar-stack,     .calendar-stack tbody,     .calendar-stack tr,     .calendar-stack td { display: block !important; width: 100% !important; box-sizing: border-box !important; }     .cal-td, .social-td {       display: block !important;       width: 100% !important;       padding: 0 0 10px 0 !important;       box-sizing: border-box !important;       text-align: center !important;     }     .cal-td:last-child, .social-td:last-child { padding-bottom: 0 !important; }     .cal-btn, .social-btn, .main-btn, .map-btn {       display: block !important;       width: 100% !important;       max-width: 100% !important;       text-align: center !important;       box-sizing: border-box !important;     }     .footer-cell { padding: 22px 16px !important; }     .logo-td {       display: inline-block !important;       width: 30% !important;       padding: 8px 4px !important;       text-align: center !important;       vertical-align: middle !important;       box-sizing: border-box !important;     }     .logo-wrap { text-align: center !important; }   } </style>
</head>
<body style="margin: 0; padding: 0;">
<table style="background:#f1f5f9;padding:32px 16px;" width="100%" cellspacing="0" cellpadding="0" class="email-wrapper">
  <tbody>
    <tr>
      <td colspan="1" rowspan="1">
        <table style="max-width:600px;border-radius:16px;overflow:hidden;margin:0 auto;" width="100%" cellspacing="0" cellpadding="0" class="email-card">
          <tbody>
            <tr>
              <td colspan="1" rowspan="1" style="background:#0f172a;padding:44px 40px 36px;text-align:center;" class="header-cell">
                <p style="margin: 0 0 12px; letter-spacing: 0.15em; text-transform: uppercase;"><strong><span style="color:rgba(255, 255, 255, 0.5);"><span style="font-size: 11px"><span style="background-color: rgb(15, 23, 42)">Healthcare Training Experience</span></span></span></strong></p>
                <h1 class="header-title" style="margin: 0 0 24px; line-height: 1.25; mso-line-height-alt: 125%;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 26px"><span style="background-color: rgb(15, 23, 42)">¡Tu suscripción se ha<br>procesado con éxito!</span></span></span></strong></h1>
                <p style="margin: 15px 0 0; text-align: center;"><span style="background-color: rgb(15, 23, 42)"><img src="https://healthcareexp.com/assets/componentes/ecmosim-logo-new.png" alt="ECMO Sim" style="height: 130px; width: auto; display: inline-block; max-width: 100%; border: 0; margin: 0 auto;"></span></p>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#ffffff;padding:40px 40px 36px;text-align:left;" class="body-cell">
                <p style="margin: 0 0 16px; line-height: 1.7; mso-line-height-alt: 170%;"><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">Hola </span></span></span><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">,</span></span></span></p>
                <p style="margin: 0 0 14px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">¡Tu suscripción a </span></span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">ECMO Sim</span></span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)"> se ha procesado con éxito! Nos entusiasma mucho darte la bienvenida a esta experiencia interactiva de entrenamiento, donde dominarás la fisiología de ECMO de una manera completamente práctica y segura.</span></span></span></p>
                <table style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="padding:22px 24px;" class="data-card-cell">
                        <p style="margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.1em;"><strong><span style="color:rgb(183, 121, 31);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Tus datos registrados</span></span></span></strong></p>
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Nombre completo</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Correo de contacto</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.EMAIL }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Teléfono / WhatsApp</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PHONE }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Profesión / Especialidad</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PROFESION }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Institución / Hospital</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.INSTITUCION }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">País</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PAIS }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="2" rowspan="1" style="padding:8px 0 0 0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Plan Adquirido</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(183, 121, 31);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PLAN }}</span></span></span></strong></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style="background:#fff1f2;border:1px solid #fecdd3;border-radius:12px;margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="padding:18px 20px;">
                        <p style="margin: 0 0 8px; text-transform: uppercase; letter-spacing: 0.08em; line-height: 1.2; mso-line-height-alt: 120%;"><strong><span style="color:rgb(185, 28, 28);"><span style="font-size: 12px"><span style="background-color: rgb(255, 241, 242)">⚠️ SEGURIDAD CRÍTICA Y USO INDIVIDUAL</span></span></span></strong></p>
                        <p style="margin: 0px; line-height: 1.5; mso-line-height-alt: 150%;"><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)">Tus credenciales de acceso son </span></span></span><strong><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)">estrictamente de uso personal, confidencial e intransferible</span></span></span></strong><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)">. Nuestro sistema integra un </span></span></span><strong><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)">algoritmo de monitoreo activo de geolocalización, dirección IP y huella de dispositivo</span></span></span></strong><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)">. La detección de conexiones simultáneas, accesos concurrentes o uso compartido de la cuenta resultará en la </span></span></span><strong><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)">suspensión inmediata y definitiva de tu suscripción</span></span></span></strong><span style="color:rgb(127, 29, 29);"><span style="font-size: 13px"><span style="background-color: rgb(255, 241, 242)"> sin derecho a reembolso y con restricción permanente de acceso.</span></span></span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 16px;"><strong><span style="color:rgb(15, 23, 42);"><span style="font-size: 16px">📌 Siguientes pasos para tu acceso</span></span></strong></p>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="vertical-align:top;">
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">⚙ </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Generando tus accesos:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> En este preciso momento, nuestro equipo técnico está configurando tu cuenta y servidor en el simulador en base al correo electrónico y datos que nos proporcionaste.</span></span></p>
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">✉ </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Medio de entrega:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> En cuanto tus accesos estén completamente activos, </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">te enviaremos tus credenciales de usuario y el enlace de inicio de sesión directamente a través del Correo Electrónico y el número de WhatsApp que nos has proporcionado.</span></span></strong></p>
                        <p style="margin: 0 0 12px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">⏳ </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">Plazo estimado:</span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"> La activación de tu cuenta suele tardar entre **24 y 72 horas**.</span></span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 28px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">Prepárate para entrenar tu criterio clínico con ECMO Sim y salvar vidas desde cualquier navegador de escritorio. ¡Te vemos muy pronto en el simulador!</span></span></p>
                <table style="margin:0 0 14px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1">
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#0f172a;border-radius:100px;text-align:center;">
                                <p><a href="https://healthcareexp.com" tabindex="-1" style="display: inline-block; padding: 14px 44px; font-size: 15px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 15px"><span style="background-color: initial">Visitar Healthcare Training Experience</span></span></span></strong></a><span style="background-color: initial"> </span></p>
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
                                <p><a href="https://wa.me/5215659271906" tabindex="-1" style="display: inline-block; padding: 13px 36px; font-size: 14px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 14px"><span style="background-color: initial">✉ Soporte Inmediato por WhatsApp</span></span></span></strong></a><span style="background-color: initial"> </span></p>
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
                <table style="margin:0 auto 20px;" cellspacing="0" cellpadding="0" align="center">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="background:#f1c40f;border-radius:100px;text-align:center;">
                        <p><a href="https://healthcareexp.com/facturacion/" tabindex="-1" style="display: inline-block; padding: 12px 36px; font-size: 14px; font-weight: 700; color: #0b0c10; border-radius: 100px;"><strong><span style="color:rgb(11, 12, 16);"><span style="font-size: 14px"><span style="background-color: initial">Facturar inversión</span></span></span></strong></a><span style="background-color: initial"> </span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default function EcmoSimPagoEmail() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
