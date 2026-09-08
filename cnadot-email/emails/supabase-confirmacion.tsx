import * as React from 'react';

const rawHtml = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirma tu dirección de correo electrónico</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f9fa; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f9fa; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Contenedor de la Tarjeta -->
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border: 1px solid #e0f2f1; border-radius: 16px; box-shadow: 0 8px 16px rgba(0, 188, 212, 0.04); overflow: hidden; max-width: 500px;">
          
          <!-- Logo en el Encabezado -->
          <tr>
            <td align="center" style="padding: 40px 40px 20px 40px; background-color: #ffffff; border-bottom: 1px solid #f0fdfa;">
              <img src="https://healthcareexp.com/assets/componentes/firma-hce.png" alt="HCE Logo" width="220" style="display: block; border: 0; outline: none; text-decoration: none;">
            </td>
          </tr>
          
          <!-- Contenido Principal -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 16px 0; color: #1e293b; font-size: 22px; font-weight: 700; line-height: 1.3; text-align: center;">
                Confirma tu cuenta
              </h2>
              
              <p style="margin: 0 0 24px 0; color: #475569; font-size: 15px; line-height: 1.6; text-align: center;">
                ¡Hola! Gracias por registrarte en el <strong>Portal Académico de Healthcare Training Experience</strong>. Sigue el enlace a continuación para verificar tu cuenta y activar tu acceso al material que tenemos preparado para ti.
              </p>
              
              <!-- Botón de Acción -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px 0;">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; background-color: #00bcd4; color: #ffffff; text-decoration: none; padding: 14px 32px; font-weight: bold; border-radius: 8px; font-size: 15px; border: none; box-shadow: 0 4px 12px rgba(0, 188, 212, 0.25);">
                      Confirmar Cuenta
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Línea divisora -->
              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="border-top: 1px solid #f1f5f9; padding: 20px 0 0 0;"></td>
                </tr>
              </table>
              
              <!-- Enlace alternativo en texto -->
              <p style="margin: 0; color: #64748b; font-size: 12px; line-height: 1.5; text-align: center;">
                Si el botón de arriba no funciona, copia y pega esta dirección URL en tu navegador web:
              </p>
              <p style="margin: 8px 0 0 0; color: #00bcd4; font-size: 12px; line-height: 1.5; text-align: center; word-break: break-all;">
                <a href="{{ .ConfirmationURL }}" target="_blank" style="color: #00bcd4; text-decoration: underline;">
                  {{ .ConfirmationURL }}
                </a>
              </p>
            </td>
          </tr>
          
          <!-- Pie de página (Footer) -->
          <tr>
            <td style="padding: 24px 30px; background-color: #f8fafc; border-top: 1px solid #f1f5f9; text-align: center;">
              <p style="margin: 0 0 6px 0; color: #94a3b8; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: bold;">
                Healthcare Training Experience
              </p>
              <p style="margin: 0; color: #94a3b8; font-size: 11px; line-height: 1.4;">
                Educación Médica Continua en Soporte Vital Avanzado y ECMO.<br>
                Este correo fue enviado de forma automática, por favor no respondas a este mensaje.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export default function SupabaseConfirmacionEmail() {
  return <div dangerouslySetInnerHTML={{ __html: rawHtml }} />;
}
