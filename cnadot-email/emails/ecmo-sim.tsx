import * as React from 'react';

const rawHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Completa tu acceso al Simulador ECMO Sim</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap">
<style>   * {     font-family: 'Inter', Arial, sans-serif;   }    a {     text-decoration: none !important;     color: inherit;   }    @media only screen and (max-width: 600px) {     .email-wrapper {       padding: 12px 8px !important;     }      .email-card {       border-radius: 12px !important;     }      .header-cell {       padding: 28px 20px 24px !important;     }      .header-title {       font-size: 22px !important;     }      .body-cell {       padding: 24px 16px 24px !important;     }      .data-card-cell {       padding: 16px 14px !important;     }      .footer-cell {       padding: 22px 16px !important;     }   } </style>
</head>
<body style="margin: 0; padding: 0;">
<table style="background:#f1f5f9;padding:32px 16px;" width="100%" cellspacing="0" cellpadding="0" class="email-wrapper">
  <tbody>
    <tr>
      <td colspan="1" rowspan="1">
        <table style="max-width:600px;border-radius:16px;overflow:hidden;margin:0 auto;" width="100%" cellspacing="0" cellpadding="0">
          <tbody>
            <tr>
              <td colspan="1" rowspan="1" style="background:#0f172a;padding:44px 40px 36px;text-align:center;" class="header-cell">
                <p style="margin: 0 0 12px; letter-spacing: 0.15em; text-transform: uppercase;"><strong><span style="color:rgba(255, 255, 255, 0.5);"><span style="font-size: 11px"><span style="background-color: rgb(15, 23, 42)">Healthcare Training Experience</span></span></span></strong></p>
                <h1 class="header-title" style="margin: 0 0 24px; line-height: 1.25; mso-line-height-alt: 125%;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 26px"><span style="background-color: rgb(15, 23, 42)">Completa tu acceso al<br>Simulador ECMO Sim</span></span></span></strong></h1>
                <p style="margin: 10px 0 0; text-align: center;"><span style="background-color: rgb(15, 23, 42)"><img src="https://healthcareexp.com/assets/componentes/ecmosim-logo-new.png" alt="ECMO Sim Logo" style="height: 140px; width: auto; display: inline-block; max-width: 100%;"></span></p>
                <table style="margin:0 auto;" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr></tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#ffffff;padding:40px 40px 36px;" class="body-cell">
                <p style="margin: 0 0 16px; line-height: 1.7; mso-line-height-alt: 170%;"><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">Hola </span></span></span><strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">{{ contact.FIRSTNAME }}</span></span></span></strong><span style="color:rgb(30, 41, 59);"><span style="font-size: 16px"><span style="background-color: rgb(255, 255, 255)">,</span></span></span></p>
                <p style="margin: 0 0 14px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">¡Estás a un solo paso de ingresar a </span></span></span><strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">ECMO Sim</span></span></span></strong><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">, el videojuego clínico en 3D más avanzado para profesionales de la salud!</span></span></span></p>
                <p style="margin: 0 0 18px; line-height: 1.75; mso-line-height-alt: 175%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px"><span style="background-color: rgb(255, 255, 255)">Notamos que tu intento de pago no se completó, pero puedes retomarlo en cualquier momento para asegurar tu membresía al simulador y dominar las principales complicaciones en ECMO.</span></span></span></p>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="text-align:center;">
                        <table style="margin:0 auto;" cellspacing="0" cellpadding="0" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#f1c40f;border-radius:100px;text-align:center;">
                                <p style="margin: 0px;"><a href="https://healthcareexp.com/simulador-ecmo-sim" tabindex="-1" style="display: inline-block; padding: 14px 44px; font-size: 15px; font-weight: 700; color: #0b0c10; border-radius: 100px;"><strong><span style="color:rgb(11, 12, 16);"><span style="font-size: 15px"><span style="background-color: rgb(241, 196, 15)">JUEGA AHORA</span></span></span></strong></a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="padding:22px 24px;" class="data-card-cell">
                        <p style="margin: 0 0 14px; text-transform: uppercase; letter-spacing: 0.1em;"><strong><span style="color:rgb(183, 121, 31);"><span style="font-size: 11px"><span style="background-color: rgb(248, 250, 252)">Características de la Membresía</span></span></span></strong></p>
                        <p style="margin: 0 0 6px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">• </span></span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">Acceso Ilimitado 24/7</span></span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)"> a todos los escenarios clínicos virtuales</span></span></span></p>
                        <p style="margin: 0 0 6px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">• </span></span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">Fisiología Dinámica: </span></span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">interactiva y monitorización en tiempo real</span></span></span></p>
                        <p style="margin: 0px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">• </span></span></span><strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)">Acceso Remoto:</span></span></span></strong><span style="color:rgb(71, 85, 105);"><span style="font-size: 14px"><span style="background-color: rgb(248, 250, 252)"> Entra tú o tu equipo desde cualquier parte con solo una computadora o tablet e internet</span></span></span></p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0 0 16px; line-height: 1.75; mso-line-height-alt: 175%; text-align: center;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">¿Tienes dudas o necesitas asistencia? Escríbenos directamente:</span></span></p>
                <table style="margin:0 0 28px;" width="100%" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td colspan="1" rowspan="1" style="text-align:center;">
                        <table style="margin:0 auto;" cellspacing="0" cellpadding="0" align="center">
                          <tbody>
                            <tr>
                              <td colspan="1" rowspan="1" style="background:#25d366;border-radius:100px;text-align:center;">
                                <p style="margin: 0px;"><a href="https://wa.me/525659271906" tabindex="-1" style="display: inline-block; padding: 13px 36px; font-size: 14px; font-weight: 700; color: #ffffff; border-radius: 100px;"><strong><span style="color:rgb(255, 255, 255);"><span style="font-size: 14px"><span style="background-color: rgb(37, 211, 102)">✉ WhatsApp 56 5927 1906</span></span></span></strong></a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin: 0px; line-height: 1.6; mso-line-height-alt: 160%;"><span style="color:rgb(51, 65, 85);"><span style="font-size: 15px">Equipo de Admisiones<br>Healthcare Training Experience</span></span></p>
              </td>
            </tr>
            <tr>
              <td colspan="1" rowspan="1" style="background:#0f172a;padding:28px 40px;text-align:center;" class="footer-cell">
                <p style="margin: 0 0 6px;"><span style="color:rgba(255, 255, 255, 0.5);"><span style="font-size: 13px"><span style="background-color: rgb(15, 23, 42)">Healthcare Training Experience · </span></span></span><a href="mailto:academia@healthcareexp.com" tabindex="-1" style="color: rgba(255,255,255,0.5);"><span style="color:rgba(255, 255, 255, 0.5);"><span style="font-size: 13px"><span style="background-color: rgb(15, 23, 42)">academia@healthcareexp.com</span></span></span></a></p>
                <p style="margin: 0px;"><a href="https://healthcareexp.com" target="_blank" tabindex="-1" style="color: #ffffff;"><span style="color:rgb(255, 255, 255);"><span style="font-size: 12px"><span style="background-color: rgb(15, 23, 42)">www.healthcareexp.com</span></span></span></a></p>
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

export default function EcmoSimEmail() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
