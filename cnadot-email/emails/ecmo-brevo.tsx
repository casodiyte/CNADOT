import * as React from 'react';

const rawHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Paris International Diploma in ECMO</title>
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
              <td colspan="1" rowspan="1" style="background:linear-gradient(90deg,#071a3d 0%,#123a8c 45%,#5b2ea6 75%,#c1124d 100%);padding:44px 40px 36px;text-align:center;" class="header-cell">
                <p><span style="background-color: initial"><img src="https://raw.githubusercontent.com/HCEDEV/imagenes/refs/heads/main/Picsart_26-04-22_16-25-51-449.png" alt="Paris International Diploma in ECMO" style="display:block;width:100%;max-width:400px;height:auto;border:0;margin:0 auto;" width="400"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#ffffff;padding:40px 40px 36px;text-align:left;" class="body-cell">
                <p style="margin: 0 0 16px; line-height: 1.7; mso-line-height-alt: 170%;"><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">Hola </span></span></span><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">,</span></span></span></p>
                <p style="margin: 0 0 14px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">¡Ya eres parte del </span></span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">Paris International Diploma in ECMO</span></span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">! Nos entusiasma mucho que formes parte de esta experiencia formativa, donde llevarás tus conocimientos clínicos al siguiente nivel en el manejo de ECMO.</span></span></span></p>
                <p style="margin: 0 0 28px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">Este no es solo una certificación — es una oportunidad para aprender de expertos internacionales, analizar casos reales y conectar con una comunidad global de profesionales apasionados por el ECMO.</span></span></span></p>
                <table style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="padding:22px 24px;" class="data-card-cell">
                        <p style="margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.1em;"><strong><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Tus datos registrados</span></span></span></strong></p>
                        <table width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Nombre</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.FIRSTNAME }} {{ contact.LASTNAME }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Correo</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.EMAIL }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 8px 0;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Teléfono</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PHONE }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 8px 8px;border-bottom:1px solid #e2e8f0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Profesión</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.PROFESION }}</span></span></span></strong></p>
                              </td>
                            </tr>
                            <tr class="data-row">
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 8px 0 0;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Especialidad</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.ESPECIALIDAD }}</span></span></span></strong></p>
                              </td>
                              <td colspan="1" rowspan="1" style="width:50%;padding:8px 0 0 8px;vertical-align:top;">
                                <p style="margin: 0px;"><span style="color:rgb(148, 163, 184);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Hospital / Institución</span></span></span></p>
                                <p style="margin: 2px 0 0;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">{{ contact.INSTITUCION }}</span></span></span></strong></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 16px;"><strong><span style="color:rgb(15, 23, 42);"><span style="font-size: 16px">Siguientes pasos</span></span></strong></p>
                <table style="margin:0 0 16px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="vertical-align:top;">
                        <p style="margin: 0 0 8px;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 15px">Agrega estas fechas a tu calendario</span></span></strong></p>
                        <p style="margin: 0 0 4px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">📅 Certificación Teórica: </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">28 – 29 de Octubre 2026</span></span></strong></p>
                        <p style="margin: 0 0 16px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">📅 Certificación Práctica: </span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">30 – 31 de Octubre 2026</span></span></strong></p>
                        <table style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;" width="100%" cellspacing="0" cellpadding="0">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="padding:16px 18px;">
                                <p style="margin: 0 0 12px; text-transform: uppercase; letter-spacing: 0.09em; text-align: center;"><strong><span style="color:rgb(3, 105, 161);"><span style="font-size: 11px"><span style="background-color: rgb(240, 249, 255)">Agrega el evento a tu calendario</span></span></span></strong></p>
                                <table style="margin:0 0 8px;" width="100%" cellspacing="0" cellpadding="0" class="calendar-stack">
                                  <tbody>
                                    <tr class="calendar-row">
                                      <td colspan="1" rowspan="1" style="width:50%;padding-right:6px;vertical-align:top;text-align:center;" class="cal-td">
                                        <p><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=ECMO+Diploma+%E2%80%93+Certificaci%C3%B3n+Te%C3%B3rica&amp;dates=20261028T080000Z%2F20261029T200000Z&amp;details=INER%2C+Calz.+de+Tlalpan+4502%2C+CDMX&amp;location=Calz.+de+Tlalpan+4502%2C+Tlalpan%2C+CDMX" tabindex="-1" style="display: inline-block; padding: 9px 12px; background: #ffffff; border: 1px solid #bae6fd; border-radius: 8px; font-size: 12px; font-weight: 600; color: #0369a1; text-align: center; width: 100%; box-sizing: border-box;"><strong><span style="color:rgb(3, 105, 161);"><span style="font-size: 12px"><span style="background-color: rgb(255, 255, 255)">📅 Google Cal · Teórica</span></span></span></strong></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                                      </td>
                                      <td colspan="1" rowspan="1" style="width:50%;padding-left:6px;vertical-align:top;text-align:center;" class="cal-td">
                                        <p><a href="https://calendar.google.com/calendar/render?action=TEMPLATE&amp;text=ECMO+Diploma+%E2%80%93+Certificaci%C3%B3n+Pr%C3%A1ctica&amp;dates=20261030T080000Z%2F20261031T200000Z&amp;details=INER%2C+Calz.+de+Tlalpan+4502%2C+CDMX&amp;location=Calz.+de+Tlalpan+4502%2C+Tlalpan%2C+CDMX" tabindex="-1" style="display: inline-block; padding: 9px 12px; background: #ffffff; border: 1px solid #bae6fd; border-radius: 8px; font-size: 12px; font-weight: 600; color: #0369a1; text-align: center; width: 100%; box-sizing: border-box;"><strong><span style="color:rgb(3, 105, 161);"><span style="font-size: 12px"><span style="background-color: rgb(255, 255, 255)">📅 Google Cal · Práctica</span></span></span></strong></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table width="100%" cellspacing="0" cellpadding="0" class="calendar-stack">
                                  <tbody>
                                    <tr class="calendar-row">
                                      <td colspan="1" rowspan="1" style="width:50%;padding-right:6px;vertical-align:top;text-align:center;" class="cal-td">
                                        <p><a href="https://outlook.live.com/calendar/0/deeplink/compose?subject=ECMO+Diploma+%E2%80%93+Certificaci%C3%B3n+Te%C3%B3rica&amp;startdt=2026-10-28T08:00:00&amp;enddt=2026-10-29T20:00:00&amp;location=Calz.+de+Tlalpan+4502%2C+Tlalpan%2C+CDMX&amp;path=%2Fcalendar%2Faction%2Fcompose&amp;rru=addevent" tabindex="-1" style="display: inline-block; padding: 9px 12px; background: #ffffff; border: 1px solid #bae6fd; border-radius: 8px; font-size: 12px; font-weight: 600; color: #0369a1; text-align: center; width: 100%; box-sizing: border-box;"><strong><span style="color:rgb(3, 105, 161);"><span style="font-size: 12px"><span style="background-color: rgb(255, 255, 255)">📅 Outlook · Teórica</span></span></span></strong></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                                      </td>
                                      <td colspan="1" rowspan="1" style="width:50%;padding-left:6px;vertical-align:top;text-align:center;" class="cal-td">
                                        <p><a href="https://outlook.live.com/calendar/0/deeplink/compose?subject=ECMO+Diploma+%E2%80%93+Certificaci%C3%B3n+Pr%C3%A1ctica&amp;startdt=2026-10-30T08:00:00&amp;enddt=2026-10-31T20:00:00&amp;location=Calz.+de+Tlalpan+4502%2C+Tlalpan%2C+CDMX&amp;path=%2Fcalendar%2Faction%2Fcompose&amp;rru=addevent" tabindex="-1" style="display: inline-block; padding: 9px 12px; background: #ffffff; border: 1px solid #bae6fd; border-radius: 8px; font-size: 12px; font-weight: 600; color: #0369a1; text-align: center; width: 100%; box-sizing: border-box;"><strong><span style="color:rgb(3, 105, 161);"><span style="font-size: 12px"><span style="background-color: rgb(255, 255, 255)">📅 Outlook · Práctica</span></span></span></strong></a> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
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
                  </tbody>
                </table>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="vertical-align:top;">
                        <p style="margin: 0 0 6px;"><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 15px">Sede del evento</span></span></strong></p>
                        <p style="margin: 0 0 10px; line-height: 1.65; mso-line-height-alt: 165%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px">📍 Instituto Nacional de Enfermedades Respiratorias (INER)<br>Calz. de Tlalpan 4502, Belisario Domínguez Secc 16,<br>Tlalpan, 14080 Ciudad de México, CDMX</span></span></p>
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:linear-gradient(90deg,#071a3d 0%,#123a8c 45%,#5b2ea6 75%,#c1124d 100%);border:1px solid #1e3a8a;border-radius:100px;text-align:center;">
                                <p><a href="https://www.google.com/maps/search/?api=1&amp;query=Instituto+Nacional+de+Enfermedades+Respiratorias+INER+Calzada+de+Tlalpan+4502+Ciudad+de+Mexico" tabindex="-1" style="display: inline-block; padding: 8px 18px; font-size: 12px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 12px"><span style="background-color: initial">🗺 Ver en Google Maps</span></span></span></strong></a><span style="background-color: initial"> </span></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 28px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">Estás a punto de comenzar una experiencia </span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">dinámica, práctica e innovadora</span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"> aprendiendo directamente de expertos globales. ¡Nos vemos muy pronto!</span></span></p>
                <table style="margin:0 0 14px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1">
                        <table cellspacing="0" cellpadding="0" class="btn-table" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:linear-gradient(90deg,#071a3d 0%,#123a8c 45%,#5b2ea6 75%,#c1124d 100%);border-radius:100px;text-align:center;">
                                <p><a href="https://healthcareexp.com" tabindex="-1" style="display: inline-block; padding: 14px 44px; font-size: 15px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 15px"><span style="background-color: initial">Conoce más sobre HCE</span></span></span></strong></a><span style="background-color: initial"> </span></p>
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
                              <td colspan="1" rowspan="1" style="background:linear-gradient(90deg,#071a3d 0%,#123a8c 45%,#5b2ea6 75%,#c1124d 100%);border-radius:100px;text-align:center;">
                                <p><a href="https://wa.me/5215659271906" tabindex="-1" style="display: inline-block; padding: 13px 36px; font-size: 14px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 14px"><span style="background-color: initial">✉ Contáctanos por WhatsApp</span></span></span></strong></a><span style="background-color: initial"> </span></p>
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
              <td colspan="1" rowspan="1" style="background:#ffffff;padding:20px 24px;border-top:1px solid #e2e8f0;text-align:center;">
                <p style="margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.12em; text-align: center;"><strong><span style="color:rgb(148, 163, 184);"><span style="font-size: 10px"><span style="background-color: rgb(255, 255, 255)">Aliados &amp; Colaboradores</span></span></span></strong></p>
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="width:33%;text-align:center;padding:6px;vertical-align:middle;">
                        <p><span style="background-color: rgb(255, 255, 255)"><img src="https://raw.githubusercontent.com/HCEDEV/imagenes/refs/heads/main/Logo_PraticoSant%C3%87Fichier%201.png" alt="Pratico" style="display: inline-block; width: 80px; height: 40px; object-fit: contain; border: 0px; max-width: 636px;" width="636" height="128"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p>
                      </td>
                      <td colspan="1" rowspan="1" style="width:33%;text-align:center;padding:6px;vertical-align:middle;">
                        <p><span style="background-color: rgb(255, 255, 255)"><img src="https://raw.githubusercontent.com/HCEDEV/imagenes/refs/heads/main/WhatsApp%20Image%202026-04-23%20at%208.43.13%20AM.jpeg" alt="Collaborator" style="display: inline-block; width: 80px; height: 40px; object-fit: contain; border: 0px; max-width: 636px;" width="636" height="175"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p>
                      </td>
                      <td colspan="1" rowspan="1" style="width:33%;text-align:center;padding:6px;vertical-align:middle;">
                        <p><span style="background-color: rgb(255, 255, 255)"><img src="https://raw.githubusercontent.com/HCEDEV/imagenes/refs/heads/main/65-1.png" alt="ECMO" style="display: inline-block; width: 80px; height: 40px; object-fit: contain; border: 0px; max-width: 636px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></p>
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
                      <td colspan="1" rowspan="1" style="background:linear-gradient(90deg,#123a8c 0%,#5b2ea6 60%,#c1124d 100%);border-radius:100px;text-align:center;">
                        <p><a href="https://healthcareexp.com/facturacion/" tabindex="-1" style="display: inline-block; padding: 12px 36px; font-size: 14px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 14px"><span style="background-color: initial">Facturar inversión</span></span></span></strong></a><span style="background-color: initial"> </span></p>
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

export default function EcmoBrevoEmail() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
