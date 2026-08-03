import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
  Section,
} from 'react-email';
import * as React from 'react';

interface CnadotEmailProps {
  firstName?: string;
}

export const CnadotEmail = ({ firstName = '*|FNAME|*' }: CnadotEmailProps) => (
  <Html>
    <Head />
    <Preview>¡Registro Exitoso! Tu solicitud se encuentra en revisión.</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Barra superior turquesa */}
        <div style={topBar} />

        {/* Logotipo */}
        <Section style={headerSection}>
          <Img
            src="https://cnadot.healthcareexp.com/assets/cnadot.png"
            alt="CNADOT Logo"
            width="280"
            style={logo}
          />
        </Section>

        {/* Banner llamativo de título */}
        <Section style={bannerSection}>
          <Heading style={bannerText}>¡Registro Exitoso!</Heading>
        </Section>

        {/* Cuerpo del correo */}
        <Section style={contentSection}>
          <Text style={paragraph}>Hola <strong>{firstName}</strong>,</Text>
          <Text style={paragraph}>
            Hemos recibido tu información correctamente y queremos agradecerte por tu interés en formar parte de nuestro modelo mexicano.
          </Text>

          {/* Caja resaltada en Turquesa */}
          <Section style={highlightBox}>
            <Text style={highlightText}>
              ⏳ Tu solicitud se encuentra en revisión.
            </Text>
          </Section>

          <Text style={paragraph}>
            Nuestro equipo evaluará cuidadosamente tus datos. Nos pondremos en contacto contigo a la brevedad posible a través de este medio para notificarte si cumples con el perfil de candidato y si el proceso procede a la siguiente fase.
          </Text>

          <Text style={paragraph}>
            Agradecemos mucho tu paciencia y tu compromiso.
          </Text>

          <Text style={signature}>
            Atentamente,<br />
            <span style={signatureName}>El equipo de CNADOT</span>
          </Text>
        </Section>

        {/* Pie de página oscuro */}
        <Section style={footerSection}>
          <Img
            src="https://cenatra.gob.mx/c/img/logos/CENATRA.png"
            alt="CENATRA Logo"
            width="200"
            style={footerLogo}
          />
          <Text style={footerText}>
            © *|CURRENT_YEAR|* CNADOT. Todos los derechos reservados.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default CnadotEmail;

const main = {
  backgroundColor: '#e5e9f0',
  padding: '40px 10px',
  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
};

const topBar = {
  backgroundColor: '#1ba1a5',
  height: '10px',
  width: '100%',
};

const headerSection = {
  textAlign: 'center' as const,
  padding: '40px 20px 30px 20px',
  backgroundColor: '#ffffff',
};

const logo = {
  maxWidth: '280px',
  height: 'auto',
  margin: '0 auto',
  border: 'none',
  outline: 'none',
};

const bannerSection = {
  background: 'linear-gradient(135deg, #1a4163, #2a689b)',
  textAlign: 'center' as const,
  padding: '35px 20px',
};

const bannerText = {
  margin: '0',
  fontSize: '28px',
  fontWeight: 'bold',
  letterSpacing: '1px',
  color: '#ffffff',
};

const contentSection = {
  padding: '40px',
  color: '#333333',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '1.8',
  margin: '0 0 15px 0',
};

const highlightBox = {
  backgroundColor: '#e9f7f7',
  borderLeft: '6px solid #1ba1a5',
  padding: '20px',
  margin: '30px 0',
  borderRadius: '4px',
};

const highlightText = {
  margin: '0',
  color: '#1a4163',
  fontSize: '18px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
};

const signature = {
  fontSize: '16px',
  lineHeight: '1.8',
  marginTop: '40px',
  marginBottom: '0',
};

const signatureName = {
  color: '#1ba1a5',
  fontSize: '22px',
  fontWeight: 'bold',
};

const footerSection = {
  backgroundColor: '#f8fafc',
  padding: '30px',
  textAlign: 'center' as const,
  borderTop: '1px solid #e2e8f0',
};

const footerLogo = {
  maxWidth: '200px',
  height: 'auto',
  margin: '0 auto 15px auto',
  border: 'none',
  outline: 'none',
};

const footerText = {
  margin: '0',
  color: '#4a5568',
  fontSize: '14px',
};
